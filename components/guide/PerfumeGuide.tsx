"use client";

import { useMemo, useState } from "react";
import {
  FaBookOpen,
  FaChevronDown,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import {
  categoriasGuia,
  termosGuia,
  type CategoriaGuia,
} from "@/data/guiaPerfumaria";

type FiltroCategoria = "Todos" | CategoriaGuia;

function normalizarTexto(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export default function PerfumeGuide() {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] =
    useState<FiltroCategoria>("Todos");
  const [termoAberto, setTermoAberto] = useState<string | null>(
    null,
  );

  const termosFiltrados = useMemo(() => {
    const buscaNormalizada = normalizarTexto(busca.trim());

    return termosGuia.filter((item) => {
      const pertenceCategoria =
        categoria === "Todos" || item.categoria === categoria;

      const conteudoPesquisavel = normalizarTexto(
        [
          item.termo,
          item.categoria,
          item.resumo,
          item.descricao,
          item.efeito,
          item.indicadoPara ?? "",
          ...item.palavrasChave,
        ].join(" "),
      );

      const correspondeBusca =
        buscaNormalizada === "" ||
        conteudoPesquisavel.includes(buscaNormalizada);

      return pertenceCategoria && correspondeBusca;
    });
  }, [busca, categoria]);

  const destaques = termosGuia
    .filter((item) => item.destaque)
    .slice(0, 6);

  function selecionarCategoria(novaCategoria: FiltroCategoria) {
    setCategoria(novaCategoria);
    setTermoAberto(null);
  }

  function limparFiltros() {
    setBusca("");
    setCategoria("Todos");
    setTermoAberto(null);
  }

  function abrirTermo(id: string) {
    setTermoAberto((atual) => (atual === id ? null : id));
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-zinc-900 bg-zinc-950 py-14 sm:py-20">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-400/10 text-yellow-400">
              <FaBookOpen size={24} />
            </div>

            <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.25em] text-yellow-400">
              Conhecimento que ajuda você a escolher
            </p>

            <h1 className="mt-3 text-3xl font-black sm:text-5xl">
              Guia da Perfumaria
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              Descubra ingredientes, famílias olfativas, concentrações
              e expressões utilizadas no universo dos perfumes. Explore
              as categorias ou pesquise o termo que deseja conhecer.
            </p>

            <div className="relative mx-auto mt-8 max-w-2xl">
              <FaSearch
                className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400"
                size={17}
              />

              <input
                type="search"
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
                placeholder="Busque por oud, almíscar, fixação..."
                className="w-full rounded-2xl border border-zinc-700 bg-black py-4 pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-yellow-400"
                aria-label="Pesquisar no Guia da Perfumaria"
              />

              {busca && (
                <button
                  type="button"
                  onClick={() => setBusca("")}
                  aria-label="Limpar pesquisa"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 transition hover:text-white"
                >
                  <FaTimes size={16} />
                </button>
              )}
            </div>

            <p className="mt-3 text-xs text-zinc-500">
              {termosGuia.length} assuntos disponíveis para você
              explorar
            </p>
          </div>
        </div>
      </section>

      {!busca && categoria === "Todos" && (
        <section className="border-b border-zinc-900 bg-black py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
                Comece por aqui
              </p>

              <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                Assuntos essenciais
              </h2>

              <p className="mt-2 text-sm text-zinc-400">
                Selecionamos alguns dos termos mais importantes para
                quem está começando no mundo da perfumaria.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {destaques.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setCategoria(item.categoria);
                    setTermoAberto(item.id);

                    setTimeout(() => {
                      document
                        .getElementById("conteudos-guia")
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }, 50);
                  }}
                  className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-left transition hover:-translate-y-1 hover:border-yellow-400/50"
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-yellow-400">
                    {item.categoria}
                  </span>

                  <h3 className="mt-2 text-lg font-black text-white">
                    {item.termo}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {item.resumo}
                  </p>

                  <span className="mt-4 inline-block text-xs font-bold text-yellow-400">
                    Ler explicação →
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      <section
        id="conteudos-guia"
        className="scroll-mt-32 bg-zinc-950/60 py-12 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
              Navegue por assunto
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              O que você deseja conhecer?
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Escolha uma categoria para ver os conteúdos relacionados.
            </p>
          </div>

          <div className="mt-6 flex gap-3 overflow-x-auto pb-3">
            {categoriasGuia.map((item) => {
              const selecionada = categoria === item.nome;

              return (
                <button
                  key={item.nome}
                  type="button"
                  onClick={() => selecionarCategoria(item.nome)}
                  title={item.descricao}
                  className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-bold transition sm:text-sm ${
                    selecionada
                      ? "border-yellow-400 bg-yellow-400 text-black"
                      : "border-zinc-700 bg-black text-zinc-300 hover:border-yellow-400 hover:text-yellow-400"
                  }`}
                >
                  {item.nome}
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-2 border-b border-zinc-800 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-black text-white">
                {categoria === "Todos"
                  ? "Todos os assuntos"
                  : categoria}
              </h3>

              <p className="mt-1 text-xs text-zinc-500">
                {termosFiltrados.length}{" "}
                {termosFiltrados.length === 1
                  ? "resultado encontrado"
                  : "resultados encontrados"}
              </p>
            </div>

            {(busca || categoria !== "Todos") && (
              <button
                type="button"
                onClick={limparFiltros}
                className="mt-2 w-fit text-xs font-bold text-yellow-400 transition hover:text-yellow-300 sm:mt-0"
              >
                Limpar filtros
              </button>
            )}
          </div>

          {termosFiltrados.length > 0 ? (
            <div className="mt-6 grid items-start gap-4 lg:grid-cols-2">
              {termosFiltrados.map((item) => {
                const aberto = termoAberto === item.id;

                return (
                  <article
                    key={item.id}
                    id={item.id}
                    className={`scroll-mt-40 overflow-hidden rounded-2xl border bg-black transition ${
                      aberto
                        ? "border-yellow-400/60"
                        : "border-zinc-800 hover:border-zinc-700"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => abrirTermo(item.id)}
                      aria-expanded={aberto}
                      className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
                    >
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-yellow-400">
                          {item.categoria}
                        </span>

                        <h3 className="mt-2 text-lg font-black text-white sm:text-xl">
                          {item.termo}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-zinc-400">
                          {item.resumo}
                        </p>
                      </div>

                      <span
                        className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition ${
                          aberto
                            ? "rotate-180 border-yellow-400 bg-yellow-400 text-black"
                            : "border-zinc-700 text-yellow-400"
                        }`}
                      >
                        <FaChevronDown size={13} />
                      </span>
                    </button>

                    {aberto && (
                      <div className="border-t border-zinc-800 px-5 pb-6 pt-5 sm:px-6">
                        <div>
                          <p className="text-xs font-black uppercase tracking-wider text-white">
                            O que é?
                          </p>

                          <p className="mt-2 text-sm leading-7 text-zinc-400">
                            {item.descricao}
                          </p>
                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-4">
                          <p className="text-xs font-black uppercase tracking-wider text-yellow-400">
                            O que acrescenta ao perfume?
                          </p>

                          <p className="mt-2 text-sm leading-7 text-zinc-300">
                            {item.efeito}
                          </p>
                        </div>

                        {item.indicadoPara && (
                          <div className="mt-5">
                            <p className="text-xs font-black uppercase tracking-wider text-white">
                              Para quem é indicado?
                            </p>

                            <p className="mt-2 text-sm leading-7 text-zinc-400">
                              {item.indicadoPara}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-zinc-800 bg-black px-5 py-12 text-center">
              <FaSearch
                className="mx-auto text-zinc-600"
                size={26}
              />

              <h3 className="mt-4 text-lg font-black">
                Nenhum assunto encontrado
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Tente pesquisar outro termo ou visualizar todas as
                categorias.
              </p>

              <button
                type="button"
                onClick={limparFiltros}
                className="mt-5 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-black text-black transition hover:bg-yellow-300"
              >
                Ver todos os assuntos
              </button>
            </div>
          )}

          <div className="mt-10 rounded-2xl border border-zinc-800 bg-black p-5 text-center sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
              Dica da Bold Parfum
            </p>

            <h3 className="mt-3 text-xl font-black sm:text-2xl">
              Cada perfume pode se comportar de maneira diferente
            </h3>

            <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-zinc-400">
              Clima, hidratação, quantidade aplicada e características
              individuais podem influenciar a percepção, a projeção e a
              duração de uma fragrância. Use este guia para conhecer os
              conceitos e encontrar perfumes que combinem com você.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}