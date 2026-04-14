"use client";

import Image from "next/image";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";

interface ProgramItem {
  id: string;
  number: string;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
  image: string;
  tags: { fr: string[]; en: string[] };
}

export default function ProgramCard({ program }: { program: ProgramItem }) {
  const { t, lang } = useLang();
  const [expanded, setExpanded] = useState(false);

  const tags = program.tags[lang];

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={program.image}
          alt={t(program.title)}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {/* Number badge */}
        <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#8B1A6B] to-[#C41230] flex items-center justify-center shadow-lg">
          <span className="text-white font-black text-sm">{program.number}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-black text-gray-900 mb-3 leading-tight">
          {t(program.title)}
        </h3>

        <p className={`text-gray-600 text-sm leading-relaxed mb-4 ${!expanded ? "line-clamp-3" : ""}`}>
          {t(program.description)}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#8B1A6B] text-sm font-semibold hover:underline mb-4 text-left"
        >
          {expanded
            ? t({ fr: "Voir moins", en: "Show less" })
            : t({ fr: "Lire plus", en: "Read more" })}
        </button>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-[#8B1A6B]/10 text-[#8B1A6B] text-xs font-semibold rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
