"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaHeart,
  FaRegHeart,
  FaShoppingCart,
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
  imagemZoom?: number;
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

  const parcelaFormatada = (preco / 10).toLocaleString("pt-BR", {
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
    <article className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-gold/60 hover:shadow-[0_16px_40px_rgba(41,37,36,0.12)] sm:rounded-2xl">
      <div className="relative overflow-hidden">
        {selo && (
          <span className="absolute left-2 top-2 z-30 max-w-[66%] truncate rounded-full bg-brand-gold px-2 py-1 text-[7px] font-black uppercase tracking-[0.08em] text-black shadow-md sm:left-3 sm:top-3 sm:px-2.5 sm:text-[9px]">
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
          className={`absolute right-2 top-2 z-30 flex h-7 w-7 items-center justify-center rounded-full border shadow-sm backdrop-blur-md transition active:scale-90 sm:right-3 sm:top-3 sm:h-8 sm:w-8 ${
            favoritado
              ? "border-red-500 bg-red-500 text-white"
              : "border-stone-200 bg-white/90 text-zinc-700 hover:border-red-500 hover:bg-red-500 hover:text-white"
          }`}
        >
          {favoritado ? (
            <FaHeart size={10} />
          ) : (
            <FaRegHeart size={10} />
          )}
        </button>

        <Link
          href={`/produto/${slug}`}
          aria-label={`Ver detalhes do perfume ${nome}`}
          className="block"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100">
            <Image
              src={imagem}
              alt={`Perfume ${nome} da marca ${marca}`}
              fill
              priority={false}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-10 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </Link>
      </div>

      <div className="flex flex-1 flex-col p-2.5 sm:p-3.5">
        <div className="flex min-w-0 items-center justify-between gap-2">
          <p className="truncate text-[8px] font-bold uppercase tracking-[0.12em] text-zinc-500 sm:text-[10px] sm:tracking-[0.14em]">
            {marca}
          </p>

          <span className="hidden shrink-0 rounded-full border border-stone-200 bg-stone-50 px-2 py-0.5 text-[8px] font-semibold text-zinc-500 sm:block">
            {categoria}
          </span>
        </div>

        <Link href={`/produto/${slug}`} className="mt-1 block min-w-0">
          <h3 className="line-clamp-2 min-h-8 text-[12px] font-black leading-4 text-zinc-900 transition hover:text-brand-gold-dark sm:min-h-10 sm:text-base sm:leading-5">
            {nome}
          </h3>
        </Link>

        {inspiradoEm ? (
          <div className="mt-1.5 rounded-md border border-brand-gold/25 bg-[#faf7ed] px-2 py-1.5 sm:mt-2 sm:rounded-lg sm:px-2.5">
            <p className="text-[6px] font-bold uppercase tracking-[0.1em] text-zinc-500 sm:text-[8px]">
              Inspirado em
            </p>

            <p className="mt-0.5 truncate text-[8px] font-bold text-brand-gold-dark sm:text-[11px]">
              {inspiradoEm}
            </p>
          </div>
        ) : (
          <div className="mt-1.5 rounded-md border border-stone-200 bg-stone-50 px-2 py-1.5 sm:mt-2 sm:rounded-lg sm:px-2.5">
            <p className="text-[6px] font-bold uppercase tracking-[0.1em] text-zinc-500 sm:text-[8px]">
              Seleção premium
            </p>

            <p className="mt-0.5 truncate text-[8px] font-semibold text-zinc-600 sm:text-[11px]">
              Perfume árabe original
            </p>
          </div>
        )}

        <div className="mt-2 border-t border-stone-200 pt-2 sm:mt-2.5 sm:pt-2.5">
          <p className="truncate text-[15px] font-black tracking-tight text-zinc-900 sm:text-lg">
            {precoFormatado}
          </p>

          <p className="mt-0.5 truncate text-[7px] text-zinc-500 sm:text-[10px]">
            10x de {parcelaFormatada} sem juros
          </p>
        </div>

        <div className="mt-auto pt-2 sm:pt-2.5">
          <button
            type="button"
            onClick={adicionarProduto}
            aria-label={`Adicionar ${nome} à minha seleção`}
            className="flex w-full items-center justify-center gap-1 rounded-lg bg-brand-gold px-2 py-1.5 text-[8px] font-black text-black transition hover:brightness-105 active:scale-[0.98] sm:gap-1.5 sm:rounded-xl sm:py-2.5 sm:text-xs"
          >
            <FaShoppingCart size={10} />

            <span className="sm:hidden">Selecionar</span>

            <span className="hidden sm:inline">
              Adicionar à seleção
            </span>
          </button>

          <Link
            href={`/produto/${slug}`}
            className="mt-1 block text-center text-[7px] font-semibold text-zinc-500 transition hover:text-brand-gold-dark sm:mt-1.5 sm:text-[10px]"
          >
            Ver detalhes
          </Link>
        </div>
      </div>
    </article>
  );
}