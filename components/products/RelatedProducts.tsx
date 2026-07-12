import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { Product } from "@/types/product";

type Props = {
  produtos: Product[];
};

export default function RelatedProducts({ produtos }: Props) {
  if (produtos.length === 0) {
    return null;
  }

  const formatarPreco = (valor: number) =>
    valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <section className="mt-12">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-yellow-400">
            Você também pode gostar
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            Perfumes relacionados
          </h2>
        </div>

        <Link
          href="/produtos"
          className="hidden text-sm font-bold text-yellow-400 transition hover:text-yellow-300 sm:block"
        >
          Ver todos
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {produtos.map((produto) => (
          <Link
            key={produto.id}
            href={`/produto/${produto.slug}`}
            className="group min-w-0 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-3 transition hover:-translate-y-1 hover:border-yellow-400/60"
          >
            <div className="relative aspect-square overflow-hidden rounded-xl bg-black">
              <Image
                src={produto.imagem}
                alt={produto.nome}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover object-center transition duration-300 group-hover:scale-[1.03]"
              />
            </div>

            <p className="mt-3 truncate text-[10px] uppercase tracking-wide text-zinc-500">
              {produto.marca}
            </p>

            <h3 className="mt-1 truncate text-sm font-bold text-white sm:text-base">
              {produto.nome}
            </h3>

            <div className="mt-2 flex items-center gap-1 text-[11px] text-yellow-400">
              <FaStar size={10} />
              <span className="font-bold">{produto.avaliacao}</span>
            </div>

            <p className="mt-2 truncate text-sm font-black text-yellow-400 sm:text-base">
              {formatarPreco(produto.preco)}
            </p>
          </Link>
        ))}
      </div>

      <Link
        href="/produtos"
        className="mt-5 flex w-full items-center justify-center rounded-xl border border-yellow-400 px-4 py-3 text-sm font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black sm:hidden"
      >
        Ver todos os perfumes
      </Link>
    </section>
  );
}