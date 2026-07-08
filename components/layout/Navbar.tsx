"use client";

import { FaShoppingCart, FaHeart, FaSearch, FaSprayCan } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { carrinho } = useCart();

  const totalItens = carrinho.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  return (
    <header className="bg-black border-b border-yellow-500 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-4">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-yellow-400 whitespace-nowrap">
            Bold Parfam
          </h1>

          <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Pesquisar perfume..."
              className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-xl pl-11 pr-4 py-3 outline-none focus:border-yellow-400 transition"
            />
          </div>

          <nav className="hidden md:flex items-center gap-7 text-white">
            <div className="flex items-center gap-2 text-white font-medium whitespace-nowrap cursor-pointer hover:text-yellow-400 transition duration-300">
              <FaSprayCan size={15} />
              <span>Sua assinatura olfativa</span>
            </div>

            <a href="#" className="hover:text-yellow-400 transition">
              Produtos
            </a>

            <a href="#" className="hover:text-yellow-400 transition">
              Categorias
            </a>

            <a href="#" className="hover:text-yellow-400 transition">
              Contato
            </a>

            <FaHeart
              size={22}
              className="cursor-pointer hover:text-red-500 transition"
            />

            <button className="relative hover:text-yellow-400 transition">
              <FaShoppingCart size={22} />

              {totalItens > 0 && (
                <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-black">
                  {totalItens}
                </span>
              )}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-5">
            <button className="relative text-white">
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

        <div className="md:hidden mt-4 relative">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />

          <input
            type="text"
            placeholder="Pesquisar perfume..."
            className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-xl pl-11 pr-4 py-3 outline-none focus:border-yellow-400 transition"
          />
        </div>
      </div>
    </header>
  );
}