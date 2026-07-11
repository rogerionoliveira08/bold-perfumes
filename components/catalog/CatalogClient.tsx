"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FaSearch, FaTimes } from "react-icons/fa";
import ProductCard from "@/components/products/ProductCard";
import Filters from "@/components/catalog/Filters";
import { produtos } from "@/data/produtos";
import type { Product } from "@/types/product";

type Ordenacao =
  | "relevancia"
  | "menor-preco"
  | "maior-preco"
  | "melhor-avaliacao"
  | "mais-vendidos"
  | "nome";

function normalizarTexto(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function criarTextoPesquisa(produto: Product) {
  return normalizarTexto(
    [
      produto.nome,
      produto.marca,
      produto.categoria,
      produto.genero,
      produto.familiaOlfativa,
      produto.inspiradoEm,
      produto.origem,
      produto.selo,
      produto.concentracao,
      produto.volume,
      produto.descricao,
      produto.preco.toString(),
      produto.notasTopo.join(" "),
      produto.notasCoracao.join(" "),
      produto.notasBase.join(" "),
      produto.ocasioes.join(" "),
    ]
      .filter(Boolean)
      .join(" "),
  );
}

export default function CatalogClient() {
  const searchParams = useSearchParams();
  const buscaInicial = searchParams.get("busca") ?? "";

  const [busca, setBusca] = useState(buscaInicial);
  const [marca, setMarca] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precoMaximo, setPrecoMaximo] = useState("");
  const [ordenacao, setOrdenacao] = useState<Ordenacao>("relevancia");

  useEffect(() => {
    setBusca(buscaInicial);
  }, [buscaInicial]);

  const produtosFiltrados = useMemo(() => {
    const termo = normalizarTexto(busca);

    const filtrados = produtos.filter((produto) => {
      const buscaOk =
        termo === "" || criarTextoPesquisa(produto).includes(termo);

      const marcaOk = marca === "" || produto.marca === marca;

      const categoriaOk =
        categoria === "" ||
        produto.categoria === categoria ||
        produto.genero === categoria;

      const precoOk =
        precoMaximo === "" || produto.preco <= Number(precoMaximo);

      return buscaOk && marcaOk && categoriaOk && precoOk;
    });

    return [...filtrados].sort((a, b) => {
      switch (ordenacao) {
        case "menor-preco":
          return a.preco - b.preco;

        case "maior-preco":
          return b.preco - a.preco;

        case "melhor-avaliacao":
          return b.avaliacao - a.avaliacao;

        case "mais-vendidos":
          return b.avaliacoes - a.avaliacoes;

        case "nome":
          return a.nome.localeCompare(b.nome, "pt-BR");

        case "relevancia":
        default: {
          if (!termo) return 0;

          const nomeA = normalizarTexto(a.nome);
          const nomeB = normalizarTexto(b.nome);

          const aComecaComTermo = nomeA.startsWith(termo);
          const bComecaComTermo = nomeB.startsWith(termo);

          if (aComecaComTermo && !bComecaComTermo) return -1;
          if (!aComecaComTermo && bComecaComTermo) return 1;

          return b.avaliacoes - a.avaliacoes;
        }
      }
    });
  }, [busca, marca, categoria, precoMaximo, ordenacao]);

  const filtrosAtivos =
    busca !== "" ||
    marca !== "" ||
    categoria !== "" ||
    precoMaximo !== "";

  function limparFiltros() {
    setBusca("");
    setMarca("");
    setCategoria("");
    setPrecoMaximo("");
    setOrdenacao("relevancia");
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
        <div className="mb-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-4 sm:p-5">
          <div className="relative">
            <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />

            <input
              type="search"
              value={busca}
              onChange={(evento) => setBusca(evento.target.value)}
              placeholder="Pesquise por nome, marca, inspiração, família olfativa..."
              className="w-full rounded-xl border border-zinc-700 bg-black py-3.5 pl-11 pr-12 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-yellow-400"
            />

            {busca && (
              <button
                type="button"
                onClick={() => setBusca("")}
                aria-label="Limpar pesquisa"
                className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-zinc-500 transition hover:bg-zinc-800 hover:text-white"
              >
                <FaTimes size={13} />
              </button>
            )}
          </div>

          <p className="mt-3 text-xs leading-5 text-zinc-500">
            Você pode pesquisar por perfume, marca, gênero, inspiração, notas,
            ocasião de uso ou família olfativa.
          </p>
        </div>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-yellow-400">
              Nossa seleção
            </p>

            <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
              Catálogo de Perfumes
            </h2>

            <p className="mt-2 text-sm text-zinc-500">
              {produtosFiltrados.length}{" "}
              {produtosFiltrados.length === 1
                ? "perfume encontrado"
                : "perfumes encontrados"}
            </p>
          </div>

          <div className="w-full sm:w-auto">
            <label
              htmlFor="ordenacao"
              className="mb-1.5 block text-xs font-semibold text-zinc-500"
            >
              Ordenar por
            </label>

            <select
              id="ordenacao"
              value={ordenacao}
              onChange={(evento) =>
                setOrdenacao(evento.target.value as Ordenacao)
              }
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition focus:border-yellow-400 sm:min-w-[210px]"
            >
              <option value="relevancia">Relevância</option>
              <option value="mais-vendidos">Mais vendidos</option>
              <option value="menor-preco">Menor preço</option>
              <option value="maior-preco">Maior preço</option>
              <option value="melhor-avaliacao">Melhor avaliação</option>
              <option value="nome">Nome: A–Z</option>
            </select>
          </div>
        </div>

        {filtrosAtivos && (
          <div className="mb-5 flex flex-wrap items-center gap-2">
            {busca && (
              <button
                type="button"
                onClick={() => setBusca("")}
                className="flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/5 px-3 py-2 text-xs font-semibold text-yellow-400"
              >
                Pesquisa: {busca}
                <FaTimes size={9} />
              </button>
            )}

            {marca && (
              <button
                type="button"
                onClick={() => setMarca("")}
                className="flex items-center gap-2 rounded-full border border-zinc-700 px-3 py-2 text-xs text-zinc-300"
              >
                Marca: {marca}
                <FaTimes size={9} />
              </button>
            )}

            {categoria && (
              <button
                type="button"
                onClick={() => setCategoria("")}
                className="flex items-center gap-2 rounded-full border border-zinc-700 px-3 py-2 text-xs text-zinc-300"
              >
                Categoria: {categoria}
                <FaTimes size={9} />
              </button>
            )}

            {precoMaximo && (
              <button
                type="button"
                onClick={() => setPrecoMaximo("")}
                className="flex items-center gap-2 rounded-full border border-zinc-700 px-3 py-2 text-xs text-zinc-300"
              >
                Até R$ {precoMaximo}
                <FaTimes size={9} />
              </button>
            )}

            <button
              type="button"
              onClick={limparFiltros}
              className="px-3 py-2 text-xs font-bold text-red-400 transition hover:text-red-300"
            >
              Limpar tudo
            </button>
          </div>
        )}

        {produtosFiltrados.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 2xl:grid-cols-4">
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
                inspiradoEm={produto.inspiradoEm}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-yellow-400">
              <FaSearch size={20} />
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Nenhum perfume encontrado
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-400">
              Tente pesquisar por outro nome, marca, inspiração ou alterar os
              filtros selecionados.
            </p>

            <button
              type="button"
              onClick={limparFiltros}
              className="mt-6 rounded-full bg-yellow-400 px-6 py-3 font-bold text-black transition hover:bg-yellow-300"
            >
              Limpar pesquisa e filtros
            </button>
          </div>
        )}
      </section>
    </div>
  );
}