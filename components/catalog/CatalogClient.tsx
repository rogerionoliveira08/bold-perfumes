"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  FaFilter,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
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

const QUANTIDADE_INICIAL = 12;
const QUANTIDADE_ADICIONAL = 12;

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
  const categoriaInicial = searchParams.get("categoria") ?? "";
  const filtroInicial = searchParams.get("filtro") ?? "";

  const [busca, setBusca] = useState(buscaInicial);
  const [familia, setFamilia] = useState<string[]>([]);
  const [precoMaximo, setPrecoMaximo] = useState("");
  const [filtroEspecial, setFiltroEspecial] =
    useState(filtroInicial);
  const [ordenacao, setOrdenacao] = useState<Ordenacao>(
    filtroInicial === "mais-vendidos"
      ? "mais-vendidos"
      : "relevancia",
  );
  const [quantidadeVisivel, setQuantidadeVisivel] =
    useState(QUANTIDADE_INICIAL);
  const [filtrosMobileAbertos, setFiltrosMobileAbertos] =
    useState(false);

  useEffect(() => {
    setBusca(buscaInicial);
    setFiltroEspecial(filtroInicial);

    if (filtroInicial === "mais-vendidos") {
      setOrdenacao("mais-vendidos");
    }
  }, [buscaInicial, categoriaInicial, filtroInicial]);

  useEffect(() => {
    setQuantidadeVisivel(QUANTIDADE_INICIAL);
  }, [
    busca,
    familia,
    precoMaximo,
    filtroEspecial,
    ordenacao,
  ]);

  const produtosFiltrados = useMemo(() => {
    const termo = normalizarTexto(busca);

    const filtrados = produtos.filter((produto) => {
      const buscaOk =
        termo === "" ||
        criarTextoPesquisa(produto).includes(termo);

      // Filtro simplificado de famílias olfativas (frescos, doces, amadeirados, florais, intensos)
      const familiaLower = normalizarTexto(produto.familiaOlfativa);
      const familiaOk =
        familia.length === 0 ||
        familia.some((f) => {
          if (f === "frescos") return familiaLower.includes("fresc") || familiaLower.includes("citric") || familiaLower.includes("aqu");
          if (f === "doces") return familiaLower.includes("doc") || familiaLower.includes("gourmand") || familiaLower.includes("vanil");
          if (f === "amadeirados") return familiaLower.includes("amad") || familiaLower.includes("wood");
          if (f === "florais") return familiaLower.includes("floral") || familiaLower.includes("flor");
          if (f === "intensos") return familiaLower.includes("orient") || familiaLower.includes("especiad") || familiaLower.includes("intens") || familiaLower.includes("couro");
          return false;
        });

      // Faixas de preço exclusivas
      let precoOk = true;
      if (precoMaximo === "250") {
        precoOk = produto.preco <= 250;
      } else if (precoMaximo === "350") {
        precoOk = produto.preco > 250 && produto.preco <= 350;
      } else if (precoMaximo === "mais") {
        precoOk = produto.preco > 350;
      }

      const seloNormalizado = normalizarTexto(
        produto.selo ?? "",
      );

      const filtroEspecialOk =
        filtroEspecial !== "promocoes" ||
        seloNormalizado.includes("oferta") ||
        seloNormalizado.includes("promocao");

      return (
        buscaOk &&
        familiaOk &&
        precoOk &&
        filtroEspecialOk
      );
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
          if (!termo) {
            return b.avaliacoes - a.avaliacoes;
          }

          const nomeA = normalizarTexto(a.nome);
          const nomeB = normalizarTexto(b.nome);

          const aComecaComTermo = nomeA.startsWith(termo);
          const bComecaComTermo = nomeB.startsWith(termo);

          if (aComecaComTermo && !bComecaComTermo) {
            return -1;
          }

          if (!aComecaComTermo && bComecaComTermo) {
            return 1;
          }

          return b.avaliacoes - a.avaliacoes;
        }
      }
    });
  }, [
    busca,
    familia,
    precoMaximo,
    filtroEspecial,
    ordenacao,
  ]);

  const produtosVisiveis = produtosFiltrados.slice(
    0,
    quantidadeVisivel,
  );

  const existemMaisProdutos =
    quantidadeVisivel < produtosFiltrados.length;

  const filtrosAtivos =
    busca !== "" ||
    familia.length > 0 ||
    precoMaximo !== "" ||
    filtroEspecial !== "";

  const quantidadeFiltrosAtivos =
    familia.length + (precoMaximo !== "" ? 1 : 0) + (filtroEspecial !== "" ? 1 : 0);

  function limparFiltros() {
    setBusca("");
    setFamilia([]);
    setPrecoMaximo("");
    setFiltroEspecial("");
    setOrdenacao("relevancia");
  }

  return (
    <div className="grid items-start gap-7 lg:grid-cols-[260px_minmax(0,1fr)]">
      <Filters
        familia={familia}
        precoMaximo={precoMaximo}
        abertoMobile={filtrosMobileAbertos}
        setFamilia={setFamilia}
        setPrecoMaximo={setPrecoMaximo}
        fecharMobile={() => setFiltrosMobileAbertos(false)}
        limparFiltros={limparFiltros}
      />

      <section className="min-w-0">
        <div className="border border-zinc-200 bg-zinc-50 p-4 sm:p-5">
          <div className="relative">
            <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />

            <input
              type="search"
              value={busca}
              onChange={(evento) =>
                setBusca(evento.target.value)
              }
              placeholder="Pesquise por perfume, marca ou inspiração..."
              className="w-full border border-zinc-300 bg-white py-3.5 pl-11 pr-12 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-black focus:ring-2 focus:ring-black/10"
            />

            {busca && (
              <button
                type="button"
                onClick={() => setBusca("")}
                aria-label="Limpar pesquisa"
                className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-zinc-500 transition hover:bg-zinc-950 hover:text-white"
              >
                <FaTimes size={13} />
              </button>
            )}
          </div>

          <p className="mt-3 text-xs leading-5 text-zinc-500">
            Pesquise por nome, marca, gênero, inspiração, notas ou
            família olfativa.
          </p>
        </div>

        <div className="my-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-zinc-500">
              Nossa seleção
            </p>

            <h2 className="mt-1 text-2xl font-black text-zinc-950 sm:text-3xl">
              Catálogo de perfumes
            </h2>

            <p className="mt-2 text-sm text-zinc-500">
              {produtosFiltrados.length}{" "}
              {produtosFiltrados.length === 1
                ? "perfume encontrado"
                : "perfumes encontrados"}
            </p>
          </div>

          <div className="flex w-full gap-2 sm:w-auto">
            <button
              type="button"
              onClick={() =>
                setFiltrosMobileAbertos(true)
              }
              className="relative flex min-h-12 flex-1 items-center justify-center gap-2 border border-zinc-300 bg-white px-4 py-3 text-sm font-bold text-zinc-950 transition hover:border-black lg:hidden"
            >
              <FaFilter size={13} />
              Filtros

              {quantidadeFiltrosAtivos > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] font-black text-white">
                  {quantidadeFiltrosAtivos}
                </span>
              )}
            </button>

            <div className="flex-1 sm:flex-none">
              <label htmlFor="ordenacao" className="sr-only">
                Ordenar por
              </label>

              <select
                id="ordenacao"
                value={ordenacao}
                onChange={(evento) =>
                  setOrdenacao(
                    evento.target.value as Ordenacao,
                  )
                }
                className="min-h-12 w-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10 sm:min-w-[210px]"
              >
                <option value="relevancia">
                  Relevância
                </option>

                <option value="mais-vendidos">
                  Mais vendidos
                </option>

                <option value="menor-preco">
                  Menor preço
                </option>

                <option value="maior-preco">
                  Maior preço
                </option>

                <option value="melhor-avaliacao">
                  Melhor avaliação
                </option>

                <option value="nome">
                  Nome: A–Z
                </option>
              </select>
            </div>
          </div>
        </div>

        {filtrosAtivos && (
          <div className="mb-5 flex flex-wrap items-center gap-2">
            {busca && (
              <FilterChip
                label={`Pesquisa: ${busca}`}
                onRemove={() => setBusca("")}
                destaque
              />
            )}

            {familia.map((f) => (
              <FilterChip
                key={f}
                label={`Estilo: ${f}`}
                onRemove={() =>
                  setFamilia(familia.filter((item) => item !== f))
                }
              />
            ))}

            {precoMaximo && (
              <FilterChip
                label={`Preço: ${
                  precoMaximo === "250"
                    ? "Até R$ 250"
                    : precoMaximo === "350"
                    ? "R$ 251 a R$ 350"
                    : "Acima de R$ 350"
                }`}
                onRemove={() => setPrecoMaximo("")}
              />
            )}

            {filtroEspecial === "mais-vendidos" && (
              <FilterChip
                label="Mais vendidos"
                onRemove={() => {
                  setFiltroEspecial("");
                  setOrdenacao("relevancia");
                }}
              />
            )}

            {filtroEspecial === "promocoes" && (
              <FilterChip
                label="Ofertas"
                onRemove={() => setFiltroEspecial("")}
              />
            )}

            <button
              type="button"
              onClick={limparFiltros}
              className="px-3 py-2 text-xs font-bold text-red-600 transition hover:text-red-700"
            >
              Limpar tudo
            </button>
          </div>
        )}

        {produtosFiltrados.length > 0 ? (
          <>
            {/* Grid ajustado: 1 coluna em mobile estreito, 2 colunas em tablets pequenos, 3 a 4 colunas em telas maiores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
              {produtosVisiveis.map((produto) => (
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

            {existemMaisProdutos && (
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={() =>
                    setQuantidadeVisivel(
                      (quantidadeAtual) =>
                        quantidadeAtual +
                        QUANTIDADE_ADICIONAL,
                    )
                  }
                  className="min-h-12 border border-zinc-950 bg-white px-8 py-3 text-sm font-bold text-zinc-950 transition hover:bg-zinc-950 hover:text-white"
                >
                  Carregar mais perfumes
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="border border-zinc-200 bg-zinc-50 px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center bg-black text-white">
              <FaSearch size={20} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-zinc-950">
              Nenhum perfume encontrado
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-600">
              Tente pesquisar outro nome, explorar uma categoria ou
              remover alguns filtros.
            </p>

            <button
              type="button"
              onClick={limparFiltros}
              className="mt-6 bg-black px-6 py-3 font-bold text-white transition hover:bg-zinc-800"
            >
              Limpar pesquisa e filtros
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

function FilterChip({
  label,
  onRemove,
  destaque = false,
}: {
  label: string;
  onRemove: () => void;
  destaque?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onRemove}
      className={`flex max-w-full items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition ${
        destaque
          ? "border-black bg-black text-white"
          : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-500"
      }`}
    >
      <span className="max-w-[220px] truncate">
        {label}
      </span>

      <FaTimes size={9} />
    </button>
  );
}