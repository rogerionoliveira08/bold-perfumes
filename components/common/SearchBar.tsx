"use client";

import { useState } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { produtos } from "@/data/produtos";

export default function SearchBar() {
  const [busca, setBusca] = useState("");

  const termo = busca.toLowerCase().trim();

  const resultados =
    termo.length > 0
      ? produtos.filter(
          (produto) =>
            produto.nome.toLowerCase().includes(termo) ||
            produto.marca.toLowerCase().includes(termo) ||
            produto.categoria.toLowerCase().includes(termo) ||
            (produto.familiaOlfativa ?? "")
              .toLowerCase()
              .includes(termo)
        )
      : [];

  return (
    <div className="relative w-full">
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />

      <input
        type="text"
        placeholder="Pesquisar perfume..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 py-3 pl-11 pr-4 text-white outline-none transition focus:border-yellow-400"
      />

      {resultados.length > 0 && (
        <div className="absolute left-0 top-14 z-50 w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl">
          {resultados.slice(0, 5).map((produto) => (
            <Link
              key={produto.id}
              href={`/produto/${produto.slug}`}
              onClick={() => setBusca("")}
              className="block border-b border-zinc-800 px-4 py-3 transition hover:bg-zinc-900"
            >
              <p className="font-bold text-white">{produto.nome}</p>

              <p className="text-sm text-zinc-400">
                {produto.marca} • R${" "}
                {produto.preco.toFixed(2).replace(".", ",")}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}