import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OG_DEFAULT } from "@/data/photos";
import { ORG_ID, SITE_URL, organizationJsonLd } from "@/lib/schema";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

// Polices sous-ensemblées en WOFF2 (latin + latin-1 + ponctuation FR) :
// 455 Ko en TTF non sous-ensemblé → 85 Ko. `preload` est réservé aux deux graisses
// réellement présentes au-dessus de la ligne de flottaison ; les autres sont chargées
// à la demande au lieu d'occuper le chemin critique.
const nourd = localFont({
  src: [
    { path: "../../public/fonts/nourd_light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/nourd_regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/nourd_medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/nourd_semi_bold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/nourd_bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/nourd_heavy.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-nourd",
  display: "swap",
  preload: true,
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.smartmoments.fr"),
  // Le suffixe de marque est court (18 car.) : Google tronque l'affichage autour de
  // 60 caractères, et l'ancien " | Smart Moments Event Lyon" (27 car.) poussait
  // 100 % des titres du site au-delà de la limite.
  title: {
    default: "Wedding Planner & Organisation de Mariage à Lyon",
    template: "%s | Smart Moments",
  },
  description:
    "Wedding planner à Lyon : organisation de mariage clé en main, coordination jour J, décoration et photobooth. Devis gratuit sous 24 h.",
  keywords: [
    "wedding planner lyon",
    "organisateur mariage lyon",
    "organisation mariage lyon",
    "wedding planner villeurbanne",
    "coordination jour j lyon",
    "coordinatrice mariage lyon",
    "décoration mariage lyon",
    "décorateur mariage haut de gamme",
    "photobooth mariage lyon",
    "animation mariage lyon",
    "organisation événement lyon",
    "mariage clé en main lyon",
    "mariage haut de gamme lyon",
    "organisation baptême lyon",
    "bar mitzvah lyon",
    "séminaire entreprise lyon",
    "wedding planner rhône alpes",
    "wedding planner paca",
    "wedding planner paris",
    "wedding planner bourgogne",
    "organisatrice mariage lyon",
    "cérémonie laïque lyon",
    "prix wedding planner lyon",
    "combien coûte un wedding planner",
    "meilleur wedding planner lyon",
    "organisatrice de mariage lyon",
    "agence événementielle lyon",
    "mariage champêtre lyon",
    "mariage bohème lyon",
    "lieu de réception mariage lyon",
    "vidéo 360 mariage lyon",
    "miroir magique mariage lyon",
    "décoration mariage sur mesure",
    "destination wedding",
    "mariage à l'étranger",
    "wedding planner italie",
    "mariage suisse",
    "mariage bali",
    "mariage grèce",
    "mariage maroc",
    "destination wedding lyon",
  ],
  authors: [{ name: "Smart Moments Event" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.smartmoments.fr",
    siteName: "Smart Moments Event",
    title:
      "Smart Moments Event | Wedding Planner & Organisateur d'Événements à Lyon",
    description:
      "Organisation de mariage haut de gamme, coordination jour J, décoration luxe et animations sur mesure à Lyon. Noté 4.6/5, recommandé par 92% des couples.",
    // Image de partage par défaut, héritée par les ~3 830 pages qui n'en déclarent pas.
    images: [OG_DEFAULT],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Moments Event | Wedding Planner Lyon",
    description:
      "Organisation de mariage, coordination jour J et décoration haut de gamme à Lyon. Devis gratuit.",
    images: [OG_DEFAULT.url],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.smartmoments.fr",
  },
};

// Graphe d'entité du site. Le bloc Organization porte un @id stable, référencé par
// le LocalBusiness des pages internes (voir src/lib/schema.ts) : Google recoupe ainsi
// toutes les pages sur une seule et même entité.
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Smart Moments Event",
      alternateName: "Smart Moments",
      url: SITE_URL,
      description:
        "Wedding planner et organisateur d'événements haut de gamme à Lyon. Organisation de mariage, coordination jour J, décoration luxe.",
      inLanguage: "fr-FR",
      publisher: { "@id": ORG_ID },
      // Pas de potentialAction/SearchAction : le site n'a pas de moteur de recherche
      // interne, et Google a retiré la sitelinks searchbox fin 2024.
    },
    organizationJsonLd,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={nourd.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {/* Plus aucun CDN tiers : toutes les images sont servies depuis ce domaine. */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#c9a96e" />
        {GSC_VERIFICATION && (
          <meta name="google-site-verification" content={GSC_VERIFICATION} />
        )}
      </head>
      <body className="antialiased">
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:text-white focus:px-4 focus:py-2 focus:text-sm"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
