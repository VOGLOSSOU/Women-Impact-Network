"use client";

import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Pillars() {
  const { t } = useLang();
  const a = translations.about;

  return (
    <section id="pillars" className="py-24 bg-[#0A1F0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1B6B3A]/30 border border-[#2D9A5C]/40 text-[#7EE8A2] text-xs font-bold tracking-widest uppercase mb-4">
            {t({ fr: "Nos piliers", en: "Our pillars" })}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            {t(a.pillarsTitle)}
          </h2>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {a.pillars.map((pillar, i) => (
            <div
              key={i}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-[#1B6B3A]/20 hover:border-[#2D9A5C]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-white font-black text-lg mb-3">
                {t(pillar.title)}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {t(pillar.desc)}
              </p>
              {/* Number */}
              <div className="absolute top-4 right-4 text-[#1B6B3A]/40 font-black text-4xl">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
