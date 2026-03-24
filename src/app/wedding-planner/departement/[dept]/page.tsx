import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { departments, getDepartmentBySlug, getDepartmentsByRegion } from "@/data/departments";

// Deterministic hash for content variation
function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function pick<T>(arr: T[], slug: string, offset = 0): T {
  return arr[(hashCode(slug) + offset) % arr.length];
}

const heroImages = [
  "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41-3_3_306698-168546594978953.jpeg",
  "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-40-1_3_306698-168546595086946.jpeg",
  "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42-1_3_306698-168546594928335.jpeg",
  "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41_3_306698-168546595030467.jpeg",
  "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-30-at-10-54-55-1_3_306698-168563709678965.jpeg",
];

// Region-specific descriptions for richer content
const regionDescriptions: Record<string, string[]> = {
  "Île-de-France": [
    "au cœur de la région parisienne, entre patrimoine historique et modernité",
    "dans la région la plus dynamique de France, riche en lieux de réception prestigieux",
    "à proximité de Paris, offrant un choix incomparable de domaines et châteaux",
  ],
  "Auvergne-Rhône-Alpes": [
    "entre montagnes majestueuses et vallées verdoyantes, un cadre naturel exceptionnel",
    "au carrefour des Alpes et du Massif Central, une région aux paysages grandioses",
    "dans une région alliant gastronomie, nature et patrimoine pour des mariages mémorables",
  ],
  "Provence-Alpes-Côte d'Azur": [
    "baignée de soleil méditerranéen, entre lavande et oliviers",
    "sur la Côte d'Azur et en Provence, des décors de rêve pour votre mariage",
    "dans le sud de la France, une lumière unique et des paysages à couper le souffle",
  ],
  "Occitanie": [
    "entre Méditerranée et Pyrénées, une terre de caractère et de traditions",
    "du Canal du Midi aux plages de la Méditerranée, un territoire riche en contrastes",
    "dans le sud-ouest de la France, une région chaleureuse aux multiples facettes",
  ],
  "Nouvelle-Aquitaine": [
    "de l'Atlantique aux vignobles, une région aux paysages variés et enchanteurs",
    "entre océan, vignobles et campagne, des cadres idylliques pour célébrer votre union",
    "dans le plus vaste territoire de France, une diversité de lieux exceptionnels",
  ],
  "Grand Est": [
    "entre traditions alsaciennes et champagne, une région au charme authentique",
    "aux portes de l'Europe, une terre de patrimoine et de gastronomie raffinée",
    "dans l'est de la France, entre vignobles, forêts et patrimoine architectural remarquable",
  ],
  "Hauts-de-France": [
    "dans le nord de la France, une terre d'accueil chaleureuse et festive",
    "entre beffrois et plaines, une région au patrimoine riche et à l'hospitalité légendaire",
    "au nord de Paris, des cadres variés alliant campagne, littoral et patrimoine industriel",
  ],
  "Bretagne": [
    "entre terre et mer, une région à l'identité forte et aux paysages spectaculaires",
    "sur les côtes bretonnes, des décors maritimes uniques pour un mariage inoubliable",
    "dans l'ouest de la France, une terre de légendes aux panoramas époustouflants",
  ],
  "Normandie": [
    "entre falaises, bocage et plages du Débarquement, un patrimoine naturel unique",
    "dans cette terre d'histoire, des manoirs et châteaux normands pour votre mariage",
    "à deux pas de Paris, une région verdoyante aux traditions gastronomiques renommées",
  ],
  "Pays de la Loire": [
    "au fil de la Loire, entre châteaux, vignobles et douceur de vivre",
    "dans la vallée de la Loire, un patrimoine classé UNESCO pour vos célébrations",
    "entre océan Atlantique et châteaux de la Loire, des cadres féeriques",
  ],
  "Centre-Val de Loire": [
    "au cœur des châteaux de la Loire, un patrimoine royal pour votre mariage",
    "dans le jardin de la France, entre vignobles et monuments historiques",
    "sur les rives de la Loire, des domaines d'exception pour célébrer votre amour",
  ],
  "Bourgogne-Franche-Comté": [
    "au cœur des vignobles bourguignons, entre patrimoine et art de vivre",
    "dans une région réputée pour sa gastronomie et ses domaines viticoles",
    "entre Bourgogne et Jura, des paysages vallonnés et une tradition d'excellence",
  ],
  "Corse": [
    "sur l'île de Beauté, entre mer turquoise et montagnes sauvages",
    "en Corse, un cadre méditerranéen d'exception pour un mariage unique",
    "sur cette île paradisiaque, des plages et des montagnes pour un mariage de rêve",
  ],
};

