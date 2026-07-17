import {
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
    <section>
      <div className="mb-5 sm:mb-6">
        <p className="text-[9px] font-black uppercase tracking-[0.18em] text-yellow-400 sm:text-[11px]">
          Pirâmide olfativa
        </p>

        <h2 className="mt-1.5 text-xl font-black text-white sm:mt-2 sm:text-2xl">
          Notas da fragrância
        </h2>

        <p className="mt-2 max-w-2xl text-xs leading-5 text-zinc-500 sm:text-sm sm:leading-6">
          Conheça a evolução do perfume desde a primeira impressão até as notas
          que permanecem por mais tempo na pele.
        </p>
      </div>

      <div className="grid gap-3 sm:gap-4 lg:grid-cols-3">
        <NoteBox
          number="01"
          title="Notas de topo"
          description="A primeira impressão da fragrância."
          notes={produto.notasTopo}
          icon={<FaLeaf />}
        />

        <NoteBox
          number="02"
          title="Notas de coração"
          description="A personalidade principal do perfume."
          notes={produto.notasCoracao}
          icon={<FaSeedling />}
        />

        <NoteBox
          number="03"
          title="Notas de base"
          description="As notas que permanecem por mais tempo."
          notes={produto.notasBase}
          icon={<FaTree />}
        />
      </div>
    </section>
  );
}

function NoteBox({
  number,
  title,
  description,
  notes,
  icon,
}: {
  number: string;
  title: string;
  description: string;
  notes: string[];
  icon: React.ReactNode;
}) {
  return (
    <article className="group rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 transition hover:border-yellow-400/35 sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/[0.06] text-sm text-yellow-400 sm:h-10 sm:w-10">
            {icon}
          </div>

          <div className="min-w-0">
            <h3 className="text-base font-black text-white sm:text-lg">
              {title}
            </h3>

            <p className="mt-1 text-[10px] leading-4 text-zinc-500 sm:text-xs sm:leading-5">
              {description}
            </p>
          </div>
        </div>

        <span className="shrink-0 text-xl font-black text-yellow-400/15 transition group-hover:text-yellow-400/30 sm:text-2xl">
          {number}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {notes.length > 0 ? (
          notes.map((note) => (
            <span
              key={note}
              className="rounded-full border border-zinc-800 bg-black px-3 py-1.5 text-[10px] font-bold text-zinc-300 transition hover:border-yellow-400/40 hover:text-yellow-400 sm:text-xs"
            >
              {note}
            </span>
          ))
        ) : (
          <span className="text-xs text-zinc-500">
            Notas não informadas.
          </span>
        )}
      </div>
    </article>
  );
}