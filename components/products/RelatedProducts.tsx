import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
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
    <section>
      <div className="mb-5 flex items-end justify-between gap-4 sm:mb-6">
        <div className="min-w-0">
          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-yellow-400 sm:text-[11px]">
            Você também pode gostar
          </p>

          <h2 className="mt-1.5 text-xl font-black text-white sm:mt-2 sm:text-2xl">
            Perfumes relacionados
          </h2>

          <p className="mt-2 max-w-2xl text-xs leading-5 text-zinc-500 sm:text-sm sm:leading-6">
            Outras fragrâncias selecionadas que combinam com o seu perfil.
          </p>
        </div>

        <Link
          href="/produtos"
          className="hidden shrink-0 items-center gap-2 text-sm font-black text-yellow-400 transition hover:text-yellow-300 sm:inline-flex"
        >
          Ver todos
          <FaArrowRight size={11} />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {produtos.map((produto) => (
          <Link
            key={produto.id}
            href={`/produto/${produto.slug}`}
            aria-label={`Ver detalhes do perfume ${produto.nome}`}
            className="group min-w-0 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/80 p-2.5 transition hover:-translate-y-1 hover:border-yellow-400/50 sm:p-3"
          >
            <div className="relative aspect-square overflow-hidden rounded-xl border border-zinc-900 bg-black">
              <Image
                src={produto.imagem}
                alt={produto.nome}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-contain p-2 transition duration-300 group-hover:scale-[1.04] sm:p-3"
              />

              {produto.selo && (
                <span className="absolute left-2 top-2 max-w-[80%] truncate rounded-full bg-yellow-400 px-2 py-1 text-[7px] font-black uppercase tracking-wide text-black sm:text-[9px]">
                  {produto.selo}
                </span>
              )}
            </div>

            <p className="mt-3 truncate text-[8px] font-black uppercase tracking-[0.12em] text-zinc-500 sm:text-[10px]">
              {produto.marca}
            </p>

            <h3 className="mt-1 min-h-8 line-clamp-2 text-xs font-black leading-4 text-white transition group-hover:text-yellow-400 sm:min-h-10 sm:text-sm sm:leading-5">
              {produto.nome}
            </h3>

            <div className="mt-2 flex items-center gap-1.5 text-[9px] text-yellow-400 sm:text-[11px]">
              <FaStar size={9} />

              <span className="font-black">
                {produto.avaliacao.toLocaleString("pt-BR")}
              </span>

              <span className="text-zinc-700">•</span>

              <span className="truncate text-zinc-500">
                {produto.avaliacoes} avaliações
              </span>
            </div>

            <p className="mt-2 truncate text-sm font-black text-yellow-400 sm:text-base">
              {formatarPreco(produto.preco)}
            </p>

            <p className="mt-1 truncate text-[8px] text-zinc-500 sm:text-[10px]">
              6x de {formatarPreco(produto.preco / 6)}
            </p>

            <div className="mt-3 flex items-center justify-center gap-1.5 rounded-lg border border-zinc-800 px-2 py-2 text-[9px] font-black text-zinc-300 transition group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-black sm:text-[11px]">
              Ver produto
              <FaArrowRight size={9} />
            </div>
          </Link>
        ))}
      </div>

      <Link
        href="/produtos"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-yellow-400 px-4 py-3 text-sm font-black text-yellow-400 transition hover:bg-yellow-400 hover:text-black sm:hidden"
      >
        Ver todos os perfumes
        <FaArrowRight size={11} />
      </Link>
    </section>
  );
}