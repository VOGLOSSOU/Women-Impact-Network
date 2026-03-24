"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function About() {
  const { t } = useLang();
  const about = translations.about;
  const [imgSrc, setImgSrc] = useState("/event-2.jpg");

  useEffect(() => {
    setImgSrc(`/event-2.jpg?v=${Date.now()}`);
  }, []);

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#C41230]" />
            <span className="text-[#C41230] text-sm font-semibold tracking-[0.2em] uppercase">WIN</span>
            <div className="h-px w-12 bg-[#C41230]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            {t(about.title)}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">{t(about.subtitle)}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side — utilise un tag img natif pour éviter le cache Next.js */}
          <div className="relative">
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgSrc}
                alt="Women Impact Network event"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative card */}
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-[#8B1A6B] to-[#C41230] text-white p-6 rounded-2xl shadow-2xl max-w-[200px]">
              <div className="text-4xl font-black">8</div>
              <div className="text-sm font-medium mt-1 text-white/80">
                {t({ fr: "Programmes d'impact", en: "Impact programs" })}
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="space-y-10">
            {/* Mission */}
            <div className="group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B1A6B] to-[#C41230] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{t(about.mission_title)}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{t(about.mission_text)}</p>
            </div>

            {/* Vision */}
            <div className="group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B1A6B] to-[#C41230] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{t(about.vision_title)}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{t(about.vision_text)}</p>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t(about.values_title)}</h3>
              <div className="flex flex-wrap gap-3">
                {(t({ fr: about.values.fr.join("|"), en: about.values.en.join("|") }))
                  .split("|")
                  .map((value) => (
                    <span
                      key={value}
                      className="px-4 py-2 rounded-full text-sm font-semibold border-2 border-[#8B1A6B] text-[#8B1A6B] hover:bg-[#8B1A6B] hover:text-white transition-all cursor-default"
                    >
                      {value}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
