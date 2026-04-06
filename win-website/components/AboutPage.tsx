"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const galleryPhotos = [
  { src: "/women-group-3.jpg", caption: { fr: "Femmes entrepreneures unies", en: "United women entrepreneurs" } },
  { src: "/event-4.jpg", caption: { fr: "Événement WIN", en: "WIN event" } },
  { src: "/formation-1.jpg", caption: { fr: "Session de formation", en: "Training session" } },
  { src: "/impact-2.jpg", caption: { fr: "Impact terrain", en: "Field impact" } },
  { src: "/community-1.jpg", caption: { fr: "Communauté WIN", en: "WIN community" } },
  { src: "/bootcamp-3.jpg", caption: { fr: "Bootcamp", en: "Bootcamp" } },
  { src: "/bootcamp-4.jpg", caption: { fr: "Ateliers stratégie", en: "Strategy workshops" } },
  { src: "/event-5.jpg", caption: { fr: "Conférence", en: "Conference" } },
  { src: "/workshop-2.jpg", caption: { fr: "Workshop", en: "Workshop" } },
];

export default function AboutPage() {
  const { t } = useLang();
  const about = translations.about;

  return (
    <>
      {/* Hero banner */}
      <section className="bg-[#0D0816] pt-40 pb-24 text-center px-4">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-[#C41230]" />
          <span className="text-[#C41230] text-xs font-bold tracking-[0.2em] uppercase">WIN</span>
          <div className="h-px w-12 bg-[#C41230]" />
        </div>
        <h1 className="text-5xl sm:text-7xl font-black text-white leading-tight mb-6">
          {t(about.title)}
        </h1>
        <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          {t(about.subtitle)}
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              {/* Mission */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8B1A6B] to-[#C41230] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-black text-gray-900">{t(about.mission_title)}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">{t(about.mission_text)}</p>
              </div>

              {/* Vision */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8B1A6B] to-[#C41230] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-black text-gray-900">{t(about.vision_title)}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">{t(about.vision_text)}</p>
              </div>

              {/* Values */}
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-6">{t(about.values_title)}</h2>
                <div className="flex flex-wrap gap-3">
                  {(t({ fr: about.values.fr.join("|"), en: about.values.en.join("|") }))
                    .split("|")
                    .map((value) => (
                      <span
                        key={value}
                        className="px-5 py-2.5 rounded-full text-sm font-bold border-2 border-[#8B1A6B] text-[#8B1A6B] hover:bg-[#8B1A6B] hover:text-white transition-all cursor-default"
                      >
                        {value}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            {/* Right side — stacked images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-72 rounded-2xl overflow-hidden">
                <Image src="/event-2.jpg" alt="WIN" fill className="object-cover" />
              </div>
              <div className="relative h-72 rounded-2xl overflow-hidden mt-10">
                <Image src="/impact-1.jpg" alt="WIN impact" fill className="object-cover" />
              </div>
              <div className="relative h-52 rounded-2xl overflow-hidden">
                <Image src="/workshop-1.jpg" alt="WIN workshop" fill className="object-cover" />
              </div>
              <div className="relative h-52 rounded-2xl overflow-hidden mt-4">
                <Image src="/formation-2.jpg" alt="WIN formation" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fondatrice */}
      <section className="py-20 bg-[#0D0816]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image src="/impact-3.jpg" alt="Ayodélé OGNIN — Fondatrice WIN" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#C41230]" />
                <span className="text-[#C41230] text-xs font-bold tracking-[0.2em] uppercase">
                  {t({ fr: "La fondatrice", en: "The founder" })}
                </span>
              </div>
              <h2 className="text-4xl font-black text-white mb-2">Ayodélé OGNIN</h2>
              <p className="text-[#C41230] font-bold mb-6">
                {t({ fr: "Fondatrice & Directrice de WIN", en: "Founder & Director of WIN" })}
              </p>
              <p className="text-white/70 leading-relaxed mb-6">
                {t({
                  fr: "MBA en Finance (ESG Paris) et experte en genre et inclusion financière, Ayodélé OGNIN a consacré plus de 10 ans à l'autonomisation des femmes entrepreneures africaines. Son parcours dans les fonds de capital-risque et les banques d'investissement lui a donné une vision unique pour transformer l'entrepreneuriat féminin en Afrique.",
                  en: "With an MBA in Finance (ESG Paris) and expertise in gender and financial inclusion, Ayodélé OGNIN has dedicated over 10 years to empowering African women entrepreneurs. Her background in venture capital and investment banking gives her a unique vision for transforming female entrepreneurship in Africa.",
                })}
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { fr: "MBA Finance — ESG Paris", en: "MBA Finance — ESG Paris" },
                  { fr: "Experte Genre & Inclusion", en: "Gender & Inclusion Expert" },
                  { fr: "Capital-risque", en: "Venture Capital" },
                  { fr: "Économie verte", en: "Green Economy" },
                ].map((item) => (
                  <span
                    key={item.fr}
                    className="px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium"
                  >
                    {t(item)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900 mb-3">
              {t({ fr: "WIN en images", en: "WIN in pictures" })}
            </h2>
            <p className="text-gray-500">
              {t({ fr: "Des moments forts de notre engagement sur le terrain", en: "Highlights from our field engagement" })}
            </p>
          </div>
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryPhotos.map((photo, i) => (
              <div key={i} className="relative break-inside-avoid rounded-2xl overflow-hidden group">
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
