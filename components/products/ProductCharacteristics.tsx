 import type { ReactNode } from "react";
import {
  FaBolt,
  FaCheck,
  FaClock,
  FaGem,
  FaLayerGroup,
  FaMedal,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";
import type { Product } from "@/types/product";

type Props = {
  produto: Product;
};

type Highlight = {
  titulo: string;
  valor: string;
  icon: ReactNode;
};

export default function ProductCharacteristics({ produto }: Props) {
  const caracteristicas =
    produto.caracteristicas && produto.caracteristicas.length > 0
      ? produto.caracteristicas
      : criarCaracteristicasPadrao(produto);

  const destaques: Highlight[] = [
    {
      titulo: "Fixação",
      valor: produto.duracao ?? duracaoPorNota(produto.fixacao),
      icon: <FaClock />,
    },
    {
      titulo: "Projeção",
      valor: descricaoProjecao(produto.projecao),
      icon: <FaBolt />,
    },
    {
      titulo: "Concentração",
      valor: produto.concentracao,
      icon: <FaGem />,
    },
    {
      titulo: "Perfil",
      valor: produto.familiaOlfativa,
      icon: <FaLayerGroup />,
    },
  ];

  return (
    <section className="relative overflow-hidden rounded-[28px] border border-zinc-800 bg-gradient-to-br from-zinc-950 via-black to-yellow-400/[0.035] p-5 sm:p-8">
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-yellow-400/[0.055] blur-3xl" />

      <div className="relative">
        <header className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.08] text-yellow-400 shadow-[0_0_24px_rgba(250,204,21,0.08)] sm:h-12 sm:w-12">
            <FaMedal size={16} />
          </div>

          <div className="min-w-0">
            <p className="text-[9px] font-black uppercase tracking-[0.22em] text-yellow-400 sm:text-[11px]">
              Diferenciais da fragrância
            </p>

            <h2 className="mt-1.5 text-2xl font-black tracking-[-0.025em] text-white sm:text-3xl">
              Por que ele se destaca?
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-500 sm:text-base">
              Os principais atributos que tornam esta fragrância uma escolha
              especial dentro da seleção Bold Parfum.
            </p>
          </div>
        </header>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {destaques.map((destaque) => (
            <HighlightCard
              key={destaque.titulo}
              titulo={destaque.titulo}
              valor={destaque.valor}
              icon={destaque.icon}
            />
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <article className="rounded-2xl border border-zinc-800 bg-zinc-950/75 p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-black">
                <FaStar size={14} />
              </div>

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-yellow-400">
                  Pontos fortes
                </p>

                <h3 className="mt-1 text-lg font-black text-white">
                  O que você encontrará nesta fragrância
                </h3>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {caracteristicas.map((caracteristica) => (
                <div
                  key={caracteristica}
                  className="group flex min-w-0 items-start gap-3 rounded-xl border border-zinc-800 bg-black/40 p-3.5 transition duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/[0.035]"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-yellow-400/20 bg-yellow-400/[0.08] text-[9px] text-yellow-400 transition group-hover:bg-yellow-400 group-hover:text-black">
                    <FaCheck />
                  </span>

                  <p className="text-xs font-semibold leading-5 text-zinc-300 sm:text-sm sm:leading-6">
                    {caracteristica}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="relative overflow-hidden rounded-2xl border border-yellow-400/20 bg-gradient-to-br from-yellow-400/[0.09] via-yellow-400/[0.035] to-zinc-950 p-5 sm:p-6">
            <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-yellow-400/10 blur-3xl" />

            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black">
                <FaShieldAlt size={15} />
              </div>

              <p className="mt-5 text-[9px] font-black uppercase tracking-[0.2em] text-yellow-400">
                Curadoria Bold Parfum
              </p>

              <h3 className="mt-2 text-xl font-black leading-tight text-white">
                Uma escolha feita para quem valoriza qualidade e presença.
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                Selecionamos fragrâncias que unem identidade, boa performance e
                uma experiência olfativa marcante, sempre buscando oferecer
                excelente relação entre qualidade e investimento.
              </p>

              <div className="mt-5 space-y-3 border-t border-yellow-400/15 pt-5">
                <TrustItem texto="Produto original e selecionado" />
                <TrustItem texto="Informações completas para sua escolha" />
                <TrustItem texto="Atendimento personalizado pelo WhatsApp" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function HighlightCard({
  titulo,
  valor,
  icon,
}: {
  titulo: string;
  valor: string;
  icon: ReactNode;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-yellow-400/30 sm:p-5">
      <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-yellow-400/[0.06] blur-2xl" />

      <div className="relative">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/[0.08] text-sm text-yellow-400 transition duration-300 group-hover:scale-105">
          {icon}
        </div>

        <p className="mt-4 text-[9px] font-black uppercase tracking-[0.16em] text-zinc-500">
          {titulo}
        </p>

        <p className="mt-1.5 text-sm font-black leading-6 text-white">
          {valor}
        </p>
      </div>
    </article>
  );
}

function TrustItem({ texto }: { texto: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-400/10 text-[8px] text-yellow-400">
        <FaCheck />
      </span>

      <span className="text-xs font-semibold leading-5 text-zinc-300">
        {texto}
      </span>
    </div>
  );
}

function criarCaracteristicasPadrao(produto: Product) {
  const caracteristicas = [
    `Perfil ${produto.familiaOlfativa.toLowerCase()}`,
    `Fixação avaliada em ${produto.fixacao}/5`,
    `Projeção avaliada em ${produto.projecao}/5`,
    `Fragrância ${produto.genero.toLowerCase()}`,
  ];

  if (produto.inspiradoEm) {
    caracteristicas.unshift(`Inspirado em ${produto.inspiradoEm}`);
  }

  if (produto.ocasioes.length > 0) {
    caracteristicas.push(
      `Indicado para ${produto.ocasioes.slice(0, 3).join(", ")}`
    );
  }

  caracteristicas.push("Selecionado pela curadoria Bold Parfum");

  return caracteristicas.slice(0, 8);
}

function duracaoPorNota(nota: number) {
  if (nota >= 5) return "8 horas ou mais";
  if (nota >= 4) return "6 a 8 horas";
  if (nota >= 3) return "4 a 6 horas";
  if (nota >= 2) return "3 a 4 horas";

  return "Até 3 horas";
}

function descricaoProjecao(nota: number) {
  if (nota >= 5) return "Muito marcante";
  if (nota >= 4) return "Moderada a alta";
  if (nota >= 3) return "Moderada";
  if (nota >= 2) return "Discreta a moderada";

  return "Discreta";
}