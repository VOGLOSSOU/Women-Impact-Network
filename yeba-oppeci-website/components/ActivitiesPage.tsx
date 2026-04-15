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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image pleine largeur */}
        <div className="relative h-80 w-full">
          <Image src={activity.image} alt={t(activity.title)} fill className="object-cover" unoptimized />
          {/* Overlay dégradé bas */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Tag haut gauche */}
          <span className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-[#1B6B3A] text-white text-xs font-black uppercase tracking-widest shadow-lg">
            {t(activity.tag)}
          </span>

          {/* Titre sur l'image */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-black text-white leading-tight drop-shadow-lg">
              {t(activity.title)}
            </h3>
          </div>

          {/* Bouton fermer */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all hover:scale-110"
            aria-label="Fermer"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-5 h-5">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Contenu */}
        <div className="p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-1 w-10 bg-gradient-to-r from-[#1B6B3A] to-[#2D9A5C] rounded-full" />
            <span className="text-[#1B6B3A] text-xs font-bold uppercase tracking-widest">
              {t({ fr: "Détails de l'activité", en: "Activity details" })}
            </span>
          </div>
          <p className="text-gray-600 leading-relaxed text-base">
            {t(activity.desc)}
          </p>

          {/* Footer modal */}
          <div className="flex gap-3 mt-8">
            <button
              onClick={onClose}
              className="flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-[#1B6B3A] to-[#2D9A5C] text-white font-bold hover:opacity-90 transition-opacity shadow-lg shadow-[#1B6B3A]/20"
            >
              {t({ fr: "Fermer", en: "Close" })}
            </button>
            <a
              href="/contact"
              className="flex-1 py-3.5 rounded-2xl border-2 border-[#1B6B3A] text-[#1B6B3A] font-bold hover:bg-[#1B6B3A] hover:text-white transition-all text-center"
            >
              {t({ fr: "Nous rejoindre", en: "Join us" })}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ActivitiesPage() {
  const { t } = useLang();
  const ac = translations.activities;
  const [selected, setSelected] = useState<Activity | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A1F0A] pt-40 pb-24 text-center px-4">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#1B6B3A]/30 border border-[#2D9A5C]/40 text-[#7EE8A2] text-xs font-bold tracking-widest uppercase mb-6">
          {t(ac.badge)}
        </span>
        <h1 className="text-5xl sm:text-7xl font-black text-white leading-tight mb-6 whitespace-pre-line">
          {t(ac.title)}
        </h1>
        <p className="text-white/60 text-lg max-w-xl mx-auto">
          {t({ fr: "Toutes nos actions concrètes pour autonomiser les femmes du Bénin.", en: "All our concrete actions to empower women in Benin." })}
        </p>
      </section>

      {/* Grid toutes activités */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ac.list.map((activity, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden shrink-0">
                  <Image
                    src={activity.image}
                    alt={t(activity.title)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1B6B3A] text-white text-xs font-black uppercase tracking-wide">
                    {t(activity.tag)}
                  </span>
                  {/* Numéro */}
                  <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-black flex items-center justify-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Contenu */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-black text-gray-900 text-lg mb-2 leading-tight">
                    {t(activity.title)}
                  </h3>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-[#1B6B3A] to-[#2D9A5C] rounded-full mb-3" />
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">
                    {t(activity.desc)}
                  </p>
                  <button
                    onClick={() => setSelected(activity)}
                    className="mt-5 flex items-center gap-2 text-sm font-black text-[#1B6B3A] hover:gap-3 transition-all self-start group/btn"
                  >
                    {t({ fr: "Voir les détails", en: "View details" })}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && <Modal activity={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
