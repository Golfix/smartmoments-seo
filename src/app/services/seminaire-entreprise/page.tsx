import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Séminaire & Événements d'Entreprise Lyon | Smart Moments Event",
  description:
    "Organisation de séminaires, team building, conférences et soirées de gala à Lyon. Agence événementielle spécialisée en événements corporate sur-mesure. Devis gratuit.",
  keywords: [
    "séminaire entreprise lyon",
    "événement entreprise lyon",
    "agence événementielle lyon",
    "team building lyon",
    "organisation séminaire lyon",
    "soirée entreprise lyon",
    "conférence entreprise lyon",
    "lancement produit lyon",
    "soirée de gala lyon",
    "événement corporate lyon",
  ],
  alternates: {
    canonical: "https://www.smartmoments.fr/services/seminaire-entreprise",
  },
  openGraph: {
    title: "Séminaire & Événements d'Entreprise Lyon | Smart Moments Event",
    description:
      "Agence événementielle à Lyon spécialisée dans l'organisation de séminaires, team building, conférences et soirées de gala pour les entreprises.",
    url: "https://www.smartmoments.fr/services/seminaire-entreprise",
    images: [
      {
        url: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-43_3_306698-168546594996125.jpeg",
        width: 960,
        height: 640,
        alt: "Séminaire et événement d'entreprise à Lyon - Smart Moments Event",
      },
    ],
  },
};

