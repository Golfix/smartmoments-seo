import type { NextConfig } from "next";
import { cityRedirects, cityRoutePrefixes } from "./src/data/city-redirects";
import { goneRedirects } from "./src/data/gone-redirects";

const nextConfig: NextConfig = {
  async redirects() {
    // 301 des anciens slugs de villes dédoublonnés, sur chaque famille de routes
    // qui porte un segment ville. Le motif de préfixe est contraint à la liste
    // connue pour ne pas capter /blog/<slug> ou /services/<slug>.
    const prefixes = cityRoutePrefixes.join("|");
    return [
      // Anciennes URL du site Wix, toujours indexées en position 4-5 alors
      // qu'elles renvoient 404 (36 et 35 impressions sur 12 mois).
      { source: "/about-4", destination: "/a-propos", permanent: true },
      { source: "/weddingplanner", destination: "/wedding-planner", permanent: true },
      ...cityRedirects.map(([from, to]) => ({
        source: `/:prefix(${prefixes})/${from}`,
        destination: `/:prefix/${to}`,
        permanent: true,
      })),
      // Pages retirées du site mais toujours indexées et cliquées : chacune vers
      // la page existante la plus proche, plutôt qu'un 404 sec. Sources littérales
      // et vérifiées en 404 — aucune ne peut intercepter une page valide.
      ...goneRedirects.map(([from, to]) => ({
        source: from,
        destination: to,
        permanent: true,
      })),
    ];
  },
  images: {
    // Aucun domaine distant : toutes les photos sont servies depuis public/images/.
    // Le hotlink vers cdn0.mariages.net a été coupé côté CDN (403) et avait fait
    // disparaître toutes les images du site d'un seul coup.
    remotePatterns: [],
    // `unoptimized` désactivait WebP/AVIF, le srcset responsive et le
    // dimensionnement automatique. Réactivé maintenant que les fichiers sont locaux.
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/(.*)\\.(jpg|jpeg|png|gif|ico|svg|webp)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)\\.(js|css)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
