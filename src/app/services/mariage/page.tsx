import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Wedding Planner Lyon dès 2 500 € | Organisation Mariage Clé en Main - Smart Moments Event",
  description:
    "Wedding planner Lyon : organisation mariage de 50 à 250 invités, à partir de 2 500 €. Coordination jour J, mariage intimiste, civil, laïque, multiculturel. Noté 4.6/5, 100+ mariages organisés. Devis gratuit en 24h.",
  keywords: [
    "wedding planner lyon",
    "organisation mariage lyon",
    "organisateur mariage lyon",
    "mariage clé en main lyon",
    "wedding planner pas cher lyon",
    "prix wedding planner lyon",
    "tarif organisation mariage lyon",
    "wedding planner mariage intimiste",
    "organisation mariage 50 invités",
    "organisation mariage 100 invités",
    "organisation mariage 150 invités",
    "wedding planner mariage civil lyon",
    "wedding planner mariage laïque lyon",
    "wedding planner mariage multiculturel",
    "wedding planner mariage juif lyon",
    "wedding planner mariage mixte",
    "petit mariage lyon",
    "mini wedding lyon",
    "wedding planner mariage week-end",
    "mariage destination france",
    "wedding planner mariage été",
    "wedding planner mariage hiver",
    "wedding planner mariage automne",
    "organisation mariage rhône-alpes",
    "organisation mariage paca",
    "organisation mariage paris",
    "organisation mariage bourgogne",
    "mariage champêtre lyon",
    "mariage bohème lyon",
    "mariage chic lyon",
    "wedding planner mariage 200 invités",
    "wedding planner budget 20000",
    "wedding planner budget 30000",
    "wedding planner luxe lyon",
  ],
  alternates: { canonical: "https://www.smartmoments.fr/services/mariage" },
  openGraph: {
    title: "Organisation de Mariage Clé en Main à Lyon",
    description:
      "Wedding planner à Lyon. Organisation complète de votre mariage : lieu, prestataires, décoration, coordination. Mariage sur mesure et haut de gamme.",
    url: "https://www.smartmoments.fr/services/mariage",
    images: [
      {
        url: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41_3_306698-168546595030467.jpeg",
        width: 960,
        height: 640,
        alt: "Organisation de mariage clé en main Lyon - Smart Moments Event",
      },
    ],
  },
};

