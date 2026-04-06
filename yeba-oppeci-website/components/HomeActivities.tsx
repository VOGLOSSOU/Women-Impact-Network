"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function HomeActivities() {
  const { t } = useLang();
  const ac = translations.activities;
  const featured = ac.list.slice(0, 3);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1B6B3A]/10 text-[#1B6B3A] text-xs font-bold tracking-widest uppercase mb-4">
              {t(ac.badge)}
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight whitespace-pre-line">
              {t(ac.title)}
            </h2>
          </div>
          <Link
            href="/activities"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1B6B3A] text-[#1B6B3A] font-bold rounded-full hover:bg-[#1B6B3A] hover:text-white transition-all shrink-0"
          >
            {t({ fr: "Voir toutes les activités", en: "See all activities" })}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* 3 activités */}
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((activity, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col">
              <div className="relative h-56 overflow-hidden shrink-0">
                <Image
                  src={activity.image}
                  alt={t(activity.title)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1B6B3A] text-white text-xs font-black uppercase tracking-wide">
                  {t(activity.tag)}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-black text-gray-900 text-lg mb-2 leading-tight">{t(activity.title)}</h3>
                <div className="w-8 h-0.5 bg-[#1B6B3A] rounded-full mb-3" />
                <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">{t(activity.desc)}</p>
                <Link
                  href="/activities"
                  className="mt-5 flex items-center gap-2 text-sm font-black text-[#1B6B3A] hover:gap-3 transition-all self-start"
                >
                  {t({ fr: "En savoir plus", en: "Learn more" })}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bas */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm mb-4">
            {t({ fr: "Et encore 3 autres activités sur le terrain...", en: "And 3 more field activities..." })}
          </p>
          <Link
            href="/activities"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#1B6B3A] to-[#2D9A5C] text-white font-bold rounded-full hover:shadow-xl hover:shadow-[#1B6B3A]/30 hover:-translate-y-0.5 transition-all"
          >
            {t({ fr: "Découvrir toutes nos activités", en: "Discover all our activities" })}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
