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

      <main className="min-h-screen overflow-x-hidden bg-background text-zinc-900">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
          <header className="mb-8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-gold-dark">
              Catálogo
            </p>

            <h1 className="mt-2 text-3xl font-black sm:text-4xl lg:text-5xl">
              Todos os Perfumes
            </h1>

            <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-600 sm:text-base">
              Explore nossa coleção de perfumes árabes, importados e
              fragrâncias premium cuidadosamente selecionadas pela Bold Parfum.
            </p>
          </header>

          <Suspense
            fallback={
              <div className="rounded-2xl border border-stone-200 bg-surface px-6 py-16 text-center shadow-sm">
                <p className="font-bold text-brand-gold-dark">
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