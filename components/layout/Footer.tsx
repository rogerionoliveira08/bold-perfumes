import type { ReactNode } from "react";
import Link from "next/link";
import {
  FaCreditCard,
  FaEnvelope,
  FaInstagram,
  FaShippingFast,
  FaWhatsapp,
} from "react-icons/fa";

const mensagemWhatsApp =
  "Olá! Vim pelo site da Bold Parfum e gostaria de atendimento.";

const atendentes = [
  {
    nome: "Rogério",
    numeroExibido: "(22) 99928-1815",
    telefone: "5522999281815",
  },
  {
    nome: "Thainá",
    numeroExibido: "(22) 9992-8565",
    telefone: "55229928565",
  },
];

export default function Footer() {
  return (
    <footer
      id="contato"
      className="border-t border-zinc-200 bg-black text-white"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-white">
              Bold Parfum
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-400">
              Perfumes árabes e importados selecionados para quem busca
              personalidade, qualidade e uma fragrância que combine com seu
              estilo.
            </p>

            <a
              href="https://www.instagram.com/bold.parfum/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-xs font-black text-zinc-300 transition hover:border-pink-500 hover:text-pink-400"
            >
              <FaInstagram size={16} />
              Instagram
            </a>

            <div className="mt-5 space-y-3">
              <EmailLink
                email="atendimento@boldparfum.com.br"
                description="Dúvidas, pedidos e atendimento"
              />

              <EmailLink
                email="consultoria@boldparfum.com.br"
                description="Consultoria personalizada em perfumaria"
              />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.12em] text-white">
              Links rápidos
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Início
                </Link>
              </li>

              <li>
                <Link
                  href="/produtos"
                  className="transition hover:text-white"
                >
                  Produtos
                </Link>
              </li>

              <li>
                <Link
                  href="/quem-somos"
                  className="transition hover:text-white"
                >
                  Quem somos
                </Link>
              </li>

              <li>
                <Link
                  href="/garantia-de-originalidade"
                  className="transition hover:text-white"
                >
                  Garantia de originalidade
                </Link>
              </li>

              <li>
                <Link
                  href="/#categorias"
                  className="transition hover:text-white"
                >
                  Categorias
                </Link>
              </li>

              <li>
                <Link
                  href="/favoritos"
                  className="transition hover:text-white"
                >
                  Favoritos
                </Link>
              </li>

              <li>
                <Link
                  href="/politica-de-trocas-e-devolucoes"
                  className="transition hover:text-white"
                >
                  Trocas e devoluções
                </Link>
              </li>

              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="transition hover:text-white"
                >
                  Política de privacidade
                </Link>
              </li>

              <li>
                <Link
                  href="/termos"
                  className="transition hover:text-white"
                >
                  Termos de uso
                </Link>
              </li>

              <li>
                <Link
                  href="/direitos-autorais"
                  className="transition hover:text-white"
                >
                  Direitos autorais
                </Link>
              </li>

              <li>
                <Link
                  href="/politica-de-comentarios-e-avaliacoes"
                  className="transition hover:text-white"
                >
                  Comentários e avaliações
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.12em] text-white">
              Atendimento
            </h3>

            <p className="mt-4 text-xs leading-5 text-zinc-500">
              Escolha com quem deseja falar:
            </p>

            <div className="mt-4 space-y-3">
              {atendentes.map((atendente) => (
                <a
                  key={atendente.nome}
                  href={`https://wa.me/${atendente.telefone}?text=${encodeURIComponent(
                    mensagemWhatsApp,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 border border-green-500/30 bg-green-500/[0.06] p-3 transition hover:border-green-500 hover:bg-green-500/10"
                >
                  <FaWhatsapp
                    className="mt-0.5 shrink-0 text-green-400"
                    size={17}
                  />

                  <div>
                    <p className="text-sm font-bold text-zinc-200">
                      {atendente.nome}
                    </p>

                    <p className="mt-0.5 text-xs text-zinc-400">
                      {atendente.numeroExibido}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.12em] text-white">
              Compra segura
            </h3>

            <div className="mt-4 space-y-3">
              <InfoCard
                icon={<FaCreditCard />}
                title="Até 10x sem juros"
                text="Parcelamento no cartão"
              />

              <InfoCard
                icon={<FaShippingFast />}
                title="Frete por CEP"
                text="Entrega para todo o Brasil"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-900 pt-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-500">
                Formas de pagamento
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                <PaymentBadge text="Pix" />
                <PaymentBadge text="Visa" />
                <PaymentBadge text="Mastercard" />
                <PaymentBadge text="Elo" />
              </div>
            </div>

            <p className="text-xs leading-5 text-zinc-600 sm:text-right">
              © 2026 Bold Parfum. Todos os direitos reservados.
              <br />
              Sua assinatura olfativa.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function EmailLink({
  email,
  description,
}: {
  email: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <FaEnvelope
        className="mt-0.5 shrink-0 text-zinc-400"
        size={15}
      />

      <div className="min-w-0">
        <a
          href={`mailto:${email}`}
          className="whitespace-nowrap text-[12px] font-bold text-zinc-200 transition hover:text-white sm:text-sm"
        >
          {email}
        </a>

        <p className="mt-0.5 text-xs text-zinc-500">
          {description}
        </p>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3 border border-zinc-800 bg-zinc-950 p-3">
      <span className="mt-0.5 shrink-0 text-zinc-300">
        {icon}
      </span>

      <div>
        <p className="text-sm font-black text-white">{title}</p>
        <p className="mt-0.5 text-xs text-zinc-500">{text}</p>
      </div>
    </div>
  );
}

function PaymentBadge({ text }: { text: string }) {
  return (
    <span className="border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.08em] text-zinc-300">
      {text}
    </span>
  );
}