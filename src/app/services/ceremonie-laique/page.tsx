import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Cérémonie Laïque Lyon | Officiant & Organisation | Smart Moments Event",
  description:
    "Organisation de cérémonie laïque à Lyon. Officiant professionnel, rituels personnalisés (sable, bougie, wine box), lieux en intérieur ou extérieur. Créez une cérémonie unique à votre image. Devis gratuit.",
  keywords: [
    "cérémonie laïque lyon",
    "officiant cérémonie laïque lyon",
    "cérémonie laïque mariage lyon",
    "cérémonie laïque personnalisée",
    "rituel cérémonie laïque",
    "organisation cérémonie laïque lyon",
    "cérémonie laïque extérieur lyon",
    "officiant mariage lyon",
    "cérémonie symbolique lyon",
    "cérémonie laïque rhône-alpes",
  ],
  alternates: { canonical: "https://smartmoments.fr/services/ceremonie-laique" },
  openGraph: {
    title: "Cérémonie Laïque Lyon | Organisation & Officiant",
    description:
      "Cérémonie laïque sur mesure à Lyon. Officiant professionnel, rituels symboliques, décoration et coordination. Vivez une cérémonie unique et émouvante.",
    url: "https://smartmoments.fr/services/ceremonie-laique",
    images: [
      {
        url: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-30-at-10-54-55-1_3_306698-168563709678965.jpeg",
        width: 960,
        height: 640,
        alt: "Cérémonie laïque mariage Lyon - Smart Moments Event",
      },
    ],
  },
};

