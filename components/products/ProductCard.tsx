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
}: ProductCardProps) {
  const { adicionarAoCarrinho } = useCart();

  const parcela = preco / 6;

  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const parcelaFormatada = parcela.toLocaleString("pt-BR", {
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
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/80 hover:shadow-xl hover:shadow-yellow-500/10">
      <div className="relative">
        {selo && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-yellow-400 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-black">
            {selo}
          </span>
        )}

        <button
          type="button"
          aria-label={`Adicionar ${nome} aos favoritos`}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/75 text-white backdrop-blur transition hover:bg-red-500 hover:text-white"
        >
          <FaHeart size={14} />
        </button>

        <Link
          href={`/produto/${slug}`}
          aria-label={`Ver detalhes do perfume ${nome}`}
        >
          <div className="relative h-56 overflow-hidden bg-gradient-to-b from-zinc-900 to-black sm:h-60">
            <Image
              src={imagem}
              alt={`Perfume ${nome} da marca ${marca}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <p className="truncate text-xs font-medium uppercase tracking-wide text-zinc-400">
            {marca}
          </p>

          <span className="shrink-0 rounded-full border border-yellow-400/30 px-2 py-1 text-[10px] font-medium text-yellow-400">
            {categoria}
          </span>
        </div>

        <Link href={`/produto/${slug}`}>
          <h3 className="line-clamp-2 min-h-12 text-lg font-bold text-white transition hover:text-yellow-400">
            {nome}
          </h3>
        </Link>

        <div className="mt-2 flex items-center gap-2 text-xs">
          <div className="flex items-center gap-1 text-yellow-400">
            <FaStar size={13} />
            <span className="font-bold">{avaliacao}</span>
          </div>

          <span className="text-zinc-500">
            ({avaliacoes} avaliações)
          </span>
        </div>

        <div className="mt-4">
          <p className="text-2xl font-extrabold text-yellow-400">
            {precoFormatado}
          </p>

          <p className="mt-1 text-xs text-zinc-400">
            ou 6x de {parcelaFormatada} sem juros
          </p>
        </div>

        <div className="mt-auto pt-4">
          <button
            type="button"
            onClick={adicionarProduto}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-3 py-3 text-sm font-bold text-black transition hover:bg-yellow-300 active:scale-[0.98]"
          >
            <FaShoppingCart size={14} />
            Adicionar ao carrinho
          </button>

          <Link
            href={`/produto/${slug}`}
            className="mt-3 block text-center text-xs font-semibold text-zinc-400 transition hover:text-yellow-400"
          >
            Ver detalhes do produto
          </Link>
        </div>
      </div>
    </article>
  );
}