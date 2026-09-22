"use client";

import { useState, type ReactNode } from "react";
import {
  FaTimes,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa";

type WhatsAppChoiceButtonProps = {
  children: ReactNode;
  className?: string;
  mensagem?: string;
};

const atendentes = [
  {
    nome: "Rogério",
    numeroExibido: "(22) 99928-1815",
    telefone: "5522999281815",
  },
  {
    nome: "Thainá",
    numeroExibido: "(22) 99288-5658",
    telefone: "55552299236538785658",
  },
];

const mensagemPadrao =
  "Olá! Vim pelo site da Bold Parfum e gostaria de conhecer os perfumes disponíveis.";

export default function WhatsAppChoiceButton({
  children,
  className = "",
  mensagem = mensagemPadrao,
}: WhatsAppChoiceButtonProps) {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setAberto(true)}
        className={className}
      >
        {children}
      </button>

      {aberto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 px-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Escolher atendente"
          onClick={() => setAberto(false)}
        >
          <div
            className="w-full max-w-sm overflow-hidden bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between bg-black px-5 py-5 text-white">
              <div>
                <p className="text-lg font-extrabold">
                  Escolha seu atendimento
                </p>

                <p className="mt-1 text-sm text-zinc-400">
                  Com quem você deseja falar?
                </p>
              </div>

              <button
                type="button"
                onClick={() => setAberto(false)}
                aria-label="Fechar escolha de atendente"
                className="flex h-9 w-9 items-center justify-center text-zinc-400 transition hover:text-white"
              >
                <FaTimes size={18} />
              </button>
            </div>

            <div className="space-y-3 p-4">
              {atendentes.map((atendente) => (
                <a
                  key={atendente.nome}
                  href={`https://wa.me/${atendente.telefone}?text=${encodeURIComponent(
                    mensagem,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setAberto(false)}
                  className="group flex items-center gap-4 border border-zinc-200 p-4 transition hover:border-[#25D366] hover:bg-green-50"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                    <FaUser size={17} />
                  </span>

                  <span className="flex-1">
                    <span className="block text-sm font-extrabold text-black">
                      Falar com {atendente.nome}
                    </span>

                    <span className="mt-1 block text-xs text-zinc-500">
                      {atendente.numeroExibido}
                    </span>
                  </span>

                  <FaWhatsapp
                    size={22}
                    className="text-[#25D366]"
                  />
                </a>
              ))}
            </div>

            <p className="border-t border-zinc-200 px-5 py-4 text-center text-xs text-zinc-500">
              Você será direcionado para o WhatsApp do atendente escolhido.
            </p>
          </div>
        </div>
      )}
    </>
  );
}