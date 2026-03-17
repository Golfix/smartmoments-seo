import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { cities, getCityBySlug } from "@/data/cities";
import { themes } from "@/data/themes";

export function generateStaticParams() {
  return cities.map((city) => ({ ville: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ville: string }>;
}): Promise<Metadata> {
  const { ville } = await params;
  const city = getCityBySlug(ville);
  if (!city) return {};

  return {
    title: `Wedding Planner ${city.name} - Organisation de Mariage ${city.name}`,
    description: `Wedding planner à ${city.name} (${city.department}). Organisation de mariage clé en main, coordination jour J, décoration haut de gamme en ${city.region}. Smart Moments Event, noté 4.6/5. Devis gratuit.`,
    alternates: {
      canonical: `https://www.smartmoments.fr/wedding-planner/${city.slug}`,
    },
    openGraph: {
      title: `Wedding Planner ${city.name} | Organisation de Mariage | Smart Moments Event`,
      description: `Organisatrice de mariage à ${city.name}. Organisation complète, coordination jour J et décoration haut de gamme. Devis gratuit.`,
      url: `https://www.smartmoments.fr/wedding-planner/${city.slug}`,
      images: [
        {
          url: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41-3_3_306698-168546594978953.jpeg",
          width: 960,
          height: 640,
          alt: `Wedding Planner ${city.name} - Smart Moments Event`,
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

export default async function CityWeddingPlannerPage({
  params,
}: {
  params: Promise<{ ville: string }>;
}) {
  const { ville } = await params;
  const city = getCityBySlug(ville);
  if (!city) notFound();

  const heroImage = heroImages[city.slug.charCodeAt(0) % heroImages.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Wedding Planner ${city.name} - Smart Moments Event`,
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
      "@type": "City",
      name: city.name,
    },
    description: `Wedding planner à ${city.name}. Organisation de mariage clé en main, coordination jour J, décoration haut de gamme.`,
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
        name: city.name,
        item: `https://www.smartmoments.fr/wedding-planner/${city.slug}`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Combien coûte un wedding planner à ${city.name} ?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Nos prestations de wedding planning à ${city.name} démarrent à partir de 200 €. Le tarif varie selon la formule choisie : coordination jour J, prestation partielle ou organisation complète. Devis gratuit et personnalisé.`,
        },
      },
      {
        "@type": "Question",
        name: `Intervenez-vous à ${city.name} pour organiser un mariage ?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Oui, Smart Moments Event intervient à ${city.name} et dans tout le département ${city.department} en ${city.region}. Basés à Lyon (Lyon), nous nous déplaçons dans toute la France pour organiser votre mariage.`,
        },
      },
      {
        "@type": "Question",
        name: `Comment organiser son mariage à ${city.name} ?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Pour organiser votre mariage à ${city.name}, nous vous recommandons de commencer 12 à 18 mois à l'avance. Notre équipe vous accompagne dans le choix du lieu de réception, la sélection des prestataires locaux, la décoration et la coordination du jour J. Première consultation gratuite.`,
        },
      },
    ],
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
          { label: city.name },
        ]}
      />

      {/* Hero */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={`Wedding Planner ${city.name} - Organisation de mariage haut de gamme`}
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
              Wedding Planner {city.name}
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-[0.95]">
            Wedding Planner
            <br />
            <span className="text-gold-gradient italic">à {city.name}</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            Organisation de mariage clé en main à {city.name},{" "}
            {city.description}. Coordination jour J et décoration haut de gamme.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* Intro */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="luxury-line-left mb-6" />
              <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
                Organisation de mariage à {city.name}
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-8 leading-tight">
                Votre wedding planner
                <br />
                <span className="text-gold-gradient italic">
                  à {city.name}
                </span>
              </h2>
              <p className="text-taupe-soft leading-relaxed mb-6">
                Vous cherchez un{" "}
                <strong>wedding planner à {city.name}</strong> ? Smart Moments
                Event vous accompagne dans l&apos;organisation de votre mariage
                en {city.region}. Basés à Lyon (Lyon), nous intervenons
                à {city.name} et dans tout le département {city.department}.
              </p>
              <p className="text-taupe-soft leading-relaxed mb-6">
                {city.name}, {city.description}, offre un cadre exceptionnel
                pour célébrer votre mariage. Notre équipe de{" "}
                <strong>wedding planners qualifiés</strong> connaît les meilleurs
                lieux de réception, traiteurs, photographes et prestataires à{" "}
                {city.name} et ses environs, notamment{" "}
                <Link
                  href={`/wedding-planner/${cities.find((c) => c.name === city.nearbyCity)?.slug || ""}`}
                  className="text-gold hover:underline"
                >
                  {city.nearbyCity}
                </Link>
                .
              </p>
              <p className="text-taupe-soft leading-relaxed">
                Que vous souhaitiez un{" "}
                <strong>mariage champêtre</strong>, un{" "}
                <strong>mariage haut de gamme</strong>, une cérémonie laïque en
                plein air ou une réception intimiste, nous créons un événement
                sur mesure qui vous ressemble. Notre approche personnalisée
                s&apos;adapte à tous les budgets, à partir de 200&nbsp;&euro;.
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-40-1_3_306698-168546595086946.jpeg"
                  alt={`Décoration mariage haut de gamme ${city.name}`}
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

      {/* Services */}
      <section className="py-28 bg-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Nos formules
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Nos services à {city.name}
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Trois formules adaptées à vos besoins pour votre mariage à{" "}
              {city.name}, à partir de 200&nbsp;&euro;.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Coordination Jour J",
                subtitle: "Sérénité le jour du mariage",
                description: `Vous avez tout organisé vous-même pour votre mariage à ${city.name} ? Notre coordinatrice prend le relais le jour J pour que vous en profitiez sereinement.`,
                features: [
                  "Reprise du dossier 1 mois avant",
                  "Visite technique du lieu à " + city.name,
                  "Coordination de tous les prestataires",
                  "Présence le jour J",
                  "Gestion du timing et des imprévus",
                ],
              },
              {
                name: "Organisation Complète",
                subtitle: "Mariage clé en main",
                popular: true,
                description: `De la première rencontre au lendemain de votre mariage à ${city.name}, nous prenons tout en charge. Un mariage clé en main pour une sérénité totale.`,
                features: [
                  "Recherche du lieu de réception",
                  "Sélection des prestataires locaux",
                  "Wedding design et décoration",
                  "Coordination intégrale du jour J",
                  "Gestion complète du budget",
                  "Suivi post-événement",
                ],
              },
              {
                name: "Décoration Haut de Gamme",
                subtitle: "Wedding Design",
                description: `Nos décorateurs créent une scénographie sur mesure pour votre mariage à ${city.name} : arches fleuries, compositions florales, mise en lumière.`,
                features: [
                  "Conception de la scénographie",
                  "Arches fleuries spectaculaires",
                  "Décoration de table raffinée",
                  "Mise en lumière et ambiance",
                  "Mobilier et accessoires haut de gamme",
                ],
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`relative luxury-card p-10 ${
                  pkg.popular
                    ? "bg-gold/10 text-taupe border-2 border-gold"
                    : "bg-white border border-gold/10"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-[9px] font-bold uppercase tracking-[0.3em] px-6 py-1.5">
                    Populaire
                  </div>
                )}
                <p className="text-[9px] uppercase tracking-[0.3em] mb-2 text-gold">
                  {pkg.subtitle}
                </p>
                <h3 className="text-xl font-heading font-bold mb-3">
                  {pkg.name}
                </h3>
                <p className="text-sm leading-relaxed mb-8 text-taupe-soft">
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-10">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 text-gold mt-0.5 shrink-0"
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
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block text-center py-3.5 text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 bg-gold text-white hover:bg-gold-dark"
                >
                  Demander un Devis
                </Link>
              </div>
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
              Wedding planner à {city.name} : vos questions
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: `Combien coûte un wedding planner à ${city.name} ?`,
                a: `Nos prestations de wedding planning à ${city.name} démarrent à partir de 200 €. Le tarif varie selon la formule choisie (coordination jour J, prestation partielle ou organisation complète) et le nombre d'invités. Nous proposons un devis gratuit et personnalisé, avec possibilité de paiement en plusieurs fois.`,
              },
              {
                q: `Intervenez-vous à ${city.name} pour organiser un mariage ?`,
                a: `Oui, Smart Moments Event intervient à ${city.name} et dans tout le département ${city.department} en ${city.region}. Basés à Lyon (Lyon), nous nous déplaçons dans toute la France pour organiser votre mariage de rêve.`,
              },
              {
                q: `Comment organiser son mariage à ${city.name} ?`,
                a: `Pour organiser votre mariage à ${city.name}, nous vous recommandons de commencer 12 à 18 mois à l'avance. Notre équipe vous accompagne dans le choix du lieu de réception, la sélection des meilleurs prestataires de ${city.name} et ${city.nearbyCity}, la décoration sur mesure et la coordination complète du jour J.`,
              },
              {
                q: `Quels sont les meilleurs lieux de mariage à ${city.name} ?`,
                a: `${city.name} et ses environs en ${city.region} regorgent de lieux de réception exceptionnels : châteaux, domaines, salles de prestige, espaces en plein air. Notre connaissance du terrain et notre réseau de partenaires nous permettent de vous proposer les meilleurs lieux adaptés à votre style et votre budget.`,
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group border border-gold/10 bg-white"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* Styles de mariage dans cette ville */}
      <section className="py-20 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe">
              Quel style de mariage à {city.name} ?
            </h2>
            <p className="text-taupe-light mt-4">
              Découvrez nos inspirations pour votre mariage à {city.name}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {themes.map((theme) => (
              <Link
                key={theme.slug}
                href={`/wedding-planner/${city.slug}/${theme.slug}`}
                className="group border border-gold/10 bg-white p-6 hover:border-gold transition-all duration-300"
              >
                <h3 className="text-lg font-heading font-bold text-taupe mb-2 group-hover:text-gold transition-colors">
                  {theme.name} à {city.name}
                </h3>
                <p className="text-taupe-soft text-sm leading-relaxed mb-3">
                  {theme.description}
                </p>
                <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em]">
                  Découvrir
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Villes proches */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe">
              Wedding planner dans votre région
            </h2>
            <p className="text-taupe-light mt-4">
              Nous intervenons également dans ces villes en {city.region}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {cities
              .filter(
                (c) =>
                  c.region === city.region &&
                  c.slug !== city.slug,
              )
              .slice(0, 12)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/wedding-planner/${c.slug}`}
                  className="border border-gold/20 bg-white px-5 py-2.5 text-[11px] text-taupe-soft uppercase tracking-[0.15em] hover:border-gold hover:text-gold transition-all duration-300"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42-1_3_306698-168546594928335.jpeg"
            alt={`Organisation mariage ${city.name}`}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/60 via-taupe/40 to-taupe/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <div className="luxury-line mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-[1.1]">
            Votre mariage à {city.name}
            <br />
            <span className="text-gold-gradient italic">commence ici</span>
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
