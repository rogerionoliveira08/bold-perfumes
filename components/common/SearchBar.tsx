"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import { produtos } from "@/data/produtos";
import type { Product } from "@/types/product";

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

export default function SearchBar() {
  const router = useRouter();

  const areaBuscaRef =
    useRef<HTMLDivElement>(null);

  const [busca, setBusca] = useState("");
  const [aberto, setAberto] =
    useState(false);

  const termo = normalizarTexto(busca);

  const resultados = useMemo(() => {
    if (termo.length < 2) {
      return [];
    }

    return produtos
      .filter((produto) =>
        criarTextoPesquisa(produto).includes(
          termo,
        ),
      )
      .sort((a, b) => {
        const nomeA = normalizarTexto(a.nome);
        const nomeB = normalizarTexto(b.nome);

        const aComecaComTermo =
          nomeA.startsWith(termo);

        const bComecaComTermo =
          nomeB.startsWith(termo);

        if (
          aComecaComTermo &&
          !bComecaComTermo
        ) {
          return -1;
        }

        if (
          !aComecaComTermo &&
          bComecaComTermo
        ) {
          return 1;
        }

        return a.nome.localeCompare(
          b.nome,
          "pt-BR",
        );
      });
  }, [termo]);

  useEffect(() => {
    function fecharAoClicarFora(
      evento: MouseEvent,
    ) {
      if (
        areaBuscaRef.current &&
        !areaBuscaRef.current.contains(
          evento.target as Node,
        )
      ) {
        setAberto(false);
      }
    }

    document.addEventListener(
      "mousedown",
      fecharAoClicarFora,
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        fecharAoClicarFora,
      );
    };
  }, []);

  function limparBusca() {
    setBusca("");
    setAberto(false);
  }

  function pesquisarCatalogo() {
    if (!termo) {
      return;
    }

    setAberto(false);

    router.push(
      `/produtos?busca=${encodeURIComponent(
        busca.trim(),
      )}`,
    );
  }

  function enviarBusca(
    evento: React.FormEvent<HTMLFormElement>,
  ) {
    evento.preventDefault();
    pesquisarCatalogo();
  }

  const precoFormatado = (valor: number) =>
    valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <div
      ref={areaBuscaRef}
      className="relative w-full"
    >
      <form
        onSubmit={enviarBusca}
        className="relative"
      >
        <input
          type="search"
          placeholder="Buscar perfume, marca ou inspiração"
          value={busca}
          onFocus={() => setAberto(true)}
          onChange={(evento) => {
            setBusca(evento.target.value);
            setAberto(true);
          }}
          className="min-h-11 w-full rounded-full border border-zinc-300 bg-zinc-50 py-2.5 pl-5 pr-20 text-sm font-normal text-zinc-950 outline-none transition placeholder:text-zinc-500 focus:border-zinc-950 focus:bg-white"
        />

        {busca && (
          <button
            type="button"
            onClick={limparBusca}
            aria-label="Limpar pesquisa"
            className="absolute right-11 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-zinc-400 transition hover:bg-zinc-200 hover:text-zinc-950"
          >
            <FaTimes size={12} />
          </button>
        )}

        <button
          type="submit"
          aria-label="Pesquisar"
          className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-zinc-950 transition hover:bg-zinc-200"
        >
          <FaSearch size={17} />
        </button>
      </form>

      {aberto && termo.length >= 2 && (
        <div className="absolute left-0 top-[calc(100%+8px)] z-[100] max-h-[70vh] w-full overflow-y-auto border border-zinc-200 bg-white shadow-xl">
          {resultados.length > 0 ? (
            <>
              <div className="border-b border-zinc-200 px-4 py-3">
                <p className="text-xs font-normal text-zinc-500">
                  {resultados.length}{" "}
                  {resultados.length === 1
                    ? "perfume encontrado"
                    : "perfumes encontrados"}
                </p>
              </div>

              <div>
                {resultados
                  .slice(0, 6)
                  .map((produto) => (
                    <Link
                      key={produto.id}
                      href={`/produto/${produto.slug}`}
                      onClick={limparBusca}
                      className="flex items-center gap-3 border-b border-zinc-200 px-3 py-3 transition last:border-b-0 hover:bg-zinc-50"
                    >
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden border border-zinc-200 bg-white">
                        <Image
                          src={produto.imagem}
                          alt={produto.nome}
                          fill
                          sizes="56px"
                          className="object-cover object-center"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-zinc-950">
                          {produto.nome}
                        </p>

                        <p className="mt-0.5 truncate text-xs font-normal text-zinc-500">
                          {produto.marca} ·{" "}
                          {
                            produto.familiaOlfativa
                          }
                        </p>

                        {produto.inspiradoEm && (
                          <p className="mt-0.5 truncate text-[11px] font-normal text-brand-pink">
                            Inspirado em{" "}
                            {
                              produto.inspiradoEm
                            }
                          </p>
                        )}
                      </div>

                      <p className="shrink-0 text-xs font-semibold text-zinc-950">
                        {precoFormatado(
                          produto.preco,
                        )}
                      </p>
                    </Link>
                  ))}
              </div>

              <button
                type="button"
                onClick={pesquisarCatalogo}
                className="flex min-h-12 w-full items-center justify-center gap-2 border-t border-zinc-200 bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                <FaSearch size={12} />
                Ver todos os resultados
              </button>
            </>
          ) : (
            <div className="px-5 py-8 text-center">
              <p className="font-semibold text-zinc-950">
                Nenhum perfume encontrado
              </p>

              <p className="mt-2 text-sm font-normal text-zinc-500">
                Tente pesquisar por nome, marca,
                família olfativa ou inspiração.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}