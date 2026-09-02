import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCrown,
  FaGem,
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
    <section className="overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-950 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-8">
      <header className="flex items-end justify-between gap-4">
        <div className="flex min-w-0 items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-zinc-700 bg-white text-black sm:h-12 sm:w-12">
            <FaGem size={16} />
          </div>

          <div className="min-w-0">
            <p className="text-[9px] font-black uppercase tracking-[0.22em] text-zinc-400 sm:text-[11px]">
              Curadoria para você
            </p>

            <h2 className="mt-1.5 text-2xl font-black tracking-[-0.025em] text-white sm:text-3xl">
              Você também pode gostar
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
              Outras fragrâncias selecionadas com perfis que podem combinar
              com o seu estilo.
            </p>
          </div>
        </div>

        <Link
          href="/produtos"
          className="hidden shrink-0 items-center gap-2 rounded-full border border-zinc-600 bg-white px-4 py-2.5 text-xs font-black text-black transition hover:bg-zinc-200 sm:inline-flex"
        >
          Ver catálogo
          <FaArrowRight size={10} />
        </Link>
      </header>

      <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {produtos.map((produto) => (
          <Link
            key={produto.id}
            href={`/produto/${produto.slug}`}
            aria-label={`Ver detalhes do perfume ${produto.nome}`}
            className="group min-w-0 overflow-hidden rounded-2xl border border-zinc-800 bg-black p-2.5 transition duration-500 hover:-translate-y-1 hover:border-zinc-500 hover:shadow-[0_22px_50px_rgba(0,0,0,0.35)] sm:p-3"
          >
            <div className="relative aspect-square overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
              <Image
                src={produto.imagem}
                alt={produto.nome}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-contain p-2.5 transition duration-700 ease-out group-hover:scale-[1.055] sm:p-3.5"
              />

              {produto.selo ? (
                <span className="absolute left-2 top-2 inline-flex max-w-[82%] items-center gap-1 truncate rounded-full bg-white px-2 py-1 text-[7px] font-black uppercase tracking-[0.08em] text-black shadow sm:text-[8px]">
                  <FaCrown size={7} />
                  {produto.selo}
                </span>
              ) : null}
            </div>

            <div className="px-0.5 pb-0.5">
              <p className="mt-3 truncate text-[8px] font-black uppercase tracking-[0.14em] text-zinc-400 sm:text-[9px]">
                {produto.marca}
              </p>

              <h3 className="mt-1 min-h-8 line-clamp-2 text-xs font-black leading-4 text-white transition duration-300 group-hover:text-zinc-300 sm:min-h-10 sm:text-sm sm:leading-5">
                {produto.nome}
              </h3>

              {produto.inspiradoEm ? (
                <p className="mt-1.5 line-clamp-1 text-[8px] font-semibold text-zinc-400 sm:text-[9px]">
                  Inspirado em {produto.inspiradoEm}
                </p>
              ) : (
                <p className="mt-1.5 line-clamp-1 text-[8px] font-semibold text-zinc-400 sm:text-[9px]">
                  {produto.familiaOlfativa}
                </p>
              )}

              <div className="mt-3 border-t border-zinc-800 pt-3">
                <p className="truncate text-sm font-black tracking-tight text-white sm:text-base">
                  {formatarPreco(produto.preco)}
                </p>

                <p className="mt-1 truncate text-[8px] text-zinc-400 sm:text-[9px]">
                  10x de {formatarPreco(produto.preco / 10)} sem juros
                </p>
              </div>

              <div className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-950 px-2 py-2.5 text-[9px] font-black text-zinc-200 transition duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black sm:text-[10px]">
                Conhecer fragrância
                <FaArrowRight size={9} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Link
        href="/produtos"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-white bg-white px-4 py-3 text-sm font-black text-black transition hover:bg-zinc-200 sm:hidden"
      >
        Ver todos os perfumes
        <FaArrowRight size={11} />
      </Link>
    </section>
  );
}