import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-ivory">
      <div className="text-center max-w-2xl mx-auto px-4">
        <p className="text-gold text-[10px] uppercase tracking-[0.5em] mb-6">
          Page introuvable
        </p>
        <h1 className="text-6xl md:text-8xl font-heading font-bold text-taupe mb-4">
          404
        </h1>
        <p className="text-taupe-soft text-lg mb-12 font-light leading-relaxed">
          Cette page n&apos;existe pas ou a été déplacée. Découvrez nos
          services de wedding planning et d&apos;organisation d&apos;événements
          à Lyon.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/"
            className="btn-luxury bg-gold text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gold-dark transition-colors"
          >
            Retour à l&apos;Accueil
          </Link>
          <Link
            href="/contact"
            className="btn-luxury border border-gold/40 text-gold px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-gold hover:text-white transition-all"
          >
            Nous Contacter
          </Link>
        </div>
        <div className="border-t border-gold/10 pt-10">
          <p className="text-taupe-light text-sm mb-6">
            Vous cherchez peut-être :
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Wedding Planner Lyon", href: "/wedding-planner" },
              { label: "Organisation de Mariage", href: "/services/mariage" },
              { label: "Nos Services", href: "/services" },
              { label: "Cérémonie Laïque", href: "/services/ceremonie-laique" },
              { label: "Blog & Conseils", href: "/blog" },
              { label: "Galerie Photos", href: "/galerie" },
              { label: "Devis Gratuit", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border border-gold/20 px-5 py-2.5 text-[11px] text-taupe-soft uppercase tracking-[0.15em] hover:border-gold hover:text-gold transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
