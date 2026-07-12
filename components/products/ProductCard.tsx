"use client";

import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

type ProductCardProps = {
  id: number;
  slug: string;
  nome: string;
  marca: string;
  preco: number;
  imagem: string;
  categoria: string;
  selo?: string;
  avaliacao: number;
  avaliacoes: number;
  inspiradoEm?: string;
};

export default function ProductCard({
  id,
  slug,
  nome,
  marca,
  preco,
  imagem,
  categoria,
  selo,
  avaliacao,
  avaliacoes,
  inspiradoEm,
}: ProductCardProps) {
  const { adicionarAoCarrinho } = useCart();

  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const parcelaFormatada = (preco / 6).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function adicionarProduto() {
    adicionarAoCarrinho({
      id,
      slug,
      nome,
      marca,
      preco,
      imagem,
      categoria,
      selo,
      avaliacao,
      avaliacoes,
    });
  }

  return (
    <article className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/70 hover:shadow-xl hover:shadow-yellow-500/10 sm:rounded-3xl">
      <div className="relative">
        {selo && (
          <span className="absolute left-2 top-2 z-10 max-w-[75%] truncate rounded-full bg-yellow-400 px-2 py-1 text-[8px] font-extrabold uppercase tracking-wide text-black sm:left-3 sm:top-3 sm:px-3 sm:text-[10px]">
            {selo}
          </span>
        )}

        <button
          type="button"
          aria-label={`Adicionar ${nome} aos favoritos`}
          className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/75 text-white backdrop-blur transition hover:border-red-500 hover:bg-red-500 sm:right-3 sm:top-3 sm:h-9 sm:w-9"
        >
          <FaHeart size={12} className="sm:hidden" />
          <FaHeart size={14} className="hidden sm:block" />
        </button>

        <Link
          href={`/produto/${slug}`}
          aria-label={`Ver detalhes do perfume ${nome}`}
          className="block"
        >
          <div className="relative aspect-square w-full overflow-hidden bg-black">
            <Image
              src={imagem}
              alt={`Perfume ${nome} da marca ${marca}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </Link>
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <div className="flex min-w-0 items-center justify-between gap-2">
          <p className="truncate text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-500 sm:text-xs">
            {marca}
          </p>

          <span className="hidden shrink-0 rounded-full border border-yellow-400/25 px-2 py-1 text-[9px] font-semibold text-yellow-400 sm:block">
            {categoria}
          </span>
        </div>

        <Link href={`/produto/${slug}`} className="mt-1 block min-w-0">
          <h3 className="line-clamp-2 min-h-10 text-sm font-black leading-5 text-white transition hover:text-yellow-400 sm:min-h-14 sm:text-xl sm:leading-7">
            {nome}
          </h3>
        </Link>

        <div className="mt-2 flex min-w-0 items-center gap-1.5 text-[9px] sm:text-xs">
          <div className="flex shrink-0 items-center gap-1 text-yellow-400">
            <FaStar size={10} />
            <span className="font-bold">{avaliacao}</span>
          </div>

          <span className="truncate text-zinc-600">({avaliacoes})</span>
        </div>

        {inspiradoEm ? (
          <div className="mt-3 min-h-[42px] rounded-xl border border-yellow-400/15 bg-yellow-400/5 px-2.5 py-2 sm:min-h-[52px] sm:px-3">
            <p className="text-[8px] font-bold uppercase tracking-wide text-zinc-600 sm:text-[10px]">
              Inspirado em
            </p>

            <p className="mt-0.5 line-clamp-1 text-[10px] font-bold text-yellow-400 sm:text-xs">
              {inspiradoEm}
            </p>
          </div>
        ) : (
          <div className="mt-3 min-h-[42px] rounded-xl border border-zinc-800 bg-black/40 px-2.5 py-2 sm:min-h-[52px] sm:px-3">
            <p className="text-[8px] font-bold uppercase tracking-wide text-zinc-600 sm:text-[10px]">
              Família
            </p>

            <p className="mt-0.5 truncate text-[10px] font-semibold text-zinc-400 sm:text-xs">
              Perfume árabe premium
            </p>
          </div>
        )}

        <div className="mt-3">
          <p className="truncate text-lg font-black text-yellow-400 sm:text-2xl">
            {precoFormatado}
          </p>

          <p className="mt-0.5 line-clamp-1 text-[9px] text-zinc-500 sm:text-xs">
            6x de {parcelaFormatada} sem juros
          </p>
        </div>

        <div className="mt-auto pt-3 sm:pt-4">
          <button
            type="button"
            onClick={adicionarProduto}
            className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-yellow-400 px-2 py-2.5 text-[10px] font-extrabold text-black transition hover:bg-yellow-300 active:scale-[0.98] sm:gap-2 sm:px-3 sm:py-3 sm:text-sm"
          >
            <FaShoppingCart size={12} />

            <span className="sm:hidden">Adicionar</span>

            <span className="hidden sm:inline">
              Adicionar ao carrinho
            </span>
          </button>

          <Link
            href={`/produto/${slug}`}
            className="mt-2 block text-center text-[9px] font-semibold text-zinc-500 transition hover:text-yellow-400 sm:mt-3 sm:text-xs"
          >
            Ver detalhes
          </Link>
        </div>
      </div>
    </article>
  );
}