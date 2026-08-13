import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Política de Privacidade | Bold Parfum",
  description:
    "Conheça como a Bold Parfum coleta, utiliza, protege e trata os dados pessoais dos usuários.",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="border-b border-yellow-400/20 bg-gradient-to-b from-zinc-950 to-black">
          <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
              Privacidade e proteção de dados
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Política de Privacidade
            </h1>

            <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
              A Bold Parfum respeita a sua privacidade e está comprometida com
              a proteção dos seus dados pessoais, conforme a Lei Geral de
              Proteção de Dados Pessoais — LGPD.
            </p>

            <p className="mt-4 text-sm text-zinc-500">
              Última atualização: 13 de agosto de 2026.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="space-y-6">
            <PolicySection title="1. Sobre esta Política">
              <p>
                Esta Política explica como a Bold Parfum coleta, utiliza,
                armazena, compartilha e protege dados pessoais durante o acesso
                ao site, o contato pelos canais de atendimento, a realização de
                pedidos e a publicação de avaliações.
              </p>

              <p>
                Ao utilizar o site e fornecer seus dados, o usuário declara ter
                lido esta Política e estar ciente das práticas aqui
                apresentadas.
              </p>
            </PolicySection>

            <PolicySection title="2. Quais dados podemos coletar">
              <p>Dependendo da interação com a Bold Parfum, podemos coletar:</p>

              <ul className="list-disc space-y-2 pl-5 marker:text-yellow-400">
                <li>nome e informações fornecidas voluntariamente;</li>
                <li>telefone e número de WhatsApp;</li>
                <li>endereço de e-mail;</li>
                <li>
                  endereço de entrega e informações necessárias ao envio do
                  pedido;
                </li>
                <li>produtos selecionados e informações do pedido;</li>
                <li>comentários, avaliações e notas atribuídas aos produtos;</li>
                <li>
                  dados técnicos de acesso, como navegador, dispositivo,
                  endereço IP, data e horário de acesso;
                </li>
                <li>
                  informações armazenadas localmente no dispositivo, como
                  carrinho e produtos favoritos.
                </li>
              </ul>

              <p>
                A Bold Parfum não solicita senhas bancárias ou dados sigilosos
                de cartão pelos canais de atendimento.
              </p>
            </PolicySection>

            <PolicySection title="3. Como utilizamos os dados">
              <p>Os dados poderão ser utilizados para:</p>

              <ul className="list-disc space-y-2 pl-5 marker:text-yellow-400">
                <li>responder dúvidas e solicitações de atendimento;</li>
                <li>prestar consultoria personalizada em perfumaria;</li>
                <li>registrar, confirmar e acompanhar pedidos;</li>
                <li>calcular frete e organizar a entrega dos produtos;</li>
                <li>manter o funcionamento do carrinho e dos favoritos;</li>
                <li>receber e exibir comentários e avaliações;</li>
                <li>prevenir fraudes, abusos e atividades ilícitas;</li>
                <li>melhorar a segurança, o conteúdo e a experiência do site;</li>
                <li>cumprir obrigações legais, fiscais e regulatórias;</li>
                <li>
                  exercer direitos em processos administrativos, judiciais ou
                  extrajudiciais.
                </li>
              </ul>
            </PolicySection>

            <PolicySection title="4. Bases legais para o tratamento">
              <p>
                O tratamento dos dados pessoais poderá ocorrer com fundamento
                no consentimento do titular, na execução de procedimentos
                relacionados à compra, no cumprimento de obrigações legais, no
                exercício regular de direitos, na proteção contra fraudes e no
                legítimo interesse, sempre respeitando os direitos e as
                liberdades do titular.
              </p>
            </PolicySection>

            <PolicySection title="5. Carrinho, favoritos e armazenamento local">
              <p>
                O site poderá utilizar recursos de armazenamento local do
                navegador para manter os produtos adicionados ao carrinho e os
                itens marcados como favoritos.
              </p>

              <p>
                Essas informações permanecem no dispositivo utilizado e podem
                ser removidas pelo próprio usuário por meio das configurações
                do navegador ou da limpeza dos dados de navegação.
              </p>
            </PolicySection>

            <PolicySection title="6. Comentários e avaliações">
              <p>
                Quando o usuário publica uma avaliação, determinadas
                informações fornecidas por ele poderão ficar visíveis
                publicamente no site, como nome informado, nota e comentário.
              </p>

              <p>
                O usuário não deve inserir telefone, endereço, documentos,
                dados bancários ou outras informações pessoais sensíveis no
                conteúdo da avaliação.
              </p>

              <p>
                As avaliações também estão sujeitas à nossa Política de
                Comentários e Avaliações.
              </p>
            </PolicySection>

            <PolicySection title="7. Compartilhamento de dados">
              <p>
                A Bold Parfum poderá compartilhar dados estritamente
                necessários com fornecedores responsáveis por serviços como:
              </p>

              <ul className="list-disc space-y-2 pl-5 marker:text-yellow-400">
                <li>hospedagem e funcionamento do site;</li>
                <li>armazenamento e gerenciamento de avaliações;</li>
                <li>processamento ou intermediação de pagamentos;</li>
                <li>entrega, transporte e rastreamento de pedidos;</li>
                <li>atendimento por WhatsApp e e-mail;</li>
                <li>prevenção de fraudes e segurança;</li>
                <li>serviços técnicos, contábeis ou jurídicos.</li>
              </ul>

              <p>
                Também poderá haver compartilhamento para cumprimento de
                obrigação legal ou mediante determinação de autoridade
                competente.
              </p>

              <p>
                A Bold Parfum não vende nem comercializa dados pessoais de
                clientes.
              </p>
            </PolicySection>

            <PolicySection title="8. Pagamentos">
              <p>
                Os pagamentos poderão ser processados por instituições
                financeiras ou plataformas de pagamento independentes. Os
                dados informados diretamente nesses ambientes serão tratados
                conforme as políticas de privacidade e segurança dos
                respectivos prestadores.
              </p>

              <p>
                A Bold Parfum poderá receber apenas as informações necessárias
                para confirmar e administrar a compra, como situação do
                pagamento, valor e identificação da transação.
              </p>
            </PolicySection>

            <PolicySection title="9. Segurança e armazenamento">
              <p>
                Adotamos medidas técnicas e administrativas razoáveis para
                proteger os dados contra acessos não autorizados, perda,
                alteração, divulgação ou destruição indevida.
              </p>

              <p>
                Nenhum sistema é completamente imune a riscos. Caso seja
                identificado um incidente relevante, serão tomadas as medidas
                cabíveis conforme a legislação aplicável.
              </p>

              <p>
                Os dados serão mantidos somente pelo período necessário ao
                atendimento das finalidades desta Política e ao cumprimento de
                obrigações legais, fiscais, contratuais ou de defesa de
                direitos.
              </p>
            </PolicySection>

            <PolicySection title="10. Direitos do titular">
              <p>
                Nos termos da LGPD, o titular poderá solicitar, quando
                aplicável:
              </p>

              <ul className="list-disc space-y-2 pl-5 marker:text-yellow-400">
                <li>confirmação da existência de tratamento;</li>
                <li>acesso aos dados pessoais;</li>
                <li>correção de dados incompletos ou desatualizados;</li>
                <li>informações sobre o compartilhamento dos dados;</li>
                <li>
                  anonimização, bloqueio ou eliminação de dados desnecessários
                  ou tratados em desconformidade;
                </li>
                <li>revogação do consentimento, quando aplicável;</li>
                <li>
                  eliminação dos dados tratados com consentimento, observadas
                  as hipóteses legais de conservação;
                </li>
                <li>revisão de decisões automatizadas, quando aplicável.</li>
              </ul>

              <p>
                Para proteger o próprio titular, poderemos solicitar
                informações adicionais para confirmar a identidade antes do
                atendimento da solicitação.
              </p>
            </PolicySection>

            <PolicySection title="11. Sites e serviços de terceiros">
              <p>
                O site poderá conter links para serviços externos, como
                WhatsApp, Instagram e plataformas de pagamento. A Bold Parfum
                não controla as práticas de privacidade desses serviços.
              </p>

              <p>
                Recomendamos que o usuário consulte as políticas de privacidade
                dos respectivos fornecedores antes de fornecer seus dados.
              </p>
            </PolicySection>

            <PolicySection title="12. Dados de crianças e adolescentes">
              <p>
                Os produtos e serviços da Bold Parfum não são direcionados
                especificamente a crianças. Caso seja identificada a coleta
                indevida de dados de criança ou adolescente, o responsável
                legal poderá solicitar a análise e a exclusão das informações.
              </p>
            </PolicySection>

            <PolicySection title="13. Alterações desta Política">
              <p>
                Esta Política poderá ser atualizada para acompanhar mudanças
                no site, nos serviços ou na legislação. A versão vigente ficará
                disponível nesta página com a respectiva data de atualização.
              </p>
            </PolicySection>

            <PolicySection title="14. Contato">
              <p>
                Para dúvidas, solicitações ou exercício de direitos
                relacionados aos dados pessoais, entre em contato pelo e-mail:
              </p>

              <a
                href="mailto:atendimento@boldparfum.com.br"
                className="inline-flex break-all font-bold text-yellow-400 transition hover:text-yellow-300"
              >
                atendimento@boldparfum.com.br
              </a>

              <p>
                Também é possível entrar em contato pelo WhatsApp:
                {" "}
                <a
                  href="https://wa.me/5522998771598"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-yellow-400 transition hover:text-yellow-300"
                >
                  (22) 99877-1598
                </a>
                .
              </p>
            </PolicySection>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:p-7">
      <h2 className="text-xl font-black text-yellow-400 sm:text-2xl">
        {title}
      </h2>

      <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-300 sm:text-base">
        {children}
      </div>
    </article>
  );
}