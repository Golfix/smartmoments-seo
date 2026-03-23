import type { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { themes } from "@/data/themes";
import { blogArticles, getCategories } from "@/data/blog-articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.smartmoments.fr";

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/photobooth`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/decoration`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/mariage`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/bapteme`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/bar-mitzvah`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/anniversaire`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/seminaire-entreprise`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/ceremonie-laique`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wedding-planner`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/galerie`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/avis`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/wedding-planner/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const themePages: MetadataRoute.Sitemap = themes.map((theme) => ({
    url: `${baseUrl}/wedding-planner/style/${theme.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Top 50 villes par population × 5 thèmes = pages croisées
  const top50Cities = cities
    .slice()
    .sort(
      (a, b) =>
        parseInt(b.population.replace(/\s/g, "")) -
        parseInt(a.population.replace(/\s/g, ""))
    )
    .slice(0, 50);

  const cityThemePages: MetadataRoute.Sitemap = top50Cities.flatMap((city) =>
    themes.map((theme) => ({
      url: `${baseUrl}/wedding-planner/${city.slug}/${theme.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  const blogIndexPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.updatedDate),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogCategoryPages: MetadataRoute.Sitemap = getCategories().map((cat) => ({
    url: `${baseUrl}/blog/categorie/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...mainPages, ...blogIndexPage, ...blogPages, ...blogCategoryPages, ...themePages, ...cityPages, ...cityThemePages];
}
