"use client";

import { useState } from "react";
import { FaTimes, FaWhatsapp } from "react-icons/fa";

const mensagem =
  "Olá! Vim pelo site da Bold Parfum e gostaria de saber mais sobre os perfumes.";

const atendentes = [
  {
    nome: "Rogério",
    numeroExibido: "(22) 99928-1815",
    telefone: "5522999281815",
  },
  {
    nome: "Thainá",
    numeroExibido: "(22)99288-5658",
    telefone: "5522992885658",
  },
];

export default function WhatsAppButton() {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-5 sm:right-5">
      {aberto && (
        <div className="absolute bottom-14 right-0 w-[280px] overflow-hidden border border-zinc-200 bg-white shadow-2xl">
          <div className="flex items-start justify-between bg-zinc-950 px-4 py-4 text-white">
            <div>
              <p className="text-sm font-extrabold">
                Atendimento Bold Parfum
              </p>

              <p className="mt-1 text-xs text-zinc-400">
                Escolha com quem deseja falar
              </p>
            </div>

            <button
              type="button"
              onClick={() => setAberto(false)}
              aria-label="Fechar opções de atendimento"
              className="flex h-8 w-8 items-center justify-center text-zinc-400 transition hover:text-white"
            >
              <FaTimes size={16} />
            </button>
          </div>

          <div className="space-y-2 p-3">
            {atendentes.map((atendente) => (
              <a
                key={atendente.nome}
                href={`https://wa.me/${atendente.telefone}?text=${encodeURIComponent(
                  mensagem,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setAberto(false)}
                className="flex min-h-14 items-center gap-3 border border-zinc-200 px-4 py-3 transition hover:border-green-500 hover:bg-green-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <FaWhatsapp size={20} />
                </span>

                <span>
                  <span className="block text-sm font-extrabold text-zinc-950">
                    {atendente.nome}
                  </span>

                  <span className="mt-0.5 block text-xs text-zinc-500">
                    {atendente.numeroExibido}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setAberto((estadoAtual) => !estadoAtual)}
        aria-label={
          aberto
            ? "Fechar opções de atendimento"
            : "Escolher atendimento pelo WhatsApp"
        }
        aria-expanded={aberto}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a]"
      >
        {aberto ? (
          <FaTimes size={18} />
        ) : (
          <FaWhatsapp size={23} />
        )}
      </button>
    </div>
  );
}