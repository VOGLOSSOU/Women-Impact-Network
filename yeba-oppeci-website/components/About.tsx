"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function About() {
  const { t } = useLang();
  const a = translations.about;

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/yeba-engagement-3.jpg"
                alt="YEBA OPPECI — Femmes engagées"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F0A]/60 via-transparent to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 max-w-[200px]">
              <div className="text-3xl font-black text-[#1B6B3A]">50+</div>
              <div className="text-gray-500 text-sm mt-1">
                {t({ fr: "Femmes accompagnées", en: "Women supported" })}
              </div>
            </div>
            {/* Green accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-[#1B6B3A]/10 border-2 border-[#1B6B3A]/20" />
          </div>

          {/* Text */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1B6B3A]/10 text-[#1B6B3A] text-xs font-bold tracking-widest uppercase mb-6">
              {t(a.badge)}
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-6 whitespace-pre-line">
              {t(a.title)}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">{t(a.desc1)}</p>
            <p className="text-gray-600 leading-relaxed mb-10">{t(a.desc2)}</p>

            <div className="flex flex-wrap gap-3">
              {["Savè", "Nikki", "Amouléhoué", "Djakotomey"].map((place) => (
                <span
                  key={place}
                  className="px-4 py-2 rounded-full bg-[#1B6B3A]/10 text-[#1B6B3A] text-sm font-semibold"
                >
                  📍 {place}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