export default function MariagePage() {
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
        name: "Organisation de Mariage",
        item: "https://www.smartmoments.fr/services/mariage",
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Organisation de Mariage Clé en Main - Wedding Planner Lyon",
    provider: {
      "@type": "LocalBusiness",
      name: "Smart Moments Event",
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        reviewCount: "25",
        bestRating: "5",
        worstRating: "1",
      },
    },
    serviceType: [
      "Organisation de mariage",
      "Wedding planning",
      "Coordination jour J",
      "Mariage clé en main",
      "Mariage intimiste",
      "Mariage multiculturel",
      "Destination wedding",
    ],
    areaServed: [
      { "@type": "City", name: "Lyon" },
      { "@type": "City", name: "Villeurbanne" },
      { "@type": "City", name: "Grenoble" },
      { "@type": "City", name: "Annecy" },
      { "@type": "City", name: "Marseille" },
      { "@type": "City", name: "Aix-en-Provence" },
      { "@type": "City", name: "Nice" },
      { "@type": "City", name: "Paris" },
      { "@type": "AdministrativeArea", name: "Auvergne-Rhône-Alpes" },
      { "@type": "AdministrativeArea", name: "Provence-Alpes-Côte d'Azur" },
      { "@type": "AdministrativeArea", name: "Île-de-France" },
      { "@type": "AdministrativeArea", name: "Bourgogne-Franche-Comté" },
    ],
    description:
      "Organisation de mariage complète et clé en main à Lyon, en Rhône-Alpes, PACA, IDF, Bourgogne et à l'international. Recherche de lieu, sélection de prestataires, décoration, logistique et coordination jour J. À partir de 2 500 €.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: "2500",
      highPrice: "12000",
      offerCount: "3",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Formules d'organisation mariage",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Coordination Jour J",
          description: "Coordination uniquement le jour du mariage : reprise du dossier, suivi prestataires, planning minute par minute, gestion intégrale du déroulé. Idéal si vous avez tout organisé vous-même.",
          price: "2500",
          priceCurrency: "EUR",
          itemOffered: {
            "@type": "Service",
            name: "Coordination Jour J Mariage Lyon",
          },
        },
        {
          "@type": "Offer",
          name: "Prestation Partielle",
          description: "Accompagnement ciblé sur certains volets : recherche de lieu, décoration sur mesure, coordination prestataires, mariage civil + laïque. À la carte.",
          price: "4500",
          priceCurrency: "EUR",
          itemOffered: {
            "@type": "Service",
            name: "Wedding Planner Lyon - Prestation Partielle",
          },
        },
        {
          "@type": "Offer",
          name: "Organisation Complète Clé en Main",
          description: "Wedding planning de A à Z : recherche lieu, gestion budget, sélection complète prestataires, design floral, scénographie, papeterie, planning, coordination jour J. Tout est pris en charge.",
          price: "8000",
          priceCurrency: "EUR",
          itemOffered: {
            "@type": "Service",
            name: "Organisation Mariage Clé en Main Lyon",
          },
        },
      ],
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quel est le prix d'un wedding planner à Lyon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le tarif d'un wedding planner à Lyon varie en fonction du niveau d'accompagnement souhaité. Chez Smart Moments Event, nos formules d'organisation de mariage démarrent à partir de 2 500 € pour une coordination jour J, et peuvent aller jusqu'à 8 000 € et plus pour une organisation complète clé en main. Chaque devis est personnalisé en fonction de vos besoins, du nombre d'invités et du niveau de prestation souhaité.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps à l'avance faut-il contacter un wedding planner ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous recommandons de nous contacter entre 12 et 18 mois avant la date de votre mariage pour une organisation complète. Cela permet de réserver les meilleurs lieux et prestataires à Lyon. Pour une coordination jour J uniquement, un délai de 3 à 6 mois est suffisant. N'hésitez pas à nous contacter même avec un délai plus court, nous nous adaptons.",
        },
      },
      {
        "@type": "Question",
        name: "Que comprend une organisation de mariage clé en main ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Notre formule clé en main comprend : la recherche et la visite de lieux de réception, la sélection et la coordination de tous les prestataires (traiteur, photographe, DJ, fleuriste, officiant), la création du rétroplanning, la gestion du budget, la conception de la décoration, la logistique complète et la coordination le jour J. Vous n'avez qu'à valider nos propositions et profiter de votre mariage.",
        },
      },
      {
        "@type": "Question",
        name: "Organisez-vous des mariages en extérieur à Lyon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolument ! Nous organisons des mariages en extérieur dans toute la région lyonnaise : domaines viticoles du Beaujolais, châteaux de la Drôme, mas provençaux, jardins privés, bords de Saône. Nous connaissons les plus beaux lieux de réception en plein air et gérons les plans B en cas d'intempéries.",
        },
      },
      {
        "@type": "Question",
        name: "Peut-on faire appel à vous uniquement pour la coordination le jour J ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, notre formule de coordination jour J est idéale si vous avez organisé votre mariage vous-même et souhaitez être accompagné le jour J. Notre coordinatrice reprend votre dossier 1 mois avant, contacte tous les prestataires, établit le planning minute par minute et gère l'intégralité de la journée pour que vous puissiez profiter sereinement.",
        },
      },
      {
        "@type": "Question",
        name: "Quels types de mariages organisez-vous ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous organisons tous les styles de mariages : champêtre dans un domaine, bohème en pleine nature, chic et élégant dans un château, moderne et épuré dans un loft, intimiste pour les petits comités ou grandiose pour les grandes célébrations. Nous nous adaptons à votre vision, votre culture et vos traditions pour créer un mariage qui vous ressemble.",
        },
      },
      {
        "@type": "Question",
        name: "Pouvez-vous organiser un mariage intimiste de 30 à 50 invités ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nous adorons les mariages intimistes ! Un mini wedding de 30 à 50 invités permet de soigner chaque détail, de partager des moments authentiques avec vos proches et de libérer du budget pour des prestations d'exception (lieu de prestige, traiteur étoilé, photographe d'art). Notre formule mariage intimiste démarre à 2 500 € pour la coordination jour J.",
        },
      },
      {
        "@type": "Question",
        name: "Combien coûte un mariage de 100 invités à Lyon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le budget moyen d'un mariage de 100 invités à Lyon se situe entre 20 000 € et 40 000 € selon le lieu de réception, le traiteur et les prestations choisies. Notre rôle de wedding planner est d'optimiser chaque poste pour maximiser l'effet à votre budget. Notre devis personnalisé inclut une simulation budgétaire transparente avant tout engagement.",
        },
      },
      {
        "@type": "Question",
        name: "Pouvez-vous organiser un mariage multiculturel ou mixte ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolument. Nous organisons régulièrement des mariages mixtes franco-internationaux (franco-marocain, franco-libanais, franco-asiatique, franco-juif, franco-musulman). Nous coordonnons les deux cérémonies religieuses ou laïques, gérons les traditions de chaque culture (henné, ketouba, thé, tea ceremony), travaillons avec des traiteurs adaptés (halal, casher) et créons un mariage qui honore les deux familles.",
        },
      },
      {
        "@type": "Question",
        name: "Organisez-vous des mariages civils ou laïques uniquement ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nous proposons des prestations adaptées : organisation complète d'un mariage civil avec cocktail élégant, conception et écriture sur mesure d'une cérémonie laïque émouvante avec officiant professionnel, sélection de musiciens, gestion de la scénographie. La cérémonie laïque seule démarre à 1 500 €.",
        },
      },
      {
        "@type": "Question",
        name: "Pouvez-vous organiser un mariage week-end (vendredi au dimanche) ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nous organisons de plus en plus de mariages week-end : welcome drink le vendredi soir, cérémonie + réception le samedi, brunch + activités le dimanche. C'est l'expérience préférée des invités qui se déplacent. Nous coordonnons l'hébergement, les transferts et toutes les activités sur 2 à 3 jours pour un mariage immersif.",
        },
      },
      {
        "@type": "Question",
        name: "Quels sont les meilleurs mois pour se marier à Lyon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "À Lyon, mai, juin, septembre et début octobre sont les mois les plus prisés : climat doux, ensoleillement optimal, vignobles en pleine activité dans le Beaujolais. Juillet-août sont plus chauds (préférer les domaines avec piscine ou ombre). Mai et septembre offrent souvent le meilleur ratio météo/disponibilité/prix. Nous accompagnons votre choix de date selon vos contraintes.",
        },
      },
      {
        "@type": "Question",
        name: "Quel délai pour un mariage en moins de 6 mois ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Un mariage en 3 à 6 mois est tout à fait faisable grâce à notre réseau de prestataires réactifs. Nous proposons une organisation accélérée et privilégions les lieux/prestataires ayant des disponibilités. Les délais courts demandent plus de réactivité mais ne compromettent ni la qualité ni l'élégance. Idéal pour les mariages intimistes ou les couples qui veulent éviter une longue attente.",
        },
      },
      {
        "@type": "Question",
        name: "Comment se déroule le premier rendez-vous avec un wedding planner ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le premier rendez-vous est gratuit et sans engagement. Il dure environ 1h, en visio ou dans nos bureaux à Lyon. Nous échangeons sur votre projet, vos envies, votre budget et vos contraintes. Vous repartez avec une proposition personnalisée sous 48h. C'est aussi le moment de vérifier que le feeling passe : un mariage est un projet intime, la confiance compte autant que l'expertise.",
        },
      },
      {
        "@type": "Question",
        name: "Travaillez-vous avec un budget de 15 000 € ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, un budget de 15 000 € à 20 000 € permet d'organiser un beau mariage de 60 à 80 invités avec des prestataires de qualité, surtout si vous optez pour un mariage en mi-saison et pour un lieu type domaine viticole, ferme rénovée ou jardin privatif. Notre rôle de wedding planner est précisément de maximiser chaque euro investi.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous en PACA, Île-de-France, Bourgogne ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nous intervenons dans 4 régions principales : Auvergne-Rhône-Alpes, Provence-Alpes-Côte d'Azur (Marseille, Aix, Nice, Cannes), Île-de-France (Paris, Versailles) et Bourgogne-Franche-Comté (Dijon, Beaune). Nous organisons aussi des destination weddings à l'étranger (Italie, Suisse, Grèce, Bali, Maroc).",
        },
      },
      {
        "@type": "Question",
        name: "Pouvez-vous nous trouver un lieu de réception en Beaujolais ou Drôme provençale ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nous connaissons parfaitement les domaines viticoles du Beaujolais, les châteaux de la Drôme provençale, les mas du Vaucluse, les domaines du Luberon, les bastides de Provence et les fermes rénovées du Pilat. Notre repérage de lieux est inclus dans toutes nos formules (sauf coordination jour J).",
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
          { label: "Organisation de Mariage" },
        ]}
      />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41_3_306698-168546595030467.jpeg"
            alt="Organisation de mariage clé en main à Lyon par Smart Moments Event"
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
              Wedding Planning
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-[0.95]">
            Organisation de{" "}
            <span className="text-gold-gradient italic">Mariage</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
            Organisation complète et clé en main de votre mariage à Lyon
            et en Rhône-Alpes. Votre rêve, notre expertise.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* Chiffres clés */}
      <section className="py-16 bg-rose border-b border-gold/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Mariages organisés" },
              { number: "100%", label: "Couples satisfaits" },
              { number: "12", label: "Ans d'expérience" },
              { number: "50+", label: "Prestataires partenaires" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-heading font-bold text-gold mb-2">
                  {stat.number}
                </p>
                <p className="text-taupe-light text-sm tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41_3_306698-168546595030467.jpeg"
                    alt="Organisateur de mariage Lyon - accompagnement personnalisé"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-gold/30" />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b border-r border-gold/30" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="luxury-line-left mb-6" />
              <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-2">
                Votre mariage clé en main
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe mb-6">
                Un accompagnement sur mesure de A à Z
              </h2>
              <p className="text-taupe-soft leading-relaxed mb-6">
                Chez Smart Moments Event, nous croyons que chaque mariage est
                unique et mérite une attention exceptionnelle. En tant
                qu&apos;organisateur de mariage à Lyon, nous vous accompagnons
                à chaque étape : de la première idée jusqu&apos;au dernier pas
                de danse. Notre mission est de transformer votre vision en une
                réalité qui dépasse vos attentes.
              </p>
              <p className="text-taupe-soft leading-relaxed mb-8">
                Notre équipe de wedding planners expérimentés connaît
                parfaitement la région lyonnaise, ses plus beaux lieux de
                réception, ses meilleurs prestataires et les tendances actuelles
                du mariage. Nous mettons cette expertise à votre service pour
                créer un mariage clé en main, sans stress et dans les moindres
                détails.
              </p>
              <ul className="space-y-3">
                {[
                  "Recherche et réservation du lieu de réception idéal",
                  "Sélection rigoureuse des prestataires (traiteur, photographe, DJ, fleuriste)",
                  "Création du rétroplanning et gestion intégrale du budget",
                  "Conception de la décoration et de la scénographie",
                  "Coordination avec tous les intervenants le jour J",
                  "Accompagnement personnalisé du premier rendez-vous à la lune de miel",
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
            </div>
          </div>
        </div>
      </section>

      {/* L'accompagnement en détail */}
      <section className="py-28 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Plus qu&apos;un prestataire, un partenaire
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Un accompagnement humain, du premier appel au lendemain
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Organiser un mariage, c&apos;est des mois de décisions, de doutes et d&apos;émotions.
              Notre rôle ne se limite pas à la logistique : nous sommes à vos côtés à chaque instant,
              pour vous écouter, vous rassurer et vous guider. Votre wedding planner devient
              votre confidente, votre conseillère et votre alliée la plus précieuse.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-white border border-gold/10 p-10">
              <h3 className="text-xl font-heading font-bold text-taupe mb-4">
                L&apos;écoute avant tout
              </h3>
              <p className="text-taupe-soft leading-relaxed mb-4">
                Chaque couple est unique. Avant de proposer quoi que ce soit, nous prenons le temps
                de vous connaître vraiment : votre histoire, vos goûts, vos rêves, vos craintes,
                votre budget. Ce premier rendez-vous découverte est un moment d&apos;échange sincère
                et bienveillant, sans engagement, où nous posons les bases d&apos;une relation de confiance.
              </p>
              <p className="text-taupe-soft leading-relaxed">
                Nous ne plaquons jamais de formule toute faite. Chaque proposition est pensée
                spécifiquement pour vous, en fonction de ce que vous nous avez partagé. C&apos;est
                cette approche sur mesure qui fait la différence.
              </p>
            </div>
            <div className="bg-white border border-gold/10 p-10">
              <h3 className="text-xl font-heading font-bold text-taupe mb-4">
                Disponibilité et réactivité
              </h3>
              <p className="text-taupe-soft leading-relaxed mb-4">
                Une hésitation sur le choix du traiteur ? Une question sur le plan
                de table ? Nous sommes réactifs et disponibles tout au long de la préparation.
                Notre engagement, c&apos;est de vous répondre rapidement et de ne jamais
                vous laisser dans le flou.
              </p>
              <p className="text-taupe-soft leading-relaxed">
                Tout au long des mois de préparation, nous maintenons un contact régulier :
                points d&apos;avancement, appels de suivi, rendez-vous en personne. Vous n&apos;êtes
                jamais seuls face à une décision importante. Nous partageons notre expérience
                et nos conseils pour que chaque choix soit fait en toute sérénité.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gold/10 p-10 lg:p-14">
            <h3 className="text-xl font-heading font-bold text-taupe mb-6 text-center">
              La gestion des émotions et du stress
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-gold font-semibold text-sm mb-2">Les tensions familiales</p>
                <p className="text-taupe-soft text-sm leading-relaxed">
                  Liste d&apos;invités, plan de table, choix des témoins... nous savons
                  gérer les situations délicates avec diplomatie et bienveillance pour
                  préserver l&apos;harmonie.
                </p>
              </div>
              <div>
                <p className="text-gold font-semibold text-sm mb-2">Les imprévus de dernière minute</p>
                <p className="text-taupe-soft text-sm leading-relaxed">
                  Prestataire qui annule, météo capricieuse, robe qui ne ferme plus...
                  nous avons toujours un plan B (et un plan C). C&apos;est notre métier
                  d&apos;anticiper l&apos;imprévisible.
                </p>
              </div>
              <div>
                <p className="text-gold font-semibold text-sm mb-2">La pression du &quot;jour parfait&quot;</p>
                <p className="text-taupe-soft text-sm leading-relaxed">
                  Nous vous aidons à lâcher prise sur la perfection et à vous recentrer
                  sur l&apos;essentiel : l&apos;amour, la joie, le partage. Le plus beau
                  mariage est celui où vous êtes pleinement présents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* La coordination jour J - section dédiée */}
      <section className="py-28 bg-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-30-at-10-53-36_3_306698-168546595011373.jpeg"
                    alt="Coordinatrice mariage jour J Lyon - Smart Moments Event"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-gold/30" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b border-l border-gold/30" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="luxury-line-left mb-6" />
              <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-2">
                Le moment clé
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe mb-6">
                La coordination du jour J : notre expertise fondamentale
              </h2>
              <p className="text-taupe-soft leading-relaxed mb-4">
                Le jour de votre mariage, tout doit être parfait. Notre coordinatrice
                prend les rênes de la journée entière pour que vous n&apos;ayez
                absolument rien à gérer. Elle est votre garde du corps invisible,
                celle qui fait que tout se passe comme prévu — sans que vous ne vous
                en rendiez compte.
              </p>
              <p className="text-taupe-soft leading-relaxed mb-6">
                Elle arrive avant tout le monde, vérifie chaque installation, accueille
                chaque prestataire, s&apos;assure que la décoration est conforme au
                plan, que le traiteur est prêt, que le DJ a sa playlist, que le
                photographe connaît le programme. Et quand un imprévu survient — car il
                y en a toujours — elle le résout en coulisses, sans jamais troubler
                votre bonheur.
              </p>
              <div className="space-y-4">
                {[
                  "Reprise du dossier complet 1 mois avant le jour J",
                  "Visite technique du lieu avec plan d'installation détaillé",
                  "Réunion de coordination avec chaque prestataire",
                  "Rédaction du planning minute par minute de la journée",
                  "Présence de 8h le matin jusqu'à la fin de la soirée",
                  "Gestion de l'installation, du déroulé et du démontage",
                  "Interface unique entre les familles et les prestataires",
                  "Anticipation et résolution discrète de tout imprévu",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 text-gold mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-taupe-soft text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le parcours complet - Timeline */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Mois après mois
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Le parcours de votre mariage avec Smart Moments
            </h2>
            <p className="text-taupe-light leading-relaxed">
              De votre premier appel jusqu&apos;au lendemain de la fête, voici
              comment nous vous accompagnons concrètement à chaque étape.
            </p>
          </div>
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Premier rendez-vous découverte",
                period: "12 à 18 mois avant",
                description:
                  "Rencontre gratuite et sans engagement. Nous apprenons à vous connaître, comprenons vos envies, votre budget et votre vision. Nous vous présentons nos formules et notre façon de travailler. Si le courant passe, l'aventure commence.",
              },
              {
                step: "02",
                title: "Recherche du lieu et des prestataires",
                period: "10 à 14 mois avant",
                description:
                  "Nous visitons ensemble les lieux de réception présélectionnés. En parallèle, nous vous proposons une sélection de prestataires triés sur le volet (traiteur, photographe, DJ, fleuriste, officiant) que nous connaissons personnellement et dont nous garantissons la qualité.",
              },
              {
                step: "03",
                title: "Conception artistique et logistique",
                period: "6 à 10 mois avant",
                description:
                  "Création du concept décoratif (moodboard, palette de couleurs, scénographie), rédaction du rétroplanning détaillé, gestion des devis et contrats, organisation des essayages de robe et des dégustations traiteur. Le mariage prend forme.",
              },
              {
                step: "04",
                title: "Préparation finale et répétition",
                period: "1 à 2 mois avant",
                description:
                  "Visite technique du lieu, réunion de coordination avec tous les prestataires, finalisation du plan de table, préparation des éléments de papeterie, validation de chaque détail. Nous passons en revue le déroulé minute par minute pour que rien ne soit laissé au hasard.",
              },
              {
                step: "05",
                title: "Le jour J et le lendemain",
                period: "Le grand jour",
                description:
                  "Notre coordinatrice et son équipe sont présentes de l'aube jusqu'à la fin de la soirée. Installation de la décoration, accueil des prestataires, gestion du timing, interface avec les familles, résolution des imprévus. Le lendemain, nous supervisons le démontage et la restitution du lieu. Vous, vous profitez de votre brunch de lendemain de mariage.",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col md:flex-row gap-6 bg-white border border-gold/10 p-8">
                <div className="md:w-24 shrink-0">
                  <span className="text-4xl font-heading font-bold text-gold/30">
                    {item.step}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                    <h3 className="text-lg font-heading font-bold text-taupe">
                      {item.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold bg-gold/10 px-3 py-1 w-fit">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-taupe-soft text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de mariages */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Tous les styles
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Quel mariage vous ressemble ?
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Chaque couple a sa propre histoire. Nous créons des mariages
              uniques qui reflètent votre personnalité, vos valeurs et vos
              rêves.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Mariage Champêtre",
                description:
                  "Un mariage au coeur de la nature dans un domaine viticole du Beaujolais ou une ferme rénovée. Bois brut, toile de jute, guirlandes lumineuses et fleurs des champs pour une atmosphère chaleureuse et authentique.",
              },
              {
                title: "Mariage Bohème",
                description:
                  "Un mariage libre et poétique en plein air. Herbes de la pampa, macramé, couleurs terracotta et nude, tipi ou tente stretch. L'élégance décontractée pour les esprits créatifs et voyageurs.",
              },
              {
                title: "Mariage Chic & Élégant",
                description:
                  "Un mariage raffiné dans un château ou un hôtel de prestige à Lyon. Dorure, cristal, roses blanches, chandeliers et nappes de lin. L'intemporalité du luxe classique.",
              },
              {
                title: "Mariage Moderne & Épuré",
                description:
                  "Un mariage contemporain dans un loft industriel ou un lieu atypique lyonnais. Lignes graphiques, palette minimaliste, verrerie et transparence pour les amateurs de design.",
              },
              {
                title: "Mariage Intimiste",
                description:
                  "Un mariage en petit comité, de 20 à 50 invités, dans un lieu d'exception. Chaque détail est sublimé pour créer une expérience intime, personnelle et profondément émouvante.",
              },
              {
                title: "Mariage Multiculturel",
                description:
                  "Un mariage qui célèbre vos origines et vos traditions. Nous intégrons avec respect et créativité les coutumes de chaque culture pour un événement riche en émotions et en couleurs.",
              },
            ].map((style) => (
              <div key={style.title} className="luxury-card border border-gold/10 bg-white p-8 h-full">
                <h3 className="text-lg font-heading font-bold text-taupe mb-3">
                  {style.title}
                </h3>
                <p className="text-taupe-light text-sm leading-relaxed">
                  {style.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi un wedding planner */}
      <section className="py-28 bg-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Les avantages
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Pourquoi faire appel à un organisateur de mariage ?
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Confier l&apos;organisation de votre mariage à Lyon à un
              professionnel, c&apos;est gagner en sérénité, en temps et en
              qualité. Voici ce que nous vous apportons.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Gain de temps considérable",
                description:
                  "L'organisation d'un mariage représente en moyenne 250 heures de travail. Nous prenons tout en charge pour que vous puissiez vous concentrer sur l'essentiel : profiter de vos fiançailles.",
              },
              {
                title: "Budget maîtrisé",
                description:
                  "Grâce à notre réseau de prestataires partenaires et notre expérience, nous négocions les meilleurs tarifs et évitons les dépenses inutiles. Votre budget est optimisé et transparent.",
              },
              {
                title: "Réseau de prestataires d'excellence",
                description:
                  "Nous collaborons avec plus de 50 prestataires triés sur le volet à Lyon et en Rhône-Alpes : traiteurs, photographes, DJ, fleuristes, officiants de cérémonie laïque.",
              },
              {
                title: "Zéro stress le jour J",
                description:
                  "Notre coordinatrice gère le timing, les prestataires et les imprévus. Vous vivez votre mariage pleinement, sans aucune préoccupation logistique ni interruption.",
              },
              {
                title: "Créativité et tendances",
                description:
                  "Nous suivons les dernières tendances du mariage et apportons des idées créatives et originales auxquelles vous n'auriez pas pensé. Votre mariage sera unique.",
              },
              {
                title: "Connaissance des lieux à Lyon",
                description:
                  "Nous connaissons les meilleurs lieux de réception de la région : châteaux, domaines viticoles, hôtels de prestige, espaces atypiques. Nous trouvons le lieu qui correspond à votre rêve.",
              },
            ].map((avantage) => (
              <div key={avantage.title} className="luxury-card border border-gold/10 bg-white p-8 h-full">
                <h3 className="text-lg font-heading font-bold text-taupe mb-3">
                  {avantage.title}
                </h3>
                <p className="text-taupe-light text-sm leading-relaxed">
                  {avantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="py-28 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-30-at-10-53-36_3_306698-168546595011373.jpeg"
                    alt="Coordination jour J mariage Lyon"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-gold/30" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b border-l border-gold/30" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="luxury-line-left mb-6" />
              <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-2">
                Tout est prévu
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe mb-6">
                Ce que comprend notre organisation de mariage
              </h2>
              <p className="text-taupe-soft leading-relaxed mb-8">
                Notre formule d&apos;organisation de mariage clé en main à Lyon
                couvre absolument tous les aspects de votre journée. Du premier
                rendez-vous jusqu&apos;au lendemain de la fête, rien n&apos;est
                laissé au hasard.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Recherche du lieu de réception",
                  "Sélection du traiteur",
                  "Photographe & vidéaste",
                  "DJ & ambiance musicale",
                  "Fleuriste & compositions",
                  "Décoration complète",
                  "Officiant cérémonie laïque",
                  "Faire-part & papeterie",
                  "Plan de table & placement",
                  "Voiture de collection",
                  "Gestion des hébergements",
                  "Coordination jour J",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 text-gold mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-taupe-soft text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos autres services - liens internes */}
      <section className="py-20 bg-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Prestations complémentaires
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe">
              Complétez votre mariage
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/services/decoration"
              className="group border border-gold/10 bg-white p-8 hover:border-gold transition-all duration-300"
            >
              <p className="text-[9px] uppercase tracking-[0.3em] text-gold mb-2">
                Prestation
              </p>
              <h3 className="text-lg font-heading font-bold text-taupe mb-3 group-hover:text-gold transition-colors">
                Décoration de Mariage
              </h3>
              <p className="text-taupe-soft text-sm leading-relaxed mb-4">
                Scénographie haut de gamme, compositions florales et mise en
                lumière sur mesure.
              </p>
              <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] group-hover:tracking-[0.4em] transition-all">
                Découvrir →
              </span>
            </Link>
            <Link
              href="/services/photobooth"
              className="group border border-gold/10 bg-white p-8 hover:border-gold transition-all duration-300"
            >
              <p className="text-[9px] uppercase tracking-[0.3em] text-gold mb-2">
                Animation
              </p>
              <h3 className="text-lg font-heading font-bold text-taupe mb-3 group-hover:text-gold transition-colors">
                Photobooth & Vidéo 360°
              </h3>
              <p className="text-taupe-soft text-sm leading-relaxed mb-4">
                Miroir magique et vidéo 360° pour des souvenirs inoubliables
                avec vos invités.
              </p>
              <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] group-hover:tracking-[0.4em] transition-all">
                Découvrir →
              </span>
            </Link>
            <Link
              href="/wedding-planner"
              className="group border border-gold/10 bg-white p-8 hover:border-gold transition-all duration-300"
            >
              <p className="text-[9px] uppercase tracking-[0.3em] text-gold mb-2">
                Expertise
              </p>
              <h3 className="text-lg font-heading font-bold text-taupe mb-3 group-hover:text-gold transition-colors">
                Wedding Planner Lyon
              </h3>
              <p className="text-taupe-soft text-sm leading-relaxed mb-4">
                Découvrez notre approche et notre philosophie en tant que
                wedding planner à Lyon.
              </p>
              <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] group-hover:tracking-[0.4em] transition-all">
                En savoir plus →
              </span>
            </Link>
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
              Tout savoir sur l&apos;organisation de mariage
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Quel est le prix d'un wedding planner à Lyon ?",
                a: "Le tarif d'un wedding planner à Lyon varie en fonction du niveau d'accompagnement souhaité. Chez Smart Moments Event, nos formules d'organisation de mariage démarrent à partir de 2 500 \u20ac pour une coordination jour J, et peuvent aller jusqu'à 8 000 \u20ac et plus pour une organisation complète clé en main. Chaque devis est personnalisé en fonction de vos besoins, du nombre d'invités et du niveau de prestation souhaité.",
              },
              {
                q: "Combien de temps à l'avance faut-il contacter un wedding planner ?",
                a: "Nous recommandons de nous contacter entre 12 et 18 mois avant la date de votre mariage pour une organisation complète. Cela permet de réserver les meilleurs lieux et prestataires à Lyon. Pour une coordination jour J uniquement, un délai de 3 à 6 mois est suffisant. N'hésitez pas à nous contacter même avec un délai plus court, nous nous adaptons.",
              },
              {
                q: "Que comprend une organisation de mariage clé en main ?",
                a: "Notre formule clé en main comprend : la recherche et la visite de lieux de réception, la sélection et la coordination de tous les prestataires (traiteur, photographe, DJ, fleuriste, officiant), la création du rétroplanning, la gestion du budget, la conception de la décoration, la logistique complète et la coordination le jour J. Vous n'avez qu'à valider nos propositions et profiter de votre mariage.",
              },
              {
                q: "Organisez-vous des mariages en extérieur à Lyon ?",
                a: "Absolument ! Nous organisons des mariages en extérieur dans toute la région lyonnaise : domaines viticoles du Beaujolais, châteaux de la Drôme, mas provençaux, jardins privés, bords de Saône. Nous connaissons les plus beaux lieux de réception en plein air et gérons les plans B en cas d'intempéries.",
              },
              {
                q: "Peut-on faire appel à vous uniquement pour la coordination le jour J ?",
                a: "Oui, notre formule de coordination jour J est idéale si vous avez organisé votre mariage vous-même et souhaitez être accompagné le jour J. Notre coordinatrice reprend votre dossier 1 mois avant, contacte tous les prestataires, établit le planning minute par minute et gère l'intégralité de la journée pour que vous puissiez profiter sereinement.",
              },
              {
                q: "Quels types de mariages organisez-vous ?",
                a: "Nous organisons tous les styles de mariages : champêtre dans un domaine, bohème en pleine nature, chic et élégant dans un château, moderne et épuré dans un loft, intimiste pour les petits comités ou grandiose pour les grandes célébrations. Nous nous adaptons à votre vision, votre culture et vos traditions pour créer un mariage qui vous ressemble.",
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

      {/* Quel type de mariage organisons-nous ? */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="luxury-line mx-auto mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Pour qui nous organisons
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6 leading-tight">
              Tous types de mariages,
              <br />
              <span className="text-gold-gradient italic">100 % personnalisés</span>
            </h2>
            <p className="text-taupe-light leading-relaxed">
              De 30 invités à 250 personnes, mariage civil, laïque ou religieux, en France ou à l&apos;étranger : nous avons l&apos;expérience pour transformer chaque projet en une journée inoubliable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Mariage intimiste",
                tag: "30 à 60 invités",
                desc: "Mini wedding ou elopement raffiné : ambiance familiale, budget concentré sur la qualité, lieux d'exception accessibles avec moins de logistique. Idéal pour un mariage chic et émotionnel.",
              },
              {
                title: "Mariage 100 à 150 invités",
                tag: "Le format classique",
                desc: "Le mariage standard français : 80 % de nos couples. Domaines viticoles du Beaujolais, châteaux du Rhône, mas provençaux. Budget moyen 20 000 € à 40 000 €.",
              },
              {
                title: "Grand mariage",
                tag: "180 à 250+ invités",
                desc: "Grandes célébrations, mariages familiaux à plusieurs générations. Logistique complexe : nous coordonnons hébergement, transferts, plusieurs prestataires. Budget à partir de 50 000 €.",
              },
              {
                title: "Mariage civil élégant",
                tag: "Mairie + cocktail",
                desc: "Cérémonie civile soignée + cocktail/déjeuner raffiné. Format court mais haut de gamme, idéal pour mariages express ou seconds mariages. Prestation partielle à partir de 1 500 €.",
              },
              {
                title: "Mariage laïque sur mesure",
                tag: "Cérémonie + officiant",
                desc: "Écriture personnalisée de votre cérémonie, sélection d'un officiant professionnel, rituels symboliques (sable, bougies, ruban), scénographie en pleine nature.",
              },
              {
                title: "Mariage multiculturel & mixte",
                tag: "2 cultures, 1 union",
                desc: "Mariages franco-marocain, franco-libanais, franco-juif, franco-asiatique. Coordination des traditions de chaque culture, traiteurs adaptés (halal, casher), 2 cérémonies si nécessaire.",
              },
              {
                title: "Mariage week-end",
                tag: "Vendredi → Dimanche",
                desc: "Welcome drink le vendredi, cérémonie/réception le samedi, brunch le dimanche. L&apos;expérience la plus immersive pour vos invités, avec coordination hébergement et activités.",
              },
              {
                title: "Destination Wedding",
                tag: "France ou international",
                desc: "Mariage en Provence, sur la Côte d&apos;Azur, en Toscane, à Bali ou à Marrakech. Coordination complète à distance depuis Lyon, repérage sur place, gestion des formalités.",
              },
              {
                title: "Renouvellement de vœux",
                tag: "10, 20, 25 ans",
                desc: "Renouvellement de vœux ou anniversaires de mariage marquants. Cérémonie symbolique sur mesure, rétro-souvenir de votre mariage, célébration émouvante en famille.",
              },
            ].map((card, i) => (
              <div
                key={card.title}
                className="bg-white border border-gold/10 p-7 hover:border-gold/40 transition-all duration-300 h-full"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-gold text-xs font-semibold">{String(i + 1).padStart(2, "0")}.</span>
                  <div className="flex-1">
                    <h3 className="text-base font-heading font-bold text-taupe mb-1">{card.title}</h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gold-dark">{card.tag}</p>
                  </div>
                </div>
                <p className="text-taupe-soft text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budgets transparents */}
      <section className="py-24 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="luxury-line mx-auto mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Nos formules
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6 leading-tight">
              Combien coûte
              <br />
              <span className="text-gold-gradient italic">un wedding planner à Lyon ?</span>
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Trois formules transparentes selon votre besoin. Devis personnalisé en 24h, sans engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Coordination Jour J",
                price: "À partir de 2 500 €",
                description: "Vous avez tout organisé. Notre coordinatrice prend le relais 1 mois avant et orchestre votre journée minute par minute.",
                includes: [
                  "Reprise complète du dossier 1 mois avant",
                  "Vérification et confirmation des prestataires",
                  "Création du planning détaillé jour J",
                  "Coordination de tous les prestataires sur place",
                  "Gestion intégrale du timing et imprévus",
                  "Présence d'un(e) coordinateur(rice) sur la journée",
                ],
                cta: "Idéal si vous voulez profiter sereinement",
              },
              {
                name: "Prestation Partielle",
                price: "À partir de 4 500 €",
                description: "Accompagnement ciblé sur certains volets : recherche de lieu, décoration, cérémonie laïque, organisation civile.",
                includes: [
                  "Choix de 3 modules à la carte",
                  "Recherche lieu de réception",
                  "Décoration sur mesure",
                  "Écriture cérémonie laïque",
                  "Sélection prestataires clés",
                  "Coordination jour J incluse",
                ],
                cta: "Pour un mariage en partie organisé",
                highlight: true,
              },
              {
                name: "Organisation Complète Clé en Main",
                price: "À partir de 8 000 €",
                description: "De A à Z : wedding planning complet, gestion budget, design floral, scénographie, papeterie et coordination.",
                includes: [
                  "Recherche et visite lieux de réception",
                  "Gestion intégrale du budget",
                  "Sélection complète des prestataires",
                  "Conception décoration & design floral",
                  "Création papeterie & save-the-date",
                  "Planning, coordination & jour J",
                ],
                cta: "Pour un mariage sans aucun stress",
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`bg-white p-8 h-full flex flex-col ${
                  tier.highlight
                    ? "border-2 border-gold shadow-lg shadow-gold/10"
                    : "border border-gold/10"
                }`}
              >
                {tier.highlight && (
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-4">
                    ⭐ Le plus choisi
                  </p>
                )}
                <h3 className="text-xl font-heading font-bold text-taupe mb-2">{tier.name}</h3>
                <p className="text-2xl font-heading text-gold-gradient italic mb-4">
                  {tier.price}
                </p>
                <p className="text-taupe-soft text-sm leading-relaxed mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-taupe-soft">
                      <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[10px] uppercase tracking-[0.2em] text-taupe-light mb-6">
                  {tier.cta}
                </p>
                <Link
                  href="/contact"
                  className={`text-center py-3 px-6 text-[11px] uppercase tracking-[0.3em] font-bold transition-all ${
                    tier.highlight
                      ? "bg-gold text-white hover:bg-gold-dark"
                      : "border border-gold/40 text-gold hover:bg-gold hover:text-white"
                  }`}
                >
                  Demander un devis
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-taupe-light text-sm max-w-2xl mx-auto leading-relaxed">
              Les tarifs varient selon le nombre d&apos;invités, la complexité de l&apos;événement et le niveau de personnalisation. Tous nos devis incluent une simulation budgétaire transparente. <strong>Paiement en plusieurs fois possible.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Organisation mariage par ville */}
      <section className="py-20 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-heading font-bold text-taupe mb-4">
              Organisation de mariage dans votre ville
            </h2>
            <p className="text-taupe-light text-sm">
              Découvrez nos services d&apos;organisation de mariage dans les principales villes de France.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Lyon", slug: "lyon" },
              { name: "Grenoble", slug: "grenoble" },
              { name: "Annecy", slug: "annecy" },
              { name: "Chambéry", slug: "chambery" },
              { name: "Saint-Étienne", slug: "saint-etienne" },
              { name: "Valence", slug: "valence" },
              { name: "Marseille", slug: "marseille" },
              { name: "Aix-en-Provence", slug: "aix-en-provence" },
              { name: "Nice", slug: "nice" },
              { name: "Avignon", slug: "avignon" },
              { name: "Cannes", slug: "cannes" },
              { name: "Toulon", slug: "toulon" },
              { name: "Paris", slug: "paris" },
              { name: "Versailles", slug: "versailles" },
              { name: "Dijon", slug: "dijon" },
              { name: "Bourg-en-Bresse", slug: "bourg-en-bresse" },
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/organisation-mariage/${city.slug}`}
                className="border border-gold/20 bg-white px-5 py-2.5 text-[11px] text-taupe-soft uppercase tracking-[0.15em] hover:border-gold hover:text-gold transition-all duration-300"
              >
                Organisation Mariage {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42-1_3_306698-168546594928335.jpeg"
            alt="Organisation mariage haut de gamme Lyon"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/60 via-taupe/40 to-taupe/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <div className="luxury-line mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
            Prêts à organiser le mariage de vos rêves ?
          </h2>
          <p className="text-white/50 text-lg mb-12 leading-relaxed font-light">
            Parlez-nous de votre projet et recevez un devis personnalisé
            gratuit pour l&apos;organisation de votre mariage à Lyon.
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
              Décoration de mariage
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
