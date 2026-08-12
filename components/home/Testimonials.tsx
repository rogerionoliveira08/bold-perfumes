import {
  FaBriefcase,
  FaHome,
  FaMapMarkerAlt,
  FaShippingFast,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";

const depoimentos = [
  {
    nome: "Carlos M.",
    cidade: "Rio de Janeiro - RJ",
    texto:
      "Excelente atendimento e perfume com uma fixação incrível. Voltarei a comprar.",
  },
  {
    nome: "Fernanda A.",
    cidade: "São Paulo - SP",
    texto:
      "Recebi muito rápido e o perfume superou minhas expectativas.",
  },
  {
    nome: "Lucas R.",
    cidade: "Belo Horizonte - MG",
    texto:
      "Já comprei duas vezes. Atendimento excelente e produtos originais.",
  },
  {
    nome: "Rafael S.",
    cidade: "Saquarema - RJ",
    texto:
      "Fui muito bem atendido e recebi o perfume rapidamente. A fragrância veio exatamente como esperado e a fixação é excelente.",
  },
  {
    nome: "Juliana M.",
    cidade: "Araruama - RJ",
    texto:
      "Gostei muito da experiência de compra. Atendimento atencioso e perfume de excelente qualidade.",
  },
  {
    nome: "Eduardo P.",
    cidade: "Cabo Frio - RJ",
    texto:
      "Produto muito bem embalado, entrega rápida e uma fragrância marcante. Recomendo a Bold Parfum.",
  },
];

const beneficios = [
  "Entrega nacional",
  "Envio seguro",
  "Código de rastreamento",
  "Compra pelo WhatsApp",
  "Atendimento personalizado",
];

const mensagemConsultoria = encodeURIComponent(
  "Olá! Conheci o serviço de consultoria em perfumaria da Bold Parfum pelo site e gostaria de receber mais informações.",
);

const linkConsultoria = `https://wa.me/5522998771598?text=${mensagemConsultoria}`;

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-black py-16 text-white sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.06),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
            Depoimentos
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
            O que nossos clientes dizem
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-400">
            Experiências de clientes que escolheram a Bold Parfum para encontrar
            sua nova assinatura olfativa.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {depoimentos.map((item) => (
            <article
              key={`${item.nome}-${item.cidade}`}
              className="group flex h-full flex-col rounded-3xl border border-zinc-800 bg-zinc-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-xl hover:shadow-yellow-500/5"
            >
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} size={15} />
                ))}
              </div>

              <p className="mt-5 flex-1 leading-7 text-zinc-300">
                “{item.texto}”
              </p>

              <div className="mt-6 border-t border-zinc-800 pt-4">
                <p className="font-bold text-white">{item.nome}</p>

                <p className="mt-1 flex items-center gap-2 text-sm text-zinc-500">
                  <FaMapMarkerAlt size={12} className="text-yellow-400" />
                  {item.cidade}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-yellow-400/20 bg-yellow-400/5 px-5 py-7 text-center sm:px-8">
          <div className="flex items-center justify-center gap-3 text-yellow-400">
            <FaShippingFast size={20} />

            <h3 className="font-bold uppercase tracking-widest">
              Enviamos para todo o Brasil
            </h3>
          </div>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
            Compre de qualquer lugar do país. Enviamos nossos perfumes com
            segurança, rastreamento e atendimento personalizado.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {beneficios.map((beneficio) => (
              <span
                key={beneficio}
                className="rounded-full border border-zinc-700 bg-black/50 px-4 py-2 text-sm font-semibold text-zinc-300"
              >
                {beneficio}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl border border-yellow-400/30 bg-zinc-950">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
                <FaBriefcase />
                Consultoria personalizada em perfumaria
              </p>

              <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Para clientes, empresas e equipes
              </h3>

              <p className="mt-4 max-w-4xl leading-7 text-zinc-400">
                A Bold Parfum oferece atendimento personalizado para clientes e
                empresas de todo o Brasil. Auxiliamos na escolha de fragrâncias,
                criação de presentes, ações corporativas, experiências olfativas
                e treinamentos personalizados para empresas e suas equipes.
              </p>

              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-zinc-800 bg-black/50 p-4">
                <FaHome
                  className="mt-1 shrink-0 text-yellow-400"
                  size={18}
                />

                <p className="text-sm leading-6 text-zinc-300">
                  Na Região dos Lagos, também realizamos consultorias
                  presenciais, com atendimento em residências e empresas.
                </p>
              </div>
            </div>

            <a
              href={linkConsultoria}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-4 font-bold text-black transition hover:bg-yellow-300"
            >
              <FaWhatsapp size={20} />
              Solicitar uma consultoria
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}