#!/usr/bin/env node
/**
 * Régénère la liste des photos de `src/data/photos.ts` à partir des fichiers
 * réellement présents dans `public/images/photos/`.
 *
 *   npm run photos:sync
 *
 * Convention de nommage des fichiers (le tiret sépare catégorie et description) :
 *   <categorie>-<description-libre>.<ext>
 *   ex. ceremonie-arche-fleurie-domaine-beaujolais.webp
 *
 * Catégories reconnues : mariage, ceremonie, decoration, details, ambiance, photobooth
 *
 * ⚠️ Ce script écrase l'ordre de la liste. La galerie affiche les photos dans
 * l'ordre du manifeste : après un sync, replacer les plus fortes en tête.
 * (à défaut, la photo est classée « Mariage »).
 *
 * Le `alt` est pré-rempli depuis le nom de fichier — il DOIT être relu et
 * complété à la main : c'est ce texte que lisent Google Images et les lecteurs d'écran.
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, extname, basename } from "node:path";
import { execFileSync } from "node:child_process";

const PHOTOS_DIR = "public/images/photos";
const MANIFEST = "src/data/photos.ts";
const EXT = new Set([".webp", ".jpg", ".jpeg", ".png", ".avif"]);

const CATEGORIES = {
  mariage: "Mariage",
  ceremonie: "Cérémonie",
  decoration: "Décoration",
  details: "Détails",
  ambiance: "Ambiance",
  photobooth: "Photobooth",
};

/** Dimensions réelles du fichier, via `sips` (macOS) puis repli sur un ratio 3:2. */
function dimensions(file) {
  try {
    const out = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", file], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
    const w = out.match(/pixelWidth:\s*(\d+)/);
    const h = out.match(/pixelHeight:\s*(\d+)/);
    if (w && h) return { width: Number(w[1]), height: Number(h[1]) };
  } catch {
    /* sips absent (CI Linux) — on retombe sur le ratio par défaut */
  }
  return { width: 1600, height: 1067 };
}

if (!existsSync(PHOTOS_DIR)) {
  console.error(`Dossier introuvable : ${PHOTOS_DIR}`);
  process.exit(1);
}

const files = readdirSync(PHOTOS_DIR)
  .filter((f) => EXT.has(extname(f).toLowerCase()))
  .sort();

const entries = files.map((f) => {
  const stem = basename(f, extname(f));
  const [head, ...rest] = stem.split("-");
  const category = CATEGORIES[head.toLowerCase()] ?? "Mariage";
  const words = (CATEGORIES[head.toLowerCase()] ? rest : stem.split("-")).join(" ");
  const alt = words ? words.charAt(0).toUpperCase() + words.slice(1) : stem;
  const { width, height } = dimensions(join(PHOTOS_DIR, f));
  // L'orientation pilote le choix des visuels : un bandeau pleine largeur ne
  // doit pas recevoir une photo verticale, et inversement pour les colonnes.
  const orientation = width >= height ? "landscape" : "portrait";
  return `  {
    src: "/images/photos/${f}",
    alt: ${JSON.stringify(alt)},
    category: ${JSON.stringify(category)},
    orientation: ${JSON.stringify(orientation)},
    width: ${width},
    height: ${height},
  },`;
});

const block =
  entries.length === 0
    ? "export const photos: Photo[] = [];"
    : `export const photos: Photo[] = [\n${entries.join("\n")}\n];`;

const source = readFileSync(MANIFEST, "utf8");
const START = "/* --- DÉBUT LISTE GÉNÉRÉE (npm run photos:sync) --- */";
const END = "/* --- FIN LISTE GÉNÉRÉE --- */";
const i = source.indexOf(START);
const j = source.indexOf(END);
if (i === -1 || j === -1) {
  console.error(`Marqueurs de génération introuvables dans ${MANIFEST}`);
  process.exit(1);
}

writeFileSync(
  MANIFEST,
  `${source.slice(0, i + START.length)}\n${block}\n${source.slice(j)}`,
  "utf8"
);

console.log(
  entries.length === 0
    ? `Aucune photo dans ${PHOTOS_DIR}/ — le site affiche le décor de marque.`
    : `${entries.length} photo(s) déclarée(s) dans ${MANIFEST}. Pensez à relire les textes alternatifs.`
);
