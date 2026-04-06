"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = translations.nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: nav.about[lang] },
    { href: "#programs", label: nav.programs[lang] },
    { href: "#impact", label: nav.impact[lang] },
    { href: "#contact", label: nav.contact[lang] },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative h-16 w-44">
              <Image
                src="/win-logo.png"
                alt="Women Impact Network"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#C41230] ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                scrolled
                  ? "border-[#8B1A6B] text-[#8B1A6B] hover:bg-[#8B1A6B] hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-[#8B1A6B]"
              }`}
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1.5">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`block h-0.5 w-6 transition-all ${
                      scrolled ? "bg-gray-700" : "bg-white"
                    }`}
                  />
                ))}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-gray-700 hover:text-[#C41230] hover:bg-gray-50 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
