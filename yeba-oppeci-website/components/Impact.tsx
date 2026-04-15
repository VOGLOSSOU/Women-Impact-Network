"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const gallery = [
  {
    src: "/yeba-amoulhoue-2.jpg",
    title: { fr: "Marché d'Amouléhoué", en: "Amouléhoué Market" },
    desc:  { fr: "Inauguration officielle du marché communautaire — un symbole de victoire pour les femmes.", en: "Official inauguration of the community market — a symbol of victory for women." },
    span: "lg:col-span-2 lg:row-span-2",
    height: "h-80 lg:h-full",
  },
  {
    src: "/yeba-weziza-2.jpg",
    title: { fr: "Programme WézizaBoussole", en: "WézizaBoussole Program" },
    desc:  { fr: "Premiers contacts avec les jeunes filles peulh dans les établissements scolaires.", en: "First contacts with young Fulani girls in schools." },
    span: "",
    height: "h-52",
  },
  {
    src: "/yeba-masculinite.jpg",
    title: { fr: "Atelier Masculinité Positive", en: "Positive Masculinity Workshop" },
    desc:  { fr: "Atelier à Savè : les hommes s'engagent pour l'égalité et le respect.", en: "Workshop in Savè: men commit to equality and respect." },
    span: "",
    height: "h-52",
  },
  {
    src: "/yeba-djakotomey-1.jpg",
    title: { fr: "Djakotomey — 5 groupements", en: "Djakotomey — 5 groups" },
    desc:  { fr: "50+ femmes réunies pour la 4e visite intergroupement à Tokpohoué.", en: "50+ women gathered for the 4th inter-group visit in Tokpohoué." },
    span: "",
    height: "h-52",
  },
  {
    src: "/yeba-art-terre.jpg",
    title: { fr: "L'Art de la Terre", en: "The Art of Earth" },
    desc:  { fr: "Nos femmes façonnent l'avenir à Savè à travers la poterie et l'artisanat local.", en: "Our women shape the future in Savè through pottery and local crafts." },
    span: "",
    height: "h-52",
  },
  {
    src: "/yeba-heforshe.jpg",
    title: { fr: "Ambassadeurs #HeForShe", en: "#HeForShe Ambassadors" },
    desc:  { fr: "Des hommes mobilisés à Savè et dans le département des Collines pour le changement.", en: "Men mobilized in Savè and the Collines department for change." },
    span: "",
    height: "h-52",
  },
];

export default function Impact() {
  const { t } = useLang();
  const imp = translations.impact;

  return (
    <section id="impact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1B6B3A]/10 text-[#1B6B3A] text-xs font-bold tracking-widest uppercase mb-4">
            {t(imp.badge)}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight whitespace-pre-line">
            {t(imp.title)}
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {imp.stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-3xl bg-gradient-to-br from-[#0A1F0A] to-[#1B6B3A] text-white"
            >
              <div className="text-5xl font-black mb-2">{stat.value}</div>
              <div className="text-white/70 text-sm font-medium">{t(stat.label)}</div>
            </div>
          ))}
        </div>

        {/* Gallery title */}
        <h3 className="text-2xl font-black text-gray-900 mb-8 text-center">
          {t(imp.galleryTitle)}
        </h3>

        {/* Gallery — grille avec texte superposé */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {gallery.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden group cursor-default ${item.span} ${item.height}`}
            >
              <Image
                src={item.src}
                alt={t(item.title)}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />

              {/* Ombre permanente en bas */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Texte au-dessus de l'ombre */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-white font-black text-sm sm:text-base leading-snug mb-1">
                  {t(item.title)}
                </h4>
                <p className="text-white/75 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                  {t(item.desc)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
