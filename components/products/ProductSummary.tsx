import {
  FaCheckCircle,
  FaCreditCard,
  FaShippingFast,
  FaStar,
  FaTag,
  FaWhatsapp,
} from "react-icons/fa";
import type { Product } from "@/types/product";
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

  const valorParcela = produto.preco / 6;

  return (
    <div className="min-w-0 lg:pt-1">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-wrap gap-2">
          {produto.selo && (
            <span className="max-w-full truncate rounded-full bg-yellow-400 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.1em] text-black sm:text-[11px]">
              {produto.selo}
            </span>
          )}

          <span className="max-w-full truncate rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-[9px] font-bold text-zinc-300 sm:text-[11px]">
            {produto.categoria}
          </span>
        </div>

        <ProductFavorite produto={produto} />
      </div>

      <p className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 sm:mt-5 sm:text-xs">
        {produto.marca}
      </p>

      <h1 className="mt-1.5 text-[28px] font-black leading-[1.08] tracking-tight text-white sm:mt-2 sm:text-4xl lg:text-[40px]">
        {produto.nome}
      </h1>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs sm:text-sm">
        <div className="flex items-center gap-1.5 text-yellow-400">
          <FaStar size={12} />

          <span className="font-black">
            {produto.avaliacao.toLocaleString("pt-BR")}
          </span>
        </div>

        <span className="text-zinc-700">•</span>

        <span className="text-zinc-400">
          {produto.avaliacoes} avaliações
        </span>

        <span className="text-zinc-700">•</span>

        <span className="inline-flex items-center gap-1 font-semibold text-green-400">
          <FaCheckCircle size={11} />
          Produto original
        </span>
      </div>

      {produto.inspiradoEm && (
        <div className="mt-4 flex items-start gap-3 rounded-xl border border-yellow-400/25 bg-yellow-400/[0.05] p-3 sm:mt-5 sm:p-3.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-400">
            <FaTag size={13} />
          </div>

          <div className="min-w-0">
            <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-zinc-500 sm:text-[10px]">
              Inspirado em
            </p>

            <p className="mt-0.5 text-sm font-black leading-5 text-yellow-400 sm:mt-1 sm:text-base">
              {produto.inspiradoEm}
            </p>
          </div>
        </div>
      )}

      <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 sm:mt-5 sm:p-5">
        <p className="text-[10px] font-black uppercase tracking-[0.14em] text-zinc-500">
          Preço
        </p>

        <p className="mt-1 text-3xl font-black tracking-tight text-yellow-400 sm:text-4xl">
          {formatarPreco(produto.preco)}
        </p>

        <div className="mt-2 flex items-start gap-2 text-xs text-zinc-400 sm:text-sm">
          <FaCreditCard
            className="mt-0.5 shrink-0 text-yellow-400"
            size={13}
          />

          <p>
            ou 6x de{" "}
            <span className="font-black text-white">
              {formatarPreco(valorParcela)}
            </span>{" "}
            sem juros
          </p>
        </div>

        <div className="mt-2 flex items-start gap-2 text-[10px] leading-4 text-zinc-500 sm:text-xs">
          <FaShippingFast
            className="mt-0.5 shrink-0 text-yellow-400"
            size={12}
          />

          <p>Frete calculado de acordo com o CEP de entrega.</p>
        </div>
      </div>

      <ProductActions produto={produto} />

      <div className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-green-500/20 bg-green-500/[0.04] px-3 py-2.5 text-center text-[10px] font-semibold text-green-400 sm:text-xs">
        <FaWhatsapp className="shrink-0" size={13} />
        Precisa de ajuda? Fale com a Bold Parfum pelo WhatsApp.
      </div>

      <section
        aria-label="Informações do produto"
        className="mt-5 grid grid-cols-2 gap-2.5"
      >
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
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.15em] text-yellow-400 sm:text-[10px]">
            Desempenho
          </p>

          <h2 className="mt-1 text-base font-black text-white sm:text-lg">
            Desempenho da fragrância
          </h2>
        </div>

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
      className={`min-w-0 rounded-xl border border-zinc-800 bg-zinc-950 p-3 sm:p-3.5 ${
        fullWidth ? "col-span-2" : ""
      }`}
    >
      <p className="text-[8px] font-black uppercase tracking-[0.1em] text-zinc-500 sm:text-[10px]">
        {label}
      </p>

      <p className="mt-1 break-words text-[11px] font-black leading-4 text-white sm:text-sm sm:leading-5">
        {value}
      </p>
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
      <div className="mb-2 flex items-center justify-between gap-4 text-xs sm:text-sm">
        <span className="font-bold text-zinc-300">{label}</span>

        <span className="font-black text-yellow-400">
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