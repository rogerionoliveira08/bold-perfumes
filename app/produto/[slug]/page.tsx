import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaCheck,
  FaGlobeAmericas,
  FaHeart,
  FaStar,
  FaTag,
} from "react-icons/fa";
import {
  buscarProdutoPorSlug,
  buscarProdutosRelacionados,
} from "@/data/produtos";
import ProductActions from "@/components/products/ProductActions";
import ProductGallery from "@/components/products/ProductGallery";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const produto = buscarProdutoPorSlug(slug);

  if (!produto) {
    notFound();
  }

  const relacionados = buscarProdutosRelacionados(produto, 4);

  const formatarPreco = (valor: number) =>
    valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
        <nav
          aria-label="Navegação estrutural"
          className="mb-6 flex flex-wrap items-center gap-2 text-xs text-zinc-500 sm:mb-8 sm:text-sm"
        >
          <Link href="/" className="transition hover:text-yellow-400">
            Início
          </Link>

          <span>/</span>

          <Link
            href="/produtos"
            className="transition hover:text-yellow-400"
          >
            Perfumes
          </Link>

          <span>/</span>

          <span className="max-w-[180px] truncate text-yellow-400 sm:max-w-none">
            {produto.nome}
          </span>
        </nav>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
          <ProductGallery
            nome={produto.nome}
            imagens={produto.imagens ?? [produto.imagem]}
          />

          <div className="min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {produto.selo && (
                  <span className="rounded-full bg-yellow-400 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-black sm:px-4 sm:py-2 sm:text-sm">
                    {produto.selo}
                  </span>
                )}

                <span className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-zinc-300 sm:px-4 sm:py-2 sm:text-sm">
                  {produto.categoria}
                </span>
              </div>

              <button
                type="button"
                aria-label={`Adicionar ${produto.nome} aos favoritos`}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 transition hover:border-red-500 hover:bg-red-500/10 hover:text-red-500"
              >
                <FaHeart size={17} />
              </button>
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
              {produto.marca}
            </p>

            <h1 className="mt-2 text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              {produto.nome}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
              <div className="flex items-center gap-1 text-yellow-400">
                <FaStar size={15} />
                <span className="font-bold">{produto.avaliacao}</span>
              </div>

              <span className="text-zinc-700">•</span>

              <span className="text-zinc-400">
                {produto.avaliacoes} avaliações
              </span>
            </div>

            {produto.inspiradoEm && (
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-yellow-400/25 bg-yellow-400/5 p-4">
                <FaTag className="mt-1 shrink-0 text-yellow-400" />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                    Inspirado em
                  </p>

                  <p className="mt-1 font-bold text-yellow-400">
                    {produto.inspiradoEm}
                  </p>
                </div>
              </div>
            )}

            <div className="mt-7 border-y border-zinc-800 py-6">
              <p className="text-4xl font-black text-yellow-400 sm:text-5xl">
                {formatarPreco(produto.preco)}
              </p>

              <p className="mt-2 text-sm text-zinc-400 sm:text-base">
                ou 6x de{" "}
                <span className="font-semibold text-white">
                  {formatarPreco(produto.preco / 6)}
                </span>
              </p>

              <p className="mt-2 text-xs text-zinc-500">
                Frete calculado de acordo com o CEP
              </p>
            </div>

            <ProductActions produto={produto} />

            <section className="mt-7 grid gap-3 sm:grid-cols-2">
              <ProductDetail
                label="Família olfativa"
                value={produto.familiaOlfativa}
              />

              <ProductDetail
                label="Concentração"
                value={produto.concentracao}
              />

              <ProductDetail label="Volume" value={produto.volume} />

              <ProductDetail label="Gênero" value={produto.genero} />

              <ProductDetail
                label="Origem"
                value={produto.origem}
                fullWidth
              />
            </section>

            <section className="mt-7 rounded-3xl border border-zinc-800 bg-zinc-950 p-5 sm:p-6">
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Desempenho da fragrância
              </h2>

              <div className="mt-5 space-y-5">
                <InfoBar label="Fixação" value={produto.fixacao} />
                <InfoBar label="Projeção" value={produto.projecao} />
              </div>
            </section>
          </div>
        </div>

        <section className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-950 p-5 sm:mt-16 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
            Sobre a fragrância
          </p>

          <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
            Descrição
          </h2>

          <p className="mt-5 max-w-4xl text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
            {produto.descricao}
          </p>
        </section>

        <section className="mt-8">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
              Pirâmide olfativa
            </p>

            <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
              Notas da fragrância
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <NoteBox
              number="01"
              title="Notas de topo"
              description="A primeira impressão da fragrância."
              notes={produto.notasTopo}
            />

            <NoteBox
              number="02"
              title="Notas de coração"
              description="A personalidade principal do perfume."
              notes={produto.notasCoracao}
            />

            <NoteBox
              number="03"
              title="Notas de base"
              description="As notas que permanecem por mais tempo."
              notes={produto.notasBase}
            />
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-950 p-5 sm:p-8">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black">
              <FaCheck size={15} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                Indicação de uso
              </p>

              <h2 className="mt-1 text-2xl font-black text-white">
                Ocasiões recomendadas
              </h2>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {produto.ocasioes.map((ocasiao) => (
              <span
                key={ocasiao}
                className="rounded-full border border-yellow-400/30 bg-yellow-400/5 px-4 py-2 text-sm font-semibold text-yellow-400"
              >
                {ocasiao}
              </span>
            ))}
          </div>
        </section>

        {relacionados.length > 0 && (
          <section className="mt-14 sm:mt-16">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                  Você também pode gostar
                </p>

                <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  Perfumes relacionados
                </h2>
              </div>

              <Link
                href="/produtos"
                className="hidden text-sm font-bold text-yellow-400 transition hover:text-yellow-300 sm:block"
              >
                Ver todos
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
              {relacionados.map((item) => (
                <Link
                  key={item.id}
                  href={`/produto/${item.slug}`}
                  className="group min-w-0 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-3 transition hover:-translate-y-1 hover:border-yellow-400/70 sm:rounded-3xl sm:p-4"
                >
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-zinc-900 sm:rounded-2xl">
                    <Image
                      src={item.imagem}
                      alt={item.nome}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-contain p-2 transition duration-300 group-hover:scale-105 sm:p-4"
                    />
                  </div>

                  <p className="mt-3 truncate text-[11px] uppercase tracking-wide text-zinc-500 sm:text-xs">
                    {item.marca}
                  </p>

                  <h3 className="mt-1 truncate text-sm font-bold text-white sm:text-lg">
                    {item.nome}
                  </h3>

                  <div className="mt-2 flex items-center gap-1 text-[11px] text-yellow-400 sm:text-xs">
                    <FaStar size={10} />
                    <span className="font-bold">{item.avaliacao}</span>
                  </div>

                  <p className="mt-2 truncate text-sm font-black text-yellow-400 sm:text-lg">
                    {formatarPreco(item.preco)}
                  </p>
                </Link>
              ))}
            </div>

            <Link
              href="/produtos"
              className="mt-6 flex w-full items-center justify-center rounded-xl border border-yellow-400 px-4 py-3 text-sm font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black sm:hidden"
            >
              Ver todos os perfumes
            </Link>
          </section>
        )}

        <section className="mt-12 flex items-center justify-center gap-2 border-t border-zinc-900 pt-8 text-center text-xs text-zinc-500 sm:text-sm">
          <FaGlobeAmericas className="shrink-0 text-yellow-400" />
          Entregamos para todo o Brasil. O frete é calculado conforme o CEP.
        </section>
      </section>
    </main>
  );
}

