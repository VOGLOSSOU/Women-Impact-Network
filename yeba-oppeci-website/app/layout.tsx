import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "YEBA OPPECI — Opportunité Économique Inclusive | Women Impact Network",
  description:
    "YEBA OPPECI est un projet inclusif de renforcement des capacités économiques des femmes à travers l'agroécologie, la créativité, le numérique, le plaidoyer et l'engagement. Porté par Women Impact Network au Bénin.",
  keywords: ["YEBA OPPECI", "Women Impact Network", "WIN", "entrepreneuriat féminin", "Bénin", "agroécologie", "autonomisation"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
