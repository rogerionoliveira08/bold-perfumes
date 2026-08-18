 import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaCheck,
  FaCreditCard,
  FaGlobeAmericas,
  FaHeadset,
  FaShieldAlt,
  FaShippingFast,
  FaStar,
} from "react-icons/fa";
import {
  buscarProdutoPorSlug,
  buscarProdutosRelacionados,
} from "@/data/produtos";
import type { Product } from "@/types/product";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ProductGallery from "@/components/products/ProductGallery";
import ProductSummary from "@/components/products/ProductSummary";
import ProductDescription from "@/components/products/ProductDescription";
import ProductNotes from "@/components/products/ProductNotes";
import ProductCharacteristics from "@/components/products/ProductCharacteristics";
import ProductOccasions from "@/components/products/ProductOccasions";
import RelatedProducts from "@/components/products/RelatedProducts";
import ProductReviews from "@/components/reviews/ProductReviews";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const produto = buscarProdutoPorSlug(slug);

  if (!produto) {
    return {
      title: "Produto não encontrado",
      description:
        "O produto procurado não foi encontrado no catálogo da Bold Parfum.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const descricaoLimpa = produto.descricao.replace(/\s+/g, " ").trim();

  const descricaoSeo =
    descricaoLimpa.length > 155
      ? `${descricaoLimpa.slice(0, 152).trim()}...`
      : descricaoLimpa;

  const titulo = `${produto.nome} ${produto.marca}`;

  return {
    title: titulo,

    description: descricaoSeo,

    keywords: [
      produto.nome,
      produto.marca,
      produto.categoria,
      produto.genero,
      produto.familiaOlfativa,
      produto.origem,
      "perfume original",
      "perfume importado",
      "perfume árabe",
      "Bold Parfum",
      ...(produto.inspiradoEm
        ? [`perfume inspirado em ${produto.inspiradoEm}`]
        : []),
    ],

    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: "Bold Parfum",
      title: `${titulo} | Bold Parfum`,
      description: descricaoSeo,
      images: [
        {
          url: produto.imagem,
          alt: `${produto.nome}, da marca ${produto.marca}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${titulo} | Bold Parfum`,
      description: descricaoSeo,
      images: [produto.imagem],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const produto = buscarProdutoPorSlug(slug);

  if (!produto) {
    notFound();
  }

  const relacionados = buscarProdutosRelacionados(produto, 4);

  const imagensProduto =
    produto.imagens && produto.imagens.length > 0
      ? produto.imagens
      : [produto.imagem];

  const propriedadesAdicionais = [
    {
      "@type": "PropertyValue",
      name: "Família olfativa",
      value: produto.familiaOlfativa,
    },
    {
      "@type": "PropertyValue",
      name: "Concentração",
      value: produto.concentracao,
    },
    {
      "@type": "PropertyValue",
      name: "Volume",
      value: produto.volume,
    },
    {
      "@type": "PropertyValue",
      name: "Gênero",
      value: produto.genero,
    },
    {
      "@type": "PropertyValue",
      name: "Origem",
      value: produto.origem,
    },
    ...(produto.duracao
      ? [
          {
            "@type": "PropertyValue",
            name: "Duração",
            value: produto.duracao,
          },
        ]
      : []),
    ...(produto.rastro
      ? [
          {
            "@type": "PropertyValue",
            name: "Rastro",
            value: produto.rastro,
          },
        ]
      : []),
    ...(produto.inspiradoEm
      ? [
          {
            "@type": "PropertyValue",
            name: "Inspirado em",
            value: produto.inspiradoEm,
          },
        ]
      : []),
  ];

  const dadosEstruturados = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: produto.nome,
    description: produto.descricao,
    image: imagensProduto,
    brand: {
      "@type": "Brand",
      name: produto.marca,
    },
    category: produto.categoria,
    sku: String(produto.id),
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      price: produto.preco.toFixed(2),
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Bold Parfum",
      },
    },
    additionalProperty: propriedadesAdicionais,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dadosEstruturados).replace(/</g, "\\u003c"),
        }}
      />

      <TopBar />
      <Navbar />

      <main className="min-h-screen overflow-x-hidden bg-black text-white">
        <section className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-7">
          <nav
            aria-label="Navegação estrutural"
            className="mb-4 flex min-w-0 items-center gap-2 overflow-hidden text-[11px] text-zinc-500 sm:mb-7 sm:flex-wrap sm:text-sm"
          >
            <Link
              href="/"
              className="shrink-0 transition hover:text-yellow-400"
            >
              Início
            </Link>

            <span className="shrink-0 text-zinc-700">/</span>

            <Link
              href="/produtos"
              className="shrink-0 transition hover:text-yellow-400"
            >
              Perfumes
            </Link>

            <span className="shrink-0 text-zinc-700">/</span>

            <span className="min-w-0 truncate font-semibold text-yellow-400">
              {produto.nome}
            </span>
          </nav>

          <div className="grid items-start gap-6 lg:grid-cols-[430px_1fr] lg:gap-10 xl:grid-cols-[470px_1fr]">
            <ProductGallery
              nome={produto.nome}
              imagens={imagensProduto}
            />

            <ProductSummary produto={produto} />
          </div>

          <TrustSection />

          <div className="mt-8 space-y-8 sm:mt-12 sm:space-y-12">
            <ProductDescription produto={produto} />

            <ProductNotes produto={produto} />

            <ProductCharacteristics produto={produto} />

            <ProductOccasions produto={produto} />

                        <AdvancedProductDetails produto={produto} />

            <ProductReviews
              produtoSlug={produto.slug}
              produtoNome={produto.nome}
            />

            <RelatedProducts produtos={relacionados} />
          </div>

          <section className="mt-9 border-t border-zinc-900 pt-6 sm:mt-12 sm:pt-8">
            <div className="flex items-center justify-center gap-2 text-center text-[11px] leading-5 text-zinc-500 sm:text-sm">
              <FaGlobeAmericas className="shrink-0 text-yellow-400" />

              <p>
                Entregamos para todo o Brasil. Frete grátis nas compras acima de R$ 1.000; nos demais pedidos, o valor é calculado pelo CEP.
              </p>
            </div>
          </section>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

