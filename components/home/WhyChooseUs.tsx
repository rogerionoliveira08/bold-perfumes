import Link from "next/link";
import {
  FaArrowRight,
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
    telefone: "55552299236538785658",
  },
];

const diferenciais = [
  {
    icon: FaShieldAlt,
    titulo: "Garantia de originalidade",
    texto:
      "Selecionamos e conferimos cuidadosamente cada fragrância antes de disponibilizá-la.",
    href: "/garantia-de-originalidade",
    link: "Conheça nossa garantia",
    estiloIcone: "bg-blue-600 text-white",
  },
  {
    icon: FaStore,
    titulo: "Conheça a Bold Parfum",
    texto:
      "Atendimento próximo, informações claras e compromisso com a experiência de cada cliente.",
    href: "/quem-somos",
    link: "Conheça nossa história",
    estiloIcone: "bg-white text-black",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="border-b border-zinc-800 bg-black py-14 text-white sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-zinc-400 sm:text-xs">
              Confiança para escolher
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.035em] text-white sm:text-5xl">
              Mais do que vender perfumes,
              <span className="block text-zinc-400">
                ajudamos você a escolher.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              Informação, originalidade e atendimento humano para encontrar
              uma fragrância que realmente combine com você.
            </p>
          </div>

          <Link
            href="/garantia-de-originalidade"
            className="hidden items-center gap-3 rounded-full border border-zinc-700 bg-zinc-950 px-5 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white hover:text-black lg:inline-flex"
          >
            Conheça nossa garantia
            <FaArrowRight size={11} />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {diferenciais.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.titulo}
                className="group flex min-h-[280px] flex-col rounded-3xl border border-zinc-800 bg-zinc-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)] sm:p-7"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-lg ${item.estiloIcone}`}
                >
                  <Icon />
                </div>

                <h3 className="mt-6 text-xl font-black leading-tight text-white sm:text-2xl">
                  {item.titulo}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {item.texto}
                </p>

                <Link
                  href={item.href}
                  className="mt-auto flex items-center justify-between border-t border-zinc-800 pt-5 text-sm font-bold text-white transition group-hover:border-zinc-600"
                >
                  {item.link}

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 transition group-hover:border-white group-hover:bg-white group-hover:text-black">
                    <FaArrowRight size={10} />
                  </span>
                </Link>
              </article>
            );
          })}

          <article className="flex min-h-[280px] flex-col rounded-3xl border border-zinc-800 bg-zinc-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)] sm:p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-xl text-white">
              <FaWhatsapp />
            </div>

            <h3 className="mt-6 text-xl font-black leading-tight text-white sm:text-2xl">
              Consultoria personalizada
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-400">
              Converse com nossa equipe e receba uma indicação baseada no seu
              estilo, rotina e nas ocasiões em que pretende usar o perfume.
            </p>

            <div className="mt-auto grid gap-2.5 pt-5">
              {atendentes.map((atendente) => (
                <a
                  key={atendente.nome}
                  href={`https://wa.me/${atendente.telefone}?text=${encodeURIComponent(
                    mensagemConsultoria,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 items-center justify-between rounded-xl bg-[#25D366] px-4 text-sm font-black text-white transition hover:bg-[#20bd5a]"
                >
                  <span className="flex items-center gap-2">
                    <FaWhatsapp size={16} />
                    Falar com {atendente.nome}
                  </span>

                  <FaArrowRight size={11} />
                </a>
              ))}
            </div>
          </article>
        </div>

        <Link
          href="/garantia-de-originalidade"
          className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl border border-white px-4 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-black lg:hidden"
        >
          Conheça nossa garantia
          <FaArrowRight size={11} />
        </Link>
      </div>
    </section>
  );
}