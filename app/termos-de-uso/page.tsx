import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Termos de Uso | Bold Parfum",
  description:
    "Conheça as condições aplicáveis ao acesso e à utilização do site da Bold Parfum.",
};

export default function TermosDeUsoPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="border-b border-yellow-400/20 bg-gradient-to-b from-zinc-950 to-black">
          <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
              Regras de utilização
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Termos de Uso
            </h1>

            <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
              Estes Termos estabelecem as condições para utilização do site,
              dos conteúdos e dos canais de atendimento da Bold Parfum.
            </p>

            <p className="mt-4 text-sm text-zinc-500">
              Última atualização: 13 de agosto de 2026.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="space-y-6">
            <TermsSection title="1. Aceitação dos Termos">
              <p>
                Ao acessar ou utilizar o site da Bold Parfum, o usuário declara
                que leu e compreendeu estes Termos de Uso.
              </p>

              <p>
                Caso não concorde com alguma condição, o usuário deverá
                interromper a utilização do site e entrar em contato conosco
                para esclarecer suas dúvidas.
              </p>

              <p>
                A aplicação destes Termos respeitará sempre os direitos
                assegurados pela legislação brasileira, especialmente o Código
                de Defesa do Consumidor.
              </p>
            </TermsSection>

            <TermsSection title="2. Sobre a Bold Parfum">
              <p>
                A Bold Parfum atua na divulgação e comercialização de perfumes
                árabes e importados, além de prestar atendimento e consultoria
                personalizada em perfumaria.
              </p>

              <p>
                O site disponibiliza catálogo, informações sobre fragrâncias,
                avaliações de clientes, conteúdos educativos, carrinho,
                favoritos e acesso aos canais de atendimento.
              </p>
            </TermsSection>

            <TermsSection title="3. Utilização do site">
              <p>
                O usuário compromete-se a utilizar o site de maneira lícita,
                ética e compatível com estes Termos.
              </p>

              <p>Não é permitido:</p>

              <ul className="list-disc space-y-2 pl-5 marker:text-yellow-400">
                <li>utilizar o site para práticas ilícitas ou fraudulentas;</li>
                <li>
                  tentar acessar áreas, sistemas ou informações sem
                  autorização;
                </li>
                <li>
                  interferir no funcionamento, na disponibilidade ou na
                  segurança do site;
                </li>
                <li>
                  utilizar robôs, programas ou métodos automatizados para
                  copiar conteúdos ou sobrecarregar o site;
                </li>
                <li>
                  publicar avaliações falsas, ofensivas, discriminatórias ou
                  que violem direitos de terceiros;
                </li>
                <li>
                  reproduzir ou explorar comercialmente os conteúdos da Bold
                  Parfum sem autorização.
                </li>
              </ul>
            </TermsSection>

            <TermsSection title="4. Informações sobre os produtos">
              <p>
                A Bold Parfum procura apresentar informações claras e
                atualizadas sobre os produtos, incluindo nome, marca, volume,
                concentração, notas olfativas, características, preço e
                disponibilidade.
              </p>

              <p>
                As imagens têm finalidade ilustrativa. Podem existir pequenas
                diferenças de tonalidade, embalagem, lote, acabamento ou
                apresentação decorrentes da iluminação, da tela utilizada ou
                de alterações realizadas pelo fabricante.
              </p>

              <p>
                A percepção de uma fragrância, sua fixação e sua projeção podem
                variar conforme tipo de pele, clima, quantidade aplicada,
                conservação, ambiente e sensibilidade individual.
              </p>

              <p>
                Informações sobre desempenho, ocasiões e referências olfativas
                representam orientações gerais e não constituem garantia de
                resultado idêntico para todas as pessoas.
              </p>
            </TermsSection>

            <TermsSection title="5. Referências e inspirações olfativas">
              <p>
                Quando houver indicação de que uma fragrância é inspirada,
                semelhante ou possui referência olfativa em outro perfume, essa
                informação será utilizada apenas para auxiliar o consumidor na
                compreensão do perfil aromático.
              </p>

              <p>
                Essa referência não significa que os produtos sejam idênticos,
                fabricados pela mesma empresa ou que exista vínculo comercial
                entre as respectivas marcas.
              </p>
            </TermsSection>

            <TermsSection title="6. Preços, ofertas e disponibilidade">
              <p>
                Os preços, descontos, condições de pagamento, selos
                promocionais e disponibilidade poderão ser alterados sem aviso
                prévio, respeitadas as compras já confirmadas e as ofertas
                válidas nos termos da legislação.
              </p>

              <p>
                A inclusão de um produto no carrinho ou nos favoritos não
                reserva estoque nem garante a manutenção do preço.
              </p>

              <p>
                Em caso de erro evidente de digitação, preço, estoque ou
                informação técnica, a Bold Parfum entrará em contato com o
                cliente para esclarecer a situação e apresentar as opções
                aplicáveis.
              </p>
            </TermsSection>

            <TermsSection title="7. Pedidos pelo WhatsApp">
              <p>
                O carrinho do site poderá gerar uma mensagem com os produtos
                selecionados e encaminhá-la ao WhatsApp da Bold Parfum.
              </p>

              <p>
                O envio dessa mensagem não representa, isoladamente, a
                conclusão da compra. O pedido será confirmado após a validação
                dos produtos, estoque, endereço, frete, forma de pagamento e
                demais condições informadas durante o atendimento.
              </p>

              <p>
                Antes de efetuar o pagamento, o cliente deverá conferir os
                produtos, quantidades, valores e dados apresentados no resumo
                do pedido.
              </p>
            </TermsSection>

            <TermsSection title="8. Pagamentos">
              <p>
                As formas de pagamento disponíveis serão informadas durante o
                atendimento e poderão incluir Pix, cartão ou outros meios
                disponibilizados pela Bold Parfum.
              </p>

              <p>
                Pagamentos com cartão poderão ser processados por plataformas
                ou instituições financeiras independentes, conforme as
                condições, taxas, análise e regras desses prestadores.
              </p>

              <p>
                O pedido poderá permanecer pendente até a confirmação efetiva
                do pagamento. A Bold Parfum não solicita senha bancária, código
                completo de segurança do cartão ou acesso à conta do cliente.
              </p>
            </TermsSection>

            <TermsSection title="9. Entrega e recebimento">
              <p>
                O prazo e o valor da entrega dependerão do endereço, da
                modalidade de envio, da transportadora e da disponibilidade do
                produto.
              </p>

              <p>
                O cliente é responsável por fornecer dados corretos e
                completos para entrega, incluindo nome, endereço, número,
                complemento, CEP e telefone para contato.
              </p>

              <p>
                Eventuais atrasos causados por transportadoras, condições
                climáticas, restrições operacionais, endereço incorreto,
                ausência de recebedor ou fatos externos serão analisados e
                acompanhados pela Bold Parfum junto ao cliente.
              </p>

              <p>
                No recebimento, recomenda-se verificar a embalagem e o produto.
                Caso haja avaria aparente, divergência ou violação, o cliente
                deverá registrar imagens e entrar em contato conosco assim que
                possível.
              </p>
            </TermsSection>

            <TermsSection title="10. Trocas, devoluções e arrependimento">
              <p>
                As solicitações de troca, devolução, defeito ou exercício do
                direito de arrependimento serão tratadas conforme a legislação
                aplicável e a Política de Trocas e Devoluções da Bold Parfum.
              </p>

              <a
                href="/politica-de-trocas-e-devolucoes"
                className="inline-flex font-bold text-yellow-400 transition hover:text-yellow-300"
              >
                Consultar a Política de Trocas e Devoluções
              </a>
            </TermsSection>

            <TermsSection title="11. Comentários e avaliações">
              <p>
                Os usuários poderão compartilhar avaliações e experiências
                reais sobre os produtos, respeitando os demais consumidores,
                as marcas e a legislação.
              </p>

              <p>
                Conteúdos fraudulentos, ofensivos, discriminatórios, repetidos,
                publicitários, ilícitos ou que exponham dados pessoais poderão
                ser removidos.
              </p>

              <a
                href="/politica-de-comentarios-e-avaliacoes"
                className="inline-flex font-bold text-yellow-400 transition hover:text-yellow-300"
              >
                Consultar a Política de Comentários e Avaliações
              </a>
            </TermsSection>

            <TermsSection title="12. Propriedade intelectual">
              <p>
                A identidade visual, os textos, as páginas, a seleção e a
                organização dos conteúdos produzidos pela Bold Parfum são
                protegidos pela legislação aplicável.
              </p>

              <p>
                Marcas, nomes, embalagens e imagens pertencentes a fabricantes
                ou terceiros permanecem sob a titularidade de seus respectivos
                proprietários.
              </p>

              <a
                href="/direitos-autorais"
                className="inline-flex font-bold text-yellow-400 transition hover:text-yellow-300"
              >
                Consultar a página de Direitos Autorais
              </a>
            </TermsSection>

            <TermsSection title="13. Privacidade e dados pessoais">
              <p>
                O tratamento de dados pessoais relacionados ao uso do site, aos
                pedidos, ao atendimento e às avaliações está descrito na
                Política de Privacidade da Bold Parfum.
              </p>

              <a
                href="/politica-de-privacidade"
                className="inline-flex font-bold text-yellow-400 transition hover:text-yellow-300"
              >
                Consultar a Política de Privacidade
              </a>
            </TermsSection>

            <TermsSection title="14. Links e serviços de terceiros">
              <p>
                O site poderá oferecer links ou integração com serviços
                externos, como WhatsApp, Instagram, transportadoras,
                instituições financeiras e plataformas de pagamento.
              </p>

              <p>
                Esses serviços possuem termos, políticas e sistemas próprios.
                A Bold Parfum não controla a disponibilidade ou as práticas
                adotadas por esses terceiros.
              </p>
            </TermsSection>

            <TermsSection title="15. Disponibilidade do site">
              <p>
                A Bold Parfum busca manter o site disponível e seguro, mas não
                garante funcionamento ininterrupto ou livre de falhas.
              </p>

              <p>
                O acesso poderá ser temporariamente interrompido para
                manutenção, atualização, correção, instabilidade de
                fornecedores ou ocorrência de fatos fora do nosso controle.
              </p>
            </TermsSection>

            <TermsSection title="16. Responsabilidades do usuário">
              <p>
                O usuário é responsável pela veracidade das informações
                fornecidas e pela conferência dos dados do pedido, endereço,
                produtos e valores antes da confirmação da compra.
              </p>

              <p>
                Também é responsabilidade do usuário manter seus dispositivos,
                navegadores e meios de comunicação protegidos contra acessos
                não autorizados.
              </p>
            </TermsSection>

            <TermsSection title="17. Alterações destes Termos">
              <p>
                Estes Termos poderão ser atualizados para acompanhar mudanças
                no site, nos serviços, nas práticas comerciais ou na
                legislação.
              </p>

              <p>
                A versão vigente permanecerá disponível nesta página com a data
                da última atualização.
              </p>
            </TermsSection>

            <TermsSection title="18. Legislação aplicável">
              <p>
                Estes Termos serão interpretados de acordo com a legislação
                brasileira, especialmente o Código de Defesa do Consumidor, as
                normas aplicáveis ao comércio eletrônico e a Lei Geral de
                Proteção de Dados Pessoais.
              </p>

              <p>
                Eventuais conflitos deverão ser solucionados preferencialmente
                por meio dos canais de atendimento, sem prejuízo do direito do
                consumidor de recorrer aos órgãos competentes e ao foro
                legalmente aplicável.
              </p>
            </TermsSection>

            <TermsSection title="19. Contato">
              <p>
                Para esclarecer dúvidas sobre estes Termos ou sobre uma compra,
                entre em contato pelo e-mail:
              </p>

              <a
                href="mailto:atendimento@boldparfum.com.br"
                className="inline-flex break-all font-bold text-yellow-400 transition hover:text-yellow-300"
              >
                atendimento@boldparfum.com.br
              </a>

              <p>
                Também é possível entrar em contato pelo WhatsApp:{" "}
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
            </TermsSection>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

function TermsSection({
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