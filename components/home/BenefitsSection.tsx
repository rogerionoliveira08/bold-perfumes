 import {
  FaCreditCard,
  FaLock,
  FaMapMarkedAlt,
  FaShippingFast,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";

const beneficios = [
  {
    icon: <FaStar />,
    titulo: "+500 clientes satisfeitos",
    texto: "Confiança construída com atendimento próximo e fragrâncias selecionadas.",
  },
  {
    icon: <FaShippingFast />,
    titulo: "Enviamos para todo o Brasil",
    texto: "Postagem rápida e acompanhamento do pedido.",
  },
  {
    icon: <FaLock />,
    titulo: "Compra segura",
    texto: "Suporte durante toda a compra para você comprar com tranquilidade.",
  },
  {
    icon: <FaCreditCard />,
    titulo: "Parcelamento em até 12x",
    texto: "Mais facilidade para escolher sua próxima fragrância.",
  },
  {
    icon: <FaMapMarkedAlt />,
    titulo: "Frete calculado por CEP",
    texto: "Consulte o valor da entrega de acordo com sua região.",
  },
  {
    icon: <FaWhatsapp />,
    titulo: "Atendimento pelo WhatsApp",
    texto: "Tire dúvidas e receba ajuda rápida para escolher seu perfume.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="border-b border-zinc-900 bg-zinc-950/70">
      <div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 sm:py-7">
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
          {beneficios.map((beneficio) => (
            <article
              key={beneficio.titulo}
              className="group flex min-h-[145px] flex-col rounded-xl border border-zinc-800 bg-black/50 p-3 transition duration-300 hover:-translate-y-0.5 hover:border-yellow-400/50 hover:bg-yellow-400/[0.03] sm:min-h-[165px] sm:rounded-2xl sm:p-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-yellow-400/20 bg-yellow-400/[0.07] text-sm text-yellow-400 transition group-hover:border-yellow-400/50 group-hover:bg-yellow-400 group-hover:text-black sm:h-10 sm:w-10 sm:rounded-xl sm:text-base">
                {beneficio.icon}
              </div>

              <h2 className="mt-3 text-[11px] font-black leading-4 text-white sm:text-sm sm:leading-5">
                {beneficio.titulo}
              </h2>

              <p className="mt-1.5 line-clamp-3 text-[9px] leading-4 text-zinc-500 sm:text-[11px] sm:leading-5">
                {beneficio.texto}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}