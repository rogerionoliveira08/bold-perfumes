"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  FaChevronLeft,
  FaChevronRight,
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

  if (produtos.length === 0) {
    return null;
  }

  return (
    <section className="border-b border-zinc-200 bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="mb-7 flex items-end justify-between gap-5 sm:mb-9">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-zinc-500">
              text-zinc-500
            </p>

            <h2 className="mt-2 text-3xl font-black text-zinc-950 sm:text-4xl">
              {title}
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-base">
              {description}
            </p>
          </div>

          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <Link
              href="/produtos"
              className="mr-2 border border-zinc-950 px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-zinc-950 hover:text-white"
            >
              Ver catálogo
            </Link>

            <button
              type="button"
              onClick={() => moverCarrossel("anterior")}
              aria-label="Ver produtos anteriores"
              className="flex h-11 w-11 items-center justify-center border border-zinc-300 bg-white text-zinc-950 transition hover:border-zinc-950 hover:bg-zinc-100"
            >
              <FaChevronLeft size={13} />
            </button>

            <button
              type="button"
              onClick={() => moverCarrossel("proximo")}
              aria-label="Ver próximos produtos"
              className="flex h-11 w-11 items-center justify-center bg-black text-white transition hover:bg-zinc-800"
            >
              <FaChevronRight size={13} />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 sm:gap-5 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-zinc-100 [&::-webkit-scrollbar-thumb]:bg-black"
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
              className="flex h-11 w-11 items-center justify-center border border-zinc-300 bg-white text-zinc-950 transition hover:border-zinc-950"
            >
              <FaChevronLeft size={12} />
            </button>

            <button
              type="button"
              onClick={() => moverCarrossel("proximo")}
              aria-label="Ver próximos produtos"
              className="flex h-11 w-11 items-center justify-center bg-black text-white transition hover:bg-zinc-800"
            >
              <FaChevronRight size={12} />
            </button>
          </div>

          <Link
            href="/produtos"
            className="border border-zinc-950 px-4 py-3 text-xs font-bold text-zinc-950 transition hover:bg-zinc-950 hover:text-white"
          >
            Ver catálogo
          </Link>
        </div>
      </div>
    </section>
  );
}