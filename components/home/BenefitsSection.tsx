import {
  FaBoxOpen,
  FaCreditCard,
  FaShieldAlt,
  FaShippingFast,
} from "react-icons/fa";

const beneficios = [
  {
    icon: <FaShippingFast />,
    titulo: "Envio para todo o Brasil",
    texto: "Postagem rápida e acompanhamento do pedido.",
  },
  {
    icon: <FaShieldAlt />,
    titulo: "Compra segura",
    texto: "Atendimento direto e suporte durante a compra.",
  },
  {
    icon: <FaBoxOpen />,
    titulo: "Perfumes originais",
    texto: "Produtos selecionados com procedência garantida.",
  },
  {
    icon: <FaCreditCard />,
    titulo: "Até 12x no cartão",
    texto: "Mais facilidade para escolher sua fragrância.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="border-b border-zinc-900 bg-zinc-950/70">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {beneficios.map((beneficio) => (
          <article
            key={beneficio.titulo}
            className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-black/40 p-4 transition hover:border-yellow-400/40"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 text-lg text-yellow-400">
              {beneficio.icon}
            </div>

            <div>
              <h2 className="font-bold text-white">{beneficio.titulo}</h2>

              <p className="mt-1 text-sm leading-5 text-zinc-500">
                {beneficio.texto}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}