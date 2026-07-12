"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaHeartBroken,
  FaShoppingCart,
  FaTrash,
} from "react-icons/fa";
import { useFavorites } from "@/context/FavoritesContext";
import { useCart } from "@/context/CartContext";

export default function FavoritesPage() {
  const {
    favoritos,
    removerFavorito,
    limparFavoritos,
  } = useFavorites();

  const { adicionarAoCarrinho } = useCart();

  const formatarPreco = (valor: number) =>
    valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-zinc-800 pb-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
              Sua seleção
            </p>

            <h1 className="mt-2 text-3xl font-black sm:text-4xl">
              Meus favoritos
            </h1>

            <p className="mt-2 text-sm text-zinc-500">
              {favoritos.length}{" "}
              {favoritos.length === 1
                ? "produto favoritado"
                : "produtos favoritados"}
            </p>
          </div>

          {favoritos.length > 0 && (
            <button
              type="button"
              onClick={limparFavoritos}
              className="flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-2.5 text-sm font-semibold text-zinc-300 transition hover:border-red-500 hover:text-red-500"
            >
              <FaTrash size={13} />
              Limpar favoritos
            </button>
          )}
        </div>

        {favoritos.length === 0 ? (
          <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-600">
              <FaHeartBroken size={30} />
            </div>

            <h2 className="mt-6 text-2xl font-black">
              Nenhum perfume favoritado
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
              Explore nosso catálogo e use o coração para guardar os
              perfumes que mais chamaram sua atenção.
            </p>

            <Link
              href="/produtos"
              className="mt-7 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
            >
              Ver perfumes
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {favoritos.map((produto) => (
              <article
                key={produto.id}
                className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950"
              >
                <Link
                  href={`/produto/${produto.slug}`}
                  className="relative block aspect-square overflow-hidden bg-black"
                >
                  <Image
                    src={produto.imagem}
                    alt={produto.nome}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover object-center transition duration-300 hover:scale-[1.03]"
                  />
                </Link>

                <div className="flex flex-1 flex-col p-3 sm:p-4">
                  <p className="truncate text-[10px] font-bold uppercase tracking-wide text-zinc-500 sm:text-xs">
                    {produto.marca}
                  </p>

                  <Link href={`/produto/${produto.slug}`}>
                    <h2 className="mt-1 line-clamp-2 min-h-10 text-sm font-black transition hover:text-yellow-400 sm:text-lg">
                      {produto.nome}
                    </h2>
                  </Link>

                  <p className="mt-3 text-lg font-black text-yellow-400 sm:text-xl">
                    {formatarPreco(produto.preco)}
                  </p>

                  <div className="mt-auto grid gap-2 pt-4">
                    <button
                      type="button"
                      onClick={() => adicionarAoCarrinho(produto)}
                      className="flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-3 py-2.5 text-xs font-bold text-black transition hover:bg-yellow-300 sm:text-sm"
                    >
                      <FaShoppingCart size={13} />
                      Adicionar
                    </button>

                    <button
                      type="button"
                      onClick={() => removerFavorito(produto.id)}
                      className="flex items-center justify-center gap-2 rounded-xl border border-zinc-800 px-3 py-2.5 text-xs font-semibold text-zinc-400 transition hover:border-red-500 hover:text-red-500"
                    >
                      <FaTrash size={12} />
                      Remover
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}