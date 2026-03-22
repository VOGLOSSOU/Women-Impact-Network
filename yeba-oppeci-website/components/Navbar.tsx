"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = translations.nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about",      label: t(nav.about) },
    { href: "#pillars",    label: t(nav.pillars) },
    { href: "#activities", label: t(nav.activities) },
    { href: "#impact",     label: t(nav.impact) },
    { href: "#partners",   label: t(nav.partners) },
    { href: "#contact",    label: t(nav.contact) },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-tight">
          <span
            className={`font-black text-lg tracking-widest ${
              scrolled ? "text-[#1B6B3A]" : "text-white"
            }`}
          >
            YEBA OPPECI
          </span>
          <span
            className={`text-[10px] font-medium tracking-wider ${
              scrolled ? "text-gray-500" : "text-white/70"
            }`}
          >
            OPPORTUNITÉ ÉCONOMIQUE INCLUSIVE
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-[#1B6B3A] ${
                scrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}

          {/* Lang toggle */}
          <div className="flex items-center gap-1 ml-2 bg-black/10 rounded-full px-1 py-1">
            {(["fr", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-xs font-bold px-3 py-1 rounded-full transition-all ${
                  lang === l
                    ? "bg-[#1B6B3A] text-white"
                    : scrolled
                    ? "text-gray-600 hover:text-[#1B6B3A]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#1B6B3A] to-[#2D9A5C] text-white text-sm font-bold hover:opacity-90 transition-opacity"
          >
            {t(nav.contact)}
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-0.5 w-6 transition-all ${
                scrolled ? "bg-gray-700" : "bg-white"
              } ${
                menuOpen && i === 0
                  ? "rotate-45 translate-y-2"
                  : menuOpen && i === 1
                  ? "opacity-0"
                  : menuOpen && i === 2
                  ? "-rotate-45 -translate-y-2"
                  : ""
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 font-medium py-1 border-b border-gray-50"
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-2 mt-2">
            {(["fr", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                  lang === l
                    ? "bg-[#1B6B3A] text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
