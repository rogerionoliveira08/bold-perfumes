"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaExpand, FaTimes } from "react-icons/fa";

type ProductGalleryProps = {
  nome: string;
  imagens: string[];
};

export default function ProductGallery({
  nome,
  imagens,
}: ProductGalleryProps) {
  const imagensValidas =
    imagens.length > 0 ? imagens : ["/Perfumes/perfume.jpeg"];

  const [imagemAtual, setImagemAtual] = useState(imagensValidas[0]);
  const [lightboxAberto, setLightboxAberto] = useState(false);

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

  return (
    <>
      <div className="mx-auto w-full max-w-[430px]">
        <div className="flex items-start gap-3">
          {imagensValidas.length > 1 && (
            <div className="hidden w-[68px] shrink-0 flex-col gap-2 sm:flex">
              {imagensValidas.map((imagem, index) => (
                <button
                  key={`${imagem}-${index}`}
                  type="button"
                  onClick={() => selecionarImagem(imagem)}
                  aria-label={`Selecionar imagem ${index + 1} de ${nome}`}
                  className={`relative aspect-square overflow-hidden rounded-lg border bg-black transition ${
                    imagemAtual === imagem
                      ? "border-yellow-400"
                      : "border-zinc-800 hover:border-zinc-600"
                  }`}
                >
                  <Image
                    src={imagem}
                    alt={`${nome} - imagem ${index + 1}`}
                    fill
                    sizes="68px"
                    className="object-cover object-center"
                  />
                </button>
              ))}
            </div>
          )}

          <div className="min-w-0 flex-1">
            <button
              type="button"
              onClick={() => setLightboxAberto(true)}
              aria-label={`Ampliar imagem de ${nome}`}
              className="group relative block aspect-square w-full overflow-hidden rounded-2xl border border-zinc-800 bg-black"
            >
              <Image
                src={imagemAtual}
                alt={nome}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 430px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.08]"
              />

              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />

              <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white opacity-100 backdrop-blur transition hover:border-yellow-400 hover:text-yellow-400 sm:opacity-0 sm:group-hover:opacity-100">
                <FaExpand size={15} />
              </span>
            </button>

            {imagensValidas.length > 1 && (
              <div className="mt-3 grid grid-cols-4 gap-2 sm:hidden">
                {imagensValidas.map((imagem, index) => (
                  <button
                    key={`${imagem}-${index}`}
                    type="button"
                    onClick={() => selecionarImagem(imagem)}
                    aria-label={`Selecionar imagem ${index + 1} de ${nome}`}
                    className={`relative aspect-square overflow-hidden rounded-lg border bg-black transition ${
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

      {lightboxAberto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem ampliada de ${nome}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setLightboxAberto(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxAberto(false)}
            aria-label="Fechar imagem ampliada"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-black text-white transition hover:border-yellow-400 hover:text-yellow-400 sm:right-6 sm:top-6"
          >
            <FaTimes size={17} />
          </button>

          <div
            className="relative h-[85vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={imagemAtual}
              alt={`${nome} ampliado`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}