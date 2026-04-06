"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function HomeAbout() {
  const { t } = useLang();
  const about = translations.about;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image src="/event-2.jpg" alt="WIN event" fill className="object-cover" />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden mt-8">
                <Image src="/women-group-3.jpg" alt="WIN femmes" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image src="/networking.jpg" alt="WIN networking" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden mt-4">
                <Image src="/conference.jpg" alt="WIN conférence" fill className="object-cover" />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#8B1A6B] to-[#C41230] text-white px-8 py-4 rounded-2xl shadow-2xl text-center whitespace-nowrap">
              <div className="text-3xl font-black">2019</div>
              <div className="text-xs font-medium text-white/80 mt-1">
                {t({ fr: "Fondée au Bénin", en: "Founded in Benin" })}
              </div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#C41230]" />
              <span className="text-[#C41230] text-xs font-bold tracking-[0.2em] uppercase">WIN</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
              {t(about.title)}
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">{t(about.subtitle)}</p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B1A6B] to-[#C41230] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{t(about.mission_title)}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{t(about.mission_text)}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B1A6B] to-[#C41230] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{t(about.vision_title)}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{t(about.vision_text)}</p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8B1A6B] to-[#C41230] text-white font-bold rounded-full hover:shadow-xl hover:shadow-[#C41230]/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              {t({ fr: "En savoir plus", en: "Learn more" })}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
