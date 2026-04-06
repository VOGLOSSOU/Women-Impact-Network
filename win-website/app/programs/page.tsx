import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramsPage from "@/components/ProgramsPage";

export const metadata = {
  title: "Programmes — Women Impact Network",
  description: "Découvrez les 8 programmes de WIN pour l'entrepreneuriat féminin africain.",
};

export default function Programs() {
  return (
    <main>
      <Navbar />
      <ProgramsPage />
      <Footer />
    </main>
  );
}
