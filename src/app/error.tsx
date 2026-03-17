"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-ivory">
      <div className="text-center max-w-lg mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold" />
          <p className="text-gold text-[10px] uppercase tracking-[0.5em]">
            Erreur
          </p>
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold" />
        </div>

        <h1 className="text-3xl md:text-4xl font-heading font-bold text-taupe mb-6">
          Oups, quelque chose s&apos;est mal passé
        </h1>

        <p className="text-taupe-light leading-relaxed mb-10">
          Nous sommes désolés, une erreur inattendue est survenue.
          Veuillez réessayer ou revenir à la page d&apos;accueil.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="btn-luxury inline-block bg-gold text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gold-dark transition-colors cursor-pointer"
          >
            Réessayer
          </button>
          <Link
            href="/"
            className="inline-block border border-gold/30 text-taupe px-10 py-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:border-gold hover:text-gold transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
