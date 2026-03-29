import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { cities, getCityBySlug } from "@/data/cities";
import { serviceTypes, getServiceTypeBySlug } from "@/data/service-types";
import { departments } from "@/data/departments";

// ─── Helpers ────────────────────────────────────────────────────────────────

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

function pop(city: { population: string }): number {
  return parseInt(city.population.replace(/\s/g, ""));
}

function cityCategory(city: { population: string }): "metropole" | "grande" | "moyenne" | "petite" | "village" {
  const p = pop(city);
  if (p >= 200000) return "metropole";
  if (p >= 50000) return "grande";
  if (p >= 15000) return "moyenne";
  if (p >= 5000) return "petite";
  return "village";
}

function tpl(
  template: string,
  city: { name: string; department: string; region: string; nearbyCity: string; description: string; population: string }
): string {
  return template
    .replace(/\{city\}/g, city.name)
    .replace(/\{department\}/g, city.department)
    .replace(/\{region\}/g, city.region)
    .replace(/\{nearbyCity\}/g, city.nearbyCity)
    .replace(/\{description\}/g, city.description)
    .replace(/\{population\}/g, city.population);
}

// ─── Tiers ──────────────────────────────────────────────────────────────────

const tier1Threshold = 30000;
const tier2Threshold = 10000;
const tier3Threshold = 5000;

const allSlugs = serviceTypes.map((s) => s.slug);
const tier2Slugs = ["organisation-mariage", "coordinatrice-jour-j", "decoration-mariage"];
const tier3Slugs = ["organisation-mariage"];

function tierSlugsForPop(p: number): string[] {
  if (p >= tier1Threshold) return allSlugs;
  if (p >= tier2Threshold) return tier2Slugs;
  if (p >= tier3Threshold) return tier3Slugs;
  return [];
}

// ─── Static params ──────────────────────────────────────────────────────────

export function generateStaticParams() {
  const params: { serviceType: string; ville: string }[] = [];
  for (const city of cities) {
    for (const slug of tierSlugsForPop(pop(city))) {
      params.push({ serviceType: slug, ville: city.slug });
    }
  }
  return params;
}

// ─── Metadata ───────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceType: string; ville: string }>;
}): Promise<Metadata> {
  const { serviceType: serviceSlug, ville } = await params;
  const city = getCityBySlug(ville);
  const service = getServiceTypeBySlug(serviceSlug);
  if (!city || !service) return {};

  const cat = cityCategory(city);
  const h = hashCode(city.slug + service.slug);

  const titles: Record<string, string[]> = {
    metropole: [
      `${service.name} ${city.name} | Organisation Haut de Gamme`,
      tpl(service.metaTitle, city),
      `${service.name} ${city.name} - Expert en ${city.region}`,
    ],
    grande: [
      tpl(service.metaTitle, city),
      `${service.name} ${city.name} (${city.department}) | Smart Moments`,
      `${service.name} ${city.name} - Smart Moments Event`,
    ],
    moyenne: [
      tpl(service.metaTitle, city),
      `${service.name} ${city.name} et ${city.nearbyCity} | ${city.department}`,
      `${service.name} ${city.name} - ${city.department}`,
    ],
    petite: [
      `${service.name} ${city.name} et environs | ${city.department}`,
      tpl(service.metaTitle, city),
      `${service.name} ${city.name} (${city.department})`,
    ],
    village: [
      `${service.name} ${city.name} (${city.department}) | ${city.region}`,
      tpl(service.metaTitle, city),
      `${service.name} ${city.name} et alentours`,
    ],
  };

  const descriptions: Record<string, string[]> = {
    metropole: [
      tpl(service.metaDescription, city),
      `${service.name} haut de gamme a ${city.name}. Smart Moments Event, votre partenaire en ${city.region}. Note 4.6/5. Devis gratuit.`,
      `${service.name} a ${city.name} (${city.department}). De la planification au jour J, Smart Moments Event organise votre evenement de A a Z. Consultation offerte.`,
    ],
    grande: [
      tpl(service.metaDescription, city),
      `${service.name} a ${city.name} par Smart Moments Event. Intervention dans tout le ${city.department}. Devis offert.`,
      `Votre ${service.name.toLowerCase()} a ${city.name}, ${city.description}. Smart Moments Event. Consultation gratuite.`,
    ],
    moyenne: [
      tpl(service.metaDescription, city),
      `${service.name} a ${city.name} et ${city.nearbyCity}. Smart Moments Event en ${city.department}. Devis personnalise offert.`,
    ],
    petite: [
      tpl(service.metaDescription, city),
      `${service.name} a ${city.name} et ses environs en ${city.department}. Smart Moments Event. Devis gratuit.`,
    ],
    village: [
      tpl(service.metaDescription, city),
      `${service.name} a ${city.name} et alentours (${city.department}). Smart Moments Event en ${city.region}.`,
    ],
  };

  const title = titles[cat][h % titles[cat].length];
  const description = descriptions[cat][h % descriptions[cat].length];

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.smartmoments.fr/${service.slug}/${city.slug}`,
    },
    openGraph: {
      title: `${service.name} ${city.name} | Smart Moments Event`,
      description,
      url: `https://www.smartmoments.fr/${service.slug}/${city.slug}`,
      images: [
        {
          url: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41-3_3_306698-168546594978953.jpeg",
          width: 960,
          height: 640,
          alt: `${service.name} ${city.name} - Smart Moments Event`,
        },
      ],
    },
  };
}