function AdvancedProductDetails({ produto }: { produto: Product }) {
  const possuiDesempenho =
    produto.duracao ||
    produto.rastro ||
    produto.desempenho ||
    produto.performance;

  const possuiUsoIdeal =
    produto.estacoes?.length ||
    produto.usoIdeal?.estacoes?.length ||
    produto.usoIdeal?.periodos?.length ||
    produto.usoIdeal?.climas?.length;

  const possuiPerfil =
    produto.perfil?.estilos?.length ||
    produto.perfil?.publico ||
    produto.perfil?.impressao;

  const possuiConteudo =
    possuiDesempenho ||
    possuiUsoIdeal ||
    possuiPerfil ||
    produto.nossaAvaliacao ||
    produto.semelhantes?.length;

  if (!possuiConteudo) {
    return null;
  }

  return (
    <div className="space-y-8 sm:space-y-12">
      {possuiDesempenho ? (
        <ProductPerformanceSection produto={produto} />
      ) : null}

      {possuiUsoIdeal ? <ProductIdealUse produto={produto} /> : null}

      {possuiPerfil ? <ProductProfile produto={produto} /> : null}

      {produto.nossaAvaliacao ? (
        <section className="overflow-hidden rounded-2xl border border-yellow-400/20 bg-gradient-to-br from-yellow-400/[0.08] to-zinc-950 p-5 sm:p-7">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-black">
              <FaStar />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-yellow-400">
                Opinião especializada
              </p>

              <h2 className="mt-1 text-xl font-black text-white sm:text-2xl">
                Avaliação da Bold Parfum
              </h2>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
            {produto.nossaAvaliacao}
          </p>
        </section>
      ) : null}

      {produto.semelhantes && produto.semelhantes.length > 0 ? (
        <section>
          <SectionTitle
            eyebrow="Referências olfativas"
            title="Perfumes com perfil semelhante"
          />

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {produto.semelhantes.map((semelhante) => (
              <div
                key={semelhante}
                className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950 p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 text-xs text-yellow-400">
                  <FaCheck />
                </div>

                <span className="text-sm font-semibold text-zinc-200">
                  {semelhante}
                </span>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

function ProductPerformanceSection({ produto }: { produto: Product }) {
  const indicadores = produto.performance
    ? [
        {
          nome: "Intensidade",
          valor: produto.performance.intensidade,
        },
        {
          nome: "Versatilidade",
          valor: produto.performance.versatilidade,
        },
        {
          nome: "Elegância",
          valor: produto.performance.elegancia,
        },
        {
          nome: "Frescor",
          valor: produto.performance.frescor,
        },
        {
          nome: "Doçura",
          valor: produto.performance.docura,
        },
      ]
    : [];

  return (
    <section>
      <SectionTitle
        eyebrow="Performance"
        title="Desempenho da fragrância"
      />

      <div className="mt-5 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <InformationCard
            label="Fixação"
            value={`${produto.fixacao}/5`}
          />

          <InformationCard
            label="Projeção"
            value={`${produto.projecao}/5`}
          />

          {produto.duracao ? (
            <InformationCard
              label="Duração estimada"
              value={produto.duracao}
            />
          ) : null}

          {produto.rastro ? (
            <InformationCard
              label="Rastro"
              value={produto.rastro}
            />
          ) : null}
        </div>

        {indicadores.length > 0 ? (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:p-6">
            <h3 className="text-base font-black text-white">
              Perfil de intensidade
            </h3>

            <div className="mt-5 space-y-5">
              {indicadores.map((indicador) => (
                <PerformanceBar
                  key={indicador.nome}
                  nome={indicador.nome}
                  valor={indicador.valor}
                />
              ))}
            </div>
          </div>
        ) : produto.desempenho ? (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:p-6">
            <h3 className="text-base font-black text-white">
              O que esperar
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-400 sm:text-base">
              {produto.desempenho}
            </p>
          </div>
        ) : null}
      </div>

      {produto.performance && produto.desempenho ? (
        <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5">
          <p className="text-sm leading-7 text-zinc-400 sm:text-base">
            {produto.desempenho}
          </p>
        </div>
      ) : null}
    </section>
  );
}

function ProductIdealUse({ produto }: { produto: Product }) {
  const estacoes =
    produto.usoIdeal?.estacoes && produto.usoIdeal.estacoes.length > 0
      ? produto.usoIdeal.estacoes
      : produto.estacoes ?? [];

  const periodos = produto.usoIdeal?.periodos ?? [];
  const climas = produto.usoIdeal?.climas ?? [];

  return (
    <section>
      <SectionTitle
        eyebrow="Quando usar"
        title="Uso ideal"
      />

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {estacoes.length > 0 ? (
          <TagCard
            title="Estações"
            items={estacoes}
          />
        ) : null}

        {periodos.length > 0 ? (
          <TagCard
            title="Períodos"
            items={periodos}
          />
        ) : null}

        {climas.length > 0 ? (
          <TagCard
            title="Climas"
            items={climas}
          />
        ) : null}
      </div>
    </section>
  );
}

function ProductProfile({ produto }: { produto: Product }) {
  if (!produto.perfil) {
    return null;
  }

  return (
    <section>
      <SectionTitle
        eyebrow="Personalidade"
        title="Perfil da fragrância"
      />

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {produto.perfil.estilos.length > 0 ? (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:p-6">
            <h3 className="text-base font-black text-white">
              Estilo
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {produto.perfil.estilos.map((estilo) => (
                <span
                  key={estilo}
                  className="rounded-full border border-yellow-400/20 bg-yellow-400/[0.07] px-3 py-1.5 text-xs font-bold text-yellow-300"
                >
                  {estilo}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:p-6">
          <h3 className="text-base font-black text-white">
            Ideal para quem
          </h3>

          <p className="mt-3 text-sm leading-7 text-zinc-400">
            {produto.perfil.publico}
          </p>
        </div>
      </div>

      {produto.perfil.impressao ? (
        <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5">
          <p className="text-sm leading-7 text-zinc-400 sm:text-base">
            <strong className="text-white">Impressão olfativa: </strong>
            {produto.perfil.impressao}
          </p>
        </div>
      ) : null}
    </section>
  );
}

function PerformanceBar({
  nome,
  valor,
}: {
  nome: string;
  valor: number;
}) {
  const valorSeguro = Math.min(5, Math.max(0, valor));
  const percentual = `${(valorSeguro / 5) * 100}%`;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <span className="text-sm font-semibold text-zinc-300">
          {nome}
        </span>

        <span className="text-xs font-black text-yellow-400">
          {valorSeguro}/5
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-yellow-400"
          style={{ width: percentual }}
        />
      </div>
    </div>
  );
}

function InformationCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </p>

      <p className="mt-2 text-sm font-black text-white sm:text-base">
        {value}
      </p>
    </div>
  );
}

function TagCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
      <h3 className="text-base font-black text-white">
        {title}
      </h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-zinc-700 bg-black px-3 py-1.5 text-xs font-semibold text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-yellow-400">
        {eyebrow}
      </p>

      <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function TrustSection() {
  const beneficios = [
    {
      icon: <FaShieldAlt />,
      titulo: "Compra segura",
      texto: "Atendimento durante todo o pedido",
    },
    {
      icon: <FaShippingFast />,
      titulo: "Envio nacional",
      texto: "Entrega para todo o Brasil",
    },
    {
      icon: <FaCreditCard />,
      titulo: "Até 10x sem juros",
      texto: "Facilidade no pagamento",
    },
    {
      icon: <FaHeadset />,
      titulo: "Suporte rápido",
      texto: "Atendimento pelo WhatsApp",
    },
  ];

  return (
    <section
      aria-label="Benefícios da compra"
      className="mt-7 border-y border-zinc-900 py-5 sm:mt-10 sm:py-6"
    >
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
        {beneficios.map((beneficio) => (
          <article
            key={beneficio.titulo}
            className="flex min-w-0 items-start gap-2.5 rounded-xl border border-zinc-800 bg-zinc-950/70 p-3 transition hover:border-yellow-400/40 sm:gap-3 sm:p-4"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-yellow-400/20 bg-yellow-400/[0.07] text-xs text-yellow-400 sm:h-10 sm:w-10 sm:text-sm">
              {beneficio.icon}
            </div>

            <div className="min-w-0">
              <h2 className="text-[10px] font-black leading-4 text-white sm:text-sm sm:leading-5">
                {beneficio.titulo}
              </h2>

              <p className="mt-0.5 text-[8px] leading-3.5 text-zinc-500 sm:mt-1 sm:text-[11px] sm:leading-4">
                {beneficio.texto}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}