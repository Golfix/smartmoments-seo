#!/usr/bin/env node
/**
 * Soumet les URLs du sitemap à la Google Indexing API.
 *
 * Usage:
 *   node scripts/submit-to-google.mjs           # soumet les 200 URLs prioritaires
 *   node scripts/submit-to-google.mjs --all     # soumet tout (attention au quota !)
 *   node scripts/submit-to-google.mjs --limit 50
 */

import crypto from "node:crypto";
import fs from "node:fs";
import https from "node:https";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CREDS_PATH = path.join(__dirname, "indexing-credentials.json");
const SITEMAP_URL = "https://www.smartmoments.fr/sitemap.xml";

// ---- Parse args ----
const args = process.argv.slice(2);
const all = args.includes("--all");
const limitIdx = args.indexOf("--limit");
const customLimit = limitIdx !== -1 ? parseInt(args[limitIdx + 1], 10) : null;
const DAILY_QUOTA = customLimit ?? (all ? 5000 : 200);

// ---- Helpers ----
function httpsRequest(options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve({ status: res.statusCode, body: data, json: data ? JSON.parse(data) : null });
        } catch {
          resolve({ status: res.statusCode, body: data, json: null });
        }
      });
    });
    req.on("error", reject);
    if (body) req.write(body);
    req.end();
  });
}

function base64url(buf) {
  return Buffer.from(buf).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

// ---- Auth : JWT → access token ----
async function getAccessToken(creds) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: creds.client_email,
    scope: "https://www.googleapis.com/auth/indexing",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  const unsigned = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(payload))}`;
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(unsigned);
  const signature = base64url(signer.sign(creds.private_key));
  const jwt = `${unsigned}.${signature}`;

  const body = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: jwt,
  }).toString();

  const res = await httpsRequest(
    {
      hostname: "oauth2.googleapis.com",
      path: "/token",
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded", "Content-Length": body.length },
    },
    body
  );

  if (res.status !== 200) {
    throw new Error(`Auth failed: ${res.status} ${res.body}`);
  }
  return res.json.access_token;
}

// ---- Fetch sitemap ----
async function fetchSitemap() {
  const url = new URL(SITEMAP_URL);
  const res = await httpsRequest({
    hostname: url.hostname,
    path: url.pathname,
    method: "GET",
    headers: { "User-Agent": "smartmoments-indexer/1.0" },
  });
  if (res.status !== 200) throw new Error(`Sitemap fetch failed: ${res.status}`);
  const urls = [...res.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  return urls;
}

// ---- Prioriser les URLs ----
function prioritize(urls) {
  const score = (u) => {
    // Homepage
    if (u === "https://www.smartmoments.fr" || u === "https://www.smartmoments.fr/") return 1000;

    // Pages principales
    if (/\/(wedding-planner|contact|avis|a-propos|services|blog|galerie)$/.test(u)) return 900;

    // Service mariage/decoration etc.
    if (/\/services\/[^/]+$/.test(u)) return 850;

    // Lyon (toutes pages Lyon en priorité)
    if (u.includes("/lyon")) return 800;

    // Grandes villes ARA
    if (/\/(grenoble|annecy|chambery|saint-etienne|valence|villeurbanne|bourg-en-bresse)(\/|$)/.test(u)) return 750;

    // PACA grandes villes
    if (/\/(marseille|aix-en-provence|nice|toulon|avignon|cannes)(\/|$)/.test(u)) return 720;

    // Paris + autres métropoles
    if (/\/(paris|bordeaux|toulouse|montpellier|lille|nantes|strasbourg)(\/|$)/.test(u)) return 700;

    // Pages service×ville
    if (/\/(organisation-mariage|coordinatrice-jour-j|decoration-mariage|photobooth-mariage|organisation-bapteme|organisation-anniversaire|seminaire-entreprise|organisation-bar-mitzvah)\//.test(u)) return 600;

    // Pages département
    if (u.includes("/departement/")) return 550;

    // Pages blog
    if (u.includes("/blog/")) return 500;

    // Pages thème
    if (u.includes("/style/")) return 450;

    // Pages ville standard
    if (u.includes("/wedding-planner/")) return 400;

    return 300;
  };

  return urls.map((u) => ({ url: u, score: score(u) })).sort((a, b) => b.score - a.score);
}

// ---- Submit a URL ----
async function submitUrl(url, token) {
  const body = JSON.stringify({ url, type: "URL_UPDATED" });
  const res = await httpsRequest(
    {
      hostname: "indexing.googleapis.com",
      path: "/v3/urlNotifications:publish",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Length": Buffer.byteLength(body),
      },
    },
    body
  );
  return res;
}

// ---- Main ----
async function main() {
  if (!fs.existsSync(CREDS_PATH)) {
    console.error(`❌ Credentials introuvables: ${CREDS_PATH}`);
    process.exit(1);
  }
  const creds = JSON.parse(fs.readFileSync(CREDS_PATH, "utf8"));

  console.log("🔐 Authentification Google…");
  const token = await getAccessToken(creds);
  console.log("✓ Token OK\n");

  console.log("📥 Lecture du sitemap…");
  const urls = await fetchSitemap();
  console.log(`✓ ${urls.length} URLs trouvées\n`);

  const prioritized = prioritize(urls).slice(0, DAILY_QUOTA);
  console.log(`🎯 Soumission des ${prioritized.length} URLs prioritaires à Google…\n`);

  let success = 0;
  let errors = 0;
  let quotaExceeded = false;

  for (let i = 0; i < prioritized.length; i++) {
    const { url, score } = prioritized[i];
    const res = await submitUrl(url, token);

    if (res.status === 200) {
      success++;
      process.stdout.write(`\r✓ ${i + 1}/${prioritized.length} — ${success} OK, ${errors} erreurs`);
    } else if (res.status === 429 || (res.json?.error?.message || "").includes("quota")) {
      quotaExceeded = true;
      console.log(`\n⚠️  Quota épuisé à ${success} URLs. Réessaie demain.`);
      break;
    } else {
      errors++;
      if (errors <= 3) console.log(`\n✗ [${score}] ${url} → ${res.status}: ${res.json?.error?.message || res.body}`);
    }

    // Rate limit: 600 req/min max
    if ((i + 1) % 10 === 0) await new Promise((r) => setTimeout(r, 1000));
  }

  console.log(`\n\n📊 Résumé:`);
  console.log(`   ✓ ${success} URLs soumises avec succès`);
  console.log(`   ✗ ${errors} erreurs`);
  if (quotaExceeded) {
    console.log(`\n💡 Relance le script demain pour les URLs suivantes.`);
  } else if (prioritized.length < urls.length) {
    console.log(`\n💡 ${urls.length - prioritized.length} URLs restantes — augmente la limite avec --limit ou --all.`);
  }
}

main().catch((err) => {
  console.error("\n❌ Erreur:", err.message);
  process.exit(1);
});
