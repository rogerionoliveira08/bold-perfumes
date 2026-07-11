"use client";

import { FaShoppingCart, FaHeart, FaSprayCan } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useCart } from "@/context/CartContext";
import SearchBar from "@/components/common/SearchBar";

export default function Navbar() {
  const { carrinho, abrirCarrinho } = useCart();

  const totalItens = carrinho.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  return (
    <header className="sticky top-0 z-50 border-b border-yellow-500 bg-black">
      <div className="mx-auto max-w-7xl px-5 py-4">
        <div className="flex items-center justify-between gap-4">
          <h1 className="whitespace-nowrap text-2xl font-bold text-yellow-400 md:text-3xl">
            Bold Parfam
          </h1>

          <div className="hidden max-w-md flex-1 md:flex">
            <SearchBar />
          </div>

          <nav className="hidden items-center gap-7 text-white md:flex">
            <div className="flex cursor-pointer items-center gap-2 whitespace-nowrap font-medium transition duration-300 hover:text-yellow-400">
              <FaSprayCan size={15} />
              <span>Sua assinatura olfativa</span>
            </div>

            <a href="#" className="transition hover:text-yellow-400">
              Produtos
            </a>

            <a href="#" className="transition hover:text-yellow-400">
              Categorias
            </a>

            <a href="#" className="transition hover:text-yellow-400">
              Contato
            </a>

            <FaHeart
              size={22}
              className="cursor-pointer transition hover:text-red-500"
            />

            <button
              onClick={abrirCarrinho}
              className="relative transition hover:text-yellow-400"
            >
              <FaShoppingCart size={22} />

              {totalItens > 0 && (
                <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-black">
                  {totalItens}
                </span>
              )}
            </button>
          </nav>

          <div className="flex items-center gap-5 md:hidden">
            <button onClick={abrirCarrinho} className="relative text-white">
              <FaShoppingCart size={22} />

              {totalItens > 0 && (
                <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-black">
                  {totalItens}
                </span>
              )}
            </button>

            <HiOutlineMenuAlt3 size={30} className="text-yellow-400" />
          </div>
        </div>

        <div className="mt-4 md:hidden">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}