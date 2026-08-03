 "use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaGem,
  FaSearchPlus,
  FaTimes,
} from "react-icons/fa";

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

  const [indiceAtual, setIndiceAtual] = useState(0);
  const [lightboxAberto, setLightboxAberto] = useState(false);
  const [montado, setMontado] = useState(false);

  const imagemAtual =
    imagensValidas[indiceAtual] ?? imagensValidas[0];

  const possuiVariasImagens = imagensValidas.length > 1;

  useEffect(() => {
    setMontado(true);
  }, []);

  useEffect(() => {
    setIndiceAtual(0);
  }, [imagensValidas]);

  useEffect(() => {
    function controlarTeclado(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setLightboxAberto(false);
      }

      if (event.key === "ArrowLeft") {
        mostrarImagemAnterior();
      }

      if (event.key === "ArrowRight") {
        mostrarProximaImagem();
      }
    }

    if (lightboxAberto) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", controlarTeclado);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", controlarTeclado);
    };
  }, [lightboxAberto, indiceAtual, imagensValidas.length]);

  function mostrarImagemAnterior() {
    setIndiceAtual((indice) =>
      indice === 0 ? imagensValidas.length - 1 : indice - 1
    );
  }

  function mostrarProximaImagem() {
    setIndiceAtual((indice) =>
      indice === imagensValidas.length - 1 ? 0 : indice + 1
    );
  }

  return (
    <>
      <section
        aria-label={`Galeria de imagens de ${nome}`}
        className="mx-auto w-full max-w-[540px] lg:mx-0"
      >
        <div className="flex items-start gap-3 sm:gap-4">
          {possuiVariasImagens ? (
            <div className="hidden w-[76px] shrink-0 flex-col gap-3 sm:flex">
              {imagensValidas.map((imagem, index) => {
                const selecionada = indiceAtual === index;

                return (
                  <button
                    key={`${imagem}-${index}`}
                    type="button"
                    onClick={() => setIndiceAtual(index)}
                    aria-label={`Selecionar imagem ${index + 1} de ${nome}`}
                    aria-pressed={selecionada}
                    className={`group relative aspect-[4/5] overflow-hidden rounded-xl border bg-zinc-950 p-1 transition duration-300 ${
                      selecionada
                        ? "border-yellow-400 shadow-[0_0_22px_rgba(250,204,21,0.13)]"
                        : "border-zinc-800 hover:border-yellow-400/40"
                    }`}
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-lg bg-black">
                      <Image
                        src={imagem}
                        alt={`${nome} - imagem ${index + 1}`}
                        fill
                        sizes="76px"
                        className={`object-cover object-center transition duration-500 ${
                          selecionada
                            ? "scale-[1.03]"
                            : "group-hover:scale-[1.06]"
                        }`}
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/[0.03]" />
                    </div>

                    {selecionada ? (
                      <span className="pointer-events-none absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)]" />
                    ) : null}
                  </button>
                );
              })}
            </div>
          ) : null}

          <div className="min-w-0 flex-1">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-3 rounded-[28px] bg-yellow-400/[0.035] blur-2xl" />

              <button
                type="button"
                onClick={() => setLightboxAberto(true)}
                aria-label={`Ampliar imagem de ${nome}`}
                className="group relative block aspect-[4/5] w-full cursor-zoom-in overflow-hidden rounded-[24px] border border-zinc-800 bg-zinc-950 p-1.5 shadow-[0_25px_70px_rgba(0,0,0,0.45)] transition duration-500 hover:border-yellow-400/35"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[19px] bg-black">
                  <Image
                    src={imagemAtual}
                    alt=""
                    fill
                    aria-hidden="true"
                    sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) 540px, 540px"
                    className="scale-125 object-cover object-center opacity-25 blur-2xl"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.10),transparent_38%)]" />

                  <Image
                    src={imagemAtual}
                    alt={nome}
                    fill
                    priority
                    sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) 540px, 540px"
                    className="object-cover object-center transition duration-700 ease-out group-hover:scale-[1.025]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/[0.025]" />

                  <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-2 rounded-full border border-white/10 bg-black/65 px-3 py-2 text-[9px] font-black uppercase tracking-[0.14em] text-white/90 backdrop-blur-md sm:left-4 sm:top-4 sm:text-[10px]">
                    <FaGem className="text-yellow-400" size={10} />
                    Seleção Bold Parfum
                  </div>

                  <div className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-white/10 bg-black/65 px-3 py-2 text-[9px] font-bold text-zinc-300 backdrop-blur-md sm:bottom-4 sm:left-4 sm:text-[10px]">
                    <FaSearchPlus className="text-yellow-400" size={11} />
                    Clique para ampliar
                  </div>

                  <span className="pointer-events-none absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/75 text-white backdrop-blur-md transition duration-300 group-hover:border-yellow-400/40 group-hover:text-yellow-400 sm:bottom-4 sm:right-4 sm:h-11 sm:w-11">
                    <FaExpand size={14} />
                  </span>
                </div>
              </button>

              {possuiVariasImagens ? (
                <>
                  <button
                    type="button"
                    onClick={mostrarImagemAnterior}
                    aria-label="Mostrar imagem anterior"
                    className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/75 text-white backdrop-blur transition hover:border-yellow-400/40 hover:text-yellow-400 sm:hidden"
                  >
                    <FaChevronLeft size={12} />
                  </button>

                  <button
                    type="button"
                    onClick={mostrarProximaImagem}
                    aria-label="Mostrar próxima imagem"
                    className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/75 text-white backdrop-blur transition hover:border-yellow-400/40 hover:text-yellow-400 sm:hidden"
                  >
                    <FaChevronRight size={12} />
                  </button>
                </>
              ) : null}
            </div>

            {possuiVariasImagens ? (
              <div className="mt-3 grid grid-cols-4 gap-2 sm:hidden">
                {imagensValidas.slice(0, 4).map((imagem, index) => {
                  const selecionada = indiceAtual === index;

                  return (
                    <button
                      key={`${imagem}-${index}`}
                      type="button"
                      onClick={() => setIndiceAtual(index)}
                      aria-label={`Selecionar imagem ${index + 1} de ${nome}`}
                      aria-pressed={selecionada}
                      className={`relative aspect-[4/5] overflow-hidden rounded-xl border bg-zinc-950 p-1 transition duration-300 ${
                        selecionada
                          ? "border-yellow-400"
                          : "border-zinc-800"
                      }`}
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-lg bg-black">
                        <Image
                          src={imagem}
                          alt={`${nome} - imagem ${index + 1}`}
                          fill
                          sizes="25vw"
                          className="object-cover object-center"
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : null}

            <div className="mt-4 flex items-center justify-center gap-2 text-center text-[9px] font-semibold uppercase tracking-[0.12em] text-zinc-600 sm:text-[10px]">
              <span className="h-px w-6 bg-zinc-800" />
              Imagem ilustrativa do produto
              <span className="h-px w-6 bg-zinc-800" />
            </div>
          </div>
        </div>
      </section>

      {montado && lightboxAberto
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`Imagem ampliada de ${nome}`}
              onClick={() => setLightboxAberto(false)}
              className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/95 p-3 backdrop-blur-sm sm:p-6"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.06),transparent_42%)]" />

              <button
                type="button"
                onClick={() => setLightboxAberto(false)}
                aria-label="Fechar imagem ampliada"
                className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-black/80 text-white transition hover:border-yellow-400 hover:text-yellow-400 sm:right-6 sm:top-6"
              >
                <FaTimes size={17} />
              </button>

              {possuiVariasImagens ? (
                <>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      mostrarImagemAnterior();
                    }}
                    aria-label="Imagem anterior"
                    className="absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-700 bg-black/80 text-white transition hover:border-yellow-400 hover:text-yellow-400 sm:left-6"
                  >
                    <FaChevronLeft size={15} />
                  </button>

                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      mostrarProximaImagem();
                    }}
                    aria-label="Próxima imagem"
                    className="absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-700 bg-black/80 text-white transition hover:border-yellow-400 hover:text-yellow-400 sm:right-6"
                  >
                    <FaChevronRight size={15} />
                  </button>
                </>
              ) : null}

              <div
                className="relative flex h-[92vh] w-full max-w-6xl items-center justify-center"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={imagemAtual}
                    alt={`${nome} ampliado`}
                    fill
                    sizes="94vw"
                    className="object-contain drop-shadow-[0_30px_70px_rgba(0,0,0,0.7)]"
                  />
                </div>

                {possuiVariasImagens ? (
                  <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-[10px] font-bold text-zinc-300 backdrop-blur-md">
                    {indiceAtual + 1} de {imagensValidas.length}
                  </div>
                ) : null}
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}