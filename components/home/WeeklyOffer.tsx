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
    <section className="relative overflow-hidden border-y border-zinc-900 bg-zinc-950 py-8 sm:py-10">
      <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-yellow-400/[0.05] blur-3xl" />

      <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-yellow-400/[0.05] blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid overflow-hidden rounded-2xl border border-yellow-400/20 bg-black lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[260px] overflow-hidden sm:min-h-[320px] lg:min-h-[370px]">
            <Image
              src="/Perfumes/asadelixir.jpeg"
              alt="Asad Elixir em oferta na Bold Parfum"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-contain object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/70" />

            <span className="absolute left-4 top-4 rounded-full bg-yellow-400 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-black shadow-lg sm:left-5 sm:top-5">
              Oferta da semana
            </span>
          </div>

          <div className="flex flex-col justify-center px-5 py-6 sm:px-8 sm:py-8 lg:px-9">
            <div className="flex items-center gap-2 text-yellow-400">
              <FaClock size={11} />

              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em]">
                Condição especial
              </p>
            </div>

            <h2 className="mt-3 text-2xl font-black text-white sm:text-4xl">
              Asad Elixir
            </h2>

            <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-500 sm:text-xs">
              Lattafa · Eau de Parfum
            </p>

            <div className="mt-4 flex items-center gap-2">
              <div className="flex items-center gap-1 text-yellow-400">
                <FaStar size={12} />

                <span className="text-sm font-black">4,9</span>
              </div>

              <span className="text-zinc-700">•</span>

              <span className="text-xs text-zinc-500">
                Perfume intenso e sofisticado
              </span>
            </div>

            <p className="mt-4 max-w-xl text-[13px] leading-6 text-zinc-400 sm:text-sm">
              Uma fragrância marcante, envolvente e elegante para quem busca
              presença, excelente fixação e personalidade em ocasiões
              especiais.
            </p>

            <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950 p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500">
                Preço especial
              </p>

              <div className="mt-1.5 flex flex-wrap items-end gap-2">
                <p className="text-2xl font-black text-yellow-400 sm:text-3xl">
                  R$ 350,00
                </p>

                <p className="pb-0.5 text-xs text-zinc-500">
                  ou 6x de R$ 58,33 sem juros
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
              <Link
                href="/produto/asad-elixir"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3 text-[13px] font-black text-black transition hover:bg-yellow-300 active:scale-[0.98]"
              >
                <FaShoppingBag size={12} />
                Comprar agora
              </Link>

              <Link
                href="/produto/asad-elixir"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 text-[13px] font-bold text-white transition hover:border-yellow-400 hover:text-yellow-400"
              >
                Ver detalhes
                <FaArrowRight size={10} />
              </Link>
            </div>

            <p className="mt-4 text-[10px] leading-4 text-zinc-600 sm:text-[11px]">
              Consulte disponibilidade, frete e prazo de entrega pelo WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}