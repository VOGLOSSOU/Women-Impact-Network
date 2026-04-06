import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import HomePrograms from "@/components/HomePrograms";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HomeAbout />
      <HomePrograms />
      <Impact />
      <Footer />
    </main>
  );
}
