"use client";

import { useState } from "react";
import Image from "next/image";

type ProductGalleryProps = {
  nome: string;
  imagens: string[];
};

export default function ProductGallery({ nome, imagens }: ProductGalleryProps) {
  const [imagemAtual, setImagemAtual] = useState(imagens[0]);

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
        <Image
          src={imagemAtual}
          alt={nome}
          width={700}
          height={800}
          className="h-auto w-full object-cover transition duration-300 hover:scale-105"
          priority
        />
      </div>

      <div className="grid grid-cols-3 gap-3">
       {imagens.map((imagem, index) => (
  <button
    key={`${imagem}-${index}`}
            onClick={() => setImagemAtual(imagem)}
            className={`rounded-2xl border bg-zinc-950 p-2 transition ${
              imagemAtual === imagem
                ? "border-yellow-400"
                : "border-zinc-800 hover:border-yellow-400/60"
            }`}
          >
            <Image
              src={imagem}
              alt={nome}
              width={200}
              height={200}
              className="h-28 w-full rounded-xl object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}