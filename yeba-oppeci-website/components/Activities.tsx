"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

type Activity = (typeof translations.activities.list)[number];

function Modal({ activity, onClose }: { activity: Activity; onClose: () => void }) {
  const { t } = useLang();
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative h-72 w-full">
          <Image
            src={activity.image}
            alt={t(activity.title)}
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          {/* Tag */}
          <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-[#1B6B3A] text-white text-xs font-bold">
            {t(activity.tag)}
          </span>
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
            aria-label="Fermer"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight">
            {t(activity.title)}
          </h3>
          <div className="w-10 h-1 bg-[#1B6B3A] rounded-full mb-5" />
          <p className="text-gray-600 leading-relaxed text-base">
            {t(activity.desc)}
          </p>
          <button
            onClick={onClose}
            className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-[#1B6B3A] to-[#2D9A5C] text-white font-bold hover:opacity-90 transition-opacity"
          >
            {t({ fr: "Fermer", en: "Close" })}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Activities() {
  const { t } = useLang();
  const ac = translations.activities;
  const [selected, setSelected] = useState<Activity | null>(null);

  return (
    <section id="activities" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1B6B3A]/10 text-[#1B6B3A] text-xs font-bold tracking-widest uppercase mb-4">
            {t(ac.badge)}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight whitespace-pre-line">
            {t(ac.title)}
          </h2>
        </div>

        {/* Grid — 3 colonnes, toutes cartes de hauteur égale */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {ac.list.map((activity, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col"
            >
              {/* Image — hauteur fixe */}
              <div className="relative h-56 overflow-hidden shrink-0">
                <Image
                  src={activity.image}
                  alt={t(activity.title)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1B6B3A] text-white text-xs font-bold uppercase tracking-wide">
                  {t(activity.tag)}
                </span>
              </div>

              {/* Content — flex-1 pour égaliser les hauteurs */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-black text-gray-900 text-lg mb-2 leading-tight">
                  {t(activity.title)}
                </h3>
                <div className="w-8 h-0.5 bg-[#1B6B3A] rounded-full mb-3" />
                <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">
                  {t(activity.desc)}
                </p>
                {/* Bouton détails */}
                <button
                  onClick={() => setSelected(activity)}
                  className="mt-5 flex items-center gap-2 text-[#1B6B3A] font-bold text-sm group/btn self-start hover:gap-3 transition-all"
                >
                  {t({ fr: "Voir les détails", en: "View details" })}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && <Modal activity={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
