import type { Metadata } from "next";
import Link from "next/link";
import {
  FaBalanceScale,
  FaBan,
  FaCheckCircle,
  FaEdit,
  FaEnvelope,
  FaExclamationTriangle,
  FaShieldAlt,
  FaStar,
  FaTrashAlt,
  FaUserCheck,
} from "react-icons/fa";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Comentários e Avaliações | Bold Parfum",
  description:
    "Conheça as regras para publicação, edição e remoção de comentários e avaliações de produtos na Bold Parfum.",
};

export default function PoliticaDeComentariosEAvaliacoesPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="border-b border-yellow-400/20 bg-gradient-to-b from-yellow-400/[0.08] to-black">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-400">
              Transparência e experiências reais
            </p>

            <h1 className="mt-4 text-3xl font-black sm:text-5xl">
              Política de Comentários e Avaliações
            </h1>

            <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
              As avaliações ajudam outros clientes a conhecer melhor as
              fragrâncias e contribuem para a melhoria contínua dos produtos e
              do atendimento da Bold Parfum.
            </p>

            <p className="mt-4 text-sm text-zinc-500">
              Última atualização: 13 de agosto de 2026.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="space-y-6">
            <PolicyCard
              icon={<FaStar />}
              title="1. Quem pode enviar uma avaliação"
            >
              <p>
                Clientes e visitantes que tenham experiência legítima com o
                produto, com o atendimento ou com os serviços da Bold Parfum
                poderão enviar avaliações pelos recursos disponibilizados no
                site.
              </p>

              <p>
                Quando tecnicamente possível, a Bold Parfum poderá identificar
                avaliações relacionadas a compras ou atendimentos confirmados.
                A ausência dessa identificação não significa, por si só, que a
                avaliação seja falsa.
              </p>
            </PolicyCard>

            <PolicyCard
              icon={<FaUserCheck />}
              title="2. Responsabilidade do autor"
            >
              <p>
                Ao publicar uma avaliação, o usuário declara que o relato
                corresponde à sua experiência e assume responsabilidade pelo
                conteúdo enviado.
              </p>

              <p>
                O autor deve utilizar linguagem respeitosa e não poderá se
                passar por outra pessoa, empresa, especialista ou cliente.
              </p>
            </PolicyCard>

            <PolicyCard
              icon={<FaCheckCircle />}
              title="3. Avaliações positivas e negativas"
            >
              <p>
                A Bold Parfum valoriza opiniões sinceras. Avaliações negativas,
                críticas ou relatos de insatisfação não serão removidos apenas
                por apresentarem opinião desfavorável.
              </p>

              <p>
                Críticas legítimas poderão permanecer publicadas quando
                relatarem uma experiência real, forem relevantes ao produto ou
                ao atendimento e respeitarem esta política.
              </p>
            </PolicyCard>

            <PolicyCard icon={<FaBan />} title="4. Conteúdo proibido">
              <p>Não será permitido publicar conteúdo que contenha:</p>

              <ul className="list-disc space-y-2 pl-5 marker:text-yellow-400">
                <li>
                  Ofensas, ameaças, discriminação, perseguição ou discurso de
                  ódio;
                </li>
                <li>
                  Informações pessoais ou sensíveis do próprio autor ou de
                  terceiros;
                </li>
                <li>
                  Acusações criminosas sem elementos mínimos de verificação;
                </li>
                <li>
                  Propaganda, spam, links maliciosos ou divulgação de
                  concorrentes;
                </li>
                <li>
                  Conteúdo ilegal, fraudulento ou que viole direitos de
                  terceiros;
                </li>
                <li>
                  Comentários sem relação com o produto, serviço ou experiência
                  avaliada;
                </li>
                <li>
                  Repetição abusiva do mesmo conteúdo ou tentativa de manipular
                  a nota do produto.
                </li>
              </ul>
            </PolicyCard>

            <PolicyCard
              icon={<FaExclamationTriangle />}
              title="5. Avaliações falsas e manipulação"
            >
              <p>
                É proibido criar avaliações falsas, utilizar identidades
                diferentes para avaliar repetidamente, oferecer vantagem em
                troca de opinião enganosa ou organizar ações destinadas a
                aumentar ou reduzir artificialmente a nota de um produto.
              </p>

              <p>
                Avaliações incentivadas, quando eventualmente realizadas,
                deverão preservar a liberdade de opinião do participante e ser
                identificadas com transparência quando necessário.
              </p>
            </PolicyCard>

            <PolicyCard
              icon={<FaShieldAlt />}
              title="6. Publicação e moderação"
            >
              <p>
                As avaliações poderão passar por verificações automáticas ou
                manuais destinadas a prevenir fraude, spam, linguagem abusiva e
                violações desta política.
              </p>

              <p>
                A Bold Parfum poderá ocultar, bloquear ou remover conteúdos que
                violem estas regras. A moderação não será utilizada para
                selecionar somente opiniões positivas.
              </p>

              <p>
                A publicação poderá não ocorrer imediatamente devido ao
                processamento técnico, à análise de segurança ou à necessidade
                de apuração.
              </p>
            </PolicyCard>

            <PolicyCard
              icon={<FaEdit />}
              title="7. Nome e dados exibidos"
            >
              <p>
                A avaliação poderá exibir o nome, primeiro nome, iniciais ou
                outra identificação informada pelo autor, juntamente com a nota,
                o comentário e a data de publicação.
              </p>

              <p>
                E-mail, telefone e outras informações de contato não deverão ser
                exibidos publicamente. Esses dados poderão ser utilizados para
                segurança, identificação da solicitação e contato relacionado à
                avaliação, conforme a Política de Privacidade.
              </p>
            </PolicyCard>

            <PolicyCard
              icon={<FaTrashAlt />}
              title="8. Correção e exclusão"
            >
              <p>
                O autor poderá solicitar correção ou exclusão de sua avaliação
                pelos canais oficiais da Bold Parfum. Para proteger o usuário,
                poderá ser necessária a confirmação de identidade ou da
                titularidade do e-mail utilizado.
              </p>

              <p>
                A solicitação será analisada e atendida conforme a legislação
                aplicável, considerando também necessidades legítimas de
                segurança, prevenção a fraudes e cumprimento de obrigações
                legais.
              </p>
            </PolicyCard>

            <PolicyCard
              icon={<FaBalanceScale />}
              title="9. Direito de resposta e atendimento"
            >
              <p>
                A Bold Parfum poderá responder publicamente a uma avaliação para
                esclarecer informações, oferecer suporte ou comunicar a solução
                adotada, sem divulgar dados pessoais ou detalhes confidenciais
                do cliente.
              </p>

              <p>
                Questões relacionadas a pedidos, entregas, trocas ou dados
                pessoais deverão ser tratadas pelos canais privados de
                atendimento.
              </p>
            </PolicyCard>

            <PolicyCard
              icon={<FaEnvelope />}
              title="10. Solicitações sobre avaliações"
            >
              <p>
                Para solicitar correção, exclusão ou relatar possível violação,
                informe o produto avaliado, o nome utilizado, a data aproximada
                e o motivo da solicitação.
              </p>

              <a
                href="mailto:atendimento@boldparfum.com.br?subject=Comentário ou avaliação no site"
                className="mt-5 inline-flex items-center gap-2 rounded-xl border border-yellow-400/50 px-5 py-3 text-sm font-black text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
              >
                <FaEnvelope size={17} />
                atendimento@boldparfum.com.br
              </a>
            </PolicyCard>
          </div>

          <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-sm leading-6 text-zinc-500">
            <p>
              O envio de uma avaliação não garante sua publicação ou
              permanência quando houver violação desta política. A Bold Parfum
              poderá atualizar estas regras para aprimorar a segurança, a
              transparência e a qualidade das informações exibidas.
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