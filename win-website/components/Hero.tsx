"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { t } = useLang();
  const hero = translations.hero;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-women-group.jpg"
          alt="Women Impact Network"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[#0D0816]/70" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 flex flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#E91E8C]" />
            <span className="text-[#E91E8C] text-sm font-semibold tracking-[0.2em] uppercase">
              Women Impact Network
            </span>
            <div className="h-px w-12 bg-[#E91E8C]" />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 whitespace-pre-line">
            {t(hero.tagline)}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
            {t(hero.subtitle)}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#programs"
              className="px-8 py-4 bg-gradient-to-r from-[#8B1A6B] to-[#C41230] text-white font-bold rounded-full hover:shadow-2xl hover:shadow-[#C41230]/40 hover:-translate-y-1 transition-all duration-300"
            >
              {t(hero.cta_primary)}
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#8B1A6B] transition-all duration-300"
            >
              {t(hero.cta_secondary)}
            </a>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-12 mt-16 pt-8 border-t border-white/20 w-full max-w-lg">
            {[
              { value: "2000+", label: { fr: "Femmes accompagnées", en: "Women supported" } },
              { value: "20+", label: { fr: "Programmes", en: "Programs" } },
              { value: "11", label: { fr: "Villes", en: "Cities" } },
            ].map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="text-3xl font-black text-white">{stat.value}</div>
                <div className="text-sm text-white/60 mt-1">{t(stat.label)}</div>
              </div>
            ))}
          </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-white/40" />
        <div className="w-2 h-2 rounded-full bg-white/40" />
      </div>
    </section>
  );
}
