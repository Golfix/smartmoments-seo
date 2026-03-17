import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Organisation Anniversaire Lyon | Fête Sur Mesure | Smart Moments Event",
  description:
    "Organisation d'anniversaire haut de gamme à Lyon. Fêtes sur mesure pour 18, 30, 40, 50, 60 ans, anniversaires surprise, soirées à thème. Décoration, animation, traiteur. Devis gratuit.",
  keywords: [
    "organisation anniversaire lyon",
    "anniversaire lyon",
    "fête anniversaire lyon",
    "décoration anniversaire lyon",
    "anniversaire surprise lyon",
    "organisation fête lyon",
    "anniversaire 30 ans lyon",
    "anniversaire 40 ans lyon",
    "anniversaire 50 ans lyon",
    "soirée anniversaire lyon",
  ],
  alternates: { canonical: "https://www.smartmoments.fr/services/anniversaire" },
  openGraph: {
    title: "Organisation d'Anniversaire Haut de Gamme Lyon",
    description:
      "Fêtes d'anniversaire sur mesure à Lyon. Décoration raffinée, animations, lieux d'exception. De 18 à 60 ans et plus.",
    url: "https://www.smartmoments.fr/services/anniversaire",
    images: [
      {
        url: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42-1_3_306698-168546594928335.jpeg",
        width: 960,
        height: 640,
        alt: "Organisation anniversaire haut de gamme Lyon - Smart Moments Event",
      },
    ],
  },
};

