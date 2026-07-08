export default function Navbar() {
  return (
    <header className="bg-black border-b border-yellow-500 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <h1 className="text-3xl font-bold text-yellow-400">
          Bold Perfumes
        </h1>

        <nav className="flex items-center gap-8 text-white font-medium">

          <a href="#" className="hover:text-yellow-400 transition">
            Início
          </a>

          <a href="#" className="hover:text-yellow-400 transition">
            Produtos
          </a>

          <a href="#" className="hover:text-yellow-400 transition">
            Categorias
          </a>

          <a href="#" className="hover:text-yellow-400 transition">
            Contato
          </a>

          <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-bold hover:bg-yellow-300 transition">
            Carrinho
          </button>

        </nav>

      </div>
    </header>
  );
}