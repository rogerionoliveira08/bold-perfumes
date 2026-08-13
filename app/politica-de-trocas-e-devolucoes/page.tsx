import type { Metadata } from "next";
import Link from "next/link";
import {
  FaBoxOpen,
  FaCheckCircle,
  FaEnvelope,
  FaExclamationTriangle,
  FaMoneyBillWave,
  FaShippingFast,
  FaUndoAlt,
  FaWhatsapp,
} from "react-icons/fa";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export const metadata: Metadata = {
  title: "Trocas e Devoluções | Bold Parfum",
  description:
    "Conheça as condições e os procedimentos para trocas, devoluções, arrependimento e reembolsos na Bold Parfum.",
};

const whatsappTrocas =
  "https://wa.me/5522998771598?text=" +
  encodeURIComponent(
    "Olá! Vim pelo site da Bold Parfum e gostaria de solicitar atendimento sobre uma troca ou devolução.",
  );

export default function PoliticaDeTrocasEDevolucoesPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="border-b border-yellow-400/20 bg-gradient-to-b from-yellow-400/[0.08] to-black">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-400">
              Atendimento e transparência
            </p>

            <h1 className="mt-4 text-3xl font-black sm:text-5xl">
              Política de Trocas e Devoluções
            </h1>

            <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
              Nosso compromisso é proporcionar uma compra segura, transparente
              e uma experiência positiva em todas as etapas do seu pedido.
            </p>

            <p className="mt-4 text-sm text-zinc-500">
              Última atualização: 13 de agosto de 2026.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="space-y-6">
            <PolicyCard
              icon={<FaUndoAlt />}
              title="1. Direito de arrependimento"
            >
              <p>
                Nas compras realizadas pelo site, WhatsApp ou por outro meio
                fora do estabelecimento comercial, o cliente poderá exercer o
                direito de arrependimento no prazo de até 7 dias corridos,
                contados a partir do recebimento do produto.
              </p>

              <p>
                A solicitação deverá ser feita dentro desse prazo pelos canais
                oficiais informados nesta página. O exercício regular do
                direito de arrependimento não terá custos adicionais para o
                consumidor.
              </p>
            </PolicyCard>

            <PolicyCard
              icon={<FaBoxOpen />}
              title="2. Condições para devolução"
            >
              <p>
                O produto deverá ser devolvido com todos os itens recebidos,
                incluindo embalagem, acessórios, brindes e documentos que
                acompanhem o pedido, quando existentes.
              </p>

              <p>
                Recomendamos que o produto seja conservado adequadamente até o
                envio. A Bold Parfum poderá realizar uma conferência após o
                recebimento para identificar o produto, verificar as condições
                da devolução e dar continuidade ao atendimento.
              </p>

              <p>
                Essa conferência não será utilizada para restringir direitos
                assegurados pela legislação de defesa do consumidor.
              </p>
            </PolicyCard>

            <PolicyCard
              icon={<FaExclamationTriangle />}
              title="3. Produto avariado, incorreto ou com defeito"
            >
              <p>
                Caso o pedido seja entregue com avaria, produto diferente do
                adquirido, falta de item ou possível defeito, entre em contato
                assim que identificar o problema.
              </p>

              <p>
                Para agilizar o atendimento, poderão ser solicitadas fotografias
                ou vídeos da embalagem, do produto, do lote e da etiqueta de
                envio. Essas informações ajudam a registrar e analisar a
                ocorrência.
              </p>

              <p>
                Quando constatado erro da Bold Parfum, avaria no transporte ou
                defeito coberto pela legislação, a orientação de devolução e a
                postagem serão fornecidas sem custo para o cliente.
              </p>
            </PolicyCard>

            <PolicyCard
              icon={<FaShippingFast />}
              title="4. Envio do produto"
            >
              <p>
                Após o recebimento da solicitação, a Bold Parfum informará as
                instruções para a devolução. Não envie o produto antes de
                receber essas orientações.
              </p>

              <p>
                Quando aplicável, será disponibilizado código de postagem ou
                outra modalidade de logística reversa. O produto deverá ser
                embalado com segurança para evitar danos durante o transporte.
              </p>
            </PolicyCard>

            <PolicyCard
              icon={<FaMoneyBillWave />}
              title="5. Reembolso"
            >
              <p>
                Após o recebimento e a conferência do produto devolvido, a Bold
                Parfum processará o reembolso em até 7 dias úteis.
              </p>

              <p>
                No Pix, o valor será devolvido para uma conta indicada pelo
                titular da compra. Nos pagamentos por cartão, será solicitada a
                reversão ou o estorno à instituição responsável.
              </p>

              <p>
                Depois de processado pela Bold Parfum, o prazo para o valor
                aparecer na conta ou na fatura dependerá do banco, da bandeira
                e da administradora do cartão.
              </p>
            </PolicyCard>

            <PolicyCard
              icon={<FaCheckCircle />}
              title="6. Troca por preferência"
            >
              <p>
                Solicitações de troca motivadas apenas por preferência pessoal,
                fora das hipóteses obrigatórias previstas em lei, serão
                analisadas individualmente.
              </p>

              <p>
                A possibilidade de troca dependerá das condições do produto, da
                disponibilidade em estoque e da forma de compra, sem prejuízo
                dos direitos legais do consumidor.
              </p>
            </PolicyCard>

            <PolicyCard
              icon={<FaEnvelope />}
              title="7. Como solicitar atendimento"
            >
              <p>
                Informe o nome utilizado na compra, o número ou a identificação
                do pedido, o produto envolvido e uma breve descrição do motivo
                da solicitação.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={whatsappTrocas}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-sm font-black text-black transition hover:bg-green-400"
                >
                  <FaWhatsapp size={18} />
                  Solicitar pelo WhatsApp
                </a>

                <a
                  href="mailto:atendimento@boldparfum.com.br?subject=Solicitação de troca ou devolução"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-yellow-400/50 px-5 py-3 text-sm font-black text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
                >
                  <FaEnvelope size={17} />
                  atendimento@boldparfum.com.br
                </a>
              </div>
            </PolicyCard>
          </div>

          <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-sm leading-6 text-zinc-500">
            <p>
              Esta política complementa os direitos garantidos pelo Código de
              Defesa do Consumidor. Nenhuma disposição desta página deverá ser
              interpretada como renúncia ou limitação de direitos assegurados
              pela legislação brasileira.
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