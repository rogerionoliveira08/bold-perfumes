import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import CatalogClient from "@/components/catalog/CatalogClient";

export default function ProdutosPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
          <header className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
              Catálogo
            </p>

            <h1 className="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Todos os Perfumes
            </h1>

            <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400 sm:text-base">
              Explore nossa coleção completa de perfumes árabes, importados e
              fragrâncias premium cuidadosamente selecionadas pela Bold Parfum.
            </p>
          </header>

          <CatalogClient />
        </div>
      </main>

      <Footer />
    </>
  );
}