import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CatalogClient from "@/components/catalog/CatalogClient";

export default function ProdutosPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="min-h-screen overflow-x-hidden bg-white text-zinc-950">
        <section className="border-b border-zinc-200 bg-zinc-50">
          <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-zinc-500">
              Catálogo Bold Parfum
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
              Encontre sua próxima fragrância
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600 sm:text-base">
              Explore perfumes árabes e importados selecionados para
              diferentes estilos, ocasiões e preferências olfativas.
            </p>
          </div>
        </section>

        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
          <Suspense
            fallback={
              <div className="rounded-2xl border border-zinc-200 bg-white px-6 py-16 text-center">
                <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-zinc-200 border-t-black" />

                <p className="mt-4 font-bold text-zinc-700">
                  Carregando catálogo...
                </p>
              </div>
            }
          >
            <CatalogClient />
          </Suspense>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}