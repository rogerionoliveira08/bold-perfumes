import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaShoppingBag,
  FaStar,
} from "react-icons/fa";
import { produtos } from "@/data/produtos";

export default function WeeklyOffer() {
  const produto = produtos.find(
    (item) => item.slug === "asad-elixir",
  );

  if (!produto) {
    return null;
  }

  const precoFormatado = produto.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const parcelaFormatada = (produto.preco / 10).toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
    },
  );

  return (
    <section className="border-b border-zinc-200 bg-white py-10 sm:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid overflow-hidden bg-zinc-950 lg:grid-cols-2">
          <div className="relative min-h-[300px] overflow-hidden sm:min-h-[380px] lg:min-h-[430px]">
            <Image
              src={produto.imagem}
              alt={`${produto.nome} da marca ${produto.marca}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/50" />

            <span className="absolute left-5 top-5 bg-[#d50000] px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-white">
              Destaque da semana
            </span>
          </div>

          <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
            <div className="flex items-center gap-2 text-zinc-400">
              <FaStar size={12} />

              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em]">
                Seleção Bold Parfum
              </p>
            </div>

            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              {produto.nome}
            </h2>

            <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-zinc-400">
              {produto.marca} · {produto.concentracao}
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-300">
              Uma fragrância marcante e envolvente para quem busca
              intensidade, personalidade e uma presença olfativa que não
              passa despercebida.
            </p>

            <div className="mt-6 border-y border-zinc-800 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-500">
                Preço
              </p>

              <p className="mt-1 text-3xl font-black tracking-tight text-white">
                {precoFormatado}
              </p>

              <p className="mt-1 text-xs font-bold uppercase text-zinc-400">
                Ou 10x de {parcelaFormatada} sem juros
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/produto/${produto.slug}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#d50000] px-6 py-3 text-sm font-black text-white transition hover:bg-[#b80000]"
              >
                <FaShoppingBag size={13} />
                Conhecer fragrância
              </Link>

              <Link
                href="/produtos"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-zinc-600 px-6 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                Ver outros perfumes
                <FaArrowRight size={11} />
              </Link>
            </div>

            <p className="mt-5 text-xs leading-5 text-zinc-500">
              Consulte disponibilidade, frete e prazo de entrega antes de
              finalizar o pedido.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}