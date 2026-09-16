"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";
import { produtos } from "@/data/produtos";

type FiltersProps = {
  familia: string[];
  precoMaximo: string;
  abertoMobile: boolean;
  setFamilia: (familias: string[]) => void;
  setPrecoMaximo: (valor: string) => void;
  fecharMobile: () => void;
  limparFiltros: () => void;
};

const FAMILIAS_SIMPLIFICADAS = [
  { id: "frescos", label: "Frescos" },
  { id: "doces", label: "Doces" },
  { id: "amadeirados", label: "Amadeirados" },
  { id: "florais", label: "Florais" },
  { id: "intensos", label: "Intensos" },
];

const FAIXAS_PRECO = [
  { label: "Todos os preços", value: "" },
  { label: "Até R$ 250", value: "250" },
  { label: "R$ 251 a R$ 350", value: "350" },
  { label: "Acima de R$ 350", value: "mais" },
];

export default function Filters({
  familia,
  precoMaximo,
  abertoMobile,
  setFamilia,
  setPrecoMaximo,
  fecharMobile,
  limparFiltros,
}: FiltersProps) {
  const possuiFiltro = familia.length > 0 || precoMaximo !== "";

  useEffect(() => {
    if (!abertoMobile) return;
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflowAnterior;
    };
  }, [abertoMobile]);

  function toggleFamilia(id: string) {
    if (familia.includes(id)) {
      setFamilia(familia.filter((f) => f !== id));
    } else {
      setFamilia([...familia, id]);
    }
  }

  const conteudo = (
    <>
      <div className="flex items-center justify-between gap-3 border-b border-zinc-200 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center bg-black text-white">
            <FaFilter size={14} />
          </div>

          <div>
            <h2 className="text-lg font-black text-zinc-950">Filtros</h2>
            <p className="text-xs text-zinc-500">Refine sua busca</p>
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
        <FilterSection title="Estilo Olfativo">
          {FAMILIAS_SIMPLIFICADAS.map((item) => {
            const checked = familia.includes(item.id);
            return (
              <CheckboxOption
                key={item.id}
                label={item.label}
                checked={checked}
                onChange={() => toggleFamilia(item.id)}
              />
            );
          })}
        </FilterSection>

        <Divider />

        <FilterSection title="Faixa de Preço">
          {FAIXAS_PRECO.map((item) => (
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
      <div className="space-y-1">{children}</div>
    </fieldset>
  );
}

function CheckboxOption({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="group flex min-h-11 cursor-pointer items-center justify-between gap-3 px-2 py-2 transition hover:bg-zinc-100">
      <div className="flex min-w-0 items-center gap-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="h-4 w-4 shrink-0 accent-black rounded"
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
    </label>
  );
}

function RadioOption({
  name,
  label,
  value,
  checked,
  onChange,
}: {
  name: string;
  label: string;
  value: string;
  checked: boolean;
  onChange: () => void;
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
    </label>
  );
}

function Divider() {
  return <div className="h-px bg-zinc-200" />;
}