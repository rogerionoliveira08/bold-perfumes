"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPause,
  FaPlay,
} from "react-icons/fa";
import ProductCard from "@/components/products/ProductCard";
import type { Product } from "@/types/product";

type ProductCarouselProps = {
  eyebrow: string;
  title: string;
  description: string;
  produtos: Product[];
};

export default function ProductCarousel({
  eyebrow,
  title,
  description,
  produtos,
}: ProductCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [autoplayAtivo, setAutoplayAtivo] = useState(true);

  function moverCarrossel(direcao: "anterior" | "proximo") {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const distancia = Math.max(carousel.clientWidth * 0.82, 260);

    carousel.scrollBy({
      left: direcao === "proximo" ? distancia : -distancia,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    if (!autoplayAtivo || produtos.length <= 1) {
      return;
    }

    const intervalo = window.setInterval(() => {
      const carousel = carouselRef.current;

      if (!carousel) {
        return;
      }

      const chegouAoFinal =
        carousel.scrollLeft + carousel.clientWidth >=
        carousel.scrollWidth - 20;

      if (chegouAoFinal) {
        carousel.scrollTo({
          left: 0,
          behavior: "smooth",
        });

        return;
      }

      carousel.scrollBy({
        left: Math.max(carousel.clientWidth * 0.82, 260),
        behavior: "smooth",
      });
    }, 5000);

    return () => window.clearInterval(intervalo);
  }, [autoplayAtivo, produtos.length]);

  if (produtos.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden border-y border-zinc-900 bg-zinc-950/70 py-12 text-white sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.07),transparent_38%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="mb-7 flex items-end justify-between gap-5 sm:mb-9">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-yellow-400">
              {eyebrow}
            </p>

            <h2 className="mt-2 text-3xl font-black text-white sm:text-4xl">
              {title}
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base">
              {description}
            </p>
          </div>

          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => setAutoplayAtivo((estadoAtual) => !estadoAtual)}
              aria-label={
                autoplayAtivo
                  ? "Pausar carrossel"
                  : "Reproduzir carrossel"
              }
              title={
                autoplayAtivo
                  ? "Pausar carrossel"
                  : "Reproduzir carrossel"
              }
              className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-black text-zinc-300 transition hover:border-yellow-400 hover:text-yellow-400"
            >
              {autoplayAtivo ? (
                <FaPause size={12} />
              ) : (
                <FaPlay size={12} />
              )}
            </button>

            <button
              type="button"
              onClick={() => moverCarrossel("anterior")}
              aria-label="Ver produtos anteriores"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-black text-white transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
            >
              <FaChevronLeft size={13} />
            </button>

            <button
              type="button"
              onClick={() => moverCarrossel("proximo")}
              aria-label="Ver próximos produtos"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-yellow-400 bg-yellow-400 text-black transition hover:bg-yellow-300"
            >
              <FaChevronRight size={13} />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          onMouseEnter={() => setAutoplayAtivo(false)}
          onMouseLeave={() => setAutoplayAtivo(true)}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 sm:gap-5 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-zinc-900 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-yellow-400"
        >
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="w-[78%] shrink-0 snap-start min-[430px]:w-[62%] sm:w-[46%] lg:w-[calc(25%-15px)]"
            >
              <ProductCard
                id={produto.id}
                slug={produto.slug}
                nome={produto.nome}
                marca={produto.marca}
                preco={produto.preco}
                imagem={produto.imagem}
                categoria={produto.categoria}
                selo={produto.selo}
                avaliacao={produto.avaliacao}
                avaliacoes={produto.avaliacoes}
                inspiradoEm={produto.inspiradoEm}
              />
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 sm:hidden">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => moverCarrossel("anterior")}
              aria-label="Ver produtos anteriores"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-black text-white"
            >
              <FaChevronLeft size={12} />
            </button>

            <button
              type="button"
              onClick={() => moverCarrossel("proximo")}
              aria-label="Ver próximos produtos"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-black"
            >
              <FaChevronRight size={12} />
            </button>
          </div>

          <Link
            href="/produtos"
            className="rounded-xl border border-yellow-400 px-4 py-2.5 text-xs font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            Ver catálogo
          </Link>
        </div>
      </div>
    </section>
  );
}