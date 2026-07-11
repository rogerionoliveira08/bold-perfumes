import Link from "next/link";
import { produtos } from "@/data/produtos";
import ProductCard from "@/components/products/ProductCard";

export default function BestSellers() {
  const maisVendidos = produtos.slice(0, 4);

  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
              Mais Vendidos
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white sm:text-5xl">
              Os favoritos dos nossos clientes
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-400">
              Conheça os perfumes mais procurados da Bold Parfum,
              selecionados pela excelente fixação, projeção e custo-benefício.
            </p>
          </div>

          <Link
            href="/produtos"
            className="font-bold text-yellow-400 transition hover:text-yellow-300"
          >
            Ver catálogo →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {maisVendidos.map((produto) => (
            <ProductCard
              key={produto.id}
              id={produto.id}
              slug={produto.slug}
              nome={produto.nome}
              marca={produto.marca}
              preco={produto.preco}
              imagem={produto.imagem}
              categoria={produto.categoria}
              selo={produto.selo}
              avaliacao={produto.avaliacao}
              avaliacoes={produto.avaliacoes}
            />
          ))}
        </div>
      </div>
    </section>
  );
}