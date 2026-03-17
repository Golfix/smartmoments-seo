import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Location Photobooth & Vidéo 360° Mariage Lyon | Smart Moments Event",
  description:
    "Location de photobooth miroir magique et vidéo 360° pour mariage à Lyon. Impressions instantanées, accessoires personnalisés, galerie en ligne. Animation originale pour mariages, baptêmes et événements. Devis gratuit.",
  keywords: [
    "photobooth mariage lyon",
    "location photobooth lyon",
    "vidéo 360 mariage lyon",
    "miroir magique mariage",
    "animation mariage lyon",
    "photobooth miroir magique lyon",
    "borne photo mariage lyon",
    "vidéo 360 événement lyon",
    "location borne photo mariage",
    "photobooth mariage rhône alpes",
  ],
  alternates: { canonical: "https://smartmoments.fr/services/photobooth" },
  openGraph: {
    title: "Location Photobooth & Vidéo 360° Mariage Lyon",
    description:
      "Photobooth miroir magique et vidéo 360° immersive pour mariage et événements à Lyon. L'animation préférée des invités !",
    url: "https://smartmoments.fr/services/photobooth",
    images: [
      {
        url: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42_3_306698-168546594931608.jpeg",
        width: 960,
        height: 640,
        alt: "Photobooth miroir magique mariage Lyon - Smart Moments Event",
      },
    ],
  },
};

