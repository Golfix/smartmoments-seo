import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { cities } from "@/data/cities";
import { themes } from "@/data/themes";

export const metadata: Metadata = {
  title:
    "Wedding Planner Lyon - Organisatrice de Mariage Haut de Gamme | 4.6★",
  description:
    "Meilleur wedding planner à Lyon et Rhône-Alpes. Organisation de mariage sur mesure, coordination jour J, prestation partielle. Noté 4.6/5 sur Mariages.net, recommandé par 92% des couples. Formules à partir de 200€. Première consultation gratuite.",
  alternates: { canonical: "https://smartmoments.fr/wedding-planner" },
  openGraph: {
    title: "Wedding Planner Lyon | Organisation de Mariage de Prestige",
    description:
      "Dites oui à Smart Moments et vivez un mariage extraordinaire. Wedding planning sur mesure, coordination jour J et décoration haut de gamme à Lyon.",
    url: "https://smartmoments.fr/wedding-planner",
    images: [{ url: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41-3_3_306698-168546594978953.jpeg", width: 960, height: 640, alt: "Wedding Planner Lyon - Smart Moments organise votre mariage" }],
  },
};

const steps = [
  {
    number: "01",
    title: "Première Rencontre",
    description:
      "Nous nous rencontrons autour d'un café pour comprendre votre vision, vos envies, votre budget et l'ambiance souhaitée. Cette première consultation est entièrement gratuite et sans engagement.",
  },
  {
    number: "02",
    title: "Conception & Design",
    description:
      "Nous élaborons ensemble le concept de votre mariage. Recherche du lieu de réception idéal, sélection des prestataires lyonnais de confiance, création du mood board et du rétroplanning.",
  },
  {
    number: "03",
    title: "Préparation & Décoration",
    description:
      "Nos wedding designers créent une scénographie sur mesure : palette de couleurs, compositions florales spectaculaires, décor de table raffiné. Chaque détail reflète votre personnalité.",
  },
  {
    number: "04",
    title: "Le Jour J",
    description:
      "Le jour de votre mariage, notre coordinatrice orchestre l'ensemble des prestataires, gère le timing minute par minute et anticipe chaque imprévu. Vous vivez pleinement votre journée.",
  },
];

const packages = [
  {
    name: "Prestation Partielle",
    subtitle: "Accompagnement ciblé",
    description:
      "Vous avez déjà commencé l'organisation de votre mariage ? Nous intervenons en complément pour vous conseiller sur les aspects qui vous posent question.",
    features: [
      "Conseil et orientation personnalisés",
      "Vérification des contrats prestataires",
      "Rétroplanning personnalisé",
      "Recommandations de prestataires lyonnais",
      "Suivi par email et téléphone",
    ],
    popular: false,
  },
  {
    name: "Organisation Complète",
    subtitle: "Mariage clé en main",
    description:
      "De la première rencontre au lendemain du mariage, nous prenons tout en charge. Un mariage clé en main pour une sérénité totale.",
    features: [
      "Tout de la prestation partielle",
      "Recherche et réservation du lieu de réception",
      "Sélection de tous les prestataires",
      "Wedding design et décoration complète",
      "Coordination intégrale du jour J",
      "Gestion du budget de A à Z",
      "Suivi post-événement",
    ],
    popular: true,
  },
  {
    name: "Coordination Jour J",
    subtitle: "Sérénité le jour du mariage",
    description:
      "Vous avez tout organisé vous-même mais souhaitez une coordinatrice de mariage professionnelle le jour J pour profiter sereinement.",
    features: [
      "Reprise du dossier 1 mois avant",
      "Visite technique du lieu",
      "Réunion de coordination prestataires",
      "Présence le jour J (dès l'installation)",
      "Gestion du timing et des imprévus",
      "Interface avec tous les intervenants",
    ],
    popular: false,
  },
];

export default function WeddingPlannerPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://smartmoments.fr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Wedding Planner Lyon",
        item: "https://smartmoments.fr/wedding-planner",
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quand faut-il contacter un wedding planner ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Idéalement, contactez votre wedding planner 12 à 18 mois avant votre mariage pour une organisation complète. Pour une coordination jour J uniquement, 2 à 3 mois avant suffisent. Plus tôt vous nous contactez, plus nous aurons de choix pour les lieux et prestataires les plus demandés à Lyon.",
        },
      },
      {
        "@type": "Question",
        name: "Peut-on faire appel à un wedding planner avec un petit budget ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolument ! Nos formules démarrent à partir de 200 €. Nous proposons des prestations adaptées à tous les budgets : prestation partielle pour un accompagnement ciblé, coordination jour J pour la sérénité le jour du mariage, ou organisation complète clé en main. Le paiement en plusieurs fois est possible.",
        },
      },
      {
        "@type": "Question",
        name: "Quels lieux de réception recommandez-vous à Lyon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lyon et sa région offrent des lieux de réception exceptionnels : châteaux du Beaujolais, domaines viticoles, salles avec vue sur les quais de Saône, mas provençaux aux portes de Lyon. Grâce à notre réseau de partenaires, nous vous recommandons les meilleurs lieux adaptés à votre style et votre budget.",
        },
      },
      {
        "@type": "Question",
        name: "Comment se déroule la première rencontre avec Smart Moments ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La première rencontre est gratuite et sans engagement. Nous nous retrouvons autour d'un café pour discuter de votre projet : date, nombre d'invités, style souhaité, budget envisagé. C'est l'occasion de faire connaissance et de voir si le feeling passe. Nous vous envoyons ensuite un devis personnalisé sous 48h.",
        },
      },
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Wedding Planner Lyon - Smart Moments Event",
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
    areaServed: [
      { "@type": "City", name: "Lyon" },
      { "@type": "City", name: "Lyon 7ème" },
      { "@type": "AdministrativeArea", name: "Rhône-Alpes" },
    ],
    description:
      "Wedding planner à Lyon. Organisation de mariage clé en main, coordination jour J, prestation partielle.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: "200",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: "Wedding Planner Lyon" }]} />

      {/* Hero */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41-3_3_306698-168546594978953.jpeg"
            alt="Wedding Planner Lyon - Smart Moments organise votre mariage haut de gamme"
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
              Wedding Planner Lyon
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-[0.95]">
            Dites oui à un mariage
            <br />
            <span className="text-gold-gradient italic">extraordinaire</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
            Notre équipe de wedding planners qualifiés à Lyon transforme vos
            rêves en réalité. Chaque moment de votre mariage mérite d&apos;être
            parfait.
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
                Votre mariage, notre passion
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-8 leading-tight">
                Un wedding planner
                <br />
                <span className="text-gold-gradient italic">sur mesure</span>
              </h2>
              <p className="text-taupe-soft leading-relaxed mb-6">
                Chez Smart Moments, nous croyons que chaque couple est unique et
                que chaque <strong>mariage</strong> doit l&apos;être aussi. Notre approche
                personnalisée vous garantit un événement qui vous ressemble
                vraiment, quel que soit votre budget.
              </p>
              <p className="text-taupe-soft leading-relaxed mb-6">
                Notre équipe de <strong>wedding planners à Lyon</strong> vous
                accompagne à chaque étape : du choix du lieu de réception idéal
                à la <strong>coordination du jour J</strong>, en passant par la
                sélection minutieuse de chaque prestataire et la création
                d&apos;une <strong>décoration haut de gamme</strong>.
              </p>
              <p className="text-taupe-soft leading-relaxed">
                Nous travaillons avec un réseau de partenaires lyonnais fiables
                et talentueux, sélectionnés avec soin, pour proposer des
                <strong> mariages adaptés à tous les budgets</strong> sans jamais
                compromettre la qualité ni le raffinement.
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-40-1_3_306698-168546595086946.jpeg"
                  alt="Décoration florale mariage haut de gamme Lyon"
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

      {/* Étapes */}
      <section className="py-28 bg-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Notre méthode
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Comment organiser votre mariage ?
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Un processus simple et transparent pour organiser le mariage de
              vos rêves en toute sérénité.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative border border-gold/10 bg-white p-8">
                <span className="text-5xl font-heading font-bold text-gold/15">
                  {step.number}
                </span>
                <h3 className="text-lg font-heading font-bold text-taupe mb-3 -mt-2">
                  {step.title}
                </h3>
                <p className="text-taupe-light text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formules */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Nos formules
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Combien coûte un wedding planner ?
            </h2>
            <p className="text-taupe-soft leading-relaxed">
              Trois formules adaptées à vos besoins et à votre budget, à partir
              de 200&nbsp;&euro;. Paiement possible en plusieurs fois.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
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
                <p
                  className={`text-[9px] uppercase tracking-[0.3em] mb-2 ${
                    pkg.popular ? "text-gold/60" : "text-gold"
                  }`}
                >
                  {pkg.subtitle}
                </p>
                <h3 className="text-xl font-heading font-bold mb-3">
                  {pkg.name}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-8 ${
                    pkg.popular ? "text-taupe-soft" : "text-taupe-soft"
                  }`}
                >
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-10">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3.5 text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 ${
                    pkg.popular
                      ? "bg-gold text-white hover:bg-gold-dark"
                      : "bg-gold text-white hover:bg-gold-dark"
                  }`}
                >
                  Demander un Devis
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SEO */}
      <section className="py-28 bg-rose">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Questions fréquentes
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe">
              Tout savoir sur le wedding planning
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Quand faut-il contacter un wedding planner ?",
                a: "Idéalement, contactez votre wedding planner 12 à 18 mois avant votre mariage pour une organisation complète. Pour une coordination jour J uniquement, 2 à 3 mois avant suffisent. Plus tôt vous nous contactez, plus nous aurons de choix pour les lieux et prestataires les plus demandés à Lyon.",
              },
              {
                q: "Peut-on faire appel à un wedding planner avec un petit budget ?",
                a: "Absolument ! Nos formules démarrent à partir de 200 €. Nous proposons des prestations adaptées à tous les budgets : prestation partielle pour un accompagnement ciblé, coordination jour J pour la sérénité le jour du mariage, ou organisation complète clé en main. Le paiement en plusieurs fois est possible.",
              },
              {
                q: "Quels lieux de réception recommandez-vous à Lyon ?",
                a: "Lyon et sa région offrent des lieux de réception exceptionnels : châteaux du Beaujolais, domaines viticoles, salles avec vue sur les quais de Saône, mas provençaux aux portes de Lyon. Grâce à notre réseau de partenaires, nous vous recommandons les meilleurs lieux adaptés à votre style et votre budget.",
              },
              {
                q: "Comment se déroule la première rencontre avec Smart Moments ?",
                a: "La première rencontre est gratuite et sans engagement. Nous nous retrouvons autour d\u0027un café pour discuter de votre projet : date, nombre d\u0027invités, style souhaité, budget envisagé. C\u0027est l\u0027occasion de faire connaissance et de voir si le feeling passe. Nous vous envoyons ensuite un devis personnalisé sous 48h.",
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

      {/* Styles de mariage */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Nos spécialités
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Quel style pour votre mariage ?
            </h2>
            <p className="text-taupe-soft leading-relaxed">
              Chaque couple est unique. Découvrez nos différents styles de
              mariage et trouvez l&apos;inspiration pour votre jour J.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((t) => (
              <Link
                key={t.slug}
                href={`/wedding-planner/style/${t.slug}`}
                className="group border border-gold/10 bg-white p-8 hover:border-gold transition-all duration-300"
              >
                <p className="text-[9px] uppercase tracking-[0.3em] text-gold mb-2">
                  Style de mariage
                </p>
                <h3 className="text-xl font-heading font-bold text-taupe mb-3 group-hover:text-gold transition-colors">
                  {t.name}
                </h3>
                <p className="text-taupe-soft text-sm leading-relaxed mb-4">
                  {t.description}
                </p>
                <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] group-hover:tracking-[0.4em] transition-all">
                  Découvrir
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Villes d'intervention */}
      <section className="py-28 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Partout en France
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Votre wedding planner dans votre ville
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Basés à Lyon, nous organisons des mariages dans toute la France.
              Découvrez nos services de wedding planning dans votre ville.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.slice(0, 40).map((city) => (
              <Link
                key={city.slug}
                href={`/wedding-planner/${city.slug}`}
                className="border border-gold/20 bg-white px-5 py-2.5 text-[11px] text-taupe-soft uppercase tracking-[0.15em] hover:border-gold hover:text-gold transition-all duration-300"
              >
                {city.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-taupe-light text-sm">
              Et plus de {cities.length - 40} autres villes en France &mdash;{" "}
              <Link href="/contact" className="text-gold hover:underline">
                Contactez-nous
              </Link>{" "}
              pour votre ville
            </p>
          </div>
        </div>
      </section>

      {/* Services complémentaires */}
      <section className="py-20 bg-ivory">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Nos prestations
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe">
              Services complémentaires pour votre mariage
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Organisation Complète", description: "Mariage clé en main, de A à Z", href: "/services/mariage" },
              { title: "Cérémonie Laïque", description: "Une célébration personnalisée et émouvante", href: "/services/ceremonie-laique" },
              { title: "Décoration", description: "Scénographie haut de gamme sur mesure", href: "/services/decoration" },
              { title: "Photobooth & 360°", description: "Animations et souvenirs pour vos invités", href: "/services/photobooth" },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group border border-gold/10 bg-white p-6 hover:border-gold transition-all duration-300 text-center"
              >
                <h3 className="text-base font-heading font-bold text-taupe mb-2 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-taupe-light text-sm leading-relaxed mb-3">
                  {service.description}
                </p>
                <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em]">
                  Découvrir →
                </span>
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
            alt="Organisation mariage cérémonie laïque Lyon"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/60 via-taupe/40 to-taupe/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <div className="luxury-line mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-[1.1]">
            Votre mariage de rêve
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
              Prendre Rendez-vous
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
