import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { blogArticles, getCategories } from "@/data/blog-articles";

export const metadata: Metadata = {
  title: "Blog Mariage & Événementiel - Conseils de Wedding Planner",
  description:
    "Conseils, guides et inspiration pour votre mariage à Lyon. Articles de wedding planner professionnel : organisation, budget, décoration, lieux de réception et tendances 2025.",
  alternates: {
    canonical: "https://smartmoments.fr/blog",
  },
  openGraph: {
    title: "Blog Mariage & Événementiel | Smart Moments Event Lyon",
    description:
      "Conseils, guides et inspiration pour votre mariage à Lyon par nos wedding planners professionnels.",
    url: "https://smartmoments.fr/blog",
    images: [
      {
        url: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-30-at-10-54-55-1_3_306698-168563709678965.jpeg",
        width: 960,
        height: 640,
        alt: "Blog mariage Smart Moments Event Lyon",
      },
    ],
  },
};

export default function BlogPage() {
  const categories = getCategories();
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog Mariage & Événementiel - Smart Moments Event",
    description:
      "Conseils, guides et inspiration pour votre mariage à Lyon par nos wedding planners professionnels.",
    url: "https://smartmoments.fr/blog",
    publisher: {
      "@type": "Organization",
      name: "Smart Moments Event",
      url: "https://smartmoments.fr",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogArticles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://smartmoments.fr/blog/${article.slug}`,
        name: article.title,
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
        item: "https://smartmoments.fr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://smartmoments.fr/blog",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-taupe overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-taupe/90 to-taupe/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
            <p className="text-gold text-[10px] uppercase tracking-[0.5em] font-light">
              Notre Blog
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Conseils &{" "}
            <span className="text-gold-gradient italic">Inspiration</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Guides pratiques, tendances et conseils de nos wedding planners pour
            organiser le mariage de vos rêves à Lyon.
          </p>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Blog" }]} />

      {/* Categories Navigation */}
      <section className="py-8 bg-ivory border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/categorie/${cat.slug}`}
                className="bg-white border border-gold/15 text-taupe text-[11px] uppercase tracking-[0.15em] font-semibold px-5 py-2.5 hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
              >
                {cat.name}
                <span className="ml-2 text-taupe-light">({cat.count})</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article, idx) => (
              <AnimateOnScroll
                key={article.slug}
                animation="fade-up"
                delay={idx * 100}
              >
                <article className="group bg-white border border-gold/10 overflow-hidden hover:shadow-lg hover:shadow-gold/5 transition-all duration-500">
                  <Link href={`/blog/${article.slug}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={article.heroImage}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-taupe/0 group-hover:bg-taupe/20 transition-colors duration-500" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gold/90 text-white text-[9px] uppercase tracking-[0.2em] font-semibold px-3 py-1.5">
                          {article.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[10px] text-taupe-light uppercase tracking-[0.15em] mb-3">
                      <time dateTime={article.publishedDate}>
                        {new Date(article.publishedDate).toLocaleDateString(
                          "fr-FR",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </time>
                      <span className="w-1 h-1 rounded-full bg-gold/30" />
                      <span>{article.readingTime} min de lecture</span>
                    </div>
                    <Link href={`/blog/${article.slug}`}>
                      <h2 className="font-heading font-bold text-taupe text-lg mb-3 leading-snug group-hover:text-gold transition-colors duration-300">
                        {article.title}
                      </h2>
                    </Link>
                    <p className="text-taupe-soft text-sm leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-2 text-gold text-[10px] uppercase tracking-[0.2em] font-semibold group-hover:gap-3 transition-all duration-300"
                    >
                      Lire la suite
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-champagne">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="luxury-line mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
            Vous avez un projet de mariage ?
          </h2>
          <p className="text-taupe-soft leading-relaxed mb-10">
            Nos wedding planners sont à votre écoute pour transformer vos envies
            en réalité. Première consultation gratuite et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-luxury bg-gold text-white px-12 py-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gold-dark transition-colors duration-500"
            >
              Demander un Devis Gratuit
            </Link>
            <Link
              href="/services"
              className="btn-luxury border border-taupe/30 text-taupe px-12 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-taupe/5 transition-all duration-500"
            >
              Nos Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
