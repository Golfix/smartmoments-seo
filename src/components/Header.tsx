"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/wedding-planner", label: "Wedding Planner" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/galerie", label: "Galerie" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-lg shadow-gold/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/Logo.png"
              alt="Smart Moments Planner - Wedding Planner Lyon"
              width={160}
              height={60}
              className={`h-20 w-auto transition-all duration-500 ${scrolled ? "" : "brightness-0 invert"}`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[11px] font-medium uppercase tracking-[0.25em] hover:text-gold transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${scrolled ? "text-taupe-soft" : "text-white/70"}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`btn-luxury border border-gold/60 text-gold px-7 py-2.5 text-[10px] font-semibold uppercase tracking-[0.3em] hover:bg-gold transition-all duration-500 ${scrolled ? "hover:text-white" : "hover:text-white"}`}
            >
              Devis Gratuit
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu de navigation"
            aria-expanded={isOpen}
          >
            <span
              className={`w-6 h-[1px] transition-all duration-300 ${scrolled ? "bg-taupe" : "bg-white"} ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`w-6 h-[1px] transition-all duration-300 ${scrolled ? "bg-taupe" : "bg-white"} ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-6 h-[1px] transition-all duration-300 ${scrolled ? "bg-taupe" : "bg-white"} ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[500px] pb-8" : "max-h-0"}`}
        >
          <div className="flex flex-col gap-6 pt-6 border-t border-gold/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-[11px] font-medium uppercase tracking-[0.25em] hover:text-gold transition-colors ${scrolled ? "text-taupe-soft" : "text-white/70"}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="border border-gold/60 text-gold px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-center hover:bg-gold hover:text-white transition-all"
            >
              Devis Gratuit
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
