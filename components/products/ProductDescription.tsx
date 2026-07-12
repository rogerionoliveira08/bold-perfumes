import { Product } from "@/types/product";

type Props = {
  produto: Product;
};

export default function ProductDescription({ produto }: Props) {
  return (
    <section className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:mt-12 sm:p-7">
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-yellow-400">
        Sobre a fragrância
      </p>

      <h2 className="mt-2 text-2xl font-black text-white">
        Descrição
      </h2>

      <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-300 sm:text-base">
        {produto.descricao}
      </p>
    </section>
  );
}