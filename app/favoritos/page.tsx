
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
                  className="block"
                >
                  <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-white">
                    <Image
                      src={produto.imagem}
                      alt={produto.nome}
                      width={500}
                      height={500}
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className={`transition duration-300 hover:scale-[1.03] ${
                        produto.slug === "liquid-brun"
                          ? "h-auto w-[65%] object-contain"
                          : "h-full w-full object-contain"
                      }`}
                    />
                  </div>

                  <div className="p-3">
                    <h2 className="text-sm font-bold text-white sm:text-base">
                      {produto.nome}
                    </h2>

                    <p className="mt-1 text-xs text-zinc-400">
                      {produto.marca}
                    </p>

                    <p className="mt-3 text-base font-black text-yellow-400">
                      {formatarPreco(produto.preco)}
                    </p>
                  </div>
                </Link>

                <div className="mt-auto flex gap-2 p-3 pt-0">
                  <button
                    type="button"
                    onClick={() => adicionarAoCarrinho(produto)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-yellow-400 px-2 py-3 text-xs font-bold text-black transition hover:bg-yellow-300 sm:text-sm"
                  >
                    <FaShoppingCart size={14} />
                    <span>Adicionar</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => removerFavorito(produto.id)}
                    aria-label={`Remover ${produto.nome} dos favoritos`}
                    title="Remover dos favoritos"
                    className="flex items-center justify-center rounded-lg border border-zinc-700 px-3 text-zinc-400 transition hover:border-red-500 hover:text-red-500"
                  >
                    <FaTrash size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
