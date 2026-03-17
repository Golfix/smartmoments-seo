import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Organisation Bar Mitzvah Lyon | Smart Moments Event",
  description:
    "Organisation de Bar-Mitzvah haut de gamme à Lyon. Décoration sur mesure, animation, traiteur casher, lieu de réception. Célébration traditionnelle et moderne. Devis gratuit.",
  keywords: [
    "bar mitzvah lyon",
    "organisation bar mitzvah lyon",
    "bar mitzvah décoration lyon",
    "bar mitzvah traiteur lyon",
    "fête bar mitzvah lyon",
    "événement bar mitzvah rhône-alpes",
    "organisation bat mitzvah lyon",
    "bar mitzvah salle lyon",
    "bar mitzvah animation lyon",
    "célébration bar mitzvah lyon",
  ],
  alternates: { canonical: "https://www.smartmoments.fr/services/bar-mitzvah" },
  openGraph: {
    title: "Organisation Bar Mitzvah Lyon | Smart Moments Event",
    description:
      "Organisation complète de Bar-Mitzvah à Lyon. Décoration raffinée, animations, traiteur et coordination le jour J.",
    url: "https://www.smartmoments.fr/services/bar-mitzvah",
    images: [
      {
        url: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42_3_306698-168546594931608.jpeg",
        width: 960,
        height: 640,
        alt: "Organisation Bar Mitzvah haut de gamme Lyon - Smart Moments Event",
      },
    ],
  },
};

