import Image from "next/image";
import {
  FaHeart,
  FaInstagram,
  FaRegComment,
} from "react-icons/fa";

const publicacoes = [
  {
    id: 1,
    imagem: "/Perfumes/perfume.jpeg",
    alt: "Perfume premium da Bold Parfum",
  },
  {
    id: 2,
    imagem: "/Perfumes/perfume.jpeg",
    alt: "Fragrância árabe da Bold Parfum",
  },
  {
    id: 3,
    imagem: "/Perfumes/perfume.jpeg",
    alt: "Perfume importado selecionado pela Bold Parfum",
  },
  {
    id: 4,
    imagem: "/Perfumes/perfume.jpeg",
    alt: "Coleção de perfumes da Bold Parfum",
  },
];

export default function InstagramSection() {
  return (
    <section className="border-y border-zinc-900 bg-zinc-950/60 px-4 py-9 text-white sm:px-6 sm:py-11">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-yellow-400">
              <FaInstagram size={18} />

              <p className="text-[10px] font-black uppercase tracking-[0.18em] sm:text-xs">
                Acompanhe a Bold Parfum
              </p>
            </div>

            <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-4xl">
              Perfumes, novidades e dicas no Instagram
            </h2>

            <p className="mt-2 text-xs leading-5 text-zinc-500 sm:text-sm sm:leading-6">
              Veja lançamentos, inspirações, sugestões de uso e fragrâncias
              selecionadas para cada ocasião.
            </p>
          </div>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-pink-500/40 bg-pink-500/[0.05] px-5 py-3 text-xs font-black text-pink-400 transition hover:border-pink-500 hover:bg-pink-500 hover:text-white sm:w-auto sm:text-sm"
          >
            <FaInstagram size={17} />
            Seguir no Instagram
          </a>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:grid-cols-4 sm:gap-4">
          {publicacoes.map((publicacao) => (
            <a
              key={publicacao.id}
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver publicação da Bold Parfum no Instagram"
              className="group relative aspect-square overflow-hidden rounded-xl border border-zinc-800 bg-black sm:rounded-2xl"
            >
              <Image
                src={publicacao.imagem}
                alt={publicacao.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover object-center transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/55" />

              <div className="absolute inset-0 flex items-center justify-center gap-5 opacity-0 transition duration-300 group-hover:opacity-100">
                <span className="flex items-center gap-1.5 text-sm font-black text-white">
                  <FaHeart size={15} />
                  128
                </span>

                <span className="flex items-center gap-1.5 text-sm font-black text-white">
                  <FaRegComment size={15} />
                  14
                </span>
              </div>

              <div className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md sm:bottom-3 sm:right-3">
                <FaInstagram size={14} />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-zinc-800 bg-black/50 px-4 py-4 text-center sm:mt-6 sm:flex sm:items-center sm:justify-between sm:px-5 sm:text-left">
          <div>
            <p className="text-sm font-black text-white">
              Compartilhe sua experiência com a Bold Parfum
            </p>

            <p className="mt-1 text-xs text-zinc-500">
              Marque nosso perfil e mostre qual fragrância combina com você.
            </p>
          </div>

          <span className="mt-3 inline-block text-xs font-black text-yellow-400 sm:mt-0">
            #BoldParfum
          </span>
        </div>
      </div>
    </section>
  );
}