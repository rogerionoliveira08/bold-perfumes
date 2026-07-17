import { FaQuoteLeft } from "react-icons/fa";
import type { Product } from "@/types/product";

type Props = {
  produto: Product;
};

export default function ProductDescription({ produto }: Props) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 sm:p-7">
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/[0.06] text-yellow-400 sm:h-11 sm:w-11">
          <FaQuoteLeft size={14} />
        </div>

        <div className="min-w-0">
          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-yellow-400 sm:text-[11px]">
            Sobre a fragrância
          </p>

          <h2 className="mt-1 text-xl font-black text-white sm:mt-2 sm:text-2xl">
            Descrição
          </h2>
        </div>
      </div>

      <div className="mt-4 border-t border-zinc-800 pt-4 sm:mt-5 sm:pt-5">
        <p className="max-w-4xl whitespace-pre-line text-sm leading-6 text-zinc-300 sm:text-base sm:leading-7">
          {produto.descricao}
        </p>
      </div>
    </section>
  );
}