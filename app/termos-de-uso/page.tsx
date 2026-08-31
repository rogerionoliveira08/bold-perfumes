import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import WhatsAppChoiceButton from "@/components/WhatsAppChoiceButton";

export const metadata: Metadata = {
  title: "Termos de Uso | Bold Parfum",
  description:
    "ConheÃ§a as condiÃ§Ãµes aplicÃ¡veis ao acesso e Ã  utilizaÃ§Ã£o do site da Bold Parfum.",
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
              Regras de utilizaÃ§Ã£o
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Termos de Uso
            </h1>

            <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
              Estes Termos estabelecem as condiÃ§Ãµes para utilizaÃ§Ã£o do site,
              dos conteÃºdos e dos canais de atendimento da Bold Parfum.
            </p>

            <p className="mt-4 text-sm text-zinc-500">
              Ãšltima atualizaÃ§Ã£o: 13 de agosto de 2026.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="space-y-6">
            <TermsSection title="1. AceitaÃ§Ã£o dos Termos">
              <p>
                Ao acessar ou utilizar o site da Bold Parfum, o usuÃ¡rio declara
                que leu e compreendeu estes Termos de Uso.
              </p>

              <p>
                Caso nÃ£o concorde com alguma condiÃ§Ã£o, o usuÃ¡rio deverÃ¡
                interromper a utilizaÃ§Ã£o do site e entrar em contato conosco
                para esclarecer suas dÃºvidas.
              </p>

              <p>
                A aplicaÃ§Ã£o destes Termos respeitarÃ¡ sempre os direitos
                assegurados pela legislaÃ§Ã£o brasileira, especialmente o CÃ³digo
                de Defesa do Consumidor.
              </p>
            </TermsSection>

            <TermsSection title="2. Sobre a Bold Parfum">
              <p>
                A Bold Parfum atua na divulgaÃ§Ã£o e comercializaÃ§Ã£o de perfumes
                Ã¡rabes e importados, alÃ©m de prestar atendimento e consultoria
                personalizada em perfumaria.
              </p>

              <p>
                O site disponibiliza catÃ¡logo, informaÃ§Ãµes sobre fragrÃ¢ncias,
                avaliaÃ§Ãµes de clientes, conteÃºdos educativos, carrinho,
                favoritos e acesso aos canais de atendimento.
              </p>
            </TermsSection>

            <TermsSection title="3. UtilizaÃ§Ã£o do site">
              <p>
                O usuÃ¡rio compromete-se a utilizar o site de maneira lÃ­cita,
                Ã©tica e compatÃ­vel com estes Termos.
              </p>

              <p>NÃ£o Ã© permitido:</p>

              <ul className="list-disc space-y-2 pl-5 marker:text-yellow-400">
                <li>utilizar o site para prÃ¡ticas ilÃ­citas ou fraudulentas;</li>
                <li>
                  tentar acessar Ã¡reas, sistemas ou informaÃ§Ãµes sem
                  autorizaÃ§Ã£o;
                </li>
                <li>
                  interferir no funcionamento, na disponibilidade ou na
                  seguranÃ§a do site;
                </li>
                <li>
                  utilizar robÃ´s, programas ou mÃ©todos automatizados para
                  copiar conteÃºdos ou sobrecarregar o site;
                </li>
                <li>
                  publicar avaliaÃ§Ãµes falsas, ofensivas, discriminatÃ³rias ou
                  que violem direitos de terceiros;
                </li>
                <li>
                  reproduzir ou explorar comercialmente os conteÃºdos da Bold
                  Parfum sem autorizaÃ§Ã£o.
                </li>
              </ul>
            </TermsSection>

            <TermsSection title="4. InformaÃ§Ãµes sobre os produtos">
              <p>
                A Bold Parfum procura apresentar informaÃ§Ãµes claras e
                atualizadas sobre os produtos, incluindo nome, marca, volume,
                concentraÃ§Ã£o, notas olfativas, caracterÃ­sticas, preÃ§o e
                disponibilidade.
              </p>

              <p>
                As imagens tÃªm finalidade ilustrativa. Podem existir pequenas
                diferenÃ§as de tonalidade, embalagem, lote, acabamento ou
                apresentaÃ§Ã£o decorrentes da iluminaÃ§Ã£o, da tela utilizada ou
                de alteraÃ§Ãµes realizadas pelo fabricante.
              </p>

              <p>
                A percepÃ§Ã£o de uma fragrÃ¢ncia, sua fixaÃ§Ã£o e sua projeÃ§Ã£o podem
                variar conforme tipo de pele, clima, quantidade aplicada,
                conservaÃ§Ã£o, ambiente e sensibilidade individual.
              </p>

              <p>
                InformaÃ§Ãµes sobre desempenho, ocasiÃµes e referÃªncias olfativas
                representam orientaÃ§Ãµes gerais e nÃ£o constituem garantia de
                resultado idÃªntico para todas as pessoas.
              </p>
            </TermsSection>

            <TermsSection title="5. ReferÃªncias e inspiraÃ§Ãµes olfativas">
              <p>
                Quando houver indicaÃ§Ã£o de que uma fragrÃ¢ncia Ã© inspirada,
                semelhante ou possui referÃªncia olfativa em outro perfume, essa
                informaÃ§Ã£o serÃ¡ utilizada apenas para auxiliar o consumidor na
                compreensÃ£o do perfil aromÃ¡tico.
              </p>

              <p>
                Essa referÃªncia nÃ£o significa que os produtos sejam idÃªnticos,
                fabricados pela mesma empresa ou que exista vÃ­nculo comercial
                entre as respectivas marcas.
              </p>
            </TermsSection>

            <TermsSection title="6. PreÃ§os, ofertas e disponibilidade">
              <p>
                Os preÃ§os, descontos, condiÃ§Ãµes de pagamento, selos
                promocionais e disponibilidade poderÃ£o ser alterados sem aviso
                prÃ©vio, respeitadas as compras jÃ¡ confirmadas e as ofertas
                vÃ¡lidas nos termos da legislaÃ§Ã£o.
              </p>

              <p>
                A inclusÃ£o de um produto no carrinho ou nos favoritos nÃ£o
                reserva estoque nem garante a manutenÃ§Ã£o do preÃ§o.
              </p>

              <p>
                Em caso de erro evidente de digitaÃ§Ã£o, preÃ§o, estoque ou
                informaÃ§Ã£o tÃ©cnica, a Bold Parfum entrarÃ¡ em contato com o
                cliente para esclarecer a situaÃ§Ã£o e apresentar as opÃ§Ãµes
                aplicÃ¡veis.
              </p>
            </TermsSection>

            <TermsSection title="7. Pedidos pelo WhatsApp">
              <p>
                O carrinho do site poderÃ¡ gerar uma mensagem com os produtos
                selecionados e encaminhÃ¡-la ao WhatsApp da Bold Parfum.
              </p>

              <p>
                O envio dessa mensagem nÃ£o representa, isoladamente, a
                conclusÃ£o da compra. O pedido serÃ¡ confirmado apÃ³s a validaÃ§Ã£o
                dos produtos, estoque, endereÃ§o, frete, forma de pagamento e
                demais condiÃ§Ãµes informadas durante o atendimento.
              </p>

              <p>
                Antes de efetuar o pagamento, o cliente deverÃ¡ conferir os
                produtos, quantidades, valores e dados apresentados no resumo
                do pedido.
              </p>
            </TermsSection>

            <TermsSection title="8. Pagamentos">
              <p>
                As formas de pagamento disponÃ­veis serÃ£o informadas durante o
                atendimento e poderÃ£o incluir Pix, cartÃ£o ou outros meios
                disponibilizados pela Bold Parfum.
              </p>

              <p>
                Pagamentos com cartÃ£o poderÃ£o ser processados por plataformas
                ou instituiÃ§Ãµes financeiras independentes, conforme as
                condiÃ§Ãµes, taxas, anÃ¡lise e regras desses prestadores.
              </p>

              <p>
                O pedido poderÃ¡ permanecer pendente atÃ© a confirmaÃ§Ã£o efetiva
                do pagamento. A Bold Parfum nÃ£o solicita senha bancÃ¡ria, cÃ³digo
                completo de seguranÃ§a do cartÃ£o ou acesso Ã  conta do cliente.
              </p>
            </TermsSection>

            <TermsSection title="9. Entrega e recebimento">
              <p>
                O prazo e o valor da entrega dependerÃ£o do endereÃ§o, da
                modalidade de envio, da transportadora e da disponibilidade do
                produto.
              </p>

              <p>
                O cliente Ã© responsÃ¡vel por fornecer dados corretos e
                completos para entrega, incluindo nome, endereÃ§o, nÃºmero,
                complemento, CEP e telefone para contato.
              </p>

              <p>
                Eventuais atrasos causados por transportadoras, condiÃ§Ãµes
                climÃ¡ticas, restriÃ§Ãµes operacionais, endereÃ§o incorreto,
                ausÃªncia de recebedor ou fatos externos serÃ£o analisados e
                acompanhados pela Bold Parfum junto ao cliente.
              </p>

              <p>
                No recebimento, recomenda-se verificar a embalagem e o produto.
                Caso haja avaria aparente, divergÃªncia ou violaÃ§Ã£o, o cliente
                deverÃ¡ registrar imagens e entrar em contato conosco assim que
                possÃ­vel.
              </p>
            </TermsSection>

            <TermsSection title="10. Trocas, devoluÃ§Ãµes e arrependimento">
              <p>
                As solicitaÃ§Ãµes de troca, devoluÃ§Ã£o, defeito ou exercÃ­cio do
                direito de arrependimento serÃ£o tratadas conforme a legislaÃ§Ã£o
                aplicÃ¡vel e a PolÃ­tica de Trocas e DevoluÃ§Ãµes da Bold Parfum.
              </p>

              <a
                href="/politica-de-trocas-e-devolucoes"
                className="inline-flex font-bold text-yellow-400 transition hover:text-yellow-300"
              >
                Consultar a PolÃ­tica de Trocas e DevoluÃ§Ãµes
              </a>
            </TermsSection>

            <TermsSection title="11. ComentÃ¡rios e avaliaÃ§Ãµes">
              <p>
                Os usuÃ¡rios poderÃ£o compartilhar avaliaÃ§Ãµes e experiÃªncias
                reais sobre os produtos, respeitando os demais consumidores,
                as marcas e a legislaÃ§Ã£o.
              </p>

              <p>
                ConteÃºdos fraudulentos, ofensivos, discriminatÃ³rios, repetidos,
                publicitÃ¡rios, ilÃ­citos ou que exponham dados pessoais poderÃ£o
                ser removidos.
              </p>

              <a
                href="/politica-de-comentarios-e-avaliacoes"
                className="inline-flex font-bold text-yellow-400 transition hover:text-yellow-300"
              >
                Consultar a PolÃ­tica de ComentÃ¡rios e AvaliaÃ§Ãµes
              </a>
            </TermsSection>

            <TermsSection title="12. Propriedade intelectual">
              <p>
                A identidade visual, os textos, as pÃ¡ginas, a seleÃ§Ã£o e a
                organizaÃ§Ã£o dos conteÃºdos produzidos pela Bold Parfum sÃ£o
                protegidos pela legislaÃ§Ã£o aplicÃ¡vel.
              </p>

              <p>
                Marcas, nomes, embalagens e imagens pertencentes a fabricantes
                ou terceiros permanecem sob a titularidade de seus respectivos
                proprietÃ¡rios.
              </p>

              <a
                href="/direitos-autorais"
                className="inline-flex font-bold text-yellow-400 transition hover:text-yellow-300"
              >
                Consultar a pÃ¡gina de Direitos Autorais
              </a>
            </TermsSection>

            <TermsSection title="13. Privacidade e dados pessoais">
              <p>
                O tratamento de dados pessoais relacionados ao uso do site, aos
                pedidos, ao atendimento e Ã s avaliaÃ§Ãµes estÃ¡ descrito na
                PolÃ­tica de Privacidade da Bold Parfum.
              </p>

              <a
                href="/politica-de-privacidade"
                className="inline-flex font-bold text-yellow-400 transition hover:text-yellow-300"
              >
                Consultar a PolÃ­tica de Privacidade
              </a>
            </TermsSection>

            <TermsSection title="14. Links e serviÃ§os de terceiros">
              <p>
                O site poderÃ¡ oferecer links ou integraÃ§Ã£o com serviÃ§os
                externos, como WhatsApp, Instagram, transportadoras,
                instituiÃ§Ãµes financeiras e plataformas de pagamento.
              </p>

              <p>
                Esses serviÃ§os possuem termos, polÃ­ticas e sistemas prÃ³prios.
                A Bold Parfum nÃ£o controla a disponibilidade ou as prÃ¡ticas
                adotadas por esses terceiros.
              </p>
            </TermsSection>

            <TermsSection title="15. Disponibilidade do site">
              <p>
                A Bold Parfum busca manter o site disponÃ­vel e seguro, mas nÃ£o
                garante funcionamento ininterrupto ou livre de falhas.
              </p>

              <p>
                O acesso poderÃ¡ ser temporariamente interrompido para
                manutenÃ§Ã£o, atualizaÃ§Ã£o, correÃ§Ã£o, instabilidade de
                fornecedores ou ocorrÃªncia de fatos fora do nosso controle.
              </p>
            </TermsSection>

            <TermsSection title="16. Responsabilidades do usuÃ¡rio">
              <p>
                O usuÃ¡rio Ã© responsÃ¡vel pela veracidade das informaÃ§Ãµes
                fornecidas e pela conferÃªncia dos dados do pedido, endereÃ§o,
                produtos e valores antes da confirmaÃ§Ã£o da compra.
              </p>

              <p>
                TambÃ©m Ã© responsabilidade do usuÃ¡rio manter seus dispositivos,
                navegadores e meios de comunicaÃ§Ã£o protegidos contra acessos
                nÃ£o autorizados.
              </p>
            </TermsSection>

            <TermsSection title="17. AlteraÃ§Ãµes destes Termos">
              <p>
                Estes Termos poderÃ£o ser atualizados para acompanhar mudanÃ§as
                no site, nos serviÃ§os, nas prÃ¡ticas comerciais ou na
                legislaÃ§Ã£o.
              </p>

              <p>
                A versÃ£o vigente permanecerÃ¡ disponÃ­vel nesta pÃ¡gina com a data
                da Ãºltima atualizaÃ§Ã£o.
              </p>
            </TermsSection>

            <TermsSection title="18. LegislaÃ§Ã£o aplicÃ¡vel">
              <p>
                Estes Termos serÃ£o interpretados de acordo com a legislaÃ§Ã£o
                brasileira, especialmente o CÃ³digo de Defesa do Consumidor, as
                normas aplicÃ¡veis ao comÃ©rcio eletrÃ´nico e a Lei Geral de
                ProteÃ§Ã£o de Dados Pessoais.
              </p>

              <p>
                Eventuais conflitos deverÃ£o ser solucionados preferencialmente
                por meio dos canais de atendimento, sem prejuÃ­zo do direito do
                consumidor de recorrer aos Ã³rgÃ£os competentes e ao foro
                legalmente aplicÃ¡vel.
              </p>
            </TermsSection>

            <TermsSection title="19. Contato">
              <p>
                Para esclarecer dÃºvidas sobre estes Termos ou sobre uma compra,
                entre em contato pelo e-mail:
              </p>

              <a
                href="mailto:atendimento@boldparfum.com.br"
                className="inline-flex break-all font-bold text-yellow-400 transition hover:text-yellow-300"
              >
                atendimento@boldparfum.com.br
              </a>

              <div className="pt-2">
                <WhatsAppChoiceButton
                  mensagem="OlÃ¡! Vim pela pÃ¡gina Termos de Uso da Bold Parfum e gostaria de tirar uma dÃºvida."
                  className="inline-flex items-center justify-center rounded-xl bg-[#25D366] px-5 py-3 text-sm font-black text-white transition hover:bg-[#20ba5a]"
                >
                  Falar pelo WhatsApp
                </WhatsAppChoiceButton>
              </div>
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