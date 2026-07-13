"use client";

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
    () => ordenarTextos(produtos.map((produto) => produto.marca)),
    [],
  );

  const categorias = useMemo(
    () => ordenarTextos(produtos.map((produto) => produto.categoria)),
    [],
  );

  const generos = useMemo(
    () => ordenarTextos(produtos.map((produto) => produto.genero)),
    [],
  );

  const familias = useMemo(
    () =>
      ordenarTextos(
        produtos.map((produto) => produto.familiaOlfativa),
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

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflowAnterior;
    };
  }, [abertoMobile]);

  function contarPorMarca(valor: string) {
    return produtos.filter((produto) => produto.marca === valor).length;
  }

  function contarPorCategoria(valor: string) {
    return produtos.filter(
      (produto) => produto.categoria === valor,
    ).length;
  }

  function contarPorGenero(valor: string) {
    return produtos.filter((produto) => produto.genero === valor).length;
  }

  function contarPorFamilia(valor: string) {
    return produtos.filter(
      (produto) => produto.familiaOlfativa === valor,
    ).length;
  }

  const conteudo = (
    <>
      <div className="flex items-center justify-between gap-3 border-b border-zinc-800 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-400 text-black">
            <FaFilter size={14} />
          </div>

          <div>
            <h2 className="text-lg font-black text-white">
              Filtros
            </h2>

            <p className="text-[11px] text-zinc-500">
              Refine sua busca
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {possuiFiltro && (
            <button
              type="button"
              onClick={limparFiltros}
              className="rounded-lg px-2.5 py-2 text-xs font-bold text-red-400 transition hover:bg-red-500/10"
            >
              Limpar
            </button>
          )}

          <button
            type="button"
            onClick={fecharMobile}
            aria-label="Fechar filtros"
            className="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-zinc-800 lg:hidden"
          >
            <FaTimes size={15} />
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-7">
        <FilterSection title="Marca">
          <RadioOption
            name="marca"
            label="Todas as marcas"
            value=""
            checked={marca === ""}
            onChange={() => setMarca("")}
            count={produtos.length}
          />

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
        </FilterSection>

        <Divider />

        <FilterSection title="Gênero">
          <RadioOption
            name="genero"
            label="Todos"
            value=""
            checked={genero === ""}
            onChange={() => setGenero("")}
            count={produtos.length}
          />

          {generos.map((item) => (
            <RadioOption
              key={item}
              name="genero"
              label={item}
              value={item}
              checked={genero === item}
              onChange={() => setGenero(item)}
              count={contarPorGenero(item)}
            />
          ))}
        </FilterSection>

        <Divider />

        <FilterSection title="Categoria">
          <RadioOption
            name="categoria"
            label="Todas"
            value=""
            checked={categoria === ""}
            onChange={() => setCategoria("")}
            count={produtos.length}
          />

          {categorias.map((item) => (
            <RadioOption
              key={item}
              name="categoria"
              label={item}
              value={item}
              checked={categoria === item}
              onChange={() => setCategoria(item)}
              count={contarPorCategoria(item)}
            />
          ))}
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

          <div className="max-h-64 space-y-2.5 overflow-y-auto pr-1">
            {familias.map((item) => (
              <RadioOption
                key={item}
                name="familia"
                label={item}
                value={item}
                checked={familia === item}
                onChange={() => setFamilia(item)}
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
              checked={precoMaximo === item.value}
              onChange={() => setPrecoMaximo(item.value)}
            />
          ))}
        </FilterSection>
      </div>

      <div className="mt-8 border-t border-zinc-800 pt-5 lg:hidden">
        <button
          type="button"
          onClick={fecharMobile}
          className="w-full rounded-xl bg-yellow-400 px-4 py-3.5 text-sm font-extrabold text-black transition hover:bg-yellow-300"
        >
          Ver resultados
        </button>
      </div>
    </>
  );

  return (
    <>
      <aside className="hidden h-fit rounded-2xl border border-zinc-800 bg-zinc-950 p-5 lg:sticky lg:top-28 lg:block">
        {conteudo}
      </aside>

      {abertoMobile && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <button
            type="button"
            aria-label="Fechar filtros"
            onClick={fecharMobile}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          />

          <aside className="absolute inset-y-0 left-0 w-[88%] max-w-sm overflow-y-auto border-r border-zinc-800 bg-zinc-950 p-5 shadow-2xl">
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
  children: React.ReactNode;
}) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-black uppercase tracking-[0.12em] text-white">
        {title}
      </legend>

      <div className="space-y-2.5">{children}</div>
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
    <label className="group flex cursor-pointer items-center justify-between gap-3 rounded-lg px-2 py-1.5 transition hover:bg-zinc-900">
      <div className="flex min-w-0 items-center gap-3">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="h-4 w-4 shrink-0 accent-yellow-400"
        />

        <span
          className={`truncate text-sm transition ${
            checked
              ? "font-bold text-yellow-400"
              : "text-zinc-400 group-hover:text-white"
          }`}
        >
          {label}
        </span>
      </div>

      {typeof count === "number" && (
        <span className="shrink-0 rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] font-semibold text-zinc-500">
          {count}
        </span>
      )}
    </label>
  );
}

function Divider() {
  return <div className="h-px bg-zinc-800" />;
}