import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { cities, getCityBySlug } from "@/data/cities";
import { themes, getThemeBySlug } from "@/data/themes";

// Top 20 villes par population
const top20Cities = cities
  .slice()
  .sort(
    (a, b) =>
      parseInt(b.population.replace(/\s/g, "")) -
      parseInt(a.population.replace(/\s/g, ""))
  )
  .slice(0, 20);

export function generateStaticParams() {
  const params: { ville: string; theme: string }[] = [];
  for (const city of top20Cities) {
    for (const theme of themes) {
      params.push({ ville: city.slug, theme: theme.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ville: string; theme: string }>;
}): Promise<Metadata> {
  const { ville, theme } = await params;
  const city = getCityBySlug(ville);
  const themeData = getThemeBySlug(theme);
  if (!city || !themeData) return {};

  const title = `${themeData.name} à ${city.name} | Smart Moments Event`;
  const description = `Organisation de ${themeData.name.toLowerCase()} à ${city.name} (${city.department}). Wedding planner spécialisé : ${themeData.features.slice(0, 3).join(", ").toLowerCase()}. Devis gratuit.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.smartmoments.fr/wedding-planner/${city.slug}/${themeData.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.smartmoments.fr/wedding-planner/${city.slug}/${themeData.slug}`,
      images: [
        {
          url: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41-3_3_306698-168546594978953.jpeg",
          width: 960,
          height: 640,
          alt: `${themeData.name} à ${city.name} - Smart Moments Event`,
        },
      ],
    },
  };
}

const heroImages = [
  "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41-3_3_306698-168546594978953.jpeg",
  "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-40-1_3_306698-168546595086946.jpeg",
  "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42-1_3_306698-168546594928335.jpeg",
  "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41_3_306698-168546595030467.jpeg",
  "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-30-at-10-54-55-1_3_306698-168563709678965.jpeg",
];

