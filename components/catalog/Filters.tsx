"use client";

import type { ReactNode } from "react";
import { useEffect, useMemo } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";
import { produtos } from "@/data/produtos";

type FiltersProps = {
  marca: string;
  categoria: string;
  genero: string;
  familia: string;
  precoMaximo: string;
  abertoMobile: boolean;
  setMarca: (valor: string) => void;
  setCategoria: (valor: string) => void;
  setGenero: (valor: string) => void;
  setFamilia: (valor: string) => void;
  setPrecoMaximo: (valor: string) => void;
  fecharMobile: () => void;
  limparFiltros: () => void;
};

function ordenarTextos(valores: string[]) {
  return [...new Set(valores)]
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b, "pt-BR"));
}

export default function Filters({
  marca,
  categoria,
  genero,
  familia,
  precoMaximo,
  abertoMobile,
  setMarca,
  setCategoria,
  setGenero,
  setFamilia,
  setPrecoMaximo,
  fecharMobile,
  limparFiltros,
}: FiltersProps) {
  const marcas = useMemo(
    () =>
      ordenarTextos(
        produtos.map((produto) => produto.marca),
      ),
    [],
  );

  const generos = useMemo(
    () =>
      ordenarTextos(
        produtos.map((produto) => produto.genero),
      ),
    [],
  );

  const familias = useMemo(
    () =>
      ordenarTextos(
        produtos.map(
          (produto) => produto.familiaOlfativa,
        ),
      ),
    [],
  );

  const possuiFiltro =
    marca !== "" ||
    categoria !== "" ||
    genero !== "" ||
    familia !== "" ||
    precoMaximo !== "";

  useEffect(() => {
    if (!abertoMobile) {
      return;
    }

    const overflowAnterior =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        overflowAnterior;
    };
  }, [abertoMobile]);

  function contarPorMarca(valor: string) {
    return produtos.filter(
      (produto) => produto.marca === valor,
    ).length;
  }

  function contarPorGenero(valor: string) {
    return produtos.filter(
      (produto) =>
        produto.genero === valor ||
        produto.categoria === valor,
    ).length;
  }

  function contarPorFamilia(valor: string) {
    return produtos.filter(
      (produto) =>
        produto.familiaOlfativa === valor,
    ).length;
  }

  function selecionarGenero(valor: string) {
    setGenero(valor);
    setCategoria("");
  }

  function limparParaQuem() {
    setGenero("");
    setCategoria("");
  }

  const conteudo = (
    <>
      <div className="flex items-center justify-between gap-3 border-b border-zinc-200 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center bg-black text-white">
            <FaFilter size={14} />
          </div>

          <div>
            <h2 className="text-lg font-black text-zinc-950">
              Filtros
            </h2>

            <p className="text-xs text-zinc-500">
              Refine sua busca
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {possuiFiltro && (
            <button
              type="button"
              onClick={limparFiltros}
              className="min-h-10 px-2.5 py-2 text-xs font-bold text-red-600 transition hover:bg-red-50"
            >
              Limpar
            </button>
          )}

          <button
            type="button"
            onClick={fecharMobile}
            aria-label="Fechar filtros"
            className="flex h-10 w-10 items-center justify-center text-zinc-700 transition hover:bg-zinc-100 lg:hidden"
          >
            <FaTimes size={15} />
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-7">
        <FilterSection title="Para quem">
          <RadioOption
            name="genero"
            label="Todos"
            value=""
            checked={
              genero === "" && categoria === ""
            }
            onChange={limparParaQuem}
            count={produtos.length}
          />

          {generos.map((item) => (
            <RadioOption
              key={item}
              name="genero"
              label={item}
              value={item}
              checked={
                genero === item ||
                categoria === item
              }
              onChange={() =>
                selecionarGenero(item)
              }
              count={contarPorGenero(item)}
            />
          ))}
        </FilterSection>

        <Divider />

        <FilterSection title="Marca">
          <RadioOption
            name="marca"
            label="Todas as marcas"
            value=""
            checked={marca === ""}
            onChange={() => setMarca("")}
            count={produtos.length}
          />

          <div className="max-h-72 space-y-1 overflow-y-auto pr-1">
            {marcas.map((item) => (
              <RadioOption
                key={item}
                name="marca"
                label={item}
                value={item}
                checked={marca === item}
                onChange={() => setMarca(item)}
                count={contarPorMarca(item)}
              />
            ))}
          </div>
        </FilterSection>

        <Divider />

        <FilterSection title="Família olfativa">
          <RadioOption
            name="familia"
            label="Todas"
            value=""
            checked={familia === ""}
            onChange={() => setFamilia("")}
            count={produtos.length}
          />

          <div className="max-h-72 space-y-1 overflow-y-auto pr-1">
            {familias.map((item) => (
              <RadioOption
                key={item}
                name="familia"
                label={item}
                value={item}
                checked={familia === item}
                onChange={() =>
                  setFamilia(item)
                }
                count={contarPorFamilia(item)}
              />
            ))}
          </div>
        </FilterSection>

        <Divider />

        <FilterSection title="Faixa de preço">
          {[
            {
              label: "Todos os preços",
              value: "",
            },
            {
              label: "Até R$ 250",
              value: "250",
            },
            {
              label: "Até R$ 300",
              value: "300",
            },
            {
              label: "Até R$ 400",
              value: "400",
            },
            {
              label: "Até R$ 500",
              value: "500",
            },
            {
              label: "Até R$ 700",
              value: "700",
            },
          ].map((item) => (
            <RadioOption
              key={item.label}
              name="preco"
              label={item.label}
              value={item.value}
              checked={
                precoMaximo === item.value
              }
              onChange={() =>
                setPrecoMaximo(item.value)
              }
            />
          ))}
        </FilterSection>
      </div>

      <div className="mt-8 border-t border-zinc-200 pt-5 lg:hidden">
        <button
          type="button"
          onClick={fecharMobile}
          className="min-h-12 w-full bg-black px-4 py-3.5 text-sm font-extrabold text-white transition hover:bg-zinc-800"
        >
          Ver resultados
        </button>
      </div>
    </>
  );

  return (
    <>
      <aside className="hidden h-fit border border-zinc-200 bg-white p-5 lg:sticky lg:top-28 lg:block">
        {conteudo}
      </aside>

      {abertoMobile && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <button
            type="button"
            aria-label="Fechar filtros"
            onClick={fecharMobile}
            className="absolute inset-0 bg-black/60"
          />

          <aside className="absolute inset-y-0 left-0 w-[88%] max-w-sm overflow-y-auto border-r border-zinc-200 bg-white p-5 shadow-2xl">
            {conteudo}
          </aside>
        </div>
      )}
    </>
  );
}

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-black uppercase tracking-[0.08em] text-zinc-950">
        {title}
      </legend>

      <div className="space-y-1">
        {children}
      </div>
    </fieldset>
  );
}

function RadioOption({
  name,
  label,
  value,
  checked,
  onChange,
  count,
}: {
  name: string;
  label: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  count?: number;
}) {
  return (
    <label className="group flex min-h-11 cursor-pointer items-center justify-between gap-3 px-2 py-2 transition hover:bg-zinc-100">
      <div className="flex min-w-0 items-center gap-3">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="h-4 w-4 shrink-0 accent-black"
        />

        <span
          className={`truncate text-sm transition ${
            checked
              ? "font-bold text-zinc-950"
              : "text-zinc-600 group-hover:text-zinc-950"
          }`}
        >
          {label}
        </span>
      </div>

      {typeof count === "number" && (
        <span className="shrink-0 rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-semibold text-zinc-500">
          {count}
        </span>
      )}
    </label>
  );
}

function Divider() {
  return <div className="h-px bg-zinc-200" />;
}
