"use client";

import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const colors = [
  "from-[#1B6B3A] to-[#2D9A5C]",
  "from-[#7C3AED] to-[#A855F7]",
  "from-[#D97706] to-[#F59E0B]",
  "from-[#DC2626] to-[#F87171]",
  "from-[#0369A1] to-[#38BDF8]",
  "from-[#065F46] to-[#10B981]",
  "from-[#9333EA] to-[#C084FC]",
];

export default function Partners() {
  const { t } = useLang();
  const p = translations.partners;

  return (
    <section id="partners" className="py-24 bg-[#0A1F0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1B6B3A]/30 border border-[#2D9A5C]/40 text-[#7EE8A2] text-xs font-bold tracking-widest uppercase mb-4">
            {t(p.badge)}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight whitespace-pre-line">
            {t(p.title)}
          </h2>
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {p.list.map((partner, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors[i]} flex items-center justify-center mb-4 shadow-lg`}
              >
                <span className="text-white font-black text-sm">{partner.short}</span>
              </div>
              <h3 className="text-white font-bold text-sm mb-2 leading-tight">
                {partner.name}
              </h3>
              <p className="text-white/50 text-xs">{t(partner.desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
