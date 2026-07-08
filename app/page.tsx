import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import CategorySection from "@/components/home/CategorySection";
import ProductSearch from "@/components/products/ProductSearch";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";


export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <CategorySection />
      <ProductSearch />
      <Footer />
      <WhatsAppButton />
      
    </>
  );
}