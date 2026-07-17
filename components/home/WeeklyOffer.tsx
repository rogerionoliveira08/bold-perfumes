import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaClock,
  FaShoppingBag,
  FaStar,
} from "react-icons/fa";

export default function WeeklyOffer() {
  return (
    <section className="relative overflow-hidden border-y border-zinc-900 bg-zinc-950 py-12 sm:py-16">
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-yellow-400/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-yellow-400/[0.05] blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid overflow-hidden rounded-3xl border border-yellow-400/20 bg-black lg:grid-cols-2">
          <div className="relative min-h-[340px] overflow-hidden sm:min-h-[440px]">
            <Image
              src="/Perfumes/asadelixir.jpeg"
              alt="Asad Elixir em oferta na Bold Parfum"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/80" />

            <span className="absolute left-4 top-4 rounded-full bg-yellow-400 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-black shadow-lg sm:left-6 sm:top-6">
              Oferta da semana
            </span>
          </div>

          <div className="flex flex-col justify-center px-5 py-8 sm:px-10 sm:py-12 lg:px-12">
            <div className="flex items-center gap-2 text-yellow-400">
              <FaClock size={12} />

              <p className="text-xs font-extrabold uppercase tracking-[0.22em]">
                Condição especial
              </p>
            </div>

            <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
              Asad Elixir
            </h2>

            <p className="mt-2 text-sm font-bold uppercase tracking-[0.15em] text-zinc-500">
              Lattafa · Eau de Parfum
            </p>

            <div className="mt-5 flex items-center gap-2">
              <div className="flex items-center gap-1 text-yellow-400">
                <FaStar size={13} />
                <span className="font-black">4.9</span>
              </div>

              <span className="text-zinc-700">•</span>

              <span className="text-sm text-zinc-500">
                Perfume intenso e sofisticado
              </span>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              Uma fragrância marcante, envolvente e elegante para quem busca
              presença, excelente fixação e personalidade em ocasiões
              especiais.
            </p>

            <div className="mt-7 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
                Preço especial
              </p>

              <div className="mt-2 flex flex-wrap items-end gap-3">
                <p className="text-3xl font-black text-yellow-400 sm:text-4xl">
                  R$ 350,00
                </p>

                <p className="pb-1 text-sm text-zinc-500">
                  ou 6x de R$ 58,33 sem juros
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/produto/asad-elixir"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-black text-black transition hover:bg-yellow-300 active:scale-[0.98]"
              >
                <FaShoppingBag size={13} />
                Comprar agora
              </Link>

              <Link
                href="/produto/asad-elixir"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 px-6 py-3.5 text-sm font-bold text-white transition hover:border-yellow-400 hover:text-yellow-400"
              >
                Ver detalhes
                <FaArrowRight size={11} />
              </Link>
            </div>

            <p className="mt-5 text-xs leading-5 text-zinc-600">
              Consulte disponibilidade, frete e prazo de entrega pelo WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}