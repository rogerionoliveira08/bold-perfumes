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
    <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 hover:border-yellow-400 transition">

      <Image
        src={imagem}
        alt={nome}
        width={250}
        height={320}
        className="mx-auto rounded-xl"
      />

      <h3 className="text-white text-xl font-bold mt-4">
        {nome}
      </h3>

      <p className="text-yellow-400 text-2xl font-bold mt-2">
        {preco}
      </p>

      <button className="w-full mt-5 bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition">
        Comprar
      </button>

    </div>
  );
}