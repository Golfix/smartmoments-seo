import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

const nourd = localFont({
  src: [
    { path: "../../public/fonts/nourd_light.ttf", weight: "300", style: "normal" },
    { path: "../../public/fonts/nourd_regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/nourd_medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/nourd_semi_bold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/nourd_bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/nourd_heavy.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-nourd",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.smartmoments.fr"),
  title: {
    default:
      "Smart Moments Event | Wedding Planner & Organisateur d'Événements de Prestige à Lyon",
    template: "%s | Smart Moments Event Lyon",
  },
  description:
    "Wedding planner et organisateur d'événements haut de gamme à Lyon. Organisation de mariage clé en main, coordination jour J, décoration luxe, photobooth. Mariages, baptêmes, bar-mitzvahs, séminaires dans toute la France. Devis gratuit.",
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
    "wedding planner pas cher lyon",
    "vidéo 360 mariage lyon",
    "miroir magique mariage lyon",
    "décoration mariage sur mesure",
    "organisation mariage rhône alpes",
    "wedding planner france",
  ],
  authors: [{ name: "Smart Moments Event" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.smartmoments.fr",
    siteName: "Smart Moments Event",
    title:
      "Smart Moments Event | Wedding Planner & Organisateur d'Événements de Prestige à Lyon",
    description:
      "Organisation de mariage haut de gamme, coordination jour J, décoration luxe et animations sur mesure à Lyon. Noté 4.6/5, recommandé par 92% des couples.",
    images: [
      {
        url: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-30-at-10-54-55-1_3_306698-168563709678965.jpeg",
        width: 960,
        height: 640,
        alt: "Smart Moments Event - Organisation de mariage haut de gamme à Lyon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Moments Event | Wedding Planner Lyon",
    description:
      "Organisation de mariage, coordination jour J et décoration haut de gamme à Lyon. Devis gratuit.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.smartmoments.fr",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Smart Moments Event",
  alternateName: "Smart Moments",
  url: "https://www.smartmoments.fr",
  description:
    "Wedding planner et organisateur d'événements haut de gamme à Lyon. Organisation de mariage, coordination jour J, décoration luxe.",
  inLanguage: "fr-FR",
  publisher: {
    "@type": "Organization",
    name: "Smart Moments Event",
    url: "https://www.smartmoments.fr",
    logo: {
      "@type": "ImageObject",
      url: "https://www.smartmoments.fr/favicon.ico",
    },
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.smartmoments.fr/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
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
        <link rel="preconnect" href="https://cdn0.mariages.net" />
        <link rel="dns-prefetch" href="https://cdn0.mariages.net" />
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
