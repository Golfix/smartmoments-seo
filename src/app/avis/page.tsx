import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Avis Clients - Wedding Planner Lyon | Témoignages Smart Moments",
  description:
    "Découvrez les avis et témoignages de nos clients. Smart Moments Event, wedding planner à Lyon, noté 4.6/5 sur Mariages.net. 92% de recommandation, 25+ avis vérifiés. Organisation de mariage, décoration, coordination jour J.",
  alternates: { canonical: "https://www.smartmoments.fr/avis" },
  openGraph: {
    title: "Avis Clients | Smart Moments Event Lyon",
    description:
      "4.6/5 sur Mariages.net — Découvrez les témoignages de nos mariés et clients. Wedding planner Lyon.",
    url: "https://www.smartmoments.fr/avis",
  },
  keywords: [
    "avis wedding planner lyon",
    "témoignages smart moments",
    "avis mariages.net",
    "avis organisateur mariage lyon",
    "témoignages mariés lyon",
    "wedding planner lyon recommandé",
  ],
};

const reviews = [
  {
    couple: "Sophie & Thomas",
    event: "Mariage à Lyon",
    location: "Lyon 6e",
    rating: 5,
    service: "Organisation complète",
    date: "Septembre 2025",
    text: "Smart Moments a transformé notre mariage en un véritable conte de fées. Dès notre première rencontre, l'équipe a su comprendre nos envies et les sublimer. Chaque détail était parfaitement orchestré, des compositions florales à la coordination des prestataires. Le jour J, nous n'avons eu qu'à profiter de chaque instant sans aucun stress.",
  },
  {
    couple: "Marine & Julien",
    event: "Mariage champêtre dans le Beaujolais",
    location: "Beaujolais",
    rating: 5,
    service: "Décoration",
    date: "Juin 2025",
    text: "Nous rêvions d'un mariage champêtre élégant dans un domaine viticole du Beaujolais, et Smart Moments a dépassé toutes nos attentes. La décoration était absolument magnifique : guirlandes de fleurs séchées, centres de table raffinés, arche de cérémonie à couper le souffle. Nos invités en parlent encore !",
  },
  {
    couple: "Amira & Karim",
    event: "Mariage à Villeurbanne",
    location: "Villeurbanne",
    rating: 5,
    service: "Organisation + photobooth",
    date: "Août 2025",
    text: "L'organisation de notre mariage multiculturel demandait beaucoup de coordination et Smart Moments a relevé le défi brillamment. Le photobooth miroir magique a été la star de la soirée, les invités ont adoré ! L'équipe a su respecter toutes nos traditions tout en apportant une touche moderne et raffinée.",
  },
  {
    couple: "Charlotte & Pierre",
    event: "Coordination jour J",
    location: "Lyon 2e",
    rating: 4,
    service: "Coordination jour J",
    date: "Juillet 2025",
    text: "Nous avions organisé notre mariage nous-mêmes mais avions besoin d'un regard professionnel pour le jour J. L'équipe de Smart Moments a pris en main la coordination avec efficacité. Quelques ajustements de timing auraient pu être anticipés plus tôt, mais globalement le déroulement a été fluide et nous avons pu profiter pleinement de notre journée.",
  },
  {
    couple: "Léa & Antoine",
    event: "Mariage bohème",
    location: "Monts d'Or",
    rating: 5,
    service: "Organisation complète",
    date: "Mai 2025",
    text: "De A à Z, Smart Moments a été irréprochable pour notre mariage bohème dans les Monts d'Or. Le choix du lieu, la recherche des prestataires, la mise en scène de la cérémonie laïque en plein air... Tout était parfait. On sentait une vraie passion et un professionnalisme rare. Merci pour ces souvenirs inoubliables.",
  },
  {
    couple: "Sarah & David",
    event: "Bar-mitzvah à Lyon",
    location: "Lyon 3e",
    rating: 5,
    service: "Organisation événement",
    date: "Octobre 2025",
    text: "Nous avons fait appel à Smart Moments pour la bar-mitzvah de notre fils et le résultat était exceptionnel. L'équipe a su créer une ambiance à la fois solennelle et festive, avec une décoration élégante et une animation parfaitement pensée. Les 120 invités ont tous été enchantés par cette journée mémorable.",
  },
  {
    couple: "Camille & Maxime",
    event: "Mariage romantique dans le Rhône",
    location: "Rhône",
    rating: 5,
    service: "Décoration + coordination",
    date: "Avril 2025",
    text: "La combinaison décoration et coordination proposée par Smart Moments était exactement ce qu'il nous fallait. L'univers romantique qu'ils ont créé pour notre mariage était sublime : tons poudrés, bougies, drapés... Et le jour J, tout s'est enchaîné comme sur des roulettes grâce à la coordination impeccable de l'équipe.",
  },
  {
    couple: "Inès & Romain",
    event: "Mariage intime",
    location: "Vieux Lyon",
    rating: 4,
    service: "Prestation partielle",
    date: "Mars 2025",
    text: "Pour notre mariage intime de 40 personnes dans le Vieux Lyon, nous avons opté pour une prestation partielle. L'accompagnement sur la sélection du lieu et des prestataires a été très utile. On aurait aimé un suivi un peu plus régulier entre les rendez-vous, mais le résultat final était à la hauteur de nos espérances.",
  },
];

