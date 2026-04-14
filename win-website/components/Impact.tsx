"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Impact() {
  const { t } = useLang();
  const impact = translations.impact;

  return (
    <section id="impact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/conference.jpg"
          alt="WIN impact"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0816]/95 via-[#4A0E35]/90 to-[#8B1A6B]/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#E91E8C]" />
            <span className="text-[#E91E8C] text-sm font-semibold tracking-[0.2em] uppercase">
              {t({ fr: "Chiffres clés", en: "Key figures" })}
            </span>
            <div className="h-px w-12 bg-[#E91E8C]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {t(impact.title)}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t(impact.subtitle)}
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impact.stats.map((stat) => (
            <div
              key={stat.value}
              className="text-center p-8 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="text-5xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-white/70 font-medium">{t(stat.label)}</div>
            </div>
          ))}
        </div>

        {/* Photo gallery strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {["/networking.jpg", "/workshop-1.jpg", "/event-3.jpg", "/coding-rural.jpg"].map(
            (src, i) => (
              <div key={i} className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src={src}
                  alt={`WIN impact ${i + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
