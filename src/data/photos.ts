/**
 * Photothèque du site.
 *
 * Les photos sont hébergées EN LOCAL dans `public/images/photos/`.
 * Ne jamais pointer vers un CDN tiers : les anciennes URLs cdn0.mariages.net
 * ont été coupées côté serveur (403) et toutes les images du site avaient disparu.
 *
 * Pour ajouter des photos :
 *   1. déposer les fichiers dans `public/images/photos/`
 *   2. lancer `npm run photos:sync` (génère les entrées ci-dessous)
 *   3. compléter les `alt` — ils sont utilisés tels quels par les moteurs
 *
 * Tant que la liste est vide, le composant <Photo> affiche un panneau
 * décoratif aux couleurs de la marque : aucune image cassée, aucun trou
 * dans la mise en page.
 */

export interface Photo {
  /** Chemin public, ex. "/images/photos/ceremonie-laique-lyon.webp" */
  src: string;
  /** Texte alternatif descriptif — obligatoire */
  alt: string;
  /** Catégorie affichée dans la galerie */
  category: PhotoCategory;
  width: number;
  height: number;
}

export type PhotoCategory =
  | "Mariage"
  | "Cérémonie"
  | "Décoration"
  | "Détails"
  | "Ambiance"
  | "Photobooth";

/* --- DÉBUT LISTE GÉNÉRÉE (npm run photos:sync) --- */
export const photos: Photo[] = [
  {
    src: "/images/photos/ceremonie-vue-ensemble-arche-collines.webp",
    alt: "Vue d'ensemble d'une cérémonie en plein air : allée blanche, arche fleurie et collines en arrière-plan",
    category: "Cérémonie",
    width: 1600,
    height: 1067,
  },
  {
    src: "/images/photos/ambiance-salle-reception-soiree-eclairage-scenique.webp",
    alt: "Salle de réception en pierre le soir, tables rondes et compositions florales hautes sous éclairage scénique",
    category: "Ambiance",
    width: 1600,
    height: 1067,
  },
  {
    src: "/images/photos/ceremonie-arche-fleurie-roses-hortensias.webp",
    alt: "Arche de cérémonie fleurie de roses pastel et d'hortensias bleus sous des guirlandes guinguette",
    category: "Cérémonie",
    width: 1600,
    height: 1067,
  },
  {
    src: "/images/photos/decoration-salle-voutee-pierre-fauteuils-rotin.webp",
    alt: "Salle de réception voûtée en pierre, fauteuils en rotin et compositions florales sous jeux de lumière",
    category: "Décoration",
    width: 1600,
    height: 1067,
  },
  {
    src: "/images/photos/ceremonie-allee-fauteuils-rotin-arche-fleurie.webp",
    alt: "Allée de cérémonie laïque en extérieur, fauteuils en rotin et arche fleurie face aux collines",
    category: "Cérémonie",
    width: 1600,
    height: 1067,
  },
  {
    src: "/images/photos/mariage-couple-marches-pierre-bouquet.webp",
    alt: "Les mariés main dans la main sur un escalier en pierre, bouquet de fleurs des champs",
    category: "Mariage",
    width: 1600,
    height: 1067,
  },
  {
    src: "/images/photos/details-table-dressee-chandeliers-dores.webp",
    alt: "Table de réception dressée devant un mur en pierre, chandeliers dorés et menus personnalisés",
    category: "Détails",
    width: 1600,
    height: 1067,
  },
  {
    src: "/images/photos/mariage-sortie-des-maries-devant-la-mairie.webp",
    alt: "Sortie des mariés devant la mairie, bouquet levé au milieu des invités",
    category: "Mariage",
    width: 1600,
    height: 1067,
  },
  {
    src: "/images/photos/ceremonie-rangees-chaises-bistrot-exterieur.webp",
    alt: "Rangées de chaises bistrot en bois installées pour une cérémonie en extérieur",
    category: "Cérémonie",
    width: 1600,
    height: 1067,
  },
  {
    src: "/images/photos/details-cocktail-mini-burgers-traiteur.webp",
    alt: "Plateau de mini-burgers servi au cocktail de réception",
    category: "Détails",
    width: 1600,
    height: 1067,
  },
  {
    src: "/images/photos/mariage-ceremonie-civile-mairie.webp",
    alt: "Façade de mairie pavoisée le jour d'une cérémonie civile",
    category: "Mariage",
    width: 1600,
    height: 1067,
  },
];
/* --- FIN LISTE GÉNÉRÉE --- */

export const hasPhotos = photos.length > 0;

/** Image de partage par défaut — asset de marque, toujours disponible. */
export const OG_DEFAULT = {
  url: "https://www.smartmoments.fr/images/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Smart Moments Event — wedding planner et organisateur d'événements à Lyon",
} as const;

/** Logo de l'organisation pour le balisage Schema.org (le .ico n'est pas accepté par Google). */
export const ORG_LOGO = {
  url: "https://www.smartmoments.fr/images/Logo.webp",
  width: 512,
  height: 512,
} as const;

/**
 * Sélection déterministe d'une photo dans la photothèque.
 * `seed` fait varier le choix d'une page à l'autre sans aléatoire (build stable).
 * Renvoie `null` quand la photothèque est vide : <Photo> bascule alors sur le décor de marque.
 */
export function photoAt(seed: number, offset = 0): Photo | null {
  if (photos.length === 0) return null;
  const i = (Math.abs(seed) + offset) % photos.length;
  return photos[i];
}

/** Photos d'une catégorie donnée (galerie). */
export function photosByCategory(category: PhotoCategory): Photo[] {
  return photos.filter((p) => p.category === category);
}
