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
export const photos: Photo[] = [];
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
