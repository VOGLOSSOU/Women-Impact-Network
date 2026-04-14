"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const nav = translations.nav;

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/",          label: nav.home[lang] },
    { href: "/about",     label: nav.about[lang] },
    { href: "/programs",  label: nav.programs[lang] },
    { href: "/contact",   label: nav.contact[lang] },
  ];

  const transparent = isHome && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent ? "bg-transparent" : "bg-white/95 backdrop-blur-md shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative h-16 w-44 block">
            <Image
              src="/win-logo.png"
              alt="Women Impact Network"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#C41230] ${
                  pathname === link.href
                    ? "text-[#C41230] font-bold"
                    : transparent
                    ? "text-white"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className={`px-3 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                transparent
                  ? "border-white text-white hover:bg-white hover:text-[#8B1A6B]"
                  : "border-[#8B1A6B] text-[#8B1A6B] hover:bg-[#8B1A6B] hover:text-white"
              }`}
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>

            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1.5">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`block h-0.5 w-6 ${transparent ? "bg-white" : "bg-gray-700"}`}
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
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-3 hover:text-[#C41230] hover:bg-gray-50 font-medium ${
                pathname === link.href ? "text-[#C41230] font-bold" : "text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
