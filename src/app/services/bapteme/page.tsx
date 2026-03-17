import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Organisation de Baptême à Lyon | Smart Moments Event",
  description:
    "Organisation et décoration de baptême à Lyon. Baptême religieux ou laïque, décoration sur mesure, animations, traiteur et coordination le jour J. Devis gratuit.",
  keywords: [
    "organisation baptême lyon",
    "baptême lyon",
    "décoration baptême lyon",
    "organisateur baptême lyon",
    "baptême religieux lyon",
    "baptême laïque lyon",
    "décoration baptême haut de gamme",
    "animation baptême lyon",
    "organisation fête baptême",
    "baptême sur mesure lyon",
  ],
  alternates: { canonical: "https://www.smartmoments.fr/services/bapteme" },
  openGraph: {
    title: "Organisation de Baptême à Lyon | Smart Moments Event",
    description:
      "Organisation complète de baptême à Lyon : cérémonie, décoration, animations et coordination. Baptême religieux ou laïque, sur mesure et haut de gamme.",
    url: "https://www.smartmoments.fr/services/bapteme",
    images: [
      {
        url: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-30-at-10-53-36_3_306698-168546595011373.jpeg",
        width: 960,
        height: 640,
        alt: "Organisation de baptême haut de gamme à Lyon - Smart Moments Event",
      },
    ],
  },
};

