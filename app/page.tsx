 import Link from "next/link";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import BenefitsSection from "@/components/home/BenefitsSection";
import ProductCarousel from "@/components/home/ProductCarousel";
import CategorySection from "@/components/home/CategorySection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
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
        produto.selo === "Original",
    )
    .slice(0, 10);

  const maisVendidos = [...produtos]
    .sort((a, b) => b.avaliacoes - a.avaliacoes)
    .slice(0, 4);

  const femininos = produtos
    .filter(
      (produto) =>
        produto.genero === "Feminino" ||
        produto.categoria === "Feminino",
    )
    .slice(0, 4);

  const arabes = produtos
    .filter(
      (produto) =>
        produto.origem
          .toLowerCase()
          .includes("emirados árabes unidos") ||
        produto.categoria.toLowerCase() === "árabe",
    )
    .slice(0, 4);

  return (
    <>
      <TopBar />
      <Navbar />

      <main className="min-h-screen overflow-x-hidden bg-black text-white">
        <Hero />

        <BenefitsSection />

        <ProductCarousel
          eyebrow="Novidades da Bold Parfum"
          title="Lançamentos"
          description="Descubra fragrâncias modernas, sofisticadas e recém-chegadas à nossa seleção."
          produtos={lancamentos}
        />

        <ProductSection
          eyebrow="Os favoritos dos clientes"
          title="Mais vendidos"
          description="Perfumes marcantes que conquistaram espaço entre os mais procurados da loja."
          produtos={maisVendidos}
          dark
        />

        {femininos.length > 0 && (
          <ProductSection
            eyebrow="Elegância e personalidade"
            title="Perfumes femininos"
            description="Fragrâncias envolventes para mulheres que desejam deixar uma assinatura inesquecível."
            produtos={femininos}
          />
        )}

        <ProductSection
          eyebrow="Luxo, intensidade e tradição"
          title="Perfumes árabes"
          description="Perfumes com excelente presença, ótima fixação e combinações olfativas sofisticadas."
          produtos={arabes}
          dark
        />

        <WhyChooseUs />

        <CategorySection />

        <Testimonials />

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
  dark?: boolean;
};

function ProductSection({
  eyebrow,
  title,
  description,
  produtos,
  dark = false,
}: ProductSectionProps) {
  if (produtos.length === 0) {
    return null;
  }

  return (
    <section
      className={`border-y border-zinc-900 py-12 sm:py-16 ${
        dark ? "bg-zinc-950/70" : "bg-black"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="mb-7 flex flex-col gap-5 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-yellow-400">
              {eyebrow}
            </p>

            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
              {title}
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base">
              {description}
            </p>
          </div>

          <Link
            href="/produtos"
            className="hidden shrink-0 rounded-xl border border-yellow-400 px-5 py-3 text-sm font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black sm:inline-flex"
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
          className="mt-7 flex w-full items-center justify-center rounded-xl border border-yellow-400 px-4 py-3 text-sm font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black sm:hidden"
        >
          Ver todos os perfumes
        </Link>
      </div>
    </section>
  );
}