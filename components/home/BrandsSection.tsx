import Link from "next/link";
import {
  FaCrown,
  FaGem,
  FaSprayCan,
  FaStar,
} from "react-icons/fa";

const marcas = [
  {
    nome: "Lattafa",
    descricao: "Perfumes árabes originais",
    icone: FaCrown,
    cor: "bg-red-600",
  },
  {
    nome: "Armaf",
    descricao: "Elegância e performance",
    icone: FaGem,
    cor: "bg-blue-600",
  },
  {
    nome: "Maison Alhambra",
    descricao: "Inspirados em grandes clássicos",
    icone: FaSprayCan,
    cor: "bg-violet-600",
  },
  {
    nome: "Al Wataniah",
    descricao: "Tradição oriental",
    icone: FaStar,
    cor: "bg-green-600",
  },
  {
    nome: "French Avenue",
    descricao: "Perfumaria árabe moderna",
    icone: FaGem,
    cor: "bg-orange-500",
  },
  {
    nome: "Orientica",
    descricao: "Fragrâncias sofisticadas",
    icone: FaCrown,
    cor: "bg-pink-600",
  },
];

export default function BrandsSection() {
  return (
    <section className="border-b border-zinc-200 bg-zinc-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-zinc-500">
              Perfumaria internacional
            </span>

            <h2 className="mt-2 text-3xl font-black text-zinc-950 sm:text-4xl">
              Marcas em destaque
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base">
              Conheça marcas reconhecidas pela qualidade, personalidade e
              sofisticação de suas fragrâncias.
            </p>
          </div>

          <Link
            href="/produtos"
            className="hidden shrink-0 border border-zinc-950 px-6 py-3 text-sm font-bold text-zinc-950 transition hover:bg-zinc-950 hover:text-white sm:inline-flex"
          >
            Ver todas as marcas
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {marcas.map((marca) => {
            const Icon = marca.icone;

            return (
              <Link
                key={marca.nome}
                href={`/produtos?marca=${encodeURIComponent(marca.nome)}`}
                className="group flex min-h-[175px] flex-col items-center justify-center border border-zinc-800 bg-black p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-zinc-500 hover:shadow-xl"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center text-white transition duration-300 group-hover:scale-105 ${marca.cor}`}
                >
                  <Icon size={20} />
                </div>

                <h3 className="mt-4 text-sm font-extrabold text-white">
                  {marca.nome}
                </h3>

                <p className="mt-2 text-xs leading-5 text-zinc-400">
                  {marca.descricao}
                </p>
              </Link>
            );
          })}
        </div>

        <Link
          href="/produtos"
          className="mt-6 flex w-full items-center justify-center border border-zinc-950 px-4 py-3 text-sm font-bold text-zinc-950 transition hover:bg-zinc-950 hover:text-white sm:hidden"
        >
          Ver todas as marcas
        </Link>
      </div>
    </section>
  );
}