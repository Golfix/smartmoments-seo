import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { themes, getThemeBySlug } from "@/data/themes";
import Photo from "@/components/Photo";
import { OG_DEFAULT } from "@/data/photos";
import { fitDescription, fitTitle } from "@/lib/seo";
import { providerRef } from "@/lib/schema";


export const dynamicParams = false;

export function generateStaticParams() {
  return themes.map((t) => ({ theme: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ theme: string }>;
}): Promise<Metadata> {
  const { theme } = await params;
  const themeData = getThemeBySlug(theme);
  if (!themeData) return {};

  // Cette page vise une intention d'INSPIRATION, nationale et sans ville :
  // /wedding-planner/[ville]/[theme] couvre déjà l'intention locale. Les deux
  // partageaient auparavant le même H1 (« Mariage Champêtre à Lyon ») et 60 %
  // de leur contenu — elles se disputaient la même requête.
  return {
    title: fitTitle(`${themeData.name} : Idées & Organisation`),
    description: fitDescription(
      `${themeData.name} : inspirations déco, choix du lieu et organisation par un wedding planner. Nos conseils pour réussir votre thème.`
    ),
    alternates: {
      canonical: `https://www.smartmoments.fr/wedding-planner/style/${themeData.slug}`,
    },
    openGraph: {
      title: `${themeData.name} : Idées & Organisation | Smart Moments`,
      description: themeData.metaDescription,
      url: `https://www.smartmoments.fr/wedding-planner/style/${themeData.slug}`,
      images: [OG_DEFAULT],
    },
  };
}


export default async function ThemeWeddingPlannerPage({
  params,
}: {
  params: Promise<{ theme: string }>;
}) {
  const { theme } = await params;
  const themeData = getThemeBySlug(theme);
  if (!themeData) notFound();

  // Graine déterministe : chaque style pioche une photo différente de la photothèque.
  const h = themeData.slug.charCodeAt(0);


  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${themeData.name} Lyon - Smart Moments Event`,
    provider: providerRef(),
    serviceType: "Wedding Planning",
    areaServed: {
      "@type": "City",
      name: "Lyon",
    },
    description: themeData.metaDescription,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: "1500",
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
        name: themeData.name,
        item: `https://www.smartmoments.fr/wedding-planner/style/${themeData.slug}`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: themeData.faqQuestions.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const otherThemes = themes.filter((t) => t.slug !== themeData.slug);

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
          { label: themeData.name },
        ]}
      />

      {/* Hero */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Photo
            seed={h}
            alt={`${themeData.name} Lyon - Organisation et décoration`}
            className="object-cover"
            sizes="100vw"
            prefer="landscape"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/75 via-taupe/55 to-taupe/80" />
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
            <span className="text-gold-gradient italic">idées &amp; inspiration</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            {themeData.description}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* Intro & Features */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="luxury-line-left mb-6" />
              <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
                {themeData.heroSubtitle}
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-8 leading-tight">
                Votre {themeData.name.toLowerCase()}
                <br />
                <span className="text-gold-gradient italic">sur mesure</span>
              </h2>
              <p className="text-taupe-soft leading-relaxed mb-8">
                {themeData.intro}
              </p>
              <ul className="space-y-3">
                {themeData.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
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
                    <span className="text-sm text-taupe-soft">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Photo
                  seed={h}
                  offset={2}
                  alt={`Décoration ${themeData.name.toLowerCase()} Lyon`}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  prefer="portrait"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-gold/30" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b border-l border-gold/30" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-rose">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Questions fréquentes
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe">
              {themeData.name} : vos questions
            </h2>
          </div>
          <div className="space-y-6">
            {themeData.faqQuestions.map((faq) => (
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

      {/* Autres styles */}
      <section className="py-20 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Explorez nos styles
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe">
              Découvrez nos autres styles de mariage
            </h2>
            <p className="text-taupe-light mt-4">
              Chaque couple est unique. Trouvez le style qui vous ressemble.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherThemes.map((t) => (
              <Link
                key={t.slug}
                href={`/wedding-planner/style/${t.slug}`}
                className="group border border-gold/10 bg-white p-8 hover:border-gold transition-all duration-300"
              >
                <p className="text-[9px] uppercase tracking-[0.3em] text-gold mb-2">
                  Style de mariage
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

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Photo
            seed={h}
            offset={3}
            alt={`Organisation ${themeData.name.toLowerCase()} Lyon`}
            className="object-cover"
            sizes="100vw"
            prefer="landscape"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/75 via-taupe/60 to-taupe/85" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <div className="luxury-line mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-[1.1]">
            Votre {themeData.name.toLowerCase()}
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
