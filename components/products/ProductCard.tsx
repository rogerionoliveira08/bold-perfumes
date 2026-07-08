import Image from "next/image";

type ProductCardProps = {
  nome: string;
  preco: string;
  imagem: string;
};

export default function ProductCard({
  nome,
  preco,
  imagem,
}: ProductCardProps) {
  return (
    <div className="group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="overflow-hidden">
        <Image
          src={imagem}
          alt={nome}
          width={400}
          height={500}
          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-5">

        <h3 className="text-white text-xl font-bold">
          {nome}
        </h3>

        <p className="text-yellow-400 text-3xl font-bold mt-2">
          {preco}
        </p>

        <div className="flex items-center gap-1 mt-3 text-yellow-400">
          ★★★★★
        </div>

        <button className="w-full mt-6 bg-yellow-400 text-black py-3 rounded-xl font-bold hover:bg-yellow-300 transition">
          Adicionar ao Carrinho
        </button>

      </div>

    </div>
  );
}