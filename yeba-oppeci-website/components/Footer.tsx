"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { t } = useLang();
  const f = translations.footer;
  const nav = translations.nav;

  const links = [
    { href: "#about",      label: t(nav.about) },
    { href: "#pillars",    label: t(nav.pillars) },
    { href: "#activities", label: t(nav.activities) },
    { href: "#impact",     label: t(nav.impact) },
    { href: "#partners",   label: t(nav.partners) },
    { href: "#contact",    label: t(nav.contact) },
  ];

  return (
    <footer className="bg-[#060F06] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="relative h-20 w-52 mb-5">
              <Image
                src="/win-logo.png"
                alt="Women Impact Network"
                fill
                className="object-contain object-left"
                unoptimized
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-md mb-4">
              {t(f.tagline)}
            </p>
            <div className="flex items-center gap-2 mt-6">
              <span className="w-2 h-2 rounded-full bg-[#2D9A5C] animate-pulse" />
              <span className="text-[#2D9A5C] text-sm font-semibold">
                YEBA OPPECI — {t({ fr: "Opportunité Économique Inclusive", en: "Inclusive Economic Opportunity" })}
              </span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-bold text-white mb-5 text-xs tracking-widest uppercase">
              {t({ fr: "Navigation", en: "Navigation" })}
            </h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Women Impact Network — YEBA OPPECI. {t(f.rights)}
          </p>
          <a
            href="tel:+22901608908"
            className="text-[#2D9A5C] hover:text-white text-sm font-semibold transition-colors"
          >
            📞 01 60 89 08 08
          </a>
        </div>
      </div>
    </footer>
  );
}
