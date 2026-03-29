import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { cities, getCityBySlug } from "@/data/cities";
import { serviceTypes, getServiceTypeBySlug } from "@/data/service-types";
import { departments } from "@/data/departments";
import AnimateOnScroll from "@/components/AnimateOnScroll";

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function pop(city: { population: string }): number {
  return parseInt(city.population.replace(/\s/g, ""));
}

function cityCategory(city: { population: string }): "grande" | "moyenne" | "petite" {
  const p = pop(city);
  if (p >= 30000) return "grande";
  if (p >= 10000) return "moyenne";
  return "petite";
}

function replacePlaceholders(text: string, city: { name: string; department: string; region: string; nearbyCity: string }): string {
  return text
    .replace(/\{city\}/g, city.name)
    .replace(/\{department\}/g, city.department)
    .replace(/\{region\}/g, city.region)
    .replace(/\{nearbyCity\}/g, city.nearbyCity);
}

// Tier logic for generateStaticParams
const tier1Slugs = serviceTypes.map((s) => s.slug); // all 8
const tier2Slugs = ["organisation-mariage", "coordinatrice-jour-j", "decoration-mariage"];
const tier3Slugs = ["organisation-mariage"];

export function generateStaticParams() {
  const params: { serviceType: string; ville: string }[] = [];

  for (const city of cities) {
    const p = pop(city);
    const slugs = p >= 30000 ? tier1Slugs : p >= 10000 ? tier2Slugs : p >= 5000 ? tier3Slugs : [];
    for (const slug of slugs) {
      params.push({ serviceType: slug, ville: city.slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceType: string; ville: string }>;
}): Promise<Metadata> {
  const { serviceType, ville } = await params;
  const service = getServiceTypeBySlug(serviceType);
  const city = getCityBySlug(ville);
  if (!service || !city) return {};

  const title = replacePlaceholders(service.metaTitle, city);
  const description = replacePlaceholders(service.metaDescription, city);

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.smartmoments.fr/${service.slug}/${city.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.smartmoments.fr/${service.slug}/${city.slug}`,
    },
    keywords: service.keywords.map((k) => replacePlaceholders(k, city)),
  };
}

export default async function ServiceTypeCityPage({
  params,
}: {
  params: Promise<{ serviceType: string; ville: string }>;
}) {
  const { serviceType, ville } = await params;
  const service = getServiceTypeBySlug(serviceType);
  const city = getCityBySlug(ville);
  if (!service || !city) notFound();

  const cat = cityCategory(city);
  const h = hashCode(city.slug + service.slug);

  // Nearby cities with same service
  const dept = departments.find((d) => d.name === city.department);
  const p = pop(city);
  const currentTierSlugs = p >= 30000 ? tier1Slugs : p >= 10000 ? tier2Slugs : tier3Slugs;
  const hasServicePage = currentTierSlugs.includes(service.slug);

  const nearbyCities = (dept?.cities || [])
    .filter((c) => c.slug !== city.slug && pop(c) >= 5000)
    .slice(0, 12);

  const intro = replacePlaceholders(service.intro, city);
  const features = service.features.map((f) => replacePlaceholders(f, city));
  const faq = service.faqQuestions.map((q) => ({
    q: replacePlaceholders(q.q, city),
    a: replacePlaceholders(q.a, city),
  }));

  // Extra paragraphs by city category for unique content
  const extraParas = {
    grande: [
      `En tant que grande ville du ${city.department}, ${city.name} dispose d'un vaste choix de lieux de réception, de prestataires qualifiés et de services événementiels. Notre connaissance du tissu local nous permet de vous proposer les meilleures options pour votre projet.`,
      `${city.name} et ses ${city.population} habitants offrent un cadre dynamique et varié. Que vous envisagiez un événement intime ou une grande réception, nous adaptons notre accompagnement à vos envies et à votre budget.`,
      `Avec notre expérience dans toute la région ${city.region}, nous avons tissé un réseau solide de prestataires de confiance à ${city.name} et dans les villes voisines. Ce réseau est un atout majeur pour la réussite de votre projet.`,
    ],
    moyenne: [
      `${city.name}, charmante ville du ${city.department}, offre un cadre authentique pour votre événement. À proximité de ${city.nearbyCity}, elle allie le charme d'une ville à taille humaine à l'accessibilité des grandes agglomérations.`,
      `Notre connaissance de ${city.name} et de ses environs nous permet de vous guider vers les meilleurs lieux et prestataires de la zone. Nous intervenons régulièrement dans le ${city.department} et connaissons parfaitement le territoire.`,
      `Organiser un événement à ${city.name}, c'est choisir l'authenticité et la proximité. Nous mettons notre expertise au service de votre projet pour créer un moment unique dans ce cadre privilégié.`,
    ],
    petite: [
      `${city.name}, située dans le ${city.department} en ${city.region}, est un écrin de charme pour un événement intimiste. À proximité de ${city.nearbyCity}, la commune offre un cadre préservé et authentique.`,
      `Même dans les communes plus petites comme ${city.name}, nous mobilisons notre réseau de prestataires couvrant tout le ${city.department} pour vous garantir un service irréprochable.`,
      `Choisir ${city.name} pour votre événement, c'est opter pour un cadre intime et personnel. Nous adaptons nos prestations à la taille et au style de chaque projet, que ce soit à ${city.name} ou dans les communes voisines.`,
    ],
  };
  const extraPara = extraParas[cat][h % extraParas[cat].length];

  // JSON-LD
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: replacePlaceholders(service.title, city),
    description: intro,
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
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
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
    mainEntity: faq.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: { "@type": "Answer", text: q.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="relative bg-champagne pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: service.name, href: `/services/${service.slug === "organisation-mariage" ? "mariage" : service.slug === "coordinatrice-jour-j" ? "mariage" : service.slug === "decoration-mariage" ? "decoration" : service.slug === "photobooth-mariage" ? "photobooth" : service.slug === "organisation-bapteme" ? "bapteme" : service.slug === "organisation-anniversaire" ? "anniversaire" : service.slug === "seminaire-entreprise" ? "seminaire-entreprise" : "bar-mitzvah"}` },
              { label: city.name },
            ]}
          />
          <AnimateOnScroll animation="fade-up">
            <div className="luxury-line mx-auto mb-8" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-taupe leading-tight mb-4">
              {service.name}
              <span className="block text-gold mt-2">à {city.name}</span>
            </h1>
            <p className="text-taupe-light text-lg max-w-2xl mx-auto">
              {city.department} — {city.region}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <p className="text-taupe/80 leading-relaxed text-lg mb-6">{intro}</p>
            <p className="text-taupe/70 leading-relaxed">{extraPara}</p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-champagne">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <div className="luxury-line mx-auto mb-6" />
              <h2 className="text-2xl sm:text-3xl font-light text-taupe">
                Nos prestations à <span className="text-gold">{city.name}</span>
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <div className="luxury-card p-6 h-full">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center mb-4">
                    <span className="text-gold text-sm font-medium">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="text-taupe/80 text-sm leading-relaxed">{feature}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl font-light text-taupe mb-4">
              Votre projet à {city.name} commence ici
            </h2>
            <p className="text-taupe-light mb-8">
              Première consultation gratuite et sans engagement. Racontez-nous votre projet.
            </p>
            <Link
              href="/contact"
              className="btn-luxury inline-block px-10 py-4 text-sm tracking-widest uppercase"
            >
              Demander un devis gratuit
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-champagne">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <div className="luxury-line mx-auto mb-6" />
              <h2 className="text-2xl sm:text-3xl font-light text-taupe">
                Questions fréquentes
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="space-y-6">
            {faq.map((item, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100}>
                <div className="luxury-card p-6">
                  <h3 className="text-taupe font-medium mb-3">{item.q}</h3>
                  <p className="text-taupe-light text-sm leading-relaxed">{item.a}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby cities */}
      {nearbyCities.length > 0 && (
        <section className="py-20 bg-ivory">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-light text-taupe">
                  {service.name} dans le <span className="text-gold">{city.department}</span>
                </h2>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {nearbyCities.map((c) => {
                const cPop = pop(c);
                const cSlugs = cPop >= 30000 ? tier1Slugs : cPop >= 10000 ? tier2Slugs : tier3Slugs;
                const hasPage = cSlugs.includes(service.slug);
                return (
                  <Link
                    key={c.slug}
                    href={hasPage ? `/${service.slug}/${c.slug}` : `/wedding-planner/${c.slug}`}
                    className="luxury-card p-4 text-center hover:border-gold/40 transition-all duration-300"
                  >
                    <span className="text-taupe text-sm font-medium block">{c.name}</span>
                    <span className="text-taupe-light text-xs">{c.population} hab.</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Link to general city page */}
      <section className="py-12 bg-champagne">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-taupe-light text-sm mb-4">
            Découvrez tous nos services à {city.name}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/wedding-planner/${city.slug}`}
              className="text-gold text-sm hover:underline"
            >
              Wedding Planner {city.name}
            </Link>
            {currentTierSlugs
              .filter((s) => s !== service.slug)
              .slice(0, 4)
              .map((s) => {
                const st = getServiceTypeBySlug(s);
                if (!st) return null;
                return (
                  <Link
                    key={s}
                    href={`/${s}/${city.slug}`}
                    className="text-gold text-sm hover:underline"
                  >
                    {st.name} {city.name}
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
