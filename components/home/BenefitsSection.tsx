import {
  FaCheckCircle,
  FaShippingFast,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";

const beneficios = [
  {
    icon: <FaStar />,
    titulo: "Curadoria especializada",
    texto:
      "Fragrâncias selecionadas de acordo com seu estilo, ocasião e preferência olfativa.",
    whatsapp: false,
  },
  {
    icon: <FaCheckCircle />,
    titulo: "Perfumes originais",
    texto:
      "Trabalhamos com perfumes árabes originais e fornecedores selecionados.",
    whatsapp: false,
  },
  {
    icon: <FaShippingFast />,
    titulo: "Envio para todo o Brasil",
    texto:
      "Entrega acompanhada e frete calculado de acordo com o seu CEP.",
    whatsapp: false,
  },
  {
    icon: <FaWhatsapp />,
    titulo: "Consultoria pelo WhatsApp",
    texto:
      "Receba uma indicação personalizada antes de escolher sua fragrância.",
    whatsapp: true,
  },
];

export default function BenefitsSection() {
  return (
    <section className="border-b border-zinc-200 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {beneficios.map((beneficio) => (
            <article
              key={beneficio.titulo}
              className="group flex min-h-[150px] flex-col border border-zinc-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-zinc-950 hover:shadow-md sm:min-h-[165px] sm:p-5"
            >
              <div
                className={
                  beneficio.whatsapp
                    ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-base text-white shadow-sm"
                    : "flex h-10 w-10 shrink-0 items-center justify-center bg-black text-base text-white"
                }
              >
                {beneficio.icon}
              </div>

              <h2 className="mt-4 text-sm font-extrabold leading-5 text-zinc-950 sm:text-base">
                {beneficio.titulo}
              </h2>

              <p className="mt-2 text-xs leading-5 text-zinc-600 sm:text-sm">
                {beneficio.texto}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}