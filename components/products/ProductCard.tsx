"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaHeart,
  FaRegHeart,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";

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
  const { estaFavoritado, alternarFavorito } = useFavorites();

  const favoritado = estaFavoritado(id);

  const precoFormatado = preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const parcelaFormatada = (preco / 6).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const produtoResumido = {
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
  };

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

  function alternarProdutoFavorito() {
    alternarFavorito(produtoResumido);
  }

  return (
    <article className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-zinc-800/90 bg-gradient-to-b from-zinc-950 to-black transition duration-300 hover:-translate-y-1 hover:border-yellow-400/60 hover:shadow-[0_18px_45px_rgba(250,204,21,0.10)] sm:rounded-3xl">
      <div className="relative overflow-hidden">
        {selo && (
          <span className="absolute left-2.5 top-2.5 z-20 max-w-[68%] truncate rounded-full border border-yellow-300/40 bg-yellow-400 px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.1em] text-black shadow-lg sm:left-3.5 sm:top-3.5 sm:px-3 sm:py-1.5 sm:text-[10px]">
            {selo}
          </span>
        )}

        <button
          type="button"
          onClick={alternarProdutoFavorito}
          aria-label={
            favoritado
              ? `Remover ${nome} dos favoritos`
              : `Adicionar ${nome} aos favoritos`
          }
          title={
            favoritado
              ? "Remover dos favoritos"
              : "Adicionar aos favoritos"
          }
          className={`absolute right-2.5 top-2.5 z-20 flex h-8 w-8 items-center justify-center rounded-full border backdrop-blur-md transition duration-200 active:scale-90 sm:right-3.5 sm:top-3.5 sm:h-9 sm:w-9 ${
            favoritado
              ? "border-red-500 bg-red-500 text-white shadow-lg shadow-red-500/20"
              : "border-white/15 bg-black/70 text-white hover:border-red-500 hover:bg-red-500 hover:text-white"
          }`}
        >
          {favoritado ? (
            <FaHeart size={13} />
          ) : (
            <FaRegHeart size={13} />
          )}
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
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.045]"
            />

            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" />
          </div>
        </Link>
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <div className="flex min-w-0 items-center justify-between gap-2">
          <p className="truncate text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-500 sm:text-[11px]">
            {marca}
          </p>

          <span className="hidden shrink-0 rounded-full border border-zinc-700 bg-black/50 px-2 py-1 text-[9px] font-semibold text-zinc-400 sm:block">
            {categoria}
          </span>
        </div>

        <Link
          href={`/produto/${slug}`}
          className="mt-1.5 block min-w-0"
        >
          <h3 className="line-clamp-2 min-h-10 text-sm font-black leading-5 text-white transition hover:text-yellow-400 sm:min-h-12 sm:text-lg sm:leading-6">
            {nome}
          </h3>
        </Link>

        <div className="mt-2 flex min-w-0 items-center gap-1.5 text-[10px] sm:text-xs">
          <div className="flex shrink-0 items-center gap-1 text-yellow-400">
            <FaStar size={10} />
            <span className="font-bold">{avaliacao}</span>
          </div>

          <span className="text-zinc-700">•</span>

          <span className="truncate text-zinc-500">
            {avaliacoes} avaliações
          </span>
        </div>

        {inspiradoEm ? (
          <div className="mt-3 min-h-[44px] rounded-xl border border-yellow-400/15 bg-yellow-400/[0.04] px-2.5 py-2 sm:min-h-[50px] sm:px-3">
            <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-zinc-600 sm:text-[9px]">
              Inspirado em
            </p>

            <p className="mt-1 line-clamp-1 text-[10px] font-bold text-yellow-400 sm:text-xs">
              {inspiradoEm}
            </p>
          </div>
        ) : (
          <div className="mt-3 min-h-[44px] rounded-xl border border-zinc-800 bg-black/40 px-2.5 py-2 sm:min-h-[50px] sm:px-3">
            <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-zinc-600 sm:text-[9px]">
              Seleção premium
            </p>

            <p className="mt-1 truncate text-[10px] font-semibold text-zinc-400 sm:text-xs">
              Perfume árabe original
            </p>
          </div>
        )}

        <div className="mt-3 border-t border-zinc-800/80 pt-3">
          <p className="truncate text-lg font-black tracking-tight text-yellow-400 sm:text-xl">
            {precoFormatado}
          </p>

          <p className="mt-0.5 line-clamp-1 text-[9px] text-zinc-500 sm:text-[11px]">
            6x de {parcelaFormatada} sem juros
          </p>
        </div>

        <div className="mt-auto pt-3 sm:pt-4">
          <button
            type="button"
            onClick={adicionarProduto}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-2 py-2.5 text-[10px] font-black text-black transition duration-200 hover:bg-yellow-300 active:scale-[0.98] sm:px-3 sm:py-3 sm:text-sm"
          >
            <FaShoppingCart size={12} />

            <span className="sm:hidden">Adicionar</span>

            <span className="hidden sm:inline">
              Adicionar ao carrinho
            </span>
          </button>

          <Link
            href={`/produto/${slug}`}
            className="mt-2.5 block text-center text-[9px] font-semibold text-zinc-500 transition hover:text-yellow-400 sm:text-xs"
          >
            Ver detalhes
          </Link>
        </div>
      </div>
    </article>
  );
}