export default function AnniversairePage() {
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
        name: "Organisation d'Anniversaire",
        item: "https://www.smartmoments.fr/services/anniversaire",
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Organisation d'Anniversaire Haut de Gamme",
    provider: {
      "@type": "LocalBusiness",
      name: "Smart Moments Event",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lyon",
        addressRegion: "Rhône-Alpes",
        addressCountry: "FR",
      },
    },
    serviceType: [
      "Organisation d'anniversaire",
      "Fête d'anniversaire sur mesure",
      "Décoration anniversaire",
    ],
    areaServed: [
      { "@type": "City", name: "Lyon" },
      { "@type": "City", name: "Lyon 7ème" },
      { "@type": "AdministrativeArea", name: "Rhône-Alpes" },
    ],
    description:
      "Organisation de fêtes d'anniversaire haut de gamme à Lyon. Événements sur mesure pour anniversaires milestone, soirées surprise, fêtes à thème avec décoration, animation et traiteur.",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Combien coûte l'organisation d'un anniversaire à Lyon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le budget varie selon le nombre d'invités, le lieu, la décoration et les animations choisies. Nous proposons des formules adaptées à chaque budget, à partir de prestations de décoration seule jusqu'à l'organisation complète clé en main. Contactez-nous pour un devis personnalisé gratuit.",
        },
      },
      {
        "@type": "Question",
        name: "Organisez-vous des anniversaires surprise ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolument ! Les anniversaires surprise sont notre spécialité. Nous gérons toute la logistique en toute discrétion : coordination avec vos proches, réservation du lieu, installation de la décoration, gestion du traiteur et des animations. Nous veillons à ce que chaque détail soit parfait pour le grand moment de surprise.",
        },
      },
      {
        "@type": "Question",
        name: "Quels lieux proposez-vous pour un anniversaire à Lyon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous travaillons avec un réseau de lieux d'exception à Lyon et en Rhône-Alpes : rooftops avec vue sur la ville, salles de réception privées, restaurants étoilés, domaines viticoles, péniches sur le Rhône, lofts industriels et hôtels particuliers. Nous sélectionnons le lieu idéal selon votre thème, votre nombre d'invités et votre budget.",
        },
      },
      {
        "@type": "Question",
        name: "Quelles animations proposez-vous pour une fête d'anniversaire ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous proposons un large choix d'animations : photobooth miroir magique, vidéo 360°, DJ professionnel, musiciens live, spectacles de magie, cocktail masterclass, dégustations de vin, karaoké privé et bien plus. Chaque animation est sélectionnée pour correspondre à l'ambiance et au thème de votre fête.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps à l'avance faut-il réserver ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous recommandons de nous contacter 2 à 3 mois avant la date souhaitée pour une organisation optimale, surtout pour les grands anniversaires (50 invités et plus). Pour les fêtes plus intimes ou les anniversaires surprise, un délai de 3 à 4 semaines peut suffire selon la disponibilité des lieux et prestataires.",
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
          { label: "Organisation d'Anniversaire" },
        ]}
      />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42-1_3_306698-168546594928335.jpeg"
            alt="Organisation d'anniversaire haut de gamme à Lyon avec décoration raffinée"
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
              Célébrations sur mesure
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-[0.95]">
            Organisation d&apos;
            <span className="text-gold-gradient italic">Anniversaire</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
            Des fêtes d&apos;anniversaire exceptionnelles et sur mesure à Lyon.
            De l&apos;intime au grandiose, nous créons l&apos;événement qui vous ressemble.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* Notre approche */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-40-1_3_306698-168546595086946.jpeg"
                    alt="Décoration anniversaire haut de gamme Lyon"
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
                Notre savoir-faire
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe mb-6">
                Votre anniversaire, notre passion
              </h2>
              <p className="text-taupe-soft leading-relaxed mb-6">
                Chez Smart Moments Event, nous croyons que chaque anniversaire mérite
                d&apos;être célébré avec éclat. Que ce soit pour marquer un cap symbolique
                ou simplement réunir vos proches, nous concevons des fêtes
                d&apos;anniversaire sur mesure à Lyon qui dépassent vos attentes.
                Notre équipe prend en charge chaque détail, de la recherche du lieu
                parfait à la coordination le jour J.
              </p>
              <p className="text-taupe-soft leading-relaxed mb-8">
                Spécialistes de l&apos;organisation d&apos;anniversaire à Lyon, nous
                travaillons avec les meilleurs prestataires de la région : traiteurs
                gastronomiques, fleuristes, DJ, artistes et techniciens son et lumière.
                Résultat : une fête d&apos;anniversaire inoubliable, sans stress et
                à votre image.
              </p>
              <ul className="space-y-3">
                {[
                  "Conception créative et thème personnalisé",
                  "Recherche et réservation du lieu idéal",
                  "Décoration sur mesure et scénographie",
                  "Coordination des prestataires et traiteur",
                  "Gestion complète le jour de la fête",
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

      {/* Types d'anniversaires */}
      <section className="py-28 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Nos spécialités
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Chaque anniversaire est unique
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Des 18 ans pétillants aux 60 ans élégants, nous adaptons chaque
              célébration à la personnalité de l&apos;invité d&apos;honneur et
              à l&apos;ambiance souhaitée.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Anniversaire 18 ans",
                description:
                  "Le passage à l'âge adulte mérite une fête à la hauteur. Soirée dansante, photobooth, décoration tendance et ambiance festive pour célébrer cette étape majeure avec style à Lyon.",
              },
              {
                title: "Anniversaire 30 ans",
                description:
                  "Cap symbolique par excellence, les 30 ans se fêtent en grand. Cocktail chic, brunch entre amis ou soirée à thème : nous créons l'événement qui vous ressemble dans un lieu d'exception lyonnais.",
              },
              {
                title: "Anniversaire 40 ans",
                description:
                  "L'élégance de la quarantaine appelle une célébration raffinée. Dîner gastronomique, soirée privée ou garden party, nous orchestrons un événement mémorable pour vous et vos proches.",
              },
              {
                title: "Anniversaire 50 & 60 ans",
                description:
                  "Les grands anniversaires sont des moments d'exception. Réception haut de gamme, discours orchestrés, rétrospective photo et décoration somptueuse pour un hommage à la hauteur de ces belles années.",
              },
              {
                title: "Anniversaire Surprise",
                description:
                  "L'art de la surprise parfaite. Nous organisons votre fête surprise en toute discrétion : coordination secrète avec vos proches, scénario de couverture, mise en scène spectaculaire et effet wow garanti.",
              },
              {
                title: "Soirée à Thème",
                description:
                  "Gatsby, années 80, tropical, casino, Hollywood, mascarade... Nous transformons le lieu de votre choix en un décor immersif pour une soirée d'anniversaire à thème dont on parlera longtemps.",
              },
            ].map((type) => (
              <div key={type.title} className="luxury-card border border-gold/10 bg-white p-8 h-full">
                <h3 className="text-lg font-heading font-bold text-taupe mb-3">
                  {type.title}
                </h3>
                <p className="text-taupe-light text-sm leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Décoration & Animation */}
      <section className="py-28 bg-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Prestations incluses
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Décoration & Animations
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Une décoration d&apos;anniversaire raffinée et des animations
              sur mesure pour une fête inoubliable à Lyon.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Décoration Sur Mesure",
                description:
                  "Scénographie complète, arches de ballons, compositions florales, centres de table, mise en lumière et signalétique personnalisée aux couleurs de votre thème.",
              },
              {
                step: "02",
                title: "Photobooth & Vidéo 360°",
                description:
                  "Notre miroir magique et notre vidéo 360° pour des souvenirs uniques. Impressions instantanées et vidéos spectaculaires à partager sur les réseaux sociaux.",
              },
              {
                step: "03",
                title: "Traiteur & Pâtisserie",
                description:
                  "Cocktails dînatoires, buffets gastronomiques, food trucks ou dîner assis. Gâteau d'anniversaire personnalisé, candy bar et bar à cocktails sur mesure.",
              },
              {
                step: "04",
                title: "Musique & Spectacles",
                description:
                  "DJ professionnel, musiciens live, chanteurs, magiciens, danseurs. Nous sélectionnons les animations qui correspondent à votre ambiance et vos envies.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
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
            ))}
          </div>
        </div>
      </section>

      {/* Lieux à Lyon */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42_3_306698-168546594931608.jpeg"
                    alt="Lieu de réception pour anniversaire à Lyon"
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
                Lieux d&apos;exception
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe mb-6">
                Les plus beaux lieux de Lyon
              </h2>
              <p className="text-taupe-soft leading-relaxed mb-6">
                Lyon regorge de lieux exceptionnels pour célébrer votre anniversaire.
                Grâce à notre réseau de partenaires privilégiés, nous vous donnons
                accès à des espaces exclusifs qui sublimeront votre fête
                d&apos;anniversaire.
              </p>
              <p className="text-taupe-soft leading-relaxed mb-8">
                Que vous rêviez d&apos;un rooftop avec vue panoramique sur Fourvière,
                d&apos;un domaine viticole dans les Monts d&apos;Or, d&apos;une péniche
                amarrée sur les berges du Rhône ou d&apos;un loft industriel dans le
                quartier de la Confluence, nous trouvons le cadre parfait pour votre
                célébration.
              </p>
              <ul className="space-y-3">
                {[
                  "Rooftops et terrasses panoramiques",
                  "Salles de réception privées et hôtels particuliers",
                  "Domaines viticoles et châteaux en Rhône-Alpes",
                  "Péniches et espaces atypiques sur le Rhône",
                  "Restaurants privés et lofts industriels",
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

      {/* Processus */}
      <section className="py-28 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Notre méthode
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Comment nous organisons votre fête
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Un accompagnement personnalisé du premier échange jusqu&apos;au
              lendemain de votre anniversaire, pour une fête sans stress.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Rendez-vous Découverte",
                description:
                  "Nous échangeons sur vos envies, le profil de l'invité d'honneur, le nombre de convives, votre budget et l'ambiance souhaitée.",
              },
              {
                step: "02",
                title: "Concept & Proposition",
                description:
                  "Nous concevons un concept sur mesure : thème, lieu, décoration, menu, animations. Vous recevez un devis détaillé et transparent.",
              },
              {
                step: "03",
                title: "Coordination",
                description:
                  "Nous réservons le lieu, sélectionnons les prestataires, gérons le planning et coordonnons chaque détail logistique en toute sérénité.",
              },
              {
                step: "04",
                title: "Le Jour J",
                description:
                  "Notre équipe installe la décoration, accueille les prestataires et veille au bon déroulement de la soirée. Vous n'avez qu'à profiter.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
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
              Tout savoir sur l&apos;organisation d&apos;anniversaire
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Combien coûte l'organisation d'un anniversaire à Lyon ?",
                a: "Le budget varie selon le nombre d'invités, le lieu, la décoration et les animations choisies. Nous proposons des formules adaptées à chaque budget, à partir de prestations de décoration seule jusqu'à l'organisation complète clé en main. Contactez-nous pour un devis personnalisé gratuit.",
              },
              {
                q: "Organisez-vous des anniversaires surprise ?",
                a: "Absolument ! Les anniversaires surprise sont notre spécialité. Nous gérons toute la logistique en toute discrétion : coordination avec vos proches, réservation du lieu, installation de la décoration, gestion du traiteur et des animations. Nous veillons à ce que chaque détail soit parfait pour le grand moment de surprise.",
              },
              {
                q: "Quels lieux proposez-vous pour un anniversaire à Lyon ?",
                a: "Nous travaillons avec un réseau de lieux d'exception à Lyon et en Rhône-Alpes : rooftops avec vue sur la ville, salles de réception privées, restaurants étoilés, domaines viticoles, péniches sur le Rhône, lofts industriels et hôtels particuliers. Nous sélectionnons le lieu idéal selon votre thème, votre nombre d'invités et votre budget.",
              },
              {
                q: "Quelles animations proposez-vous pour une fête d'anniversaire ?",
                a: "Nous proposons un large choix d'animations : photobooth miroir magique, vidéo 360°, DJ professionnel, musiciens live, spectacles de magie, cocktail masterclass, dégustations de vin, karaoké privé et bien plus. Chaque animation est sélectionnée pour correspondre à l'ambiance et au thème de votre fête.",
              },
              {
                q: "Combien de temps à l'avance faut-il réserver ?",
                a: "Nous recommandons de nous contacter 2 à 3 mois avant la date souhaitée pour une organisation optimale, surtout pour les grands anniversaires (50 invités et plus). Pour les fêtes plus intimes ou les anniversaires surprise, un délai de 3 à 4 semaines peut suffire selon la disponibilité des lieux et prestataires.",
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
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41-3_3_306698-168546594978953.jpeg"
            alt="Organisation anniversaire de prestige Lyon"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/60 via-taupe/40 to-taupe/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <div className="luxury-line mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
            Organisez un anniversaire inoubliable
          </h2>
          <p className="text-white/50 text-lg mb-12 leading-relaxed font-light">
            Parlez-nous de votre projet et recevez un devis personnalisé
            gratuit pour l&apos;organisation de votre fête d&apos;anniversaire à Lyon.
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
