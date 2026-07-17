 import Link from "next/link";
import {
  FaCreditCard,
  FaInstagram,
  FaMapMarkerAlt,
  FaShippingFast,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-yellow-400/40 bg-black text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr]">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-yellow-400">
              Bold Parfum
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-400">
              Perfumes árabes e importados selecionados para quem busca
              presença, sofisticação e excelente fixação.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://wa.me/5522998771598?text=Olá! Vim pelo site da Bold Parfum e gostaria de atendimento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-green-500/40 bg-green-500/[0.06] px-4 py-2.5 text-xs font-black text-green-400 transition hover:bg-green-500 hover:text-black"
              >
                <FaWhatsapp size={16} />
                WhatsApp
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-xs font-black text-zinc-300 transition hover:border-pink-500/60 hover:text-pink-400"
              >
                <FaInstagram size={16} />
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.12em] text-yellow-400">
              Links rápidos
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-yellow-400"
                >
                  Início
                </Link>
              </li>

              <li>
                <Link
                  href="/produtos"
                  className="transition hover:text-yellow-400"
                >
                  Produtos
                </Link>
              </li>

              <li>
                <Link
                  href="/#categorias"
                  className="transition hover:text-yellow-400"
                >
                  Categorias
                </Link>
              </li>

              <li>
                <Link
                  href="/favoritos"
                  className="transition hover:text-yellow-400"
                >
                  Favoritos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.12em] text-yellow-400">
              Atendimento
            </h3>

            <div className="mt-4 space-y-4 text-sm text-zinc-400">
              <div className="flex items-start gap-3">
                <FaWhatsapp
                  className="mt-0.5 shrink-0 text-yellow-400"
                  size={15}
                />

                <div>
                  <p className="font-bold text-zinc-200">
                    (22) 99877-1598
                  </p>

                  <p className="mt-0.5 text-xs text-zinc-500">
                    Atendimento rápido pelo WhatsApp
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt
                  className="mt-0.5 shrink-0 text-yellow-400"
                  size={15}
                />

                <div>
                  <p className="font-bold text-zinc-200">
                    Saquarema - RJ
                  </p>

                  <p className="mt-0.5 text-xs text-zinc-500">
                    Enviamos para todo o Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.12em] text-yellow-400">
              Compra segura
            </h3>

            <div className="mt-4 space-y-3">
              <InfoCard
                icon={<FaCreditCard />}
                title="Até 12x"
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
    <div className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-950 p-3">
      <span className="mt-0.5 shrink-0 text-yellow-400">
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
    <span className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.08em] text-zinc-300">
      {text}
    </span>
  );
}