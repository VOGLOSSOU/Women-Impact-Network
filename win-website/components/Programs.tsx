"use client";

import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import ProgramCard from "./ProgramCard";

export default function Programs() {
  const { t } = useLang();
  const programs = translations.programs;

  return (
    <section id="programs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#C41230]" />
            <span className="text-[#C41230] text-sm font-semibold tracking-[0.2em] uppercase">
              {t({ fr: "Ce que nous offrons", en: "What we offer" })}
            </span>
            <div className="h-px w-12 bg-[#C41230]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            {t(programs.title)}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t(programs.subtitle)}
          </p>
        </div>

        {/* Programs grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {programs.items.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}