const stats = [
  { number: "4.6/5", label: "Note moyenne" },
  { number: "92%", label: "Recommandation" },
  { number: "25+", label: "Avis clients" },
  { number: "100+", label: "Mariages réalisés" },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} étoiles sur 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-gold" : "text-gold/20"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function AvisPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
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
    review: reviews.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.couple,
      },
      datePublished: (() => {
        const months: Record<string, string> = {
          "Mars 2025": "2025-03",
          "Avril 2025": "2025-04",
          "Mai 2025": "2025-05",
          "Juin 2025": "2025-06",
          "Juillet 2025": "2025-07",
          "Août 2025": "2025-08",
          "Septembre 2025": "2025-09",
          "Octobre 2025": "2025-10",
        };
        return months[r.date] || "2025-06";
      })(),
      reviewBody: r.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
    })),
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
        name: "Avis Clients",
        item: "https://www.smartmoments.fr/avis",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Breadcrumb items={[{ label: "Avis Clients" }]} />

      {/* Hero */}
      <section className="relative py-28 bg-ivory overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
            <p className="text-gold text-[10px] uppercase tracking-[0.5em]">
              Témoignages
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-taupe mb-8 leading-[0.95]">
            Avis <span className="text-gold-gradient italic">Clients</span>
          </h1>
          <p className="text-lg text-taupe-soft max-w-2xl mx-auto font-light mb-12">
            Découvrez ce que nos mariés et clients disent de leur expérience
            avec Smart Moments Event.
          </p>

          {/* Note globale */}
          <div className="inline-flex flex-col items-center bg-white border border-gold/15 px-12 py-8">
            <div className="flex gap-1.5 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-6 h-6 ${star <= 4 ? "text-gold" : "text-gold/30"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-3xl font-heading font-bold text-gold-gradient mb-1">
              4.6/5
            </p>
            <p className="text-[10px] text-taupe-light uppercase tracking-[0.3em]">
              Basé sur 25 avis vérifiés
            </p>
          </div>
        </div>
      </section>

      {/* Grille d'avis */}
      <section className="py-28 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Ils nous ont fait confiance
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe">
              Témoignages de nos Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div
                key={review.couple}
                className="luxury-card bg-white border border-gold/10 p-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <Stars rating={review.rating} />
                  <span className="text-[10px] text-taupe-light uppercase tracking-[0.2em]">
                    {review.date}
                  </span>
                </div>
                <p className="text-taupe-soft text-sm leading-relaxed mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="h-[1px] bg-gradient-to-r from-gold/20 to-transparent mb-4" />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-heading font-bold text-taupe text-sm">
                      {review.couple}
                    </p>
                    <p className="text-[10px] text-taupe-light uppercase tracking-[0.15em] mt-1">
                      {review.event}
                    </p>
                  </div>
                  <span className="text-[9px] text-gold bg-gold/10 px-3 py-1 uppercase tracking-[0.15em] font-semibold">
                    {review.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos chiffres */}
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

      {/* Lien Mariages.net */}
      <section className="py-28 bg-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="luxury-line mb-6" />
          <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
            Avis vérifiés
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
            Retrouvez-nous sur Mariages.net
          </h2>
          <p className="text-taupe-soft leading-relaxed mb-10">
            Tous nos avis sont vérifiés et publiés sur Mariages.net, la
            plateforme de référence pour l&apos;organisation de mariage en
            France. Consultez notre profil complet et les témoignages détaillés
            de nos mariés.
          </p>
          <a
            href="https://www.mariages.net/organisation-mariage/smart-moments--e306698"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-luxury inline-block bg-gold text-white px-12 py-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gold-dark transition-colors"
          >
            Voir nos avis sur Mariages.net
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-champagne">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="luxury-line mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-taupe mb-8">
            Prêts à vivre votre moment ?
          </h2>
          <p className="text-taupe-soft text-lg mb-12 font-light">
            Rejoignez nos clients satisfaits et confiez-nous l&apos;organisation
            de votre événement. Première consultation gratuite et sans
            engagement.
          </p>
          <Link
            href="/contact"
            className="btn-luxury inline-block bg-gold text-white px-12 py-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gold-dark transition-colors"
          >
            Demander un Devis Gratuit
          </Link>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe">
              Découvrez nos prestations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Wedding Planner Lyon",
                description:
                  "Organisation de mariage complète, de la première rencontre au jour J. Profitez d'un accompagnement sur mesure.",
                href: "/wedding-planner",
              },
              {
                title: "Nos Services",
                description:
                  "Décoration haut de gamme, photobooth miroir magique, coordination jour J et bien plus encore.",
                href: "/services",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="luxury-card border border-gold/10 bg-white p-8 block group"
              >
                <h3 className="text-lg font-heading font-bold text-taupe mb-3 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-taupe-soft text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <span className="text-gold text-[10px] uppercase tracking-[0.2em] font-semibold">
                  En savoir plus →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
