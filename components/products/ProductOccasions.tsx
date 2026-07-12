import { FaCheck } from "react-icons/fa";
import { Product } from "@/types/product";

type Props = {
  produto: Product;
};

export default function ProductOccasions({ produto }: Props) {
  return (
    <section className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:p-7">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black">
          <FaCheck size={13} />
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-yellow-400">
            Indicação de uso
          </p>

          <h2 className="mt-1 text-xl font-black text-white sm:text-2xl">
            Ocasiões recomendadas
          </h2>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {produto.ocasioes.map((ocasiao) => (
          <span
            key={ocasiao}
            className="rounded-full border border-yellow-400/30 bg-yellow-400/5 px-3.5 py-2 text-xs font-semibold text-yellow-400 sm:text-sm"
          >
            {ocasiao}
          </span>
        ))}
      </div>
    </section>
  );
}