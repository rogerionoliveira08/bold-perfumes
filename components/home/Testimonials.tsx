import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

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

const cidadesAtendidas = [
  "Saquarema",
  "Araruama",
  "São Pedro da Aldeia",
  "Cabo Frio",
  "Arraial do Cabo",
  "Armação dos Búzios", 
  "Rio das Ostras",
];

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

        <div className="mt-10 rounded-3xl border border-yellow-400/20 bg-yellow-400/5 px-5 py-6 text-center sm:px-8">
          <div className="flex items-center justify-center gap-2 text-yellow-400">
            <FaMapMarkerAlt />
            <p className="font-bold uppercase tracking-widest">
              Atendemos toda a Região dos Lagos
            </p>
          </div>

          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Atendimento próximo e personalizado para clientes da nossa região.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {cidadesAtendidas.map((cidade) => (
              <span
                key={cidade}
                className="rounded-full border border-zinc-700 bg-black/50 px-4 py-2 text-sm font-semibold text-zinc-300"
              >
                {cidade}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}