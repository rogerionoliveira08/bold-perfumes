"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/products/ProductCard";
import Filters from "@/components/catalog/Filters";
import { produtos } from "@/data/produtos";

export default function CatalogClient() {
  const [marca, setMarca] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precoMaximo, setPrecoMaximo] = useState("");

  const produtosFiltrados = useMemo(() => {
    return produtos.filter((produto) => {
      const marcaOk = marca === "" || produto.marca === marca;
      const categoriaOk =
        categoria === "" || produto.categoria === categoria;
      const precoOk =
        precoMaximo === "" || produto.preco <= Number(precoMaximo);

      return marcaOk && categoriaOk && precoOk;
    });
  }, [marca, categoria, precoMaximo]);

  function limparFiltros() {
    setMarca("");
    setCategoria("");
    setPrecoMaximo("");
  }

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
      <Filters
        marca={marca}
        categoria={categoria}
        precoMaximo={precoMaximo}
        setMarca={setMarca}
        setCategoria={setCategoria}
        setPrecoMaximo={setPrecoMaximo}
        limparFiltros={limparFiltros}
      />

      <section className="min-w-0">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-yellow-400">
              Nossa seleção
            </p>

            <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
              Catálogo de Perfumes
            </h2>
          </div>

          <p className="text-sm text-zinc-400">
            {produtosFiltrados.length}{" "}
            {produtosFiltrados.length === 1
              ? "perfume encontrado"
              : "perfumes encontrados"}
          </p>
        </div>

        {produtosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
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
        ) : (
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 px-6 py-16 text-center">
            <h3 className="text-xl font-bold">
              Nenhum perfume encontrado
            </h3>

            <p className="mt-2 text-zinc-400">
              Tente alterar os filtros para visualizar outros produtos.
            </p>

            <button
              type="button"
              onClick={limparFiltros}
              className="mt-6 rounded-full bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </section>
    </div>
  );
}