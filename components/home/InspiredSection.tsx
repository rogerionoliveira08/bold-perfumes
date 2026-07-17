import Link from "next/link";
import { FaArrowRight, FaGem, FaStar } from "react-icons/fa";
import ProductCard from "@/components/products/ProductCard";
import { produtos } from "@/data/produtos";

export default function InspiredSection() {
  const perfumesInspirados = produtos
    .filter(
      (produto) =>
        produto.inspiradoEm &&
        produto.inspiradoEm.trim().length > 0,
    )
    .slice(0, 6);

  if (perfumesInspirados.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden border-y border-zinc-900 bg-black py-12 sm:py-16">
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-yellow-400/[0.04] blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-yellow-400/[0.04] blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-yellow-400">
              <FaGem size={12} />

              <p className="text-xs font-extrabold uppercase tracking-[0.22em]">
                Referências da alta perfumaria
              </p>
            </div>

            <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
              Inspirados em grandes perfumes
            </h2>

            <p className="mt-4 text-sm leading-6 text-zinc-400 sm:text-base">
              Descubra fragrâncias marcantes que possuem inspiração em grandes
              clássicos da perfumaria mundial, com excelente presença e ótimo
              custo-benefício.
            </p>
          </div>

          <Link
            href="/produtos"
            className="hidden shrink-0 items-center gap-2 rounded-xl border border-yellow-400 px-5 py-3 text-sm font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black sm:inline-flex"
          >
            Ver catálogo
            <FaArrowRight size={11} />
          </Link>
        </div>

        <div className="mt-8 rounded-3xl border border-yellow-400/15 bg-yellow-400/[0.03] p-4 sm:mt-10 sm:p-6">
          <div className="mb-6 flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black">
              <FaStar size={15} />
            </div>

            <div>
              <p className="text-sm font-black text-white">
                Perfumes selecionados
              </p>

              <p className="mt-1 text-xs leading-5 text-zinc-500">
                Encontre opções inspiradas em Dior, Creed e Yves Saint Laurent.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
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
        </div>

        <Link
          href="/produtos"
          className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl border border-yellow-400 px-4 py-3 text-sm font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black sm:hidden"
        >
          Ver catálogo completo
          <FaArrowRight size={11} />
        </Link>
      </div>
    </section>
  );
}