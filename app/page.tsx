import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import BenefitsSection from "@/components/home/BenefitsSection";
import CategorySection from "@/components/home/CategorySection";
import ProductGrid from "@/components/products/ProductGrid";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <Hero />
        <BenefitsSection />
        <CategorySection />
        <ProductGrid />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}