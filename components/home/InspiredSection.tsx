import Link from "next/link";
import { FaArrowRight, FaGem } from "react-icons/fa";
import ProductCard from "@/components/products/ProductCard";
import { produtos } from "@/data/produtos";

export default function InspiredSection() {
  const perfumesInspirados = produtos
    .filter(
      (produto) =>
        produto.inspiradoEm &&
        produto.inspiradoEm.trim().length > 0,
    )
    .slice(0, 4);

  if (perfumesInspirados.length === 0) {
    return null;
  }

  return (
    <section className="border-b border-zinc-200 bg-zinc-50 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-zinc-500">
              <FaGem size={12} />

              <p className="text-xs font-extrabold uppercase tracking-[0.18em]">
                Referências da perfumaria
              </p>
            </div>

            <h2 className="mt-3 text-3xl font-black leading-tight text-zinc-950 sm:text-4xl">
              Inspirados em grandes perfumes
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-base">
              Descubra perfumes árabes com perfis olfativos que remetem a
              fragrâncias conhecidas da perfumaria mundial.
            </p>
          </div>

          <Link
            href="/produtos"
            className="hidden shrink-0 items-center gap-2 border border-zinc-950 px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-zinc-950 hover:text-white sm:inline-flex"
          >
            Ver catálogo
            <FaArrowRight size={11} />
          </Link>
        </div>

        <div className="mt-6 border-l-4 border-black bg-white px-4 py-4 sm:px-5">
          <p className="text-xs leading-5 text-zinc-600 sm:text-sm">
            A referência olfativa ajuda você a entender o estilo da
            fragrância. Isso não significa que os perfumes sejam idênticos:
            cada produto possui composição, evolução e desempenho próprios.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {perfumesInspirados.map((produto) => (
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
          className="mt-7 flex w-full items-center justify-center gap-2 border border-zinc-950 px-4 py-3 text-sm font-bold text-zinc-950 transition hover:bg-zinc-950 hover:text-white sm:hidden"
        >
          Ver catálogo completo
          <FaArrowRight size={11} />
        </Link>
      </div>
    </section>
  );
}