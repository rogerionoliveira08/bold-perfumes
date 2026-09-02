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
    <section className="overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-950 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-8">
      <header className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-zinc-700 bg-white text-black sm:h-12 sm:w-12">
          <FaFeatherAlt size={15} />
        </div>

        <div className="min-w-0">
          <p className="text-[9px] font-black uppercase tracking-[0.22em] text-zinc-400 sm:text-[11px]">
            A evolução da fragrância
          </p>

          <h2 className="mt-1.5 text-2xl font-black tracking-[-0.025em] text-white sm:text-3xl">
            Pirâmide olfativa
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
            Descubra como o perfume se transforma desde a primeira impressão
            até o aroma que permanece na pele.
          </p>
        </div>
      </header>

      <div className="mt-7 grid gap-4 lg:grid-cols-3">
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
      className={`group relative overflow-hidden rounded-2xl border p-5 transition duration-300 sm:p-6 ${
        featured
          ? "border-zinc-600 bg-zinc-900 shadow-[0_18px_45px_rgba(0,0,0,0.28)]"
          : "border-zinc-800 bg-black hover:border-zinc-600 hover:bg-zinc-900"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-zinc-700 bg-white text-black transition duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
          {icon}
        </div>

        <span className="text-3xl font-black tracking-[-0.04em] text-zinc-700 transition duration-300 group-hover:text-zinc-500">
          {number}
        </span>
      </div>

      <div className="mt-5">
        <p className="text-[9px] font-black uppercase tracking-[0.18em] text-zinc-400 sm:text-[10px]">
          {eyebrow}
        </p>

        <h3 className="mt-1.5 text-xl font-black tracking-[-0.02em] text-white">
          {title}
        </h3>

        <p className="mt-2 text-xs leading-6 text-zinc-300 sm:text-sm">
          {description}
        </p>
      </div>

      <div className="mt-5 h-px bg-zinc-800" />

      <div className="mt-5 flex flex-wrap gap-2">
        {notes.length > 0 ? (
          notes.map((note) => (
            <span
              key={note}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950 px-3 py-2 text-[10px] font-bold text-zinc-200 transition duration-300 hover:border-zinc-500 hover:bg-white hover:text-black sm:text-xs"
            >
              <FaGem size={8} className="text-zinc-400" />
              {note}
            </span>
          ))
        ) : (
          <span className="text-xs text-zinc-400">
            Notas não informadas.
          </span>
        )}
      </div>
    </article>
  );
}