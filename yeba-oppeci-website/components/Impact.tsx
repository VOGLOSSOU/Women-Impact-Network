"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const gallery = [
  "/yeba-amoulhoue-2.jpg",
  "/yeba-weziza-2.jpg",
  "/yeba-masculinite.jpg",
  "/yeba-djakotomey-1.jpg",
  "/yeba-art-terre.jpg",
  "/yeba-heforshe.jpg",
];

export default function Impact() {
  const { t } = useLang();
  const imp = translations.impact;

  return (
    <section id="impact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1B6B3A]/10 text-[#1B6B3A] text-xs font-bold tracking-widest uppercase mb-4">
            {t(imp.badge)}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight whitespace-pre-line">
            {t(imp.title)}
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {imp.stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-3xl bg-gradient-to-br from-[#0A1F0A] to-[#1B6B3A] text-white"
            >
              <div className="text-5xl font-black mb-2">{stat.value}</div>
              <div className="text-white/70 text-sm font-medium">{t(stat.label)}</div>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <h3 className="text-2xl font-black text-gray-900 mb-8 text-center">
          {t(imp.galleryTitle)}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {gallery.map((src, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden ${
                i === 0 ? "col-span-2 sm:col-span-1 row-span-2 h-80" : "h-36"
              }`}
            >
              <Image
                src={src}
                alt={`Impact ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
