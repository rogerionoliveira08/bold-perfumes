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
    descricao: "Fragrâncias marcantes e sofisticadas",
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
    nome: "Árabes",
    descricao: "Presença, luxo e excelente fixação",
    href: "/produtos?categoria=Arabe",
    icone: <FaMoon />,
  },
  {
    nome: "Promoções",
    descricao: "Oportunidades especiais por tempo limitado",
    href: "/produtos?filtro=promocoes",
    icone: <FaGift />,
  },
  {
    nome: "Mais vendidos",
    descricao: "Os favoritos dos clientes da Bold Parfum",
    href: "/produtos?filtro=mais-vendidos",
    icone: <FaFire />,
  },
  {
    nome: "Decants",
    descricao: "Experimente novas fragrâncias em versões menores",
    href: "/produtos?categoria=Decants",
    icone: <FaSprayCan />,
  },
];

export default function CategorySection() {
  return (
    <section
      id="categorias"
      className="border-y border-zinc-900 bg-black px-4 py-9 text-white sm:px-6 sm:py-11"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-yellow-400 sm:text-xs">
            Encontre sua fragrância
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-4xl">
            Explore por categoria
          </h2>

          <p className="mt-2 text-xs leading-5 text-zinc-500 sm:text-sm sm:leading-6">
            Escolha o estilo que mais combina com sua personalidade e descubra
            perfumes selecionados para cada ocasião.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3 lg:grid-cols-6">
          {categorias.map((categoria) => (
            <Link
              key={categoria.nome}
              href={categoria.href}
              className="group flex min-h-[150px] flex-col rounded-2xl border border-zinc-800 bg-zinc-950 p-4 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/60 hover:bg-yellow-400/[0.04] hover:shadow-[0_14px_35px_rgba(250,204,21,0.08)] sm:min-h-[170px]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-400/20 bg-yellow-400/[0.06] text-lg text-yellow-400 transition group-hover:border-yellow-400/50 group-hover:bg-yellow-400 group-hover:text-black sm:h-11 sm:w-11 sm:text-xl">
                {categoria.icone}
              </div>

              <h3 className="mt-4 text-sm font-black leading-tight text-white transition group-hover:text-yellow-400 sm:text-base">
                {categoria.nome}
              </h3>

              <p className="mt-2 line-clamp-3 text-[10px] leading-4 text-zinc-500 sm:text-xs sm:leading-5">
                {categoria.descricao}
              </p>

              <span className="mt-auto pt-3 text-[9px] font-black uppercase tracking-[0.12em] text-yellow-400 sm:text-[10px]">
                Ver produtos
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}