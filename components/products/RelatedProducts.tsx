 import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCrown,
  FaGem,
  FaStar,
} from "react-icons/fa";
import type { Product } from "@/types/product";

type Props = {
  produtos: Product[];
};

export default function RelatedProducts({ produtos }: Props) {
  if (produtos.length === 0) {
    return null;
  }

  const formatarPreco = (valor: number) =>
    valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <section className="relative overflow-hidden rounded-[28px] border border-zinc-800 bg-gradient-to-br from-zinc-950 via-black to-yellow-400/[0.035] p-5 sm:p-8">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-yellow-400/[0.05] blur-3xl" />

      <div className="relative">
        <header className="flex items-end justify-between gap-4">
          <div className="flex min-w-0 items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.08] text-yellow-400 shadow-[0_0_24px_rgba(250,204,21,0.08)] sm:h-12 sm:w-12">
              <FaGem size={16} />
            </div>

            <div className="min-w-0">
              <p className="text-[9px] font-black uppercase tracking-[0.22em] text-yellow-400 sm:text-[11px]">
                Curadoria para você
              </p>

              <h2 className="mt-1.5 text-2xl font-black tracking-[-0.025em] text-white sm:text-3xl">
                Você também pode gostar
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
                Outras fragrâncias selecionadas com perfis que podem combinar
                com o seu estilo.
              </p>
            </div>
          </div>

          <Link
            href="/produtos"
            className="hidden shrink-0 items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/[0.06] px-4 py-2.5 text-xs font-black text-yellow-400 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black sm:inline-flex"
          >
            Ver catálogo
            <FaArrowRight size={10} />
          </Link>
        </header>

        <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {produtos.map((produto) => {
            const textoAvaliacoes =
              produto.avaliacoes > 0
                ? `${produto.avaliacoes} avaliações`
                : "Novidade";

            return (
              <Link
                key={produto.id}
                href={`/produto/${produto.slug}`}
                aria-label={`Ver detalhes do perfume ${produto.nome}`}
                className="group relative min-w-0 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/85 p-2.5 transition duration-500 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-[0_22px_50px_rgba(0,0,0,0.35)] sm:p-3"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl border border-zinc-900 bg-black">
                  <Image
                    src={produto.imagem}
                    alt={produto.nome}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-contain p-2.5 transition duration-700 ease-out group-hover:scale-[1.055] sm:p-3.5"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.08),transparent_38%)]" />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/[0.02]" />

                  {produto.selo ? (
                    <span className="absolute left-2 top-2 inline-flex max-w-[82%] items-center gap-1 truncate rounded-full bg-yellow-400 px-2 py-1 text-[7px] font-black uppercase tracking-[0.08em] text-black shadow-[0_0_18px_rgba(250,204,21,0.18)] sm:text-[8px]">
                      <FaCrown size={7} />
                      {produto.selo}
                    </span>
                  ) : null}
                </div>

                <div className="px-0.5 pb-0.5">
                  <p className="mt-3 truncate text-[8px] font-black uppercase tracking-[0.14em] text-yellow-400/80 sm:text-[9px]">
                    {produto.marca}
                  </p>

                  <h3 className="mt-1 min-h-8 line-clamp-2 text-xs font-black leading-4 text-white transition duration-300 group-hover:text-yellow-400 sm:min-h-10 sm:text-sm sm:leading-5">
                    {produto.nome}
                  </h3>

                  {produto.inspiradoEm ? (
                    <p className="mt-1.5 line-clamp-1 text-[8px] font-semibold text-zinc-500 sm:text-[9px]">
                      Inspirado em {produto.inspiradoEm}
                    </p>
                  ) : (
                    <p className="mt-1.5 line-clamp-1 text-[8px] font-semibold text-zinc-500 sm:text-[9px]">
                      {produto.familiaOlfativa}
                    </p>
                  )}

                  <div className="mt-2.5 flex items-center gap-1.5 text-[9px] sm:text-[10px]">
                    <FaStar className="text-yellow-400" size={9} />

                    <span className="font-black text-yellow-400">
                      {produto.avaliacao.toLocaleString("pt-BR")}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-zinc-700" />

                    <span className="truncate text-zinc-500">
                      {textoAvaliacoes}
                    </span>
                  </div>

                  <div className="mt-3 border-t border-zinc-800 pt-3">
                    <p className="truncate text-sm font-black tracking-tight text-yellow-400 sm:text-base">
                      {formatarPreco(produto.preco)}
                    </p>

                    <p className="mt-1 truncate text-[8px] text-zinc-500 sm:text-[9px]">
                      6x de {formatarPreco(produto.preco / 6)} sem juros
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-black/35 px-2 py-2.5 text-[9px] font-black text-zinc-300 transition duration-300 group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-black sm:text-[10px]">
                    Conhecer fragrância
                    <FaArrowRight size={9} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <Link
          href="/produtos"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-yellow-400 px-4 py-3 text-sm font-black text-yellow-400 transition hover:bg-yellow-400 hover:text-black sm:hidden"
        >
          Ver todos os perfumes
          <FaArrowRight size={11} />
        </Link>
      </div>
    </section>
  );
}