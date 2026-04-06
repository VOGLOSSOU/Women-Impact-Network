"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function HomePrograms() {
  const { t } = useLang();
  const programs = translations.programs;
  const featured = programs.items.slice(0, 3);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#C41230]" />
              <span className="text-[#C41230] text-xs font-bold tracking-[0.2em] uppercase">
                {t({ fr: "Nos programmes", en: "Our programs" })}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
              {t({ fr: "Ce que\nnous proposons", en: "What\nwe offer" })}
            </h2>
          </div>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#8B1A6B] text-[#8B1A6B] font-bold rounded-full hover:bg-[#8B1A6B] hover:text-white transition-all duration-300 shrink-0"
          >
            {t({ fr: "Voir tous les programmes", en: "See all programs" })}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* 3 featured programs */}
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((program, i) => (
            <div
              key={program.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={program.image}
                  alt={t(program.title)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-gradient-to-br from-[#8B1A6B] to-[#C41230] flex items-center justify-center">
                  <span className="text-white text-xs font-black">{program.number}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-1">
                    {program.tags[t({ fr: "fr", en: "en" }) as "fr" | "en"].slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-black text-gray-900 text-lg mb-3 leading-tight">{t(program.title)}</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{t(program.description)}</p>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-1 mt-4 text-[#C41230] text-sm font-bold hover:gap-2 transition-all"
                >
                  {t({ fr: "En savoir plus", en: "Learn more" })}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4 text-sm">
            {t({ fr: "Et encore 5 autres programmes...", en: "And 5 more programs..." })}
          </p>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#8B1A6B] to-[#C41230] text-white font-bold rounded-full hover:shadow-xl hover:shadow-[#C41230]/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            {t({ fr: "Découvrir tous nos programmes", en: "Discover all our programs" })}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
