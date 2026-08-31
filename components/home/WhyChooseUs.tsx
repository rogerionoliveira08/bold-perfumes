import Link from "next/link";
import {
  FaComments,
  FaShieldAlt,
  FaStore,
  FaWhatsapp,
} from "react-icons/fa";

const mensagemConsultoria =
  "Olá! Vim pelo site da Bold Parfum e gostaria de ajuda para escolher meu perfume.";

const atendentes = [
  {
    nome: "Rogério",
    telefone: "5522999281815",
  },
  {
    nome: "Thainá",
    telefone: "5522992885658",
  },
];

const provas = [
  {
    icon: <FaShieldAlt />,
    titulo: "Garantia de originalidade",
    texto:
      "Conheça os cuidados adotados pela Bold Parfum na seleção e conferência das fragrâncias.",
    href: "/garantia-de-originalidade",
    link: "Como garantimos",
    cor: "bg-blue-600",
  },
  {
    icon: <FaStore />,
    titulo: "Conheça a Bold Parfum",
    texto:
      "Saiba mais sobre nossa proposta, atendimento e compromisso com cada cliente.",
    href: "/quem-somos",
    link: "Quem somos",
    cor: "bg-[#d50000]",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="border-b border-zinc-800 bg-zinc-950 py-14 text-white sm:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-zinc-400">
              Confiança para escolher
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Por que comprar na Bold Parfum?
            </h2>

            <p className="mt-3 text-sm leading-7 text-zinc-400 sm:text-base">
              Informações claras, produtos selecionados e atendimento humano
              antes, durante e depois da sua escolha.
            </p>
          </div>

          <Link
            href="/garantia-de-originalidade"
            className="hidden border border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-black sm:inline-flex"
          >
            Conheça nossa garantia
          </Link>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {provas.map((prova) => (
            <article
              key={prova.titulo}
              className="flex min-h-[250px] flex-col border border-zinc-800 bg-black p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-500"
            >
              <div
                className={`flex h-11 w-11 items-center justify-center text-lg text-white ${prova.cor}`}
              >
                {prova.icon}
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-white">
                {prova.titulo}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {prova.texto}
              </p>

              <Link
                href={prova.href}
                className="mt-auto pt-5 text-sm font-bold text-white transition hover:text-zinc-400"
              >
                {prova.link} →
              </Link>
            </article>
          ))}

          <article className="flex min-h-[250px] flex-col border border-zinc-800 bg-black p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-500">
            <div className="flex h-11 w-11 items-center justify-center bg-[#25D366] text-lg text-white">
              <FaComments />
            </div>

            <h3 className="mt-5 text-xl font-extrabold text-white">
              Consultoria personalizada
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Escolha com quem deseja falar e receba ajuda para encontrar uma
              fragrância adequada ao seu estilo.
            </p>

            <div className="mt-auto grid gap-2 pt-5">
              {atendentes.map((atendente) => (
                <Link
                  key={atendente.nome}
                  href={`https://wa.me/${atendente.telefone}?text=${encodeURIComponent(
                    mensagemConsultoria,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 items-center justify-center gap-2 bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#20ba5a]"
                >
                  <FaWhatsapp />
                  Falar com {atendente.nome}
                </Link>
              ))}
            </div>
          </article>
        </div>

        <Link
          href="/garantia-de-originalidade"
          className="mt-6 flex w-full items-center justify-center border border-white px-4 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-black sm:hidden"
        >
          Conheça nossa garantia
        </Link>
      </div>
    </section>
  );
}