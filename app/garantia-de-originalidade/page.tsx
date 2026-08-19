import type { Metadata } from "next";
import Link from "next/link";
import {
  FaBoxOpen,
  FaCheckCircle,
  FaFingerprint,
  FaSearch,
  FaShieldAlt,
  FaWhatsapp,
} from "react-icons/fa";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Garantia de Originalidade | Bold Parfum",
  description:
    "Conheça o compromisso da Bold Parfum com a procedência, a qualidade e a originalidade dos perfumes comercializados.",
};

export default function GarantiaDeOriginalidadePage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="border-b border-yellow-400/20 bg-gradient-to-b from-yellow-400/[0.08] to-black">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-400">
              Procedência, qualidade e confiança
            </p>

            <h1 className="mt-4 text-3xl font-black sm:text-5xl">
              Garantia de Originalidade
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
              Na Bold Parfum, levamos a autenticidade a sério. Nosso compromisso
              é oferecer perfumes árabes e importados originais, cuidadosamente
              selecionados para que você compre com segurança e tranquilidade.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-6 md:grid-cols-2">
            <InfoCard
              icon={<FaShieldAlt />}
              title="Compromisso com a originalidade"
              text="Os produtos comercializados pela Bold Parfum são selecionados com atenção à procedência e à autenticidade, respeitando as características apresentadas por seus fabricantes."
            />

            <InfoCard
              icon={<FaSearch />}
              title="Conferência dos produtos"
              text="Observamos as condições do frasco, da embalagem e da apresentação geral do produto antes do envio, buscando oferecer uma experiência de compra segura e cuidadosa."
            />

            <InfoCard
              icon={<FaFingerprint />}
              title="Características de fabricação"
              text="Códigos, selos, etiquetas, inscrições, celofane e detalhes da embalagem podem variar conforme a marca, o lote, o país de distribuição ou atualizações realizadas pelo fabricante."
            />

            <InfoCard
              icon={<FaBoxOpen />}
              title="Envio cuidadoso"
              text="Cada pedido é preparado com atenção para preservar o perfume e sua embalagem durante o transporte até o endereço informado pelo cliente."
            />
          </div>

          <section className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-950 p-6 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-400 text-xl text-black">
                <FaCheckCircle />
              </span>

              <div>
                <h2 className="text-2xl font-black">
                  Por que alguns perfumes podem parecer diferentes?
                </h2>

                <div className="mt-4 space-y-4 leading-7 text-zinc-400">
                  <p>
                    Pequenas diferenças na embalagem, na coloração do líquido ou
                    na percepção da fragrância não significam necessariamente
                    falta de originalidade. Fabricantes podem atualizar
                    embalagens e realizar variações entre lotes.
                  </p>

                  <p>
                    A percepção do perfume também pode mudar conforme o tipo de
                    pele, o clima, a temperatura, a quantidade aplicada, o tempo
                    de maturação e a adaptação do olfato.
                  </p>

                  <p>
                    Fixação e projeção são características individuais e podem
                    variar de pessoa para pessoa. Por isso, informações de
                    desempenho apresentadas no site são estimativas de uso, e
                    não uma duração exata garantida.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8 overflow-hidden rounded-3xl border border-yellow-400/30 bg-gradient-to-br from-yellow-400/[0.12] via-zinc-950 to-black p-6 sm:p-10">
            <h2 className="text-2xl font-black sm:text-3xl">
              Ficou com alguma dúvida?
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
              Se desejar mais informações sobre um produto, embalagem,
              procedência ou características da fragrância, fale conosco antes
              ou depois da compra. Teremos prazer em orientar você.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/5522998771598?text=${encodeURIComponent(
                  "Olá! Vim pela página Garantia de Originalidade da Bold Parfum e gostaria de tirar uma dúvida sobre um produto.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-black text-black transition hover:bg-yellow-300"
              >
                <FaWhatsapp size={18} />
                Tirar uma dúvida
              </a>

              <Link
                href="/produtos"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-700 px-6 py-3.5 text-sm font-black text-white transition hover:border-yellow-400 hover:text-yellow-400"
              >
                Conhecer os perfumes
              </Link>
            </div>
          </section>

          <div className="mt-8">
            <Link
              href="/"
              className="text-sm font-bold text-yellow-400 transition hover:text-yellow-300"
            >
              ← Voltar para a página inicial
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-yellow-400/50">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-lg text-black">
        {icon}
      </span>

      <h2 className="mt-5 text-xl font-black">{title}</h2>

      <p className="mt-3 text-sm leading-7 text-zinc-400 sm:text-base">
        {text}
      </p>
    </article>
  );
}