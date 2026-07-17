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
    descricao: "Perfumes árabes premium",
    icone: FaCrown,
  },
  {
    nome: "Armaf",
    descricao: "Elegância e performance",
    icone: FaGem,
  },
  {
    nome: "Maison Alhambra",
    descricao: "Inspirados em grandes clássicos",
    icone: FaSprayCan,
  },
  {
    nome: "Al Wataniah",
    descricao: "Tradição oriental",
    icone: FaStar,
  },
  {
    nome: "French Avenue",
    descricao: "Luxo moderno",
    icone: FaGem,
  },
  {
    nome: "Orientica",
    descricao: "Alta perfumaria",
    icone: FaCrown,
  },
];

export default function BrandsSection() {
  return (
    <section className="relative overflow-hidden border-y border-zinc-900 bg-zinc-950 py-14">
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-black uppercase tracking-[0.30em] text-yellow-400">
            Perfumaria internacional
          </span>

          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Marcas em destaque
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            Trabalhamos com marcas reconhecidas pela qualidade, excelente
            fixação e sofisticação de suas fragrâncias.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {marcas.map((marca) => {
            const Icon = marca.icone;

            return (
              <Link
                key={marca.nome}
                href={`/produtos?marca=${encodeURIComponent(marca.nome)}`}
                className="group rounded-2xl border border-zinc-800 bg-black p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-[0_15px_35px_rgba(250,204,21,.12)]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-400 transition group-hover:bg-yellow-400 group-hover:text-black">
                  <Icon size={22} />
                </div>

                <h3 className="mt-5 text-center text-sm font-black text-white transition group-hover:text-yellow-400">
                  {marca.nome}
                </h3>

                <p className="mt-2 text-center text-[11px] leading-5 text-zinc-500">
                  {marca.descricao}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/produtos"
            className="rounded-xl border border-yellow-400 px-7 py-3 text-sm font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            Ver catálogo completo
          </Link>
        </div>
      </div>
    </section>
  );
}