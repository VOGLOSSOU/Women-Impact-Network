import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WIN — Women Impact Network",
  description:
    "Women Impact Network accompagne les femmes entrepreneures africaines vers l'excellence, l'innovation et la liberté économique.",
  keywords: ["women empowerment", "entrepreneuriat féminin", "Bénin", "Afrique", "WIN"],
  openGraph: {
    title: "WIN — Women Impact Network",
    description: "Autonomiser les femmes. Transformer l'Afrique.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