function getRegionDescription(region: string, slug: string): string {
  const descriptions = regionDescriptions[region] || [
    "dans une région riche en patrimoine et en lieux de réception",
    "une terre d'exception pour célébrer votre union",
    "dans un cadre unique pour un mariage à votre image",
  ];
  return pick(descriptions, slug);
}

// Generate department-specific intro paragraphs
function generateDeptIntro(dept: { name: string; slug: string; region: string; cities: { name: string }[] }) {
  const h = hashCode(dept.slug);
  const cityCount = dept.cities.length;
  const topCities = dept.cities.slice(0, 3).map((c) => c.name);
  const topCitiesStr = topCities.length > 1
    ? topCities.slice(0, -1).join(", ") + " et " + topCities[topCities.length - 1]
    : topCities[0];

  const intros = [
    {
      p1: `Smart Moments Event est votre wedding planner de référence en ${dept.name}. Notre équipe de coordinatrices intervient dans l'ensemble du département, ${getRegionDescription(dept.region, dept.slug)}. Nous accompagnons les couples dans l'organisation de leur mariage, de la première consultation jusqu'au jour J.`,
      p2: `Avec ${cityCount} villes couvertes en ${dept.name}, dont ${topCitiesStr}, nous connaissons parfaitement le territoire et ses lieux de réception. Châteaux, domaines viticoles, salles de prestige, jardins privatifs : notre carnet d'adresses local est un atout précieux pour votre organisation.`,
      p3: `Que vous envisagiez un mariage intimiste ou une grande célébration, notre coordinatrice de mariage en ${dept.name} s'adapte à vos envies et votre budget. Nous mettons notre expertise au service de votre bonheur pour créer un événement qui vous ressemble.`,
    },
    {
      p1: `Vous planifiez votre mariage en ${dept.name} ? Smart Moments Event vous propose un accompagnement sur mesure ${getRegionDescription(dept.region, dept.slug)}. Notre agence de wedding planning intervient sur tout le département pour organiser des mariages élégants et personnalisés.`,
      p2: `Notre connaissance du ${dept.name} et de la ${dept.region} nous permet de vous guider vers les meilleurs prestataires locaux. De ${topCitiesStr}, nous avons tissé un réseau de partenaires de confiance : traiteurs, photographes, fleuristes et DJ qui partagent notre exigence de qualité.`,
      p3: `En tant qu'organisatrice de mariage en ${dept.name}, nous prenons en charge chaque détail : recherche de lieu, conception de la décoration, coordination des prestataires et pilotage du jour J. ${cityCount} villes, un seul objectif : faire de votre mariage un moment d'exception.`,
    },
    {
      p1: `Basée à Lyon et intervenant dans toute la France, notre équipe de wedding planners est particulièrement active en ${dept.name}. ${getRegionDescription(dept.region, dept.slug).charAt(0).toUpperCase() + getRegionDescription(dept.region, dept.slug).slice(1)}, le département offre un cadre remarquable pour les mariages.`,
      p2: `De ${topCitiesStr} aux communes plus confidentielles, nous explorons chaque recoin du ${dept.name} pour trouver le lieu de réception idéal. Avec ${cityCount} villes dans notre périmètre d'intervention, nous avons une vision complète de l'offre événementielle du département.`,
      p3: `Notre rôle de coordinatrice mariage va bien au-delà de la logistique. Nous créons une expérience unique pour chaque couple, en tenant compte des spécificités du ${dept.name} et de ses traditions. De l'organisation complète à la coordination jour J, nous sommes à vos côtés.`,
    },
    {
      p1: `Organiser un mariage en ${dept.name}, c'est choisir un département aux multiples atouts, ${getRegionDescription(dept.region, dept.slug)}. Smart Moments Event met son savoir-faire de wedding planner au service des couples qui souhaitent célébrer leur union dans ce territoire d'exception.`,
      p2: `Notre équipe sillonne le ${dept.name} depuis des années : nous connaissons les ${cityCount} villes où nous intervenons, de ${topCitiesStr} aux villages les plus charmants. Cette expertise locale est votre garantie d'un mariage réussi, avec des prestataires triés sur le volet.`,
      p3: `Coordination jour J, organisation complète ou décoration haut de gamme : nos formules s'adaptent à chaque projet de mariage en ${dept.name}. Contactez-nous pour une première consultation gratuite et découvrez comment nous pouvons sublimer votre célébration.`,
    },
  ];

  return intros[h % intros.length];
}

