import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaHeart, FaStar } from "react-icons/fa";
import { produtos } from "@/data/produtos";
import ProductActions from "@/components/products/ProductActions";
import ProductGallery from "@/components/products/ProductGallery";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const produto = produtos.find((item) => item.slug === slug);

  if (!produto) {
    notFound();
  }

  const relacionados = produtos
    .filter(
      (item) =>
        item.id !== produto.id &&
        (item.categoria === produto.categoria || item.marca === produto.marca)
    )
    .slice(0, 4);

  const mensagemWhatsApp = encodeURIComponent(
    `Olá! Tenho interesse no perfume ${produto.nome} da Bold Parfam.\n\nValor: R$ ${produto.preco.toFixed(
      2
    )}\n\nGostaria de mais informações.`
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 text-sm text-zinc-400">
          <Link href="/" className="hover:text-yellow-400">
            Início
          </Link>{" "}
          / <span>Perfumes</span> /{" "}
          <span className="text-yellow-400">{produto.nome}</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
         <ProductGallery
  nome={produto.nome}
  imagens={produto.imagens ?? [produto.imagem]}
/>

          <div>
            <div className="flex items-center justify-between gap-4">
              {produto.selo && (
                <span className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold uppercase text-black">
                  {produto.selo}
                </span>
              )}

              <button className="rounded-full border border-zinc-700 p-4 text-white hover:border-red-500 hover:text-red-500">
                <FaHeart />
              </button>
            </div>

            <h1 className="mt-6 text-4xl font-bold md:text-6xl">
              {produto.nome}
            </h1>

            <p className="mt-2 text-lg text-zinc-400">{produto.marca}</p>

            <div className="mt-5 flex items-center gap-2 text-yellow-400">
              <FaStar />
              <span className="font-bold">{produto.avaliacao}</span>
              <span className="text-zinc-500">
                ({produto.avaliacoes} avaliações)
              </span>
            </div>

            <p className="mt-8 text-5xl font-bold text-yellow-400">
              R$ {produto.preco.toFixed(2).replace(".", ",")}
            </p>

            <p className="mt-2 text-zinc-400">
              ou 6x de R$ {(produto.preco / 6).toFixed(2).replace(".", ",")}
            </p>

            <div className="mt-8 grid gap-4 rounded-3xl border border-zinc-800 bg-zinc-950 p-5">
              <InfoBar label="Fixação" value={produto.fixacao} />
              <InfoBar label="Projeção" value={produto.projecao} />
            </div>

            <ProductActions produto={produto} />

            <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
              <h2 className="mb-3 text-2xl font-bold text-yellow-400">
                Descrição
              </h2>
              <p className="leading-relaxed text-zinc-300">
                {produto.descricao}
              </p>
            </div>
          </div>
        </div>

        <section className="mt-14 grid gap-6 lg:grid-cols-3">
          <NoteBox title="Notas de topo" notes={produto.notasTopo} />
          <NoteBox title="Notas de coração" notes={produto.notasCoracao} />
          <NoteBox title="Notas de base" notes={produto.notasBase} />
        </section>

        <section className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
          <h2 className="mb-4 text-2xl font-bold text-yellow-400">
            Ocasiões de uso
          </h2>

          <div className="flex flex-wrap gap-3">
            {(produto.ocasioes ?? []).map((ocasiao) => (
              <span
                key={ocasiao}
                className="rounded-full border border-yellow-400/40 px-4 py-2 text-yellow-400"
              >
                {ocasiao}
              </span>
            ))}
          </div>
        </section>

        {relacionados.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-6 text-3xl font-bold text-yellow-400">
              Perfumes relacionados
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relacionados.map((item) => (
                <Link
                  key={item.id}
                  href={`/produto/${item.slug}`}
                  className="rounded-3xl border border-zinc-800 bg-zinc-950 p-4 transition hover:-translate-y-1 hover:border-yellow-400"
                >
                  <Image
                    src={item.imagem}
                    alt={item.nome}
                    width={300}
                    height={300}
                    className="h-56 w-full rounded-2xl object-cover"
                  />

                  <p className="mt-4 text-sm text-zinc-400">{item.marca}</p>
                  <h3 className="text-xl font-bold">{item.nome}</h3>
                  <p className="mt-2 font-bold text-yellow-400">
                    R$ {item.preco.toFixed(2).replace(".", ",")}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </section>
    </main>
  );
}

function InfoBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span className="text-zinc-400">{label}</span>
        <span className="font-bold text-yellow-400">{value}/5</span>
      </div>

      <div className="h-3 rounded-full bg-zinc-800">
        <div
          className="h-3 rounded-full bg-yellow-400"
          style={{ width: `${value * 20}%` }}
        />
      </div>
    </div>
  );
}

function NoteBox({ title, notes }: { title: string; notes?: string[] }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
      <h2 className="mb-4 text-xl font-bold text-yellow-400">{title}</h2>

      <div className="flex flex-wrap gap-3">
        {(notes ?? []).map((note) => (
          <span
            key={note}
            className="rounded-full bg-zinc-900 px-4 py-2 text-zinc-300"
          >
            {note}
          </span>
        ))}
      </div>
    </div>
  );
}