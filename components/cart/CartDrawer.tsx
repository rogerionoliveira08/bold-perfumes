"use client";

import Image from "next/image";
import {
  FaShoppingCart,
  FaTrash,
  FaTimes,
  FaPlus,
  FaMinus,
  FaWhatsapp,
  FaLock,
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
    0,
  );

  const quantidadeTotal = carrinho.reduce(
    (acc, item) => acc + item.quantidade,
    0,
  );

  const formatarPreco = (valor: number) =>
    valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  const mensagemWhatsApp = encodeURIComponent(
    `Olá, equipe da Bold Parfum!

Gostaria de fazer o seguinte pedido:

${carrinho
  .map(
    (item) => `• ${item.nome}
Quantidade: ${item.quantidade}
Valor: ${formatarPreco(item.preco * item.quantidade)}`,
  )
  .join("\n\n")}

Total do pedido: ${formatarPreco(total)}

Aguardo o atendimento.`,
  );

  return (
    <>
      {carrinhoAberto && (
        <button
          type="button"
          aria-label="Fechar carrinho"
          onClick={fecharCarrinho}
          className="fixed inset-0 z-40 cursor-default bg-black/75 backdrop-blur-sm"
        />
      )}

      <aside
        aria-hidden={!carrinhoAberto}
        className={`fixed inset-y-0 right-0 z-50 flex h-[100dvh] w-full max-w-md flex-col border-l border-zinc-800 bg-zinc-950 shadow-2xl transition-transform duration-300 ${
          carrinhoAberto ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex shrink-0 items-center justify-between border-b border-zinc-800 px-5 py-3">
          <div className="flex items-center gap-3">
            <FaShoppingCart className="text-yellow-400" />

            <div>
              <h2 className="text-lg font-bold text-white">Seu Carrinho</h2>

              <p className="text-[11px] text-zinc-500">
                {quantidadeTotal === 0
                  ? "Nenhum produto"
                  : `${quantidadeTotal} ${
                      quantidadeTotal === 1 ? "produto" : "produtos"
                    }`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {carrinho.length > 0 && (
              <button
                type="button"
                onClick={limparCarrinho}
                className="rounded-lg px-3 py-2 text-xs font-semibold text-zinc-500 transition hover:bg-red-500/10 hover:text-red-400"
              >
                Limpar
              </button>
            )}

            <button
              type="button"
              onClick={fecharCarrinho}
              aria-label="Fechar carrinho"
              className="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-zinc-800"
            >
              <FaTimes size={18} />
            </button>
          </div>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-3">
          {carrinho.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center px-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-yellow-400">
                <FaShoppingCart size={22} />
              </div>

              <h3 className="mt-4 text-lg font-bold text-white">
                Seu carrinho está vazio
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-zinc-400">
                Adicione seus perfumes favoritos para concluir o pedido.
              </p>

              <button
                type="button"
                onClick={fecharCarrinho}
                className="mt-5 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
              >
                Continuar comprando
              </button>
            </div>
          ) : (
            <div className="space-y-2.5">
              {carrinho.map((item) => {
                const subtotal = item.preco * item.quantidade;

                return (
                  <article
                    key={item.id}
                    className="flex min-h-[92px] gap-3 rounded-xl border border-zinc-800 bg-black/20 p-2.5"
                  >
                    <Image
                      src={item.imagem}
                      alt={item.nome}
                      width={72}
                      height={72}
                      className="h-[72px] w-[72px] shrink-0 rounded-lg object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className="truncate text-sm font-bold text-white">
                            {item.nome}
                          </h3>

                          <p className="mt-0.5 text-xs font-bold text-yellow-400">
                            {formatarPreco(item.preco)}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => removerDoCarrinho(item.id)}
                          aria-label={`Remover ${item.nome}`}
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-red-500 transition hover:bg-red-500/10"
                        >
                          <FaTrash size={12} />
                        </button>
                      </div>

                      <div className="mt-2 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => diminuirQuantidade(item.id)}
                            aria-label={`Diminuir quantidade de ${item.nome}`}
                            className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-800 text-white transition hover:bg-yellow-400 hover:text-black"
                          >
                            <FaMinus size={9} />
                          </button>

                          <span className="min-w-5 text-center text-sm font-bold text-white">
                            {item.quantidade}
                          </span>

                          <button
                            type="button"
                            onClick={() => aumentarQuantidade(item.id)}
                            aria-label={`Aumentar quantidade de ${item.nome}`}
                            className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-800 text-white transition hover:bg-yellow-400 hover:text-black"
                          >
                            <FaPlus size={9} />
                          </button>
                        </div>

                        <p className="text-xs font-bold text-zinc-300">
                          {formatarPreco(subtotal)}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>

        {carrinho.length > 0 && (
          <footer className="shrink-0 border-t border-zinc-800 bg-zinc-950 px-5 py-3 shadow-[0_-10px_25px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-zinc-400">
                  Total · Frete{" "}
                  <span className="font-semibold text-green-400">grátis</span>
                </p>

                <p className="mt-0.5 text-2xl font-extrabold text-yellow-400">
                  {formatarPreco(total)}
                </p>
              </div>

              <div className="flex items-center gap-1 text-[10px] text-zinc-500">
                <FaLock size={9} className="text-yellow-400" />
                Seguro
              </div>
            </div>

            <a
              href={`https://wa.me/5522998771598?text=${mensagemWhatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3.5 font-bold text-black transition hover:bg-green-400 active:scale-[0.99]"
            >
              <FaWhatsapp size={19} />
              Finalizar pedido no WhatsApp
            </a>
          </footer>
        )}
      </aside>
    </>
  );
}