function generateFaqQuestions(
  cityName: string,
  cityDepartment: string,
  cityRegion: string,
  themeName: string,
  themeSlug: string
) {
  const faqMap: Record<
    string,
    { q: string; a: string }[]
  > = {
    "mariage-champetre": [
      {
        q: `Quel lieu pour un mariage champêtre à ${cityName} ?`,
        a: `${cityName} et ses environs en ${cityRegion} offrent de nombreux lieux idéaux pour un mariage champêtre : domaines viticoles, granges rénovées, fermes de charme et jardins bucoliques. Notre équipe connaît les meilleurs sites de la région ${cityDepartment} et vous accompagne dans la sélection du lieu parfait pour votre mariage champêtre.`,
      },
      {
        q: `Quel budget pour un mariage champêtre à ${cityName} ?`,
        a: `Un mariage champêtre à ${cityName} peut s'organiser avec des budgets variés, à partir de 200 € pour notre prestation de coordination. Le style champêtre permet souvent d'optimiser le budget décoration grâce aux matériaux naturels et au DIY encadré par nos décorateurs professionnels.`,
      },
      {
        q: `Quels prestataires pour un mariage champêtre en ${cityRegion} ?`,
        a: `Nous travaillons avec un réseau de prestataires locaux en ${cityRegion} spécialisés dans les mariages champêtres : traiteurs terroir, fleuristes champêtres, artisans décorateurs. Notre connaissance du tissu local à ${cityName} garantit des prestations authentiques et de qualité.`,
      },
    ],
    "mariage-boheme": [
      {
        q: `Comment organiser un mariage bohème à ${cityName} ?`,
        a: `Pour un mariage bohème réussi à ${cityName}, nous sélectionnons des lieux atypiques en ${cityRegion} : espaces en pleine nature, lieux alternatifs, domaines avec caractère. Nous créons une ambiance boho chic avec macramé, pampa, couleurs terracotta et matières naturelles, le tout adapté aux spécificités de la région.`,
      },
      {
        q: `Quelles fleurs pour un mariage bohème à ${cityName} ?`,
        a: `Pour votre mariage bohème à ${cityName}, nous privilégions les herbes de pampa, roses David Austin, protéas, eucalyptus et graminées séchées. Nos fleuristes partenaires en ${cityRegion} créent des compositions aériennes et naturelles qui incarnent l'esprit bohème tout en utilisant des variétés locales et de saison.`,
      },
      {
        q: `Peut-on faire un mariage bohème haut de gamme à ${cityName} ?`,
        a: `Absolument ! Le bohème chic à ${cityName} associe l'esprit libre du boho à des matériaux nobles et une exécution raffinée. Macramé artisanal, vaisselle en grès, mobilier vintage soigneusement sélectionné : nous élevons le style bohème au rang du luxe dans les plus beaux lieux de ${cityRegion}.`,
      },
    ],
    "mariage-romantique": [
      {
        q: `Quel lieu pour un mariage romantique à ${cityName} ?`,
        a: `${cityName} et sa région en ${cityRegion} regorgent de lieux enchanteurs pour un mariage romantique : châteaux historiques, domaines de charme, salons élégants avec vue. Nous sélectionnons pour vous les écrins les plus féeriques du département ${cityDepartment}.`,
      },
      {
        q: `Quelles couleurs pour un mariage romantique à ${cityName} ?`,
        a: `Pour votre mariage romantique à ${cityName}, nous privilégions les teintes douces et délicates : rose poudré, ivoire, champagne, vieux rose, pêche. Le doré apporte une touche de prestige. Nous créons des palettes harmonieuses qui subliment chaque détail de votre célébration en ${cityRegion}.`,
      },
      {
        q: `Comment organiser une cérémonie romantique à ${cityName} ?`,
        a: `Une cérémonie romantique à ${cityName} se compose de roses et pivoines par milliers, de bougies et chandeliers, de voilages élégants. Nous orchestrons chaque détail pour créer une ambiance féérique dans les plus beaux sites de ${cityRegion}, du lieu de cérémonie à la salle de réception.`,
      },
    ],
    "mariage-chic": [
      {
        q: `Où organiser un mariage chic à ${cityName} ?`,
        a: `Pour un mariage chic et élégant à ${cityName}, nous sélectionnons des lieux de prestige en ${cityRegion} : châteaux, palaces, domaines d'exception. Notre connaissance des adresses les plus exclusives du département ${cityDepartment} garantit un cadre à la hauteur de vos ambitions.`,
      },
      {
        q: `Combien coûte un mariage haut de gamme à ${cityName} ?`,
        a: `Un mariage haut de gamme à ${cityName} représente généralement un budget de 30 000 € à 100 000 € et plus, selon le nombre d'invités et les prestations souhaitées. Notre rôle est de maximiser chaque euro investi pour un résultat spectaculaire dans les meilleurs lieux de ${cityRegion}.`,
      },
      {
        q: `Quels prestataires de prestige à ${cityName} ?`,
        a: `À ${cityName} et en ${cityRegion}, nous collaborons avec les meilleurs prestataires : traiteurs gastronomiques, photographes de renom, fleuristes d'art, musiciens professionnels. Notre réseau d'excellence constitué au fil des années garantit des prestations irréprochables.`,
      },
    ],
    "mariage-plein-air": [
      {
        q: `Où organiser un mariage en plein air à ${cityName} ?`,
        a: `${cityName} et ses environs en ${cityRegion} offrent de magnifiques espaces pour un mariage en extérieur : jardins, vignobles, domaines avec parc, bords de rivière. Nous repérons les plus beaux sites du département ${cityDepartment} pour votre cérémonie et réception en plein air.`,
      },
      {
        q: `Comment gérer la météo pour un mariage en plein air à ${cityName} ?`,
        a: `Pour votre mariage en plein air à ${cityName}, nous prévoyons systématiquement un plan B : tentes de réception élégantes, barnums cristal ou repli en intérieur. Le climat de ${cityRegion} offre de belles opportunités de mai à octobre, mais nous anticipons toujours les aléas météo.`,
      },
      {
        q: `Quelle est la meilleure saison pour un mariage en plein air à ${cityName} ?`,
        a: `En ${cityRegion}, la période idéale pour un mariage en plein air s'étend de mai à octobre. Juin et septembre sont particulièrement prisés pour leurs températures agréables et leur belle luminosité à ${cityName}. Nous adaptons l'organisation aux spécificités climatiques locales.`,
      },
    ],
  };

  return faqMap[themeSlug] || faqMap["mariage-champetre"];
}