// ─── Data ───────────────────────────────────────────────────────────────────

const heroImages = [
  "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41-3_3_306698-168546594978953.jpeg",
  "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-40-1_3_306698-168546595086946.jpeg",
  "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42-1_3_306698-168546594928335.jpeg",
  "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41_3_306698-168546595030467.jpeg",
  "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-30-at-10-54-55-1_3_306698-168563709678965.jpeg",
];

const featureIcons = [
  "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
  "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
];

// ─── Intro generation ───────────────────────────────────────────────────────

function generateIntro(
  city: { name: string; slug: string; department: string; region: string; description: string; nearbyCity: string; population: string },
  service: { name: string; slug: string; intro: string },
) {
  const cat = cityCategory(city);
  const h = hashCode(city.slug + service.slug);

  const mainIntro = tpl(service.intro, city);

  const p2Pool: Record<string, string[]> = {
    metropole: [
      `${city.name}, ${city.description}, est l'une des destinations les plus prisees pour les evenements en ${city.region}. Avec ses ${city.population} habitants, la ville offre un choix exceptionnel de lieux de reception et de prestataires de qualite en ${city.department}.`,
      `Avec ses ${city.population} habitants, ${city.name} dispose d'un ecosysteme evenementiel parmi les plus riches de ${city.region}. Domaines, chateaux, hotels de prestige : les possibilites sont infinies en ${city.department}.`,
      `${city.name}, ${city.description}. Cette metropole de ${city.region} seduit par la diversite de ses lieux de reception et la richesse de son reseau de prestataires en ${city.department}.`,
    ],
    grande: [
      `${city.name}, ${city.description}, offre un cadre remarquable pour votre projet. Notre connaissance approfondie du ${city.department} nous permet de selectionner les meilleurs prestataires locaux, de ${city.name} a ${city.nearbyCity}.`,
      `A ${city.name} et dans l'ensemble du ${city.department}, nous travaillons avec un reseau de prestataires de confiance en ${city.region}. ${city.name} est un lieu inspirant pour toute celebration.`,
      `Le ${city.department} en ${city.region} regorge de lieux d'exception autour de ${city.name}. Notre expertise locale garantit une organisation sans faille pour votre evenement.`,
    ],
    moyenne: [
      `${city.name}, ${city.description}. Cette ville du ${city.department} allie le charme d'une taille humaine a la richesse de ses prestataires. Nous intervenons egalement a ${city.nearbyCity} et dans toute la ${city.region}.`,
      `Entre ${city.name} et ${city.nearbyCity}, le ${city.department} offre un cadre authentique pour votre evenement. Domaines, demeures de charme, espaces atypiques : les options ne manquent pas.`,
      `A ${city.name} et ses environs en ${city.department}, les prestataires locaux apportent une touche personnelle a chaque celebration. Notre connaissance du terrain est votre meilleur atout.`,
    ],
    petite: [
      `${city.name}, ${city.description}. Ce lieu de caractere en ${city.department} offre un cadre intimiste et authentique. Nous collaborons avec les artisans locaux de ${city.name} a ${city.nearbyCity} pour un resultat d'exception.`,
      `Les communes comme ${city.name} offrent souvent les cadres les plus charmants du ${city.department}. Notre equipe connait les tresors caches de ${city.region} pour votre evenement.`,
      `A ${city.name} et ses alentours en ${city.department}, chaque lieu a son caractere. Notre expertise en ${city.region} nous permet de denicher les perles rares pour votre celebration.`,
    ],
    village: [
      `${city.name}, ${city.description} : un decor d'exception pour votre projet. Les environs de ${city.nearbyCity} en ${city.department} completent cette offre avec des lieux de reception varies en ${city.region}.`,
      `Le charme de ${city.name} en ${city.department} se prete magnifiquement aux celebrations intimistes et authentiques. Nous connaissons chaque recoin de ${city.region} pour votre evenement.`,
      `A ${city.name} et dans tout le ${city.department}, nous creons des evenements qui subliment le cadre naturel. ${city.region} est une terre de caractere pour vos celebrations.`,
    ],
  };

  const p3Pool = [
    `Notre equipe met son expertise au service de votre projet a ${city.name}. De la premiere consultation a la realisation, nous vous accompagnons avec passion et rigueur pour un resultat a la hauteur de vos attentes en ${city.department}.`,
    `Chez Smart Moments Event, chaque projet a ${city.name} est unique. Nous adaptons notre approche a votre vision, votre budget et vos envies pour creer un evenement qui vous ressemble en ${city.region}.`,
    `Notre approche sur mesure a ${city.name} repose sur l'ecoute et la personnalisation. Chaque detail compte : nous veillons a ce que votre evenement en ${city.department} soit a la hauteur de vos reves.`,
  ];

  return {
    p1: mainIntro,
    p2: p2Pool[cat][h % p2Pool[cat].length],
    p3: p3Pool[(h + 1) % p3Pool.length],
  };
}

