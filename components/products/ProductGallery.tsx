 "use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { FaExpand, FaTimes } from "react-icons/fa";

type ProductGalleryProps = {
  nome: string;
  imagens: string[];
};

export default function ProductGallery({
  nome,
  imagens,
}: ProductGalleryProps) {
  const imagensValidas = useMemo(() => {
    return imagens.length > 0
      ? imagens
      : ["/Perfumes/perfume.jpeg"];
  }, [imagens]);

  const [imagemAtual, setImagemAtual] = useState(imagensValidas[0]);
  const [lightboxAberto, setLightboxAberto] = useState(false);
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    setMontado(true);
  }, []);

  useEffect(() => {
    setImagemAtual(imagensValidas[0]);
  }, [imagensValidas]);

  useEffect(() => {
    function fecharComEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setLightboxAberto(false);
      }
    }

    if (lightboxAberto) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", fecharComEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", fecharComEscape);
    };
  }, [lightboxAberto]);

  function selecionarImagem(imagem: string) {
    setImagemAtual(imagem);
  }

  function abrirLightbox() {
    setLightboxAberto(true);
  }

  function fecharLightbox() {
    setLightboxAberto(false);
  }

  return (
    <>
      <div className="mx-auto w-full max-w-[410px] lg:mx-0">
        <div className="flex items-start gap-3">
          {imagensValidas.length > 1 && (
            <div className="hidden w-[64px] shrink-0 flex-col gap-2 sm:flex">
              {imagensValidas.map((imagem, index) => (
                <button
                  key={`${imagem}-${index}`}
                  type="button"
                  onClick={() => selecionarImagem(imagem)}
                  aria-label={`Selecionar imagem ${index + 1} de ${nome}`}
                  aria-pressed={imagemAtual === imagem}
                  className={`relative aspect-square overflow-hidden rounded-lg border bg-zinc-950 transition ${
                    imagemAtual === imagem
                      ? "border-yellow-400"
                      : "border-zinc-800 hover:border-zinc-600"
                  }`}
                >
                  <Image
                    src={imagem}
                    alt={`${nome} - imagem ${index + 1}`}
                    fill
                    sizes="64px"
                    className="object-cover object-center"
                  />
                </button>
              ))}
            </div>
          )}

          <div className="min-w-0 flex-1">
            <button
              type="button"
              onClick={abrirLightbox}
              aria-label={`Ampliar imagem de ${nome}`}
              className="group relative block aspect-square w-full cursor-zoom-in overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950"
            >
              <Image
                src={imagemAtual}
                alt={nome}
                fill
                priority
                sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) 410px, 410px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              <span className="pointer-events-none absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur transition sm:h-10 sm:w-10 sm:opacity-0 sm:group-hover:opacity-100">
                <FaExpand size={14} />
              </span>
            </button>

            {imagensValidas.length > 1 && (
              <div className="mt-3 grid grid-cols-4 gap-2 sm:hidden">
                {imagensValidas.slice(0, 4).map((imagem, index) => (
                  <button
                    key={`${imagem}-${index}`}
                    type="button"
                    onClick={() => selecionarImagem(imagem)}
                    aria-label={`Selecionar imagem ${index + 1} de ${nome}`}
                    aria-pressed={imagemAtual === imagem}
                    className={`relative aspect-square overflow-hidden rounded-lg border bg-zinc-950 transition ${
                      imagemAtual === imagem
                        ? "border-yellow-400"
                        : "border-zinc-800"
                    }`}
                  >
                    <Image
                      src={imagem}
                      alt={`${nome} - imagem ${index + 1}`}
                      fill
                      sizes="25vw"
                      className="object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {montado &&
        lightboxAberto &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Imagem ampliada de ${nome}`}
            onClick={fecharLightbox}
            className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/90 p-4"
          >
            <button
              type="button"
              onClick={fecharLightbox}
              aria-label="Fechar imagem ampliada"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-600 bg-black/80 text-white transition hover:border-yellow-400 hover:text-yellow-400 sm:right-6 sm:top-6"
            >
              <FaTimes size={18} />
            </button>

            <div
              className="relative flex h-full w-full items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={imagemAtual}
                alt={`${nome} ampliado`}
                className="block max-h-[88vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}