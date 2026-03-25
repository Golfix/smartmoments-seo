import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const services = [
  {
    title: "Organisation de Mariage",
    subtitle: "Clé en main",
    description:
      "De la conception à la réalisation, nous orchestrons votre mariage de A à Z. Recherche du lieu, sélection des prestataires, gestion du budget et coordination complète.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    href: "/services/mariage",
  },
  {
    title: "Décoration Haut de Gamme",
    subtitle: "Wedding Design",
    description:
      "Nos décorateurs et wedding designers créent des scénographies sur mesure : arches fleuries, compositions florales, mise en lumière, tables raffinées.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    href: "/services/decoration",
  },
  {
    title: "Photobooth & Animation",
    subtitle: "Souvenirs uniques",
    description:
      "Photobooth miroir magique, vidéo 360° immersive, animations originales. Divertissez vos invités et créez des souvenirs inoubliables.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    href: "/services/photobooth",
  },
  {
    title: "Coordination Jour J",
    subtitle: "Sérénité totale",
    description:
      "Notre coordinatrice de mariage prend tout en charge le jour J. Gestion du timing, interface prestataires, imprévus : profitez sans stress.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    href: "/services/mariage",
  },
];

const testimonials = [
  {
    name: "Antoine & Marie",
    text: "Une coordination et une gentillesse sans faille. Smart Moments a su transformer notre vision en réalité. Chaque détail était parfait, de la cérémonie laïque à la soirée dansante. Notre mariage était tout simplement magique.",
    rating: 5,
    event: "Mariage — 150 invités",
  },
  {
    name: "Laetitia & Thomas",
    text: "Une décoration sublime, un service irréprochable. L'équipe est attentive, investie et passionnée. La scénographie était à couper le souffle, avec un goût, un raffinement et une élégance dans chaque détail.",
    rating: 5,
    event: "Mariage — 200 invités",
  },
  {
    name: "Leslie & David",
    text: "La perfection existe ! Professionnalisme, flexibilité et souci du détail du début à la fin. L'équipe fait en sorte que tous vos souhaits se réalisent et que vous vous sentiez bien tout au long de la préparation et du jour J.",
    rating: 5,
    event: "Mariage — 180 invités",
  },
];

