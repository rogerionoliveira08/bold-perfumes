export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white border-t border-yellow-500 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">Bold Parfum</h2>
          <p className="mt-3 text-zinc-400">
            Perfumes árabes e importados selecionados para quem busca presença,
            sofisticação e excelente fixação.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-yellow-400 mb-3">Links</h3>
          <ul className="space-y-2 text-zinc-400">
            <li>Início</li>
            <li>Produtos</li>
            <li>Categorias</li>
            <li>Contato</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-yellow-400 mb-3">Atendimento</h3>
          <p className="text-zinc-400">WhatsApp: (22) 99877-1598</p>
          <p className="text-zinc-400 mt-2">Saquarema - RJ</p>
        </div>
      </div>

      <p className="text-center text-zinc-500 mt-10">
        © 2026 Bold Parfum. Todos os direitos reservados.
      </p>
    </footer>
  );
}