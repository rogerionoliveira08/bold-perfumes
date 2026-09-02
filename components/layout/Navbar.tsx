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
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-5">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            onClick={fecharMenu}
            aria-label="Bold Parfum — Página inicial"
            className="shrink-0 whitespace-nowrap font-sans text-[21px] font-medium uppercase leading-none tracking-[0.24em] text-black no-underline decoration-transparent transition-opacity hover:opacity-65 sm:text-[25px] lg:text-[28px]"
          >
            BOLD PARFUM
          </Link>

          <div className="hidden max-w-md flex-1 md:flex">
            <SearchBar />
          </div>

          <nav className="hidden items-center gap-5 text-sm font-normal text-zinc-900 md:flex">
  <Link
    href="/produtos"
    className="no-underline transition hover:text-zinc-500"
  >
    Produtos
  </Link>

  <Link
    href="/#categorias"
    className="no-underline transition hover:text-zinc-500"
  >
    Categorias
  </Link>

  <Link
    href="/guia-da-perfumaria"
    className="flex items-center gap-1.5 whitespace-nowrap no-underline transition hover:text-zinc-500"
  >
    <FaBookOpen size={14} />
    Guia
  </Link>

  <Link
    href="/#contato"
    className="no-underline transition hover:text-zinc-500"
  >
    Contato
  </Link>

  <Link
  href="/descubra-seu-perfume"
  onClick={fecharMenu}
  className="mt-2 flex items-center justify-center gap-2 border border-zinc-300 bg-white px-4 py-3 text-sm font-medium text-black no-underline transition hover:border-black"
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
              <MobileLink
                href="/produtos"
                onClick={fecharMenu}
              >
                Produtos
              </MobileLink>

              <MobileLink
                href="/#categorias"
                onClick={fecharMenu}
              >
                Categorias
              </MobileLink>

              <MobileLink
                href="/guia-da-perfumaria"
                onClick={fecharMenu}
              >
                <FaBookOpen size={15} />
                Guia da Perfumaria
              </MobileLink>

              <MobileLink
                href="/#contato"
                onClick={fecharMenu}
              >
                Contato
              </MobileLink>

              <Link
                href="/guia-da-perfumaria"
                onClick={fecharMenu}
                className="mt-2 flex items-center justify-center gap-2 border border-zinc-300 bg-white px-4 py-3 text-sm font-medium text-black no-underline transition hover:border-black"
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

function MobileLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-3 text-sm font-normal text-zinc-900 no-underline transition hover:bg-zinc-100"
    >
      {children}
    </Link>
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
      className="relative text-zinc-950 no-underline transition hover:text-red-600"
    >
      <FaHeart size={21} />

      {totalFavoritos > 0 && (
        <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-[10px] font-semibold text-white">
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
      title="Minha seleção"
      className="relative text-zinc-950 transition hover:text-zinc-500"
    >
      <FaShoppingCart size={21} />

      {totalItens > 0 && (
        <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] font-semibold text-white">
          {totalItens > 99 ? "99+" : totalItens}
        </span>
      )}
    </button>
  );
}