"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Activities() {
  const { t } = useLang();
  const ac = translations.activities;

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

        {/* Activities grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ac.list.map((activity, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={activity.image}
                  alt={t(activity.title)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1B6B3A] text-white text-xs font-bold">
                  {t(activity.tag)}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-black text-gray-900 text-lg mb-3 leading-tight">
                  {t(activity.title)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(activity.desc)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
