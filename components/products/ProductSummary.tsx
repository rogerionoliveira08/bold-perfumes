 import {
  FaBolt,
  FaCheck,
  FaCheckCircle,
  FaClock,
  FaCreditCard,
  FaCrown,
  FaGem,
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

  const motivosParaEscolher =
    produto.caracteristicas && produto.caracteristicas.length > 0
      ? produto.caracteristicas.slice(0, 5)
      : criarMotivosPadrao(produto);

  const textoAvaliacoes =
    produto.avaliacoes > 0
      ? `${produto.avaliacoes} ${
          produto.avaliacoes === 1 ? "avaliação" : "avaliações"
        }`
      : "Novidade no catálogo";

  return (
    <div className="min-w-0 lg:pt-1">
      <header>
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 flex-wrap gap-2">
            {produto.selo ? (
              <span className="inline-flex max-w-full items-center gap-1.5 truncate rounded-full bg-yellow-400 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.12em] text-black shadow-[0_0_24px_rgba(250,204,21,0.15)] sm:text-[10px]">
                <FaCrown size={10} />
                {produto.selo}
              </span>
            ) : null}

            <span className="max-w-full truncate rounded-full border border-zinc-700 bg-zinc-900/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-zinc-300 sm:text-[10px]">
              {produto.categoria}
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/[0.06] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-green-400 sm:text-[10px]">
              <FaCheckCircle size={10} />
              Original
            </span>
          </div>

          <ProductFavorite produto={produto} />
        </div>

        <p className="mt-5 text-[10px] font-black uppercase tracking-[0.26em] text-yellow-400 sm:text-xs">
          {produto.marca}
        </p>

        <h1 className="mt-2 text-[32px] font-black leading-[1.03] tracking-[-0.035em] text-white sm:text-5xl lg:text-[52px]">
          {produto.nome}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm">
          <div className="flex items-center gap-1.5">
            <FaStar className="text-yellow-400" size={13} />

            <span className="font-black text-yellow-400">
              {produto.avaliacao.toLocaleString("pt-BR")}
            </span>
          </div>

          <span className="h-1 w-1 rounded-full bg-zinc-700" />

          <span className="text-zinc-400">{textoAvaliacoes}</span>

          <span className="h-1 w-1 rounded-full bg-zinc-700" />

          <span className="font-semibold text-zinc-300">
            {produto.familiaOlfativa}
          </span>
        </div>
      </header>

      {produto.inspiradoEm ? (
        <section className="relative mt-5 overflow-hidden rounded-2xl border border-yellow-400/25 bg-gradient-to-br from-yellow-400/[0.09] via-yellow-400/[0.03] to-zinc-950 p-4 sm:p-5">
          <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-yellow-400/10 blur-3xl" />

          <div className="relative flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/10 text-yellow-400">
              <FaTag size={14} />
            </div>

            <div className="min-w-0">
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-zinc-500 sm:text-[10px]">
                Referência olfativa
              </p>

              <p className="mt-1 text-sm font-black leading-5 text-white sm:text-base">
                Inspirado em{" "}
                <span className="text-yellow-400">
                  {produto.inspiradoEm}
                </span>
              </p>
            </div>
          </div>
        </section>
      ) : null}

      <section className="relative mt-5 overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 via-zinc-950 to-yellow-400/[0.04] p-5 sm:p-6">
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-yellow-400/[0.08] blur-3xl" />

        <div className="relative">
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 sm:text-[10px]">
            Valor da fragrância
          </p>

          <div className="mt-2 flex flex-wrap items-end gap-x-3 gap-y-1">
            <p className="text-3xl font-black tracking-[-0.04em] text-yellow-400 sm:text-[42px]">
              {formatarPreco(produto.preco)}
            </p>

            <span className="mb-1 rounded-full border border-yellow-400/20 bg-yellow-400/[0.07] px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.1em] text-yellow-300">
              Em até 6x
            </span>
          </div>

          <div className="mt-4 flex items-start gap-2.5 text-xs text-zinc-400 sm:text-sm">
            <FaCreditCard
              className="mt-0.5 shrink-0 text-yellow-400"
              size={14}
            />

            <p>
              6x de{" "}
              <strong className="font-black text-white">
                {formatarPreco(valorParcela)}
              </strong>{" "}
              sem juros
            </p>
          </div>

          <div className="mt-2.5 flex items-start gap-2.5 text-[10px] leading-5 text-zinc-500 sm:text-xs">
            <FaShippingFast
              className="mt-1 shrink-0 text-yellow-400"
              size={13}
            />

            <p>
              Entrega para todo o Brasil, com frete calculado conforme o CEP.
            </p>
          </div>
        </div>
      </section>

      <ProductActions produto={produto} />

      <section className="mt-5 overflow-hidden rounded-2xl border border-yellow-400/20 bg-gradient-to-br from-yellow-400/[0.07] to-zinc-950 p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-black">
            <FaGem size={15} />
          </div>

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-yellow-400 sm:text-[10px]">
              Escolha com confiança
            </p>

            <h2 className="mt-0.5 text-base font-black text-white sm:text-lg">
              Por que escolher este perfume?
            </h2>
          </div>
        </div>

        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {motivosParaEscolher.map((motivo) => (
            <div
              key={motivo}
              className="flex min-w-0 items-start gap-2.5 rounded-xl border border-zinc-800/80 bg-black/40 px-3 py-2.5"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-400/10 text-[8px] text-yellow-400">
                <FaCheck />
              </span>

              <span className="text-[11px] font-semibold leading-5 text-zinc-300 sm:text-xs">
                {motivo}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section
        aria-label="Informações principais do produto"
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

        {produto.duracao ? (
          <ProductDetail label="Duração" value={produto.duracao} />
        ) : null}

        {produto.rastro ? (
          <ProductDetail label="Rastro" value={produto.rastro} />
        ) : null}

        <ProductDetail
          label="Origem"
          value={produto.origem}
          fullWidth
        />
      </section>

      <section className="mt-5 rounded-2xl border border-zinc-800 bg-zinc-950 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-yellow-400 sm:text-[10px]">
              Alta performance
            </p>

            <h2 className="mt-1 text-base font-black text-white sm:text-lg">
              Presença que permanece
            </h2>
          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/[0.07] text-yellow-400">
            <FaBolt size={14} />
          </div>
        </div>

        <div className="mt-5 space-y-4">
          <InfoBar label="Fixação" value={produto.fixacao} />
          <InfoBar label="Projeção" value={produto.projecao} />
        </div>

        {produto.desempenho ? (
          <p className="mt-4 border-t border-zinc-800 pt-4 text-[11px] leading-5 text-zinc-500 sm:text-xs sm:leading-6">
            {produto.desempenho}
          </p>
        ) : produto.duracao ? (
          <div className="mt-4 flex items-center gap-2 border-t border-zinc-800 pt-4 text-xs text-zinc-400">
            <FaClock className="text-yellow-400" />
            Duração estimada:{" "}
            <strong className="text-white">{produto.duracao}</strong>
          </div>
        ) : null}
      </section>

      <a
        href="https://wa.me/"
        className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-green-500/20 bg-green-500/[0.05] px-4 py-3 text-center text-[10px] font-bold text-green-400 transition hover:border-green-400/50 hover:bg-green-500/10 sm:text-xs"
      >
        <FaWhatsapp className="shrink-0" size={14} />
        Precisa de ajuda para escolher? Fale com a Bold Parfum.
      </a>
    </div>
  );
}

function criarMotivosPadrao(produto: Product) {
  const motivos = [
    `Perfil ${produto.familiaOlfativa.toLowerCase()}`,
    `Fixação avaliada em ${produto.fixacao}/5`,
    `Projeção avaliada em ${produto.projecao}/5`,
  ];

  if (produto.inspiradoEm) {
    motivos.unshift(`Inspirado em ${produto.inspiradoEm}`);
  }

  if (produto.ocasioes.length > 0) {
    motivos.push(`Ideal para ${produto.ocasioes.slice(0, 2).join(" e ")}`);
  }

  motivos.push("Perfume original e selecionado pela Bold Parfum");

  return motivos.slice(0, 5);
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
    <article
      className={`group min-w-0 rounded-xl border border-zinc-800 bg-zinc-950 p-3.5 transition duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/[0.025] ${
        fullWidth ? "col-span-2" : ""
      }`}
    >
      <p className="text-[8px] font-black uppercase tracking-[0.14em] text-zinc-500 sm:text-[9px]">
        {label}
      </p>

      <p className="mt-1.5 break-words text-[11px] font-black leading-4 text-white sm:text-sm sm:leading-5">
        {value}
      </p>
    </article>
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
      <div className="mb-2 flex items-center justify-between gap-4">
        <span className="text-xs font-bold text-zinc-300 sm:text-sm">
          {label}
        </span>

        <div className="flex items-center gap-1.5">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className={`h-1.5 w-4 rounded-full sm:w-5 ${
                  index < valorSeguro ? "bg-yellow-400" : "bg-zinc-800"
                }`}
              />
            ))}
          </div>

          <span className="ml-1 text-[10px] font-black text-yellow-400">
            {valorSeguro}/5
          </span>
        </div>
      </div>

      <div
        className="h-1.5 overflow-hidden rounded-full bg-zinc-800"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={5}
        aria-valuenow={valorSeguro}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300 transition-all duration-700"
          style={{ width: `${valorSeguro * 20}%` }}
        />
      </div>
    </div>
  );
}