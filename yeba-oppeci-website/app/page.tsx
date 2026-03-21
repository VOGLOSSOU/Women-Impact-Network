import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pillars from "@/components/Pillars";
import Activities from "@/components/Activities";
import Impact from "@/components/Impact";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Pillars />
      <Activities />
      <Impact />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
