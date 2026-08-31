import {
  FaBolt,
  FaCheck,
  FaCheckCircle,
  FaClock,
  FaCreditCard,
  FaCrown,
  FaGem,
  FaShippingFast,
  FaTag,
  FaWhatsapp,
} from "react-icons/fa";
import type { Product } from "@/types/product";
import ProductActions from "@/components/products/ProductActions";
import ProductFavorite from "@/components/products/ProductFavorite";

type Props = {
  produto: Product;
};

const atendentes = [
  {
    nome: "Rogério",
    telefone: "5522999281815",
  },
  {
    nome: "Thainá",
    telefone: "5522992885658",
  },
];

export default function ProductSummary({
  produto,
}: Props) {
  const formatarPreco = (valor: number) =>
    valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  const valorParcela = produto.preco / 10;

  const motivosParaEscolher =
    produto.caracteristicas &&
    produto.caracteristicas.length > 0
      ? produto.caracteristicas.slice(0, 5)
      : criarMotivosPadrao(produto);

  const disponibilidade =
    produto.disponibilidade ?? "Sob consulta";

  const corDisponibilidade =
    disponibilidade === "Em estoque"
      ? "border-green-300 bg-green-50 text-green-700"
      : disponibilidade === "Poucas unidades"
        ? "border-orange-300 bg-orange-50 text-orange-700"
        : disponibilidade === "Indisponível"
          ? "border-red-300 bg-red-50 text-red-700"
          : "border-zinc-300 bg-zinc-100 text-zinc-700";

  const mensagemConsultoria =
    `Olá! Gostaria de uma consultoria da Bold Parfum sobre este perfume:

Perfume: ${produto.nome}
Família olfativa: ${produto.familiaOlfativa}
Link: https://www.boldparfum.com.br/produto/${produto.slug}

Quero entender se essa fragrância combina com meu estilo, minha rotina e as ocasiões em que pretendo usá-la.`;

  return (
    <div className="min-w-0 lg:pt-1">
      <header>
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 flex-wrap gap-2">
            {produto.selo && (
              <span className="inline-flex max-w-full items-center gap-1.5 truncate rounded-full bg-black px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.1em] text-white sm:text-[10px]">
                <FaCrown size={10} />
                {produto.selo}
              </span>
            )}

            <span className="max-w-full truncate rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-zinc-700 sm:text-[10px]">
              {produto.categoria}
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-green-300 bg-green-50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-green-700 sm:text-[10px]">
              <FaCheckCircle size={10} />
              Original
            </span>
          </div>

          <ProductFavorite produto={produto} />
        </div>

        <p className="mt-5 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-950 sm:text-xs">
          {produto.marca}
        </p>

        <h1 className="mt-2 text-[32px] font-black leading-[1.03] tracking-[-0.035em] text-zinc-950 sm:text-5xl lg:text-[52px]">
          {produto.nome}
        </h1>

        <p className="mt-3 text-sm font-semibold text-zinc-600">
          {produto.familiaOlfativa}
        </p>
      </header>

      {produto.inspiradoEm && (
        <section className="mt-5 border border-zinc-300 bg-zinc-50 p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-black text-white">
              <FaTag size={14} />
            </div>

            <div className="min-w-0">
              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-zinc-500 sm:text-[10px]">
                Referência olfativa
              </p>

              <p className="mt-1 text-sm font-black leading-5 text-zinc-950 sm:text-base">
                Inspirado em{" "}
                <span className="text-zinc-950">
                  {produto.inspiradoEm}
                </span>
              </p>

              <p className="mt-2 text-xs leading-5 text-zinc-600">
                Referência de estilo olfativo. As fragrâncias não são
                necessariamente idênticas.
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="mt-5 border border-zinc-200 bg-zinc-50 p-5 sm:p-6">
        <p className="text-[9px] font-black uppercase tracking-[0.18em] text-zinc-500 sm:text-[10px]">
          Valor da fragrância
        </p>

        <div className="mt-2 flex flex-wrap items-end gap-x-3 gap-y-1">
          <p className="text-3xl font-black tracking-[-0.04em] text-zinc-950 sm:text-[42px]">
            {formatarPreco(produto.preco)}
          </p>

          <span className="mb-1 bg-black px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.08em] text-white">
            Em até 10x
          </span>
        </div>

        <div className="mt-4 flex items-start gap-2.5 text-xs text-zinc-600 sm:text-sm">
          <FaCreditCard
            className="mt-0.5 shrink-0 text-zinc-950"
            size={14}
          />

          <p>
            10x de{" "}
            <strong className="font-black text-zinc-950">
              {formatarPreco(valorParcela)}
            </strong>{" "}
            sem juros
          </p>
        </div>

        <div className="mt-2.5 flex items-start gap-2.5 text-[10px] leading-5 text-zinc-500 sm:text-xs">
          <FaShippingFast
            className="mt-1 shrink-0 text-zinc-950"
            size={13}
          />

          <p>
            Entrega para todo o Brasil. Frete grátis acima de
            R$ 1.000; nos demais pedidos, calculado pelo CEP.
          </p>
        </div>

        <div
          className={`mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-bold sm:text-xs ${corDisponibilidade}`}
        >
          <span className="h-2 w-2 rounded-full bg-current" />
          Disponibilidade: {disponibilidade}
        </div>
      </section>

      <ProductActions produto={produto} />

      <section className="mt-5 border border-zinc-200 bg-white p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-black text-white">
            <FaGem size={15} />
          </div>

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.18em] text-zinc-500 sm:text-[10px]">
              Escolha com confiança
            </p>

            <h2 className="mt-0.5 text-base font-black text-zinc-950 sm:text-lg">
              Por que escolher este perfume?
            </h2>
          </div>
        </div>

        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {motivosParaEscolher.map((motivo) => (
            <div
              key={motivo}
              className="flex min-w-0 items-start gap-2.5 border border-zinc-200 bg-zinc-50 px-3 py-2.5"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black text-[8px] text-white">
                <FaCheck />
              </span>

              <span className="text-[11px] font-semibold leading-5 text-zinc-700 sm:text-xs">
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

        <ProductDetail
          label="Volume"
          value={produto.volume}
        />

        <ProductDetail
          label="Gênero"
          value={produto.genero}
        />

        {produto.duracao && (
          <ProductDetail
            label="Duração"
            value={produto.duracao}
          />
        )}

        {produto.rastro && (
          <ProductDetail
            label="Rastro"
            value={produto.rastro}
          />
        )}

        <ProductDetail
          label="Origem"
          value={produto.origem}
          fullWidth
        />
      </section>

      <section className="mt-5 border border-zinc-200 bg-zinc-50 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.16em] text-zinc-500 sm:text-[10px]">
              Desempenho estimado
            </p>

            <h2 className="mt-1 text-base font-black text-zinc-950 sm:text-lg">
              Presença da fragrância
            </h2>
          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-black text-white">
            <FaBolt size={14} />
          </div>
        </div>

        <div className="mt-5 space-y-4">
          <InfoBar
            label="Fixação"
            value={produto.fixacao}
          />

          <InfoBar
            label="Projeção"
            value={produto.projecao}
          />
        </div>

        {produto.desempenho ? (
          <p className="mt-4 border-t border-zinc-200 pt-4 text-[11px] leading-5 text-zinc-600 sm:text-xs sm:leading-6">
            {produto.desempenho}
          </p>
        ) : produto.duracao ? (
          <div className="mt-4 flex items-center gap-2 border-t border-zinc-200 pt-4 text-xs text-zinc-600">
            <FaClock className="text-zinc-950" />
            Duração estimada:{" "}
            <strong className="text-zinc-950">
              {produto.duracao}
            </strong>
          </div>
        ) : null}
      </section>

      <section className="mt-4 border border-green-200 bg-green-50 p-4">
        <div className="flex items-center gap-2">
          <FaWhatsapp
            className="text-green-700"
            size={16}
          />

          <p className="text-sm font-black text-zinc-950">
            Precisa de ajuda para escolher?
          </p>
        </div>

        <p className="mt-2 text-xs leading-5 text-zinc-600">
          Escolha com quem deseja falar para receber uma consultoria
          sobre esta fragrância.
        </p>

        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {atendentes.map((atendente) => (
            <a
              key={atendente.nome}
              href={`https://wa.me/${atendente.telefone}?text=${encodeURIComponent(
                mensagemConsultoria,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center justify-center gap-2 bg-green-600 px-4 py-3 text-xs font-bold text-white transition hover:bg-green-500"
            >
              <FaWhatsapp size={14} />
              Falar com {atendente.nome}
            </a>
          ))}
        </div>
      </section>
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
    motivos.unshift(
      `Inspirado em ${produto.inspiradoEm}`,
    );
  }

  if (produto.ocasioes.length > 0) {
    motivos.push(
      `Ideal para ${produto.ocasioes
        .slice(0, 2)
        .join(" e ")}`,
    );
  }

  motivos.push(
    "Perfume original e selecionado pela Bold Parfum",
  );

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
      className={`group min-w-0 border border-zinc-200 bg-white p-3.5 transition hover:border-zinc-950 ${
        fullWidth ? "col-span-2" : ""
      }`}
    >
      <p className="text-[8px] font-black uppercase tracking-[0.12em] text-zinc-500 sm:text-[9px]">
        {label}
      </p>

      <p className="mt-1.5 break-words text-[11px] font-black leading-4 text-zinc-950 sm:text-sm sm:leading-5">
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
  const valorSeguro = Math.min(
    Math.max(value, 0),
    5,
  );

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <span className="text-xs font-bold text-zinc-700 sm:text-sm">
          {label}
        </span>

        <div className="flex items-center gap-1.5">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map(
              (_, index) => (
                <span
                  key={index}
                  className={`h-1.5 w-4 rounded-full sm:w-5 ${
                    index < valorSeguro
                      ? "bg-black"
                      : "bg-zinc-200"
                  }`}
                />
              ),
            )}
          </div>

          <span className="ml-1 text-[10px] font-black text-zinc-950">
            {valorSeguro}/5
          </span>
        </div>
      </div>

      <div
        className="h-1.5 overflow-hidden rounded-full bg-zinc-200"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={5}
        aria-valuenow={valorSeguro}
      >
        <div
          className="h-full rounded-full bg-black transition-all duration-700"
          style={{
            width: `${valorSeguro * 20}%`,
          }}
        />
      </div>
    </div>
  );
}