import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  blogArticles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/data/blog-articles";

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `https://smartmoments.fr/blog/${article.slug}`,
    },
    openGraph: {
      title: `${article.metaTitle} | Smart Moments Event`,
      description: article.metaDescription,
      url: `https://smartmoments.fr/blog/${article.slug}`,
      type: "article",
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate,
      authors: ["Smart Moments Event"],
      tags: article.tags,
      images: [
        {
          url: article.heroImage,
          width: 960,
          height: 640,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const relatedArticles = getRelatedArticles(slug, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: article.heroImage,
    datePublished: article.publishedDate,
    dateModified: article.updatedDate,
    author: {
      "@type": "Organization",
      name: "Smart Moments Event",
      url: "https://smartmoments.fr",
    },
    publisher: {
      "@type": "Organization",
      name: "Smart Moments Event",
      url: "https://smartmoments.fr",
      logo: {
        "@type": "ImageObject",
        url: "https://smartmoments.fr/favicon.ico",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://smartmoments.fr/blog/${article.slug}`,
    },
    keywords: article.tags.join(", "),
    articleSection: article.category,
    wordCount: article.content.replace(/<[^>]*>/g, "").split(/\s+/).length,
    inLanguage: "fr-FR",
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
        name: article.title,
        item: `https://smartmoments.fr/blog/${article.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-taupe/70 via-taupe/50 to-taupe/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <span className="bg-gold/90 text-white text-[9px] uppercase tracking-[0.2em] font-semibold px-3 py-1.5">
              {article.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-[10px] text-white/60 uppercase tracking-[0.15em]">
            <time dateTime={article.publishedDate}>
              {new Date(article.publishedDate).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span className="w-1 h-1 rounded-full bg-gold/50" />
            <span>{article.readingTime} min de lecture</span>
          </div>
        </div>
      </section>

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: article.title },
        ]}
      />

      {/* Article Content */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div
              className="article-content prose-custom"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </AnimateOnScroll>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gold/10">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-champagne/50 text-taupe-soft text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 border border-gold/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="mt-16 bg-champagne border border-gold/10 p-8 md:p-12 text-center">
              <div className="luxury-line mb-6" />
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-taupe mb-4">
                Vous préparez votre mariage ?
              </h2>
              <p className="text-taupe-soft leading-relaxed mb-8 max-w-xl mx-auto">
                Nos wedding planners vous accompagnent à chaque étape.
                Première consultation gratuite et sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-luxury bg-gold text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gold-dark transition-colors duration-500"
                >
                  Demander un Devis Gratuit
                </Link>
                <Link
                  href="/services"
                  className="btn-luxury border border-taupe/30 text-taupe px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-taupe/5 transition-all duration-500"
                >
                  Nos Services
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 md:py-24 bg-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="luxury-line mb-6" />
            <p className="text-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-4">
              Pour aller plus loin
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-taupe">
              Articles similaires
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((related, idx) => (
              <AnimateOnScroll
                key={related.slug}
                animation="fade-up"
                delay={idx * 100}
              >
                <article className="group bg-white border border-gold/10 overflow-hidden hover:shadow-lg hover:shadow-gold/5 transition-all duration-500">
                  <Link href={`/blog/${related.slug}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={related.heroImage}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-taupe/0 group-hover:bg-taupe/20 transition-colors duration-500" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gold/90 text-white text-[9px] uppercase tracking-[0.2em] font-semibold px-3 py-1.5">
                          {related.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[10px] text-taupe-light uppercase tracking-[0.15em] mb-3">
                      <time dateTime={related.publishedDate}>
                        {new Date(related.publishedDate).toLocaleDateString(
                          "fr-FR",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </time>
                      <span className="w-1 h-1 rounded-full bg-gold/30" />
                      <span>{related.readingTime} min</span>
                    </div>
                    <Link href={`/blog/${related.slug}`}>
                      <h3 className="font-heading font-bold text-taupe text-base mb-3 leading-snug group-hover:text-gold transition-colors duration-300">
                        {related.title}
                      </h3>
                    </Link>
                    <p className="text-taupe-soft text-sm leading-relaxed mb-4 line-clamp-2">
                      {related.excerpt}
                    </p>
                    <Link
                      href={`/blog/${related.slug}`}
                      className="inline-flex items-center gap-2 text-gold text-[10px] uppercase tracking-[0.2em] font-semibold"
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
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 text-gold text-[11px] font-semibold uppercase tracking-[0.3em] hover:gap-5 transition-all duration-500"
            >
              Voir tous les articles
              <svg
                className="w-4 h-4"
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
        </div>
      </section>
    </>
  );
}