// Generate 3 FAQ specific to the department
function generateDeptFaq(dept: { name: string; slug: string; region: string; cities: { name: string }[] }) {
  const h = hashCode(dept.slug);
  const topCity = dept.cities[0]?.name || dept.name;
  const cityCount = dept.cities.length;

  const allFaq = [
    {
      q: `Quel est le prix d'un wedding planner en ${dept.name} ?`,
      a: `Nos formules de wedding planning en ${dept.name} démarrent à partir de 200 euros pour une coordination jour J. L'organisation complète et la décoration haut de gamme sont proposées sur devis personnalisé. Le budget dépend du nombre d'invités, du lieu de réception et des prestations souhaitées. Nous vous offrons une première consultation gratuite pour évaluer votre projet et établir un devis adapté.`,
    },
    {
      q: `Quels sont les meilleurs lieux de mariage en ${dept.name} ?`,
      a: `Le ${dept.name} regorge de lieux de réception exceptionnels : châteaux historiques, domaines viticoles, granges rénovées, hôtels de charme et espaces en plein air. Autour de ${topCity} et dans l'ensemble du département, nous avons référencé des dizaines de lieux adaptés à tous les styles et budgets. Notre carnet d'adresses local vous fait gagner un temps précieux dans vos recherches.`,
    },
    {
      q: `Intervenez-vous dans tout le ${dept.name} ?`,
      a: `Oui, Smart Moments Event intervient dans l'ensemble du ${dept.name}, couvrant ${cityCount} villes dont ${topCity}. Basées à Lyon, nos coordinatrices se déplacent dans tout le département et plus largement en ${dept.region}. Que votre mariage ait lieu en ville ou à la campagne, nous assurons la même qualité de service.`,
    },
    {
      q: `Comment choisir son wedding planner en ${dept.name} ?`,
      a: `Pour choisir votre wedding planner en ${dept.name}, vérifiez son expérience dans le département, ses avis clients, sa connaissance des prestataires locaux et le feeling lors du premier rendez-vous. Chez Smart Moments Event, nous proposons une consultation gratuite pour échanger sur votre projet. Notre note de 4.6/5 et notre réseau en ${dept.region} témoignent de notre engagement.`,
    },
    {
      q: `Quels types de mariage organisez-vous en ${dept.name} ?`,
      a: `En ${dept.name}, nous organisons tous les styles de mariage : champêtre, bohème, romantique, chic, industriel ou minimaliste. Le département offre des cadres variés qui se prêtent à toutes les ambiances. Que ce soit un mariage intime de 30 personnes ou une grande célébration de 300 invités, nous adaptons notre organisation à vos envies.`,
    },
    {
      q: `Proposez-vous la décoration de mariage en ${dept.name} ?`,
      a: `Absolument. Notre service de wedding design en ${dept.name} comprend la scénographie complète de votre mariage : arches fleuries, compositions florales, décoration de table, mise en lumière et mobilier. Nous travaillons avec les meilleurs fleuristes et décorateurs du département pour créer une ambiance unique et raffinée.`,
    },
  ];

  // Select 3 unique FAQ
  const indices: number[] = [];
  let i = 0;
  while (indices.length < 3 && i < 15) {
    const idx = (h + i * 5) % allFaq.length;
    if (!indices.includes(idx)) indices.push(idx);
    i++;
  }

  return indices.map((idx) => allFaq[idx]);
}

