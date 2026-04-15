"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { t } = useLang();
  const h = translations.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/yeba-engagement-1.jpg"
          alt="YEBA OPPECI"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0A1F0A]/90" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[#1B6B3A]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#D97706]/10 blur-3xl pointer-events-none" />

      {/* Content — fully centered */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Title */}
        <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black text-white tracking-tight leading-none mb-4">
          {t(h.title)}
        </h1>

        {/* Subtitle */}
        <p className="text-[#D97706] font-bold text-lg sm:text-2xl tracking-widest uppercase mb-8">
          {t(h.subtitle)}
        </p>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-0.5 bg-[#2D9A5C]" />
          <div className="w-2 h-2 rounded-full bg-[#D97706]" />
          <div className="w-12 h-0.5 bg-[#2D9A5C]" />
        </div>

        {/* Tagline */}
        <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed mb-12 whitespace-pre-line">
          {t(h.tagline)}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="#about"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#1B6B3A] to-[#2D9A5C] text-white font-bold text-sm tracking-wide hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-lg shadow-[#1B6B3A]/30"
          >
            {t(h.cta1)}
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border-2 border-white/40 text-white font-bold text-sm tracking-wide hover:bg-white/10 transition-all hover:-translate-y-0.5"
          >
            {t(h.cta2)}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-white/30" />
          <div className="w-4 h-4 rounded-full border-2 border-white/40" />
        </div>
      </div>
    </section>
  );
}
