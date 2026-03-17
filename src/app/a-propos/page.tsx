import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "À Propos - Agence Wedding Planner & Événementiel Lyon",
  description:
    "Découvrez Smart Moments Event, agence d'organisation de mariage et d'événements haut de gamme à Lyon Villeurbanne. Équipe de wedding planners qualifiés, décorateurs créatifs et coordinatrices expérimentées. 4.6/5 sur Mariages.net, 92% recommandé.",
  alternates: { canonical: "https://www.smartmoments.fr/a-propos" },
  openGraph: {
    title: "À Propos | Smart Moments Event Lyon",
    description:
      "L'équipe Smart Moments : des passionnés de l'événementiel haut de gamme à votre service à Lyon.",
    url: "https://www.smartmoments.fr/a-propos",
    images: [{ url: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/img-3255_3_306698-168573250631346.jpeg", width: 960, height: 640, alt: "Équipe Smart Moments Event wedding planner Lyon" }],
  },
};

const values = [
  {
    title: "Excellence",
    description:
      "Chaque détail compte. Nous visons la perfection dans chaque prestation pour garantir des événements à la hauteur de vos attentes les plus exigeantes.",
  },
  {
    title: "Écoute",
    description:
      "Votre vision est notre point de départ. Nous prenons le temps de comprendre vos envies, votre histoire et vos rêves pour créer un événement qui vous ressemble.",
  },
  {
    title: "Créativité",
    description:
      "Chaque événement est une création unique. Nos designers repoussent les limites pour imaginer des univers qui surprennent et émerveillent vos invités.",
  },
  {
    title: "Sérénité",
    description:
      "Le jour J, vous n'avez qu'une chose à faire : profiter. Notre équipe gère tout dans les coulisses pour que chaque instant soit vécu pleinement.",
  },
];

const stats = [
  { number: "4.6/5", label: "sur Mariages.net" },
  { number: "92%", label: "recommandé" },
  { number: "100+", label: "événements" },
  { number: "500+", label: "invités max" },
];

export default function AProposPage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Smart Moments Event",
    url: "https://www.smartmoments.fr",
    logo: "https://www.smartmoments.fr/favicon.ico",
    description:
      "Agence d'organisation de mariage et d'événements haut de gamme à Lyon Villeurbanne. Wedding planners qualifiés, décorateurs créatifs, coordinatrices expérimentées.",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Villeurbanne",
        addressRegion: "Rhône-Alpes",
        postalCode: "69100",
        addressCountry: "FR",
      },
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33756987181",
      contactType: "customer service",
      email: "smartmomentsevent@gmail.com",
      availableLanguage: ["French"],
      areaServed: "FR",
    },
    sameAs: [
      "https://www.instagram.com/weddingplanner.smartmoments/",
      "https://www.mariages.net/organisation-mariage/smart-moments--e306698",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: "25",
      bestRating: "5",
    },
    knowsAbout: [
      "Organisation de mariage",
      "Wedding planning",
      "Coordination jour J",
      "Décoration de mariage haut de gamme",
      "Location photobooth",
      "Organisation événement d'entreprise",
      "Cérémonie laïque",
    ],
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
        name: "À Propos",
        item: "https://www.smartmoments.fr/a-propos",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Breadcrumb items={[{ label: "À Propos" }]} />

      {/* Hero */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41-1_3_306698-168546595088459.jpeg"
            alt="Équipe Smart Moments Event organisateur événement Lyon"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/60 via-taupe/30 to-taupe/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
            <p className="text-gold text-[10px] uppercase tracking-[0.5em]">Notre histoire</p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-[0.95]">
            À <span className="text-gold-gradient italic">Propos</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
            L&apos;équipe passionnée derrière vos événements d&apos;exception à
            Lyon.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* Histoire */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="luxury-line-left mb-6" />
              <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
                Smart Moments Event
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-8 leading-tight">
                Des événements pour vous,
                <br />
                <span className="text-gold-gradient italic">avec vous</span>
              </h2>
              <p className="text-taupe-soft leading-relaxed mb-6">
                Smart Moments Event est née d&apos;une passion commune pour
                l&apos;événementiel et d&apos;une conviction profonde : chaque
                moment de la vie mérite d&apos;être célébré avec éclat et
                raffinement.
              </p>
              <p className="text-taupe-soft leading-relaxed mb-6">
                Basée à Villeurbanne, au coeur de la métropole lyonnaise, notre
                agence réunit une équipe de{" "}
                <strong>wedding planners qualifiés</strong>, de{" "}
                <strong>décorateurs haut de gamme</strong> et de wedding
                designers créatifs, accompagnés d&apos;animateurs compétents.
              </p>
              <p className="text-taupe-soft leading-relaxed">
                De Lyon à Marseille, en passant par Paris, nous intervenons dans
                toute la France pour transformer vos rêves en réalité. Notre
                réseau de partenaires fiables nous permet de proposer des
                événements adaptés à tous les budgets, sans jamais compromettre
                la qualité.
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/img-3255_3_306698-168573250631346.jpeg"
                  alt="Smart Moments Event équipe événementiel prestige Lyon"
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

      {/* Stats */}
      <section className="py-16 bg-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-heading font-bold text-gold-gradient mb-2">
                  {stat.number}
                </p>
                <p className="text-[10px] text-taupe-light uppercase tracking-[0.3em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-28 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Ce qui nous anime
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe">
              Nos Valeurs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="luxury-card bg-white border border-gold/10 p-8 text-center">
                <h3 className="text-lg font-heading font-bold text-taupe mb-4">
                  {value.title}
                </h3>
                <div className="w-8 h-[1px] bg-gold mx-auto mb-4" />
                <p className="text-taupe-soft text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42-1_3_306698-168546594928335.jpeg"
            alt="Smart Moments Event Lyon"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/60 via-taupe/40 to-taupe/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <div className="luxury-line mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
            Envie de nous rencontrer ?
          </h2>
          <p className="text-white/60 text-lg mb-12 font-light">
            Première consultation gratuite et sans engagement. Parlons de votre
            projet autour d&apos;un café.
          </p>
          <Link
            href="/contact"
            className="btn-luxury inline-block bg-gold text-white px-12 py-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gold-dark transition-colors"
          >
            Prendre Contact
          </Link>
        </div>
      </section>

      {/* Découvrir nos services */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe">
              Découvrez ce que nous faisons
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Wedding Planner Lyon", description: "Organisation de mariage complète, de la première rencontre au jour J.", href: "/wedding-planner" },
              { title: "Nos Services", description: "Décoration, photobooth, coordination jour J et tous nos services événementiels.", href: "/services" },
              { title: "Notre Galerie", description: "Découvrez nos réalisations en images : mariages, cérémonies et événements.", href: "/galerie" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="luxury-card border border-gold/10 bg-white p-8 block group">
                <h3 className="text-lg font-heading font-bold text-taupe mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="text-taupe-soft text-sm leading-relaxed mb-4">{item.description}</p>
                <span className="text-gold text-[10px] uppercase tracking-[0.2em] font-semibold">En savoir plus →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
