"use client";

import Image from "next/image";
import { FaTimes, FaTrash } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    carrinho,
    carrinhoAberto,
    fecharCarrinho,
    removerDoCarrinho,
    limparCarrinho,
  } = useCart();

  const total = carrinho.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0
  );

  const mensagemWhatsApp = encodeURIComponent(
    `Olá! Gostaria de fazer este pedido na Bold Parfam:\n\n${carrinho
      .map(
        (item) =>
          `• ${item.nome} - ${item.quantidade}x - R$ ${
            item.preco * item.quantidade
          }`
      )
      .join("\n")}\n\nTotal: R$ ${total}`
  );

  return (
    <>
      {carrinhoAberto && (
        <div
          onClick={fecharCarrinho}
          className="fixed inset-0 z-[90] bg-black/70"
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-[100] h-full w-full max-w-md bg-zinc-950 text-white shadow-2xl transition-transform duration-300 ${
          carrinhoAberto ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-zinc-800 p-5">
          <h2 className="text-2xl font-bold text-yellow-400">Meu Carrinho</h2>

          <button
            onClick={fecharCarrinho}
            className="rounded-full bg-zinc-800 p-3 hover:bg-zinc-700"
          >
            <FaTimes />
          </button>
        </div>

        <div className="flex h-[calc(100%-180px)] flex-col gap-4 overflow-y-auto p-5">
          {carrinho.length === 0 ? (
            <p className="mt-10 text-center text-zinc-400">
              Seu carrinho está vazio.
            </p>
          ) : (
            carrinho.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-4"
              >
                <Image
                  src={item.imagem}
                  alt={item.nome}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-xl object-cover"
                />

                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between gap-3">
                    <div>
                      <h3 className="font-bold">{item.nome}</h3>
                      <p className="text-sm text-zinc-400">
                        Quantidade: {item.quantidade}
                      </p>
                    </div>

                    <button
                      onClick={() => removerDoCarrinho(item.id)}
                      className="text-red-500 hover:text-red-400"
                    >
                      <FaTrash />
                    </button>
                  </div>

                  <p className="mt-auto text-lg font-bold text-yellow-400">
                    R$ {item.preco * item.quantidade}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-zinc-800 p-5">
          <div className="mb-4 flex items-center justify-between text-xl font-bold">
            <span>Total</span>
            <span className="text-yellow-400">R$ {total}</span>
          </div>

          <a
            href={`https://wa.me/5522998771598?text=${mensagemWhatsApp}`}
            target="_blank"
            className="block w-full rounded-xl bg-yellow-400 py-4 text-center font-bold text-black hover:bg-yellow-300"
          >
            Finalizar no WhatsApp
          </a>

          {carrinho.length > 0 && (
            <button
              onClick={limparCarrinho}
              className="mt-3 w-full rounded-xl border border-zinc-700 py-3 text-zinc-300 hover:bg-zinc-900"
            >
              Limpar carrinho
            </button>
          )}
        </div>
      </aside>
    </>
  );
}