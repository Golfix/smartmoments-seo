import Image from "next/image";
import { photoAt, type Photo } from "@/data/photos";

/**
 * Affiche une photo de la photothèque locale, ou — tant qu'aucune photo n'est
 * disponible — un panneau décoratif aux couleurs de la marque.
 *
 * Remplace les anciens <Image src="https://cdn0.mariages.net/..."> : ce CDN tiers
 * répond 403 et laissait une icône d'image cassée sur les 3 831 pages du site.
 *
 * Le composant occupe toujours la place prévue (parent en `position: relative`),
 * il n'y a donc jamais de décalage de mise en page (CLS).
 */
export default function Photo({
  photo: explicitPhoto,
  seed,
  offset = 0,
  alt,
  priority = false,
  sizes = "100vw",
  className = "object-cover",
  overlay,
  prefer,
}: {
  /**
   * Photo imposée. La galerie doit afficher exactement l'image dont elle
   * montre la légende : elle ne peut pas passer par la sélection par graine.
   */
  photo?: Photo;
  /** Graine déterministe (hash du slug) pour varier la photo d'une page à l'autre. */
  seed?: number;
  offset?: number;
  /** Texte alternatif — décrit la photo réelle une fois la photothèque remplie. */
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Voile posé par-dessus (dégradé de lisibilité du hero, par exemple). */
  overlay?: string;
  /**
   * Format souhaité pour l'emplacement : `landscape` pour un bandeau pleine
   * largeur, `portrait` pour une colonne haute. Sans valeur, toute la
   * photothèque est éligible.
   */
  prefer?: "landscape" | "portrait";
}) {
  const photo = explicitPhoto ?? photoAt(seed ?? 0, offset, prefer);

  if (photo) {
    return (
      <>
        <Image
          src={photo.src}
          alt={photo.alt || alt}
          fill
          className={className}
          priority={priority}
          {...(priority ? { fetchPriority: "high" as const } : {})}
          sizes={sizes}
        />
        {overlay ? <div className={`absolute inset-0 ${overlay}`} /> : null}
      </>
    );
  }

  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,#5c4634_0%,#4a3728_45%,#33251a_100%)]"
      >
        <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,rgba(201,169,110,0.06)_0_1px,transparent_1px_46px),repeating-linear-gradient(65deg,rgba(201,169,110,0.05)_0_1px,transparent_1px_62px)]" />
        <div className="absolute inset-6 border border-gold/15" />
      </div>
      {overlay ? <div className={`absolute inset-0 ${overlay}`} /> : null}
    </>
  );
}
