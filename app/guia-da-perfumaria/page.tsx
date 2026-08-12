import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import PerfumeGuide from "@/components/guide/PerfumeGuide";

export const metadata: Metadata = {
  title: "Guia da Perfumaria | Bold Parfum",
  description:
    "Conheça ingredientes, notas, famílias olfativas, concentrações e os principais conceitos da perfumaria.",
};

export default function GuiaDaPerfumariaPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <PerfumeGuide />

      <Footer />
      <WhatsAppButton />
    </>
  );
}