export function generateStaticParams() {
  return departments.map((dept) => ({ dept: dept.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ dept: string }>;
}): Promise<Metadata> {
  const { dept } = await params;
  const department = getDepartmentBySlug(dept);
  if (!department) return {};

  const h = hashCode(department.slug);

  const titles = [
    `Wedding Planner ${department.name} | Organisation Mariage en ${department.name}`,
    `Organisatrice de Mariage en ${department.name} | Smart Moments Event`,
    `Wedding Planner en ${department.name} - Coordinatrice Mariage ${department.region}`,
    `Organisation Mariage ${department.name} | Coordinatrice Jour J`,
  ];

  const descriptions = [
    `Wedding planner en ${department.name} : organisation de mariage, coordination jour J et décoration haut de gamme. ${department.cities.length} villes couvertes en ${department.region}. Devis gratuit.`,
    `Votre organisatrice de mariage en ${department.name}. Smart Moments Event intervient dans ${department.cities.length} villes du département pour des mariages sur mesure. Consultation offerte.`,
    `Coordinatrice mariage en ${department.name} (${department.region}). Organisation complète, jour J et décoration. Noté 4.6/5. Devis personnalisé gratuit.`,
    `Wedding planner en ${department.name}, ${department.region}. De ${department.cities[0]?.name || department.name} à tout le département, organisation de mariage clé en main. Devis offert.`,
  ];

  const title = titles[h % titles.length];
  const description = descriptions[h % descriptions.length];

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.smartmoments.fr/wedding-planner/departement/${department.slug}`,
    },
    openGraph: {
      title: `Wedding Planner ${department.name} | Smart Moments Event`,
      description,
      url: `https://www.smartmoments.fr/wedding-planner/departement/${department.slug}`,
      images: [
        {
          url: heroImages[0],
          width: 960,
          height: 640,
          alt: `Wedding Planner ${department.name} - Smart Moments Event`,
        },
      ],
    },
  };
}

