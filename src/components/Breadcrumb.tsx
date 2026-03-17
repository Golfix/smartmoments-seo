import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Fil d'Ariane"
      className="bg-champagne/50 border-b border-gold/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em]">
          <li>
            <Link
              href="/"
              className="text-taupe-light hover:text-gold transition-colors"
            >
              Accueil
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-gold/30">/</span>
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-taupe-light hover:text-gold transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-taupe font-semibold">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
