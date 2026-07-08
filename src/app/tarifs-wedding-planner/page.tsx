import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import StickyContactBar, { TrustBadge } from "@/components/StickyContactBar";

export const metadata: Metadata = {
  title: "Tarifs Wedding Planner Lyon | À partir de 1 500 €",
  description:
    "Combien coûte un wedding planner à Lyon ? Nos prestations démarrent à 1 500 € : coordination jour J, prestation partielle ou organisation complète. Devis gratuit en 24h, paiement en plusieurs fois.",
  keywords: [
    "tarif wedding planner",
    "prix wedding planner lyon",
    "combien coûte un wedding planner",
    "tarif organisation mariage",
    "prix organisation mariage lyon",
    "wedding planner pas cher lyon",
    "budget wedding planner",
    "coût wedding planner mariage",
    "tarif coordinatrice jour j",
    "prix coordination mariage",
  ],
  alternates: { canonical: "https://www.smartmoments.fr/tarifs-wedding-planner" },
  openGraph: {
    title: "Tarifs Wedding Planner Lyon | Smart Moments Event",
    description:
      "Nos prestations de wedding planning démarrent à 1 500 €. Devis gratuit et transparent en 24h.",
    url: "https://www.smartmoments.fr/tarifs-wedding-planner",
  },
};

const formules = [
  {
    name: "Coordination Jour J",
    pitch: "Vous avez tout organisé, profitez enfin de votre journée.",
    includes: [
      "Reprise complète du dossier 1 mois avant le mariage",
      "Vérification et confirmation de tous vos prestataires",
      "Rétroplanning minute par minute du jour J",
      "Coordination de tous les intervenants sur place",
      "Gestion du timing, des imprévus et des urgences",
      "Présence de votre coordinatrice du matin à la fin de soirée",
    ],
    ideal: "Idéale si vous avez organisé votre mariage vous-même",
  },
  {
    name: "Prestation Partielle",
    pitch: "Un accompagnement ciblé là où vous en avez besoin.",
    includes: [
      "Modules à la carte selon vos besoins",
      "Recherche du lieu de réception",
      "Sélection de prestataires clés (traiteur, photographe, DJ...)",
      "Décoration et scénographie sur mesure",
      "Conception de cérémonie laïque",
      "Coordination jour J incluse",
    ],
    ideal: "Idéale si votre mariage est en partie organisé",
    highlight: true,
  },
  {
    name: "Organisation Complète",
    pitch: "Votre mariage clé en main, de A à Z, sans stress.",
    includes: [
      "Recherche et visites des lieux de réception",
      "Gestion intégrale du budget et négociations",
      "Sélection complète des prestataires",
      "Conception décoration et design floral",
      "Rétroplanning et suivi sur 12 à 18 mois",
      "Coordination complète le jour J",
    ],
    ideal: "Idéale pour déléguer entièrement l'organisation",
  },
];

const faqItems = [
  {
    q: "Combien coûte un wedding planner à Lyon ?",
    a: "Nos prestations de wedding planning à Lyon démarrent à partir de 1 500 €. Le tarif final dépend de la formule choisie (coordination jour J, prestation partielle ou organisation complète), du nombre d'invités, du lieu et du niveau de personnalisation souhaité. Chaque devis est gratuit, détaillé et sans engagement.",
  },
  {
    q: "Le devis est-il vraiment gratuit ?",
    a: "Oui, totalement. Le premier rendez-vous (1h, en visio ou à Lyon) est offert et sans engagement. Vous recevez ensuite un devis détaillé sous 24 à 48h, avec une simulation budgétaire transparente pour l'ensemble de votre mariage.",
  },
  {
    q: "Peut-on payer en plusieurs fois ?",
    a: "Oui, nous proposons systématiquement le paiement en plusieurs fois, calé sur le rétroplanning de votre mariage. L'objectif est que le budget ne soit jamais un frein à la sérénité de votre organisation.",
  },
  {
    q: "Un wedding planner fait-il vraiment économiser de l'argent ?",
    a: "Souvent, oui. Grâce à notre réseau et à nos négociations avec les prestataires, les économies obtenues compensent une partie significative de nos honoraires. Surtout, nous vous évitons les erreurs coûteuses (prestataire défaillant, lieu inadapté, doublons) et 200 à 400 heures d'organisation.",
  },
  {
    q: "Quelle formule choisir pour un petit budget ?",
    a: "La coordination jour J est la porte d'entrée idéale : vous organisez vous-même votre mariage à votre rythme, et vous nous confiez uniquement l'orchestration du jour J pour en profiter sereinement. C'est la formule la plus accessible, à partir de 1 500 €.",
  },
  {
    q: "Y a-t-il des frais de déplacement ?",
    a: "Nos tarifs incluent les déplacements dans la région lyonnaise. Pour les mariages en PACA, Île-de-France, Bourgogne ou à l'étranger (destination weddings), les frais de déplacement sont précisés en toute transparence dans le devis.",
  },
];

