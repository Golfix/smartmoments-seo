#!/usr/bin/env node
/**
 * Contrôle SEO des pages réellement générées, à lancer APRÈS `npm run build`.
 *
 *   npm run check:seo
 *
 * Vérifie sur chaque page statique produite par Next :
 *   - title      ≤ 60 caractères, présent, sans marque en double
 *   - description 120–160 caractères, présente
 *   - canonique  présente
 *   - og:image   présente (non héritée quand une page redéfinit openGraph)
 *   - aucune image appelée depuis un CDN tiers (le hotlink mariages.net
 *     avait fait disparaître toutes les photos du site sans alerte)
 *   - aucun aggregateRating auto-déclaré dans le balisage
 *   - titles et H1 strictement dupliqués entre deux URL
 *
 * Sort en code 1 si un contrôle bloquant échoue.
 */
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = ".next/server/app";
const MAX_TITLE = 60;
const MIN_DESC = 120;
const MAX_DESC = 160;

if (!existsSync(ROOT)) {
  console.error(`${ROOT} introuvable — lancez d'abord \`npm run build\`.`);
  process.exit(1);
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (entry.endsWith(".html")) out.push(full);
  }
  return out;
}

const decode = (s) =>
  s
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;|&#34;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#x2F;/g, "/");

const files = walk(ROOT);
const issues = { title: [], desc: [], canonical: [], cdn: [], rating: [], brand: [], og: [] };
const titles = new Map();
const h1s = new Map();
let checked = 0;

for (const file of files) {
  const html = readFileSync(file, "utf8");
  const url = "/" + relative(ROOT, file).replace(/\.html$/, "").replace(/^index$/, "");
  // /_global-error est une page interne de Next, jamais servie ni indexable.
  if (url.startsWith("/_global-error")) continue;
  checked++;

  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? "";
  const h1 = decode((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "").replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();

  if (!title || title.length > MAX_TITLE) issues.title.push(`${url} [${title.length}] ${title}`);
  if ((title.match(/Smart Moments/g) ?? []).length > 1) issues.brand.push(`${url} ${title}`);
  if (!desc || desc.length < MIN_DESC || desc.length > MAX_DESC)
    issues.desc.push(`${url} [${desc.length}]`);
  if (!canonical) issues.canonical.push(url);
  // Next ne fusionne pas `openGraph` : une page qui redéfinit ce bloc sans
  // `images` perd l'image de partage héritée du layout racine.
  if (!/<meta property="og:image"/.test(html)) issues.og.push(url);
  if (/https:\/\/cdn\d*\.mariages\.net|static\.wixstatic\.com/.test(html)) issues.cdn.push(url);
  if (/"aggregateRating"/.test(html)) issues.rating.push(url);

  if (title) (titles.get(title) ?? titles.set(title, []).get(title)).push(url);
  if (h1) (h1s.get(h1) ?? h1s.set(h1, []).get(h1)).push(url);
}

const dupTitles = [...titles.entries()].filter(([, v]) => v.length > 1);
const dupH1 = [...h1s.entries()].filter(([, v]) => v.length > 1);

const report = (label, list, limit = 8) => {
  if (list.length === 0) return console.log(`  OK   ${label}`);
  console.log(`  ÉCHEC ${label} — ${list.length}`);
  list.slice(0, limit).forEach((l) => console.log(`         ${l}`));
  if (list.length > limit) console.log(`         … ${list.length - limit} de plus`);
};

console.log(`\nContrôle SEO — ${checked} pages générées\n`);

// Un build vide passerait tous les contrôles par vacuité : c'est le cas le plus
// dangereux, celui d'un build cassé qu'on déploierait en croyant l'avoir vérifié.
if (checked < 3000) {
  console.error(
    `\nBUILD INCOMPLET : ${checked} pages seulement, ${3000} attendues au minimum.` +
      `\nRelancez \`npm run build\` avant de déployer.\n`
  );
  process.exit(1);
}
report(`titles ≤ ${MAX_TITLE} caractères`, issues.title);
report("marque non dupliquée dans le title", issues.brand);
report(`descriptions ${MIN_DESC}–${MAX_DESC} caractères`, issues.desc);
report("canonique présente", issues.canonical);
report("og:image présente", issues.og);
report("aucune image depuis un CDN tiers", issues.cdn);
report("aucun aggregateRating auto-déclaré", issues.rating);
report(
  "titles uniques",
  dupTitles.map(([t, v]) => `${v.length}× « ${t} » → ${v.slice(0, 3).join(", ")}`)
);
report(
  "H1 uniques",
  dupH1.map(([t, v]) => `${v.length}× « ${t} » → ${v.slice(0, 3).join(", ")}`)
);

// Bloquants : ce qui casse l'affichage en SERP ou l'indexation.
const blocking =
  issues.title.length +
  issues.brand.length +
  issues.canonical.length +
  issues.og.length +
  issues.cdn.length +
  issues.rating.length +
  dupTitles.length;

console.log(
  blocking === 0
    ? "\nTous les contrôles bloquants passent.\n"
    : `\n${blocking} problème(s) bloquant(s).\n`
);
process.exit(blocking === 0 ? 0 : 1);
