import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPage from "@/components/AboutPage";
import Impact from "@/components/Impact";

export const metadata = {
  title: "À propos — YEBA OPPECI",
  description: "Découvrez le projet YEBA OPPECI, ses piliers et son impact sur le terrain.",
};

export default function About() {
  return (
    <main>
      <Navbar />
      <AboutPage />
      <Impact />
      <Footer />
    </main>
  );
}
