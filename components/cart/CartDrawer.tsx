"use client";

import Image from "next/image";
import {
  FaShoppingCart,
  FaTrash,
  FaTimes,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    carrinho,
    carrinhoAberto,
    fecharCarrinho,
    removerDoCarrinho,
    aumentarQuantidade,
    diminuirQuantidade,
    limparCarrinho,
  } = useCart();

  const total = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  const mensagemWhatsApp = encodeURIComponent(
    `Olá, equipe da Bold Parfam!\n\nGostaria de fazer o seguinte pedido:\n\n${carrinho
      .map(
        (item) =>
          `• ${item.nome}\nQuantidade: ${item.quantidade}\nValor: R$ ${(
            item.preco * item.quantidade
          )
            .toFixed(2)
            .replace(".", ",")}`
      )
      .join("\n\n")}\n\nTotal do pedido: R$ ${total
      .toFixed(2)
      .replace(".", ",")}\n\nAguardo o atendimento.`
  );

  return (
    <>
      {carrinhoAberto && (
        <div
          className="fixed inset-0 z-40 bg-black/70"
          onClick={fecharCarrinho}
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-full max-w-md border-l border-zinc-800 bg-zinc-950 transition-transform duration-300 ${
          carrinhoAberto ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-zinc-800 p-6">
          <div className="flex items-center gap-3">
            <FaShoppingCart className="text-yellow-400" />
            <h2 className="text-xl font-bold text-white">Seu Carrinho</h2>
          </div>

          <button onClick={fecharCarrinho}>
            <FaTimes className="text-xl text-white" />
          </button>
        </div>

        <div className="h-[calc(100vh-230px)] space-y-5 overflow-y-auto p-5">
          {carrinho.length === 0 && (
            <p className="mt-10 text-center text-zinc-500">
              Seu carrinho está vazio.
            </p>
          )}

          {carrinho.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 rounded-2xl border border-zinc-800 p-4"
            >
              <Image
                src={item.imagem}
                alt={item.nome}
                width={90}
                height={90}
                className="h-24 w-24 rounded-xl object-cover"
              />

              <div className="flex flex-1 flex-col">
                <div className="flex justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-white">{item.nome}</h3>

                    <p className="mt-1 text-sm font-bold text-yellow-400">
                      R$ {item.preco.toFixed(2).replace(".", ",")}
                    </p>
                  </div>

                  <button
                    onClick={() => removerDoCarrinho(item.id)}
                    className="text-red-500 hover:text-red-400"
                  >
                    <FaTrash />
                  </button>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => diminuirQuantidade(item.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-white transition hover:bg-yellow-400 hover:text-black"
                    >
                      <FaMinus size={11} />
                    </button>

                    <span className="font-bold text-white">
                      {item.quantidade}
                    </span>

                    <button
                      onClick={() => aumentarQuantidade(item.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-white transition hover:bg-yellow-400 hover:text-black"
                    >
                      <FaPlus size={11} />
                    </button>
                  </div>

                  <p className="font-bold text-zinc-300">
                    R${" "}
                    {(item.preco * item.quantidade)
                      .toFixed(2)
                      .replace(".", ",")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-800 p-6">
          <div className="mb-2 flex justify-between text-zinc-400">
            <span>Produtos</span>
            <span>R$ {total.toFixed(2).replace(".", ",")}</span>
          </div>

          <div className="mb-5 flex justify-between text-zinc-400">
            <span>Frete</span>
            <span className="text-green-400">Grátis</span>
          </div>

          <div className="mb-5 flex justify-between text-lg text-white">
            <span>Total</span>
            <span className="font-bold text-yellow-400">
              R$ {total.toFixed(2).replace(".", ",")}
            </span>
          </div>

          <a
            href={`https://wa.me/5522998771598?text=${mensagemWhatsApp}`}
            target="_blank"
            className="block w-full rounded-xl bg-green-500 py-4 text-center font-bold text-black transition hover:bg-green-400"
          >
            Finalizar pelo WhatsApp
          </a>

          {carrinho.length > 0 && (
            <button
              onClick={limparCarrinho}
              className="mt-3 w-full rounded-xl border border-red-500 py-3 text-red-500 transition hover:bg-red-500 hover:text-white"
            >
              Limpar Carrinho
            </button>
          )}
        </div>
      </aside>
    </>
  );
}