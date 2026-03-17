import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  getCategories,
  getArticlesByCategory,
  getCategoryNameBySlug,
} from "@/data/blog-articles";

export function generateStaticParams() {
  return getCategories().map((cat) => ({ categorie: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorie: string }>;
}): Promise<Metadata> {
  const { categorie } = await params;
  const categoryName = getCategoryNameBySlug(categorie);
  if (!categoryName) return {};

  const title = `${categoryName} - Articles & Conseils Mariage | Smart Moments Event`;
  const description = `Retrouvez tous nos articles sur le thème "${categoryName}" : conseils, guides et inspiration pour votre mariage à Lyon par nos wedding planners professionnels.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://smartmoments.fr/blog/categorie/${categorie}`,
    },
    openGraph: {
      title,
      description,
      url: `https://smartmoments.fr/blog/categorie/${categorie}`,
    },
  };
}

export default async function BlogCategoriePage({
  params,
}: {
  params: Promise<{ categorie: string }>;
}) {
  const { categorie } = await params;
  const categoryName = getCategoryNameBySlug(categorie);
  if (!categoryName) notFound();

  const articles = getArticlesByCategory(categorie);
  const allCategories = getCategories();

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${categoryName} - Blog Mariage Smart Moments Event`,
    description: `Articles sur le thème "${categoryName}" pour organiser votre mariage à Lyon.`,
    url: `https://smartmoments.fr/blog/categorie/${categorie}`,
    publisher: {
      "@type": "Organization",
      name: "Smart Moments Event",
      url: "https://smartmoments.fr",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((article, index) => ({
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
      {
        "@type": "ListItem",
        position: 3,
        name: categoryName,
        item: `https://smartmoments.fr/blog/categorie/${categorie}`,
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
              Blog &mdash; Catégorie
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            {categoryName}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            {articles.length} article{articles.length > 1 ? "s" : ""} dans cette
            catégorie
          </p>
        </div>
      </section>

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: categoryName },
        ]}
      />

      {/* Articles Grid */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
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

      {/* Other Categories */}
      <section className="py-16 md:py-20 bg-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Explorer
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe">
              Autres catégories
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {allCategories
              .filter((cat) => cat.slug !== categorie)
              .map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/blog/categorie/${cat.slug}`}
                  className="bg-white border border-gold/15 text-taupe text-[11px] uppercase tracking-[0.15em] font-semibold px-5 py-2.5 hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
                >
                  {cat.name}
                  <span className="ml-2 text-taupe-light group-hover:text-white/70">
                    ({cat.count})
                  </span>
                </Link>
              ))}
            <Link
              href="/blog"
              className="bg-taupe/5 border border-taupe/20 text-taupe text-[11px] uppercase tracking-[0.15em] font-semibold px-5 py-2.5 hover:bg-taupe hover:text-white hover:border-taupe transition-all duration-300"
            >
              Tous les articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-ivory">
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