function generateIntroText(
  cityName: string,
  cityDescription: string,
  cityRegion: string,
  cityDepartment: string,
  cityNearby: string,
  themeName: string,
  themeDescription: string,
  themeIntro: string
) {
  return `Vous rêvez d'un ${themeName.toLowerCase()} à ${cityName} ? Smart Moments Event, wedding planner basé à Villeurbanne (Lyon), vous accompagne dans l'organisation de votre mariage en ${cityRegion}. ${cityName}, ${cityDescription}, offre un cadre exceptionnel pour célébrer votre union dans un style ${themeName.toLowerCase().replace("mariage ", "")}.

${themeDescription} Notre équipe de wedding planners expérimentés connaît parfaitement les lieux de réception, prestataires et artisans du département ${cityDepartment} pour donner vie à votre vision. Des environs de ${cityNearby} aux plus beaux domaines de ${cityName}, nous dénichons les perles rares qui feront de votre ${themeName.toLowerCase()} un moment inoubliable.

Que ce soit pour une organisation complète, une coordination jour J ou une prestation de décoration haut de gamme, nous mettons notre expertise et notre réseau local au service de votre projet. Chaque mariage est unique, et nous créons une expérience sur mesure qui reflète votre personnalité et vos envies, dans le respect de votre budget.`;
}

