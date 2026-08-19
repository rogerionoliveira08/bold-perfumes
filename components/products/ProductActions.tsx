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

  const precoFormatado = produto.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const linkProduto = `https://www.boldparfum.com.br/produto/${produto.slug}`;

  const mensagem = encodeURIComponent(
    `Olá! Tenho interesse em comprar este perfume da Bold Parfum:

Perfume: ${produto.nome}
Marca: ${produto.marca}
Preço: ${precoFormatado}
Link: ${linkProduto}

Gostaria de confirmar a disponibilidade e receber as orientações para finalizar o pedido.`,
  );

  function adicionarProduto() {
    adicionarAoCarrinho(produto);
    setAdicionado(true);

    window.setTimeout(() => {
      setAdicionado(false);
    }, 2200);
  }

  return (
    <>
      <div className="mt-5">
        <div className="grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={adicionarProduto}
            disabled={adicionado}
            aria-label={`Adicionar ${produto.nome} à minha seleção`}
            className={`flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-black transition sm:min-h-14 sm:text-base ${
              adicionado
                ? "cursor-default bg-green-500 text-black"
                : "bg-yellow-400 text-black hover:bg-yellow-300 active:scale-[0.98]"
            }`}
          >
            {adicionado ? (
              <>
                <FaCheck size={15} />
                Adicionado à seleção
              </>
            ) : (
              <>
                <FaShoppingCart size={16} />
                Adicionar à minha seleção
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
          Monte sua seleção, revise os perfumes escolhidos e finalize o pedido
          com atendimento pelo WhatsApp.
        </p>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-zinc-800 bg-zinc-950/95 px-3 pb-[max(8px,env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_30px_rgba(0,0,0,0.55)] backdrop-blur-md sm:hidden">
        <div className="mx-auto flex max-w-md items-center gap-2">
          <div className="min-w-0 shrink-0">
            <p className="text-[9px] font-bold uppercase tracking-wide text-zinc-500">
              Valor
            </p>
            <p className="max-w-[92px] truncate text-sm font-black text-yellow-400">
              {precoFormatado}
            </p>
          </div>

          <button
            type="button"
            onClick={adicionarProduto}
            disabled={adicionado}
            aria-label={`Adicionar ${produto.nome} à minha seleção`}
            className={`flex min-h-12 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-xl px-3 text-xs font-black transition active:scale-[0.98] ${
              adicionado
                ? "bg-green-500 text-black"
                : "bg-yellow-400 text-black"
            }`}
          >
            {adicionado ? (
              <>
                <FaCheck size={13} />
                Adicionado
              </>
            ) : (
              <>
                <FaShoppingCart size={14} />
                Selecionar
              </>
            )}
          </button>

          <a
            href={`https://wa.me/5522998771598?text=${mensagem}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Falar sobre ${produto.nome} pelo WhatsApp`}
            title="Comprar pelo WhatsApp"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500 text-black transition active:scale-95"
          >
            <FaWhatsapp size={21} />
          </a>
        </div>
      </div>
    </>
  );
}