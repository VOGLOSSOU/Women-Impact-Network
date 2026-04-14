"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const extraImages: Record<string, string> = {
  bootcamp:    "/bootcamp-2.jpg",
  féminin:     "/workshop-3.jpg",
  coding:      "/coding-rural.jpg",
  build:       "/programme-build.jpg",
  fabe:        "/programme-fabe-2.jpg",
  masterclass: "/event-6.jpg",
  adej:        "/impact-3.jpg",
  atingi:      "/women-laptop.jpg",
};

export default function ProgramsPage() {
  const { t } = useLang();
  const programs = translations.programs;

  return (
    <>
      {/* Banner */}
      <section className="bg-[#0D0816] pt-40 pb-24 text-center px-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-[#C41230]" />
          <span className="text-[#C41230] text-xs font-bold tracking-[0.2em] uppercase">WIN</span>
          <div className="h-px w-12 bg-[#C41230]" />
        </div>
        <h1 className="text-5xl sm:text-7xl font-black text-white leading-tight mb-6">
          {t(programs.title)}
        </h1>
        <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          {t(programs.subtitle)}
        </p>
      </section>

      {/* Programs list */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {programs.items.map((program, i) => (
            <div
              key={program.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Images — alternées gauche/droite */}
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image
                      src={program.image}
                      alt={t(program.title)}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden mt-8">
                    <Image
                      src={extraImages[program.id] || program.image}
                      alt={t(program.title)}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl font-black text-gray-100">{program.number}</span>
                  <div className="h-px flex-1 bg-gray-100" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-4 leading-tight">
                  {t(program.title)}
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  {t(program.description)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {program.tags[t({ fr: "fr", en: "en" }) as "fr" | "en"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-[#8B1A6B]/10 to-[#C41230]/10 text-[#8B1A6B] text-sm font-bold border border-[#8B1A6B]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA bas de page */}
      <section className="py-20 bg-gradient-to-r from-[#8B1A6B] to-[#C41230]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4">
            {t({ fr: "Prête à rejoindre WIN ?", en: "Ready to join WIN?" })}
          </h2>
          <p className="text-white/80 text-lg mb-8">
            {t({ fr: "Contactez-nous pour intégrer l'un de nos programmes.", en: "Contact us to join one of our programs." })}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#8B1A6B] font-black rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            {t({ fr: "Nous contacter", en: "Contact us" })}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
