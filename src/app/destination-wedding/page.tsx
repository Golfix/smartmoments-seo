import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { destinations } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Destination Wedding | Mariage à l'Étranger sur Mesure - Smart Moments Event",
  description:
    "Organisation de votre destination wedding clé en main : Italie, Grèce, Suisse, Bali, Maroc, USA. Wedding planner spécialisé mariage à l'étranger basé à Lyon. Devis gratuit.",
  alternates: {
    canonical: "https://www.smartmoments.fr/destination-wedding",
  },
  keywords: [
    "destination wedding",
    "mariage à l'étranger",
    "wedding planner destination",
    "organisation mariage italie",
    "mariage suisse",
    "mariage bali",
    "mariage grèce",
    "mariage maroc",
    "wedding planner italie",
    "mariage destination luxe",
    "mariage international",
    "organisation mariage étranger lyon",
  ],
  openGraph: {
    title: "Destination Wedding par Smart Moments Event",
    description: "Votre mariage de rêve à l'étranger : Italie, Grèce, Bali, Maroc, USA, Suisse. Wedding planner spécialisé.",
    url: "https://www.smartmoments.fr/destination-wedding",
  },
};

export default function DestinationWeddingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Destination Wedding - Smart Moments Event",
    description:
      "Organisation de mariages à l'étranger clé en main. Italie, Grèce, Suisse, Bali, Maroc, USA, Portugal, Espagne.",
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        reviewCount: "25",
        bestRating: "5",
      },
    },
    serviceType: "Destination Wedding Planning",
    areaServed: destinations.map((d) => ({ "@type": "Country", name: d.country })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.smartmoments.fr" },
      { "@type": "ListItem", position: 2, name: "Destination Wedding", item: "https://www.smartmoments.fr/destination-wedding" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-30-at-10-54-55-1_3_306698-168563709678965.jpeg"
            alt="Destination wedding - mariage à l'étranger sur mesure"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/60 via-taupe/30 to-taupe/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
            <p className="text-gold text-[10px] uppercase tracking-[0.5em]">Destination Wedding</p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-[0.95]">
            Votre mariage
            <br />
            <span className="text-gold-gradient italic">à l&apos;étranger</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            Italie, Grèce, Suisse, Bali, Maroc... Smart Moments Event organise votre destination wedding clé en main, depuis Lyon.
          </p>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Destination Wedding" }]} />

      {/* Intro */}
      <section className="py-28 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <div className="luxury-line mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-8 leading-tight">
              Un wedding planner spécialisé
              <br />
              <span className="text-gold-gradient italic">mariage à l&apos;étranger</span>
            </h2>
            <p className="text-taupe-soft leading-relaxed mb-6 text-lg">
              Le <strong>destination wedding</strong> séduit de plus en plus de couples : un cadre exceptionnel, une expérience inoubliable pour les invités et des photos dignes des plus belles revues. Smart Moments Event, basée à <strong>Lyon</strong>, organise votre mariage à l&apos;étranger de A à Z.
            </p>
            <p className="text-taupe-soft leading-relaxed mb-6">
              De la recherche du lieu jusqu&apos;à la coordination le jour J sur place, nous gérons chaque détail : prestataires locaux, logistique des invités, formalités administratives, plans B météo. Notre réseau international vous garantit l&apos;accès aux meilleurs lieux et professionnels dans chaque destination.
            </p>
            <p className="text-taupe-soft leading-relaxed">
              Que vous rêviez d&apos;un mariage dans une <strong>villa toscane</strong>, sur une plage de <strong>Santorin</strong>, dans un <strong>riad de Marrakech</strong> ou face au <strong>Cervin à Zermatt</strong>, nous transformons votre vision en réalité.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-28 bg-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="luxury-line mx-auto mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">Nos destinations</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Mariage de rêve à <span className="text-gold-gradient italic">l&apos;international</span>
            </h2>
            <p className="text-taupe-light leading-relaxed max-w-2xl mx-auto">
              Découvrez nos destinations phares pour votre wedding planning à l&apos;étranger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, i) => (
              <AnimateOnScroll key={dest.slug} animation="fade-up" delay={i * 100}>
                <Link
                  href={`/destination-wedding/${dest.slug}`}
                  className="group block bg-white border border-gold/10 hover:border-gold/40 transition-all duration-300 overflow-hidden h-full"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={dest.imageUrl}
                      alt={`Mariage à ${dest.name} - destination wedding par Smart Moments Event`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-taupe/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1">{dest.country}</p>
                      <h3 className="text-2xl font-heading font-bold">{dest.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-taupe-soft text-sm leading-relaxed mb-4 line-clamp-3">
                      {dest.description}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-taupe-light">{dest.travelTime}</span>
                      <span className="text-gold uppercase tracking-[0.2em] font-semibold">
                        Découvrir →
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="py-28 bg-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-16">
              <div className="luxury-line mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe">
                Pourquoi choisir Smart Moments
                <br />
                <span className="text-gold-gradient italic">pour votre destination wedding ?</span>
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Expertise internationale",
                desc: "Notre réseau de prestataires partenaires couvre les principales destinations wedding (Italie, Grèce, Bali, Maroc, USA, Suisse...). Nous travaillons avec des professionnels locaux de confiance, testés et approuvés.",
              },
              {
                title: "Coordination depuis Lyon",
                desc: "Vous nous rencontrez à Lyon, vous bénéficiez du suivi en français, vous échangez avec un interlocuteur unique. Nous gérons la coordination internationale, les fuseaux horaires et les langues étrangères.",
              },
              {
                title: "Formalités administratives",
                desc: "Mariage civil à l'étranger, transcription en France, papiers d'identité, visas, douane pour la décoration : nous gérons l'ensemble des démarches administratives complexes.",
              },
              {
                title: "Logistique invités",
                desc: "Hébergement, transferts aéroport, activités sur place, welcome bags : nous coordonnons l'expérience complète de vos invités pour qu'ils profitent pleinement du week-end.",
              },
              {
                title: "Plan B météo",
                desc: "Climat tropical, mousson, canicule : nous anticipons chaque scénario météo avec un plan B systématique. Vos cérémonies en extérieur sont toujours sécurisées.",
              },
              {
                title: "Coordination jour J sur place",
                desc: "Notre coordinatrice se déplace sur la destination la veille et le jour J pour piloter l'ensemble. Vous n'avez aucun stress à gérer, vous profitez de chaque instant.",
              },
            ].map((item, i) => (
              <AnimateOnScroll key={item.title} animation="fade-up" delay={i * 80}>
                <div className="bg-white border border-gold/10 p-8 h-full">
                  <h3 className="text-lg font-heading font-bold text-taupe mb-3">{item.title}</h3>
                  <p className="text-taupe-soft text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42-1_3_306698-168546594928335.jpeg"
            alt="Destination wedding Smart Moments Event"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/60 via-taupe/40 to-taupe/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <div className="luxury-line mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-[1.1]">
            Prêt(e) à imaginer
            <br />
            <span className="text-gold-gradient italic">votre mariage à l&apos;étranger ?</span>
          </h2>
          <p className="text-white/50 text-lg mb-12 font-light">
            Première consultation gratuite et sans engagement. Parlez-nous de votre projet.
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
