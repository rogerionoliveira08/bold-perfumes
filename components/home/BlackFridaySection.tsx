
import Link from "next/link";

const whatsapp = "5522998771598";

const produtos = [
  {
    nome: "Amethyst",
    imagem: "amethyst-black.png",
    slug: "badee-al-oud-amethyst",
  },
  {
    nome: "Asad",
    imagem: "asad-black.png",
    slug: "asad",
  },
  {
    nome: "Atheeri",
    imagem: "atheeri-black.png",
    slug: "atheeri",
  },
  {
    nome: "Durrat Al Aroos",
    imagem: "durrat-al-aroos-black.png",
    slug: "durrat-al-aroos",
  },
  {
    nome: "HIS Confession",
    imagem: "his-confession-black.png",
    whatsapp: true,
  },
  {
  nome: "Liquid Brun",
  imagem: "liquid-brun-black.png",
  slug: "liquid-brun",
},
  {
  nome: "Musamam Black Intense",
  imagem: "musamam-black-black.png",
  slug: "musamam-black-intense",
},
  {
    nome: "Queen of Arabia",
    imagem: "quen-of-arabia-black.png",
    whatsapp: true,
  },
  {
    nome: "Shaghaf Al Ward",
    imagem: "shagaf-al-ward-black.png",
    slug: "shaghaf-al-ward",
  },
  {
    nome: "Yara Branco",
    imagem: "yara-branco-black.png",
    slug: "yara-branco",
  },
  {
  nome: "Club de Nuit Intense Man",
  imagem: "club-de-nuit-black.png",
  whatsapp: true,
},
{
  nome: "Trio Al Noble",
  imagem: "trio-al-noble-black.png",
  whatsapp: true,
},
];

export default function BlackFridaySection() {
  return (
    <section className="bg-white py-10 md:py-14"> 
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <span className="mb-2 inline-block text-xs font-bold uppercase tracking-[0.3em] text-red-600">
            Ofertas especiais
          </span>

          <h2 className="text-3xl font-black uppercase tracking-tight text-black md:text-4xl">
            Black Friday <span className="text-red-600">Bold Parfum</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-600 md:text-base">
            Seu próximo perfume favorito está aqui. Aproveite as ofertas
            especiais por tempo limitado.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {produtos.map((produto) => {
            const mensagem = encodeURIComponent(
              `Olá! Tenho interesse no perfume ${produto.nome} da Black Friday da Bold Parfum. Gostaria de mais informações.`
            );

            const destino = produto.whatsapp
              ? `https://wa.me/${whatsapp}?text=${mensagem}`
              : `/produto/${produto.slug}`;

            return (
              <Link
                key={produto.nome}
                href={destino}
                target={produto.whatsapp ? "_blank" : undefined}
                rel={produto.whatsapp ? "noopener noreferrer" : undefined}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-red-500 hover:shadow-lg"
              >
                <div className="overflow-hidden bg-white">
                  <img
                    src={`/black-friday/${produto.imagem}`}
                    alt={`${produto.nome} - Black Friday Bold Parfum`}
                    className="h-auto w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="border-t border-gray-100 px-2 py-3 text-center">
                  <p className="text-xs font-bold uppercase tracking-wide text-black sm:text-sm">
                    {produto.nome}
                  </p>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-red-600 sm:text-xs">
                    {produto.whatsapp
                      ? "Consultar pelo WhatsApp"
                      : "Ver perfume"}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <p className="mt-7 text-center text-xs text-gray-500">
          Consulte disponibilidade e condições pelo atendimento da Bold Parfum.
        </p>
      </div>
    </section>
  );
}
