import {
  FaArrowRight,
  FaInstagram,
} from "react-icons/fa";

const publicacoes = [
  {
    id: 1,
    titulo: "Dicas de perfumaria Bold Parfum",
    url: "https://www.instagram.com/reel/DchhPuRhcv-/",
    embed: "https://www.instagram.com/reel/DchhPuRhcv-/embed/",
  },
  {
    id: 2,
    titulo: "Perfumes e experiências olfativas",
    url: "https://www.instagram.com/reel/DchijElB2Sd/",
    embed: "https://www.instagram.com/reel/DchijElB2Sd/embed/",
  },
  {
    id: 3,
    titulo: "Conteúdo Bold Parfum",
    url: "https://www.instagram.com/reel/DchjxYUBCm0/",
    embed: "https://www.instagram.com/reel/DchjxYUBCm0/embed/",
  },
  {
    id: 4,
    titulo: "Perfumes e dicas da Bold Parfum",
    url: "https://www.instagram.com/reel/DchngXbBfjz/",
    embed: "https://www.instagram.com/reel/DchngXbBfjz/embed/",
  },
];

export default function InstagramSection() {
  return (
    <section className="border-y border-zinc-800 bg-black px-4 py-14 text-white sm:px-6 sm:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-zinc-400">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950 text-white">
                <FaInstagram size={17} />
              </div>

              <p className="text-[10px] font-black uppercase tracking-[0.2em] sm:text-xs">
                Acompanhe a Bold Parfum
              </p>
            </div>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.035em] text-white sm:text-5xl">
              Perfumes, novidades
              <span className="block text-zinc-400">
                e dicas no Instagram.
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
              Conteúdo para ajudar você a conhecer fragrâncias, entender
              melhor a perfumaria e encontrar o perfume certo para cada
              ocasião.
            </p>
          </div>

          <a
            href="https://www.instagram.com/bold.parfum/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border border-white bg-white px-6 py-3 text-sm font-black text-black transition hover:bg-zinc-200 sm:w-auto"
          >
            <FaInstagram size={17} />
            Seguir no Instagram
            <FaArrowRight size={11} />
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {publicacoes.map((publicacao) => (
            <article
              key={publicacao.id}
              className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
            >
              <div className="aspect-[9/16] w-full overflow-hidden bg-black">
                <iframe
                  src={publicacao.embed}
                  title={publicacao.titulo}
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-zinc-800 px-5 py-4">
                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.16em] text-zinc-500">
                    Bold Parfum
                  </p>

                  <p className="mt-1 truncate text-sm font-bold text-white">
                    {publicacao.titulo}
                  </p>
                </div>

                <a
                  href={publicacao.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${publicacao.titulo} no Instagram`}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-black text-white transition hover:border-white hover:bg-white hover:text-black"
                >
                  <FaInstagram size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-black text-white">
              Compartilhe sua experiência com a Bold Parfum
            </p>

            <p className="mt-1 text-xs leading-5 text-zinc-400">
              Marque nosso perfil e mostre qual fragrância combina com você.
            </p>
          </div>

          <a
            href="https://www.instagram.com/bold.parfum/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-black text-white transition hover:text-zinc-300"
          >
            @bold.parfum
            <FaArrowRight size={10} />
          </a>
        </div>
      </div>
    </section>
  );
}
