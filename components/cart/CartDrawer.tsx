"use client";

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

  return (
    <>
      {carrinhoAberto && (
        <div
          className="fixed inset-0 z-40 bg-black/60"
          onClick={fecharCarrinho}
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-full max-w-md bg-zinc-950 border-l border-zinc-800 transition-transform duration-300 ${
          carrinhoAberto ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-zinc-800 p-6">
          <div className="flex items-center gap-3">
            <FaShoppingCart className="text-yellow-400" />
            <h2 className="text-xl font-bold text-white">
              Seu Carrinho
            </h2>
          </div>

          <button onClick={fecharCarrinho}>
            <FaTimes className="text-white text-xl" />
          </button>
        </div>

        <div className="h-[calc(100vh-220px)] overflow-y-auto p-5 space-y-5">

          {carrinho.length === 0 && (
            <p className="text-zinc-500 text-center mt-10">
              Seu carrinho está vazio.
            </p>
          )}

          {carrinho.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-zinc-800 p-4"
            >
              <h3 className="font-bold text-white">
                {item.nome}
              </h3>

              <p className="text-yellow-400 font-bold mt-2">
                R$ {item.preco.toFixed(2).replace(".", ",")}
              </p>

              <div className="flex items-center justify-between mt-5">

                <div className="flex items-center gap-3">

                  <button
                    onClick={() => diminuirQuantidade(item.id)}
                    className="w-9 h-9 rounded-full bg-zinc-800 hover:bg-yellow-400 hover:text-black transition flex items-center justify-center"
                  >
                    <FaMinus size={12} />
                  </button>

                  <span className="font-bold text-lg">
                    {item.quantidade}
                  </span>

                  <button
                    onClick={() => aumentarQuantidade(item.id)}
                    className="w-9 h-9 rounded-full bg-zinc-800 hover:bg-yellow-400 hover:text-black transition flex items-center justify-center"
                  >
                    <FaPlus size={12} />
                  </button>

                </div>

                <button
                  onClick={() => removerDoCarrinho(item.id)}
                  className="text-red-500 hover:text-red-400"
                >
                  <FaTrash />
                </button>

              </div>

            </div>
          ))}

        </div>

        <div className="border-t border-zinc-800 p-6">

          <div className="flex justify-between text-lg text-white mb-5">
            <span>Total</span>

            <span className="font-bold text-yellow-400">
              R$ {total.toFixed(2).replace(".", ",")}
            </span>
          </div>

          <button
            className="w-full bg-green-500 hover:bg-green-400 transition rounded-xl py-4 font-bold text-black"
          >
            Finalizar pelo WhatsApp
          </button>

          <button
            onClick={limparCarrinho}
            className="w-full mt-3 border border-red-500 text-red-500 rounded-xl py-3 hover:bg-red-500 hover:text-white transition"
          >
            Limpar Carrinho
          </button>

        </div>

      </aside>
    </>
  );
}