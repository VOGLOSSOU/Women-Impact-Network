"use client";

import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Contact() {
  const { t } = useLang();
  const c = translations.contact;

  return (
    <section id="contact" className="py-24 bg-[#0D0816]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-[#C41230]" />
          <span className="text-[#C41230] text-sm font-semibold tracking-[0.2em] uppercase">
            {t({ fr: "Parlons-nous", en: "Let's talk" })}
          </span>
          <div className="h-px w-12 bg-[#C41230]" />
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
          {t(c.title)}
        </h2>
        <p className="text-lg text-white/50 max-w-xl mx-auto mb-16">
          {t(c.subtitle)}
        </p>

        {/* Contacts */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          {/* Email */}
          <a
            href="mailto:womenimpactn@gmail.com"
            className="group flex items-center gap-5 bg-white/5 border border-white/10 hover:border-[#C41230]/50 hover:bg-white/10 transition-all duration-300 rounded-2xl px-8 py-6 w-full sm:w-auto"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8B1A6B] to-[#C41230] flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-1">Email</p>
              <p className="text-white font-black text-xl tracking-tight group-hover:text-[#E91E8C] transition-colors">
                womenimpactn@gmail.com
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+22901 60890808"
            className="group flex items-center gap-5 bg-white/5 border border-white/10 hover:border-[#C41230]/50 hover:bg-white/10 transition-all duration-300 rounded-2xl px-8 py-6 w-full sm:w-auto"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8B1A6B] to-[#C41230] flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-1">
                {t({ fr: "Téléphone", en: "Phone" })}
              </p>
              <p className="text-white font-black text-xl tracking-tight group-hover:text-[#E91E8C] transition-colors">
                +229 01 60 89 08 08
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
