/**
 * Anciens slugs de villes fusionnés vers leur slug canonique.
 *
 * 24 communes étaient présentes deux fois dans `cities.ts` sous deux slugs
 * (`dardilly` / `dardilly-69`, `saint-heand` / `saint-heand-42` / `saint-heand-steph`…),
 * ce qui publiait deux pages quasi identiques pour la même ville. Les entrées
 * en double ont été supprimées ; ces URL étant présentes dans le sitemap depuis
 * des mois, elles sont redirigées en 301 plutôt que renvoyées en 404.
 *
 * Attention : 6 homonymes ont été CONSERVÉS car ils désignent des communes
 * réellement distinctes (Villars Loire / Villars Vaucluse, Chessy Rhône /
 * Chessy Seine-et-Marne, Maubec Vaucluse / Maubec Isère, Simiane-la-Rotonde,
 * Entrevaux, Corps). Leurs départements respectifs restent à faire vérifier.
 */
export const cityRedirects: [from: string, to: string][] = [
  ["vincennes-idf", "vincennes"],
  ["sainte-genevieve-des-bois-91", "sainte-genevieve-des-bois"],
  ["montluel-01", "montluel"],
  ["villars-les-dombes", "villars-dombes"],
  ["tullins-38", "tullins"],
  ["dardilly-69", "dardilly"],
  ["condrieu-69", "condrieu"],
  ["marcy-l-etoile", "marcy-etoile"],
  ["saint-paul-de-vence-06", "saint-paul-de-vence"],
  ["ventabren-13", "ventabren"],
  ["colombier-saugnieu-69", "colombier-saugnieu"],
  ["fleurieu-sur-saone", "fleurieu-saone"],
  ["civrieux-d-azergues", "civrieux-azergues"],
  ["theize-69", "theize"],
  ["lans-en-vercors", "lans-vercors"],
  ["champ-sur-drac", "champ-drac"],
  ["renaison-42", "renaison"],
  ["chazelles-sur-lyon", "chazelles-lyon"],
  ["saint-heand-42", "saint-heand"],
  ["saint-heand-steph", "saint-heand"],
  ["meyrargues-13", "meyrargues"],
  ["ternand-69", "ternand"],
  ["lancie-69", "lancie"],
  ["lorette-42", "lorette"],
];

/** Préfixes de routes qui portent un segment ville. */
export const cityRoutePrefixes = [
  "wedding-planner",
  "organisation-mariage",
  "coordinatrice-jour-j",
  "decoration-mariage",
  "photobooth-mariage",
  "organisation-bapteme",
  "organisation-anniversaire",
  "seminaire-entreprise",
  "organisation-bar-mitzvah",
];
