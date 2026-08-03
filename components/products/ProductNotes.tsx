 import type { ReactNode } from "react";
import {
  FaFeatherAlt,
  FaGem,
  FaLeaf,
  FaSeedling,
  FaTree,
} from "react-icons/fa";
import type { Product } from "@/types/product";

type Props = {
  produto: Product;
};

export default function ProductNotes({ produto }: Props) {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-zinc-800 bg-gradient-to-br from-zinc-950 via-black to-yellow-400/[0.03] p-5 sm:p-8">
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-yellow-400/[0.05] blur-3xl" />

      <div className="relative">
        <header className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.08] text-yellow-400 shadow-[0_0_24px_rgba(250,204,21,0.08)] sm:h-12 sm:w-12">
            <FaFeatherAlt size={15} />
          </div>

          <div className="min-w-0">
            <p className="text-[9px] font-black uppercase tracking-[0.22em] text-yellow-400 sm:text-[11px]">
              A evolução da fragrância
            </p>

            <h2 className="mt-1.5 text-2xl font-black tracking-[-0.025em] text-white sm:text-3xl">
              Pirâmide olfativa
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-500 sm:text-base">
              Descubra como o perfume se transforma desde a primeira impressão
              até o aroma que permanece na pele.
            </p>
          </div>
        </header>

        <div className="relative mt-7 grid gap-4 lg:grid-cols-3">
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-8 hidden h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent lg:block" />

          <NoteBox
            number="01"
            eyebrow="A primeira impressão"
            title="Notas de topo"
            description="São as primeiras notas percebidas logo após a aplicação."
            notes={produto.notasTopo}
            icon={<FaLeaf />}
          />

          <NoteBox
            number="02"
            eyebrow="A alma do perfume"
            title="Notas de coração"
            description="Revelam a personalidade principal da fragrância."
            notes={produto.notasCoracao}
            icon={<FaSeedling />}
            featured
          />

          <NoteBox
            number="03"
            eyebrow="O aroma que permanece"
            title="Notas de base"
            description="São as notas mais profundas e duradouras da composição."
            notes={produto.notasBase}
            icon={<FaTree />}
          />
        </div>
      </div>
    </section>
  );
}

function NoteBox({
  number,
  eyebrow,
  title,
  description,
  notes,
  icon,
  featured = false,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  notes: string[];
  icon: ReactNode;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border p-5 transition duration-500 sm:p-6 ${
        featured
          ? "border-yellow-400/25 bg-gradient-to-br from-yellow-400/[0.08] to-zinc-950 shadow-[0_18px_45px_rgba(0,0,0,0.28)]"
          : "border-zinc-800 bg-zinc-950/80 hover:border-yellow-400/30"
      }`}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-yellow-400/[0.06] blur-3xl" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/[0.08] text-yellow-400 transition duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
            {icon}
          </div>

          <span className="text-3xl font-black tracking-[-0.04em] text-yellow-400/10 transition duration-300 group-hover:text-yellow-400/25">
            {number}
          </span>
        </div>

        <div className="mt-5">
          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-yellow-400 sm:text-[10px]">
            {eyebrow}
          </p>

          <h3 className="mt-1.5 text-xl font-black tracking-[-0.02em] text-white">
            {title}
          </h3>

          <p className="mt-2 text-xs leading-6 text-zinc-500 sm:text-sm">
            {description}
          </p>
        </div>

        <div className="mt-5 h-px bg-gradient-to-r from-yellow-400/25 via-zinc-800 to-transparent" />

        <div className="mt-5 flex flex-wrap gap-2">
          {notes.length > 0 ? (
            notes.map((note) => (
              <span
                key={note}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-black/70 px-3 py-2 text-[10px] font-bold text-zinc-300 transition duration-300 hover:border-yellow-400/40 hover:bg-yellow-400/[0.06] hover:text-yellow-300 sm:text-xs"
              >
                <FaGem size={8} className="text-yellow-400/70" />
                {note}
              </span>
            ))
          ) : (
            <span className="text-xs text-zinc-500">
              Notas não informadas.
            </span>
          )}
        </div>
      </div>
    </article>
  );
}