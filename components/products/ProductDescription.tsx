import {
  FaCrown,
  FaGem,
  FaQuoteLeft,
  FaStar,
  FaUserCheck,
} from "react-icons/fa";
import type { Product } from "@/types/product";

type Props = {
  produto: Product;
};

export default function ProductDescription({ produto }: Props) {
  const textoParaQuem =
    produto.perfil?.publico ??
    criarTextoParaQuem(produto);

  const impressao =
    produto.perfil?.impressao ??
    criarImpressao(produto);

  return (
    <section className="overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-950 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-8">
      <header className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-zinc-700 bg-white text-black sm:h-12 sm:w-12">
          <FaQuoteLeft size={15} />
        </div>

        <div className="min-w-0">
          <p className="text-[9px] font-black uppercase tracking-[0.22em] text-zinc-400 sm:text-[11px]">
            A essência desta fragrância
          </p>

          <h2 className="mt-1.5 max-w-3xl text-2xl font-black leading-tight tracking-[-0.025em] text-white sm:text-3xl">
            Uma presença que começa no aroma e permanece na memória.
          </h2>
        </div>
      </header>

      <div className="mt-6 border-t border-zinc-800 pt-6">
        <p className="max-w-5xl whitespace-pre-line text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
          {produto.descricao}
        </p>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <article className="group rounded-2xl border border-zinc-800 bg-black p-5 transition duration-300 hover:border-zinc-600 hover:bg-zinc-900 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-black">
              <FaUserCheck size={14} />
            </div>

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-zinc-400">
                Perfil ideal
              </p>

              <h3 className="mt-1 text-lg font-black text-white">
                Para quem é este perfume?
              </h3>
            </div>
          </div>

          <p className="mt-4 text-sm leading-7 text-zinc-300">
            {textoParaQuem}
          </p>
        </article>

        <article className="group rounded-2xl border border-zinc-800 bg-black p-5 transition duration-300 hover:border-zinc-600 hover:bg-zinc-900 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 text-white">
              <FaGem size={14} />
            </div>

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-zinc-400">
                Sensação olfativa
              </p>

              <h3 className="mt-1 text-lg font-black text-white">
                O que essa fragrância transmite?
              </h3>
            </div>
          </div>

          <p className="mt-4 text-sm leading-7 text-zinc-300">
            {impressao}
          </p>
        </article>
      </div>

      {produto.inspiradoEm ? (
        <div className="mt-5 rounded-2xl border border-zinc-700 bg-zinc-900 p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-black">
              <FaCrown size={15} />
            </div>

            <div className="min-w-0">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">
                Referência olfativa
              </p>

              <h3 className="mt-1 text-lg font-black text-white">
                Uma interpretação inspirada em{" "}
                <span className="text-white">
                  {produto.inspiradoEm}
                </span>
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-300">
                Uma alternativa criada para entregar uma experiência olfativa
                semelhante, preservando personalidade própria e excelente
                custo-benefício.
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {produto.nossaAvaliacao ? (
        <div className="mt-5 rounded-2xl border border-zinc-800 bg-black p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 text-white">
              <FaStar size={14} />
            </div>

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-zinc-400">
                Curadoria Bold Parfum
              </p>

              <h3 className="mt-1 text-lg font-black text-white">
                Nossa leitura da fragrância
              </h3>
            </div>
          </div>

          <p className="mt-4 text-sm leading-7 text-zinc-300 sm:text-base">
            {produto.nossaAvaliacao}
          </p>
        </div>
      ) : null}
    </section>
  );
}

function criarTextoParaQuem(produto: Product) {
  const genero =
    produto.genero === "Unissex"
      ? "pessoas"
      : produto.genero === "Feminino"
        ? "mulheres"
        : "homens";

  const ocasioes = produto.ocasioes.slice(0, 3).join(", ");

  return `Indicado para ${genero} que valorizam fragrâncias ${produto.familiaOlfativa.toLowerCase()}, com presença, personalidade e boa performance. É uma escolha especialmente interessante para ${ocasioes || "diferentes ocasiões"}.`;
}

function criarImpressao(produto: Product) {
  if (produto.desempenho) {
    return produto.desempenho;
  }

  if (produto.rastro) {
    return `Transmite uma assinatura elegante e marcante, com rastro ${produto.rastro.toLowerCase()} e evolução equilibrada ao longo do uso.`;
  }

  return `Uma fragrância de perfil ${produto.familiaOlfativa.toLowerCase()}, desenvolvida para transmitir elegância, personalidade e uma presença agradável ao longo do uso.`;
}