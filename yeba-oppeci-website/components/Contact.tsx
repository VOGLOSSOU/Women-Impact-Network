"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Contact() {
  const { t } = useLang();
  const c = translations.contact;

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — logo + info */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#1B6B3A]/10 text-[#1B6B3A] text-xs font-bold tracking-widest uppercase mb-6">
              {t(c.badge)}
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight whitespace-pre-line mb-6">
              {t(c.title)}
            </h2>
            <p className="text-gray-500 text-lg mb-10">{t(c.subtitle)}</p>

            {/* Logo */}
            <div className="relative h-28 w-56 mb-10">
              <Image
                src="/win-logo.png"
                alt="Women Impact Network"
                fill
                className="object-contain object-left"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#1B6B3A]/10 flex items-center justify-center text-xl shrink-0">
                📞
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                  {t(c.phone)}
                </p>
                <a
                  href="tel:+22901608908"
                  className="text-gray-900 font-black text-xl hover:text-[#1B6B3A] transition-colors"
                >
                  01 60 89 08 08
                </a>
              </div>
            </div>

            {/* Project image */}
            <div className="relative h-52 rounded-2xl overflow-hidden mt-8">
              <Image
                src="/yeba-action.jpg"
                alt="YEBA OPPECI en action"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F0A]/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-white font-black text-sm">YEBA OPPECI</span>
                <p className="text-white/70 text-xs">
                  {t({ fr: "Projet WIN · Bénin", en: "WIN Project · Benin" })}
                </p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-[#1B6B3A]/10 flex items-center justify-center text-3xl mb-4">
                  ✅
                </div>
                <p className="text-gray-700 font-semibold">{t(c.success)}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t(c.nameLabel)}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t(c.namePlaceholder)}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1B6B3A]/30 focus:border-[#1B6B3A] text-gray-900 text-sm transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t(c.emailLabel)}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={t(c.emailPlaceholder)}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1B6B3A]/30 focus:border-[#1B6B3A] text-gray-900 text-sm transition-all"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t(c.subjectLabel)}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t(c.subjectPlaceholder)}
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1B6B3A]/30 focus:border-[#1B6B3A] text-gray-900 text-sm transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t(c.messageLabel)}
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder={t(c.messagePlaceholder)}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1B6B3A]/30 focus:border-[#1B6B3A] text-gray-900 text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#1B6B3A] to-[#2D9A5C] text-white font-bold text-sm tracking-wide hover:opacity-90 transition-all disabled:opacity-60 mt-2"
                >
                  {status === "sending" ? t(c.sending) : t(c.send)}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
