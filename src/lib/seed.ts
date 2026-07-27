/**
 * Graines déterministes pour les gabarits programmatiques.
 *
 * Le rendu est statique : aucun aléatoire n'est permis, sinon deux builds
 * successifs produiraient des pages différentes. Toute variation (photo,
 * formulation, ordre) dérive du slug via `hashCode`.
 */
export function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

/** Choisit un élément d'une liste de façon stable pour un slug donné. */
export function pick<T>(arr: T[], slug: string, offset = 0): T {
  return arr[(hashCode(slug) + offset) % arr.length];
}
