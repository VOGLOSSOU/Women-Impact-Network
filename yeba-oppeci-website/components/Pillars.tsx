"use client";

import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const ICONS = [
  /* Agroécologie — feuille */
  <svg key="agro" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M12 22V12" />
    <path d="M5 3a16 16 0 0 0 2.4 11.6A16 16 0 0 0 12 17a16 16 0 0 0 4.6-2.4A16 16 0 0 0 19 3" />
    <path d="M5 3H19" />
  </svg>,

  /* Créativité — pinceau */
  <svg key="creat" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M9.06 11.9l8.07-8.07a2.25 2.25 0 1 1 3.18 3.18l-8.07 8.07" />
    <path d="M7.07 14.94C5 15.5 4 17 4 19c1 0 2.5-.5 3-1.5.5 1 1.5 2 3 2 0-2.5-1.56-3.47-2.93-4.56z" />
  </svg>,

  /* Numérique — écran */
  <svg key="num" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>,

  /* Plaidoyer — mégaphone */
  <svg key="plaid" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M3 11V13a1 1 0 0 0 1 1h3l4 4V7L7 11H4a1 1 0 0 0-1 1z" />
    <path d="M19 12a7 7 0 0 0-7-7M19 12a7 7 0 0 1-7 7" />
  </svg>,

  /* Engagement — mains */
  <svg key="eng" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M16 11V7a4 4 0 0 0-8 0v4" />
    <path d="M5 9H19L18 20H6L5 9Z" />
    <path d="M9 14v1M15 14v1" />
  </svg>,
];

const COLORS = [
  { bg: "from-emerald-900/40 to-emerald-800/20", border: "border-emerald-600/30", icon: "text-emerald-400", accent: "bg-emerald-500" },
  { bg: "from-amber-900/40 to-amber-800/20",   border: "border-amber-600/30",   icon: "text-amber-400",   accent: "bg-amber-500" },
  { bg: "from-sky-900/40 to-sky-800/20",       border: "border-sky-600/30",     icon: "text-sky-400",     accent: "bg-sky-500" },
  { bg: "from-violet-900/40 to-violet-800/20", border: "border-violet-600/30",  icon: "text-violet-400",  accent: "bg-violet-500" },
  { bg: "from-rose-900/40 to-rose-800/20",     border: "border-rose-600/30",    icon: "text-rose-400",    accent: "bg-rose-500" },
];

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
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            {t(a.pillarsTitle)}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            {t({
              fr: "Cinq axes stratégiques qui structurent toutes nos interventions sur le terrain.",
              en: "Five strategic axes that structure all our field interventions.",
            })}
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {a.pillars.map((pillar, i) => {
            const c = COLORS[i];
            return (
              <div
                key={i}
                className={`group relative bg-gradient-to-br ${c.bg} border ${c.border} rounded-2xl p-7 hover:scale-[1.03] transition-all duration-300 cursor-default flex flex-col`}
              >
                {/* Number watermark */}
                <span className="absolute top-4 right-5 text-5xl font-black text-white/5 select-none">
                  0{i + 1}
                </span>

                {/* Icon container */}
                <div className={`w-14 h-14 rounded-xl bg-white/5 border ${c.border} flex items-center justify-center mb-5 ${c.icon} group-hover:bg-white/10 transition-colors`}>
                  {ICONS[i]}
                </div>

                {/* Title */}
                <h3 className="text-white font-black text-lg mb-3 leading-snug">
                  {t(pillar.title)}
                </h3>

                {/* Divider */}
                <div className={`w-8 h-0.5 ${c.accent} mb-4 rounded-full`} />

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed flex-1">
                  {t(pillar.desc)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
