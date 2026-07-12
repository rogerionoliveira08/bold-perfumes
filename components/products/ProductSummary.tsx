import { FaStar, FaTag } from "react-icons/fa";
import { Product } from "@/types/product";
import ProductActions from "@/components/products/ProductActions";
import ProductFavorite from "@/components/products/ProductFavorite";

type Props = {
  produto: Product;
};

export default function ProductSummary({ produto }: Props) {
  const formatarPreco = (valor: number) =>
    valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <div className="min-w-0 lg:pt-1">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {produto.selo && (
            <span className="rounded-full bg-yellow-400 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-black">
              {produto.selo}
            </span>
          )}

          <span className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-[11px] font-semibold text-zinc-300">
            {produto.categoria}
          </span>
        </div>

        <ProductFavorite produto={produto} />
      </div>

      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        {produto.marca}
      </p>

      <h1 className="mt-2 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-[40px]">
        {produto.nome}
      </h1>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
        <div className="flex items-center gap-1 text-yellow-400">
          <FaStar size={13} />
          <span className="font-bold">{produto.avaliacao}</span>
        </div>

        <span className="text-zinc-700">•</span>

        <span className="text-zinc-400">
          {produto.avaliacoes} avaliações
        </span>
      </div>

      {produto.inspiradoEm && (
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-yellow-400/25 bg-yellow-400/5 p-3.5">
          <FaTag
            className="mt-0.5 shrink-0 text-yellow-400"
            size={14}
          />

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Inspirado em
            </p>

            <p className="mt-1 text-sm font-bold text-yellow-400 sm:text-base">
              {produto.inspiradoEm}
            </p>
          </div>
        </div>
      )}

      <div className="mt-5 border-y border-zinc-800 py-5">
        <p className="text-3xl font-black text-yellow-400 sm:text-4xl">
          {formatarPreco(produto.preco)}
        </p>

        <p className="mt-1.5 text-sm text-zinc-400">
          ou 6x de{" "}
          <span className="font-semibold text-white">
            {formatarPreco(produto.preco / 6)}
          </span>
        </p>

        <p className="mt-1.5 text-xs text-zinc-500">
          Frete calculado de acordo com o CEP
        </p>
      </div>

      <ProductActions produto={produto} />

      <section className="mt-5 grid grid-cols-2 gap-2.5">
        <ProductDetail
          label="Família olfativa"
          value={produto.familiaOlfativa}
        />

        <ProductDetail
          label="Concentração"
          value={produto.concentracao}
        />

        <ProductDetail label="Volume" value={produto.volume} />

        <ProductDetail label="Gênero" value={produto.genero} />

        <ProductDetail
          label="Origem"
          value={produto.origem}
          fullWidth
        />
      </section>

      <section className="mt-5 rounded-2xl border border-zinc-800 bg-zinc-950 p-4 sm:p-5">
        <h2 className="text-lg font-bold text-white">
          Desempenho da fragrância
        </h2>

        <div className="mt-4 space-y-4">
          <InfoBar label="Fixação" value={produto.fixacao} />
          <InfoBar label="Projeção" value={produto.projecao} />
        </div>
      </section>
    </div>
  );
}

function ProductDetail({
  label,
  value,
  fullWidth = false,
}: {
  label: string;
  value: string;
  fullWidth?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border border-zinc-800 bg-zinc-950 p-3.5 ${
        fullWidth ? "col-span-2" : ""
      }`}
    >
      <p className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
        {label}
      </p>

      <p className="mt-1 text-sm font-bold text-white">{value}</p>
    </div>
  );
}

function InfoBar({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  const valorSeguro = Math.min(Math.max(value, 0), 5);

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4 text-sm">
        <span className="font-semibold text-zinc-300">{label}</span>

        <span className="font-bold text-yellow-400">
          {valorSeguro}/5
        </span>
      </div>

      <div
        className="h-2 overflow-hidden rounded-full bg-zinc-800"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={5}
        aria-valuenow={valorSeguro}
      >
        <div
          className="h-full rounded-full bg-yellow-400 transition-all duration-500"
          style={{ width: `${valorSeguro * 20}%` }}
        />
      </div>
    </div>
  );
}