function InfoBar({ label, value }: { label: string; value: number }) {
  const valorSeguro = Math.min(Math.max(value, 0), 5);

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4 text-sm">
        <span className="font-semibold text-zinc-300">{label}</span>

        <span className="font-bold text-yellow-400">
          {valorSeguro}/5
        </span>
      </div>

      <div
        className="h-2.5 overflow-hidden rounded-full bg-zinc-800"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={5}
        aria-valuenow={valorSeguro}
      >
        <div
          className="h-full rounded-full bg-yellow-400 transition-all duration-500"
          style={{ width: `${valorSeguro * 20}%` }}
        />
      </div>
    </div>
  );
}

function ProductDetail({
  label,
  value,
  fullWidth = false,
}: {
  label: string;
  value: string;
  fullWidth?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-zinc-800 bg-zinc-950 p-4 ${
        fullWidth ? "sm:col-span-2" : ""
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
        {label}
      </p>

      <p className="mt-1 font-bold text-white">{value}</p>
    </div>
  );
}

function NoteBox({
  number,
  title,
  description,
  notes,
}: {
  number: string;
  title: string;
  description: string;
  notes: string[];
}) {
  return (
    <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-black text-white">{title}</h3>

          <p className="mt-1 text-xs leading-5 text-zinc-500">
            {description}
          </p>
        </div>

        <span className="text-3xl font-black text-yellow-400/20">
          {number}
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {notes.map((note) => (
          <span
            key={note}
            className="rounded-full border border-zinc-800 bg-black px-3 py-2 text-xs font-medium text-zinc-300 sm:text-sm"
          >
            {note}
          </span>
        ))}
      </div>
    </article>
  );
}