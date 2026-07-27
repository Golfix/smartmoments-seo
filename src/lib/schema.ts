/**
 * Balisage Schema.org centralisé.
 *
 * Toutes les pages référencent la même entité via `ORG_ID` au lieu de redéclarer
 * un `LocalBusiness` partiel — Google recoupe ainsi les 3 831 pages sur une seule
 * entité, au lieu de 3 831 fiches anonymes.
 *
 * Règle : ne JAMAIS déclarer d'`aggregateRating` ici. Les avis affichés proviennent
 * de Mariages.net ; Google exclut les notes auto-déclarées sur LocalBusiness et
 * Organization des résultats enrichis, et le balisage expose à une action manuelle.
 * Le lien `sameAs` vers le profil Mariages.net est la façon correcte de rattacher
 * ces avis à l'entité.
 */
import { ORG_LOGO } from "@/data/photos";

export const SITE_URL = "https://www.smartmoments.fr";
export const ORG_ID = `${SITE_URL}/#organization`;

/** Coordonnées de l'établissement — identiques à celles affichées sur /contact. */
export const NAP = {
  name: "Smart Moments Event",
  streetAddress: "85 Rue André Bollier",
  postalCode: "69007",
  addressLocality: "Lyon",
  addressRegion: "Auvergne-Rhône-Alpes",
  addressCountry: "FR",
  telephone: "+33756987181",
  email: "smartmomentsevent@gmail.com",
  latitude: 45.7387,
  longitude: 4.8357,
} as const;

/** Profils externes vérifiés (repris du pied de page). */
export const SAME_AS = [
  "https://www.instagram.com/weddingplanner.smartmoments/",
  "https://www.mariages.net/organisation-mariage/smart-moments--e306698",
];

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: NAP.streetAddress,
  postalCode: NAP.postalCode,
  addressLocality: NAP.addressLocality,
  addressRegion: NAP.addressRegion,
  addressCountry: NAP.addressCountry,
};

/**
 * L'entité de référence. Déclarée une seule fois, dans le layout racine.
 * Les autres pages y renvoient avec `providerRef()`.
 */
export const organizationJsonLd = {
  "@type": ["Organization", "LocalBusiness"],
  "@id": ORG_ID,
  name: NAP.name,
  alternateName: "Smart Moments",
  url: SITE_URL,
  description:
    "Wedding planner et organisateur d'événements haut de gamme à Lyon. Organisation de mariage clé en main, coordination jour J, décoration et photobooth.",
  logo: {
    "@type": "ImageObject",
    url: ORG_LOGO.url,
    width: ORG_LOGO.width,
    height: ORG_LOGO.height,
  },
  image: ORG_LOGO.url,
  telephone: NAP.telephone,
  email: NAP.email,
  address: postalAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: NAP.latitude,
    longitude: NAP.longitude,
  },
  priceRange: "€€€",
  currenciesAccepted: "EUR",
  sameAs: SAME_AS,
  areaServed: [
    { "@type": "AdministrativeArea", name: "Auvergne-Rhône-Alpes" },
    { "@type": "AdministrativeArea", name: "Provence-Alpes-Côte d'Azur" },
    { "@type": "AdministrativeArea", name: "Île-de-France" },
    { "@type": "AdministrativeArea", name: "Bourgogne-Franche-Comté" },
  ],
};

/** Référence courte vers l'entité, à utiliser comme `provider` d'un Service. */
export function providerRef() {
  return { "@id": ORG_ID };
}

/**
 * Bloc `Service` d'une page ville/prestation.
 * `areaName` est la zone réellement couverte par la page (ville ou département).
 */
export function serviceJsonLd({
  name,
  description,
  serviceType,
  areaName,
  areaType = "City",
  url,
  lowPrice = 1500,
}: {
  name: string;
  description: string;
  serviceType: string;
  areaName: string;
  areaType?: "City" | "AdministrativeArea";
  url: string;
  lowPrice?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url,
    provider: providerRef(),
    areaServed: { "@type": areaType, name: areaName },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: lowPrice,
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        minPrice: lowPrice,
        valueAddedTaxIncluded: true,
      },
      availability: "https://schema.org/InStock",
      url,
    },
  };
}
