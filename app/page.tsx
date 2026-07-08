import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import CategorySection from "@/components/home/CategorySection";
import ProductGrid from "@/components/products/ProductGrid";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <CategorySection />
      <ProductGrid />
      <Footer />
      <WhatsAppButton />
    </>
  );
}