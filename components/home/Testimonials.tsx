import {
  FaBriefcase,
  FaEnvelope,
  FaHome,
  FaMapMarkerAlt,
  FaShippingFast,
  FaWhatsapp,
} from "react-icons/fa";
import WhatsAppChoiceButton from "@/components/WhatsAppChoiceButton";

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

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-black py-16 text-white sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Cabeçalho */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-zinc-400">
            Experiências de clientes
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-5xl">
            O que compartilharam com a Bold
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-400">
            Relatos enviados diretamente à equipe da Bold Parfum sobre
            atendimento, compra e experiência com os produtos.
          </p>
        </div>

        {/* Depoimentos */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {depoimentos.map((item) => (
            <article
              key={`${item.nome}-${item.cidade}`}
              className="group flex h-full flex-col rounded-3xl border border-zinc-800 bg-zinc-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-500"
            >
              {/* Identificação do tipo de conteúdo */}
              <div className="flex items-center justify-between gap-3">
                <span className="w-fit rounded-full border border-zinc-700 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                  Relato de cliente
                </span>
              </div>

              {/* Texto */}
              <p className="mt-5 flex-1 leading-7 text-zinc-300">
                “{item.texto}”
              </p>

              {/* Autor */}
              <div className="mt-6 border-t border-zinc-800 pt-4">
                <p className="font-bold text-white">{item.nome}</p>

                <p className="mt-1 flex items-center gap-2 text-sm text-zinc-500">
                  <FaMapMarkerAlt size={12} />
                  {item.cidade}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Transparência */}
        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-5 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
            Transparência
          </p>

          <p className="mt-2 text-xs leading-5 text-zinc-500 sm:text-sm">
            Estes relatos foram recebidos diretamente pela equipe e são
            apresentados como experiências de clientes. Eles não são
            classificados como avaliações de compra verificada.
          </p>
        </div>

        {/* Avaliações de produtos */}
        <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-zinc-800 bg-white/[0.03] px-5 py-5 text-center">
          <p className="text-sm font-bold text-white">
            Avaliações dos produtos
          </p>

          <p className="mt-2 text-xs leading-5 text-zinc-500 sm:text-sm">
            Nas páginas dos produtos, as avaliações da comunidade ficam
            separadas das compras confirmadas. Quando uma compra puder ser
            confirmada pela Bold Parfum, a avaliação poderá receber o selo
            <span className="font-semibold text-green-400">
              {" "}
              Compra verificada
            </span>
            .
          </p>
        </div>

        {/* Envio */}
        <div className="mt-10 rounded-3xl border border-zinc-800 bg-white/[0.03] px-5 py-7 text-center sm:px-8">
          <div className="flex items-center justify-center gap-3 text-zinc-300">
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

        {/* Consultoria */}
        <div className="mt-6 overflow-hidden rounded-3xl border border-zinc-700 bg-zinc-950">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                <FaBriefcase />
                Consultoria personalizada em perfumaria
              </p>

              <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Para clientes, empresas e equipes
              </h3>

              <p className="mt-4 max-w-4xl leading-7 text-zinc-400">
                A Bold Parfum oferece atendimento personalizado para clientes
                e empresas de todo o Brasil. Auxiliamos na escolha de
                fragrâncias, criação de presentes, ações corporativas,
                experiências olfativas e treinamentos personalizados.
              </p>

              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-zinc-800 bg-black/50 p-4">
                <FaHome
                  className="mt-1 shrink-0 text-zinc-300"
                  size={18}
                />

                <p className="text-sm leading-6 text-zinc-300">
                  Na Região dos Lagos, também realizamos consultorias
                  presenciais, com atendimento em residências e empresas.
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 lg:w-auto">
              <WhatsAppChoiceButton
                mensagem={mensagemConsultoria}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-bold text-white transition hover:bg-green-700"
              >
                <FaWhatsapp size={20} />
                Solicitar uma consultoria
              </WhatsAppChoiceButton>

              <a
                href="mailto:consultoria@boldparfum.com.br"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-600 bg-black px-5 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                <FaEnvelope size={17} />
                consultoria@boldparfum.com.br
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}