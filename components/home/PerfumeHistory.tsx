const historyItems = [
  {
    period: "Origens",
    title: "As primeiras fragrâncias",
    description:
      "A perfumaria já existia em antigas civilizações, como Mesopotâmia e Egito, onde flores, óleos, madeiras e resinas eram utilizados em rituais, cuidados pessoais e cerimônias.",
  },
  {
    period: "Séculos VIII–XIII",
    title: "O desenvolvimento no mundo árabe",
    description:
      "Durante a Era de Ouro Islâmica, estudiosos aperfeiçoaram técnicas de extração e destilação, ampliando a produção de águas aromáticas, óleos e essências.",
  },
  {
    period: "Dias atuais",
    title: "Tradição que conquistou o mundo",
    description:
      "Hoje, a perfumaria árabe combina tradição e técnicas modernas para criar fragrâncias sofisticadas, marcantes e reconhecidas por sua intensidade e excelente fixação.",
  },
];

export default function PerfumeHistory() {
  return (
    <section className="relative overflow-hidden border-y border-zinc-900 bg-zinc-950 py-14 sm:py-20">
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-yellow-400">
            Tradição, arte e sofisticação
          </p>

          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            A história da perfumaria árabe
          </h2>

          <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">
            A perfumaria não nasceu no mundo árabe, mas foi profundamente
            desenvolvida por seus estudiosos e artesãos. Ao longo dos séculos,
            esse conhecimento transformou ingredientes naturais em fragrâncias
            capazes de expressar identidade, presença e personalidade.
          </p>
        </div>

        <div className="relative mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
          {historyItems.map((item, index) => (
            <article
              key={item.period}
              className="group relative rounded-2xl border border-zinc-800 bg-black/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/50"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-bold text-yellow-400">
                  {item.period}
                </span>

                <span className="text-3xl font-black text-zinc-800 transition group-hover:text-yellow-400/30">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-lg font-black text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-yellow-400/20 bg-yellow-400/5 px-5 py-6 text-center sm:px-8">
          <p className="text-sm leading-7 text-zinc-300 sm:text-base">
            Ingredientes como <strong className="text-white">oud</strong>,
            rosas, âmbar, almíscar, especiarias e resinas continuam presentes
            nessa tradição, dando origem a perfumes envolventes e
            inesquecíveis.
          </p>

          <p className="mt-3 font-semibold italic text-yellow-400">
            Mais do que uma fragrância, uma verdadeira assinatura olfativa.
          </p>
        </div>
      </div>
    </section>
  );
}