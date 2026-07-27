/**
 * Contraintes de longueur des métadonnées.
 *
 * Google tronque l'affichage du title autour de 60 caractères et celui de la
 * meta description autour de 160. L'audit de juillet 2026 a mesuré que
 * **100 % des 1 455 pages ville** dépassaient 60 caractères (médiane 88,
 * maximum 131) : le gabarit " | Smart Moments Event Lyon" (27 caractères)
 * s'ajoutait à des titres déjà complets.
 *
 * Les aides ci-dessous garantissent la contrainte *par construction* : on part
 * d'une base courte et on n'ajoute les compléments (département, région) que
 * s'ils tiennent. Le script `npm run check:seo` vérifie ensuite les 3 831 pages.
 */

/** Suffixe ajouté par le `template` du layout racine. */
export const TITLE_SUFFIX = " | Smart Moments";
export const MAX_TITLE = 60;
/** Budget restant pour le titre propre à la page. */
export const MAX_TITLE_BASE = MAX_TITLE - TITLE_SUFFIX.length;

export const MIN_DESCRIPTION = 120;
export const MAX_DESCRIPTION = 158;

/** Mots vides qui ne doivent jamais terminer un titre coupé (« … Mariage La »). */
const TRAILING_STOPWORDS =
  /(?:\s+(?:à|a|de|du|des|le|la|les|l|d|en|et|sur|sous|pour|par|au|aux))+$/i;

/** Coupe sur la dernière frontière de mot avant `max`. Jamais au milieu d'un mot. */
function clampWords(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const space = cut.lastIndexOf(" ");
  const trimmed = space > max * 0.6 ? cut.slice(0, space) : cut;
  return trimmed.replace(/[\s,;:–-]+$/, "").replace(TRAILING_STOPWORDS, "");
}

/**
 * Construit un titre en ajoutant les compléments tant qu'ils tiennent.
 * Chaque complément porte son propre séparateur, ex. `" (Rhône)"`, `" - Lyon"`.
 *
 * La base elle-même peut dépasser le budget quand un nom de commune est long
 * (« Coordination Jour J Ambérieu-en-Bugey et environs » = 48 caractères) :
 * le résultat est alors recoupé sur une frontière de mot, de sorte que
 * l'invariant « ≤ MAX_TITLE_BASE » tienne quelle que soit la donnée d'entrée.
 */
export function fitTitle(base: string, ...optional: string[]): string {
  let title = clampWords(base.trim(), MAX_TITLE_BASE);
  for (const extra of optional) {
    const candidate = `${title}${extra}`;
    if (candidate.length <= MAX_TITLE_BASE) title = candidate;
  }
  return title;
}

/**
 * Renvoie le premier candidat qui tient dans le budget, sinon le dernier recoupé.
 * À utiliser quand plusieurs formulations sont possibles et qu'on préfère une
 * phrase entière plus courte à une phrase longue tronquée.
 */
export function pickFittingTitle(...candidates: string[]): string {
  for (const c of candidates) {
    if (c.length <= MAX_TITLE_BASE) return c;
  }
  return clampWords(candidates[candidates.length - 1] ?? "", MAX_TITLE_BASE);
}

/**
 * Assemble une description en enchaînant les phrases tant que le budget le permet.
 * Aucune coupure au milieu d'un mot : une phrase passe entièrement, ou pas du tout.
 * La base est recoupée si elle dépasse à elle seule.
 */
export function fitDescription(base: string, ...optional: string[]): string {
  let desc = clampWords(base.trim(), MAX_DESCRIPTION);
  for (const extra of optional) {
    const candidate = `${desc} ${extra.trim()}`.trim();
    if (candidate.length <= MAX_DESCRIPTION) desc = candidate;
  }
  // Plancher : une description sous 120 caractères est jugée trop maigre.
  // Les noms de communes courts (Apt, Gex, Fréjus) faisaient tomber certaines
  // variantes à 116–119 caractères. On complète alors avec la première mention
  // de marque qui tient encore — une seule, jamais deux.
  if (desc.length < MIN_DESCRIPTION) {
    for (const tail of BRAND_TAILS) {
      const candidate = `${desc} ${tail}`;
      if (candidate.length <= MAX_DESCRIPTION) return candidate;
    }
  }
  return desc;
}

/** Compléments de marque, du plus complet au plus court. */
const BRAND_TAILS = [
  "Smart Moments Event, wedding planner et organisateur d'événements à Lyon.",
  "Smart Moments Event, wedding planner à Lyon.",
  "Par Smart Moments Event, wedding planner à Lyon.",
  "Smart Moments Event, agence événementielle.",
  "Smart Moments Event, Lyon.",
];
