import { Product } from "@/types/product";

type Props = {
  produto: Product;
};

export default function ProductNotes({ produto }: Props) {
  return (
    <section className="mt-8">
      <div className="mb-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-yellow-400">
          Pirâmide olfativa
        </p>

        <h2 className="mt-2 text-2xl font-black text-white">
          Notas da fragrância
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <NoteBox
          number="01"
          title="Notas de topo"
          description="A primeira impressão da fragrância."
          notes={produto.notasTopo}
        />

        <NoteBox
          number="02"
          title="Notas de coração"
          description="A personalidade principal do perfume."
          notes={produto.notasCoracao}
        />

        <NoteBox
          number="03"
          title="Notas de base"
          description="As notas que permanecem por mais tempo."
          notes={produto.notasBase}
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
}: {
  number: string;
  title: string;
  description: string;
  notes: string[];
}) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-black text-white">{title}</h3>

          <p className="mt-1 text-xs leading-5 text-zinc-500">
            {description}
          </p>
        </div>

        <span className="text-2xl font-black text-yellow-400/20">
          {number}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {notes.map((note) => (
          <span
            key={note}
            className="rounded-full border border-zinc-800 bg-black px-3 py-1.5 text-xs font-medium text-zinc-300"
          >
            {note}
          </span>
        ))}
      </div>
    </article>
  );
}