export default function BarMitzvahPage() {
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
        name: "Organisation de Bar-Mitzvah",
        item: "https://www.smartmoments.fr/services/bar-mitzvah",
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Organisation de Bar-Mitzvah",
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
      "Organisation de Bar-Mitzvah",
      "Organisation de Bat-Mitzvah",
      "Décoration événementielle",
      "Coordination événementielle",
    ],
    areaServed: [
      { "@type": "City", name: "Lyon" },
      { "@type": "City", name: "Villeurbanne" },
      { "@type": "AdministrativeArea", name: "Rhône-Alpes" },
    ],
    description:
      "Organisation complète de Bar-Mitzvah et Bat-Mitzvah haut de gamme à Lyon. Décoration sur mesure, animation, traiteur, lieu de réception et coordination le jour J.",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Comment organiser une Bar-Mitzvah inoubliable à Lyon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pour organiser une Bar-Mitzvah inoubliable à Lyon, il est essentiel de s'y prendre plusieurs mois à l'avance. Nous vous accompagnons dans le choix du lieu de réception, la décoration thématique, le traiteur (casher ou non), les animations adaptées à tous les âges et la coordination complète le jour J. Notre équipe veille à respecter les traditions tout en apportant une touche moderne et festive.",
        },
      },
      {
        "@type": "Question",
        name: "Quel budget prévoir pour une Bar-Mitzvah à Lyon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le budget d'une Bar-Mitzvah à Lyon varie selon le nombre d'invités, le lieu de réception, le traiteur et le niveau de décoration souhaité. Nous proposons des formules adaptées à différents budgets, de la célébration intime à la grande fête. Lors de notre premier rendez-vous, nous établissons ensemble un devis détaillé et transparent.",
        },
      },
      {
        "@type": "Question",
        name: "Proposez-vous aussi l'organisation de Bat-Mitzvah ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolument ! Nous organisons aussi bien les Bar-Mitzvah que les Bat-Mitzvah avec le même niveau d'exigence et de créativité. La décoration, les animations et l'ambiance sont adaptées pour créer un moment unique et personnalisé, en respectant les souhaits de la famille et les traditions.",
        },
      },
      {
        "@type": "Question",
        name: "Pouvez-vous gérer le traiteur casher pour la Bar-Mitzvah ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nous travaillons avec des traiteurs casher de confiance à Lyon et dans la région. Nous pouvons organiser un repas entièrement casher, du cocktail au dessert, en veillant au respect des règles de la cacherout. Nous proposons également des options mixtes si certains invités ont des préférences alimentaires différentes.",
        },
      },
      {
        "@type": "Question",
        name: "Quels types d'animations proposez-vous pour une Bar-Mitzvah ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous proposons un large choix d'animations : DJ spécialisé en musique israélienne et internationale, photobooth et vidéo 360°, danseurs, magicien, candy bar personnalisé, montage vidéo souvenir et bien plus. Les animations sont adaptées pour que les jeunes comme les adultes passent un moment exceptionnel.",
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
          { label: "Organisation de Bar-Mitzvah" },
        ]}
      />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42_3_306698-168546594931608.jpeg"
            alt="Organisation de Bar-Mitzvah haut de gamme à Lyon"
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
            <span className="text-gold-gradient italic">Bar-Mitzvah</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
            Une célébration sur mesure alliant tradition et modernité, organisée
            avec élégance à Lyon et en Rhône-Alpes.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* Notre approche */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <AnimateOnScroll animation="fade-right" className="w-full lg:w-1/2">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-40-1_3_306698-168546595086946.jpeg"
                    alt="Décoration Bar-Mitzvah haut de gamme Lyon"
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
                Une Bar-Mitzvah à votre image
              </h2>
              <p className="text-taupe-soft leading-relaxed mb-6">
                Chez Smart Moments Event, nous comprenons l&apos;importance de cette
                étape majeure dans la vie de votre enfant. La Bar-Mitzvah est bien
                plus qu&apos;une fête : c&apos;est un passage symbolique vers l&apos;âge adulte,
                un moment de partage familial et de joie intense. Notre mission est
                de créer une célébration qui honore les traditions tout en reflétant
                la personnalité unique de votre famille.
              </p>
              <p className="text-taupe-soft leading-relaxed mb-8">
                De la recherche du lieu de réception idéal à Lyon jusqu&apos;à la
                coordination complète le jour J, nous prenons en charge chaque
                détail pour que vous puissiez vivre pleinement ce moment
                exceptionnel. Décoration raffinée, animations captivantes, traiteur
                d&apos;excellence : nous orchestrons une fête inoubliable.
              </p>
              <ul className="space-y-3">
                {[
                  "Recherche et réservation du lieu de réception",
                  "Décoration thématique sur mesure",
                  "Coordination avec le traiteur casher",
                  "Animations adaptées à tous les âges",
                  "Gestion complète le jour de la célébration",
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

      {/* Nos prestations */}
      <section className="py-28 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Prestations
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Ce que nous organisons pour vous
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Chaque Bar-Mitzvah est unique. Nous concevons une célébration
              personnalisée qui mêle tradition, élégance et moments festifs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Décoration & Scénographie",
                description:
                  "Thématique sur mesure, compositions florales, centres de table, arches décoratives, mise en lumière et signalétique personnalisée aux couleurs de votre Bar-Mitzvah.",
              },
              {
                title: "Lieu de Réception",
                description:
                  "Sélection de salles prestigieuses à Lyon et en Rhône-Alpes, adaptées au nombre d'invités. Domaines, hôtels, espaces événementiels avec cuisine casher compatible.",
              },
              {
                title: "Traiteur & Pâtisserie",
                description:
                  "Traiteur casher ou traditionnel, cocktail dînatoire, buffet ou repas assis. Gâteau de Bar-Mitzvah personnalisé, candy bar et pièce montée spectaculaire.",
              },
              {
                title: "Animation & Musique",
                description:
                  "DJ spécialisé, musique israélienne et internationale, danseurs, hora, montée sur les épaules. Des animations qui font vibrer les jeunes et les adultes.",
              },
              {
                title: "Photobooth & Vidéo 360°",
                description:
                  "Cabine photo personnalisée, vidéo 360° immersive, livre d'or numérique et montage souvenir. Des souvenirs uniques pour immortaliser cette journée spéciale.",
              },
              {
                title: "Coordination Jour J",
                description:
                  "Notre équipe supervise l'ensemble de la célébration : accueil des invités, gestion du planning, coordination des prestataires. Vous profitez sans aucun stress.",
              },
            ].map((service) => (
              <AnimateOnScroll key={service.title} animation="fade-up">
                <div className="luxury-card border border-gold/10 bg-white p-8 h-full">
                  <h3 className="text-lg font-heading font-bold text-taupe mb-3">
                    {service.title}
                  </h3>
                  <p className="text-taupe-light text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-28 bg-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Notre méthode
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Les étapes de l&apos;organisation
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Un accompagnement structuré et bienveillant pour que chaque
              étape de la préparation soit un plaisir, pas une source de stress.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Rencontre & Vision",
                description:
                  "Nous échangeons sur vos traditions, vos envies et le style de célébration souhaité. Nous définissons ensemble le budget, le nombre d'invités et les grandes lignes du projet.",
              },
              {
                step: "02",
                title: "Conception & Création",
                description:
                  "Nous élaborons un concept créatif unique : thème, palette de couleurs, décoration, menu et animations. Vous recevez un dossier complet avec visuels et planning détaillé.",
              },
              {
                step: "03",
                title: "Préparation & Logistique",
                description:
                  "Nous réservons le lieu, coordonnons les prestataires, validons le menu avec le traiteur et préparons tous les éléments décoratifs et les animations prévues.",
              },
              {
                step: "04",
                title: "Le Grand Jour",
                description:
                  "Notre équipe installe la décoration, accueille les prestataires et coordonne l'ensemble de la journée. Vous ne vous occupez de rien, vous célébrez en famille.",
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

      {/* Tradition & Modernité */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
            <AnimateOnScroll animation="fade-left" className="w-full lg:w-1/2">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-30-at-10-53-36_3_306698-168546595011373.jpeg"
                    alt="Bar-Mitzvah décoration moderne et traditionnelle Lyon"
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
                Tradition & modernité
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe mb-6">
                Honorer les traditions avec style
              </h2>
              <p className="text-taupe-soft leading-relaxed mb-6">
                La Bar-Mitzvah marque le passage d&apos;un jeune garçon vers la
                responsabilité religieuse à l&apos;âge de 13 ans. C&apos;est un moment
                sacré qui mérite une célébration à la hauteur de sa signification.
                Chez Smart Moments Event, nous respectons profondément les
                traditions juives tout en proposant une mise en scène contemporaine
                et raffinée.
              </p>
              <p className="text-taupe-soft leading-relaxed mb-6">
                Que vous souhaitiez une célébration intimiste ou une grande fête
                pour plusieurs centaines d&apos;invités, nous adaptons chaque détail :
                la montée à la Torah, le repas de fête, la hora traditionnelle,
                les discours et les animations. Notre objectif est de créer un
                équilibre parfait entre le respect des coutumes et une ambiance
                festive et moderne qui plaira à toutes les générations.
              </p>
              <p className="text-taupe-soft leading-relaxed">
                Nous organisons également les <strong>Bat-Mitzvah</strong> avec la même
                attention et le même souci du détail, en célébrant le passage à
                l&apos;âge adulte des jeunes filles à 12 ans avec élégance et
                créativité.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-champagne">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Questions fréquentes
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe">
              Tout savoir sur l&apos;organisation de Bar-Mitzvah
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Comment organiser une Bar-Mitzvah inoubliable à Lyon ?",
                a: "Pour organiser une Bar-Mitzvah inoubliable à Lyon, il est essentiel de s'y prendre plusieurs mois à l'avance. Nous vous accompagnons dans le choix du lieu de réception, la décoration thématique, le traiteur (casher ou non), les animations adaptées à tous les âges et la coordination complète le jour J. Notre équipe veille à respecter les traditions tout en apportant une touche moderne et festive.",
              },
              {
                q: "Quel budget prévoir pour une Bar-Mitzvah à Lyon ?",
                a: "Le budget d'une Bar-Mitzvah à Lyon varie selon le nombre d'invités, le lieu de réception, le traiteur et le niveau de décoration souhaité. Nous proposons des formules adaptées à différents budgets, de la célébration intime à la grande fête. Lors de notre premier rendez-vous, nous établissons ensemble un devis détaillé et transparent.",
              },
              {
                q: "Proposez-vous aussi l'organisation de Bat-Mitzvah ?",
                a: "Absolument ! Nous organisons aussi bien les Bar-Mitzvah que les Bat-Mitzvah avec le même niveau d'exigence et de créativité. La décoration, les animations et l'ambiance sont adaptées pour créer un moment unique et personnalisé, en respectant les souhaits de la famille et les traditions.",
              },
              {
                q: "Pouvez-vous gérer le traiteur casher pour la Bar-Mitzvah ?",
                a: "Oui, nous travaillons avec des traiteurs casher de confiance à Lyon et dans la région. Nous pouvons organiser un repas entièrement casher, du cocktail au dessert, en veillant au respect des règles de la cacherout. Nous proposons également des options mixtes si certains invités ont des préférences alimentaires différentes.",
              },
              {
                q: "Quels types d'animations proposez-vous pour une Bar-Mitzvah ?",
                a: "Nous proposons un large choix d'animations : DJ spécialisé en musique israélienne et internationale, photobooth et vidéo 360°, danseurs, magicien, candy bar personnalisé, montage vidéo souvenir et bien plus. Les animations sont adaptées pour que les jeunes comme les adultes passent un moment exceptionnel.",
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
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41-1_3_306698-168546595088459.jpeg"
            alt="Organisation Bar-Mitzvah haut de gamme Lyon"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/60 via-taupe/40 to-taupe/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <div className="luxury-line mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
            Organisons ensemble une Bar-Mitzvah exceptionnelle
          </h2>
          <p className="text-white/50 text-lg mb-12 leading-relaxed font-light">
            Parlez-nous de votre projet et recevez un devis personnalisé
            gratuit pour l&apos;organisation de votre Bar-Mitzvah à Lyon.
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
