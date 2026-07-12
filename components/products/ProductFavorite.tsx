"use client";

import { FaHeart } from "react-icons/fa";
import { useFavorites } from "@/context/FavoritesContext";
import { Product } from "@/types/product";

type Props = {
  produto: Product;
};

export default function ProductFavorite({ produto }: Props) {
  const { estaFavoritado, alternarFavorito } = useFavorites();

  const favoritado = estaFavoritado(produto.id);

  function alternar() {
    alternarFavorito({
      id: produto.id,
      slug: produto.slug,
      nome: produto.nome,
      marca: produto.marca,
      preco: produto.preco,
      imagem: produto.imagem,
      categoria: produto.categoria,
      selo: produto.selo,
      avaliacao: produto.avaliacao,
      avaliacoes: produto.avaliacoes,
      inspiradoEm: produto.inspiradoEm,
    });
  }

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={
        favoritado
          ? `Remover ${produto.nome} dos favoritos`
          : `Adicionar ${produto.nome} aos favoritos`
      }
      title={favoritado ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition ${
        favoritado
          ? "border-red-500 bg-red-500 text-white"
          : "border-zinc-700 text-zinc-300 hover:border-red-500 hover:bg-red-500/10 hover:text-red-500"
      }`}
    >
      <FaHeart size={15} />
    </button>
  );
}