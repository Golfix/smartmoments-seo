import { cities, type City } from "./cities";

export interface Department {
  name: string;
  slug: string;
  region: string;
  cities: City[];
}

function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['']/g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

// Build departments from cities data
const deptMap = new Map<string, { name: string; region: string; cities: City[] }>();

for (const city of cities) {
  const existing = deptMap.get(city.department);
  if (existing) {
    existing.cities.push(city);
  } else {
    deptMap.set(city.department, {
      name: city.department,
      region: city.region,
      cities: [city],
    });
  }
}

export const departments: Department[] = Array.from(deptMap.values())
  .map((d) => ({
    name: d.name,
    slug: slugify(d.name),
    region: d.region,
    cities: d.cities.sort(
      (a, b) =>
        parseInt(b.population.replace(/\s/g, "")) -
        parseInt(a.population.replace(/\s/g, ""))
    ),
  }))
  .sort((a, b) => b.cities.length - a.cities.length);

export function getDepartmentBySlug(slug: string): Department | undefined {
  return departments.find((d) => d.slug === slug);
}

export function getDepartmentsByRegion(region: string): Department[] {
  return departments.filter((d) => d.region === region);
}
