"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const nav = translations.nav;

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/",            label: t({ fr: "Accueil",    en: "Home" }) },
    { href: "/about",       label: t(nav.about) },
    { href: "/activities",  label: t(nav.activities) },
    { href: "/contact",     label: t(nav.contact) },
  ];

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent ? "bg-transparent py-4" : "bg-white/95 backdrop-blur-md shadow-md py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className={`font-black text-lg tracking-widest ${transparent ? "text-white" : "text-[#1B6B3A]"}`}>
            YEBA OPPECI
          </span>
          <span className={`text-[10px] font-medium tracking-wider ${transparent ? "text-white/70" : "text-gray-500"}`}>
            OPPORTUNITÉ ÉCONOMIQUE INCLUSIVE
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-[#1B6B3A] ${
                pathname === l.href
                  ? "text-[#1B6B3A] font-bold"
                  : transparent
                  ? "text-white/90"
                  : "text-gray-700"
              }`}
            >
              {l.label}
            </Link>
          ))}

          {/* Lang toggle */}
          <div className="flex items-center gap-1 bg-black/10 rounded-full px-1 py-1">
            {(["fr", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-xs font-bold px-3 py-1 rounded-full transition-all ${
                  lang === l
                    ? "bg-[#1B6B3A] text-white"
                    : transparent ? "text-white/70 hover:text-white" : "text-gray-600 hover:text-[#1B6B3A]"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <Link
            href="/contact"
            className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#1B6B3A] to-[#2D9A5C] text-white text-sm font-bold hover:opacity-90 transition-opacity"
          >
            {t(nav.contact)}
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {[0, 1, 2].map((i) => (
            <span key={i} className={`block h-0.5 w-6 transition-all ${transparent ? "bg-white" : "bg-gray-700"} ${
              menuOpen && i === 0 ? "rotate-45 translate-y-2" : menuOpen && i === 1 ? "opacity-0" : menuOpen && i === 2 ? "-rotate-45 -translate-y-2" : ""
            }`} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`font-medium py-1 border-b border-gray-50 ${pathname === l.href ? "text-[#1B6B3A] font-bold" : "text-gray-700"}`}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex gap-2 mt-2">
            {(["fr", "en"] as const).map((l) => (
              <button key={l} onClick={() => setLang(l)} className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${lang === l ? "bg-[#1B6B3A] text-white" : "bg-gray-100 text-gray-600"}`}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
