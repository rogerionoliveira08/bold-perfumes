 import Image from "next/image";
import Link from "next/link";
import {
  FaCheckCircle,
  FaShippingFast,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-900 bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.13),transparent_36%)]" />

      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-yellow-400/[0.04] blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-6 px-4 py-7 sm:px-6 sm:py-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:py-16">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/[0.06] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-yellow-400 sm:px-3.5 sm:py-2 sm:text-xs">
            <FaStar size={10} />
            Perfumes árabes originais
          </div>

          <h1 className="mt-4 max-w-3xl text-[31px] font-black leading-[1.06] tracking-tight sm:mt-5 sm:text-5xl lg:text-[56px]">
            Sua presença começa pela{" "}
            <span className="text-yellow-400">fragrância certa.</span>
          </h1>

          <p className="mt-3 max-w-2xl text-[13px] leading-5 text-zinc-300 sm:mt-4 sm:text-base sm:leading-7 lg:text-lg">
            Perfumes marcantes, sofisticados e com excelente fixação para
            transformar cada ocasião em uma assinatura inesquecível.
          </p>

          <div className="mt-4 grid max-w-2xl grid-cols-2 gap-x-3 gap-y-2 text-[10px] text-zinc-300 sm:mt-6 sm:gap-x-4 sm:gap-y-3 sm:text-sm">
            <Benefit text="Produtos originais" />
            <Benefit text="Envio para todo o Brasil" />
            <Benefit text="Parcelamento em até 12x" />
            <Benefit text="Atendimento pelo WhatsApp" />
          </div>

          <div className="mt-5 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:gap-3">
            <Link
              href="/produtos"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-yellow-400 px-5 py-3 text-[13px] font-black text-black transition duration-200 hover:bg-yellow-300 active:scale-[0.98] sm:min-h-12 sm:px-7 sm:py-3.5 sm:text-sm"
            >
              Ver todos os perfumes
            </Link>

            <a
              href="https://wa.me/5522998771598?text=Olá! Vim pelo site da Bold Parfum e gostaria de conhecer os perfumes disponíveis."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-green-500/80 bg-green-500/[0.04] px-5 py-3 text-[13px] font-black text-green-400 transition duration-200 hover:bg-green-500 hover:text-black active:scale-[0.98] sm:min-h-12 sm:px-7 sm:py-3.5 sm:text-sm"
            >
              <FaWhatsapp size={18} />
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] text-zinc-500 sm:mt-6 sm:gap-x-4 sm:text-sm">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} size={11} />
                ))}
              </div>

              <span className="font-bold text-zinc-300">4,9/5</span>
            </div>

            <span className="hidden h-4 w-px bg-zinc-800 sm:block" />

            <span>Fragrâncias selecionadas para impressionar</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="pointer-events-none absolute -inset-5 rounded-full bg-yellow-400/[0.08] blur-3xl" />

          <div className="relative overflow-hidden rounded-[22px] border border-yellow-400/25 bg-gradient-to-b from-zinc-900 to-black p-2.5 shadow-2xl shadow-yellow-500/[0.08] sm:rounded-[30px] sm:p-5">
            <div className="relative overflow-hidden rounded-[16px] border border-zinc-800 bg-black sm:rounded-3xl">
              <div className="relative h-[255px] w-full sm:h-[420px] lg:h-[500px]">
                <Image
                  src="/Perfumes/perfume.jpeg"
                  alt="Perfume premium da Bold Parfum"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-14 sm:px-7 sm:pb-7 sm:pt-20">
                  <p className="text-[9px] font-black uppercase tracking-[0.16em] text-yellow-400 sm:text-xs">
                    Coleção premium
                  </p>

                  <h2 className="mt-1 max-w-lg text-lg font-black leading-tight text-white sm:mt-1.5 sm:text-3xl">
                    Fragrâncias para quem quer ser lembrado
                  </h2>

                  <p className="mt-1.5 max-w-lg text-[10px] leading-4 text-zinc-300 sm:mt-2 sm:text-sm sm:leading-6">
                    Perfumes para trabalho, encontros, eventos e momentos
                    especiais.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-2 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3">
              <MiniCard
                icon={<FaShippingFast />}
                title="Envio rápido"
                text="Postagem agilizada"
              />

              <MiniCard
                icon={<FaCheckCircle />}
                title="Procedência"
                text="Produtos originais"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefit({ text }: { text: string }) {
  return (
    <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
      <FaCheckCircle
        className="shrink-0 text-yellow-400"
        size={12}
      />

      <span className="leading-4 sm:leading-5">{text}</span>
    </div>
  );
}

function MiniCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex min-w-0 items-start gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-2.5 py-2.5 sm:rounded-2xl sm:p-3.5">
      <span className="mt-0.5 shrink-0 text-yellow-400">
        {icon}
      </span>

      <div className="min-w-0">
        <p className="truncate text-[10px] font-black text-white sm:text-sm">
          {title}
        </p>

        <p className="mt-0.5 truncate text-[8px] text-zinc-500 sm:text-[11px]">
          {text}
        </p>
      </div>
    </div>
  );
}