import type { ReactNode } from "react";
import {
  FaBolt,
  FaCalendarAlt,
  FaClock,
  FaCloudSun,
  FaFire,
  FaGem,
  FaLeaf,
  FaMoon,
  FaRegStar,
  FaStar,
  FaSun,
  FaUsers,
} from "react-icons/fa";
import type { Product } from "@/types/product";

type Props = {
  produto: Product;
};

type IndicadorProps = {
  nome: string;
  valor: number;
  icon: ReactNode;
};

export default function ProductCharacteristics({ produto }: Props) {
  const performance = produto.performance ?? {
    intensidade: produto.projecao,
    versatilidade: 4,
    elegancia: 4,
    frescor: 3,
    docura: 3,
  };

  const usoIdeal = produto.usoIdeal ?? {
    estacoes: ["Primavera", "Outono", "Inverno"],
    periodos: ["Dia", "Noite"],
    climas: ["Ameno", "Fresco"],
  };

  const perfil = produto.perfil ?? {
    estilos: ["Elegante", "Moderno", "Marcante"],
    publico:
      "Indicado para quem procura uma fragrância elegante, marcante e versátil.",
    impressao:
      "Uma fragrância sofisticada e envolvente, com excelente presença.",
  };

  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.24em] text-yellow-400">
          Conheça a fragrância
        </p>

        <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
          Características do perfume
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
          Veja o perfil, o desempenho e as melhores situações para aproveitar
          esta fragrância.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <InfoCard
          titulo="Família olfativa"
          valor={produto.familiaOlfativa}
          icon={<FaLeaf />}
        />

        <InfoCard
          titulo="Concentração"
          valor={produto.concentracao}
          icon={<FaGem />}
        />

        <InfoCard
          titulo="Volume"
          valor={produto.volume}
          icon={<FaFire />}
        />

        <InfoCard
          titulo="Origem"
          valor={produto.origem}
          icon={<FaUsers />}
        />

        <InfoCard
          titulo="Fixação estimada"
          valor={produto.duracao ?? duracaoPorNota(produto.fixacao)}
          icon={<FaClock />}
        />

        <InfoCard
          titulo="Projeção"
          valor={descricaoProjecao(produto.projecao)}
          icon={<FaBolt />}
        />

        <InfoCard
          titulo="Rastro"
          valor={produto.rastro ?? descricaoRastro(produto.projecao)}
          icon={<FaCloudSun />}
        />

        <InfoCard
          titulo="Gênero"
          valor={produto.genero}
          icon={<FaUsers />}
        />
      </div>

      {produto.inspiradoEm && (
        <article className="rounded-2xl border border-yellow-400/20 bg-gradient-to-br from-yellow-400/[0.09] to-zinc-950 p-5 sm:p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-400">
            Inspiração olfativa
          </p>

          <h3 className="mt-2 text-xl font-black text-white">
            {produto.inspiradoEm}
          </h3>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">
            Uma interpretação com identidade própria e excelente
            custo-benefício para quem aprecia o perfil dessa fragrância.
          </p>
        </article>
      )}

      <div className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 sm:p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-400">
            Desempenho e personalidade
          </p>

          <div className="mt-6 space-y-5">
            <Indicador
              nome="Fixação"
              valor={produto.fixacao}
              icon={<FaClock />}
            />

            <Indicador
              nome="Projeção"
              valor={produto.projecao}
              icon={<FaBolt />}
            />

            <Indicador
              nome="Intensidade"
              valor={performance.intensidade}
              icon={<FaFire />}
            />

            <Indicador
              nome="Versatilidade"
              valor={performance.versatilidade}
              icon={<FaCalendarAlt />}
            />

            <Indicador
              nome="Elegância"
              valor={performance.elegancia}
              icon={<FaGem />}
            />

            <Indicador
              nome="Frescor"
              valor={performance.frescor}
              icon={<FaLeaf />}
            />

            <Indicador
              nome="Doçura"
              valor={performance.docura}
              icon={<FaRegStar />}
            />
          </div>
        </article>

        <article className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 sm:p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-400">
            Melhor momento para usar
          </p>

          <div className="mt-6 space-y-6">
            <TagGroup
              titulo="Estações recomendadas"
              itens={usoIdeal.estacoes}
              icon={<FaCloudSun />}
            />

            <TagGroup
              titulo="Períodos"
              itens={usoIdeal.periodos}
              icon={
                usoIdeal.periodos.some((periodo) =>
                  periodo.toLowerCase().includes("noite"),
                ) ? (
                  <FaMoon />
                ) : (
                  <FaSun />
                )
              }
            />

            {usoIdeal.climas && usoIdeal.climas.length > 0 && (
              <TagGroup
                titulo="Climas"
                itens={usoIdeal.climas}
                icon={<FaCloudSun />}
              />
            )}

            <TagGroup
              titulo="Ocasiões"
              itens={produto.ocasioes}
              icon={<FaCalendarAlt />}
            />
          </div>
        </article>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 sm:p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-400">
            Perfil da fragrância
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {perfil.estilos.map((estilo) => (
              <span
                key={estilo}
                className="rounded-full border border-yellow-400/20 bg-yellow-400/[0.07] px-3 py-2 text-xs font-bold text-yellow-300"
              >
                {estilo}
              </span>
            ))}
          </div>

          {perfil.impressao && (
            <p className="mt-5 text-sm leading-7 text-zinc-300">
              {perfil.impressao}
            </p>
          )}

          <div className="mt-5 border-t border-zinc-800 pt-5">
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              Para quem recomendamos
            </p>

            <p className="mt-2 text-sm leading-7 text-zinc-400">
              {perfil.publico}
            </p>
          </div>
        </article>

        <article className="rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.05] p-5 sm:p-6">
          <div className="flex items-center gap-2 text-yellow-400">
            <FaStar />
            <p className="text-xs font-black uppercase tracking-[0.22em]">
              Avaliação Bold Parfum
            </p>
          </div>

          <p className="mt-5 text-sm leading-7 text-zinc-300 sm:text-base">
            {produto.nossaAvaliacao ??
              `${produto.nome} é uma ótima escolha para quem busca uma fragrância de presença, personalidade e bom desempenho. Seu perfil olfativo permite uma experiência elegante e marcante em diferentes ocasiões.`}
          </p>

          {produto.semelhantes && produto.semelhantes.length > 0 && (
            <div className="mt-6 border-t border-yellow-400/15 pt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                Você também pode gostar se aprecia
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {produto.semelhantes.map((semelhante) => (
                  <span
                    key={semelhante}
                    className="rounded-lg border border-zinc-800 bg-black/40 px-3 py-2 text-xs text-zinc-300"
                  >
                    {semelhante}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </section>
  );
}

function InfoCard({
  titulo,
  valor,
  icon,
}: {
  titulo: string;
  valor: string;
  icon: ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 transition hover:border-yellow-400/30">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-yellow-400/20 bg-yellow-400/[0.07] text-sm text-yellow-400">
        {icon}
      </div>

      <p className="mt-4 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-500">
        {titulo}
      </p>

      <p className="mt-1 text-sm font-bold leading-6 text-white">
        {valor}
      </p>
    </article>
  );
}

function Indicador({ nome, valor, icon }: IndicadorProps) {
  const nota = limitarNota(valor);

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-bold text-zinc-200">
          <span className="text-yellow-400">{icon}</span>
          {nome}
        </div>

        <span className="text-xs font-bold text-zinc-500">
          {nota}/5
        </span>
      </div>

      <div className="grid grid-cols-5 gap-1.5">
        {Array.from({ length: 5 }).map((_, indice) => {
          const ativo = indice < nota;

          return (
            <span
              key={indice}
              className={`h-2.5 rounded-full ${
                ativo ? "bg-yellow-400" : "bg-zinc-800"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

function TagGroup({
  titulo,
  itens,
  icon,
}: {
  titulo: string;
  itens: string[];
  icon: ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-sm font-bold text-white">
        <span className="text-yellow-400">{icon}</span>
        {titulo}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {itens.map((item) => (
          <span
            key={item}
            className="rounded-lg border border-zinc-800 bg-black/40 px-3 py-2 text-xs text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function limitarNota(valor: number) {
  return Math.max(1, Math.min(5, Math.round(valor)));
}

function duracaoPorNota(nota: number) {
  if (nota >= 5) return "8 horas ou mais";
  if (nota >= 4) return "6 a 8 horas";
  if (nota >= 3) return "4 a 6 horas";
  if (nota >= 2) return "3 a 4 horas";

  return "Até 3 horas";
}

function descricaoProjecao(nota: number) {
  if (nota >= 5) return "Muito alta";
  if (nota >= 4) return "Moderada a alta";
  if (nota >= 3) return "Moderada";
  if (nota >= 2) return "Baixa a moderada";

  return "Baixa";
}

function descricaoRastro(nota: number) {
  if (nota >= 5) return "Muito marcante";
  if (nota >= 4) return "Moderado a marcante";
  if (nota >= 3) return "Moderado";
  if (nota >= 2) return "Discreto a moderado";

  return "Discreto";
}