import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site Smart Moments Event.",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <section className="py-32 mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-heading font-bold text-dark mb-8">
          Mentions Légales
        </h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray text-sm leading-relaxed">
          <h2 className="text-xl font-heading font-bold text-dark mt-8">
            Éditeur du site
          </h2>
          <p>
            Smart Moments Event
            <br />
            5 Avenue Marcel Cerdan
            <br />
            69100 Villeurbanne, France
            <br />
            Téléphone : 07 56 98 71 81
            <br />
            Email : smartmomentsevent@gmail.com
          </p>

          <h2 className="text-xl font-heading font-bold text-dark mt-8">
            Hébergement
          </h2>
          <p>
            Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133,
            Walnut, CA 91789, États-Unis.
          </p>

          <h2 className="text-xl font-heading font-bold text-dark mt-8">
            Propriété intellectuelle
          </h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, vidéos,
            logos) est protégé par le droit d&apos;auteur. Toute reproduction,
            même partielle, est interdite sans autorisation préalable de Smart
            Moments Event.
          </p>

          <h2 className="text-xl font-heading font-bold text-dark mt-8">
            Données personnelles
          </h2>
          <p>
            Les informations recueillies via le formulaire de contact sont
            destinées uniquement à Smart Moments Event pour le traitement de
            votre demande. Conformément au RGPD, vous disposez d&apos;un droit
            d&apos;accès, de rectification et de suppression de vos données.
          </p>
        </div>
      </div>
    </section>
  );
}
