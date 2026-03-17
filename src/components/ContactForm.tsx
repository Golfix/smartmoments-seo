"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Erreur lors de l'envoi");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Une erreur est survenue");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 border border-gold/30 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-heading font-bold text-taupe mb-4">
          Demande envoyée !
        </h3>
        <p className="text-taupe-soft leading-relaxed mb-8">
          Merci pour votre demande de devis. Nous vous répondons sous 24h.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-gold text-sm hover:underline"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="prenom" className="block text-[10px] font-semibold text-taupe uppercase tracking-[0.2em] mb-3">
            Prénom *
          </label>
          <input
            type="text" id="prenom" name="prenom" required
            autoComplete="given-name"
            className="w-full px-5 py-3.5 border border-gold/20 bg-white focus:border-gold focus:outline-none transition-colors text-sm"
            placeholder="Votre prénom"
          />
        </div>
        <div>
          <label htmlFor="nom" className="block text-[10px] font-semibold text-taupe uppercase tracking-[0.2em] mb-3">
            Nom *
          </label>
          <input
            type="text" id="nom" name="nom" required
            autoComplete="family-name"
            className="w-full px-5 py-3.5 border border-gold/20 bg-white focus:border-gold focus:outline-none transition-colors text-sm"
            placeholder="Votre nom"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-[10px] font-semibold text-taupe uppercase tracking-[0.2em] mb-3">
          Email *
        </label>
        <input
          type="email" id="email" name="email" required
          autoComplete="email"
          className="w-full px-5 py-3.5 border border-gold/20 bg-white focus:border-gold focus:outline-none transition-colors text-sm"
          placeholder="votre@email.com"
        />
      </div>
      <div>
        <label htmlFor="telephone" className="block text-[10px] font-semibold text-taupe uppercase tracking-[0.2em] mb-3">
          Téléphone
        </label>
        <input
          type="tel" id="telephone" name="telephone"
          autoComplete="tel"
          className="w-full px-5 py-3.5 border border-gold/20 bg-white focus:border-gold focus:outline-none transition-colors text-sm"
          placeholder="06 XX XX XX XX"
        />
      </div>
      <div>
        <label htmlFor="evenement" className="block text-[10px] font-semibold text-taupe uppercase tracking-[0.2em] mb-3">
          Type d&apos;événement *
        </label>
        <select
          id="evenement" name="evenement" required
          className="w-full px-5 py-3.5 border border-gold/20 bg-white focus:border-gold focus:outline-none transition-colors text-sm"
        >
          <option value="">Sélectionnez un type</option>
          <option value="mariage">Mariage</option>
          <option value="bapteme">Baptême</option>
          <option value="bar-mitzvah">Bar-Mitzvah</option>
          <option value="ceremonie-laique">Cérémonie laïque</option>
          <option value="seminaire">Séminaire</option>
          <option value="fete-entreprise">Fête d&apos;entreprise</option>
          <option value="evenement-prive">Événement privé</option>
          <option value="autre">Autre</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="date" className="block text-[10px] font-semibold text-taupe uppercase tracking-[0.2em] mb-3">
            Date souhaitée
          </label>
          <input
            type="date" id="date" name="date"
            className="w-full px-5 py-3.5 border border-gold/20 bg-white focus:border-gold focus:outline-none transition-colors text-sm"
          />
        </div>
        <div>
          <label htmlFor="invites" className="block text-[10px] font-semibold text-taupe uppercase tracking-[0.2em] mb-3">
            Nombre d&apos;invités
          </label>
          <select
            id="invites" name="invites"
            className="w-full px-5 py-3.5 border border-gold/20 bg-white focus:border-gold focus:outline-none transition-colors text-sm"
          >
            <option value="">Sélectionnez</option>
            <option value="moins-50">Moins de 50</option>
            <option value="50-100">50 à 100</option>
            <option value="100-200">100 à 200</option>
            <option value="200-300">200 à 300</option>
            <option value="300-500">300 à 500</option>
            <option value="plus-500">Plus de 500</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-[10px] font-semibold text-taupe uppercase tracking-[0.2em] mb-3">
          Votre message *
        </label>
        <textarea
          id="message" name="message" rows={5} required
          className="w-full px-5 py-3.5 border border-gold/20 bg-white focus:border-gold focus:outline-none transition-colors resize-none text-sm"
          placeholder="Parlez-nous de votre projet d'événement..."
        />
      </div>

      {status === "error" && (
        <div className="border border-red-200 bg-red-50 p-4 text-sm text-red-600">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-luxury w-full bg-gold text-white py-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gold-dark transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Envoi en cours..." : "Envoyer ma Demande de Devis"}
      </button>
      <p className="text-[10px] text-taupe-light text-center tracking-wider">
        En soumettant ce formulaire, vous acceptez notre{" "}
        <Link href="/politique-confidentialite" className="text-gold hover:underline">
          politique de confidentialité
        </Link>
        .
      </p>
    </form>
  );
}
