 
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.12),transparent_38%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-yellow-400">
            <FaStar size={12} />
            Perfumes árabes originais
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Sua presença começa pela{" "}
            <span className="text-yellow-400">fragrância certa.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
            Descubra perfumes marcantes, sofisticados e com excelente fixação
            para transformar cada ocasião em uma assinatura inesquecível.
          </p>

          <div className="mt-7 grid max-w-xl gap-3 text-sm text-zinc-300 sm:grid-cols-2">
            <Benefit text="Perfumes 100% originais" />
            <Benefit text="Envio para todo o Brasil" />
            <Benefit text="Parcelamento em até 12x" />
            <Benefit text="Atendimento direto no WhatsApp" />
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/produtos"
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-7 py-4 font-bold text-black transition hover:bg-yellow-300 active:scale-[0.98]"
            >
              Ver catálogo
            </Link>

            <a
              href="https://wa.me/5522998771598?text=Olá! Vim pelo site da Bold Parfum e gostaria de conhecer os perfumes disponíveis."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-green-500 px-7 py-4 font-bold text-green-400 transition hover:bg-green-500 hover:text-black active:scale-[0.98]"
            >
              <FaWhatsapp size={21} />
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} size={13} />
                ))}
              </div>

              <span className="font-semibold text-zinc-300">4,9/5</span>
            </div>

            <span className="hidden h-4 w-px bg-zinc-700 sm:block" />

            <span>Fragrâncias selecionadas para impressionar</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-yellow-400/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-yellow-400/30 bg-gradient-to-b from-zinc-900 to-black p-5 shadow-2xl shadow-yellow-500/10 sm:p-7">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-black">
              <Image
                src="/Perfumes/perfume.jpeg"
                alt="Perfume premium da Bold Parfum"
                width={700}
                height={820}
                priority
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent px-6 pb-6 pt-20">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
                  Coleção premium
                </p>

                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                  Fragrâncias para quem quer ser lembrado
                </h2>

                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  Seleção de perfumes marcantes para trabalho, encontros,
                  eventos e momentos especiais.
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
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
    <div className="flex items-center gap-2">
      <FaCheckCircle className="shrink-0 text-yellow-400" size={14} />
      <span>{text}</span>
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
    <div className="flex items-start gap-3 rounded-2xl border border-zinc-800 bg-zinc-950 p-3.5">
      <span className="mt-0.5 text-yellow-400">{icon}</span>

      <div>
        <p className="text-sm font-bold text-white">{title}</p>
        <p className="mt-0.5 text-[11px] text-zinc-500">{text}</p>
      </div>
    </div>
  );
}
