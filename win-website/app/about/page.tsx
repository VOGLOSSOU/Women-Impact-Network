import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutPage from "@/components/AboutPage";
import Impact from "@/components/Impact";

export const metadata = {
  title: "À propos — Women Impact Network",
  description: "Découvrez la mission, la vision et les valeurs de Women Impact Network.",
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
