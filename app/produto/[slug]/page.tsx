import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGlobeAmericas } from "react-icons/fa";
import {
  buscarProdutoPorSlug,
  buscarProdutosRelacionados,
} from "@/data/produtos";
import ProductGallery from "@/components/products/ProductGallery";
import ProductSummary from "@/components/products/ProductSummary";
import ProductDescription from "@/components/products/ProductDescription";
import ProductNotes from "@/components/products/ProductNotes";
import ProductOccasions from "@/components/products/ProductOccasions";
import RelatedProducts from "@/components/products/RelatedProducts";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const produto = buscarProdutoPorSlug(slug);

  if (!produto) {
    notFound();
  }

  const relacionados = buscarProdutosRelacionados(produto, 4);

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <section className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 sm:py-8">
        <nav
          aria-label="Navegação estrutural"
          className="mb-5 flex flex-wrap items-center gap-2 text-xs text-zinc-500 sm:mb-7 sm:text-sm"
        >
          <Link href="/" className="transition hover:text-yellow-400">
            Início
          </Link>

          <span>/</span>

          <Link
            href="/produtos"
            className="transition hover:text-yellow-400"
          >
            Perfumes
          </Link>

          <span>/</span>

          <span className="max-w-[190px] truncate text-yellow-400 sm:max-w-none">
            {produto.nome}
          </span>
        </nav>

        <div className="grid items-start gap-8 lg:grid-cols-[430px_1fr] lg:gap-10 xl:grid-cols-[470px_1fr]">
          <ProductGallery
            nome={produto.nome}
            imagens={produto.imagens ?? [produto.imagem]}
          />

          <ProductSummary produto={produto} />
        </div>

        <ProductDescription produto={produto} />

        <ProductNotes produto={produto} />

        <ProductOccasions produto={produto} />

        <RelatedProducts produtos={relacionados} />

        <section className="mt-10 flex items-center justify-center gap-2 border-t border-zinc-900 pt-7 text-center text-xs text-zinc-500 sm:text-sm">
          <FaGlobeAmericas className="shrink-0 text-yellow-400" />
          Entregamos para todo o Brasil. O frete é calculado conforme o CEP.
        </section>
      </section>
    </main>
  );
}