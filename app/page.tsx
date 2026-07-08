import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import TopBar from "../components/TopBar";

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