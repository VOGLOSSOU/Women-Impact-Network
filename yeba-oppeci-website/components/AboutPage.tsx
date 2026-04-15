"use client";

import React from "react";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const pillarIcons: Record<number, React.JSX.Element> = {
  0: <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>,
  1: <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
  2: <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  3: <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>,
  4: <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
};

const galleryPhotos = [
  { src: "/yeba-engagement-1.jpg", caption: { fr: "Engagement collectif", en: "Collective engagement" } },
  { src: "/yeba-engagement-2.jpg", caption: { fr: "Femmes unies", en: "United women" } },
  { src: "/yeba-formation-1.jpg",  caption: { fr: "Formation entrepreneuriat", en: "Entrepreneurship training" } },
  { src: "/yeba-formation-3.jpg",  caption: { fr: "Session de travail", en: "Working session" } },
  { src: "/yeba-leaders-2.jpg",    caption: { fr: "Femmes leaders à Nikki", en: "Women leaders in Nikki" } },
  { src: "/yeba-marche-1.jpg",     caption: { fr: "Marché d'Amouléhoué", en: "Amouléhoué Market" } },
  { src: "/yeba-weziza-2.jpg",     caption: { fr: "WézizaBoussole", en: "WézizaBoussole" } },
  { src: "/yeba-djakotomey-1.jpg", caption: { fr: "Visite à Djakotomey", en: "Visit to Djakotomey" } },
  { src: "/yeba-heforshe.jpg",     caption: { fr: "#WINHeforShe", en: "#WINHeforShe" } },
];

export default function AboutPage() {
  const { t } = useLang();
  const a = translations.about;

  return (
    <>
      {/* Hero — fond sombre simple */}
      <section className="bg-[#0A1F0A] pt-40 pb-24 text-center px-4">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1B6B3A]/30 border border-[#2D9A5C]/40 text-[#7EE8A2] text-xs font-bold tracking-widest uppercase mb-6">
          {t(a.badge)}
        </span>
        <h1 className="text-5xl sm:text-7xl font-black text-white leading-tight mb-6 whitespace-pre-line">
          {t(a.title)}
        </h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
          {t(a.desc1)}
        </p>
      </section>

      {/* Présentation détaillée */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image src="/yeba-engagement-3.jpg" alt="YEBA OPPECI" fill className="object-cover" unoptimized />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden mt-8">
                <Image src="/yeba-marche-2.jpg" alt="Marché communautaire" fill className="object-cover" unoptimized />
              </div>
              <div className="relative h-52 rounded-2xl overflow-hidden">
                <Image src="/yeba-formation-2.jpg" alt="Formation" fill className="object-cover" unoptimized />
              </div>
              <div className="relative h-52 rounded-2xl overflow-hidden mt-4">
                <Image src="/yeba-engagement-4.jpg" alt="Engagement" fill className="object-cover" unoptimized />
              </div>
            </div>

            {/* Texte */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                {t({ fr: "Le projet en détail", en: "The project in detail" })}
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>{t(a.desc1)}</p>
                <p>{t(a.desc2)}</p>
                <p>
                  {t({
                    fr: "Le projet intervient dans 5 zones géographiques du Bénin, avec des activités ancrées dans les réalités locales : création de marchés communautaires, formations en entrepreneuriat et gestion financière, mentorat des jeunes filles, ateliers sur la masculinité positive et rencontres intergénérationnelles entre femmes leaders.",
                    en: "The project operates in 5 geographic areas of Benin, with activities rooted in local realities: creation of community markets, training in entrepreneurship and financial management, mentoring of young girls, workshops on positive masculinity, and intergenerational meetings between women leaders.",
                  })}
                </p>
              </div>

              {/* Zones */}
              <div className="flex flex-wrap gap-3 mt-8">
                {["Savè", "Nikki", "Amouléhoué", "Djakotomey", "Tokpohoué"].map((place) => (
                  <span key={place} className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1B6B3A]/10 text-[#1B6B3A] text-sm font-semibold">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                    {place}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les 5 piliers */}
      <section className="py-24 bg-[#0A1F0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1B6B3A]/30 border border-[#2D9A5C]/40 text-[#7EE8A2] text-xs font-bold tracking-widest uppercase mb-4">
              {t({ fr: "Nos piliers", en: "Our pillars" })}
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white">{t(a.pillarsTitle)}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {a.pillars.map((pillar, i) => (
              <div key={i} className="group bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-[#1B6B3A]/20 hover:border-[#2D9A5C]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1B6B3A] to-[#2D9A5C] flex items-center justify-center shrink-0">
                  {pillarIcons[i]}
                </div>
                <div>
                  <div className="text-[#7EE8A2] text-xs font-bold mb-2">0{i + 1}</div>
                  <h3 className="text-white font-black text-lg mb-2">{t(pillar.title)}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{t(pillar.desc)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie photos */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900 mb-3">
              {t({ fr: "YEBA OPPECI en images", en: "YEBA OPPECI in pictures" })}
            </h2>
            <p className="text-gray-500">
              {t({ fr: "Des moments forts de notre action sur le terrain", en: "Highlights from our field action" })}
            </p>
          </div>
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryPhotos.map((photo, i) => (
              <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden group relative">
                <img
                  src={photo.src}
                  alt={t(photo.caption)}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-bold">{t(photo.caption)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
