import type { Metadata } from "next";
import Link from "next/link";
import {
  FaGem,
  FaHeart,
  FaShieldAlt,
  FaShippingFast,
  FaUserTie,
  FaWhatsapp,
} from "react-icons/fa";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Quem Somos | Bold Parfum",
  description:
    "Conheça a Bold Parfum, loja especializada em perfumes árabes originais, com atendimento personalizado e entregas para todo o Brasil.",
};

export default function QuemSomosPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="border-b border-yellow-400/20 bg-gradient-to-b from-yellow-400/[0.08] to-black">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-400">
              Perfumes, identidade e consultoria
            </p>

            <h1 className="mt-4 text-3xl font-black sm:text-5xl">
              Quem Somos
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
              A Bold Parfum nasceu com o propósito de aproximar você da
              sofisticação da perfumaria árabe, oferecendo fragrâncias
              selecionadas, atendimento personalizado e uma experiência de
              compra segura.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-6 md:grid-cols-2">
            <InfoCard
              icon={<FaGem />}
              title="Nossa essência"
              text="Acreditamos que um perfume vai muito além de um aroma. Ele expressa personalidade, desperta emoções e pode se transformar em uma verdadeira assinatura olfativa."
            />

            <InfoCard
              icon={<FaUserTie />}
              title="Consultoria personalizada"
              text="Nosso trabalho não é simplesmente vender um perfume. Buscamos compreender seu estilo, sua rotina e aquilo que você deseja transmitir para indicar fragrâncias que realmente combinem com você."
            />

            <InfoCard
              icon={<FaShieldAlt />}
              title="Seleção e confiança"
              text="Trabalhamos com perfumes árabes e importados cuidadosamente selecionados, priorizando originalidade, qualidade, procedência e transparência em todas as etapas do atendimento."
            />

            <InfoCard
              icon={<FaShippingFast />}
              title="Atendimento nacional"
              text="Atendemos clientes de todo o Brasil, oferecendo suporte antes, durante e depois da compra, com acompanhamento próximo pelo WhatsApp."
            />
          </div>

          <section className="mt-12 overflow-hidden rounded-3xl border border-yellow-400/30 bg-gradient-to-br from-yellow-400/[0.12] via-zinc-950 to-black p-6 sm:p-10">
            <div className="max-w-3xl">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400 text-xl text-black">
                <FaHeart />
              </span>

              <h2 className="mt-6 text-2xl font-black sm:text-3xl">
                Encontre sua assinatura olfativa
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                Cada pessoa possui preferências, momentos e objetivos
                diferentes. Por isso, nossa orientação considera características
                como família olfativa, intensidade, clima, ocasião de uso e
                personalidade. Assim, ajudamos você a fazer uma escolha mais
                consciente e especial.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/5522998771598?text=${encodeURIComponent(
                    "Olá! Vim pela página Quem Somos da Bold Parfum e gostaria de uma consultoria para encontrar meu perfume ideal.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-black text-black transition hover:bg-yellow-300"
                >
                  <FaWhatsapp size={18} />
                  Falar com um consultor
                </a>

                <Link
                  href="/produtos"
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-700 px-6 py-3.5 text-sm font-black text-white transition hover:border-yellow-400 hover:text-yellow-400"
                >
                  Conhecer os perfumes
                </Link>
              </div>
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