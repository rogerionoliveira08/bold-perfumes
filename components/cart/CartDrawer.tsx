"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  FaLock,
  FaMinus,
  FaPlus,
  FaShoppingCart,
  FaTimes,
  FaTrash,
  FaWhatsapp,
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

  useEffect(() => {
    if (!carrinhoAberto) return;

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflowAnterior;
    };
  }, [carrinhoAberto]);

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

  if (!carrinhoAberto) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden">
      <button
        type="button"
        aria-label="Fechar carrinho"
        onClick={fecharCarrinho}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-carrinho"
        className="absolute bottom-0 right-0 top-0 flex w-full max-w-md flex-col overflow-hidden border-l border-zinc-800 bg-zinc-950 shadow-2xl"
      >
        <header className="box-border flex min-h-[60px] shrink-0 items-center justify-between border-b border-zinc-800 px-4 py-3 sm:min-h-[64px] sm:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <FaShoppingCart className="shrink-0 text-yellow-400" />

            <div className="min-w-0">
              <h2
                id="titulo-carrinho"
                className="truncate text-base font-bold text-white sm:text-lg"
              >
                Seu Carrinho
              </h2>

              <p className="text-[10px] text-zinc-500 sm:text-[11px]">
                {quantidadeTotal === 0
                  ? "Nenhum produto"
                  : `${quantidadeTotal} ${
                      quantidadeTotal === 1 ? "produto" : "produtos"
                    }`}
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            {carrinho.length > 0 && (
              <button
                type="button"
                onClick={limparCarrinho}
                className="rounded-lg px-2 py-1.5 text-[11px] font-semibold text-zinc-500 transition hover:bg-red-500/10 hover:text-red-400 sm:px-3 sm:text-xs"
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
              <FaTimes size={17} />
            </button>
          </div>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-2">
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
            <div className="space-y-2">
              {carrinho.map((item) => {
                const subtotal = item.preco * item.quantidade;

                return (
                  <article
                    key={item.id}
                    className="flex min-h-[80px] gap-2.5 rounded-xl border border-zinc-800 bg-black/20 p-2 sm:min-h-[90px] sm:gap-3 sm:p-2.5"
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-zinc-900 sm:h-[72px] sm:w-[72px]">
                      <Image
                        src={item.imagem}
                        alt={item.nome}
                        fill
                        sizes="72px"
                        className="object-contain"
                      />
                    </div>

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
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-zinc-500 transition hover:bg-red-500/10 hover:text-red-500"
                        >
                          <FaTrash size={12} />
                        </button>
                      </div>

                      <div className="mt-1.5 flex items-center justify-between gap-2">
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

                        <p className="whitespace-nowrap text-xs font-bold text-zinc-300">
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
          <footer className="box-border shrink-0 border-t border-zinc-800 bg-zinc-950 px-4 py-2.5 shadow-[0_-10px_25px_rgba(0,0,0,0.4)] sm:px-5 sm:py-3">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-[11px] text-zinc-400 sm:text-xs">
                  Total · Frete{" "}
                  <span className="font-semibold text-green-400">grátis</span>
                </p>

                <p className="mt-0.5 text-xl font-extrabold text-yellow-400 sm:text-2xl">
                  {formatarPreco(total)}
                </p>
              </div>

              <div className="flex items-center gap-1 pb-1 text-[9px] text-zinc-500 sm:text-[10px]">
                <FaLock size={9} className="text-yellow-400" />
                Seguro
              </div>
            </div>

            <a
              href={`https://wa.me/5522998771598?text=${mensagemWhatsApp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-3 py-3 text-sm font-bold text-black transition hover:bg-green-400 active:scale-[0.99] sm:mt-3 sm:text-base"
            >
              <FaWhatsapp size={18} />
              Finalizar pedido no WhatsApp
            </a>
          </footer>
        )}
      </aside>
    </div>
  );
}