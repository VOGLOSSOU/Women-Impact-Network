"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "fr" | "en";
type BilingualText = { fr: string; en: string };

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (text: BilingualText) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "fr",
  setLang: () => {},
  t: (text) => text.fr,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  const t = (text: BilingualText) => text[lang];
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
