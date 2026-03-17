import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Galerie Photos Mariage & Décoration Lyon | Smart Moments Event",
  description:
    "Portfolio et réalisations Smart Moments Event à Lyon : décoration de mariage haut de gamme, cérémonies laïques avec arches fleuries, scénographies sur mesure, photobooth miroir magique. Inspirez-vous pour votre mariage.",
  alternates: { canonical: "https://www.smartmoments.fr/galerie" },
  openGraph: {
    title: "Galerie Photos | Smart Moments Event Lyon",
    description:
      "Découvrez nos réalisations en images : mariages, cérémonies laïques et décoration haut de gamme à Lyon.",
    url: "https://www.smartmoments.fr/galerie",
    images: [{ url: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-30-at-10-54-55-1_3_306698-168563709678965.jpeg", width: 960, height: 640, alt: "Galerie photos mariages et événements Smart Moments Lyon" }],
  },
};

const images = [
  {
    src: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-30-at-10-54-55-1_3_306698-168563709678965.jpeg",
    alt: "Décoration soirée dansante mariage haut de gamme Lyon",
    category: "Décoration",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41-3_3_306698-168546594978953.jpeg",
    alt: "Cérémonie laïque décoration florale mariage Lyon",
    category: "Cérémonie",
    span: "",
  },
  {
    src: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-40-1_3_306698-168546595086946.jpeg",
    alt: "Sortie des mariés avec décoration florale",
    category: "Mariage",
    span: "",
  },
  {
    src: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41_3_306698-168546595030467.jpeg",
    alt: "Décoration salle de réception mariage élégant Lyon",
    category: "Décoration",
    span: "",
  },
  {
    src: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42-1_3_306698-168546594928335.jpeg",
    alt: "Arche fleurie cérémonie laïque mariage champêtre Lyon",
    category: "Cérémonie",
    span: "col-span-2",
  },
  {
    src: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41-1_3_306698-168546595088459.jpeg",
    alt: "Détails décoration table mariage raffiné Smart Moments",
    category: "Détails",
    span: "",
  },
  {
    src: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-43_3_306698-168546594996125.jpeg",
    alt: "Ambiance événement de prestige Smart Moments Lyon",
    category: "Ambiance",
    span: "",
  },
  {
    src: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-41-2_3_306698-168546594962541.jpeg",
    alt: "Organisation événement haut de gamme décoration Lyon",
    category: "Événement",
    span: "",
  },
  {
    src: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42_3_306698-168546594931608.jpeg",
    alt: "Animation photobooth mariage événement Lyon",
    category: "Animation",
    span: "",
  },
  {
    src: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-30-at-10-53-36_3_306698-168546595011373.jpeg",
    alt: "Coordination jour J mariage organisateur Lyon",
    category: "Coordination",
    span: "col-span-2",
  },
  {
    src: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/img-3255_3_306698-168573250631346.jpeg",
    alt: "Équipe Smart Moments Event wedding planner Lyon",
    category: "Équipe",
    span: "",
  },
];

export default function GaleriePage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Galerie Photos - Mariages & Événements Smart Moments Event",
    description:
      "Portfolio de nos réalisations : décoration de mariage haut de gamme, cérémonies laïques, arches fleuries, scénographies sur mesure à Lyon.",
    url: "https://www.smartmoments.fr/galerie",
    isPartOf: {
      "@type": "WebSite",
      name: "Smart Moments Event",
      url: "https://www.smartmoments.fr",
    },
    about: {
      "@type": "Thing",
      name: "Organisation de mariage et événements haut de gamme à Lyon",
    },
    mainEntity: {
      "@type": "ImageGallery",
      name: "Réalisations Smart Moments Event Lyon",
      image: images.map((img) => ({
        "@type": "ImageObject",
        contentUrl: img.src,
        description: img.alt,
        name: img.category,
      })),
    },
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
        name: "Galerie",
        item: "https://www.smartmoments.fr/galerie",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Breadcrumb items={[{ label: "Galerie" }]} />

      {/* Hero */}
      <section className="bg-champagne text-taupe py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
            <p className="text-gold text-[10px] uppercase tracking-[0.5em]">
              Portfolio
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-[0.95]">
            Notre <span className="text-gold-gradient italic">Galerie</span>
          </h1>
          <p className="text-taupe-light text-lg max-w-2xl mx-auto font-light">
            Chaque image raconte l&apos;histoire d&apos;un moment
            d&apos;exception. Décoration de mariage, cérémonies laïques et
            événements de prestige à Lyon.
          </p>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-[300px]">
            {images.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden group ${img.span}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-taupe/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 m-3 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-gold text-[9px] uppercase tracking-[0.3em] font-semibold">
                    {img.category}
                  </span>
                  <p className="text-white text-sm mt-1 font-light">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Texte SEO */}
      <section className="py-20 bg-champagne">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="luxury-line mb-6" />
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe mb-6">
              L&apos;art de la décoration de mariage à Lyon
            </h2>
          </div>
          <div className="prose prose-taupe max-w-none text-center">
            <p className="text-taupe-soft leading-relaxed mb-6">
              Chaque mariage que nous organisons est une oeuvre unique. En tant que{" "}
              <Link href="/wedding-planner" className="text-gold hover:underline font-semibold">
                wedding planner à Lyon
              </Link>
              , nous accordons une attention particulière à la décoration et à la
              scénographie de chaque événement. Nos{" "}
              <Link href="/services" className="text-gold hover:underline font-semibold">
                services de décoration haut de gamme
              </Link>{" "}
              comprennent la création d&apos;arches fleuries spectaculaires, de
              compositions florales sur mesure, de mises en lumière féeriques et
              de décorations de table raffinées.
            </p>
            <p className="text-taupe-soft leading-relaxed mb-6">
              De la cérémonie laïque en plein air à la réception dans un château,
              en passant par les mariages champêtres et bohèmes, notre équipe de
              wedding designers s&apos;adapte à tous les styles et tous les budgets.
              Nous intervenons à Lyon et dans toute la région
              Rhône-Alpes.
            </p>
            <p className="text-taupe-soft leading-relaxed">
              Envie de voir votre mariage dans cette galerie ?{" "}
              <Link href="/contact" className="text-gold hover:underline font-semibold">
                Contactez-nous
              </Link>{" "}
              pour une première consultation gratuite et sans engagement.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-rose text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="luxury-line mb-8" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
            Vous aimez ce que vous voyez ?
          </h2>
          <p className="text-taupe-light text-lg mb-12 font-light leading-relaxed">
            Imaginons ensemble votre prochain événement. Contactez-nous pour un
            devis gratuit et personnalisé.
          </p>
          <Link
            href="/contact"
            className="btn-luxury inline-block bg-gold text-white px-12 py-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gold-dark transition-colors"
          >
            Nous Contacter
          </Link>
        </div>
      </section>
    </>
  );
}
