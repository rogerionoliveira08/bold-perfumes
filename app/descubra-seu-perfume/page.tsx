import type { Metadata } from "next";
import { Suspense } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import PerfumeQuiz from "@/components/quiz/PerfumeQuiz";

export const metadata: Metadata = {
  title: "Descubra seu perfume | Bold Parfum",
  description:
    "Responda a algumas perguntas e descubra fragrâncias que combinam com seu estilo, ocasião e orçamento.",
};

export default function DescubraSeuPerfumePage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="min-h-screen overflow-x-hidden bg-white text-zinc-950">
        <section className="border-b border-zinc-200 bg-zinc-50">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-zinc-500">
                Consultoria rápida
              </p>

              <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Descubra o perfume que combina com você
              </h1>

              <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600">
                Conte um pouco sobre seu estilo. Em poucos passos, nossa
                curadoria encontra três fragrâncias do catálogo para você.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                {["6 perguntas", "3 sugestões", "Resultado imediato"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-zinc-200 bg-white px-3 py-3 text-xs font-bold text-zinc-700"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>

            <Suspense fallback={<div className="p-10 text-center text-sm text-zinc-500">Carregando quiz...</div>}>
              <PerfumeQuiz />
            </Suspense>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}