export default async function CityThemePage({
  params,
}: {
  params: Promise<{ ville: string; theme: string }>;
}) {
  const { ville, theme } = await params;
  const city = getCityBySlug(ville);
  const themeData = getThemeBySlug(theme);
  if (!city || !themeData) notFound();

  const heroImage =
    heroImages[
      (city.slug.charCodeAt(0) + themeData.slug.charCodeAt(0)) %
        heroImages.length
    ];

  const faqQuestions = generateFaqQuestions(
    city.name,
    city.department,
    city.region,
    themeData.name,
    themeData.slug
  );

  const introText = generateIntroText(
    city.name,
    city.description,
    city.region,
    city.department,
    city.nearbyCity,
    themeData.name,
    themeData.description,
    themeData.intro
  );

  const introParagraphs = introText.split("\n\n");

  // JSON-LD : Service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${themeData.name} à ${city.name} - Smart Moments Event`,
    provider: {
      "@type": "LocalBusiness",
      name: "Smart Moments Event",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Villeurbanne",
        addressRegion: "Rhône-Alpes",
        postalCode: "69100",
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
      "@type": "City",
      name: city.name,
    },
    description: `Organisation de ${themeData.name.toLowerCase()} à ${city.name}. Wedding planner spécialisé en ${city.region}.`,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: "200",
    },
  };

  // JSON-LD : BreadcrumbList
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
        name: city.name,
        item: `https://www.smartmoments.fr/wedding-planner/${city.slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: themeData.name,
        item: `https://www.smartmoments.fr/wedding-planner/${city.slug}/${themeData.slug}`,
      },
    ],
  };

  // JSON-LD : FAQPage
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqQuestions.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  // Autres combinaisons pour cette ville (autres thèmes)
  const otherThemes = themes.filter((t) => t.slug !== themeData.slug);

  // Quelques villes proches avec ce même thème
  const nearbyCities = cities
    .filter(
      (c) => c.region === city.region && c.slug !== city.slug
    )
    .slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: "Wedding Planner", href: "/wedding-planner" },
          { label: city.name, href: `/wedding-planner/${city.slug}` },
          { label: themeData.name },
        ]}
      />

      {/* Hero */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={`${themeData.name} à ${city.name} - Organisation et décoration`}
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
              {themeData.heroSubtitle}
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-[0.95]">
            {themeData.name}
            <br />
            <span className="text-gold-gradient italic">
              à {city.name}
            </span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            {themeData.description} Organisation sur mesure à{" "}
            {city.name}, {city.description}.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* Intro */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimateOnScroll animation="fade-up">
              <div>
                <div className="luxury-line-left mb-6" />
                <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
                  {themeData.name} en {city.region}
                </p>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-8 leading-tight">
                  Votre {themeData.name.toLowerCase()}
                  <br />
                  <span className="text-gold-gradient italic">
                    à {city.name}
                  </span>
                </h2>
                {introParagraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-taupe-soft leading-relaxed mb-6"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="relative">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-40-1_3_306698-168546595086946.jpeg"
                    alt={`Décoration ${themeData.name.toLowerCase()} à ${city.name}`}
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

      {/* Caractéristiques du thème */}
      <section className="py-28 bg-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Ce que nous proposons
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Les caractéristiques de votre{" "}
              {themeData.name.toLowerCase()} à {city.name}
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Chaque détail est pensé pour créer une ambiance{" "}
              {themeData.name.toLowerCase().replace("mariage ", "")}{" "}
              unique et personnalisée dans les plus beaux lieux de{" "}
              {city.region}.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themeData.features.map((feature, index) => (
              <AnimateOnScroll
                key={feature}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="border border-gold/10 bg-white p-8 h-full">
                  <div className="w-10 h-10 flex items-center justify-center bg-gold/10 mb-6">
                    <svg
                      className="w-5 h-5 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-taupe font-heading font-semibold text-base">
                    {feature}
                  </p>
                </div>
              </AnimateOnScroll>
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
              {themeData.name} à {city.name} : vos questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqQuestions.map((faq) => (
              <AnimateOnScroll key={faq.q} animation="fade-up">
                <details className="group border border-gold/10 bg-white">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="font-heading font-semibold text-taupe text-base pr-4">
                      {faq.q}
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
                      {faq.a}
                    </p>
                  </div>
                </details>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Liens internes : autres thèmes dans cette ville */}
      <section className="py-20 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Explorez nos styles
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe">
              Autres styles de mariage à {city.name}
            </h2>
            <p className="text-taupe-light mt-4">
              Découvrez tous les univers que nous créons pour votre
              mariage à {city.name}.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherThemes.map((t) => (
              <Link
                key={t.slug}
                href={`/wedding-planner/${city.slug}/${t.slug}`}
                className="group border border-gold/10 bg-white p-8 hover:border-gold transition-all duration-300"
              >
                <p className="text-[9px] uppercase tracking-[0.3em] text-gold mb-2">
                  {city.name}
                </p>
                <h3 className="text-lg font-heading font-bold text-taupe mb-3 group-hover:text-gold transition-colors">
                  {t.name}
                </h3>
                <p className="text-taupe-soft text-sm leading-relaxed">
                  {t.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Liens internes : même thème dans d'autres villes */}
      {nearbyCities.length > 0 && (
        <section className="py-20 bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe">
                {themeData.name} dans votre région
              </h2>
              <p className="text-taupe-light mt-4">
                Nous organisons votre {themeData.name.toLowerCase()}{" "}
                dans toute la région {city.region}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {nearbyCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/wedding-planner/${c.slug}/${themeData.slug}`}
                  className="border border-gold/20 bg-white px-5 py-2.5 text-[11px] text-taupe-soft uppercase tracking-[0.15em] hover:border-gold hover:text-gold transition-all duration-300"
                >
                  {themeData.name} {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Liens vers pages parentes */}
      <section className="py-12 bg-champagne/50 border-y border-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/wedding-planner/${city.slug}`}
              className="text-sm text-taupe-soft hover:text-gold transition-colors underline underline-offset-4 decoration-gold/30 hover:decoration-gold"
            >
              Wedding Planner {city.name}
            </Link>
            <span className="text-gold/30">|</span>
            <Link
              href={`/wedding-planner/style/${themeData.slug}`}
              className="text-sm text-taupe-soft hover:text-gold transition-colors underline underline-offset-4 decoration-gold/30 hover:decoration-gold"
            >
              {themeData.name} Lyon
            </Link>
            <span className="text-gold/30">|</span>
            <Link
              href="/wedding-planner"
              className="text-sm text-taupe-soft hover:text-gold transition-colors underline underline-offset-4 decoration-gold/30 hover:decoration-gold"
            >
              Tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42-1_3_306698-168546594928335.jpeg"
            alt={`Organisation ${themeData.name.toLowerCase()} à ${city.name}`}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/60 via-taupe/40 to-taupe/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <div className="luxury-line mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-[1.1]">
            Votre {themeData.name.toLowerCase()}
            <br />
            à {city.name}{" "}
            <span className="text-gold-gradient italic">
              commence ici
            </span>
          </h2>
          <p className="text-white/50 text-lg mb-12 font-light">
            Première consultation gratuite et sans engagement.
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
