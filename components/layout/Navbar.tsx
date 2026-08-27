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
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-5">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            onClick={fecharMenu}
            className="whitespace-nowrap text-xl font-extrabold text-black sm:text-2xl md:text-3xl"
          >
            Bold <span className="text-yellow-500">Parfum</span>
          </Link>

          <div className="hidden max-w-md flex-1 md:flex">
            <SearchBar />
          </div>

          <nav className="hidden items-center gap-5 text-sm font-medium text-zinc-800 md:flex">
            <Link
              href="/produtos"
              className="transition hover:text-yellow-600"
            >
              Produtos
            </Link>

            <Link
              href="/#categorias"
              className="transition hover:text-yellow-600"
            >
              Categorias
            </Link>

            <Link
              href="/guia-da-perfumaria"
              className="flex items-center gap-1.5 whitespace-nowrap transition hover:text-yellow-600"
            >
              <FaBookOpen size={14} />
              Guia
            </Link>

            <Link
              href="/#contato"
              className="transition hover:text-yellow-600"
            >
              Contato
            </Link>

            <Link
              href="/guia-da-perfumaria"
              className="hidden items-center gap-2 whitespace-nowrap rounded-lg bg-yellow-400 px-4 py-2.5 font-bold text-black transition hover:bg-yellow-300 xl:flex"
            >
              <FaSprayCan size={15} />
              Descubra seu perfume
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
              aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuAberto}
              className="text-black"
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
          <nav className="mt-4 border-t border-zinc-200 bg-white pt-4 md:hidden">
            <div className="flex flex-col gap-1">
              <Link
                href="/produtos"
                onClick={fecharMenu}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
              >
                Produtos
              </Link>

              <Link
                href="/#categorias"
                onClick={fecharMenu}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
              >
                Categorias
              </Link>

              <Link
                href="/guia-da-perfumaria"
                onClick={fecharMenu}
                className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
              >
                <FaBookOpen size={15} />
                Guia da Perfumaria
              </Link>

              <Link
                href="/#contato"
                onClick={fecharMenu}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
              >
                Contato
              </Link>

              <Link
                href="/guia-da-perfumaria"
                onClick={fecharMenu}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-4 py-3 text-sm font-bold text-black"
              >
                <FaSprayCan size={15} />
                Descubra seu perfume
              </Link>
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
      className="relative text-zinc-900 transition hover:text-red-500"
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
      className="relative text-zinc-900 transition hover:text-yellow-600"
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