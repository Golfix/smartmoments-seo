/**
 * Quelles pages « service × ville » existent réellement pour une commune donnée.
 *
 * La couverture dépend de la population : inutile de publier huit pages de
 * prestations pour un village de 800 habitants. Cette logique vivait dans
 * `src/app/[serviceType]/[ville]/page.tsx` ; elle est partagée pour que la page
 * ville puisse lier ses propres pages service — et uniquement celles qui existent,
 * sans jamais produire de lien mort.
 */
import { serviceTypes, type ServiceType } from "@/data/service-types";

const TIER_1 = 30000;
const TIER_2 = 10000;
const TIER_3 = 5000;

const allSlugs = serviceTypes.map((s) => s.slug);
const tier2Slugs = ["organisation-mariage", "coordinatrice-jour-j", "decoration-mariage"];
const tier3Slugs = ["organisation-mariage"];

export function populationOf(city: { population: string }): number {
  return parseInt(city.population.replace(/\s/g, ""));
}

/** Slugs de services publiés pour cette population. */
export function serviceSlugsForPopulation(p: number): string[] {
  if (p >= TIER_1) return allSlugs;
  if (p >= TIER_2) return tier2Slugs;
  if (p >= TIER_3) return tier3Slugs;
  return [];
}

/** Fiches complètes des services publiés pour cette ville. */
export function servicesForCity(city: { population: string }): ServiceType[] {
  const slugs = new Set(serviceSlugsForPopulation(populationOf(city)));
  return serviceTypes.filter((s) => slugs.has(s.slug));
}
