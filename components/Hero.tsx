import Image from "next/image";
 import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <main className="bg-black text-white">
      <section className="max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-yellow-400 font-bold mb-4">
            PERFUMES ÁRABES ORIGINAIS
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Luxo, presença e sofisticação em cada fragrância.
          </h2>

          <p className="mt-6 text-lg text-zinc-300">
            Conheça perfumes marcantes, com excelente fixação e ótimo custo-benefício.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition">
              Ver Produtos
            </button>

            <a
  href="https://wa.me/5522998771598?text=Olá! Vim pelo site da Bold Parfam e gostaria de saber mais sobre os perfumes."
  target="_blank"
  rel="noopener noreferrer"
  className="border border-green-500 text-green-400 px-8 py-4 rounded-xl font-bold hover:bg-green-500 hover:text-white transition flex items-center justify-center gap-3"
>
  <FaWhatsapp size={24} />
  Falar no WhatsApp
</a>
          </div>
        </div>

        <div className="bg-zinc-900 border border-yellow-500/40 rounded-3xl p-10 text-center shadow-2xl">
          <Image
            src="/perfume.jpeg"
            alt="Perfume"
            width={350}
            height={500}
            className="mx-auto rounded-xl"
          />

          <h3 className="text-3xl font-bold text-yellow-400 mt-6">
            Coleção Premium
          </h3>

          <p className="mt-4 text-zinc-300">
            Perfumes selecionados para quem quer se destacar.
          </p>
        </div>
      </section>
    </main>
  );
}