// ─── Nearby cities ──────────────────────────────────────────────────────────

function getNearbyCitiesForService(
  city: { slug: string; department: string; region: string },
  serviceSlug: string,
): typeof cities {
  const eligible = cities.filter((c) => {
    if (c.slug === city.slug) return false;
    return tierSlugsForPop(pop(c)).includes(serviceSlug);
  });

  const sameDept = eligible.filter((c) => c.department === city.department);
  const sameRegion = eligible.filter((c) => c.region === city.region && c.department !== city.department);

  const h = hashCode(city.slug);
  const shuffledDept = [...sameDept].sort((a, b) => hashCode(a.slug + city.slug) - hashCode(b.slug + city.slug));
  const shuffledRegion = [...sameRegion].sort((a, b) => hashCode(a.slug + city.slug) - hashCode(b.slug + city.slug));

  return [...shuffledDept.slice(0, 8), ...shuffledRegion.slice(0, 4)].slice(0, 12);
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default async function ServiceTypeCityPage({
  params,
}: {
  params: Promise<{ serviceType: string; ville: string }>;
}) {
  const { serviceType: serviceSlug, ville } = await params;
  const city = getCityBySlug(ville);
  const service = getServiceTypeBySlug(serviceSlug);
  if (!city || !service) notFound();

  const slug = city.slug + service.slug;
  const h = hashCode(slug);
  const heroImage = heroImages[h % heroImages.length];
  const intro = generateIntro(city, service);
  const cat = cityCategory(city);
  const nearbyCities = getNearbyCitiesForService(city, service.slug);

  const filledFeatures = service.features.map((f) => tpl(f, city));
  const faq = service.faqQuestions.map((q) => ({
    q: tpl(q.q, city),
    a: tpl(q.a, city),
  }));

  // H1 variants
  const h1 = pick([
    { pre: service.name, styled: `a ${city.name}` },
    { pre: `Votre ${service.name.toLowerCase()}`, styled: `a ${city.name}` },
    { pre: service.name, styled: `en ${city.department}` },
    { pre: service.name, styled: `a ${city.name} (${city.department})` },
  ], slug);

  // Subtitles
  const subtitle = pick([
    `${service.name} sur mesure a ${city.name}, ${city.description}.`,
    `${service.name} en ${city.department}. Votre evenement de reve en ${city.region}.`,
    `Smart Moments Event, votre ${service.name.toLowerCase()} a ${city.name}. Devis gratuit.`,
    `${service.name} haut de gamme a ${city.name} et environs.`,
    `${service.name} a ${city.name}. De la planification au jour J.`,
  ], slug, 10);

  // H2 features section
  const featuresH2 = pick([
    `Nos prestations a ${city.name}`,
    `${service.name} a ${city.name} : nos services`,
    `Ce que nous proposons a ${city.name}`,
    `${service.name} en ${city.department} : nos atouts`,
  ], slug, 1);

  const featuresIntro = pick([
    `Des prestations adaptees a chaque budget et chaque envie pour votre projet a ${city.name}.`,
    `Smart Moments Event met son expertise au service de votre evenement a ${city.name} et dans tout le ${city.department}.`,
    `Un service complet de ${service.name.toLowerCase()} a ${city.name}, de la conception a la realisation.`,
  ], slug, 3);

  // H2 FAQ section
  const faqH2 = pick([
    `Questions sur notre service a ${city.name}`,
    `Tout savoir sur ${service.name.toLowerCase()} a ${city.name}`,
    `FAQ : ${service.name.toLowerCase()} a ${city.name}`,
    `Vos questions sur ${service.name.toLowerCase()} en ${city.department}`,
  ], slug, 2);

  // CTA
  const ctaH2 = pick([
    { pre: `Votre projet a ${city.name}`, styled: "commence ici" },
    { pre: `Pret(e) pour le plus`, styled: "beau jour de votre vie ?" },
    { pre: "Organisons ensemble", styled: `votre evenement a ${city.name}` },
    { pre: `${service.name} a ${city.name}`, styled: "demandez votre devis" },
  ], slug, 8);

  // Current tier slugs for cross-linking
  const currentTierSlugs = tierSlugsForPop(pop(city));

  // JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} ${city.name} - Smart Moments Event`,
    provider: {
      "@type": "LocalBusiness",
      name: "Smart Moments Event",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lyon",
        addressRegion: "Rhone-Alpes",
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
    serviceType: service.name,
    areaServed: { "@type": "City", name: city.name },
    description: `${service.name} a ${city.name} (${city.department}). Organisation evenementielle en ${city.region}.`,
    offers: { "@type": "AggregateOffer", priceCurrency: "EUR", lowPrice: "200" },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.smartmoments.fr" },
      { "@type": "ListItem", position: 2, name: service.name, item: `https://www.smartmoments.fr/${service.slug}` },
      { "@type": "ListItem", position: 3, name: city.name, item: `https://www.smartmoments.fr/${service.slug}/${city.slug}` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
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
          { label: service.name, href: `/${service.slug}` },
          { label: city.name },
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={`${service.name} ${city.name} - Smart Moments Event en ${city.department}`}
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
              {pick([service.name, `Smart Moments Event`, `${service.name} ${city.department}`], slug, 9)}
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-[0.95]">
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

      {/* ── Intro ────────────────────────────────────────────────────── */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimateOnScroll animation="fade-up">
              <div>
                <div className="luxury-line-left mb-6" />
                <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
                  {pick([
                    `${service.name} a ${city.name}`,
                    `${service.name} en ${city.department}`,
                    `Smart Moments Event a ${city.name}`,
                    `Votre ${service.name.toLowerCase()} a ${city.name}`,
                  ], slug, 11)}
                </p>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-8 leading-tight">
                  {pick([
                    <>{service.name}<br /><span className="text-gold-gradient italic">a {city.name}</span></>,
                    <>Votre {service.name.toLowerCase()}<br /><span className="text-gold-gradient italic">en {city.department}</span></>,
                    <>{service.name}<br /><span className="text-gold-gradient italic">a {city.name} ({city.department})</span></>,
                    <>Smart Moments Event<br /><span className="text-gold-gradient italic">a {city.name}</span></>,
                  ], slug, 12)}
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
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" delay={200}>
              <div className="relative">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={heroImages[(h + 2) % heroImages.length]}
                    alt={`${service.name} ${city.name} ${city.department}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-gold/30" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b border-l border-gold/30" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Features Grid (6 features) ───────────────────────────────── */}
      <section className="py-28 bg-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Nos prestations
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              {featuresH2}
            </h2>
            <p className="text-taupe-light leading-relaxed">
              {featuresIntro}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filledFeatures.map((feature, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <div className="bg-white border border-gold/10 p-8 hover:border-gold/30 transition-all duration-300 h-full">
                  <svg
                    className="w-8 h-8 text-gold mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d={featureIcons[i % featureIcons.length]}
                    />
                  </svg>
                  <h3 className="font-heading font-bold text-taupe text-base mb-3">
                    {feature}
                  </h3>
                  <p className="text-taupe-soft text-sm leading-relaxed">
                    {pick([
                      `Un service essentiel pour votre projet a ${city.name}, realise avec soin par notre equipe experimentee.`,
                      `Notre expertise en ${city.department} garantit un resultat a la hauteur de vos attentes pour cette prestation.`,
                      `Un accompagnement personnalise a ${city.name} pour cette etape cle de votre evenement en ${city.region}.`,
                    ], slug + String(i), 0)}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pourquoi cette ville ──────────────────────────────────────── */}
      <section className="py-24 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll animation="fade-up">
              <div>
                <div className="luxury-line-left mb-6" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-8 leading-tight">
                  {pick([
                    <>Pourquoi {city.name} pour<br /><span className="text-gold-gradient italic">votre evenement ?</span></>,
                    <>{city.name}, un cadre<br /><span className="text-gold-gradient italic">ideal pour votre celebration</span></>,
                    <>{service.name}<br /><span className="text-gold-gradient italic">a {city.name} : nos atouts</span></>,
                  ], slug, 21)}
                </h2>
                {cat === "metropole" || cat === "grande" ? (
                  <>
                    <p className="text-taupe-soft leading-relaxed mb-5">
                      Avec ses <strong>{city.population} habitants</strong>, {city.name} est l&apos;une des destinations les plus prisees pour les evenements en {city.region}. La ville offre une diversite exceptionnelle de <strong>lieux de reception</strong> : hotels particuliers, rooftops, domaines historiques et espaces evenementiels contemporains.
                    </p>
                    <p className="text-taupe-soft leading-relaxed mb-5">
                      {city.name}, {city.description}, seduit par son <strong>accessibilite</strong> et la richesse de son <strong>reseau de prestataires</strong>. En tant que specialistes du {service.name.toLowerCase()} a {city.name}, nous avons tisse des partenariats privilegies avec les meilleurs professionnels du {city.department}.
                    </p>
                    <p className="text-taupe-soft leading-relaxed">
                      Notre connaissance du terrain vous garantit un evenement a la hauteur de vos reves, avec des prestataires testes et approuves dans tout le {city.department} et la {city.region}.
                    </p>
                  </>
                ) : cat === "moyenne" ? (
                  <>
                    <p className="text-taupe-soft leading-relaxed mb-5">
                      {city.name}, {city.description}. Avec <strong>{city.population} habitants</strong>, la ville allie le charme d&apos;une taille humaine a la richesse de ses <strong>lieux de reception</strong>. Le {city.department} regorge de pepites pour votre evenement.
                    </p>
                    <p className="text-taupe-soft leading-relaxed mb-5">
                      Organiser votre evenement a {city.name} et ses environs vers {city.nearbyCity}, c&apos;est profiter d&apos;un cadre authentique en {city.region}. Les <strong>prestataires locaux</strong> connaissent parfaitement les lieux et apportent une touche personnelle a chaque celebration.
                    </p>
                    <p className="text-taupe-soft leading-relaxed">
                      Notre equipe de <strong>professionnels de l&apos;evenementiel</strong> sillonne le {city.department} depuis des annees. Nous connaissons les domaines caches, les artisans talentueux et les petites attentions qui font la difference pour votre evenement a {city.name}.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-taupe-soft leading-relaxed mb-5">
                      {city.name}, {city.description}. Ce lieu de caractere en {city.department} offre un <strong>cadre intimiste et authentique</strong> qui seduit de plus en plus pour les celebrations. Un evenement ici a cette touche d&apos;exception que seuls les lieux preserves peuvent offrir.
                    </p>
                    <p className="text-taupe-soft leading-relaxed mb-5">
                      Les environs de {city.name} recelent des <strong>tresors pour votre reception</strong> : granges renovees, jardins privatifs, demeures historiques. Le {city.department} est une terre de caractere qui sublime tous les types d&apos;evenements.
                    </p>
                    <p className="text-taupe-soft leading-relaxed">
                      Meme dans les communes plus intimes, notre exigence reste identique. Nous selectionnons des <strong>prestataires de confiance</strong> dans tout le {city.department} pour garantir une prestation irreprochable, de {city.name} a {city.nearbyCity} et au-dela.
                    </p>
                  </>
                )}
                {/* Lien vers la page wedding-planner de la ville */}
                <Link
                  href={`/wedding-planner/${city.slug}`}
                  className="inline-flex items-center gap-2 mt-8 text-gold text-[11px] font-bold uppercase tracking-[0.2em] hover:text-gold-dark transition-colors"
                >
                  Voir tous nos services a {city.name}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                    label: pick(["Lieux d'exception", "Domaines & Chateaux", "Lieux de reception"], slug, 22),
                    desc: `${cat === "metropole" || cat === "grande" ? "Large choix" : "Selection de pepites"} en ${city.department}`,
                  },
                  {
                    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                    label: pick(["Expertise reconnue", "Savoir-faire", "Excellence"], slug, 23),
                    desc: `${service.name} sur mesure`,
                  },
                  {
                    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                    label: pick(["Sur mesure", "100% personnalise", "Unique"], slug, 24),
                    desc: "Adapte a votre style et budget",
                  },
                  {
                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                    label: pick(["Prestataires locaux", "Reseau de confiance", "Artisans selectionnes"], slug, 25),
                    desc: `Les meilleurs du ${city.department}`,
                  },
                ].map((item) => (
                  <div key={item.label} className="bg-white border border-gold/10 p-6 text-center">
                    <svg className="w-8 h-8 text-gold mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={item.icon} />
                    </svg>
                    <h3 className="font-heading font-bold text-taupe text-sm mb-1">{item.label}</h3>
                    <p className="text-taupe-soft text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-28 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Questions frequentes
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe">
              {faqH2}
            </h2>
          </div>
          <div className="space-y-6">
            {faq.map((f, i) => (
              <AnimateOnScroll key={f.q} animation="fade-up" delay={i * 80}>
                <details className="group border border-gold/10 bg-white">
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
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Villes proches ────────────────────────────────────────────── */}
      {nearbyCities.length > 0 && (
        <section className="py-20 bg-rose">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe">
                {pick([
                  `${service.name} en ${city.department} et environs`,
                  `${service.name} pres de ${city.name}`,
                  `Nos interventions en ${city.department}`,
                  `${service.name} dans les villes voisines`,
                ], slug, 18)}
              </h2>
              <p className="text-taupe-light mt-4">
                {pick([
                  `Nous intervenons egalement dans ces villes du ${city.department} et de ${city.region}`,
                  `Decouvrez notre ${service.name.toLowerCase()} dans les villes voisines de ${city.name}`,
                  `Notre equipe se deplace dans tout le ${city.department} et la ${city.region}`,
                ], slug, 19)}
              </p>
            </div>
            <AnimateOnScroll animation="fade-up">
              <div className="flex flex-wrap justify-center gap-3">
                {nearbyCities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/${service.slug}/${c.slug}`}
                    className="border border-gold/20 bg-white px-5 py-2.5 text-[11px] text-taupe-soft uppercase tracking-[0.15em] hover:border-gold hover:text-gold transition-all duration-300"
                  >
                    {service.name} {c.name}
                  </Link>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* ── Cross-links to other services ─────────────────────────────── */}
      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-taupe">
              Decouvrez nos autres services a {city.name}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={`/wedding-planner/${city.slug}`}
              className="border border-gold/20 bg-white px-5 py-2.5 text-[11px] text-taupe-soft uppercase tracking-[0.15em] hover:border-gold hover:text-gold transition-all duration-300"
            >
              Wedding Planner {city.name}
            </Link>
            {currentTierSlugs
              .filter((s) => s !== service.slug)
              .map((s) => {
                const st = getServiceTypeBySlug(s);
                if (!st) return null;
                return (
                  <Link
                    key={s}
                    href={`/${s}/${city.slug}`}
                    className="border border-gold/20 bg-white px-5 py-2.5 text-[11px] text-taupe-soft uppercase tracking-[0.15em] hover:border-gold hover:text-gold transition-all duration-300"
                  >
                    {st.name} {city.name}
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImages[(h + 3) % heroImages.length]}
            alt={`${service.name} ${city.name} ${city.department}`}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/60 via-taupe/40 to-taupe/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <AnimateOnScroll animation="fade-up">
            <div className="luxury-line mb-8" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-[1.1]">
              {ctaH2.pre}
              <br />
              <span className="text-gold-gradient italic">{ctaH2.styled}</span>
            </h2>
            <p className="text-white/50 text-lg mb-12 font-light">
              {pick([
                "Premiere consultation gratuite et sans engagement.",
                "Rencontrons-nous pour parler de votre projet. Consultation offerte.",
                "Contactez-nous pour un premier echange gratuit.",
                "Echangeons sur votre projet. Premier rendez-vous offert.",
              ], slug, 20)}
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
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
