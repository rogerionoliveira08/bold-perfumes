import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaCreditCard,
  FaGlobeAmericas,
  FaHeadset,
  FaShieldAlt,
  FaShippingFast,
} from "react-icons/fa";
import {
  buscarProdutoPorSlug,
  buscarProdutosRelacionados,
} from "@/data/produtos";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ProductGallery from "@/components/products/ProductGallery";
import ProductSummary from "@/components/products/ProductSummary";
import ProductDescription from "@/components/products/ProductDescription";
import ProductNotes from "@/components/products/ProductNotes";
import ProductOccasions from "@/components/products/ProductOccasions";
import RelatedProducts from "@/components/products/RelatedProducts";

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

  const descricaoLimpa = produto.descricao
    .replace(/\s+/g, " ")
    .trim();

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
      seller: {
        "@type": "Organization",
        name: "Bold Parfum",
      },
    },
    aggregateRating:
      produto.avaliacoes > 0
        ? {
            "@type": "AggregateRating",
            ratingValue: produto.avaliacao,
            reviewCount: produto.avaliacoes,
            bestRating: 5,
            worstRating: 1,
          }
        : undefined,
    additionalProperty: [
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
    ],
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

            <ProductOccasions produto={produto} />

            <RelatedProducts produtos={relacionados} />
          </div>

          <section className="mt-9 border-t border-zinc-900 pt-6 sm:mt-12 sm:pt-8">
            <div className="flex items-center justify-center gap-2 text-center text-[11px] leading-5 text-zinc-500 sm:text-sm">
              <FaGlobeAmericas className="shrink-0 text-yellow-400" />

              <p>
                Entregamos para todo o Brasil. O frete é calculado conforme o
                CEP.
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
      titulo: "Até 12x",
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