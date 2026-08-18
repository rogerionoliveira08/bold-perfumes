"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaBookOpen,
  FaHeart,
  FaShoppingCart,
  FaSprayCan,
  FaTimes,
} from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";
import SearchBar from "@/components/common/SearchBar";

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const { carrinho, abrirCarrinho } = useCart();
  const { totalFavoritos } = useFavorites();

  const totalItens = carrinho.reduce(
    (total, item) => total + item.quantidade,
    0,
  );

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-yellow-500 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-5 md:py-4">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            onClick={fecharMenu}
            className="whitespace-nowrap text-xl font-extrabold text-yellow-400 sm:text-2xl md:text-3xl"
          >
            Bold Parfum
          </Link>

          <div className="hidden max-w-sm flex-1 md:flex">
            <SearchBar />
          </div>

          <nav className="hidden items-center gap-5 text-sm text-white md:flex">
            <div className="hidden items-center gap-2 whitespace-nowrap font-medium xl:flex">
              <FaSprayCan size={15} />
              <span>Sua assinatura olfativa</span>
            </div>

            <Link
              href="/produtos"
              className="transition hover:text-yellow-400"
            >
              Produtos
            </Link>

            <Link
              href="/guia-da-perfumaria"
              className="flex items-center gap-1.5 whitespace-nowrap font-semibold text-yellow-400 transition hover:text-yellow-300"
            >
              <FaBookOpen size={14} />
              Guia
            </Link>

            <Link
              href="/#categorias"
              className="transition hover:text-yellow-400"
            >
              Categorias
            </Link>

            <Link
              href="/#contato"
              className="transition hover:text-yellow-400"
            >
              Contato
            </Link>

            <FavoriteLink totalFavoritos={totalFavoritos} />

            <CartButton
              totalItens={totalItens}
              abrirCarrinho={abrirCarrinho}
            />
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <FavoriteLink totalFavoritos={totalFavoritos} />

            <CartButton
              totalItens={totalItens}
              abrirCarrinho={abrirCarrinho}
            />

            <button
              type="button"
              onClick={() => setMenuAberto((atual) => !atual)}
              aria-label={
                menuAberto ? "Fechar menu" : "Abrir menu"
              }
              aria-expanded={menuAberto}
              className="text-yellow-400"
            >
              {menuAberto ? (
                <FaTimes size={23} />
              ) : (
                <HiOutlineMenuAlt3 size={27} />
              )}
            </button>
          </div>
        </div>

        <div className="mt-3 md:hidden">
          <SearchBar />
        </div>

        {menuAberto && (
          <nav className="mt-4 border-t border-zinc-800 pt-4 md:hidden">
            <div className="flex flex-col gap-2">
              <Link
                href="/produtos"
                onClick={fecharMenu}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-900 hover:text-yellow-400"
              >
                Produtos
              </Link>

              <Link
                href="/guia-da-perfumaria"
                onClick={fecharMenu}
                className="flex items-center gap-2 rounded-xl border border-yellow-400/30 bg-yellow-400/10 px-4 py-3 text-sm font-bold text-yellow-400"
              >
                <FaBookOpen size={15} />
                Guia da Perfumaria
              </Link>

              <Link
                href="/#categorias"
                onClick={fecharMenu}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-900 hover:text-yellow-400"
              >
                Categorias
              </Link>

              <Link
                href="/#contato"
                onClick={fecharMenu}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-900 hover:text-yellow-400"
              >
                Contato
              </Link>
            </div>

            <div className="mt-3 flex items-center gap-2 border-t border-zinc-800 px-4 pt-4 text-xs text-zinc-400">
              <FaSprayCan className="text-yellow-400" size={14} />
              Sua assinatura olfativa
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

function FavoriteLink({
  totalFavoritos,
}: {
  totalFavoritos: number;
}) {
  return (
    <Link
      href="/favoritos"
      aria-label={`Abrir favoritos com ${totalFavoritos} produtos`}
      className="relative text-white transition hover:text-red-500"
    >
      <FaHeart size={21} />

      {totalFavoritos > 0 && (
        <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
          {totalFavoritos > 99 ? "99+" : totalFavoritos}
        </span>
      )}
    </Link>
  );
}

function CartButton({
  totalItens,
  abrirCarrinho,
}: {
  totalItens: number;
  abrirCarrinho: () => void;
}) {
  return (
    <button
      type="button"
      onClick={abrirCarrinho}
      aria-label={`Abrir minha seleção com ${totalItens} itens`}
title="Minha Seleção"
      className="relative text-white transition hover:text-yellow-400"
    >
      <FaShoppingCart size={21} />

      {totalItens > 0 && (
        <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-yellow-400 px-1 text-[10px] font-bold text-black">
          {totalItens > 99 ? "99+" : totalItens}
        </span>
      )}
    </button>
  );
}