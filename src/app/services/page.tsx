import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "Services Organisation Mariage, Décoration & Photobooth Lyon | Devis Gratuit",
  description:
    "Tous nos services événementiels à Lyon : organisation de mariage clé en main, décoration haut de gamme sur mesure, location photobooth miroir magique & vidéo 360°, coordination jour J. Baptêmes, bar-mitzvahs, séminaires. À partir de 200€.",
  alternates: { canonical: "https://www.smartmoments.fr/services" },
  openGraph: {
    title: "Services d'Organisation d'Événements de Prestige | Smart Moments Event Lyon",
    description:
      "Organisation de mariage complète, décoration haut de gamme, location photobooth et coordination jour J à Lyon et en France.",
    url: "https://www.smartmoments.fr/services",
    images: [{ url: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-43_3_306698-168546594996125.jpeg", width: 960, height: 640, alt: "Services organisation mariage et événements haut de gamme Lyon" }],
  },
};

const mainServices = [
  {
    title: "Organisation de Mariage Complète",
    subtitle: "Wedding Planning Clé en Main",
    description:
      "Nous prenons en charge l'intégralité de votre mariage. Du choix du lieu de réception à la sélection des meilleurs prestataires lyonnais, en passant par la logistique et la coordination complète, nous orchestrons chaque détail pour que vous n'ayez qu'à profiter du plus beau jour de votre vie.",
    features: [
      "Recherche et réservation du lieu de réception",
      "Sélection des prestataires (traiteur, photographe, DJ, fleuriste...)",
      "Création du rétroplanning complet",
      "Gestion intégrale du budget et des devis",
      "Coordination avec tous les intervenants",
      "Accompagnement personnalisé du premier rendez-vous au jour J",
    ],
    image:
      "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41_3_306698-168546595030467.jpeg",
    alt: "Organisation de mariage complète clé en main Lyon - Smart Moments wedding planner",
  },
  {
    title: "Décoration de Mariage Haut de Gamme",
    subtitle: "Wedding Design & Scénographie",
    description:
      "Nos décorateurs et wedding designers créent des ambiances uniques et raffinées, entièrement sur mesure. Chaque événement est pensé comme une oeuvre d'art visuelle : compositions florales spectaculaires, jeux de lumière, mobilier d'exception et mises en scène dignes des plus belles revues.",
    features: [
      "Conception de la scénographie complète sur mesure",
      "Arches fleuries et compositions florales spectaculaires",
      "Décoration de table élégante et raffinée",
      "Mise en lumière et ambiance féerique",
      "Personnalisation totale selon vos goûts et votre thème",
      "Mobilier et accessoires haut de gamme",
    ],
    image:
      "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-40-1_3_306698-168546595086946.jpeg",
    alt: "Décoration de mariage haut de gamme arche florale Lyon",
  },
  {
    title: "Photobooth & Animation Mariage",
    subtitle: "Miroir Magique & Vidéo 360°",
    description:
      "Des animations originales et modernes pour divertir vos invités et créer des souvenirs impérissables. Notre photobooth miroir magique et notre vidéo 360° immersive apportent une touche interactive, fun et élégante à chaque événement. L'animation préférée de 94% des invités !",
    features: [
      "Photobooth miroir magique avec impressions instantanées",
      "Vidéo 360° immersive avec montage professionnel",
      "Accessoires et décorations photo personnalisés",
      "Galerie en ligne partageable pour vos invités",
      "Animation adaptée à tout type d'événement",
      "Installation et gestion technique complète",
    ],
    image:
      "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42_3_306698-168546594931608.jpeg",
    alt: "Location photobooth miroir magique animation mariage Lyon",
  },
  {
    title: "Coordination du Jour J",
    subtitle: "Coordinatrice de Mariage",
    description:
      "Le jour de votre mariage, notre coordinatrice prend les rênes. Elle gère le timing précis du déroulé, assure l'interface avec tous les prestataires et anticipe chaque imprévu. Vous vivez pleinement chaque instant, sereinement, sans aucun stress ni préoccupation logistique.",
    features: [
      "Reprise complète du dossier 1 mois avant le jour J",
      "Visite technique du lieu de réception",
      "Réunion de coordination avec tous les prestataires",
      "Présence de la coordinatrice le jour du mariage",
      "Gestion du timing et du déroulé minute par minute",
      "Anticipation et gestion des imprévus",
    ],
    image:
      "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-30-at-10-53-36_3_306698-168546595011373.jpeg",
    alt: "Coordination jour J mariage Lyon coordinatrice",
  },
];

const eventTypes = [
  {
    title: "Mariages",
    description:
      "Organisation de mariage clé en main à Lyon. Du vin d'honneur à la soirée dansante, nous créons une expérience sur mesure, adaptée à votre style et votre budget.",
  },
  {
    title: "Baptêmes",
    description:
      "Organisation de baptême élégant à Lyon. Un moment de célébration et de partage en famille, orchestré avec douceur et raffinement.",
  },
  {
    title: "Bar-Mitzvahs",
    description:
      "Organisation de bar-mitzvah à Lyon. Une célébration festive et mémorable, où tradition et modernité se rencontrent pour un événement d'exception.",
  },
  {
    title: "Séminaires & Conférences",
    description:
      "Organisation de séminaire d'entreprise à Lyon. Des événements professionnels sur mesure : team building, conventions, journées d'étude.",
  },
  {
    title: "Fêtes d'Entreprise",
    description:
      "Organisation de fête d'entreprise à Lyon. Soirées de gala, anniversaires d'entreprise, lancements de produit : des expériences fédératrices.",
  },
  {
    title: "Cérémonies Laïques",
    description:
      "Organisation de cérémonie laïque à Lyon. Une célébration personnalisée et émouvante, en intérieur ou en extérieur, qui reflète votre histoire.",
  },
];

export default function ServicesPage() {
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
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
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
      "Organisation de mariage",
      "Wedding planning",
      "Coordination jour J",
      "Décoration de mariage",
      "Location photobooth",
      "Organisation événement d'entreprise",
    ],
    areaServed: [
      { "@type": "City", name: "Lyon" },
      { "@type": "City", name: "Villeurbanne" },
      { "@type": "AdministrativeArea", name: "Rhône-Alpes" },
    ],
    description:
      "Organisation de mariage complète, décoration haut de gamme, photobooth et coordination jour J à Lyon.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: "200",
      description: "Prestations sur mesure à partir de 200€",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quelles prestations propose Smart Moments Event ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous proposons quatre prestations principales : l'organisation de mariage complète (wedding planning clé en main), la décoration de mariage haut de gamme (wedding design et scénographie sur mesure), la location de photobooth miroir magique et vidéo 360°, et la coordination du jour J. Chaque prestation est personnalisable selon vos envies et votre budget.",
        },
      },
      {
        "@type": "Question",
        name: "Peut-on réserver uniquement la décoration de mariage ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolument ! Chacune de nos prestations est disponible individuellement. Vous pouvez nous confier uniquement la décoration et la scénographie de votre mariage, sans passer par notre service d'organisation complète. Nos décorateurs créeront un univers sur mesure qui reflète votre personnalité.",
        },
      },
      {
        "@type": "Question",
        name: "Comment fonctionne la location de photobooth ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Notre photobooth miroir magique est livré, installé et animé par notre équipe. Il inclut des impressions photo instantanées illimitées, des accessoires et une galerie en ligne partageable. La vidéo 360° immersive offre des souvenirs spectaculaires avec montage professionnel. Location disponible pour mariages, anniversaires et événements d'entreprise à Lyon.",
        },
      },
      {
        "@type": "Question",
        name: "Organisez-vous des événements d'entreprise ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nous organisons tous types d'événements professionnels à Lyon : séminaires, conférences, team building, soirées de gala, lancements de produit, anniversaires d'entreprise. Notre expertise événementielle s'adapte au monde corporate avec la même exigence de qualité et de raffinement.",
        },
      },
    ],
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

      <Breadcrumb items={[{ label: "Services" }]} />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-43_3_306698-168546594996125.jpeg"
            alt="Services organisation mariage et événements haut de gamme Lyon"
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
              Smart Moments Event
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-[0.95]">
            Nos <span className="text-gold-gradient italic">Services</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
            Organisation de mariage, décoration haut de gamme, photobooth et
            coordination jour J. Des prestations d&apos;exception pour chaque
            événement.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* Tarifs bandeau */}
      <section className="py-6 bg-rose border-b border-gold/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-taupe-light text-sm tracking-wider">
            Prestations sur mesure{" "}
            <span className="text-gold font-semibold">à partir de 200 &euro;</span>{" "}
            &mdash; Devis gratuit et personnalisé &mdash; Paiement en plusieurs
            fois possible
          </p>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {mainServices.map((service, i) => (
            <div
              key={service.title}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 lg:gap-24 items-center mb-32 last:mb-0`}
            >
              <div className="w-full lg:w-1/2 relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Decorative corner */}
                <div className={`absolute -top-4 ${i % 2 === 0 ? "-left-4" : "-right-4"} w-16 h-16 border-t ${i % 2 === 0 ? "border-l" : "border-r"} border-gold/30`} />
                <div className={`absolute -bottom-4 ${i % 2 === 0 ? "-right-4" : "-left-4"} w-16 h-16 border-b ${i % 2 === 0 ? "border-r" : "border-l"} border-gold/30`} />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="luxury-line-left mb-6" />
                <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-2">
                  {service.subtitle}
                </p>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe mb-6">
                  {service.title}
                </h2>
                <p className="text-taupe-soft leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((f) => (
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
          ))}
        </div>
      </section>

      {/* Liens vers pages détaillées */}
      <section className="py-16 bg-rose">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe">
              En savoir plus sur nos prestations
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/services/mariage"
              className="group border border-gold/10 bg-white p-8 hover:border-gold transition-all duration-300"
            >
              <p className="text-[9px] uppercase tracking-[0.3em] text-gold mb-2">
                Prestation phare
              </p>
              <h3 className="text-xl font-heading font-bold text-taupe mb-3 group-hover:text-gold transition-colors">
                Organisation de Mariage
              </h3>
              <p className="text-taupe-soft text-sm leading-relaxed mb-4">
                Accompagnement complet clé en main, coordination jour J et organisation sur mesure.
              </p>
              <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] group-hover:tracking-[0.4em] transition-all">
                Découvrir la prestation →
              </span>
            </Link>
            <Link
              href="/services/decoration"
              className="group border border-gold/10 bg-white p-8 hover:border-gold transition-all duration-300"
            >
              <p className="text-[9px] uppercase tracking-[0.3em] text-gold mb-2">
                Prestation détaillée
              </p>
              <h3 className="text-xl font-heading font-bold text-taupe mb-3 group-hover:text-gold transition-colors">
                Décoration de Mariage
              </h3>
              <p className="text-taupe-soft text-sm leading-relaxed mb-4">
                Scénographie sur mesure, wedding design haut de gamme, compositions florales et mise en lumière.
              </p>
              <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] group-hover:tracking-[0.4em] transition-all">
                Découvrir la prestation →
              </span>
            </Link>
            <Link
              href="/services/photobooth"
              className="group border border-gold/10 bg-white p-8 hover:border-gold transition-all duration-300"
            >
              <p className="text-[9px] uppercase tracking-[0.3em] text-gold mb-2">
                Animation
              </p>
              <h3 className="text-xl font-heading font-bold text-taupe mb-3 group-hover:text-gold transition-colors">
                Photobooth & Vidéo 360°
              </h3>
              <p className="text-taupe-soft text-sm leading-relaxed mb-4">
                Miroir magique, vidéo 360° immersive, impressions instantanées et galerie en ligne.
              </p>
              <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] group-hover:tracking-[0.4em] transition-all">
                Découvrir la prestation →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Types d'événements */}
      <section className="py-28 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Pour tous vos événements
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Types d&apos;événements
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Quel que soit l&apos;événement, nous avons l&apos;expertise et la
              passion pour le rendre exceptionnel et inoubliable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { ...eventTypes[0], href: "/services/mariage" },
              { ...eventTypes[1], href: "/services/bapteme" },
              { ...eventTypes[2], href: "/services/bar-mitzvah" },
              { ...eventTypes[3], href: "/services/seminaire-entreprise" },
              { ...eventTypes[4], href: "/services/anniversaire" },
              { ...eventTypes[5], href: "/services/ceremonie-laique" },
            ].map((event) => (
              <Link
                key={event.title}
                href={event.href}
                className="group luxury-card border border-gold/10 bg-white p-8 hover:border-gold transition-all duration-300"
              >
                <h3 className="text-lg font-heading font-bold text-taupe mb-3 group-hover:text-gold transition-colors">
                  {event.title}
                </h3>
                <p className="text-taupe-light text-sm leading-relaxed mb-4">
                  {event.description}
                </p>
                <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] group-hover:tracking-[0.4em] transition-all">
                  En savoir plus →
                </span>
              </Link>
            ))}
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
              Tout savoir sur nos services
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Quelles prestations propose Smart Moments Event ?",
                a: "Nous proposons quatre prestations principales : l\u2019organisation de mariage compl\u00e8te (wedding planning cl\u00e9 en main), la d\u00e9coration de mariage haut de gamme (wedding design et sc\u00e9nographie sur mesure), la location de photobooth miroir magique et vid\u00e9o 360\u00b0, et la coordination du jour J. Chaque prestation est personnalisable selon vos envies et votre budget.",
              },
              {
                q: "Peut-on r\u00e9server uniquement la d\u00e9coration de mariage ?",
                a: "Absolument ! Chacune de nos prestations est disponible individuellement. Vous pouvez nous confier uniquement la d\u00e9coration et la sc\u00e9nographie de votre mariage, sans passer par notre service d\u2019organisation compl\u00e8te. Nos d\u00e9corateurs cr\u00e9eront un univers sur mesure qui refl\u00e8te votre personnalit\u00e9.",
              },
              {
                q: "Comment fonctionne la location de photobooth ?",
                a: "Notre photobooth miroir magique est livr\u00e9, install\u00e9 et anim\u00e9 par notre \u00e9quipe. Il inclut des impressions photo instantan\u00e9es illimit\u00e9es, des accessoires et une galerie en ligne partageable. La vid\u00e9o 360\u00b0 immersive offre des souvenirs spectaculaires avec montage professionnel. Location disponible pour mariages, anniversaires et \u00e9v\u00e9nements d\u2019entreprise \u00e0 Lyon.",
              },
              {
                q: "Organisez-vous des \u00e9v\u00e9nements d\u2019entreprise ?",
                a: "Oui, nous organisons tous types d\u2019\u00e9v\u00e9nements professionnels \u00e0 Lyon : s\u00e9minaires, conf\u00e9rences, team building, soir\u00e9es de gala, lancements de produit, anniversaires d\u2019entreprise. Notre expertise \u00e9v\u00e9nementielle s\u2019adapte au monde corporate avec la m\u00eame exigence de qualit\u00e9 et de raffinement.",
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
            alt="Organisation d'événement de prestige Lyon"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/60 via-taupe/40 to-taupe/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <div className="luxury-line mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
            Un projet en tête ?
          </h2>
          <p className="text-white/50 text-lg mb-12 leading-relaxed font-light">
            Parlez-nous de votre événement et recevez un devis personnalisé
            gratuit sous 24h.
          </p>
          <Link
            href="/contact"
            className="btn-luxury inline-block bg-gold text-white px-12 py-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gold-dark transition-colors"
          >
            Demander un Devis Gratuit
          </Link>
          <p className="text-white/40 text-sm mt-6">
            Vous cherchez un{" "}
            <Link href="/wedding-planner" className="text-gold hover:underline">
              wedding planner à Lyon
            </Link>
            {" "}? Découvrez nos formules complètes.
          </p>
        </div>
      </section>
    </>
  );
}
