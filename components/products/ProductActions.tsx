"use client";

import { useState } from "react";
import {
  FaCheck,
  FaShoppingCart,
  FaWhatsapp,
} from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/types/product";

type Props = {
  produto: Product;
};

export default function ProductActions({ produto }: Props) {
  const { adicionarAoCarrinho } = useCart();
  const [adicionado, setAdicionado] = useState(false);

  const mensagem = encodeURIComponent(
    `Olá! Tenho interesse no perfume ${produto.nome}, da marca ${produto.marca}. Poderia me passar mais informações?`,
  );

  function adicionarProduto() {
    adicionarAoCarrinho(produto);
    setAdicionado(true);

    window.setTimeout(() => {
      setAdicionado(false);
    }, 2200);
  }

  return (
    <div className="mt-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={adicionarProduto}
          disabled={adicionado}
          aria-label={`Adicionar ${produto.nome} ao carrinho`}
          className={`flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-black transition sm:min-h-14 sm:text-base ${
            adicionado
              ? "cursor-default bg-green-500 text-black"
              : "bg-yellow-400 text-black hover:bg-yellow-300 active:scale-[0.98]"
          }`}
        >
          {adicionado ? (
            <>
              <FaCheck size={15} />
              Adicionado ao carrinho
            </>
          ) : (
            <>
              <FaShoppingCart size={16} />
              Adicionar ao carrinho
            </>
          )}
        </button>

        <a
          href={`https://wa.me/5522998771598?text=${mensagem}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Comprar ${produto.nome} pelo WhatsApp`}
          className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-green-500 bg-green-500/[0.05] px-4 py-3 text-sm font-black text-green-400 transition hover:bg-green-500 hover:text-black active:scale-[0.98] sm:min-h-14 sm:text-base"
        >
          <FaWhatsapp size={17} />
          Comprar no WhatsApp
        </a>
      </div>

      <p className="mt-3 text-center text-[10px] leading-4 text-zinc-500 sm:text-xs">
        Ao adicionar ao carrinho, você poderá revisar os produtos e finalizar o
        pedido pelo WhatsApp.
      </p>
    </div>
  );
}