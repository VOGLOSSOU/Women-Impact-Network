"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { t } = useLang();
  const footer = translations.footer;
  const nav = translations.nav;

  return (
    <footer className="bg-[#0D0816] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <div className="relative h-20 w-52">
                <Image
                  src="/win-logo.png"
                  alt="Women Impact Network"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed">{t(footer.tagline)}</p>

          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wider uppercase">
              {t({ fr: "Navigation", en: "Navigation" })}
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#about", label: nav.about[t({ fr: "fr", en: "en" }) as "fr" | "en"] },
                { href: "#programs", label: nav.programs[t({ fr: "fr", en: "en" }) as "fr" | "en"] },
                { href: "#impact", label: nav.impact[t({ fr: "fr", en: "en" }) as "fr" | "en"] },
                { href: "#partners", label: nav.partners[t({ fr: "fr", en: "en" }) as "fr" | "en"] },
                { href: "#contact", label: nav.contact[t({ fr: "fr", en: "en" }) as "fr" | "en"] },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wider uppercase">
              {t({ fr: "Programmes", en: "Programs" })}
            </h4>
            <ul className="space-y-3">
              {[
                "Bootcamp",
                "J'entreprends 2.0",
                "Coding Class 229",
                "Build to Impact",
                "FABE",
                "Masterclass",
              ].map((p) => (
                <li key={p}>
                  <a href="#programs" className="text-white/60 hover:text-white transition-colors text-sm">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Women Impact Network. {t(footer.rights)}
          </p>
          <div className="flex gap-6">
            {[
              { fr: "Politique de confidentialité", en: "Privacy Policy" },
              { fr: "Mentions légales", en: "Legal Notice" },
            ].map((item) => (
              <a key={item.fr} href="#" className="text-white/40 hover:text-white text-sm transition-colors">
                {t(item)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
