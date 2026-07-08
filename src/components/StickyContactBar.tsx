import Link from "next/link";

/**
 * Barre de contact fixe en bas d'écran (mobile uniquement).
 * Devis + téléphone toujours accessibles sans scroller.
 */
export default function StickyContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex md:hidden border-t border-gold/30 bg-ivory/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <Link
        href="/contact?type=mariage"
        className="flex-1 bg-gold text-white text-center py-4 text-[11px] font-bold uppercase tracking-[0.2em]"
      >
        Devis gratuit
      </Link>
      <a
        href="tel:0756987181"
        className="flex-1 text-gold text-center py-4 text-[11px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        Appeler
      </a>
    </div>
  );
}

/**
 * Badge de réassurance : note + avis + mariages réalisés.
 * À placer dans les heros et près des CTA.
 */
export function TrustBadge({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] tracking-wider ${
        light ? "text-white/80" : "text-taupe-soft"
      }`}
    >
      <span className="flex items-center gap-1.5">
        <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <strong>4.6/5</strong> sur Mariages.net
      </span>
      <span className={light ? "text-white/30" : "text-gold/40"}>·</span>
      <span>25 avis clients</span>
      <span className={light ? "text-white/30" : "text-gold/40"}>·</span>
      <span>100+ mariages organisés</span>
    </div>
  );
}

/**
 * Rangée de CTA pour les heros : devis + téléphone + badge.
 */
export function HeroCtaRow() {
  return (
    <div className="mt-8">
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-5">
        <Link
          href="/contact?type=mariage"
          className="btn-luxury bg-gold text-white px-10 py-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gold-dark transition-colors"
        >
          Devis gratuit en 24h
        </Link>
        <a
          href="tel:0756987181"
          className="btn-luxury border border-white/40 text-white px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] hover:bg-white/10 transition-all flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          07 56 98 71 81
        </a>
      </div>
      <TrustBadge light />
    </div>
  );
}
