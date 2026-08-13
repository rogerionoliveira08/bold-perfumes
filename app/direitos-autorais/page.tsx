import type { Metadata } from "next";
import Link from "next/link";
import {
  FaBalanceScale,
  FaBookOpen,
  FaCamera,
  FaEnvelope,
  FaExclamationTriangle,
  FaImages,
  FaShieldAlt,
  FaStore,
  FaUserEdit,
} from "react-icons/fa";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Direitos Autorais | Bold Parfum",
  description:
    "Conheça as regras de direitos autorais e propriedade intelectual aplicáveis ao site, aos conteúdos e à identidade da Bold Parfum.",
};

export default function DireitosAutoraisPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="border-b border-yellow-400/20 bg-gradient-to-b from-yellow-400/[0.08] to-black">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-400">
              Conteúdo, identidade e uso responsável
            </p>

            <h1 className="mt-4 text-3xl font-black sm:text-5xl">
              Direitos Autorais e Propriedade Intelectual
            </h1>

            <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
              Esta página explica as regras para utilização dos conteúdos,
              materiais e elementos apresentados nos canais digitais da Bold
              Parfum, respeitando também os direitos pertencentes a terceiros.
            </p>

            <p className="mt-4 text-sm text-zinc-500">
              Última atualização: 13 de agosto de 2026.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="space-y-6">
            <PolicyCard
              icon={<FaShieldAlt />}
              title="1. Conteúdos da Bold Parfum"
            >
              <p>
                Salvo quando houver indicação diferente, os textos
                institucionais, descrições próprias, organização editorial,
                materiais educativos, artes originais, elementos visuais e
                demais conteúdos criados especificamente para a Bold Parfum são
                protegidos pela legislação aplicável.
              </p>

              <p>
                A disponibilização desses materiais no site não transfere ao
                visitante qualquer direito de propriedade, exploração
                comercial, reprodução integral ou criação de material
                derivado.
              </p>
            </PolicyCard>

            <PolicyCard
              icon={<FaStore />}
              title="2. Nome, identidade e sinais distintivos"
            >
              <p>
                O nome Bold Parfum, sua identidade visual, elementos de
                apresentação, campanhas e sinais usados para identificar a
                loja não podem ser utilizados de maneira que provoque confusão,
                associação indevida, falsa parceria ou impressão de
                representação oficial.
              </p>

              <p>
                Esta política não substitui nem antecipa eventual análise,
                pedido ou registro de marca perante o Instituto Nacional da
                Propriedade Industrial.
              </p>
            </PolicyCard>

            <PolicyCard
              icon={<FaCamera />}
              title="3. Fotografias, vídeos e artes"
            >
              <p>
                Fotografias, vídeos e artes produzidos pela Bold Parfum ou
                utilizados mediante autorização não podem ser copiados,
                removidos, alterados, republicados ou explorados comercialmente
                sem autorização do respectivo titular.
              </p>

              <p>
                Imagens meramente ilustrativas, promocionais ou fornecidas por
                fabricantes, distribuidores, parceiros ou outros titulares
                permanecem sujeitas aos direitos de seus respectivos autores e
                proprietários.
              </p>
            </PolicyCard>

            <PolicyCard
              icon={<FaBookOpen />}
              title="4. Catálogo e informações sobre perfumes"
            >
              <p>
                A seleção, estrutura, apresentação e organização do catálogo da
                Bold Parfum não autorizam a reprodução sistemática, cópia em
                massa, extração automatizada ou reutilização comercial do
                conjunto de informações do site.
              </p>

              <p>
                Nomes de perfumes, marcas, frascos, embalagens, logotipos,
                referências olfativas e demais sinais de fabricantes pertencem
                aos seus respectivos titulares. A menção a esses elementos tem
                finalidade informativa e comercial legítima relacionada à
                apresentação dos produtos.
              </p>
            </PolicyCard>

            <PolicyCard
              icon={<FaImages />}
              title="5. Marcas e conteúdos de terceiros"
            >
              <p>
                A Bold Parfum respeita direitos autorais, marcas e demais
                direitos de terceiros. A presença de uma marca ou imagem no
                site não significa que a Bold Parfum seja sua proprietária,
                fabricante ou representante oficial, salvo quando isso estiver
                expressamente informado.
              </p>

              <p>
                Referências a fragrâncias conhecidas ou expressões como
                “inspirado em” têm finalidade descritiva e comparativa, não
                significando identidade, fabricação comum, afiliação,
                patrocínio ou aprovação pelo titular da marca mencionada.
              </p>
            </PolicyCard>

            <PolicyCard
              icon={<FaUserEdit />}
              title="6. Avaliações e conteúdos enviados por usuários"
            >
              <p>
                O autor de uma avaliação, comentário, fotografia ou outro
                conteúdo enviado ao site permanece responsável pelo material
                publicado e declara possuir legitimidade para compartilhá-lo.
              </p>

              <p>
                Ao enviar conteúdo voluntariamente para publicação, o usuário
                autoriza sua exibição nos canais da Bold Parfum de forma
                gratuita, não exclusiva e vinculada à divulgação da avaliação,
                do produto ou da experiência relatada, respeitados os direitos
                de personalidade e a legislação aplicável.
              </p>
            </PolicyCard>

            <PolicyCard
              icon={<FaBalanceScale />}
              title="7. Utilizações permitidas"
            >
              <p>
                É permitido acessar o site, compartilhar os links oficiais da
                Bold Parfum e citar pequenos trechos para finalidades legítimas,
                desde que sejam preservados o contexto, a indicação da fonte e
                os limites previstos na legislação.
              </p>

              <p>
                É proibido utilizar o conteúdo para criar loja semelhante,
                copiar o catálogo, remover créditos, simular vínculo comercial,
                divulgar produtos como se fossem da Bold Parfum ou prejudicar a
                reputação da loja ou de terceiros.
              </p>
            </PolicyCard>

            <PolicyCard
              icon={<FaExclamationTriangle />}
              title="8. Comunicação de possível violação"
            >
              <p>
                Caso você seja titular de um conteúdo, fotografia, marca ou
                outro direito e entenda que algum material foi utilizado
                indevidamente, envie uma solicitação identificando a obra, o
                endereço da página, a titularidade alegada e seus dados para
                contato.
              </p>

              <p>
                A Bold Parfum analisará a comunicação de boa-fé e poderá
                remover, substituir, atribuir créditos ou adotar outra medida
                adequada enquanto apura a situação.
              </p>

              <a
                href="mailto:atendimento@boldparfum.com.br?subject=Direitos autorais e propriedade intelectual"
                className="mt-5 inline-flex items-center gap-2 rounded-xl border border-yellow-400/50 px-5 py-3 text-sm font-black text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
              >
                <FaEnvelope size={17} />
                atendimento@boldparfum.com.br
              </a>
            </PolicyCard>
          </div>

          <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-sm leading-6 text-zinc-500">
            <p>
              A proteção e a utilização de conteúdos, marcas e obras dependem
              das circunstâncias de cada caso e da legislação aplicável. Esta
              página não atribui à Bold Parfum direitos pertencentes a
              fabricantes, autores, parceiros ou outros terceiros.
            </p>
          </div>

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

function PolicyCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:p-7">
      <div className="flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-black">
          {icon}
        </span>

        <div className="min-w-0">
          <h2 className="text-lg font-black text-white sm:text-xl">{title}</h2>

          <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-400 sm:text-base">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}