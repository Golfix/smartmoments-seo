import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/members/"],
      },
    ],
    sitemap: "https://smartmoments.fr/sitemap.xml",
  };
}