export default async function DepartmentWeddingPlannerPage({
  params,
}: {
  params: Promise<{ dept: string }>;
}) {
  const { dept } = await params;
  const department = getDepartmentBySlug(dept);
  if (!department) notFound();

  const h = hashCode(department.slug);
  const heroImage = heroImages[h % heroImages.length];
  const intro = generateDeptIntro(department);
  const faq = generateDeptFaq(department);

  // Other departments in the same region
  const sameRegionDepts = getDepartmentsByRegion(department.region).filter(
    (d) => d.slug !== department.slug
  );

  // H1 variations
  const h1 = pick(
    [
      { pre: "Wedding Planner", styled: `en ${department.name}` },
      { pre: "Organisation Mariage", styled: `en ${department.name}` },
      { pre: "Coordinatrice Mariage", styled: `en ${department.name}` },
      { pre: "Votre Wedding Planner", styled: `en ${department.name}` },
    ],
    department.slug
  );

  const subtitle = pick(
    [
      `Organisation de mariage sur mesure en ${department.name}, ${department.region}.`,
      `Coordinatrice jour J en ${department.name}. ${department.cities.length} villes couvertes.`,
      `Votre organisatrice de mariage en ${department.name}. Devis gratuit.`,
      `Wedding planning haut de gamme en ${department.name} et ${department.region}.`,
    ],
    department.slug,
    1
  );

  const faqH2 = pick(
    [
      `Questions fréquentes sur le wedding planning en ${department.name}`,
      `Tout savoir sur l'organisation de mariage en ${department.name}`,
      `FAQ : votre wedding planner en ${department.name}`,
    ],
    department.slug,
    2
  );

  const ctaH2 = pick(
    [
      { line1: `Votre mariage en ${department.name}`, line2: "commence ici" },
      { line1: "Prête pour le plus", line2: "beau jour de votre vie ?" },
      { line1: "Organisons ensemble", line2: `votre mariage en ${department.name}` },
      { line1: "Votre rêve de mariage", line2: `prend vie en ${department.name}` },
    ],
    department.slug,
    3
  );

  // JSON-LD schemas
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Wedding Planner ${department.name} - Smart Moments Event`,
    provider: {
      "@type": "LocalBusiness",
      name: "Smart Moments Event",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lyon",
        addressRegion: "Rhône-Alpes",
        postalCode: "69007",
        addressCountry: "FR",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        reviewCount: "25",
        bestRating: "5",
      },
    },
    serviceType: "Wedding Planning",
    areaServed: {
      "@type": "AdministrativeArea",
      name: department.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: department.region,
      },
    },
    description: `Wedding planner et coordinatrice de mariage en ${department.name} (${department.region}). Organisation mariage, coordination jour J et décoration. ${department.cities.length} villes couvertes.`,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: "200",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://www.smartmoments.fr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Wedding Planner",
        item: "https://www.smartmoments.fr/wedding-planner",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: department.name,
        item: `https://www.smartmoments.fr/wedding-planner/departement/${department.slug}`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: "Wedding Planner", href: "/wedding-planner" },
          { label: department.name },
        ]}
      />

      {/* Hero - 45vh, smaller than city pages */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={`${h1.pre} ${h1.styled} - Organisation de mariage en ${department.name}, ${department.region}`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/60 via-taupe/30 to-taupe/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
            <p className="text-gold text-[10px] uppercase tracking-[0.5em]">
              {pick(
                ["Wedding Planner", "Organisation Mariage", "Coordinatrice Mariage", "Organisatrice Mariage"],
                department.slug,
                4
              )}{" "}
              {department.name}
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-[0.95]">
            {h1.pre}
            <br />
            <span className="text-gold-gradient italic">{h1.styled}</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            {subtitle}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* Intro section */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="luxury-line-left mb-6" />
              <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
                {pick(
                  [
                    `Wedding planner en ${department.name}`,
                    `Organisation mariage en ${department.name}`,
                    `Coordinatrice mariage ${department.name}`,
                    `Votre organisatrice en ${department.name}`,
                  ],
                  department.slug,
                  5
                )}
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-8 leading-tight">
                {pick(
                  [
                    <>Votre wedding planner<br /><span className="text-gold-gradient italic">en {department.name}</span></>,
                    <>Organisatrice de mariage<br /><span className="text-gold-gradient italic">en {department.name}</span></>,
                    <>Organisation de mariage<br /><span className="text-gold-gradient italic">{department.name} ({department.region})</span></>,
                  ],
                  department.slug,
                  6
                )}
              </h2>
              <p className="text-taupe-soft leading-relaxed mb-6">
                {intro.p1}
              </p>
              <p className="text-taupe-soft leading-relaxed mb-6">
                {intro.p2}
              </p>
              <p className="text-taupe-soft leading-relaxed">
                {intro.p3}
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={heroImages[(h + 2) % heroImages.length]}
                  alt={`Décoration mariage ${department.name} ${department.region}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-gold/30" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b border-l border-gold/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-28 bg-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              {department.cities.length} villes couvertes
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              {pick(
                [
                  `Nos interventions en ${department.name}`,
                  `Wedding planner dans tout le ${department.name}`,
                  `Organisation de mariage en ${department.name}`,
                  `Villes couvertes en ${department.name}`,
                ],
                department.slug,
                7
              )}
            </h2>
            <p className="text-taupe-light leading-relaxed">
              {pick(
                [
                  `Découvrez toutes les villes du ${department.name} où Smart Moments Event organise des mariages. Cliquez sur une ville pour en savoir plus.`,
                  `Notre équipe de wedding planners intervient dans chaque ville du ${department.name}. Sélectionnez votre ville pour découvrir nos services sur place.`,
                  `De la plus grande métropole au village le plus charmant, nous couvrons l'ensemble du ${department.name} pour votre mariage.`,
                ],
                department.slug,
                8
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {department.cities.map((city) => (
              <Link
                key={city.slug}
                href={`/wedding-planner/${city.slug}`}
                className="group luxury-card bg-white border border-gold/10 p-8 hover:border-gold transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-heading font-bold text-taupe group-hover:text-gold transition-colors">
                    {city.name}
                  </h3>
                  <span className="text-[10px] text-taupe-light uppercase tracking-wider whitespace-nowrap ml-3">
                    {city.population} hab.
                  </span>
                </div>
                <p className="text-taupe-soft text-sm leading-relaxed mb-4">
                  {city.name}, {city.description}. Découvrez nos services de wedding planning sur place.
                </p>
                <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] group-hover:tracking-[0.4em] transition-all">
                  Découvrir
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Questions fréquentes
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe">
              {faqH2}
            </h2>
          </div>
          <div className="space-y-6">
            {faq.map((f) => (
              <details
                key={f.q}
                className="group border border-gold/10 bg-white"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-heading font-semibold text-taupe text-base pr-4">
                    {f.q}
                  </h3>
                  <svg
                    className="w-5 h-5 text-gold shrink-0 group-open:rotate-45 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <div className="h-[1px] bg-gradient-to-r from-gold/20 to-transparent mb-4" />
                  <p className="text-taupe-soft text-sm leading-relaxed">
                    {f.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other departments in the same region */}
      {sameRegionDepts.length > 0 && (
        <section className="py-20 bg-champagne">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe">
                {pick(
                  [
                    `Wedding planner en ${department.region}`,
                    `Organisation de mariage en ${department.region}`,
                    `Nos interventions en ${department.region}`,
                    `Coordinatrice mariage en ${department.region}`,
                  ],
                  department.slug,
                  9
                )}
              </h2>
              <p className="text-taupe-light mt-4">
                {pick(
                  [
                    `Découvrez nos services de wedding planning dans les autres départements de ${department.region}`,
                    `Nous intervenons également dans ces départements de ${department.region}`,
                    `Smart Moments Event couvre toute la ${department.region} pour votre mariage`,
                  ],
                  department.slug,
                  10
                )}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {sameRegionDepts.map((d) => (
                <Link
                  key={d.slug}
                  href={`/wedding-planner/departement/${d.slug}`}
                  className="border border-gold/20 bg-white px-5 py-2.5 text-[11px] text-taupe-soft uppercase tracking-[0.15em] hover:border-gold hover:text-gold transition-all duration-300"
                >
                  {d.name} ({d.cities.length} villes)
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImages[(h + 3) % heroImages.length]}
            alt={`Organisation mariage ${department.name} ${department.region}`}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/60 via-taupe/40 to-taupe/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <div className="luxury-line mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-[1.1]">
            {ctaH2.line1}
            <br />
            <span className="text-gold-gradient italic">{ctaH2.line2}</span>
          </h2>
          <p className="text-white/50 text-lg mb-12 font-light">
            {pick(
              [
                "Première consultation gratuite et sans engagement.",
                "Rencontrons-nous pour parler de votre projet. Consultation offerte.",
                "Contactez-nous pour un premier échange gratuit sur votre mariage.",
                "Échangeons sur votre projet. Premier rendez-vous offert.",
              ],
              department.slug,
              11
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-luxury bg-gold text-white px-12 py-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gold-dark transition-colors"
            >
              Demander un Devis Gratuit
            </Link>
            <a
              href="tel:0756987181"
              className="btn-luxury border border-white/30 text-white px-12 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-white/10 transition-all"
            >
              07 56 98 71 81
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
