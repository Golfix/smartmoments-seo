import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-champagne text-taupe">
      {/* Gold separator */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/images/Logo.png"
              alt="Smart Moments Planner - Wedding Planner Lyon"
              width={180}
              height={70}
              className="h-16 w-auto mb-6"
            />
            <p className="text-taupe-light text-sm leading-relaxed">
              Organisateur d&apos;événements haut de gamme à Lyon. Wedding
              planner, décoration de mariage et animation pour des moments
              d&apos;exception.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Accueil" },
                { href: "/services", label: "Nos Services" },
                { href: "/wedding-planner", label: "Wedding Planner Lyon" },
                { href: "/a-propos", label: "À Propos" },
                { href: "/galerie", label: "Galerie" },
                { href: "/avis", label: "Avis Clients" },
                { href: "/contact", label: "Contact & Devis" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-taupe-light text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold mb-8">
              Nos Prestations
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Organisation de Mariage", href: "/services/mariage" },
                { label: "Décoration Haut de Gamme", href: "/services/decoration" },
                { label: "Photobooth & Animation", href: "/services/photobooth" },
                { label: "Cérémonie Laïque", href: "/services/ceremonie-laique" },
                { label: "Anniversaire", href: "/services/anniversaire" },
                { label: "Événements d'Entreprise", href: "/services/seminaire-entreprise" },
              ].map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-taupe-light text-sm hover:text-gold transition-colors duration-300"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold mb-8">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-taupe-light">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-gold/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>85 Rue André Bollier<br />69007 Lyon</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gold/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:0756987181" className="hover:text-gold transition-colors">
                  07 56 98 71 81
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gold/60 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:smartmomentsevent@gmail.com" className="hover:text-gold transition-colors">
                  smartmomentsevent@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-8">
              <a
                href="https://www.instagram.com/weddingplanner.smartmoments/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-10 h-10 border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 group"
                aria-label="Suivez Smart Moments sur Instagram"
              >
                <svg className="w-4 h-4 text-gold/60 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.mariages.net/organisation-mariage/smart-moments--e306698"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-10 h-10 border border-gold/30 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 group"
                aria-label="Avis Smart Moments sur Mariages.net"
              >
                <svg className="w-4 h-4 text-gold/60 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Partenaires */}
        <div className="mt-16 mb-8">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-8" />
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold/60">
              Partenaire
            </span>
            <a
              href="https://eclatsetincelants.fr"
              target="_blank"
              rel="noopener"
              className="text-taupe-light text-sm hover:text-gold transition-colors duration-300"
            >
              Eclats Etincelants &mdash; Feu d&apos;artifice
            </a>
          </div>
        </div>

        {/* SEO paragraph */}
        <div className="mb-8 max-w-4xl mx-auto text-center">
          <p className="text-taupe-light/50 text-xs leading-relaxed">
            Smart Moments Event est une agence de wedding planning et
            d&apos;organisation d&apos;événements haut de gamme basée à
            Lyon 7ème. Nous proposons l&apos;organisation de mariage
            clé en main, la coordination du jour J, la décoration de mariage sur
            mesure et la location de photobooth miroir magique et vidéo 360°.
            Nous intervenons à Lyon, Paris, Marseille, Bordeaux, Toulouse, Nice,
            Nantes, Strasbourg, Montpellier, Lille, Grenoble, Annecy et dans
            toute la France. Mariages, baptêmes, bar-mitzvahs, cérémonies
            laïques, séminaires d&apos;entreprise et événements privés.
          </p>
        </div>

        <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-taupe-light/60 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Smart Moments Event &mdash; Wedding
            Planner &amp; Organisateur de Mariage à Lyon
          </p>
          <div className="flex gap-8 text-xs text-taupe-light/60 tracking-wider">
            <Link href="/mentions-legales" className="hover:text-gold transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-gold transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
