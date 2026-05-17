import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { destinations, getDestinationBySlug } from "@/data/destinations";

export const dynamicParams = false;

export function generateStaticParams() {
  return destinations.map((d) => ({ destination: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ destination: string }>;
}): Promise<Metadata> {
  const { destination } = await params;
  const dest = getDestinationBySlug(destination);
  if (!dest) return {};

  return {
    title: `Mariage à ${dest.name} | Destination Wedding ${dest.country} - Smart Moments Event`,
    description: `Organisation de votre destination wedding à ${dest.name} (${dest.country}). Wedding planner basé à Lyon, ${dest.travelTime}. ${dest.budgetRange}. Devis gratuit.`,
    alternates: {
      canonical: `https://www.smartmoments.fr/destination-wedding/${dest.slug}`,
    },
    keywords: [
      `mariage ${dest.name.toLowerCase()}`,
      `destination wedding ${dest.name.toLowerCase()}`,
      `wedding planner ${dest.name.toLowerCase()}`,
      `organisation mariage ${dest.country.toLowerCase()}`,
      `se marier à ${dest.name.toLowerCase()}`,
      `mariage ${dest.country.toLowerCase()} depuis france`,
      `wedding planner destination wedding`,
      `mariage à l'étranger`,
    ],
    openGraph: {
      title: `Mariage à ${dest.name} - Destination Wedding par Smart Moments Event`,
      description: dest.description,
      url: `https://www.smartmoments.fr/destination-wedding/${dest.slug}`,
      images: [{ url: dest.imageUrl, width: 960, height: 640, alt: `Destination wedding ${dest.name}` }],
    },
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ destination: string }>;
}) {
  const { destination } = await params;
  const dest = getDestinationBySlug(destination);
  if (!dest) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Destination Wedding ${dest.name} - Smart Moments Event`,
    description: dest.description,
    provider: {
      "@type": "EventPlanner",
      name: "Smart Moments Event",
      url: "https://www.smartmoments.fr",
      telephone: "+33756987181",
      address: {
        "@type": "PostalAddress",
        streetAddress: "85 Rue André Bollier",
        addressLocality: "Lyon",
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
    serviceType: `Destination Wedding ${dest.name}`,
    areaServed: { "@type": "Country", name: dest.country },
    offers: { "@type": "AggregateOffer", priceCurrency: "EUR", lowPrice: "25000" },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.smartmoments.fr" },
      { "@type": "ListItem", position: 2, name: "Destination Wedding", item: "https://www.smartmoments.fr/destination-wedding" },
      { "@type": "ListItem", position: 3, name: dest.name, item: `https://www.smartmoments.fr/destination-wedding/${dest.slug}` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dest.faqQuestions.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const otherDestinations = destinations.filter((d) => d.slug !== dest.slug).slice(0, 4);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={dest.imageUrl}
            alt={`Mariage à ${dest.name} - destination wedding ${dest.country}`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/60 via-taupe/30 to-taupe/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
            <p className="text-gold text-[10px] uppercase tracking-[0.5em]">Destination Wedding {dest.country}</p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-[0.95]">
            Mariage
            <br />
            <span className="text-gold-gradient italic">à {dest.name}</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">{dest.region}</p>
        </div>
      </section>

      <Breadcrumb
        items={[
          { label: "Destination Wedding", href: "/destination-wedding" },
          { label: dest.name },
        ]}
      />

      {/* Intro */}
      <section className="py-28 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="luxury-line mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-8 leading-tight text-center">
              Votre mariage à <span className="text-gold-gradient italic">{dest.name}</span>
            </h2>
            <p className="text-taupe-soft leading-relaxed text-lg mb-6">{dest.description}</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Pourquoi cette destination */}
      <section className="py-28 bg-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="luxury-line mx-auto mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">Pourquoi choisir</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe">
              {dest.name} pour <span className="text-gold-gradient italic">votre mariage ?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dest.whyChoose.map((reason, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 80}>
                <div className="bg-white border border-gold/10 p-6 h-full hover:border-gold/30 transition-all duration-300">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center mb-4">
                    <span className="text-gold text-sm font-medium">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="text-taupe-soft text-sm leading-relaxed">{reason}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Top lieux + infos pratiques */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimateOnScroll animation="fade-up">
              <div>
                <div className="luxury-line-left mb-6" />
                <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">Top lieux</p>
                <h2 className="text-3xl font-heading font-bold text-taupe mb-8 leading-tight">
                  Nos destinations à <span className="text-gold-gradient italic">{dest.name}</span>
                </h2>
                <p className="text-taupe-soft leading-relaxed mb-8">
                  Voici les lieux les plus prisés pour un destination wedding à {dest.name}. Nous connaissons les meilleurs prestataires de chaque zone.
                </p>
                <div className="flex flex-wrap gap-3">
                  {dest.topPlaces.map((place) => (
                    <span
                      key={place}
                      className="border border-gold/30 bg-white px-5 py-2.5 text-[11px] text-taupe-soft uppercase tracking-[0.15em]"
                    >
                      {place}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" delay={200}>
              <div className="bg-white border border-gold/10 p-8">
                <h3 className="text-2xl font-heading font-bold text-taupe mb-6">Infos pratiques</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Meilleure saison</p>
                    <p className="text-taupe-soft text-sm">{dest.bestSeason}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Budget indicatif</p>
                    <p className="text-taupe-soft text-sm">{dest.budgetRange}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Temps de trajet</p>
                    <p className="text-taupe-soft text-sm">{dest.travelTime}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-champagne">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="luxury-line mx-auto mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">Questions fréquentes</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe">
              Mariage à <span className="text-gold-gradient italic">{dest.name}</span>
            </h2>
          </div>
          <div className="space-y-4">
            {dest.faqQuestions.map((f, i) => (
              <AnimateOnScroll key={f.q} animation="fade-up" delay={i * 80}>
                <details className="group border border-gold/10 bg-white">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="font-heading font-semibold text-taupe text-base pr-4">{f.q}</h3>
                    <svg
                      className="w-5 h-5 text-gold shrink-0 group-open:rotate-45 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="h-[1px] bg-gradient-to-r from-gold/20 to-transparent mb-4" />
                    <p className="text-taupe-soft text-sm leading-relaxed">{f.a}</p>
                  </div>
                </details>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Autres destinations */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe">
              Découvrez d&apos;autres <span className="text-gold-gradient italic">destinations</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {otherDestinations.map((d) => (
              <Link
                key={d.slug}
                href={`/destination-wedding/${d.slug}`}
                className="group block bg-white border border-gold/10 hover:border-gold/40 transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={d.imageUrl}
                    alt={`Mariage à ${d.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-taupe/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="text-lg font-heading font-bold">{d.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/destination-wedding" className="text-gold text-sm hover:underline">
              Voir toutes les destinations →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={dest.imageUrl}
            alt={`Destination wedding ${dest.name}`}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/60 via-taupe/40 to-taupe/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <div className="luxury-line mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-[1.1]">
            Votre mariage à {dest.name}
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