export default function TarifsPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.smartmoments.fr" },
      { "@type": "ListItem", position: 2, name: "Tarifs Wedding Planner", item: "https://www.smartmoments.fr/tarifs-wedding-planner" },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Wedding Planner Lyon - Tarifs",
    provider: {
      "@type": "LocalBusiness",
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
    serviceType: "Wedding Planning",
    areaServed: { "@type": "City", name: "Lyon" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: "1500",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-champagne overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="luxury-line mx-auto mb-8" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-taupe mb-6 leading-tight">
            Tarifs Wedding Planner
            <br />
            <span className="text-gold-gradient italic">à Lyon</span>
          </h1>
          <p className="text-4xl md:text-5xl font-heading text-gold-gradient italic mb-6">
            À partir de 1 500 €
          </p>
          <p className="text-taupe-soft text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Trois formules d&apos;accompagnement, un seul engagement : la transparence.
            Devis gratuit et détaillé en 24h, paiement en plusieurs fois possible.
          </p>
          <TrustBadge />
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/contact?type=mariage"
              className="btn-luxury bg-gold text-white px-12 py-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gold-dark transition-colors"
            >
              Demander mon devis gratuit
            </Link>
            <a
              href="tel:0756987181"
              className="btn-luxury border border-gold/40 text-gold px-12 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-gold hover:text-white transition-all"
            >
              07 56 98 71 81
            </a>
          </div>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Tarifs Wedding Planner" }]} />

      {/* Formules */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="luxury-line mx-auto mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Nos formules
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6 leading-tight">
              Un accompagnement adapté
              <br />
              <span className="text-gold-gradient italic">à chaque projet</span>
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Le tarif exact dépend du nombre d&apos;invités, du lieu et du niveau de
              personnalisation : chaque devis est établi sur mesure, gratuitement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formules.map((tier, i) => (
              <AnimateOnScroll key={tier.name} animation="fade-up" delay={i * 100}>
                <div
                  className={`bg-white p-8 h-full flex flex-col ${
                    tier.highlight
                      ? "border-2 border-gold shadow-lg shadow-gold/10"
                      : "border border-gold/10"
                  }`}
                >
                  {tier.highlight && (
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-4">
                      La plus choisie
                    </p>
                  )}
                  <h3 className="text-xl font-heading font-bold text-taupe mb-3">{tier.name}</h3>
                  <p className="text-taupe-soft text-sm leading-relaxed mb-6">{tier.pitch}</p>
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
                    {tier.ideal}
                  </p>
                  <Link
                    href="/contact?type=mariage"
                    className={`text-center py-3 px-6 text-[11px] uppercase tracking-[0.3em] font-bold transition-all ${
                      tier.highlight
                        ? "bg-gold text-white hover:bg-gold-dark"
                        : "border border-gold/40 text-gold hover:bg-gold hover:text-white"
                    }`}
                  >
                    Demander un devis
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <p className="text-center text-taupe-light text-sm mt-10 max-w-2xl mx-auto leading-relaxed">
            Toutes nos prestations démarrent à partir de <strong>1 500 €</strong>. Devis gratuit,
            transparent et sans engagement — réponse sous 24h.
          </p>
        </div>
      </section>

      {/* Wedding planner vs soi-même */}
      <section className="py-24 bg-rose">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="luxury-line mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe leading-tight">
              Wedding planner ou
              <br />
              <span className="text-gold-gradient italic">organisation soi-même ?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gold/10 p-8">
              <h3 className="font-heading font-bold text-taupe text-lg mb-5">
                Organiser soi-même
              </h3>
              <ul className="space-y-3 text-sm text-taupe-soft">
                <li>• 200 à 400 heures de travail sur 12 à 18 mois</li>
                <li>• Recherche de prestataires sans réseau ni recul</li>
                <li>• Négociations aux tarifs publics</li>
                <li>• Gestion du stress et des imprévus le jour J</li>
                <li>• Risque d&apos;erreurs coûteuses (acomptes, doublons, oublis)</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-gold p-8">
              <h3 className="font-heading font-bold text-taupe text-lg mb-5">
                Avec Smart Moments Event
              </h3>
              <ul className="space-y-3 text-sm text-taupe-soft">
                <li>• Votre temps préservé : vous validez, nous exécutons</li>
                <li>• Réseau de 50+ prestataires testés et approuvés</li>
                <li>• Tarifs négociés grâce à nos partenariats</li>
                <li>• Coordinatrice dédiée le jour J : zéro stress</li>
                <li>• Budget maîtrisé et simulation transparente dès le devis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="luxury-line mx-auto mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Questions fréquentes
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe">
              Vos questions sur nos tarifs
            </h2>
          </div>
          <div className="space-y-5">
            {faqItems.map((f) => (
              <details key={f.q} className="group border border-gold/10 bg-white">
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
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-taupe-light text-sm mb-6">
              Pour aller plus loin :{" "}
              <Link href="/services/mariage" className="text-gold hover:underline">
                notre organisation de mariage clé en main
              </Link>{" "}
              ·{" "}
              <Link href="/blog/budget-wedding-planner" className="text-gold hover:underline">
                quel budget prévoir pour un wedding planner
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42-1_3_306698-168546594928335.jpeg"
            alt="Tarifs wedding planner Lyon - Smart Moments Event"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/60 via-taupe/40 to-taupe/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <div className="luxury-line mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-[1.1]">
            Recevez votre devis
            <br />
            <span className="text-gold-gradient italic">gratuit en 24h</span>
          </h2>
          <p className="text-white/60 text-lg mb-10 font-light">
            Premier rendez-vous offert, devis détaillé, zéro engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?type=mariage"
              className="btn-luxury bg-gold text-white px-12 py-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gold-dark transition-colors"
            >
              Demander mon devis
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

      <StickyContactBar />
    </>
  );
}
