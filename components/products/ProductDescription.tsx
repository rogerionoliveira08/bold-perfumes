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
    <section className="relative overflow-hidden rounded-[28px] border border-zinc-800 bg-gradient-to-br from-zinc-950 via-zinc-950 to-yellow-400/[0.035] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-8">
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-yellow-400/[0.06] blur-3xl" />

      <div className="relative">
        <header className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.08] text-yellow-400 shadow-[0_0_24px_rgba(250,204,21,0.08)] sm:h-12 sm:w-12">
            <FaQuoteLeft size={15} />
          </div>

          <div className="min-w-0">
            <p className="text-[9px] font-black uppercase tracking-[0.22em] text-yellow-400 sm:text-[11px]">
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
          <article className="group rounded-2xl border border-zinc-800 bg-black/35 p-5 transition duration-300 hover:border-yellow-400/25 hover:bg-yellow-400/[0.025] sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-black">
                <FaUserCheck size={14} />
              </div>

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-yellow-400">
                  Perfil ideal
                </p>

                <h3 className="mt-1 text-lg font-black text-white">
                  Para quem é este perfume?
                </h3>
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              {textoParaQuem}
            </p>
          </article>

          <article className="group rounded-2xl border border-zinc-800 bg-black/35 p-5 transition duration-300 hover:border-yellow-400/25 hover:bg-yellow-400/[0.025] sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/[0.08] text-yellow-400">
                <FaGem size={14} />
              </div>

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-yellow-400">
                  Sensação olfativa
                </p>

                <h3 className="mt-1 text-lg font-black text-white">
                  O que essa fragrância transmite?
                </h3>
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              {impressao}
            </p>
          </article>
        </div>

        {produto.inspiradoEm ? (
          <div className="relative mt-5 overflow-hidden rounded-2xl border border-yellow-400/20 bg-gradient-to-r from-yellow-400/[0.08] via-yellow-400/[0.035] to-transparent p-5 sm:p-6">
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-yellow-400/10 blur-3xl" />

            <div className="relative flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-black">
                <FaCrown size={15} />
              </div>

              <div className="min-w-0">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-yellow-400">
                  Referência olfativa
                </p>

                <h3 className="mt-1 text-lg font-black text-white">
                  Uma interpretação inspirada em{" "}
                  <span className="text-yellow-400">
                    {produto.inspiradoEm}
                  </span>
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  Uma alternativa criada para entregar uma experiência olfativa
                  semelhante, preservando personalidade própria e excelente
                  custo-benefício.
                </p>
              </div>
            </div>
          </div>
        ) : null}

        {produto.nossaAvaliacao ? (
          <div className="mt-5 rounded-2xl border border-zinc-800 bg-black/40 p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/[0.08] text-yellow-400">
                <FaStar size={14} />
              </div>

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-yellow-400">
                  Curadoria Bold Parfum
                </p>

                <h3 className="mt-1 text-lg font-black text-white">
                  Nossa leitura da fragrância
                </h3>
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
              {produto.nossaAvaliacao}
            </p>
          </div>
        ) : null}
      </div>
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