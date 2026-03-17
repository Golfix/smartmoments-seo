import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title:
    "Contact & Devis Gratuit - Organisation Mariage Lyon",
  description:
    "Contactez Smart Moments Event pour votre projet de mariage ou d'événement à Lyon. Devis gratuit et sans engagement sous 24h. Wedding planner Lyon : 07 56 98 71 81. Lyon 7ème, Rhône-Alpes.",
  alternates: { canonical: "https://smartmoments.fr/contact" },
  openGraph: {
    title: "Contact & Devis Gratuit | Smart Moments Event Lyon",
    description:
      "Demandez un devis gratuit pour votre mariage ou événement à Lyon. Réponse sous 24h.",
    url: "https://smartmoments.fr/contact",
    images: [{ url: "https://cdn0.mariages.net/vendor/6698/3_2/960/jpeg/whatsapp-image-2023-05-29-at-18-44-42-1_3_306698-168546594928335.jpeg", width: 960, height: 640, alt: "Contactez Smart Moments Event wedding planner Lyon" }],
  },
};

export default function ContactPage() {
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
        name: "Contact",
        item: "https://smartmoments.fr/contact",
      },
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Smart Moments Event",
    telephone: "+33756987181",
    email: "smartmomentsevent@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "85 Rue André Bollier",
      addressLocality: "Lyon",
      postalCode: "69007",
      addressRegion: "Rhône-Alpes",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.764,
      longitude: 4.83566,
    },
    url: "https://smartmoments.fr",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Breadcrumb items={[{ label: "Contact & Devis" }]} />

      {/* Hero */}
      <section className="bg-champagne text-taupe py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
            <p className="text-gold text-[10px] uppercase tracking-[0.5em]">
              Parlons de votre projet
            </p>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-[0.95]">
            Contactez-<span className="text-gold-gradient italic">nous</span>
          </h1>
          <p className="text-taupe-light text-lg max-w-2xl mx-auto font-light">
            Première consultation gratuite et sans engagement. Nous vous
            répondons sous 24h.
          </p>
        </div>
      </section>

      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Formulaire */}
            <div>
              <div className="luxury-line-left mb-6" />
              <h2 className="text-2xl font-heading font-bold text-taupe mb-10">
                Demande de Devis Gratuit
              </h2>
              <ContactForm />
            </div>

            {/* Infos contact */}
            <div>
              <div className="luxury-line-left mb-6" />
              <h2 className="text-2xl font-heading font-bold text-taupe mb-10">
                Nos Coordonnées
              </h2>
              <div className="space-y-8 mb-12">
                {[
                  {
                    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                    title: "Adresse",
                    content: (
                      <>
                        85 Rue André Bollier<br />69007 Lyon<br />France
                      </>
                    ),
                  },
                  {
                    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                    title: "Téléphone",
                    content: (
                      <a href="tel:0756987181" className="text-gold font-medium hover:underline">
                        07 56 98 71 81
                      </a>
                    ),
                  },
                  {
                    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                    title: "Email",
                    content: (
                      <a href="mailto:smartmomentsevent@gmail.com" className="text-gold font-medium hover:underline">
                        smartmomentsevent@gmail.com
                      </a>
                    ),
                  },
                  {
                    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                    title: "Zone d'intervention",
                    content: (
                      <>
                        Lyon et Rhône-Alpes<br />et toute la France
                      </>
                    ),
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 border border-gold/20 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[10px] font-semibold text-taupe uppercase tracking-[0.2em] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-taupe-soft text-sm leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Instagram */}
              <div className="luxury-card border border-gold/10 bg-white p-8 mb-4">
                <h3 className="font-heading font-bold text-taupe mb-3">
                  Suivez-nous sur Instagram
                </h3>
                <p className="text-taupe-soft text-sm mb-4 leading-relaxed">
                  Découvrez nos dernières réalisations, les coulisses de nos
                  événements et nos inspirations.
                </p>
                <a
                  href="https://www.instagram.com/weddingplanner.smartmoments/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 text-gold text-[11px] font-semibold uppercase tracking-[0.2em] hover:gap-3 transition-all"
                >
                  @weddingplanner.smartmoments
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Mariages.net */}
              <div className="luxury-card border border-gold/10 bg-white p-8 mb-8">
                <h3 className="font-heading font-bold text-taupe mb-3">
                  Nos Avis Clients
                </h3>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-heading font-bold text-gold-gradient">4.6/5</span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className={`w-3.5 h-3.5 ${i <= 4 ? "text-gold" : "text-gold/25"}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-taupe-soft text-sm mb-4">
                  25 avis &middot; Recommandé par 92% des couples
                </p>
                <a
                  href="https://www.mariages.net/organisation-mariage/smart-moments--e306698"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 text-gold text-[11px] font-semibold uppercase tracking-[0.2em] hover:gap-3 transition-all"
                >
                  Voir sur Mariages.net
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Map */}
              <div className="overflow-hidden border border-gold/10">
                <iframe
                  title="Localisation Smart Moments Event Lyon 7ème"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.5!2d4.8357!3d45.7387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s85+Rue+Andr%C3%A9+Bollier+69007+Lyon!5e0!3m2!1sfr!2sfr!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
