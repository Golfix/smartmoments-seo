import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Décoration Mariage Haut de Gamme Lyon | Smart Moments Event",
  description:
    "Décorateur de mariage haut de gamme à Lyon. Scénographie sur mesure, arches florales, décoration de table, mise en lumière. Styles champêtre, bohème, moderne, classique. Devis gratuit.",
  keywords: [
    "décoration mariage lyon",
    "décorateur mariage haut de gamme",
    "décoration mariage sur mesure",
    "wedding design lyon",
    "scénographie mariage lyon",
    "décoration florale mariage lyon",
    "arche florale mariage",
    "décoration table mariage lyon",
    "décoration mariage champêtre lyon",
    "décoration mariage bohème lyon",
  ],
  alternates: { canonical: "https://www.smartmoments.fr/services/decoration" },
  openGraph: {
    title: "Décoration Mariage Haut de Gamme Lyon",
    description:
      "Scénographie et décoration de mariage sur mesure à Lyon. Créations florales, mise en lumière, mobilier d'exception.",
    url: "https://www.smartmoments.fr/services/decoration",
    images: [
      {
        url: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-40-1_3_306698-168546595086946.jpeg",
        width: 960,
        height: 640,
        alt: "Décoration mariage haut de gamme Lyon - Smart Moments Event",
      },
    ],
  },
};

