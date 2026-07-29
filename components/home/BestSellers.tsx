 import { produtos } from "@/data/produtos";
import ProductCard from "@/components/products/ProductCard";

export default function BestSellers() {
  const maisVendidos = produtos.slice(-4);

  return (
    <section className="bg-black px-4 py-12 text-white sm:px-6 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
            Destaques
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Mais vendidos
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {maisVendidos.map((produto) => (
            <ProductCard key={produto.id} {...produto} />
          ))}
        </div>
      </div>
    </section>
  );
}