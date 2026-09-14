"use client";

import { useEffect, useState } from "react";
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
  const { carrinho, abrirCarrinho, adicionarAoCarrinho } = useCart();
  const [adicionado, setAdicionado] = useState(false);
  const [cep, setCep] = useState("");

  const produtoNaSelecao = carrinho.some((item) => item.id === produto.id);

  const precoFormatado = produto.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const linkProduto = `https://www.boldparfum.com.br/produto/${produto.slug}`;
  const cepNumeros = cep.replace(/\D/g, "");
  const cepMensagem =
    cepNumeros.length === 8
      ? `${cepNumeros.slice(0, 5)}-${cepNumeros.slice(5)}`
      : "Não informado";

  const mensagem = encodeURIComponent(
    `Olá! Tenho interesse em comprar este perfume da Bold Parfum:

Perfume: ${produto.nome}
Marca: ${produto.marca}
Preço: ${precoFormatado}
Link: ${linkProduto}
CEP para cálculo do frete: ${cepMensagem}

Gostaria de confirmar a disponibilidade e receber as orientações para finalizar o pedido.`,
  );

  useEffect(() => {
    window.fbq?.("track", "ViewContent", {
      content_ids: [produto.id],
      content_name: produto.nome,
      content_type: "product",
      value: produto.preco,
      currency: "BRL",
    });
  }, [produto.id, produto.nome, produto.preco]);

  function adicionarProduto() {
    adicionarAoCarrinho(produto);
    setAdicionado(true);

    window.fbq?.("track", "AddToCart", {
      content_ids: [produto.id],
      content_name: produto.nome,
      content_type: "product",
      value: produto.preco,
      currency: "BRL",
    });

    window.setTimeout(() => {
      setAdicionado(false);
    }, 2200);
  }

  function rastrearCompraWhatsapp() {
    window.fbq?.("track", "InitiateCheckout", {
      content_ids: [produto.id],
      content_name: produto.nome,
      content_type: "product",
      value: produto.preco,
      currency: "BRL",
    });
  }

  return (
    <>
      <div className="mt-5">
        <label className="mb-3 block">
          <span className="text-[10px] font-black uppercase tracking-[0.14em] text-zinc-700">
            CEP para calcular frete e prazo <span className="font-semibold text-zinc-500">(opcional)</span>
          </span>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            value={cep}
            onChange={(event) => {
              const digits = event.target.value.replace(/\D/g, "").slice(0, 8);
              setCep(
                digits.length > 5
                  ? `${digits.slice(0, 5)}-${digits.slice(5)}`
                  : digits,
              );
            }}
            maxLength={9}
            placeholder="00000-000"
            className="mt-2 min-h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-950 focus:ring-2 focus:ring-zinc-950/10"
          />
        </label>

        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href={`https://wa.me/5522999281815?text=${mensagem}`}
            onClick={rastrearCompraWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Comprar ${produto.nome} pelo WhatsApp`}
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#25D366] bg-[#25D366] px-4 py-3 text-sm font-black text-white transition hover:border-[#20ba5a] hover:bg-[#20ba5a] active:scale-[0.98] sm:min-h-14 sm:text-base"
          >
            <FaWhatsapp size={18} />
            Comprar no WhatsApp
          </a>

          <button
            type="button"
            onClick={adicionarProduto}
            disabled={adicionado}
            aria-label={`Adicionar ${produto.nome} à minha seleção`}
            className={`flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-black transition sm:min-h-14 sm:text-base ${
              adicionado
                ? "cursor-default border-zinc-950 bg-zinc-950 text-white"
                : "border-zinc-950 bg-white text-zinc-950 hover:bg-zinc-100 active:scale-[0.98]"
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
        </div>

        <p className="mt-3 text-center text-[10px] leading-4 text-zinc-500 sm:text-xs">
          Compre diretamente pelo WhatsApp ou adicione o perfume à sua seleção
          para revisar outros itens antes de finalizar.
        </p>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-zinc-800 bg-black px-3 pb-[max(8px,env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_30px_rgba(0,0,0,0.55)] sm:hidden">
        <div className="mx-auto max-w-md">
          <div className="mb-2 flex min-w-0 items-end justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-xs font-black text-white">
                {produto.nome}
              </p>
              <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wide text-zinc-400">
                {produto.marca}
              </p>
            </div>

            <p className="shrink-0 text-sm font-black text-white">
              {precoFormatado}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/5522999281815?text=${mensagem}`}
              onClick={rastrearCompraWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Comprar ${produto.nome} pelo WhatsApp`}
              className="flex min-h-12 min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3 text-xs font-black text-white transition active:scale-[0.98]"
            >
              <FaWhatsapp size={18} />
              Comprar no WhatsApp
            </a>

            {produtoNaSelecao ? (
              <button
                type="button"
                onClick={abrirCarrinho}
                className="flex h-12 shrink-0 items-center justify-center gap-1.5 rounded-xl border border-white bg-white px-3 text-[11px] font-black text-black transition active:scale-95"
              >
                <FaShoppingCart size={13} />
                Ver minha seleção
              </button>
            ) : (
              <button
                type="button"
                onClick={adicionarProduto}
                disabled={adicionado}
                aria-label={`Adicionar ${produto.nome} à minha seleção`}
                title="Adicionar à minha seleção"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white bg-transparent text-white transition active:scale-95"
              >
                {adicionado ? (
                  <FaCheck size={15} />
                ) : (
                  <FaShoppingCart size={16} />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
