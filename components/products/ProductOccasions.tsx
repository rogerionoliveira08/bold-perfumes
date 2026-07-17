import {
  FaCheck,
  FaRegCalendarAlt,
} from "react-icons/fa";
import type { Product } from "@/types/product";

type Props = {
  produto: Product;
};

export default function ProductOccasions({ produto }: Props) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 sm:p-7">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/[0.06] text-yellow-400 sm:h-11 sm:w-11">
          <FaRegCalendarAlt size={15} />
        </div>

        <div className="min-w-0">
          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-yellow-400 sm:text-[11px]">
            Indicação de uso
          </p>

          <h2 className="mt-1 text-xl font-black text-white sm:mt-2 sm:text-2xl">
            Ocasiões recomendadas
          </h2>

          <p className="mt-2 max-w-2xl text-xs leading-5 text-zinc-500 sm:text-sm sm:leading-6">
            Veja os momentos em que esta fragrância pode se destacar melhor.
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3">
        {produto.ocasioes.length > 0 ? (
          produto.ocasioes.map((ocasiao) => (
            <div
              key={ocasiao}
              className="flex min-w-0 items-center gap-2 rounded-xl border border-yellow-400/20 bg-yellow-400/[0.04] px-3 py-2.5 transition hover:border-yellow-400/40 sm:px-4"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-[8px] text-black">
                <FaCheck />
              </span>

              <span className="min-w-0 break-words text-[10px] font-black leading-4 text-yellow-400 sm:text-sm">
                {ocasiao}
              </span>
            </div>
          ))
        ) : (
          <p className="col-span-2 text-xs text-zinc-500">
            Ocasiões não informadas.
          </p>
        )}
      </div>
    </section>
  );
}