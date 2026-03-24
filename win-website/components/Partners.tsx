"use client";

import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const partners = [
  { name: "ENABEL DIGIBOOST", description: { fr: "Agence belge de développement", en: "Belgian development agency" } },
  { name: "ADEJ", description: { fr: "Agence pour le développement de l'emploi des jeunes", en: "Youth employment development agency" } },
  { name: "ATINGI", description: { fr: "Plateforme de formation en ligne", en: "Online learning platform" } },
];

export default function Partners() {
  const { t } = useLang();
  const p = translations.partners;

  return (
    <section id="partners" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#C41230]" />
            <span className="text-[#C41230] text-sm font-semibold tracking-[0.2em] uppercase">
              {t({ fr: "Partenaires", en: "Partners" })}
            </span>
            <div className="h-px w-12 bg-[#C41230]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            {t(p.title)}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">{t(p.subtitle)}</p>
        </div>

        {/* Partners cards */}
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group text-center p-10 rounded-3xl border-2 border-gray-100 hover:border-[#8B1A6B] hover:shadow-xl transition-all duration-300"
            >
              {/* Logo placeholder */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#8B1A6B]/10 to-[#C41230]/10 flex items-center justify-center group-hover:from-[#8B1A6B]/20 group-hover:to-[#C41230]/20 transition-all">
                <span className="text-2xl font-black text-[#8B1A6B]">
                  {partner.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-black text-gray-900 text-lg mb-2">{partner.name}</h3>
              <p className="text-sm text-gray-500">{t(partner.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
