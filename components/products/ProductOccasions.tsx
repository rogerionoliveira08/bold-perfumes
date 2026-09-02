import type { ReactNode } from "react";
import {
  FaCalendarCheck,
  FaCheck,
  FaCloudSun,
  FaMoon,
  FaRegCalendarAlt,
  FaSun,
  FaThermometerHalf,
} from "react-icons/fa";
import type { Product } from "@/types/product";

type Props = {
  produto: Product;
};

export default function ProductOccasions({ produto }: Props) {
  const estacoes =
    produto.usoIdeal?.estacoes && produto.usoIdeal.estacoes.length > 0
      ? produto.usoIdeal.estacoes
      : produto.estacoes ?? [];

  const periodos =
    produto.usoIdeal?.periodos && produto.usoIdeal.periodos.length > 0
      ? produto.usoIdeal.periodos
      : criarPeriodosPadrao(produto);

  const climas =
    produto.usoIdeal?.climas && produto.usoIdeal.climas.length > 0
      ? produto.usoIdeal.climas
      : criarClimasPadrao(produto);

  return (
    <section className="overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-950 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-8">
      <header className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-zinc-700 bg-white text-black sm:h-12 sm:w-12">
          <FaRegCalendarAlt size={16} />
        </div>

        <div className="min-w-0">
          <p className="text-[9px] font-black uppercase tracking-[0.22em] text-zinc-400 sm:text-[11px]">
            Quando usar
          </p>

          <h2 className="mt-1.5 text-2xl font-black tracking-[-0.025em] text-white sm:text-3xl">
            Momentos em que essa fragrância se destaca
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
            Veja as melhores ocasiões, estações, períodos e climas para
            aproveitar todo o potencial deste perfume.
          </p>
        </div>
      </header>

      <div className="mt-7 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="rounded-2xl border border-zinc-800 bg-black p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-black">
              <FaCalendarCheck size={14} />
            </div>

            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-zinc-400">
                Ocasiões recomendadas
              </p>

              <h3 className="mt-1 text-lg font-black text-white">
                Onde ele funciona melhor
              </h3>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {produto.ocasioes.length > 0 ? (
              produto.ocasioes.map((ocasiao) => (
                <div
                  key={ocasiao}
                  className="group flex min-w-0 items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950 p-3.5 transition duration-300 hover:border-zinc-600 hover:bg-zinc-900"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-zinc-600 bg-white text-[8px] text-black">
                    <FaCheck />
                  </span>

                  <span className="text-xs font-bold leading-5 text-zinc-200 sm:text-sm">
                    {ocasiao}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-sm text-zinc-400">
                Ocasiões não informadas.
              </p>
            )}
          </div>
        </article>

        <div className="grid gap-4">
          {estacoes.length > 0 ? (
            <ContextCard
              eyebrow="Estações"
              title="Melhor época do ano"
              items={estacoes}
              icon={<FaCloudSun />}
            />
          ) : null}

          {periodos.length > 0 ? (
            <ContextCard
              eyebrow="Períodos"
              title="Melhor horário"
              items={periodos}
              icon={
                periodos.some((periodo) =>
                  periodo.toLowerCase().includes("noite")
                ) ? (
                  <FaMoon />
                ) : (
                  <FaSun />
                )
              }
            />
          ) : null}

          {climas.length > 0 ? (
            <ContextCard
              eyebrow="Climas"
              title="Temperatura ideal"
              items={climas}
              icon={<FaThermometerHalf />}
            />
          ) : null}
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-zinc-700 bg-zinc-900 p-4 sm:p-5">
        <p className="text-sm leading-7 text-zinc-300">
          <strong className="text-white">Dica Bold Parfum:</strong>{" "}
          a performance de uma fragrância pode variar de acordo com clima,
          tipo de pele, quantidade aplicada e ambiente. Use estas indicações
          como referência para aproveitar melhor o perfume.
        </p>
      </div>
    </section>
  );
}

function ContextCard({
  eyebrow,
  title,
  items,
  icon,
}: {
  eyebrow: string;
  title: string;
  items: string[];
  icon: ReactNode;
}) {
  return (
    <article className="group rounded-2xl border border-zinc-800 bg-black p-5 transition duration-300 hover:border-zinc-600 hover:bg-zinc-900">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-700 bg-white text-black transition duration-300 group-hover:scale-105">
          {icon}
        </div>

        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-zinc-400">
            {eyebrow}
          </p>

          <h3 className="mt-1 text-base font-black text-white">
            {title}
          </h3>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-zinc-700 bg-zinc-950 px-3 py-2 text-[10px] font-bold text-zinc-200 transition duration-300 hover:border-white hover:bg-white hover:text-black sm:text-xs"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

function criarPeriodosPadrao(produto: Product) {
  const ocasioes = produto.ocasioes.map((ocasiao) =>
    ocasiao.toLowerCase()
  );

  const periodos: string[] = [];

  if (
    ocasioes.some(
      (ocasiao) =>
        ocasiao.includes("trabalho") ||
        ocasiao.includes("dia") ||
        ocasiao.includes("passeio")
    )
  ) {
    periodos.push("Dia");
  }

  if (
    ocasioes.some(
      (ocasiao) =>
        ocasiao.includes("noite") ||
        ocasiao.includes("jantar") ||
        ocasiao.includes("festa") ||
        ocasiao.includes("encontro")
    )
  ) {
    periodos.push("Noite");
  }

  return periodos.length > 0 ? periodos : ["Dia", "Noite"];
}

function criarClimasPadrao(produto: Product) {
  const estacoes = produto.estacoes ?? [];
  const textoEstacoes = estacoes.join(" ").toLowerCase();

  if (
    textoEstacoes.includes("inverno") ||
    produto.familiaOlfativa.toLowerCase().includes("oriental") ||
    produto.familiaOlfativa.toLowerCase().includes("âmbar") ||
    produto.familiaOlfativa.toLowerCase().includes("gourmand")
  ) {
    return ["Frio", "Ameno", "Ambientes climatizados"];
  }

  if (
    textoEstacoes.includes("verão") ||
    produto.familiaOlfativa.toLowerCase().includes("cítrico") ||
    produto.familiaOlfativa.toLowerCase().includes("aquático")
  ) {
    return ["Quente", "Ameno"];
  }

  return ["Ameno", "Fresco"];
}