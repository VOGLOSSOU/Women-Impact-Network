import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ActivitiesPage from "@/components/ActivitiesPage";

export const metadata = {
  title: "Activités — YEBA OPPECI",
  description: "Toutes les activités du projet YEBA OPPECI sur le terrain au Bénin.",
};

export default function Activities() {
  return (
    <main>
      <Navbar />
      <ActivitiesPage />
      <Footer />
    </main>
  );
}
