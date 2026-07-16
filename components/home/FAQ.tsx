const perguntas = [
  {
    pergunta: "Os perfumes são originais?",
    resposta:
      "Sim. A Bold Parfum trabalha com perfumes selecionados e de procedência garantida.",
  },
  {
    pergunta: "Vocês enviam para todo o Brasil?",
    resposta:
      "Sim. Enviamos para todo o Brasil. O prazo e o valor do frete podem variar conforme o CEP.",
  },
  {
    pergunta: "Como faço para finalizar a compra?",
    resposta:
      'Adicione os produtos ao carrinho e clique em "Finalizar pedido no WhatsApp". A mensagem será enviada com os itens e o valor total.',
  },
  {
    pergunta: "Posso pedir ajuda para escolher um perfume?",
    resposta:
      "Sim. Nossa equipe pode ajudar você a escolher uma fragrância de acordo com seu estilo, ocasião e preferências.",
  },
  {
    pergunta: "Quais formas de pagamento são aceitas?",
    resposta:
      "As formas de pagamento disponíveis serão confirmadas durante o atendimento pelo WhatsApp.",
  },
];

export default function FAQ() {
  return (
    <section className="border-t border-zinc-900 bg-zinc-950 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
            Tire suas dúvidas
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
            Perguntas frequentes
          </h2>

          <p className="mt-4 text-zinc-400">
            Encontre respostas rápidas sobre produtos, pedidos e atendimento.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {perguntas.map((item) => (
            <details
              key={item.pergunta}
              className="group rounded-2xl border border-zinc-800 bg-black/50 p-5 open:border-yellow-400/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-white">
                <span>{item.pergunta}</span>

                <span className="text-2xl text-yellow-400 transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 border-t border-zinc-800 pt-4 leading-7 text-zinc-400">
                {item.resposta}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}