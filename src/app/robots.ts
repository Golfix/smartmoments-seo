import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/members/", "/admin/", "/api/admin/"],
      },
    ],
    sitemap: "https://www.smartmoments.fr/sitemap.xml",
  };
}
