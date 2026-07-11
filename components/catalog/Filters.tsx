"use client";

type FiltersProps = {
  marca: string;
  categoria: string;
  precoMaximo: string;
  setMarca: (valor: string) => void;
  setCategoria: (valor: string) => void;
  setPrecoMaximo: (valor: string) => void;
  limparFiltros: () => void;
};

export default function Filters({
  marca,
  categoria,
  precoMaximo,
  setMarca,
  setCategoria,
  setPrecoMaximo,
  limparFiltros,
}: FiltersProps) {
  const possuiFiltro =
    marca !== "" || categoria !== "" || precoMaximo !== "";

  return (
    <aside className="h-fit rounded-3xl border border-zinc-800 bg-zinc-950 p-5 lg:sticky lg:top-28">
      <div className="mb-6 flex items-center justify-between gap-3">
        <h2 className="text-xl font-bold text-yellow-400">Filtros</h2>

        {possuiFiltro && (
          <button
            type="button"
            onClick={limparFiltros}
            className="text-xs font-semibold text-zinc-400 transition hover:text-yellow-400"
          >
            Limpar
          </button>
        )}
      </div>

      <div className="space-y-7">
        <fieldset>
          <legend className="mb-3 font-bold">Marca</legend>

          <div className="space-y-2.5 text-sm text-zinc-300">
            {["", "Lattafa", "Armaf", "Maison Alhambra"].map((item) => (
              <label
                key={item || "todas"}
                className="flex cursor-pointer items-center gap-3 transition hover:text-white"
              >
                <input
                  type="radio"
                  name="marca"
                  value={item}
                  checked={marca === item}
                  onChange={() => setMarca(item)}
                  className="accent-yellow-400"
                />

                <span>{item || "Todas"}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="h-px bg-zinc-800" />

        <fieldset>
          <legend className="mb-3 font-bold">Categoria</legend>

          <div className="space-y-2.5 text-sm text-zinc-300">
            {["", "Masculino", "Feminino", "Unissex", "Árabe", "Premium"].map(
              (item) => (
                <label
                  key={item || "todas"}
                  className="flex cursor-pointer items-center gap-3 transition hover:text-white"
                >
                  <input
                    type="radio"
                    name="categoria"
                    value={item}
                    checked={categoria === item}
                    onChange={() => setCategoria(item)}
                    className="accent-yellow-400"
                  />

                  <span>{item || "Todas"}</span>
                </label>
              ),
            )}
          </div>
        </fieldset>

        <div className="h-px bg-zinc-800" />

        <fieldset>
          <legend className="mb-3 font-bold">Faixa de preço</legend>

          <div className="space-y-2.5 text-sm text-zinc-300">
            {[
              { label: "Todos os preços", value: "" },
              { label: "Até R$ 300", value: "300" },
              { label: "Até R$ 400", value: "400" },
              { label: "Até R$ 500", value: "500" },
            ].map((item) => (
              <label
                key={item.label}
                className="flex cursor-pointer items-center gap-3 transition hover:text-white"
              >
                <input
                  type="radio"
                  name="preco"
                  value={item.value}
                  checked={precoMaximo === item.value}
                  onChange={() => setPrecoMaximo(item.value)}
                  className="accent-yellow-400"
                />

                <span>{item.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>
    </aside>
  );
}