export default function BaptemePage() {
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
        name: "Organisation de Baptême",
        item: "https://www.smartmoments.fr/services/bapteme",
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Organisation de Baptême",
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
      "Organisation de baptême",
      "Décoration de baptême",
      "Coordination événementielle baptême",
    ],
    areaServed: [
      { "@type": "City", name: "Lyon" },
      { "@type": "City", name: "Villeurbanne" },
      { "@type": "AdministrativeArea", name: "Rhône-Alpes" },
    ],
    description:
      "Organisation complète de baptême à Lyon et en Rhône-Alpes. Cérémonie religieuse ou laïque, décoration sur mesure, animations, traiteur et coordination le jour J.",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quel est le prix moyen d'une organisation de baptême à Lyon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le budget d'un baptême organisé par Smart Moments Event varie en fonction du nombre d'invités, du lieu de réception, de la décoration et des prestations choisies. Nous proposons des formules adaptées à tous les budgets, à partir de prestations de décoration seule jusqu'à l'organisation complète. Contactez-nous pour un devis gratuit et personnalisé.",
        },
      },
      {
        "@type": "Question",
        name: "Organisez-vous des baptêmes religieux et laïques ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nous organisons aussi bien des baptêmes religieux (catholiques, orthodoxes, protestants) que des baptêmes civils ou laïques. Pour un baptême religieux, nous coordonnons avec l'église ou le lieu de culte. Pour un baptême laïque, nous créons une cérémonie personnalisée et émouvante selon vos souhaits.",
        },
      },
      {
        "@type": "Question",
        name: "Quels services sont inclus dans l'organisation d'un baptême ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Notre prestation comprend la recherche et la réservation du lieu de réception, la décoration complète (table, salle, espace cérémonie), la coordination avec les prestataires (traiteur, photographe, pâtissier), la gestion des faire-part, les animations pour enfants et adultes, ainsi que la coordination le jour J pour que vous puissiez profiter pleinement de ce moment.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps à l'avance faut-il réserver pour un baptême ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous recommandons de nous contacter au moins 3 à 4 mois avant la date souhaitée pour un baptême avec décoration élaborée et organisation complète. Pour une prestation de décoration seule, un délai de 6 à 8 semaines peut suffire. Plus vous réservez tôt, plus nous aurons de choix pour les lieux et prestataires.",
        },
      },
      {
        "@type": "Question",
        name: "Peut-on réserver uniquement la décoration du baptême ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolument ! Vous pouvez nous confier uniquement la décoration de votre baptême si vous souhaitez gérer l'organisation vous-même. Nous proposons des prestations de décoration sur mesure : centre de table, candy bar, arche de ballons, décoration florale, signalétique personnalisée et bien plus encore.",
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
          { label: "Organisation de Baptême" },
        ]}
      />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-30-at-10-53-36_3_306698-168546595011373.jpeg"
            alt="Organisation de baptême haut de gamme à Lyon"
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
              Célébration
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-[0.95]">
            Organisation de{" "}
            <span className="text-gold-gradient italic">Baptême</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
            Un baptême sur mesure, élégant et inoubliable pour célébrer
            ce moment unique à Lyon et en Rhône-Alpes.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* Notre accompagnement */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <AnimateOnScroll animation="fade-right" className="w-full lg:w-1/2">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-40-1_3_306698-168546595086946.jpeg"
                    alt="Décoration de baptême élégante Lyon"
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
                Un baptême organisé avec soin
              </h2>
              <p className="text-taupe-soft leading-relaxed mb-6">
                Chez Smart Moments Event, nous savons que le baptême est un
                moment précieux et chargé d&apos;émotion. Que vous souhaitiez une
                cérémonie religieuse traditionnelle ou un baptême laïque
                moderne, nous vous accompagnons dans chaque étape de
                l&apos;organisation pour créer un événement à la hauteur de ce
                jour si spécial.
              </p>
              <p className="text-taupe-soft leading-relaxed mb-8">
                De la recherche du lieu idéal à la coordination le jour J, en
                passant par la décoration, le choix du traiteur et les
                animations, nous prenons en charge l&apos;intégralité de
                l&apos;organisation de votre baptême à Lyon et dans toute la
                région Rhône-Alpes.
              </p>
              <ul className="space-y-3">
                {[
                  "Recherche et réservation du lieu de réception",
                  "Décoration sur mesure et scénographie",
                  "Coordination des prestataires (traiteur, photographe, pâtissier)",
                  "Animations enfants et adultes",
                  "Gestion des faire-part et de la papeterie",
                  "Coordination complète le jour J",
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

      {/* Types de baptêmes */}
      <section className="py-28 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Nos formules
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Types de baptêmes
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Chaque famille a sa propre vision du baptême. Nous adaptons
              notre accompagnement à vos convictions, vos traditions et vos envies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Baptême Religieux",
                description:
                  "Organisation complète de votre baptême religieux : coordination avec la paroisse ou le lieu de culte, décoration de l'église, organisation de la réception après la cérémonie. Nous gérons les échanges avec le prêtre ou le pasteur, la préparation de la cérémonie et l'ensemble de la logistique pour que vous viviez ce sacrement en toute sérénité.",
              },
              {
                title: "Baptême Laïque & Civil",
                description:
                  "Créez une cérémonie unique et personnalisée sans connotation religieuse. Nous concevons un rituel symbolique sur mesure avec des lectures, des vœux du parrain et de la marraine, et des moments d'émotion partagés. Le baptême laïque se déroule dans le lieu de votre choix : jardin, domaine, salle de réception ou même en extérieur.",
              },
              {
                title: "Baptême Intime",
                description:
                  "Pour les familles qui souhaitent un moment privilégié en petit comité, nous organisons des baptêmes intimistes raffinés. Un lieu d'exception, une décoration soignée, un menu gastronomique et une ambiance chaleureuse pour célébrer avec vos proches les plus chers dans une atmosphère cosy et élégante.",
              },
              {
                title: "Grande Réception de Baptême",
                description:
                  "Vous souhaitez réunir toute la famille et vos amis pour une grande fête ? Nous organisons des réceptions de baptême pouvant accueillir jusqu'à plusieurs centaines d'invités. Salle de réception prestigieuse, buffet traiteur haut de gamme, animations, DJ et décoration spectaculaire.",
              },
            ].map((type) => (
              <AnimateOnScroll key={type.title} animation="fade-up">
                <div className="luxury-card border border-gold/10 bg-white p-10 h-full">
                  <h3 className="text-xl font-heading font-bold text-taupe mb-4">
                    {type.title}
                  </h3>
                  <p className="text-taupe-light text-sm leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Décoration de Baptême */}
      <section className="py-28 bg-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Décoration
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Décoration de baptême sur mesure
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Chaque détail compte pour créer une atmosphère magique et
              cohérente. Nos décoratrices imaginent un univers unique pour
              le baptême de votre enfant.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Décoration de Table",
                description:
                  "Centres de table raffinés, vaisselle élégante, serviettes personnalisées, marque-places et menus assortis au thème choisi pour un rendu harmonieux et soigné.",
              },
              {
                title: "Candy Bar & Sweet Table",
                description:
                  "Un espace gourmand et esthétique avec pâtisseries, confiseries, cupcakes et gâteau de baptême décoré. Un véritable coin photo qui ravira petits et grands.",
              },
              {
                title: "Arches & Décors Floraux",
                description:
                  "Arches de ballons, compositions florales, guirlandes végétales et décors suspendus pour sublimer l'espace de la cérémonie et la salle de réception.",
              },
              {
                title: "Signalétique Personnalisée",
                description:
                  "Panneaux de bienvenue, affichettes, étiquettes cadeaux invités et plan de table : une papeterie coordonnée au prénom de l'enfant et au thème du baptême.",
              },
              {
                title: "Espace Photo & Souvenirs",
                description:
                  "Mur de photos, livre d'or créatif, photobooth décoré et accessoires assortis pour capturer les plus beaux souvenirs de cette journée exceptionnelle.",
              },
              {
                title: "Mise en Lumière",
                description:
                  "Guirlandes lumineuses, bougies, lanternes et éclairages d'ambiance pour créer une atmosphère douce et féérique, en intérieur comme en extérieur.",
              },
            ].map((item) => (
              <AnimateOnScroll key={item.title} animation="fade-up">
                <div className="luxury-card border border-gold/10 bg-white p-8 h-full">
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
          <div className="text-center mt-12">
            <Link
              href="/services/decoration"
              className="text-gold text-sm font-semibold hover:underline inline-flex items-center gap-2"
            >
              Découvrir notre service décoration
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Animations & Lieux */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <AnimateOnScroll animation="fade-right" className="w-full lg:w-1/2">
              <div className="luxury-line-left mb-6" />
              <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-2">
                Divertissement
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe mb-6">
                Animations pour petits et grands
              </h2>
              <p className="text-taupe-soft leading-relaxed mb-6">
                Un baptême réussi est un baptême où tout le monde s&apos;amuse !
                Nous proposons des animations adaptées à tous les âges pour
                que chaque invité profite pleinement de la fête.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Photobooth et vidéo 360° avec accessoires personnalisés",
                  "Ateliers créatifs pour les enfants (peinture, modelage)",
                  "Spectacle de magie ou de marionnettes",
                  "Structures gonflables et jeux en extérieur",
                  "Musicien, DJ ou playlist sur mesure",
                  "Baby-sitter et espace enfants dédié",
                ].map((a) => (
                  <li key={a} className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 text-gold mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-taupe-soft text-sm">{a}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/services/photobooth"
                className="text-gold text-sm font-semibold hover:underline inline-flex items-center gap-2"
              >
                Découvrir notre photobooth
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" className="w-full lg:w-1/2">
              <div className="luxury-line-left mb-6" />
              <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-2">
                Lieux de réception
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe mb-6">
                Le lieu idéal pour votre baptême
              </h2>
              <p className="text-taupe-soft leading-relaxed mb-6">
                Le choix du lieu est essentiel pour créer l&apos;ambiance
                souhaitée. Grâce à notre réseau de partenaires à Lyon et
                en Rhône-Alpes, nous vous proposons une sélection de lieux
                d&apos;exception adaptés à votre baptême.
              </p>
              <ul className="space-y-3">
                {[
                  "Domaines et châteaux avec jardins privatifs",
                  "Salles de réception élégantes en centre-ville",
                  "Restaurants gastronomiques avec espaces privatisés",
                  "Lieux atypiques : lofts, péniches, rooftops",
                  "Espaces en plein air pour les baptêmes champêtres",
                  "Salles modulables pour s'adapter à votre nombre d'invités",
                ].map((l) => (
                  <li key={l} className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 text-gold mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-taupe-soft text-sm">{l}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-28 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Notre méthode
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Comment nous organisons votre baptême
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Un accompagnement personnalisé et structuré pour que
              l&apos;organisation de votre baptême soit un plaisir, pas un stress.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Premier Échange",
                description:
                  "Nous discutons de vos envies, du type de baptême souhaité, du nombre d'invités et de votre budget pour définir ensemble les grandes lignes de l'événement.",
              },
              {
                step: "02",
                title: "Proposition Sur Mesure",
                description:
                  "Nous élaborons un projet complet avec sélection de lieux, moodboard décoration, propositions de prestataires et rétroplanning détaillé.",
              },
              {
                step: "03",
                title: "Organisation & Coordination",
                description:
                  "Nous gérons les réservations, coordonnons les prestataires, supervisons la décoration et préparons chaque détail jusqu'au jour J.",
              },
              {
                step: "04",
                title: "Le Jour J",
                description:
                  "Notre équipe est présente pour installer la décoration, accueillir les prestataires, coordonner le déroulement et vous permettre de profiter pleinement de ce moment.",
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
              Tout savoir sur l&apos;organisation de baptême
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Quel est le prix moyen d'une organisation de baptême à Lyon ?",
                a: "Le budget d'un baptême organisé par Smart Moments Event varie en fonction du nombre d'invités, du lieu de réception, de la décoration et des prestations choisies. Nous proposons des formules adaptées à tous les budgets, à partir de prestations de décoration seule jusqu'à l'organisation complète. Contactez-nous pour un devis gratuit et personnalisé.",
              },
              {
                q: "Organisez-vous des baptêmes religieux et laïques ?",
                a: "Oui, nous organisons aussi bien des baptêmes religieux (catholiques, orthodoxes, protestants) que des baptêmes civils ou laïques. Pour un baptême religieux, nous coordonnons avec l'église ou le lieu de culte. Pour un baptême laïque, nous créons une cérémonie personnalisée et émouvante selon vos souhaits.",
              },
              {
                q: "Quels services sont inclus dans l'organisation d'un baptême ?",
                a: "Notre prestation comprend la recherche et la réservation du lieu de réception, la décoration complète (table, salle, espace cérémonie), la coordination avec les prestataires (traiteur, photographe, pâtissier), la gestion des faire-part, les animations pour enfants et adultes, ainsi que la coordination le jour J pour que vous puissiez profiter pleinement de ce moment.",
              },
              {
                q: "Combien de temps à l'avance faut-il réserver pour un baptême ?",
                a: "Nous recommandons de nous contacter au moins 3 à 4 mois avant la date souhaitée pour un baptême avec décoration élaborée et organisation complète. Pour une prestation de décoration seule, un délai de 6 à 8 semaines peut suffire. Plus vous réservez tôt, plus nous aurons de choix pour les lieux et prestataires.",
              },
              {
                q: "Peut-on réserver uniquement la décoration du baptême ?",
                a: "Absolument ! Vous pouvez nous confier uniquement la décoration de votre baptême si vous souhaitez gérer l'organisation vous-même. Nous proposons des prestations de décoration sur mesure : centre de table, candy bar, arche de ballons, décoration florale, signalétique personnalisée et bien plus encore.",
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
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-30-at-10-54-55-1_3_306698-168563709678965.jpeg"
            alt="Organisation baptême haut de gamme Lyon"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/60 via-taupe/40 to-taupe/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <div className="luxury-line mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
            Organisons ensemble le baptême de vos rêves
          </h2>
          <p className="text-white/50 text-lg mb-12 leading-relaxed font-light">
            Parlez-nous de votre projet et recevez un devis personnalisé
            gratuit pour l&apos;organisation du baptême de votre enfant à Lyon.
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
            <Link href="/services/decoration" className="text-gold hover:underline">
              Décoration sur mesure
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
