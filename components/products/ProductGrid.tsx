import { produtos } from "@/data/produtos";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section className="bg-black px-4 py-12 text-white sm:px-6 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-2 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
            Nossa seleção
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Produtos em Destaque
          </h2>

          <p className="mx-auto max-w-2xl text-sm text-zinc-400 sm:text-base">
            Conheça fragrâncias marcantes, originais e cuidadosamente
            selecionadas para cada estilo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {produtos.map((produto) => (
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