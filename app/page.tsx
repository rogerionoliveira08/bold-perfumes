import Link from "next/link";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import BenefitsSection from "@/components/home/BenefitsSection";
import CategorySection from "@/components/home/CategorySection";
import ProductCarousel from "@/components/home/ProductCarousel";
import WeeklyOffer from "@/components/home/WeeklyOffer";
import InspiredSection from "@/components/home/InspiredSection";
import BrandsSection from "@/components/home/BrandsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import InstagramSection from "@/components/home/InstagramSection";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ProductCard from "@/components/products/ProductCard";
import { produtos } from "@/data/produtos";
import type { Product } from "@/types/product";

export default function HomePage() {
  const lancamentos = produtos
    .filter(
      (produto) =>
        produto.selo === "Novo" ||
        produto.selo === "Destaque" ||
        produto.selo === "Original" ||
        produto.selo === "Lançamento",
    )
    .slice(0, 10);

  const maisVendidos = [...produtos]
    .sort((a, b) => b.avaliacoes - a.avaliacoes)
    .slice(0, 4);

  return (
    <>
      <TopBar />
      <Navbar />

      <main className="min-h-screen overflow-x-hidden bg-white text-zinc-950">
        <Hero />

        <BenefitsSection />

        <CategorySection />

        <ProductCarousel
          eyebrow="Novidades da Bold Parfum"
          title="Lançamentos"
          description="Descubra fragrâncias modernas, sofisticadas e recém-chegadas à nossa seleção."
          produtos={lancamentos}
        />

        <WeeklyOffer />

        <ProductSection
          eyebrow="Os favoritos dos clientes"
          title="Mais vendidos"
          description="Perfumes marcantes que conquistaram espaço entre os mais procurados da loja."
          produtos={maisVendidos}
          offWhite
        />

        <InspiredSection />

        <BrandsSection />

        <WhyChooseUs />

        <Testimonials />

        <InstagramSection />

        <FAQ />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

type ProductSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  produtos: Product[];
  offWhite?: boolean;
};

function ProductSection({
  eyebrow,
  title,
  description,
  produtos,
  offWhite = false,
}: ProductSectionProps) {
  if (produtos.length === 0) {
    return null;
  }

  return (
    <section
      className={`border-b border-zinc-200 py-10 sm:py-14 ${
        offWhite ? "bg-zinc-50" : "bg-white"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-yellow-600 sm:text-xs">
              {eyebrow}
            </p>

            <h2 className="mt-2 text-2xl font-black text-zinc-950 sm:text-4xl">
              {title}
            </h2>

            <p className="mt-2 text-xs leading-5 text-zinc-600 sm:mt-3 sm:text-base sm:leading-6">
              {description}
            </p>
          </div>

          <Link
            href="/produtos"
            className="hidden shrink-0 border border-zinc-950 px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-zinc-950 hover:text-white sm:inline-flex"
          >
            Ver todos
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {produtos.map((produto) => (
            <ProductCard
              key={produto.id}
              id={produto.id}
              slug={produto.slug}
              nome={produto.nome}
              marca={produto.marca}
              preco={produto.preco}
              imagem={produto.imagem}
              categoria={produto.categoria}
              selo={produto.selo}
              avaliacao={produto.avaliacao}
              avaliacoes={produto.avaliacoes}
              inspiradoEm={produto.inspiradoEm}
            />
          ))}
        </div>

        <Link
          href="/produtos"
          className="mt-6 flex w-full items-center justify-center border border-zinc-950 px-4 py-3 text-sm font-bold text-zinc-950 transition hover:bg-zinc-950 hover:text-white sm:hidden"
        >
          Ver todos os perfumes
        </Link>
      </div>
    </section>
  );
}