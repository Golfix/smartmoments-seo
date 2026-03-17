import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité de Smart Moments Event.",
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="py-32 mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-heading font-bold text-dark mb-8">
          Politique de Confidentialité
        </h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray text-sm leading-relaxed">
          <h2 className="text-xl font-heading font-bold text-dark mt-8">
            Collecte des données
          </h2>
          <p>
            Smart Moments Event collecte les données personnelles que vous nous
            transmettez volontairement via notre formulaire de contact : nom,
            prénom, email, téléphone et message.
          </p>

          <h2 className="text-xl font-heading font-bold text-dark mt-8">
            Utilisation des données
          </h2>
          <p>
            Vos données sont utilisées exclusivement pour répondre à vos
            demandes de devis et vous accompagner dans l&apos;organisation de
            votre événement. Elles ne sont jamais vendues ni transmises à des
            tiers sans votre consentement.
          </p>

          <h2 className="text-xl font-heading font-bold text-dark mt-8">
            Durée de conservation
          </h2>
          <p>
            Vos données personnelles sont conservées pendant une durée maximale
            de 3 ans à compter de votre dernière interaction avec Smart Moments
            Event.
          </p>

          <h2 className="text-xl font-heading font-bold text-dark mt-8">
            Vos droits
          </h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), vous disposez des droits suivants : accès, rectification,
            effacement, portabilité et opposition. Pour exercer ces droits,
            contactez-nous à smartmomentsevent@gmail.com.
          </p>

          <h2 className="text-xl font-heading font-bold text-dark mt-8">
            Cookies
          </h2>
          <p>
            Ce site utilise des cookies techniques nécessaires à son bon
            fonctionnement. Aucun cookie publicitaire ou de traçage n&apos;est
            utilisé.
          </p>
        </div>
      </div>
    </section>
  );
}
