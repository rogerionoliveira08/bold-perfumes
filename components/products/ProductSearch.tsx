"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { produtos } from "@/data/produtos";

export default function ProductSearch() {
  const [busca, setBusca] = useState("");

  const produtosFiltrados = produtos.filter((produto) => {
    const termo = busca.toLowerCase();

    return (
      produto.nome.toLowerCase().includes(termo) ||
      produto.marca.toLowerCase().includes(termo) ||
      produto.categoria.toLowerCase().includes(termo)
    );
  });

  return (
    <section className="bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-yellow-400 md:text-5xl">
            Encontre seu perfume
          </h2>

          <input
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar por nome, marca ou categoria..."
            className="mt-6 w-full max-w-xl rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-4 text-white outline-none transition focus:border-yellow-400"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {produtosFiltrados.map((produto) => (
            <ProductCard
              key={produto.id}
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
            />
          ))}
        </div>

        {produtosFiltrados.length === 0 && (
          <p className="mt-10 text-center text-zinc-400">
            Nenhum perfume encontrado.
          </p>
        )}
      </div>
    </section>
  );
}