const galleryImages = [
  {
    src: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-30-at-10-54-55-1_3_306698-168563709678965.jpeg",
    alt: "Décoration soirée dansante mariage haut de gamme Lyon",
  },
  {
    src: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41-3_3_306698-168546594978953.jpeg",
    alt: "Cérémonie laïque avec arche florale Lyon",
  },
  {
    src: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-40-1_3_306698-168546595086946.jpeg",
    alt: "Sortie des mariés décoration florale",
  },
  {
    src: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41_3_306698-168546595030467.jpeg",
    alt: "Décoration salle de réception mariage élégant",
  },
  {
    src: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42-1_3_306698-168546594928335.jpeg",
    alt: "Arche fleurie cérémonie mariage champêtre Lyon",
  },
  {
    src: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41-1_3_306698-168546595088459.jpeg",
    alt: "Détails décoration table mariage raffiné",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien coûte un wedding planner à Lyon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nos prestations de wedding planning à Lyon démarrent à partir de 200 €. Le tarif varie selon la formule choisie (coordination jour J, prestation partielle ou organisation complète) et le nombre d'invités. Nous proposons un devis gratuit et personnalisé, avec possibilité de paiement en plusieurs fois.",
        },
      },
      {
        "@type": "Question",
        name: "Quelle est la différence entre un wedding planner et un coordinateur jour J ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le wedding planner vous accompagne de A à Z dans l'organisation de votre mariage : recherche du lieu, sélection des prestataires, gestion du budget, création du rétroplanning. La coordinatrice jour J intervient uniquement le jour de votre mariage pour orchestrer le déroulé, gérer les prestataires sur place et s'assurer que tout se passe parfaitement.",
        },
      },
      {
        "@type": "Question",
        name: "Dans quelles villes intervenez-vous ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Basés à Lyon, nous intervenons principalement à Lyon et dans toute la région Rhône-Alpes (Villeurbanne, Vienne, Annecy, Grenoble, Saint-Étienne). Nous organisons également des événements dans toute la France : Paris, Marseille, Bordeaux, Nice et au-delà.",
        },
      },
      {
        "@type": "Question",
        name: "Quels types d'événements organisez-vous ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous organisons tous types d'événements : mariages, baptêmes, bar-mitzvahs, cérémonies laïques, fiançailles, anniversaires, séminaires d'entreprise, conférences, fêtes d'entreprise et événements privés. Chaque prestation est personnalisée selon vos envies et votre budget.",
        },
      },
      {
        "@type": "Question",
        name: "Proposez-vous la location de photobooth pour les mariages ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nous proposons la location de photobooth miroir magique et de vidéo 360° pour les mariages et événements à Lyon. Le photobooth inclut les impressions photo instantanées, les accessoires et une galerie en ligne partageable. C'est l'animation préférée des invités !",
        },
      },
      {
        "@type": "Question",
        name: "Comment choisir son wedding planner à Lyon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pour bien choisir votre wedding planner à Lyon, vérifiez les avis clients (nous sommes notés 4.6/5 sur Mariages.net), demandez à voir des réalisations passées, assurez-vous que le feeling passe lors du premier rendez-vous gratuit, et comparez les formules proposées. Un bon wedding planner doit être à l'écoute, organisé et disposer d'un réseau de prestataires de confiance.",
        },
      },
      {
        "@type": "Question",
        name: "Quel budget prévoir pour un mariage à Lyon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le budget d'un mariage à Lyon varie selon le nombre d'invités, le lieu de réception et les prestations souhaitées. En moyenne, comptez entre 15 000 € et 50 000 € pour un mariage de 100 à 200 invités. Notre rôle de wedding planner est justement de vous aider à optimiser votre budget pour un résultat exceptionnel, quel que soit le montant.",
        },
      },
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
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventPlanner",
    name: "Smart Moments Event",
    description:
      "Wedding planner et organisateur d'événements haut de gamme à Lyon. Organisation de mariage clé en main, coordination jour J, décoration luxe, photobooth. Mariages, baptêmes, bar-mitzvahs, séminaires.",
    url: "https://www.smartmoments.fr",
    telephone: "+33756987181",
    email: "smartmomentsevent@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "85 Rue André Bollier",
      addressLocality: "Lyon",
      postalCode: "69007",
      addressRegion: "Rhône-Alpes",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.764,
      longitude: 4.83566,
    },
    areaServed: [
      { "@type": "City", name: "Lyon" },
      { "@type": "City", name: "Lyon 7ème" },
      { "@type": "AdministrativeArea", name: "Rhône-Alpes" },
      { "@type": "Country", name: "France" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: "25",
      bestRating: "5",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Antoine" },
        datePublished: "2024-09-15",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Une coordination et une gentillesse sans faille. Smart Moments a su transformer notre vision en réalité.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Laetitia" },
        datePublished: "2024-11-20",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Une déco sublime, un service irréprochable. L'équipe est attentive, investie et passionnée.",
      },
    ],
    priceRange: "$$",
    image:
      "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-30-at-10-54-55-1_3_306698-168563709678965.jpeg",
    sameAs: [
      "https://www.instagram.com/weddingplanner.smartmoments/",
      "https://www.mariages.net/organisation-mariage/smart-moments--e306698",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services événementiels",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Organisation de mariage complète",
            description:
              "Wedding planning clé en main : recherche de lieu, prestataires, décoration, coordination jour J.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Coordination jour J",
            description:
              "Coordinatrice de mariage présente le jour J pour gérer le déroulé, les prestataires et les imprévus.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Décoration de mariage haut de gamme",
            description:
              "Wedding design et décoration sur mesure : arches fleuries, compositions florales, scénographie.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Location photobooth mariage",
            description:
              "Photobooth miroir magique et vidéo 360° pour mariage et événements.",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-30-at-10-54-55-1_3_306698-168563709678965.jpeg"
            alt="Organisation de mariage haut de gamme à Lyon - Smart Moments Event wedding planner"
            fill
            className="object-cover slow-zoom"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/50 via-taupe/30 to-taupe/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          {/* Logo */}
          <div className="hero-reveal hero-reveal-delay-1 flex justify-center mb-4">
            <Image
              src="/images/Logo.png"
              alt="Smart Moments Planner - Wedding Planner Lyon"
              width={200}
              height={80}
              className="w-80 sm:w-96 md:w-[26rem] h-auto brightness-0 invert"
              priority
            />
          </div>
          <h1 className="hero-reveal hero-reveal-delay-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[0.95] mb-6">
            L&apos;art de créer des
            <br />
            <span className="gold-shimmer italic">moments d&apos;exception</span>
          </h1>
          <p className="hero-reveal hero-reveal-delay-3 text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-8 font-light leading-relaxed tracking-wide">
            Organisateur d&apos;événements de prestige à Lyon. Mariage clé en
            main, coordination jour J, décoration haut de gamme et animations
            sur mesure.
          </p>
          <div className="hero-reveal hero-reveal-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-luxury pulse-glow bg-gold text-white px-12 py-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gold-dark transition-colors duration-500"
            >
              Demander un Devis Gratuit
            </Link>
            <Link
              href="/services"
              className="btn-luxury border border-white/30 text-white px-12 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-white/10 transition-all duration-500"
            >
              Découvrir nos Services
            </Link>
          </div>
        </div>

        {/* Bottom gold line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* Bandeau types d'événements */}
      <section className="py-8 bg-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-3">
            {[
              "Mariages",
              "Baptêmes",
              "Bar-Mitzvahs",
              "Cérémonies Laïques",
              "Séminaires",
              "Fêtes d'Entreprise",
              "Événements Privés",
            ].map((type, i) => (
              <div key={type} className="flex items-center gap-12">
                <p className="text-[10px] uppercase tracking-[0.3em] text-taupe-light font-light">
                  {type}
                </p>
                {i < 6 && (
                  <span className="hidden md:block w-1 h-1 rounded-full bg-gold/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section présentation */}
      <section className="py-28 md:py-36 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimateOnScroll animation="fade-right" className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41-3_3_306698-168546594978953.jpeg"
                  alt="Cérémonie laïque organisée par Smart Moments wedding planner Lyon"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Badge flottant */}
              <div className="absolute -bottom-8 -right-4 md:-right-8 bg-white text-taupe p-8 shadow-xl shadow-gold/10">
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className={`w-3 h-3 ${i <= 4 ? "text-gold" : "text-gold/30"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-3xl font-heading font-bold text-gold-gradient">4.6/5</p>
                <p className="text-[10px] text-taupe-light uppercase tracking-[0.2em] mt-1">
                  Mariages.net
                </p>
                <p className="text-[10px] text-gold/60 mt-0.5">92% recommandé</p>
              </div>
              {/* Decorative corner */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-gold/30" />
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" delay={200}>
              <div className="luxury-line-left mb-6" />
              <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
                Qui sommes-nous
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-taupe leading-[1.1] mb-8">
                Créateurs de moments
                <br />
                <span className="text-gold-gradient italic">inoubliables</span>
              </h2>
              <p className="text-taupe-soft leading-relaxed mb-6">
                Basée à Lyon, au coeur de la métropole lyonnaise, notre
                agence d&apos;organisation de mariage réunit une équipe de
                <strong> wedding planners qualifiés</strong>, de{" "}
                <strong>décorateurs haut de gamme</strong> et de wedding
                designers créatifs qui vous accompagnent à chaque étape.
              </p>
              <p className="text-taupe-soft leading-relaxed mb-10">
                Que ce soit pour un{" "}
                <strong>mariage élégant</strong>, un baptême émouvant, une
                bar-mitzvah festive ou un{" "}
                <strong>séminaire d&apos;entreprise</strong> mémorable, nous
                mettons notre expertise au service de vos rêves. De Lyon à
                Paris, nous intervenons dans toute la France.
              </p>
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-3 text-gold text-[11px] font-semibold uppercase tracking-[0.3em] hover:gap-5 transition-all duration-500 group"
              >
                Découvrir notre histoire
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 md:py-36 bg-rose" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="reveal" className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Nos prestations
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-taupe mb-6">
              Des services d&apos;exception
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Organisation de mariage complète, coordination jour J, décoration
              haut de gamme et animation photobooth. Tout pour faire de votre
              événement un moment inoubliable.
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <AnimateOnScroll key={service.title} animation="fade-up" delay={idx * 150}>
              <Link
                href={service.href}
                className="luxury-card group bg-white border border-gold/10 p-8 block"
              >
                <div className="text-gold/60 mb-6 group-hover:text-gold transition-colors duration-500">
                  {service.icon}
                </div>
                <p className="text-gold/40 text-[9px] uppercase tracking-[0.3em] mb-2">
                  {service.subtitle}
                </p>
                <h3 className="text-lg font-heading font-bold text-taupe mb-4">
                  {service.title}
                </h3>
                <p className="text-taupe-light text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-8 flex items-center gap-2 text-gold text-[10px] uppercase tracking-[0.2em] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">
                  En savoir plus
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-taupe-light text-sm">
              Prestations sur mesure <span className="text-gold">à partir de 200 &euro;</span> &mdash; Devis gratuit et personnalisé
            </p>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-28 md:py-36 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-taupe mb-6">
              Nos réalisations
            </h2>
            <p className="text-taupe-soft leading-relaxed">
              Décoration de mariage, cérémonies laïques, arches fleuries,
              scénographies sur mesure. Découvrez quelques-uns des événements
              que nous avons eu le plaisir d&apos;organiser.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <div className={`relative ${i === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                  />
                  <div className="absolute inset-0 bg-taupe/0 group-hover:bg-taupe/30 transition-colors duration-700" />
                  <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 m-3 transition-all duration-700" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              href="/galerie"
              className="btn-luxury inline-flex items-center gap-3 bg-gold text-white px-12 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-gold-dark transition-colors duration-500"
            >
              Voir toute la galerie
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-28 md:py-36 bg-champagne overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Avis clients
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-taupe mb-6">
              Ils nous ont fait confiance
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Noté <strong className="text-gold">4.6/5</strong> sur Mariages.net
              et recommandé par <strong className="text-gold">92%</strong> des
              couples. Découvrez leurs témoignages.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="luxury-card border border-gold/10 bg-white p-10"
              >
                <StarRating count={t.rating} />
                <p className="text-taupe-soft leading-relaxed mt-6 mb-8 italic text-sm">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-gold/10 pt-6">
                  <p className="font-heading font-semibold text-taupe">
                    {t.name}
                  </p>
                  <p className="text-gold/40 text-[10px] uppercase tracking-[0.2em] mt-1">
                    {t.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SEO Section */}
      <section className="py-28 md:py-36 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Questions fréquentes
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe">
              Tout savoir sur nos prestations
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Combien coûte un wedding planner à Lyon ?",
                a: "Nos prestations de wedding planning à Lyon démarrent à partir de 200 €. Le tarif varie selon la formule choisie (coordination jour J, prestation partielle ou organisation complète) et le nombre d'invités. Nous proposons un devis gratuit et personnalisé, avec possibilité de paiement en plusieurs fois.",
              },
              {
                q: "Quelle est la différence entre un wedding planner et un coordinateur jour J ?",
                a: "Le wedding planner vous accompagne de A à Z dans l'organisation de votre mariage : recherche du lieu, sélection des prestataires, gestion du budget, création du rétroplanning. La coordinatrice jour J intervient uniquement le jour de votre mariage pour orchestrer le déroulé, gérer les prestataires sur place et s'assurer que tout se passe parfaitement.",
              },
              {
                q: "Dans quelles villes intervenez-vous ?",
                a: "Basés à Lyon, nous intervenons principalement à Lyon et dans toute la région Rhône-Alpes (Villeurbanne, Vienne, Annecy, Grenoble, Saint-Étienne). Nous organisons également des événements dans toute la France : Paris, Marseille, Bordeaux, Nice et au-delà.",
              },
              {
                q: "Quels types d'événements organisez-vous ?",
                a: "Nous organisons tous types d'événements : mariages, baptêmes, bar-mitzvahs, cérémonies laïques, fiançailles, anniversaires, séminaires d'entreprise, conférences, fêtes d'entreprise et événements privés. Chaque prestation est personnalisée selon vos envies et votre budget.",
              },
              {
                q: "Proposez-vous la location de photobooth pour les mariages ?",
                a: "Oui, nous proposons la location de photobooth miroir magique et de vidéo 360° pour les mariages et événements à Lyon. Le photobooth inclut les impressions photo instantanées, les accessoires et une galerie en ligne partageable. C'est l'animation préférée des invités !",
              },
              {
                q: "Comment choisir son wedding planner à Lyon ?",
                a: "Pour bien choisir votre wedding planner à Lyon, vérifiez les avis clients (nous sommes notés 4.6/5 sur Mariages.net et recommandés par 92% des couples), demandez à voir des réalisations passées, et assurez-vous que le feeling passe lors du premier rendez-vous. Chez Smart Moments, la première consultation est gratuite et sans engagement.",
              },
              {
                q: "Quel budget prévoir pour un mariage à Lyon ?",
                a: "Le budget d'un mariage à Lyon varie selon le nombre d'invités, le lieu de réception et les prestations souhaitées. En moyenne, comptez entre 15 000 € et 50 000 € pour un mariage de 100 à 200 invités. Notre rôle de wedding planner est justement de vous aider à optimiser votre budget pour un résultat exceptionnel, quel que soit le montant.",
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

      {/* CTA final */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42-1_3_306698-168546594928335.jpeg"
            alt="Arche fleurie pour cérémonie de mariage - wedding planner Lyon"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/60 via-taupe/40 to-taupe/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <div className="luxury-line mb-8" />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-[1.1]">
            Prêt à créer votre
            <br />
            <span className="text-gold-gradient italic">moment parfait</span> ?
          </h2>
          <p className="text-white/70 text-lg mb-12 leading-relaxed font-light">
            Première consultation gratuite et sans engagement.
            <br />
            Parlez-nous de votre projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-luxury bg-gold text-white px-12 py-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gold-dark transition-colors duration-500"
            >
              Demander un Devis Gratuit
            </Link>
            <a
              href="tel:0756987181"
              className="btn-luxury border border-white/30 text-white px-12 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-white/10 transition-all duration-500"
            >
              07 56 98 71 81
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
