import {
  FaComments,
  FaGem,
  FaShieldAlt,
  FaShippingFast,
} from "react-icons/fa";

const motivos = [
  {
    icon: <FaGem />,
    titulo: "Perfumes selecionados",
    texto:
      "Escolhemos fragrâncias marcantes, sofisticadas e com excelente desempenho.",
  },
  {
    icon: <FaShieldAlt />,
    titulo: "Procedência garantida",
    texto:
      "Trabalhamos com produtos originais e informações transparentes em cada compra.",
  },
  {
    icon: <FaComments />,
    titulo: "Atendimento personalizado",
    texto:
      "Ajudamos você a encontrar a fragrância ideal de acordo com seu estilo e ocasião.",
  },
  {
    icon: <FaShippingFast />,
    titulo: "Envio rápido e seguro",
    texto:
      "Seu pedido é preparado com cuidado e protegido para chegar em perfeito estado.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden border-y border-zinc-900 bg-zinc-950 py-16 text-white sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.07),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
            Experiência Bold
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
            Por que escolher a Bold Parfum?
          </h2>

          <p className="mt-4 leading-7 text-zinc-400">
            Mais do que vender perfumes, queremos ajudar você a encontrar uma
            fragrância que combine com sua personalidade e seja lembrada.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {motivos.map((motivo) => (
            <article
              key={motivo.titulo}
              className="group rounded-3xl border border-zinc-800 bg-black/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:shadow-xl hover:shadow-yellow-500/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/10 text-xl text-yellow-400 transition group-hover:bg-yellow-400 group-hover:text-black">
                {motivo.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold">{motivo.titulo}</h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {motivo.texto}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}