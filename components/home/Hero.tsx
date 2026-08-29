import Image from "next/image";
import Link from "next/link";
import {
  FaCheck,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const mensagemWhatsApp = encodeURIComponent(
  "Olá! Vim pelo site da Bold Parfum e gostaria de conhecer os perfumes disponíveis.",
);

export default function Hero() {
  return (
    <section className="border-b border-zinc-200 bg-white text-zinc-950">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-9">
        <div className="grid overflow-hidden border border-zinc-200 bg-zinc-50 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="order-2 flex flex-col justify-center px-6 py-9 sm:px-10 sm:py-12 lg:order-1 lg:px-12 lg:py-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500 sm:text-xs">
              Perfumaria árabe e importada
            </p>

            <h1 className="mt-4 max-w-lg text-[32px] font-semibold leading-[1.08] tracking-[-0.025em] text-black sm:text-[42px] lg:text-[46px]">
              Encontre uma fragrância que represente você.
            </h1>

            <p className="mt-5 max-w-lg text-sm font-normal leading-7 text-zinc-600 sm:text-base">
              Perfumes originais, marcantes e sofisticados para diferentes
              estilos, ocasiões e momentos.
            </p>

            <div className="mt-6 grid max-w-lg grid-cols-1 gap-3 text-xs text-zinc-700 sm:grid-cols-2 sm:text-sm">
              <Benefit text="Perfumes selecionados" />
              <Benefit text="Produtos originais" />
              <Benefit text="Até 10x sem juros" />
              <Benefit text="Envio para todo o Brasil" />
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/produtos"
                className="inline-flex min-h-12 items-center justify-center bg-black px-7 py-3 text-sm font-semibold text-white no-underline transition hover:bg-zinc-800"
              >
                Conhecer perfumes
              </Link>

              <a
                href={`https://wa.me/5522999281815?text=${mensagemWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-black no-underline transition hover:border-black"
              >
                <FaWhatsapp className="text-green-600" size={17} />
                Falar com consultor
              </a>
            </div>

            <a
              href="https://www.instagram.com/bold.ouse/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 text-xs font-normal text-zinc-500 no-underline transition hover:text-black"
            >
              <FaInstagram size={15} />
              Acompanhe a Bold Parfum no Instagram
            </a>
          </div>

          <div className="order-1 p-3 sm:p-5 lg:order-2">
            <div className="relative h-[300px] overflow-hidden bg-zinc-900 sm:h-[390px] lg:h-[470px]">
              <Image
                src="/Perfumes/perfume.jpeg"
                alt="Perfume selecionado pela Bold Parfum"
                fill
                priority
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute left-4 top-4 bg-white px-4 py-2 sm:left-6 sm:top-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black">
                  Seleção Bold Parfum
                </p>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/70">
                  Coleção premium
                </p>

                <h2 className="mt-2 max-w-md text-xl font-semibold leading-tight text-white sm:text-2xl">
                  Perfumes que deixam sua presença marcada
                </h2>

                <Link
                  href="/produtos"
                  className="mt-4 inline-flex border-b border-white pb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white no-underline transition hover:opacity-70"
                >
                  Ver coleção
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid border-x border-b border-zinc-200 bg-white sm:grid-cols-3">
          <Information
            title="Compra segura"
            text="Atendimento durante toda a compra"
          />

          <Information
            title="Consultoria personalizada"
            text="Ajuda para escolher sua fragrância"
            border
          />

          <Information
            title="Entrega acompanhada"
            text="Envio para todo o Brasil"
            border
          />
        </div>
      </div>
    </section>
  );
}

function Benefit({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-black text-white">
        <FaCheck size={7} />
      </span>

      <span>{text}</span>
    </div>
  );
}

function Information({
  title,
  text,
  border = false,
}: {
  title: string;
  text: string;
  border?: boolean;
}) {
  return (
    <div
      className={`px-5 py-4 sm:px-6 ${
        border
          ? "border-t border-zinc-200 sm:border-l sm:border-t-0"
          : ""
      }`}
    >
      <p className="text-xs font-semibold text-black sm:text-sm">
        {title}
      </p>

      <p className="mt-1 text-[10px] font-normal leading-5 text-zinc-500 sm:text-xs">
        {text}
      </p>
    </div>
  );
}