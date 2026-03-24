"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Lang } from "@/lib/translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: { fr: string; en: string }) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "fr",
  setLang: () => {},
  t: (key) => key.fr,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  const t = (key: { fr: string; en: string }) => key[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
