import Navbar from "@/components/Navbar";
import TestimonialsPage from "@/components/TestimonialsPage";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Témoignages | YEBA OPPECI",
  description: "Des femmes du Bénin partagent leur expérience avec le projet YEBA OPPECI.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <TestimonialsPage />
      </main>
      <Footer />
    </>
  );
}
