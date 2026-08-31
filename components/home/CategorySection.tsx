import Link from "next/link";
import {
  FaCrown,
  FaFire,
  FaGift,
  FaMoon,
  FaSprayCan,
  FaVenusMars,
} from "react-icons/fa";

const categorias = [
  {
    nome: "Masculinos",
    descricao: "Fragrâncias marcantes, frescas e sofisticadas",
    href: "/produtos?categoria=Masculino",
    icone: <FaVenusMars />,
  },
  {
    nome: "Femininos",
    descricao: "Perfumes delicados, intensos e elegantes",
    href: "/produtos?categoria=Feminino",
    icone: <FaCrown />,
  },
  {
    nome: "Unissex",
    descricao: "Fragrâncias versáteis para diferentes estilos",
    href: "/produtos?categoria=Unissex",
    icone: <FaSprayCan />,
  },
  {
    nome: "Perfumes árabes",
    descricao: "Tradição oriental, personalidade e intensidade",
    href: "/produtos",
    icone: <FaMoon />,
  },
  {
    nome: "Mais vendidos",
    descricao: "Conheça os favoritos dos clientes da Bold Parfum",
    href: "/produtos?filtro=mais-vendidos",
    icone: <FaFire />,
  },
  {
    nome: "Ofertas",
    descricao: "Condições especiais em fragrâncias selecionadas",
    href: "/produtos?filtro=promocoes",
    icone: <FaGift />,
    destaque: true,
  },
];

export default function CategorySection() {
  return (
    <section
      id="categorias"
      className="border-b border-zinc-200 bg-white px-4 py-12 sm:px-6 sm:py-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-zinc-500">
              Encontre sua fragrância
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">
              Explore por categoria
            </h2>

            <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-base">
              Escolha por estilo e encontre mais rapidamente os perfumes que
              combinam com você.
            </p>
          </div>

          <Link
            href="/produtos"
            className="hidden border border-zinc-950 bg-white px-6 py-3 text-sm font-bold text-zinc-950 transition hover:bg-zinc-950 hover:text-white sm:inline-flex"
          >
            Ver catálogo completo
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categorias.map((categoria) => (
            <Link
              key={categoria.nome}
              href={categoria.href}
              className="group flex min-h-[170px] flex-col border border-zinc-200 bg-zinc-50 p-4 transition duration-300 hover:-translate-y-1 hover:border-zinc-950 hover:bg-white hover:shadow-lg sm:min-h-[185px] sm:p-5"
            >
              <div
                className={`flex h-11 w-11 items-center justify-center text-lg text-white transition duration-300 ${
                  categoria.destaque
                    ? "bg-[#d50000] group-hover:bg-[#b80000]"
                    : "bg-black group-hover:bg-zinc-800"
                }`}
              >
                {categoria.icone}
              </div>

              <h3 className="mt-4 text-sm font-extrabold leading-tight text-zinc-950 sm:text-base">
                {categoria.nome}
              </h3>

              <p className="mt-2 text-xs leading-5 text-zinc-600">
                {categoria.descricao}
              </p>

              <span
                className={`mt-auto pt-4 text-[10px] font-extrabold uppercase tracking-[0.1em] transition ${
                  categoria.destaque
                    ? "text-[#d50000] group-hover:text-[#b80000]"
                    : "text-zinc-950 group-hover:text-zinc-600"
                }`}
              >
                Ver produtos
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/produtos"
          className="mt-6 flex w-full items-center justify-center bg-black px-4 py-3 text-sm font-extrabold text-white transition hover:bg-zinc-800 sm:hidden"
        >
          Ver catálogo completo
        </Link>
      </div>
    </section>
  );
}