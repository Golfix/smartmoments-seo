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
  /**
   * Orientation du fichier. Les héros du site font toute la largeur : y placer
   * une photo verticale la recadre au point d'en perdre le sujet. `photoAt`
   * s'en sert pour ne piocher que dans le bon format.
   */
  orientation: "landscape" | "portrait";
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
    src: "/images/photos/ceremonie-laique-canons-confettis-arche-fleurie.webp",
    alt: "Cérémonie laïque en extérieur : les mariés s'embrassent sous l'arche fleurie tandis que les canons à confettis multicolores explosent devant les invités",
    category: "Cérémonie",
    orientation: "landscape",
    width: 1920,
    height: 1280,
  },
  {
    src: "/images/photos/ceremonie-arche-fleurie-fauteuils-rotin-allee-miroir.webp",
    alt: "Arche de cérémonie fleurie et fauteuils en rotin au bout d'une allée miroir bordée de chaises blanches, dans un parc arboré",
    category: "Cérémonie",
    orientation: "landscape",
    width: 1920,
    height: 1281,
  },
  {
    src: "/images/photos/ambiance-feu-artifice-chateau-piece-montee.webp",
    alt: "Feu d'artifice illuminant la façade du château pendant que les mariés découvrent leur pièce montée",
    category: "Ambiance",
    orientation: "landscape",
    width: 1920,
    height: 1280,
  },
  {
    src: "/images/photos/mariage-couple-baiser-orangerie.webp",
    alt: "Les mariés s'embrassent sous la verrière d'une orangerie, robe en dentelle et costume beige",
    category: "Mariage",
    orientation: "portrait",
    width: 1400,
    height: 2100,
  },
  {
    src: "/images/photos/ceremonie-parc-arbore-rangees-chaises-blanches.webp",
    alt: "Vue d'ensemble d'une cérémonie laïque dressée dans un parc arboré : arche fleurie, allée blanche et rangées de chaises",
    category: "Cérémonie",
    orientation: "landscape",
    width: 1920,
    height: 1280,
  },
  {
    src: "/images/photos/decoration-composition-florale-haute-couleurs.webp",
    alt: "Composition florale haute en hortensias, roses et dahlias posée sur un vase de réception",
    category: "Décoration",
    orientation: "portrait",
    width: 1400,
    height: 2100,
  },
  {
    src: "/images/photos/mariage-couple-parc-robe-traine.webp",
    alt: "Les mariés enlacés dans le parc du domaine, robe à longue traîne et bouquet de fleurs des champs",
    category: "Mariage",
    orientation: "portrait",
    width: 1400,
    height: 2100,
  },
  {
    src: "/images/photos/ambiance-lancer-du-bouquet-cour-chateau.webp",
    alt: "Lancer du bouquet dans la cour d'un château, entourée des invitées en robes de couleur",
    category: "Ambiance",
    orientation: "landscape",
    width: 1920,
    height: 1281,
  },
  {
    src: "/images/photos/details-bouquet-mariee-escarpins-fauteuil.webp",
    alt: "Bouquet de la mariée et escarpins posés sur un fauteuil en velours vert",
    category: "Détails",
    orientation: "portrait",
    width: 1400,
    height: 2100,
  },
  {
    src: "/images/photos/ceremonie-arche-fleurie-vue-rapprochee.webp",
    alt: "Arche de cérémonie couverte de fleurs colorées encadrant deux fauteuils en rotin face aux invités",
    category: "Cérémonie",
    orientation: "portrait",
    width: 1400,
    height: 2100,
  },
  {
    src: "/images/photos/ambiance-fontaines-lumineuses-soiree.webp",
    alt: "Fontaines lumineuses en fin de soirée devant les mariés enlacés",
    category: "Ambiance",
    orientation: "portrait",
    width: 1400,
    height: 2100,
  },
  {
    src: "/images/photos/decoration-plan-de-table-cadres-fleurs.webp",
    alt: "Plan de table décoratif en panneaux blancs, miroirs anciens et cadres photo, souligné de compositions florales colorées",
    category: "Décoration",
    orientation: "portrait",
    width: 1400,
    height: 2100,
  },
  {
    src: "/images/photos/mariage-preparatifs-mariee-robe-dentelle.webp",
    alt: "Préparatifs de la mariée devant le miroir, dos en dentelle et composition florale en premier plan",
    category: "Mariage",
    orientation: "portrait",
    width: 1400,
    height: 2100,
  },
  {
    src: "/images/photos/ambiance-haie-honneur-invites-noir-et-blanc.webp",
    alt: "Haie d'honneur des invités bras levés à l'entrée des mariés dans la salle de réception, en noir et blanc",
    category: "Ambiance",
    orientation: "landscape",
    width: 1920,
    height: 1280,
  },
  {
    src: "/images/photos/mariage-mariee-fenetre-traine-noir-et-blanc.webp",
    alt: "La mariée de dos devant une fenêtre, longue traîne déployée sur le sol, en noir et blanc",
    category: "Mariage",
    orientation: "portrait",
    width: 1400,
    height: 2100,
  },
  {
    src: "/images/photos/details-nom-de-table-menu-verres.webp",
    alt: "Nom de table calligraphié sur chevalet au milieu des verres et des menus d'un couvert de réception",
    category: "Détails",
    orientation: "portrait",
    width: 1400,
    height: 2100,
  },
  {
    src: "/images/photos/mariage-preparatifs-demoiselles-honneur.webp",
    alt: "Les demoiselles d'honneur entourent la mariée pendant les préparatifs, en noir et blanc",
    category: "Mariage",
    orientation: "portrait",
    width: 1400,
    height: 2100,
  },
  {
    src: "/images/photos/details-accessoires-marie-noeud-papillon-montre.webp",
    alt: "Accessoires du marié disposés à plat : souliers, montre, nœud papillon et boutons de manchette",
    category: "Détails",
    orientation: "portrait",
    width: 1400,
    height: 2100,
  },
  {
    src: "/images/photos/details-cocktails-bar-reception.webp",
    alt: "Cocktails préparés au bar de la réception, dans des verres givrés",
    category: "Détails",
    orientation: "portrait",
    width: 1400,
    height: 2100,
  },
  {
    src: "/images/photos/ambiance-patrouille-avions-ciel.webp",
    alt: "Les mariés lèvent les yeux vers une patrouille d'avions au-dessus du domaine",
    category: "Ambiance",
    orientation: "landscape",
    width: 1920,
    height: 1280,
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
export function photoAt(
  seed: number,
  offset = 0,
  prefer?: "landscape" | "portrait"
): Photo | null {
  // On restreint au format demandé quand il existe des photos de ce format,
  // sinon on repart sur la photothèque entière plutôt que de ne rien afficher.
  const pool = prefer ? photos.filter((p) => p.orientation === prefer) : photos;
  const list = pool.length > 0 ? pool : photos;
  if (list.length === 0) return null;
  return list[(Math.abs(seed) + offset) % list.length];
}

/** Photos d'une catégorie donnée (galerie). */
export function photosByCategory(category: PhotoCategory): Photo[] {
  return photos.filter((p) => p.category === category);
}
