"use client";

import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";

type Props = {
  produto: Product;
};

export default function ProductActions({ produto }: Props) {
  const { adicionarAoCarrinho } = useCart();

  const mensagem = encodeURIComponent(
    `Olá! Tenho interesse no perfume ${produto.nome}.`
  );

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      <button
        onClick={() => adicionarAoCarrinho(produto)}
        className="flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 py-4 text-lg font-bold text-black hover:bg-yellow-300"
      >
        <FaShoppingCart />
        Adicionar ao Carrinho
      </button>

      <a
        href={`https://wa.me/5522998771598?text=${mensagem}`}
        target="_blank"
        className="flex items-center justify-center gap-2 rounded-2xl border border-green-500 py-4 text-lg font-bold text-green-400 hover:bg-green-500 hover:text-black"
      >
        <FaWhatsapp />
        Comprar no WhatsApp
      </a>
    </div>
  );
}