import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Impact from "@/components/Impact";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Impact />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
