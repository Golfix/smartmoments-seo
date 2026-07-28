import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import Photo from "@/components/Photo";
import { OG_DEFAULT, photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "Galerie Photos Mariage & Décoration Lyon",
  description:
    "Nos réalisations à Lyon : décoration de mariage haut de gamme, cérémonies laïques, scénographies sur mesure et photobooth miroir magique.",
  alternates: { canonical: "https://www.smartmoments.fr/galerie" },
  openGraph: {
    title: "Galerie Photos Mariage | Smart Moments",
    description:
      "Découvrez nos réalisations en images : mariages, cérémonies laïques et décoration haut de gamme à Lyon.",
    url: "https://www.smartmoments.fr/galerie",
    images: [OG_DEFAULT],
  },
};

// La galerie est pilotée par la photothèque : la taille de chaque vignette
// découle de l'orientation du fichier (portrait = haute, paysage = large),
// et les libellés viennent de la photo elle-même. Plus de tableau figé à
// maintenir en parallèle — c'était la source des légendes qui ne
// correspondaient plus aux images affichées.
function tileSpan(orientation: "landscape" | "portrait", index: number): string {
  if (orientation === "portrait") return "row-span-2";
  return index % 3 === 0 ? "col-span-2" : "";
}

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
      // Le balisage ImageObject n'est émis que lorsque la photothèque est remplie :
      // déclarer des images inexistantes serait un balisage trompeur.
      image: photos.map((p) => ({
        "@type": "ImageObject",
        contentUrl: `https://www.smartmoments.fr${p.src}`,
        description: p.alt,
        name: p.category,
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
            {photos.map((photo, i) => (
              <div
                key={photo.src}
                className={`relative overflow-hidden group ${tileSpan(photo.orientation, i)}`}
              >
                <Photo
                  photo={photo}
                  alt={photo.alt}
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-taupe/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 m-3 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-gold text-[9px] uppercase tracking-[0.3em] font-semibold">
                    {photo.category}
                  </span>
                  <p className="text-white text-sm mt-1 font-light">{photo.alt}</p>
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
