const categorias = [
  "Árabes",
  "Masculinos",
  "Femininos",
  "Decants",
  "Mais Vendidos",
  "Promoções",
];

export default function CategorySection() {
  return (
    <section className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 text-center mb-8">
          Categorias
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl py-5 font-bold hover:border-yellow-400 hover:text-yellow-400 transition"
            >
              {categoria}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}