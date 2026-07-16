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
    <article className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:shadow-[0_14px_35px_rgba(250,204,21,0.08)]">
      <div className="relative overflow-hidden">
        {selo && (
          <span className="absolute left-2 top-2 z-20 max-w-[65%] truncate rounded-full bg-yellow-400 px-2 py-1 text-[8px] font-black uppercase tracking-[0.08em] text-black shadow-md sm:left-3 sm:top-3 sm:px-2.5 sm:text-[9px]">
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
          className={`absolute right-2 top-2 z-20 flex h-8 w-8 items-center justify-center rounded-full border backdrop-blur-md transition active:scale-90 sm:right-3 sm:top-3 ${
            favoritado
              ? "border-red-500 bg-red-500 text-white"
              : "border-white/15 bg-black/70 text-white hover:border-red-500 hover:bg-red-500"
          }`}
        >
          {favoritado ? (
            <FaHeart size={12} />
          ) : (
            <FaRegHeart size={12} />
          )}
        </button>

        <Link
          href={`/produto/${slug}`}
          aria-label={`Ver detalhes do perfume ${nome}`}
          className="block"
        >
          <div className="relative aspect-[1/0.92] w-full overflow-hidden bg-black sm:aspect-square">
            <Image
              src={imagem}
              alt={`Perfume ${nome} da marca ${marca}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.035]"
            />

            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/45 to-transparent" />
          </div>
        </Link>
      </div>

      <div className="flex flex-1 flex-col p-2.5 sm:p-3.5">
        <div className="flex min-w-0 items-center justify-between gap-2">
          <p className="truncate text-[8px] font-bold uppercase tracking-[0.14em] text-zinc-500 sm:text-[10px]">
            {marca}
          </p>

          <span className="hidden shrink-0 rounded-full border border-zinc-800 bg-black/40 px-2 py-0.5 text-[8px] font-semibold text-zinc-500 sm:block">
            {categoria}
          </span>
        </div>

        <Link
          href={`/produto/${slug}`}
          className="mt-1 block min-w-0"
        >
          <h3 className="line-clamp-2 min-h-9 text-[13px] font-black leading-[18px] text-white transition hover:text-yellow-400 sm:min-h-10 sm:text-base sm:leading-5">
            {nome}
          </h3>
        </Link>

        <div className="mt-1.5 flex min-w-0 items-center gap-1 text-[9px] sm:text-[11px]">
          <div className="flex shrink-0 items-center gap-1 text-yellow-400">
            <FaStar size={9} />
            <span className="font-bold">{avaliacao}</span>
          </div>

          <span className="text-zinc-700">•</span>

          <span className="truncate text-zinc-500">
            {avaliacoes} avaliações
          </span>
        </div>

        {inspiradoEm ? (
          <div className="mt-2 rounded-lg border border-yellow-400/15 bg-yellow-400/[0.04] px-2 py-1.5 sm:px-2.5">
            <p className="text-[7px] font-bold uppercase tracking-[0.1em] text-zinc-600 sm:text-[8px]">
              Inspirado em
            </p>

            <p className="mt-0.5 truncate text-[9px] font-bold text-yellow-400 sm:text-[11px]">
              {inspiradoEm}
            </p>
          </div>
        ) : (
          <div className="mt-2 rounded-lg border border-zinc-800 bg-black/30 px-2 py-1.5 sm:px-2.5">
            <p className="text-[7px] font-bold uppercase tracking-[0.1em] text-zinc-600 sm:text-[8px]">
              Seleção premium
            </p>

            <p className="mt-0.5 truncate text-[9px] font-semibold text-zinc-400 sm:text-[11px]">
              Perfume árabe original
            </p>
          </div>
        )}

        <div className="mt-2.5 border-t border-zinc-800 pt-2.5">
          <p className="truncate text-base font-black tracking-tight text-yellow-400 sm:text-lg">
            {precoFormatado}
          </p>

          <p className="mt-0.5 truncate text-[8px] text-zinc-500 sm:text-[10px]">
            6x de {parcelaFormatada} sem juros
          </p>
        </div>

        <div className="mt-auto pt-2.5">
          <button
            type="button"
            onClick={adicionarProduto}
            className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-yellow-400 px-2 py-2 text-[9px] font-black text-black transition hover:bg-yellow-300 active:scale-[0.98] sm:rounded-xl sm:py-2.5 sm:text-xs"
          >
            <FaShoppingCart size={11} />

            <span className="sm:hidden">Adicionar</span>

            <span className="hidden sm:inline">
              Adicionar ao carrinho
            </span>
          </button>

          <Link
            href={`/produto/${slug}`}
            className="mt-1.5 block text-center text-[8px] font-semibold text-zinc-600 transition hover:text-yellow-400 sm:text-[10px]"
          >
            Ver detalhes
          </Link>
        </div>
      </div>
    </article>
  );
}