export default function SeminaireEntreprisePage() {
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
        name: "Séminaires & Entreprise",
        item: "https://www.smartmoments.fr/services/seminaire-entreprise",
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Organisation de Séminaires & Événements d'Entreprise",
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
      "Organisation de séminaires",
      "Team building",
      "Conférences d'entreprise",
      "Soirées de gala",
      "Lancement de produit",
    ],
    areaServed: [
      { "@type": "City", name: "Lyon" },
      { "@type": "City", name: "Villeurbanne" },
      { "@type": "AdministrativeArea", name: "Rhône-Alpes" },
    ],
    description:
      "Organisation complète de séminaires, team building, conférences, soirées de gala et lancements de produit à Lyon. Agence événementielle spécialisée en événements corporate sur-mesure.",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quel est le délai idéal pour organiser un séminaire d'entreprise à Lyon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous recommandons de nous contacter au minimum 2 à 3 mois avant la date souhaitée pour un séminaire d'entreprise. Ce délai permet de sécuriser les meilleurs lieux à Lyon, de planifier les activités de team building et de coordonner tous les prestataires. Pour les événements de grande envergure (plus de 100 participants), un délai de 4 à 6 mois est préférable.",
        },
      },
      {
        "@type": "Question",
        name: "Quels types d'événements d'entreprise organisez-vous à Lyon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous organisons tous types d'événements corporate : séminaires de direction, journées de team building, conférences et conventions, soirées de gala et remises de prix, lancements de produit, afterworks et fêtes d'entreprise, journées portes ouvertes et inaugurations. Chaque événement est conçu sur-mesure selon vos objectifs et votre budget.",
        },
      },
      {
        "@type": "Question",
        name: "Combien coûte l'organisation d'un événement d'entreprise à Lyon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le budget varie selon le type d'événement, le nombre de participants, le lieu et les prestations souhaitées. Nous travaillons avec des budgets très variés et proposons toujours une solution adaptée. Contactez-nous pour un devis gratuit et personnalisé : nous analysons vos besoins et vous proposons un budget détaillé sans engagement.",
        },
      },
      {
        "@type": "Question",
        name: "Pouvez-vous organiser un séminaire en dehors de Lyon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bien sûr ! Bien que nous soyons basés à Lyon, nous organisons des événements d'entreprise dans toute la région Rhône-Alpes et au-delà : Annecy, Chambéry, Grenoble, Saint-Étienne, Beaujolais, Drôme provençale. Nous connaissons les meilleurs lieux et prestataires de chaque région pour garantir un événement réussi.",
        },
      },
      {
        "@type": "Question",
        name: "Quelles animations proposez-vous pour un team building ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous proposons un large choix d'animations de team building : ateliers créatifs (cuisine, œnologie, art), défis sportifs et aventure, escape games, rallyes urbains dans le Vieux Lyon, animations digitales (vidéo 360°, photobooth), quiz interactifs et murder parties. Chaque activité est choisie pour renforcer la cohésion d'équipe tout en garantissant un moment de plaisir.",
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
          { label: "Séminaires & Entreprise" },
        ]}
      />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-43_3_306698-168546594996125.jpeg"
            alt="Séminaire et événement d'entreprise à Lyon - Smart Moments Event"
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
              Événementiel corporate
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-[0.95]">
            Séminaire &{" "}
            <span className="text-gold-gradient italic">
              Événements d&apos;Entreprise
            </span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
            Organisation sur-mesure de séminaires, team building, conférences et
            soirées de gala à Lyon et en région Rhône-Alpes.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* Introduction */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <AnimateOnScroll animation="fade-right" className="w-full lg:w-1/2">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41-3_3_306698-168546594978953.jpeg"
                    alt="Organisation de séminaire d'entreprise à Lyon"
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
                Agence événementielle Lyon
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe mb-6">
                Votre partenaire pour des événements d&apos;entreprise
                d&apos;exception
              </h2>
              <p className="text-taupe-soft leading-relaxed mb-6">
                Chez Smart Moments Event, nous comprenons que chaque événement
                d&apos;entreprise est une opportunité stratégique. Qu&apos;il
                s&apos;agisse de fédérer vos équipes lors d&apos;un séminaire, de
                marquer les esprits avec un lancement de produit ou de célébrer
                vos réussites lors d&apos;une soirée de gala, nous concevons des
                expériences sur-mesure qui reflètent vos valeurs et atteignent vos
                objectifs.
              </p>
              <p className="text-taupe-soft leading-relaxed mb-8">
                Basés à Lyon, nous accompagnons les entreprises de toute la région
                Rhône-Alpes dans la conception et la réalisation de leurs
                événements corporate. De la recherche du lieu idéal à la
                coordination le jour J, notre équipe d&apos;experts prend en
                charge chaque détail pour vous offrir un événement irréprochable.
              </p>
              <Link
                href="/contact"
                className="btn-luxury inline-block bg-gold text-white px-10 py-3 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gold-dark transition-colors"
              >
                Demander un Devis
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Types d'événements */}
      <section className="py-28 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Nos expertises
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Des événements corporate sur-mesure
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Séminaires, team building, conférences, galas : nous maîtrisons
              chaque format d&apos;événement d&apos;entreprise pour en faire un
              moment mémorable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Séminaires d'Entreprise",
                description:
                  "Séminaires de direction, conventions annuelles ou réunions stratégiques : nous trouvons le lieu idéal à Lyon et organisons chaque moment, des sessions de travail aux activités de détente.",
              },
              {
                title: "Team Building",
                description:
                  "Renforcez la cohésion de vos équipes avec des activités de team building originales à Lyon : ateliers créatifs, défis sportifs, escape games, rallyes urbains dans le Vieux Lyon et bien plus.",
              },
              {
                title: "Conférences & Conventions",
                description:
                  "Organisation logistique complète de vos conférences : scénographie, technique audiovisuelle, accueil des participants, restauration et gestion des intervenants.",
              },
              {
                title: "Soirées de Gala",
                description:
                  "Des soirées de prestige pour célébrer vos réussites : décoration élégante, traiteur gastronomique, animations haut de gamme, spectacles et photobooth pour des souvenirs inoubliables.",
              },
              {
                title: "Lancements de Produit",
                description:
                  "Créez un événement à la hauteur de votre innovation : scénographie immersive, expériences interactives, couverture média et stratégie de communication pour maximiser l'impact.",
              },
              {
                title: "Afterworks & Fêtes d'Entreprise",
                description:
                  "Célébrez les temps forts de votre entreprise avec des événements conviviaux : afterworks, fêtes de fin d'année, anniversaires d'entreprise, barbecues et garden parties.",
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
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
            <AnimateOnScroll animation="fade-left" className="w-full lg:w-1/2">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42-1_3_306698-168546594928335.jpeg"
                    alt="Prestation événementielle corporate tout inclus Lyon"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-gold/30" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b border-l border-gold/30" />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-right" className="w-full lg:w-1/2">
              <div className="luxury-line-left mb-6" />
              <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-2">
                Prestation complète
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe mb-6">
                Ce qui est inclus dans nos prestations
              </h2>
              <p className="text-taupe-soft leading-relaxed mb-8">
                Nous prenons en charge l&apos;intégralité de votre événement
                d&apos;entreprise à Lyon pour que vous puissiez vous concentrer
                sur l&apos;essentiel : vos collaborateurs et vos invités.
              </p>
              <ul className="space-y-3">
                {[
                  "Recherche et réservation du lieu idéal à Lyon",
                  "Conception du programme et du déroulé",
                  "Scénographie et décoration sur-mesure",
                  "Coordination des prestataires (traiteur, technique, animations)",
                  "Gestion logistique complète (transports, hébergement)",
                  "Animations et activités de team building",
                  "Couverture photo et vidéo de l'événement",
                  "Chef de projet dédié et présent le jour J",
                ].map((f) => (
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
                    <span className="text-taupe-soft text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Notre processus */}
      <section className="py-28 bg-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Notre méthode
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Comment nous organisons votre événement
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Un processus éprouvé en quatre étapes pour garantir la réussite de
              votre séminaire ou événement d&apos;entreprise à Lyon.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Briefing & Stratégie",
                description:
                  "Nous analysons vos objectifs, votre budget et vos attentes lors d'un rendez-vous dédié. Nous définissons ensemble le concept et la stratégie de votre événement.",
              },
              {
                step: "02",
                title: "Conception & Proposition",
                description:
                  "Notre équipe conçoit un programme détaillé avec sélection de lieux, activités, prestataires et budget prévisionnel. Vous validez chaque étape avant de poursuivre.",
              },
              {
                step: "03",
                title: "Production & Coordination",
                description:
                  "Nous coordonnons l'ensemble des prestataires, gérons la logistique et les derniers ajustements. Votre chef de projet dédié supervise chaque détail.",
              },
              {
                step: "04",
                title: "Jour J & Suivi",
                description:
                  "Notre équipe est présente sur site pour orchestrer l'événement. Après celui-ci, nous vous remettons un bilan complet avec photos, vidéos et retours participants.",
              },
            ].map((item) => (
              <AnimateOnScroll key={item.step} animation="fade-up">
                <div className="luxury-card border border-gold/10 bg-white p-8 h-full text-center">
                  <span className="text-gold text-3xl font-heading font-bold">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-taupe mt-4 mb-3">
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

      {/* Pourquoi un professionnel */}
      <section className="py-28 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <AnimateOnScroll animation="fade-right" className="w-full lg:w-1/2">
              <div className="luxury-line-left mb-6" />
              <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-2">
                L&apos;avantage Smart Moments
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe mb-6">
                Pourquoi confier votre événement à une agence événementielle ?
              </h2>
              <p className="text-taupe-soft leading-relaxed mb-6">
                Organiser un séminaire d&apos;entreprise à Lyon demande du temps,
                des compétences et un réseau de prestataires fiables. En faisant
                appel à Smart Moments Event, vous bénéficiez d&apos;une expertise
                éprouvée et d&apos;un carnet d&apos;adresses exclusif pour
                garantir un événement à la hauteur de vos ambitions.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Gain de temps considérable",
                    text: "Nous prenons en charge toute l'organisation : vous vous concentrez sur votre activité pendant que nous créons votre événement.",
                  },
                  {
                    title: "Réseau de prestataires premium",
                    text: "Accédez à nos partenaires triés sur le volet : lieux prestigieux, traiteurs gastronomiques, techniciens audiovisuels et animateurs professionnels.",
                  },
                  {
                    title: "Maîtrise du budget",
                    text: "Nous optimisons chaque euro investi grâce à notre connaissance du marché et nos tarifs négociés auprès des prestataires lyonnais.",
                  },
                  {
                    title: "Sérénité totale",
                    text: "Un chef de projet dédié gère les imprévus et coordonne l'ensemble des intervenants pour un déroulement sans accroc.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 text-gold mt-1 shrink-0"
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
                    <div>
                      <span className="font-heading font-semibold text-taupe text-sm">
                        {item.title}
                      </span>
                      <p className="text-taupe-light text-sm leading-relaxed mt-1">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" className="w-full lg:w-1/2">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-30-at-10-53-36_3_306698-168546595011373.jpeg"
                    alt="Agence événementielle professionnelle pour séminaires Lyon"
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

      {/* FAQ */}
      <section className="py-28 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Questions fréquentes
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe">
              Tout savoir sur nos événements d&apos;entreprise
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Quel est le délai idéal pour organiser un séminaire d'entreprise à Lyon ?",
                a: "Nous recommandons de nous contacter au minimum 2 à 3 mois avant la date souhaitée pour un séminaire d'entreprise. Ce délai permet de sécuriser les meilleurs lieux à Lyon, de planifier les activités de team building et de coordonner tous les prestataires. Pour les événements de grande envergure (plus de 100 participants), un délai de 4 à 6 mois est préférable.",
              },
              {
                q: "Quels types d'événements d'entreprise organisez-vous à Lyon ?",
                a: "Nous organisons tous types d'événements corporate : séminaires de direction, journées de team building, conférences et conventions, soirées de gala et remises de prix, lancements de produit, afterworks et fêtes d'entreprise, journées portes ouvertes et inaugurations. Chaque événement est conçu sur-mesure selon vos objectifs et votre budget.",
              },
              {
                q: "Combien coûte l'organisation d'un événement d'entreprise à Lyon ?",
                a: "Le budget varie selon le type d'événement, le nombre de participants, le lieu et les prestations souhaitées. Nous travaillons avec des budgets très variés et proposons toujours une solution adaptée. Contactez-nous pour un devis gratuit et personnalisé : nous analysons vos besoins et vous proposons un budget détaillé sans engagement.",
              },
              {
                q: "Pouvez-vous organiser un séminaire en dehors de Lyon ?",
                a: "Bien sûr ! Bien que nous soyons basés à Lyon, nous organisons des événements d'entreprise dans toute la région Rhône-Alpes et au-delà : Annecy, Chambéry, Grenoble, Saint-Étienne, Beaujolais, Drôme provençale. Nous connaissons les meilleurs lieux et prestataires de chaque région pour garantir un événement réussi.",
              },
              {
                q: "Quelles animations proposez-vous pour un team building ?",
                a: "Nous proposons un large choix d'animations de team building : ateliers créatifs (cuisine, œnologie, art), défis sportifs et aventure, escape games, rallyes urbains dans le Vieux Lyon, animations digitales (vidéo 360°, photobooth), quiz interactifs et murder parties. Chaque activité est choisie pour renforcer la cohésion d'équipe tout en garantissant un moment de plaisir.",
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

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41-1_3_306698-168546595088459.jpeg"
            alt="Organisez votre prochain événement d'entreprise à Lyon"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/60 via-taupe/40 to-taupe/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <div className="luxury-line mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
            Prêt à organiser votre prochain événement ?
          </h2>
          <p className="text-white/50 text-lg mb-12 leading-relaxed font-light">
            Contactez-nous pour discuter de votre projet de séminaire ou
            d&apos;événement d&apos;entreprise à Lyon. Devis gratuit et
            personnalisé sous 48h.
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
            <Link
              href="/services/photobooth"
              className="text-gold hover:underline"
            >
              Photobooth & Vidéo 360°
            </Link>
            <span className="text-white/20 hidden sm:inline">|</span>
            <Link href="/contact" className="text-gold hover:underline">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
