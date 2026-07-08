"use client";

import Image from "next/image";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

type ProductCardProps = {
  id: number;
  nome: string;
  marca: string;
  preco: number;
  imagem: string;
  categoria: string;
  selo?: string;
  avaliacao: number;
  avaliacoes: number;
};

export default function ProductCard({
  id,
  nome,
  marca,
  preco,
  imagem,
  categoria,
  selo,
  avaliacao,
  avaliacoes,
}: ProductCardProps) {
  const { adicionarAoCarrinho } = useCart();

  const parcela = preco / 6;

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/10">
      {selo && (
        <span className="absolute left-4 top-4 z-10 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-black">
          {selo}
        </span>
      )}

      <button className="absolute right-4 top-4 z-10 rounded-full bg-black/70 p-3 text-white backdrop-blur transition hover:text-red-500">
        <FaHeart size={16} />
      </button>

      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-900 to-black">
        <Image
          src={imagem}
          alt={nome}
          width={420}
          height={420}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-medium text-zinc-400">{marca}</p>

          <span className="rounded-full border border-yellow-400/40 px-3 py-1 text-xs text-yellow-400">
            {categoria}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white">{nome}</h3>

        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1 text-yellow-400">
            <FaStar />
            <span className="font-bold">{avaliacao}</span>
          </div>

          <span className="text-zinc-500">({avaliacoes} avaliações)</span>
        </div>

        <div>
          <p className="text-3xl font-bold text-yellow-400">
            R$ {preco.toFixed(2).replace(".", ",")}
          </p>

          <p className="text-sm text-zinc-400">
            ou 6x de R$ {parcela.toFixed(2).replace(".", ",")}
          </p>
        </div>

        <button
          onClick={() =>
            adicionarAoCarrinho({
              id,
              nome,
              marca,
              preco,
              imagem,
              categoria,
              selo,
              avaliacao,
              avaliacoes,
            })
          }
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 py-3 font-bold text-black transition hover:bg-yellow-300"
        >
          <FaShoppingCart />
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}