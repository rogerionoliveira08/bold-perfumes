"use client";

import Link from "next/link";
import { FaHeart, FaShoppingCart, FaSprayCan } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useCart } from "@/context/CartContext";
import SearchBar from "@/components/common/SearchBar";

export default function Navbar() {
  const { carrinho, abrirCarrinho } = useCart();

  const totalItens = carrinho.reduce(
    (total, item) => total + item.quantidade,
    0,
  );

  return (
    <header className="sticky top-0 z-40 border-b border-yellow-500 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-5 md:py-4">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="whitespace-nowrap text-xl font-extrabold text-yellow-400 sm:text-2xl md:text-3xl"
          >
            Bold Parfum
          </Link>

          <div className="hidden max-w-md flex-1 md:flex">
            <SearchBar />
          </div>

          <nav className="hidden items-center gap-6 text-white md:flex">
            <div className="flex items-center gap-2 whitespace-nowrap font-medium">
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

            <button
              type="button"
              aria-label="Favoritos"
              className="transition hover:text-red-500"
            >
              <FaHeart size={21} />
            </button>

            <CartButton
              totalItens={totalItens}
              abrirCarrinho={abrirCarrinho}
            />
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <CartButton
              totalItens={totalItens}
              abrirCarrinho={abrirCarrinho}
            />

            <button
              type="button"
              aria-label="Abrir menu"
              className="text-yellow-400"
            >
              <HiOutlineMenuAlt3 size={27} />
            </button>
          </div>
        </div>

        <div className="mt-3 md:hidden">
          <SearchBar />
        </div>
      </div>
    </header>
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
      aria-label={`Abrir carrinho com ${totalItens} itens`}
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