export default function DecorationPage() {
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
        name: "Services",
        item: "https://www.smartmoments.fr/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Décoration Mariage",
        item: "https://www.smartmoments.fr/services/decoration",
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Décoration de Mariage Haut de Gamme",
    provider: {
      "@type": "LocalBusiness",
      name: "Smart Moments Event",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Villeurbanne",
        addressRegion: "Rhône-Alpes",
        addressCountry: "FR",
      },
    },
    serviceType: [
      "Décoration de mariage",
      "Wedding design",
      "Scénographie événementielle",
    ],
    areaServed: [
      { "@type": "City", name: "Lyon" },
      { "@type": "City", name: "Villeurbanne" },
      { "@type": "AdministrativeArea", name: "Rhône-Alpes" },
    ],
    description:
      "Décoration de mariage haut de gamme et scénographie sur mesure à Lyon. Arches florales, décoration de table, mise en lumière, mobilier d'exception.",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quels styles de décoration proposez-vous pour un mariage ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous créons des décorations dans tous les styles : champêtre et rustique, bohème et naturel, moderne et épuré, classique et raffiné, romantique et floral, ou encore glamour et luxueux. Chaque décoration est entièrement sur mesure et conçue en fonction de vos goûts, du lieu de réception et de votre budget.",
        },
      },
      {
        "@type": "Question",
        name: "Comment se déroule la création de la décoration de mariage ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous commençons par un rendez-vous découverte pour comprendre vos envies et votre univers. Nous réalisons ensuite une planche d'inspiration et un projet de scénographie détaillé. Après validation, nous gérons la location du mobilier, les compositions florales, la mise en lumière et l'installation complète le jour J.",
        },
      },
      {
        "@type": "Question",
        name: "Peut-on réserver uniquement la décoration sans l'organisation complète ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bien sûr ! Notre prestation de décoration est entièrement indépendante. Vous pouvez nous confier uniquement le wedding design et la scénographie de votre mariage, même si vous organisez le reste vous-même ou avec un autre wedding planner.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous aussi pour la cérémonie laïque ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nous décorons à la fois la cérémonie (laïque ou religieuse) et la réception. Arche de cérémonie, allée des invités, espace cocktail, salle de réception, plan de table : chaque espace est pensé et décoré de manière cohérente pour créer un univers harmonieux tout au long de votre journée.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
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
          { label: "Services", href: "/services" },
          { label: "Décoration Mariage" },
        ]}
      />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-40-1_3_306698-168546595086946.jpeg"
            alt="Décoration de mariage haut de gamme à Lyon avec arche florale"
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
              Wedding Design
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-[0.95]">
            Décoration de{" "}
            <span className="text-gold-gradient italic">Mariage</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
            Scénographie sur mesure et décoration haut de gamme pour un mariage
            à votre image à Lyon et en Rhône-Alpes.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* Notre approche */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <AnimateOnScroll animation="fade-right" className="w-full lg:w-1/2">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-40-1_3_306698-168546595086946.jpeg"
                    alt="Décoration florale mariage haut de gamme Lyon"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-gold/30" />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b border-r border-gold/30" />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" className="w-full lg:w-1/2">
              <div className="luxury-line-left mb-6" />
              <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-2">
                Notre savoir-faire
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe mb-6">
                Une scénographie sur mesure
              </h2>
              <p className="text-taupe-soft leading-relaxed mb-6">
                Chez Smart Moments Event, nous concevons chaque décoration de mariage comme
                une oeuvre d&apos;art unique. Nos wedding designers s&apos;imprègnent de votre
                histoire, de vos goûts et de votre personnalité pour créer un univers
                visuel qui vous ressemble. Du premier croquis à l&apos;installation finale,
                chaque détail est pensé avec soin et raffinement.
              </p>
              <p className="text-taupe-soft leading-relaxed mb-8">
                Nous travaillons avec les meilleurs artisans fleuristes et fournisseurs de
                mobilier haut de gamme de la région lyonnaise pour garantir une qualité
                irréprochable. Arches monumentales, centres de table spectaculaires, jeux
                de lumière féeriques : nous transformons votre lieu de réception en un
                décor de rêve qui éblouira vos invités.
              </p>
              <ul className="space-y-3">
                {[
                  "Planche d'inspiration et moodboard personnalisé",
                  "Projet de scénographie 3D détaillé",
                  "Compositions florales sur mesure",
                  "Mobilier et accessoires haut de gamme",
                  "Installation et démontage complets",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 text-gold mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-taupe-soft text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Styles de décoration */}
      <section className="py-28 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Inspirations
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Nos styles de décoration
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Chaque couple est unique. Nous adaptons notre créativité à votre
              univers pour une décoration de mariage qui vous ressemble parfaitement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Champêtre & Rustique",
                description:
                  "Bois brut, toile de jute, lavande et fleurs des champs. Un mariage champêtre chaleureux dans un domaine ou une grange rénovée, avec une atmosphère naturelle et authentique.",
              },
              {
                title: "Bohème & Naturel",
                description:
                  "Herbes de la pampa, macramé, couleurs terracotta et nude. Un style libre et poétique qui célèbre la nature, les matières brutes et l'élégance décontractée.",
              },
              {
                title: "Moderne & Épuré",
                description:
                  "Lignes graphiques, palette minimaliste, transparence et géométrie. Un design contemporain et sophistiqué pour les couples qui aiment la simplicité chic.",
              },
              {
                title: "Classique & Raffiné",
                description:
                  "Dorure, cristal, roses blanches et chandeliers. L'élégance intemporelle des grands mariages avec des matériaux nobles et une attention au détail irréprochable.",
              },
              {
                title: "Romantique & Floral",
                description:
                  "Cascades de fleurs, tons pastel, voilages et pétales. Un univers tout en douceur et en poésie pour un mariage féerique et enchanteur.",
              },
              {
                title: "Glamour & Luxueux",
                description:
                  "Velours, or, miroirs et compositions florales opulentes. Un décor spectaculaire et somptueux qui transforme votre mariage en soirée de gala.",
              },
            ].map((style) => (
              <AnimateOnScroll key={style.title} animation="fade-up">
                <div className="luxury-card border border-gold/10 bg-white p-8 h-full">
                  <h3 className="text-lg font-heading font-bold text-taupe mb-3">
                    {style.title}
                  </h3>
                  <p className="text-taupe-light text-sm leading-relaxed">
                    {style.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-28 bg-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Notre méthode
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Comment nous travaillons
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Un processus créatif structuré pour donner vie à votre vision,
              étape par étape, sans stress et en toute transparence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Rendez-vous Découverte",
                description:
                  "Nous échangeons sur vos envies, votre thème, vos couleurs et votre budget. Nous visitons ensemble votre lieu de réception.",
              },
              {
                step: "02",
                title: "Conception Créative",
                description:
                  "Nous créons un moodboard, une planche d'inspiration et un projet de scénographie détaillé avec visuels et plan d'implantation.",
              },
              {
                step: "03",
                title: "Sourcing & Préparation",
                description:
                  "Nous sélectionnons les fleurs, le mobilier, les textiles et tous les éléments décoratifs auprès de nos artisans partenaires.",
              },
              {
                step: "04",
                title: "Installation Jour J",
                description:
                  "Notre équipe installe l'intégralité de la décoration le jour de votre mariage et gère le démontage en fin de soirée.",
              },
            ].map((item) => (
              <AnimateOnScroll key={item.step} animation="fade-up">
                <div className="text-center">
                  <span className="text-5xl font-heading font-bold text-gold/20 block mb-4">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-taupe mb-3">
                    {item.title}
                  </h3>
                  <p className="text-taupe-light text-sm leading-relaxed">
                    {item.description}
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
              Tout savoir sur la décoration
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Quels styles de décoration proposez-vous pour un mariage ?",
                a: "Nous créons des décorations dans tous les styles : champêtre et rustique, bohème et naturel, moderne et épuré, classique et raffiné, romantique et floral, ou encore glamour et luxueux. Chaque décoration est entièrement sur mesure et conçue en fonction de vos goûts, du lieu de réception et de votre budget.",
              },
              {
                q: "Comment se déroule la création de la décoration de mariage ?",
                a: "Nous commençons par un rendez-vous découverte pour comprendre vos envies et votre univers. Nous réalisons ensuite une planche d'inspiration et un projet de scénographie détaillé. Après validation, nous gérons la location du mobilier, les compositions florales, la mise en lumière et l'installation complète le jour J.",
              },
              {
                q: "Peut-on réserver uniquement la décoration sans l'organisation complète ?",
                a: "Bien sûr ! Notre prestation de décoration est entièrement indépendante. Vous pouvez nous confier uniquement le wedding design et la scénographie de votre mariage, même si vous organisez le reste vous-même ou avec un autre wedding planner.",
              },
              {
                q: "Intervenez-vous aussi pour la cérémonie laïque ?",
                a: "Oui, nous décorons à la fois la cérémonie (laïque ou religieuse) et la réception. Arche de cérémonie, allée des invités, espace cocktail, salle de réception, plan de table : chaque espace est pensé et décoré de manière cohérente pour créer un univers harmonieux tout au long de votre journée.",
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <div className="h-[1px] bg-gradient-to-r from-gold/20 to-transparent mb-4" />
                  <p className="text-taupe-soft text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42-1_3_306698-168546594928335.jpeg"
            alt="Décoration mariage haut de gamme Lyon"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/60 via-taupe/40 to-taupe/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <div className="luxury-line mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
            Créons ensemble votre décor de rêve
          </h2>
          <p className="text-white/50 text-lg mb-12 leading-relaxed font-light">
            Parlez-nous de votre vision et recevez un devis personnalisé
            gratuit pour la décoration de votre mariage.
          </p>
          <Link
            href="/contact"
            className="btn-luxury inline-block bg-gold text-white px-12 py-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gold-dark transition-colors"
          >
            Demander un Devis Gratuit
          </Link>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-sm">
            <Link href="/services" className="text-gold hover:underline">
              Tous nos services
            </Link>
            <span className="text-white/20 hidden sm:inline">|</span>
            <Link href="/galerie" className="text-gold hover:underline">
              Voir notre galerie
            </Link>
            <span className="text-white/20 hidden sm:inline">|</span>
            <Link href="/services/photobooth" className="text-gold hover:underline">
              Photobooth & Vidéo 360°
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