export default function PhotoboothPage() {
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
        name: "Photobooth & Vidéo 360°",
        item: "https://smartmoments.fr/services/photobooth",
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Location Photobooth & Vidéo 360° Mariage",
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
    serviceType: ["Location photobooth", "Vidéo 360°", "Animation mariage"],
    areaServed: [
      { "@type": "City", name: "Lyon" },
      { "@type": "City", name: "Lyon 7ème" },
      { "@type": "AdministrativeArea", name: "Rhône-Alpes" },
    ],
    description:
      "Location de photobooth miroir magique et vidéo 360° immersive pour mariages et événements à Lyon. Impressions instantanées, accessoires et galerie en ligne inclus.",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Comment fonctionne le photobooth miroir magique ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le miroir magique est un photobooth interactif qui guide vos invités avec des animations tactiles. Ils posent devant le miroir, choisissent un cadre personnalisé, et récupèrent instantanément leurs photos imprimées en haute qualité. L'expérience est intuitive et amusante pour tous les âges.",
        },
      },
      {
        "@type": "Question",
        name: "Quelle est la différence entre le photobooth et la vidéo 360° ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le photobooth miroir magique capture des photos fixes avec impressions instantanées. La vidéo 360° place vos invités au centre d'une plateforme tournante filmée à 360 degrés, créant des vidéos dynamiques et spectaculaires avec ralentis et effets professionnels, idéales pour les réseaux sociaux.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de temps dure la location du photobooth ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nos formules de location s'adaptent à votre événement : de 3 heures pour une soirée compacte à une journée entière pour les grands mariages. L'installation et le démontage sont inclus et pris en charge par notre équipe technique.",
        },
      },
      {
        "@type": "Question",
        name: "Le photobooth peut-il être personnalisé aux couleurs du mariage ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolument ! Nous personnalisons les cadres photos, les animations tactiles et les impressions aux couleurs et au thème de votre mariage. Votre logo ou vos prénoms peuvent être intégrés sur chaque photo imprimée, créant un souvenir unique pour vos invités.",
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
          { label: "Photobooth & Vidéo 360°" },
        ]}
      />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42_3_306698-168546594931608.jpeg"
            alt="Photobooth miroir magique et vidéo 360 pour mariage à Lyon"
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
              Animation événementielle
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-[0.95]">
            Photobooth &{" "}
            <span className="text-gold-gradient italic">Vidéo 360°</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
            Des animations interactives et modernes pour créer des souvenirs
            inoubliables lors de votre mariage ou événement à Lyon.
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
                    src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42_3_306698-168546594931608.jpeg"
                    alt="Location photobooth miroir magique pour mariage Lyon"
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
                Miroir Magique
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe mb-6">
                Le Photobooth Miroir Magique
              </h2>
              <p className="text-taupe-soft leading-relaxed mb-6">
                Le photobooth miroir magique est bien plus qu&apos;une simple borne photo.
                C&apos;est une expérience interactive et élégante qui captive vos invités dès
                le premier regard. Grâce à son écran tactile intégré dans un miroir grandeur
                nature, il guide chaque invité avec des animations personnalisées, des messages
                amusants et des jeux interactifs avant la prise de photo.
              </p>
              <p className="text-taupe-soft leading-relaxed mb-8">
                Chaque photo est imprimée instantanément en haute qualité, avec un cadre
                personnalisé aux couleurs de votre mariage. Vos invités repartent avec un
                souvenir tangible et unique de votre événement. C&apos;est l&apos;animation
                préférée de 94% des invités lors des mariages que nous organisons à Lyon.
              </p>
              <ul className="space-y-3">
                {[
                  "Impressions photo instantanées illimitées",
                  "Cadres et designs personnalisés à votre thème",
                  "Animations tactiles interactives",
                  "Accessoires et props élégants fournis",
                  "Galerie en ligne partageable",
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

      {/* Vidéo 360 */}
      <section className="py-28 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
            <AnimateOnScroll animation="fade-left" className="w-full lg:w-1/2">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-43_3_306698-168546594996125.jpeg"
                    alt="Animation vidéo 360 degrés pour mariage et événement Lyon"
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
                Expérience Immersive
              </p>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe mb-6">
                La Vidéo 360° Immersive
              </h2>
              <p className="text-taupe-soft leading-relaxed mb-6">
                La vidéo 360° est l&apos;animation tendance qui fait sensation dans les mariages
                à Lyon et partout en France. Vos invités montent sur une plateforme élégante
                tandis qu&apos;une caméra tourne autour d&apos;eux à 360 degrés, capturant des
                vidéos spectaculaires avec effets de ralenti, de confettis et de lumières.
              </p>
              <p className="text-taupe-soft leading-relaxed mb-8">
                Chaque vidéo est montée professionnellement en temps réel avec de la musique
                et des effets visuels, puis envoyée directement sur le smartphone de vos
                invités. Parfaites pour être partagées sur les réseaux sociaux, ces vidéos
                créent un buzz incroyable autour de votre événement et offrent des souvenirs
                dynamiques et modernes.
              </p>
              <ul className="space-y-3">
                {[
                  "Plateforme tournante élégante et sécurisée",
                  "Montage vidéo professionnel en temps réel",
                  "Effets ralenti, confettis et lumières",
                  "Envoi instantané par QR code ou SMS",
                  "Formats optimisés réseaux sociaux (Instagram, TikTok)",
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

      {/* Avantages */}
      <section className="py-28 bg-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Pourquoi nous choisir
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
              Une prestation clé en main
            </h2>
            <p className="text-taupe-light leading-relaxed">
              De l&apos;installation au démontage, notre équipe gère tout pour que
              vous profitiez pleinement de votre événement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Installation Complète",
                description:
                  "Notre équipe technique se charge de l'installation, du réglage et du démontage. Vous n'avez rien à faire, nous gérons tout de A à Z.",
              },
              {
                title: "Personnalisation Totale",
                description:
                  "Cadres photo, animations, couleurs : tout est personnalisé selon le thème de votre mariage. Vos prénoms et votre date sur chaque impression.",
              },
              {
                title: "Qualité Professionnelle",
                description:
                  "Matériel haut de gamme, impressions photo haute résolution et vidéos 360° montées par des professionnels avec musique et effets.",
              },
              {
                title: "Partage Instantané",
                description:
                  "Galerie en ligne, envoi par QR code, impressions immédiates. Vos invités repartent avec leurs souvenirs et les partagent en temps réel.",
              },
              {
                title: "Tous Événements",
                description:
                  "Mariages, baptêmes, bar-mitzvahs, anniversaires, séminaires d'entreprise. Nos animations s'adaptent à chaque occasion et chaque lieu.",
              },
              {
                title: "Formules Flexibles",
                description:
                  "De 3 heures à la journée complète, photobooth seul ou combiné avec la vidéo 360°. Des formules adaptées à votre budget et vos besoins.",
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

      {/* FAQ */}
      <section className="py-28 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Questions fréquentes
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe">
              Tout savoir sur nos photobooths
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Comment fonctionne le photobooth miroir magique ?",
                a: "Le miroir magique est un photobooth interactif qui guide vos invités avec des animations tactiles. Ils posent devant le miroir, choisissent un cadre personnalisé, et récupèrent instantanément leurs photos imprimées en haute qualité. L'expérience est intuitive et amusante pour tous les âges.",
              },
              {
                q: "Quelle est la différence entre le photobooth et la vidéo 360° ?",
                a: "Le photobooth miroir magique capture des photos fixes avec impressions instantanées. La vidéo 360° place vos invités au centre d'une plateforme tournante filmée à 360 degrés, créant des vidéos dynamiques et spectaculaires avec ralentis et effets professionnels, idéales pour les réseaux sociaux.",
              },
              {
                q: "Combien de temps dure la location du photobooth ?",
                a: "Nos formules de location s'adaptent à votre événement : de 3 heures pour une soirée compacte à une journée entière pour les grands mariages. L'installation et le démontage sont inclus et pris en charge par notre équipe technique.",
              },
              {
                q: "Le photobooth peut-il être personnalisé aux couleurs du mariage ?",
                a: "Absolument ! Nous personnalisons les cadres photos, les animations tactiles et les impressions aux couleurs et au thème de votre mariage. Votre logo ou vos prénoms peuvent être intégrés sur chaque photo imprimée, créant un souvenir unique pour vos invités.",
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
            alt="Animation photobooth pour événement de prestige Lyon"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/60 via-taupe/40 to-taupe/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <div className="luxury-line mb-8" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
            Envie d&apos;animer votre événement ?
          </h2>
          <p className="text-white/50 text-lg mb-12 leading-relaxed font-light">
            Demandez un devis gratuit pour la location de notre photobooth
            miroir magique et/ou vidéo 360° à Lyon.
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
            <Link href="/galerie" className="text-gold hover:underline">
              Voir notre galerie
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