export default function CeremonieLaiquePage() {
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
        name: "Services",
        item: "https://smartmoments.fr/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Cérémonie Laïque",
        item: "https://smartmoments.fr/services/ceremonie-laique",
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Organisation de Cérémonie Laïque",
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
      "Cérémonie laïque",
      "Officiant de cérémonie",
      "Organisation de cérémonie symbolique",
    ],
    areaServed: [
      { "@type": "City", name: "Lyon" },
      { "@type": "City", name: "Lyon 7ème" },
      { "@type": "AdministrativeArea", name: "Rhône-Alpes" },
    ],
    description:
      "Organisation complète de cérémonies laïques à Lyon. Officiant professionnel, rituels personnalisés, coordination et décoration. Cérémonies en intérieur ou en extérieur.",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qu'est-ce qu'une cérémonie laïque de mariage ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Une cérémonie laïque est une cérémonie de mariage non religieuse, entièrement personnalisée. Elle se déroule en complément du mariage civil à la mairie et permet aux mariés de célébrer leur union à travers des textes, des rituels symboliques et des moments de partage choisis par eux. Elle peut avoir lieu en intérieur comme en extérieur, dans le lieu de votre choix.",
        },
      },
      {
        "@type": "Question",
        name: "Quel est le rôle de l'officiant de cérémonie laïque ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'officiant est le maître de cérémonie qui guide et anime l'ensemble de la célébration. Il rédige les textes, coordonne les interventions des proches, présente les rituels symboliques et crée une atmosphère émouvante. Chez Smart Moments Event, notre officiant travaille en étroite collaboration avec les mariés pour écrire une cérémonie qui raconte leur histoire unique.",
        },
      },
      {
        "@type": "Question",
        name: "Quels rituels peut-on intégrer dans une cérémonie laïque ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les possibilités sont infinies : rituel du sable (mélange de sables colorés symbolisant l'union), cérémonie de la bougie d'unité, wine box ceremony (capsule temporelle avec une bouteille de vin et des lettres), rituel des rubans (handfasting), plantation d'un arbre, rituel de la lumière, échange de voeux personnalisés, et bien d'autres. Nous vous aidons à choisir ceux qui vous correspondent le mieux.",
        },
      },
      {
        "@type": "Question",
        name: "Peut-on organiser une cérémonie laïque en extérieur à Lyon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolument ! Lyon et sa région offrent de magnifiques lieux pour une cérémonie en plein air : domaines viticoles du Beaujolais, châteaux de la vallée du Rhône, jardins privés, parcs au bord de la Saône. Nous vous accompagnons dans le choix du lieu idéal et prévoyons toujours un plan B en cas de météo capricieuse.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps dure une cérémonie laïque ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Une cérémonie laïque dure en moyenne entre 30 et 45 minutes. Cette durée permet d'inclure les textes de l'officiant, les interventions des proches, les rituels symboliques, les échanges de voeux et les moments musicaux, tout en maintenant l'attention et l'émotion des invités à leur maximum.",
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
          { label: "Cérémonie Laïque" },
        ]}
      />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-30-at-10-54-55-1_3_306698-168563709678965.jpeg"
            alt="Cérémonie laïque de mariage en extérieur à Lyon"
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
              Cérémonie Symbolique
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-[0.95]">
            Cérémonie{" "}
            <span className="text-gold-gradient italic">Laïque</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
            Une cérémonie de mariage unique et personnalisée à Lyon,
            orchestrée par un officiant professionnel pour un moment
            d&apos;émotion inoubliable.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* Qu'est-ce qu'une cérémonie laïque */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41_3_306698-168546595030467.jpeg"
                    alt="Officiant de cérémonie laïque à Lyon"
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
                L&apos;essentiel
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe mb-6">
                Qu&apos;est-ce qu&apos;une cérémonie laïque ?
              </h2>
              <p className="text-taupe-soft leading-relaxed mb-6">
                La <strong>cérémonie laïque</strong>, aussi appelée cérémonie
                symbolique, est une célébration de mariage non religieuse et
                entièrement personnalisée. Contrairement au passage en mairie,
                elle vous offre une totale liberté : choix du lieu, des textes,
                des rituels et de l&apos;ambiance. C&apos;est le moment le plus
                émouvant de votre journée de mariage, celui où vous vous dites
                &quot;oui&quot; devant vos proches dans un cadre qui vous
                ressemble.
              </p>
              <p className="text-taupe-soft leading-relaxed mb-8">
                Chez <strong>Smart Moments Event</strong>, nous accompagnons les
                couples lyonnais dans la création de leur{" "}
                <strong>cérémonie laïque à Lyon</strong> et en Rhône-Alpes.
                De la rédaction des textes au choix des rituels, en passant par
                la coordination le jour J, nous prenons en charge chaque détail
                pour que vous puissiez vivre pleinement cet instant unique.
              </p>
              <Link
                href="/services/mariage"
                className="text-gold text-sm hover:underline inline-flex items-center gap-2"
              >
                Découvrir notre offre mariage complète
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Le rôle de l'officiant */}
      <section className="py-28 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Au coeur de la cérémonie
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Le rôle de l&apos;officiant
            </h2>
            <p className="text-taupe-light leading-relaxed">
              L&apos;<strong>officiant de cérémonie laïque à Lyon</strong> est
              bien plus qu&apos;un simple animateur. C&apos;est un conteur,
              un chef d&apos;orchestre émotionnel qui donne vie à votre
              histoire d&apos;amour devant vos invités.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Rencontre & Écoute",
                description:
                  "Nous apprenons à vous connaître en profondeur : votre rencontre, vos valeurs, vos anecdotes, ce qui fait la force de votre couple. Chaque mot prononcé le jour J sera juste et authentique.",
              },
              {
                title: "Écriture Sur Mesure",
                description:
                  "L'officiant rédige un texte unique qui raconte votre histoire. Pas de discours générique : chaque cérémonie est une création originale, écrite spécialement pour vous.",
              },
              {
                title: "Coordination des Proches",
                description:
                  "Discours des témoins, lectures de poèmes, interventions surprises : l'officiant coordonne chaque prise de parole pour un déroulé fluide et naturel.",
              },
              {
                title: "Animation des Rituels",
                description:
                  "L'officiant présente et guide chaque rituel symbolique avec élégance, en expliquant sa signification pour que vos invités partagent pleinement ces moments.",
              },
              {
                title: "Gestion des Émotions",
                description:
                  "Un bon officiant sait alterner les moments d'émotion intense et les touches d'humour. Il crée une atmosphère où rires et larmes de joie se mêlent naturellement.",
              },
              {
                title: "Maîtrise du Timing",
                description:
                  "Entrée des mariés, échanges de voeux, lancé de pétales : chaque moment est orchestré avec précision pour une cérémonie parfaitement rythmée de 30 à 45 minutes.",
              },
            ].map((item) => (
              <div key={item.title} className="luxury-card border border-gold/10 bg-white p-8 h-full">
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

      {/* Les rituels */}
      <section className="py-28 bg-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Moments Symboliques
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Les rituels de cérémonie laïque
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Les rituels symboliques sont le coeur de votre cérémonie laïque.
              Ils matérialisent votre engagement et créent des souvenirs
              visuels forts pour vous et vos invités.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Le Rituel du Sable",
                description:
                  "Chaque marié verse un sable de couleur différente dans un même vase, créant un mélange unique et impossible à séparer. Un symbole puissant de l'union de deux vies qui n'en forment plus qu'une. Vous pouvez aussi inviter vos familles à ajouter leur propre couleur.",
              },
              {
                title: "La Bougie d'Unité",
                description:
                  "Les mariés allument ensemble une grande bougie à partir de deux flammes individuelles, symbolisant la création d'une nouvelle lumière commune. Ce rituel intime et visuel est particulièrement beau en cérémonie de fin de journée.",
              },
              {
                title: "La Wine Box Ceremony",
                description:
                  "Les mariés scellent dans un coffret en bois une bouteille de vin accompagnée de lettres d'amour. Le coffret sera ouvert à une date choisie (1er, 5e ou 10e anniversaire) pour relire ces mots et partager ce vin ensemble. Une capsule temporelle de votre amour.",
              },
              {
                title: "Le Rituel des Rubans (Handfasting)",
                description:
                  "D'origine celtique, ce rituel consiste à lier les mains des mariés avec des rubans de couleurs, chacun symbolisant une valeur du couple : amour, fidélité, respect, joie. C'est de là que vient l'expression « se lier pour la vie ».",
              },
              {
                title: "La Plantation d'un Arbre",
                description:
                  "Les mariés plantent ensemble un jeune arbre en mélangeant la terre de leurs lieux d'origine. Un symbole vivant de leur amour qui grandira avec les années. Idéal pour les couples sensibles à la nature et au développement durable.",
              },
              {
                title: "Le Rituel de la Lumière",
                description:
                  "Chaque invité reçoit une bougie qu'il allume à partir de celle des mariés, créant une chaîne de lumière dans l'assemblée. Ce moment collectif et chaleureux symbolise l'amour qui se propage et la communauté qui entoure le couple.",
              },
            ].map((ritual) => (
              <div key={ritual.title} className="luxury-card border border-gold/10 bg-white p-8">
                <h3 className="text-lg font-heading font-bold text-taupe mb-3">
                  {ritual.title}
                </h3>
                <p className="text-taupe-light text-sm leading-relaxed">
                  {ritual.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services/decoration"
              className="text-gold text-sm hover:underline inline-flex items-center gap-2"
            >
              Découvrir nos prestations de décoration
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Lieux - Intérieur / Extérieur */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Le cadre idéal
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Où célébrer votre cérémonie laïque à Lyon ?
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Lyon et sa région offrent une diversité exceptionnelle de lieux
              pour votre <strong>cérémonie laïque en extérieur</strong> ou en
              intérieur. Nous vous guidons vers l&apos;écrin parfait.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="luxury-card border border-gold/10 bg-white p-10">
              <h3 className="text-xl font-heading font-bold text-taupe mb-4">
                Cérémonie en Extérieur
              </h3>
              <p className="text-taupe-soft leading-relaxed mb-6">
                La magie d&apos;une cérémonie en plein air est incomparable.
                Sous un arbre centenaire, face aux vignes du Beaujolais, dans
                les jardins d&apos;un château ou au bord de la Saône, votre
                cérémonie laïque en extérieur bénéficie d&apos;un décor
                naturel grandiose.
              </p>
              <ul className="space-y-3">
                {[
                  "Domaines viticoles du Beaujolais et des Côtes du Rhône",
                  "Châteaux et propriétés de la vallée du Rhône",
                  "Jardins et parcs privés de la région lyonnaise",
                  "Terrasses panoramiques avec vue sur Lyon",
                  "Plan B intérieur systématiquement prévu",
                ].map((lieu) => (
                  <li key={lieu} className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 text-gold mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-taupe-soft text-sm">{lieu}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="luxury-card border border-gold/10 bg-white p-10">
              <h3 className="text-xl font-heading font-bold text-taupe mb-4">
                Cérémonie en Intérieur
              </h3>
              <p className="text-taupe-soft leading-relaxed mb-6">
                Une cérémonie en intérieur offre un cadre maîtrisé et
                intime. Salons d&apos;honneur, orangeries, chapelles
                désacralisées ou salles de réception : la mise en lumière
                et la décoration créent une atmosphère enveloppante et
                théâtrale.
              </p>
              <ul className="space-y-3">
                {[
                  "Salons de réception et orangeries historiques",
                  "Chapelles désacralisées et lieux atypiques",
                  "Hôtels particuliers et salles de château",
                  "Espaces loft et galeries contemporaines",
                  "Mise en lumière et scénographie sur mesure",
                ].map((lieu) => (
                  <li key={lieu} className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 text-gold mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-taupe-soft text-sm">{lieu}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comment personnaliser */}
      <section className="py-28 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Votre cérémonie sur mesure
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Comment personnaliser votre cérémonie ?
            </h2>
            <p className="text-taupe-light leading-relaxed">
              Chaque <strong>cérémonie laïque de mariage à Lyon</strong> que
              nous créons est unique. Voici les étapes de notre accompagnement
              pour une célébration qui vous ressemble à 100%.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Rencontre Découverte",
                description:
                  "Un échange approfondi pour connaître votre histoire, vos valeurs, vos envies et le ton que vous souhaitez donner à votre cérémonie : émouvant, joyeux, intime, festif.",
              },
              {
                step: "02",
                title: "Création du Scénario",
                description:
                  "Rédaction d'un texte sur mesure, choix des rituels symboliques, sélection des musiques et coordination des interventions de vos proches.",
              },
              {
                step: "03",
                title: "Répétition Générale",
                description:
                  "Une répétition avec les protagonistes pour caler les déplacements, les timings et les prises de parole. Sérénité garantie pour le jour J.",
              },
              {
                step: "04",
                title: "Le Jour J",
                description:
                  "L'officiant anime votre cérémonie avec professionnalisme et émotion. Nous gérons la sonorisation, les rituels et la coordination pour un moment parfait.",
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
          <div className="text-center mt-16">
            <Link
              href="/wedding-planner"
              className="text-gold text-sm hover:underline inline-flex items-center gap-2"
            >
              En savoir plus sur notre accompagnement wedding planner
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
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
              Tout savoir sur la cérémonie laïque
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Qu'est-ce qu'une cérémonie laïque de mariage ?",
                a: "Une cérémonie laïque est une cérémonie de mariage non religieuse, entièrement personnalisée. Elle se déroule en complément du mariage civil à la mairie et permet aux mariés de célébrer leur union à travers des textes, des rituels symboliques et des moments de partage choisis par eux. Elle peut avoir lieu en intérieur comme en extérieur, dans le lieu de votre choix.",
              },
              {
                q: "Quel est le rôle de l'officiant de cérémonie laïque ?",
                a: "L'officiant est le maître de cérémonie qui guide et anime l'ensemble de la célébration. Il rédige les textes, coordonne les interventions des proches, présente les rituels symboliques et crée une atmosphère émouvante. Chez Smart Moments Event, notre officiant travaille en étroite collaboration avec les mariés pour écrire une cérémonie qui raconte leur histoire unique.",
              },
              {
                q: "Quels rituels peut-on intégrer dans une cérémonie laïque ?",
                a: "Les possibilités sont infinies : rituel du sable (mélange de sables colorés symbolisant l'union), cérémonie de la bougie d'unité, wine box ceremony (capsule temporelle avec une bouteille de vin et des lettres), rituel des rubans (handfasting), plantation d'un arbre, rituel de la lumière, échange de voeux personnalisés, et bien d'autres. Nous vous aidons à choisir ceux qui vous correspondent le mieux.",
              },
              {
                q: "Peut-on organiser une cérémonie laïque en extérieur à Lyon ?",
                a: "Absolument ! Lyon et sa région offrent de magnifiques lieux pour une cérémonie en plein air : domaines viticoles du Beaujolais, châteaux de la vallée du Rhône, jardins privés, parcs au bord de la Saône. Nous vous accompagnons dans le choix du lieu idéal et prévoyons toujours un plan B en cas de météo capricieuse.",
              },
              {
                q: "Combien de temps dure une cérémonie laïque ?",
                a: "Une cérémonie laïque dure en moyenne entre 30 et 45 minutes. Cette durée permet d'inclure les textes de l'officiant, les interventions des proches, les rituels symboliques, les échanges de voeux et les moments musicaux, tout en maintenant l'attention et l'émotion des invités à leur maximum.",
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
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-40-1_3_306698-168546595086946.jpeg"
            alt="Cérémonie laïque de mariage à Lyon"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/60 via-taupe/40 to-taupe/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <div className="luxury-line mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
            Créons ensemble votre cérémonie laïque
          </h2>
          <p className="text-white/50 text-lg mb-12 leading-relaxed font-light">
            Parlez-nous de votre histoire et recevez une proposition
            personnalisée pour une cérémonie laïque qui vous ressemble.
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
            <Link href="/services/mariage" className="text-gold hover:underline">
              Organisation de mariage
            </Link>
            <span className="text-white/20 hidden sm:inline">|</span>
            <Link href="/services/decoration" className="text-gold hover:underline">
              Décoration mariage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
