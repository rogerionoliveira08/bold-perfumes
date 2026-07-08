import ProductCard from "./ProductCard";
import { produtos } from "../data/produtos";

export default function ProductGrid() {
  return (
    <section className="bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 text-center mb-10">
          Produtos em Destaque
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {produtos.map((produto) => (
            <ProductCard
              key={produto.id}
              nome={produto.nome}
              preco={`R$ ${produto.preco}`}
              imagem={produto.imagem}
            />
          ))}
        </div>
      </div>
    </section>
  );
}