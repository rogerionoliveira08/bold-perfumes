import type { Product } from "@/types/product";

type ProdutoObrigatorio = Pick<
  Product,
  | "id"
  | "slug"
  | "nome"
  | "marca"
  | "preco"
  | "imagem"
  | "categoria"
  | "genero"
>;

 function criarProduto(
  produto: ProdutoObrigatorio & Partial<Product>,
): Product {
  return {
    selo: "Original",
    avaliacao: 4.8,
    avaliacoes: 0,

    descricao: `${produto.nome} é uma fragrância sofisticada e marcante, selecionada para quem busca personalidade, elegância e excelente presença olfativa.`,

    familiaOlfativa: "Oriental Amadeirado",

    notasTopo: [
      "Notas cítricas",
      "Especiarias",
    ],

    notasCoracao: [
      "Notas aromáticas",
      "Flores",
    ],

    notasBase: [
      "Âmbar",
      "Madeiras",
      "Almíscar",
    ],

    fixacao: 4,
    projecao: 4,
    duracao: "6 a 8 horas",
    rastro: "Moderado a marcante",

    ocasioes: [
      "Dia a dia",
      "Encontros",
      "Eventos",
    ],

    volume: "100ml",
    concentracao: "Eau de Parfum",
    origem: "Emirados Árabes Unidos",

    performance: {
      intensidade: 4,
      versatilidade: 4,
      elegancia: 4,
      frescor: 3,
      docura: 3,
    },

    usoIdeal: {
      estacoes: [
        "Primavera",
        "Outono",
        "Inverno",
      ],
      periodos: [
        "Dia",
        "Noite",
      ],
      climas: [
        "Ameno",
        "Fresco",
      ],
    },

    perfil: {
      estilos: [
        "Elegante",
        "Moderno",
        "Marcante",
      ],
      publico:
        "Indicado para quem procura uma fragrância elegante, marcante e versátil.",
      impressao:
        "Uma fragrância sofisticada, envolvente e com excelente presença.",
    },

    imagens: [produto.imagem],

    ...produto,
  };
}

export const produtos: Product[] = [
 criarProduto({
  id: 1,
  slug: "asad",
  nome: "Asad",
  marca: "Lattafa",
  preco: 300,
  imagem: "/Perfumes/asad.jpeg",
  categoria: "Masculino",
  genero: "Masculino",
  selo: "Mais vendido",
  avaliacao: 4.9,
  avaliacoes: 128,

  descricao:
    "O Asad, da Lattafa, é uma fragrância masculina de personalidade forte, criada para homens confiantes que gostam de marcar presença. Inspirado no renomado Dior Sauvage Elixir, entrega uma combinação envolvente de especiarias, acordes ambarados, madeiras nobres e baunilha, oferecendo excelente desempenho e um aroma sofisticado do início ao fim.",

  inspiradoEm: "Dior Sauvage Elixir",

  familiaOlfativa: "Âmbar Especiado",

  notasTopo: [
    "Pimenta-preta",
    "Tabaco",
    "Abacaxi"
  ],

  notasCoracao: [
    "Patchouli",
    "Café",
    "Íris"
  ],

  notasBase: [
    "Baunilha",
    "Âmbar",
    "Madeiras Secas",
    "Benjoim"
  ],

  fixacao: 5,
  projecao: 5,

  ocasioes: [
    "Noite",
    "Encontros",
    "Eventos",
    "Jantares",
    "Clima frio"
  ],

  estacoes: [
    "Outono",
    "Inverno",
    "Noites de primavera"
  ],

  concentracao: "Eau de Parfum (EDP)",

  volume: "100 ml",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Excelente desempenho. Na pele costuma permanecer entre 8 e 12 horas, podendo ultrapassar esse tempo em roupas. A projeção é intensa nas primeiras horas e continua perceptível por bastante tempo.",

  caracteristicas: [
    "Inspirado no Dior Sauvage Elixir",
    "Aroma intenso e sofisticado",
    "Excelente custo-benefício",
    "Alta fixação",
    "Projeção marcante",
    "Ideal para homens de personalidade forte",
    "Perfume extremamente elogiado",
    "Ótima opção para uso noturno"
  ],
}),

  criarProduto({
  id: 2,
  slug: "asad-bourbon",
  nome: "Asad Bourbon",
  marca: "Lattafa",
  preco: 400,
  imagem: "/Perfumes/asadbourbon.jpeg",
  categoria: "Masculino",
  genero: "Masculino",
  selo: "Novo",
  avaliacao: 4.8,
  avaliacoes: 74,

  descricao:
    "Asad Bourbon é uma releitura sofisticada da linha Asad, trazendo uma fragrância mais refinada, cremosa e envolvente. Inspirado em perfumes de luxo, combina especiarias aromáticas, notas licorosas, cacau e madeiras nobres, resultando em um aroma elegante, sedutor e extremamente moderno. Ideal para homens que desejam exclusividade e excelente desempenho.",

  inspiradoEm: "Parfums de Marly Althaïr",

  familiaOlfativa: "Oriental Amadeirado",

  notasTopo: [
    "Pimenta-rosa",
    "Lavanda",
    "Bergamota"
  ],

  notasCoracao: [
    "Cacau",
    "Noz-moscada",
    "Davana"
  ],

  notasBase: [
    "Baunilha",
    "Âmbar",
    "Vetiver",
    "Madeiras Nobres"
  ],

  fixacao: 5,

  projecao: 4,

  ocasioes: [
    "Noite",
    "Encontros",
    "Jantares",
    "Eventos especiais",
    "Clima frio"
  ],

  estacoes: [
    "Outono",
    "Inverno",
    "Noites de primavera"
  ],

  concentracao: "Eau de Parfum (EDP)",

  volume: "100 ml",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Possui excelente desempenho, permanecendo entre 8 e 12 horas na pele, com projeção intensa nas primeiras horas e ótima evolução durante todo o uso.",

  caracteristicas: [
    "Inspirado no Parfums de Marly Althaïr",
    "Fragrância cremosa e sofisticada",
    "Baunilha elegante e envolvente",
    "Excelente fixação",
    "Ótima projeção",
    "Ideal para clima frio",
    "Perfume versátil para ocasiões especiais",
    "Excelente custo-benefício dentro da perfumaria árabe"
  ],
}),

  criarProduto({
  id: 3,
  slug: "fakhar-black",
  nome: "Fakhar Black",
  marca: "Lattafa",
  preco: 350,
  imagem: "/Perfumes/fakhar-black.jpg",
  categoria: "Masculino",
  genero: "Masculino",
  avaliacao: 4.9,
  avaliacoes: 196,

  descricao:
    "Fakhar Black é uma fragrância masculina elegante, moderna e extremamente versátil. Inspirado no renomado Yves Saint Laurent Y Eau de Parfum, combina notas cítricas, aromáticas e amadeiradas em uma composição sofisticada que transmite confiança, frescor e presença. É um perfume ideal para quem busca excelente desempenho e versatilidade para qualquer ocasião.",

  inspiradoEm: "Yves Saint Laurent Y Eau de Parfum",

  familiaOlfativa: "Aromático Amadeirado",

  notasTopo: [
    "Bergamota",
    "Maçã",
    "Gengibre"
  ],

  notasCoracao: [
    "Lavanda",
    "Sálvia",
    "Gerânio"
  ],

  notasBase: [
    "Cedro",
    "Vetiver",
    "Fava-tonka",
    "Âmbar"
  ],

  fixacao: 5,

  projecao: 5,

  ocasioes: [
    "Trabalho",
    "Uso diário",
    "Encontros",
    "Eventos",
    "Noite"
  ],

  estacoes: [
    "Primavera",
    "Verão",
    "Outono"
  ],

  concentracao: "Eau de Parfum (EDP)",

  volume: "100 ml",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Apresenta excelente desempenho, com fixação entre 8 e 12 horas na pele e projeção intensa nas primeiras horas, tornando-se um perfume marcante sem perder a elegância.",

  caracteristicas: [
    "Inspirado no Yves Saint Laurent Y Eau de Parfum",
    "Fragrância fresca e sofisticada",
    "Excelente para uso diário",
    "Alta fixação",
    "Projeção marcante",
    "Muito elogiado pela versatilidade",
    "Ideal para ambientes profissionais e sociais",
    "Excelente custo-benefício"
  ],
}),

 criarProduto({
  id: 4,
  slug: "fakhar-gold",
  nome: "Fakhar Gold",
  marca: "Lattafa",
  preco: 350,
  imagem: "/Perfumes/fakhargold.jpeg",
  categoria: "Masculino",
  genero: "Masculino",
  selo: "Destaque",
  avaliacao: 4.8,
  avaliacoes: 82,

  descricao:
    "Fakhar Gold é uma fragrância masculina sofisticada e envolvente, criada para quem aprecia perfumes elegantes e de presença marcante. Sua composição combina especiarias, notas aromáticas e madeiras nobres, resultando em um aroma refinado, moderno e versátil, ideal para homens que desejam transmitir confiança e sofisticação em qualquer ocasião.",

  familiaOlfativa: "Oriental Amadeirado",

  notasTopo: [
    "Bergamota",
    "Gengibre",
    "Toranja"
  ],

  notasCoracao: [
    "Lavanda",
    "Sálvia",
    "Gerânio"
  ],

  notasBase: [
    "Âmbar",
    "Cedro",
    "Fava-tonka",
    "Vetiver"
  ],

  fixacao: 5,

  projecao: 4,

  ocasioes: [
    "Trabalho",
    "Eventos",
    "Encontros",
    "Noite",
    "Ocasiões especiais"
  ],

  estacoes: [
    "Primavera",
    "Outono",
    "Inverno"
  ],

  concentracao: "Eau de Parfum (EDP)",

  volume: "100 ml",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Entrega excelente desempenho, permanecendo entre 8 e 12 horas na pele, com projeção intensa nas primeiras horas e ótima evolução ao longo do dia.",

  caracteristicas: [
    "Fragrância elegante e sofisticada",
    "Excelente fixação",
    "Ótima projeção",
    "Ideal para homens modernos",
    "Versátil para uso diurno e noturno",
    "Muito elogiado pela elegância",
    "Excelente custo-benefício",
    "Perfume de alta qualidade da Lattafa"
  ],
}),

  criarProduto({
  id: 5,
  slug: "club-de-nuit-intense",
  nome: "Club de Nuit Intense",
  marca: "Armaf",
  preco: 400,
  imagem: "/Perfumes/club-de-nuit-intense.jpg",
  categoria: "Masculino",
  genero: "Masculino",
  selo: "Premium",
  avaliacao: 4.9,
  avaliacoes: 141,

  descricao:
    "Club de Nuit Intense Man é um dos perfumes árabes masculinos mais renomados do mundo. Inspirado no icônico Creed Aventus, combina frutas cítricas, notas defumadas, madeiras nobres e almíscar em uma fragrância elegante, intensa e extremamente versátil. Seu excelente desempenho e a semelhança com um dos perfumes mais desejados da perfumaria de nicho fazem dele um dos maiores sucessos da Armaf.",

  inspiradoEm: "Creed Aventus",

  familiaOlfativa: "Amadeirado Frutado",

  notasTopo: [
    "Limão",
    "Abacaxi",
    "Bergamota",
    "Maçã",
    "Groselha-preta"
  ],

  notasCoracao: [
    "Bétula",
    "Jasmim",
    "Rosa"
  ],

  notasBase: [
    "Almíscar",
    "Patchouli",
    "Baunilha",
    "Âmbar"
  ],

  fixacao: 5,

  projecao: 5,

  ocasioes: [
    "Trabalho",
    "Uso diário",
    "Eventos",
    "Encontros",
    "Noite"
  ],

  estacoes: [
    "Primavera",
    "Outono",
    "Verão"
  ],

  volume: "105 ml",

  concentracao: "Eau de Toilette (EDT)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Reconhecido mundialmente pela excelente performance, apresenta fixação entre 8 e 12 horas na pele e projeção intensa nas primeiras horas, mantendo presença marcante durante praticamente todo o dia.",

  caracteristicas: [
    "Inspirado no Creed Aventus",
    "Um dos perfumes mais vendidos da Armaf",
    "Fragrância elegante e sofisticada",
    "Excelente fixação",
    "Projeção intensa",
    "Extremamente versátil",
    "Ideal para uso diário e ocasiões especiais",
    "Excelente custo-benefício frente aos perfumes de nicho"
  ],
}),

  criarProduto({
  id: 6,
  slug: "maahir",
  nome: "Maahir",
  marca: "Lattafa",
  preco: 350,
  imagem: "/Perfumes/maahir.jpeg",
  categoria: "Masculino",
  genero: "Masculino",
  selo: "Luxo",
  avaliacao: 4.9,
  avaliacoes: 55,

  descricao:
    "Maahir é uma fragrância masculina sofisticada e imponente da Lattafa, criada para homens que apreciam perfumes elegantes e marcantes. Sua combinação de especiarias, madeiras nobres e notas ambaradas resulta em um aroma refinado, de excelente presença e longa duração, perfeito para ocasiões especiais e para quem gosta de deixar uma impressão memorável.",

  familiaOlfativa: "Oriental Amadeirado",

  notasTopo: [
    "Bergamota",
    "Pimenta-rosa",
    "Notas Aromáticas"
  ],

  notasCoracao: [
    "Jasmim",
    "Cedro",
    "Ládano"
  ],

  notasBase: [
    "Sândalo",
    "Âmbar",
    "Almíscar",
    "Patchouli"
  ],

  fixacao: 5,

  projecao: 5,

  ocasioes: [
    "Noite",
    "Eventos",
    "Jantares",
    "Encontros",
    "Ocasiões especiais"
  ],

  estacoes: [
    "Outono",
    "Inverno",
    "Noites de primavera"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Possui excelente desempenho, com fixação entre 8 e 12 horas na pele e projeção intensa nas primeiras horas, mantendo uma presença elegante durante toda a evolução da fragrância.",

  caracteristicas: [
    "Fragrância sofisticada e marcante",
    "Excelente fixação",
    "Projeção intensa",
    "Ideal para clima frio",
    "Perfeito para ocasiões especiais",
    "Design luxuoso em formato de cavalo",
    "Muito elogiado pela elegância",
    "Excelente qualidade da Lattafa"
  ],
}),
 criarProduto({
  id: 7,
  slug: "salvo-intense",
  nome: "Salvo Intense",
  marca: "Maison Alhambra",
  preco: 300,
  imagem: "/Perfumes/salvo-intense-novo.jpg",
  categoria: "Masculino",
  genero: "Masculino",
  selo: "Oferta",
  avaliacao: 4.7,
  avaliacoes: 63,

  descricao:
    "Salvo Intense, da Maison Alhambra, é uma fragrância masculina moderna, intensa e extremamente versátil. Inspirado no consagrado Dior Sauvage, combina notas cítricas, especiarias e madeiras em uma composição elegante e marcante, ideal para homens que procuram um perfume de presença, excelente desempenho e ótimo custo-benefício.",

  inspiradoEm: "Dior Sauvage Eau de Parfum",

  familiaOlfativa: "Aromático Especiado",

  notasTopo: [
    "Bergamota",
    "Pimenta",
    "Notas Cítricas"
  ],

  notasCoracao: [
    "Lavanda",
    "Pimenta-rosa",
    "Patchouli",
    "Gerânio"
  ],

  notasBase: [
    "Ambroxan",
    "Cedro",
    "Ládano"
  ],

  fixacao: 5,

  projecao: 4,

  ocasioes: [
    "Trabalho",
    "Uso diário",
    "Encontros",
    "Eventos",
    "Noite"
  ],

  estacoes: [
    "Primavera",
    "Verão",
    "Outono"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Possui excelente desempenho, com fixação entre 7 e 10 horas na pele e projeção intensa nas primeiras horas, tornando-se uma excelente opção para quem busca versatilidade e presença durante todo o dia.",

  caracteristicas: [
    "Inspirado no Dior Sauvage Eau de Parfum",
    "Fragrância fresca, moderna e sofisticada",
    "Excelente para uso diário",
    "Alta fixação",
    "Ótima projeção",
    "Muito versátil",
    "Ideal para todas as idades",
    "Excelente custo-benefício da Maison Alhambra"
  ],
}),

 criarProduto({
  id: 8,
  slug: "al-noble-wazeer",
  nome: "Al Noble Wazeer",
  marca: "Lattafa",
  preco: 300,
  imagem: "/Perfumes/alnoblewazeer.jpeg",
  categoria: "Unissex",
  genero: "Unissex",
  selo: "Exclusivo",
  avaliacao: 4.9,
  avaliacoes: 88,

  descricao:
    "Al Noble Wazeer, da Lattafa, é uma fragrância unissex sofisticada, exótica e envolvente. Sua abertura fresca e levemente verde evolui para um coração cremoso e adocicado, no qual o chocolate amargo se mistura à íris e à framboesa. O fundo quente, amadeirado e almiscarado entrega elegância, personalidade e uma assinatura olfativa diferente dos perfumes tradicionais.",

  familiaOlfativa: "Frutado Amadeirado",

  notasTopo: [
    "Hortelã",
    "Laranja-amarga",
    "Bergamota",
    "Zimbro"
  ],

  notasCoracao: [
    "Íris",
    "Chocolate amargo",
    "Framboesa"
  ],

  notasBase: [
    "Cedro",
    "Sândalo",
    "Vetiver",
    "Âmbar",
    "Baunilha",
    "Almíscar"
  ],

  fixacao: 5,
  projecao: 4,

  ocasioes: [
    "Encontros",
    "Jantares",
    "Eventos especiais",
    "Noite",
    "Uso social"
  ],

  estacoes: [
    "Outono",
    "Inverno",
    "Noites de primavera"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Apresenta ótima fixação, permanecendo aproximadamente entre 7 e 10 horas na pele. Sua projeção é marcante nas primeiras horas e depois se mantém elegante e perceptível, sem se tornar excessiva.",

  caracteristicas: [
    "Fragrância unissex sofisticada",
    "Aroma frutado, amadeirado e atalcado",
    "Chocolate amargo elegante e bem integrado",
    "Abertura fresca e levemente verde",
    "Ótima fixação",
    "Projeção marcante e equilibrada",
    "Ideal para ocasiões especiais",
    "Perfume exótico e diferente"
  ],
}),

 criarProduto({
  id: 9,
  slug: "al-noble-ameer",
  nome: "Al Noble Ameer",
  marca: "Lattafa",
  preco: 300,
  imagem: "/Perfumes/alnobleameer.jpeg",
  categoria: "Unissex",
  genero: "Unissex",
  selo: "Exclusivo",
  avaliacao: 4.8,
  avaliacoes: 67,

  descricao:
    "Al Noble Ameer é uma fragrância unissex luxuosa da Lattafa, desenvolvida para quem aprecia perfumes sofisticados e de personalidade marcante. Sua composição une especiarias, madeiras nobres, resinas e notas defumadas, criando um aroma elegante, misterioso e extremamente envolvente. É uma excelente escolha para quem busca exclusividade e alta performance.",

  familiaOlfativa: "Oriental Amadeirado",

  notasTopo: [
    "Pimenta-rosa",
    "Maçã",
    "Alecrim"
  ],

  notasCoracao: [
    "Cravo",
    "Notas Amadeiradas",
    "Resinas"
  ],

  notasBase: [
    "Oud",
    "Vetiver",
    "Cypriol (Nagarmotha)",
    "Ládano",
    "Âmbar"
  ],

  fixacao: 5,

  projecao: 5,

  ocasioes: [
    "Noite",
    "Eventos",
    "Jantares",
    "Ocasiões especiais",
    "Clima frio"
  ],

  estacoes: [
    "Outono",
    "Inverno"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Entrega excelente desempenho, permanecendo entre 8 e 12 horas na pele, com projeção intensa nas primeiras horas e evolução elegante durante todo o uso.",

  caracteristicas: [
    "Fragrância unissex premium",
    "Perfil amadeirado e defumado",
    "Excelente fixação",
    "Projeção intensa",
    "Ideal para clima frio",
    "Aroma sofisticado e exclusivo",
    "Ótimo para ocasiões especiais",
    "Alta qualidade da Lattafa"
  ],
}),

  criarProduto({
  id: 10,
  slug: "al-noble-safeer",
  nome: "Al Noble Safeer",
  marca: "Lattafa",
  preco: 300,
  imagem: "/Perfumes/alnoblesafeer.jpeg",
  categoria: "Unissex",
  genero: "Unissex",
  selo: "Exclusivo",
  avaliacao: 4.8,
  avaliacoes: 61,

  descricao:
    "Al Noble Safeer é uma fragrância unissex sofisticada da Lattafa, criada para quem busca um perfume elegante, diferenciado e marcante. Sua composição combina notas verdes, aromáticas e amadeiradas com um fundo levemente resinoso, proporcionando uma experiência refinada, fresca e de excelente desempenho. É um perfume ideal para quem aprecia fragrâncias exclusivas e fora do comum.",

  familiaOlfativa: "Aromático Amadeirado",

  notasTopo: [
    "Bergamota",
    "Artemísia",
    "Notas Verdes"
  ],

  notasCoracao: [
    "Jasmim",
    "Notas Herbais",
    "Especiarias"
  ],

  notasBase: [
    "Cedro",
    "Patchouli",
    "Vetiver",
    "Âmbar",
    "Almíscar"
  ],

  fixacao: 5,

  projecao: 4,

  ocasioes: [
    "Trabalho",
    "Uso diário",
    "Eventos",
    "Encontros",
    "Clima ameno"
  ],

  estacoes: [
    "Primavera",
    "Outono",
    "Verão"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Possui excelente desempenho, com fixação entre 8 e 10 horas na pele e projeção marcante nas primeiras horas, evoluindo de forma elegante e equilibrada.",

  caracteristicas: [
    "Fragrância unissex sofisticada",
    "Perfil verde e aromático",
    "Excelente fixação",
    "Ótima projeção",
    "Ideal para quem busca exclusividade",
    "Versátil para uso diário",
    "Muito elegante e refinado",
    "Excelente qualidade da Lattafa"
  ],
}),

  criarProduto({
  id: 11,
  slug: "ameerati",
  nome: "Ameerati",
  marca: "Al Wataniah",
  preco: 250,
  imagem: "/Perfumes/ameerati.jpeg",
  categoria: "Unissex",
  genero: "Unissex",
  selo: "Versátil",
  avaliacao: 4.8,
  avaliacoes: 76,

  descricao:
    "Ameerati, da Al Wataniah, é uma fragrância unissex fresca, elegante e extremamente versátil. Sua abertura combina cítricos, notas verdes e almíscar, criando uma sensação limpa e revigorante. No coração, acordes herbais e amadeirados acrescentam sofisticação, enquanto o fundo atalcado e especiado proporciona conforto, personalidade e uma evolução refinada.",

  familiaOlfativa: "Aromático Especiado",

  notasTopo: [
    "Cítricos",
    "Notas verdes",
    "Almíscar"
  ],

  notasCoracao: [
    "Notas herbais",
    "Notas amadeiradas"
  ],

  notasBase: [
    "Notas especiadas",
    "Notas atalcadas"
  ],

  fixacao: 4,

  projecao: 4,

  ocasioes: [
    "Uso diário",
    "Trabalho",
    "Passeios",
    "Encontros",
    "Eventos durante o dia"
  ],

  estacoes: [
    "Primavera",
    "Verão",
    "Outono"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Apresenta bom desempenho para uma fragrância de perfil fresco, com duração estimada entre 6 e 8 horas na pele. A projeção é mais perceptível nas primeiras horas e depois evolui de maneira confortável e elegante.",

  caracteristicas: [
    "Fragrância unissex e versátil",
    "Aroma fresco, verde e almiscarado",
    "Sensação limpa e elegante",
    "Fundo atalcado e especiado",
    "Ótimo para uso diário",
    "Adequado para ambientes profissionais",
    "Boa opção para climas quentes",
    "Excelente custo-benefício"
  ],
}),

  criarProduto({
  id: 12,
  slug: "atheeri",
  nome: "Atheeri",
  marca: "Lattafa",
  preco: 550,
  imagem: "/Perfumes/aatheeri.jpeg",
  categoria: "Feminino",
  genero: "Feminino",
  selo: "Premium",
  avaliacao: 4.9,
  avaliacoes: 39,

  descricao:
    "Atheeri é uma fragrância feminina luxuosa da Lattafa que traduz delicadeza, sofisticação e feminilidade. Sua composição combina flores brancas cremosas, frutas suaves e um fundo quente de baunilha e almíscar, criando um perfume elegante, envolvente e extremamente refinado. É uma fragrância para mulheres que desejam transmitir charme, leveza e presença em qualquer ocasião.",

  familiaOlfativa: "Floral Oriental",

  notasTopo: [
    "Maracujá",
    "Gotas de Orvalho"
  ],

  notasCoracao: [
    "Orquídea",
    "Jasmim"
  ],

  notasBase: [
    "Baunilha",
    "Âmbar",
    "Madeiras"
  ],

  fixacao: 5,

  projecao: 4,

  ocasioes: [
    "Uso diário",
    "Encontros",
    "Eventos",
    "Jantares",
    "Ocasiões especiais"
  ],

  estacoes: [
    "Primavera",
    "Outono",
    "Verão"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Apresenta excelente desempenho, com fixação entre 8 e 10 horas na pele e projeção marcante nas primeiras horas, evoluindo para uma fragrância elegante e confortável durante todo o uso.",

  caracteristicas: [
    "Fragrância feminina premium",
    "Floral elegante e sofisticado",
    "Baunilha cremosa e envolvente",
    "Excelente fixação",
    "Ótima projeção",
    "Ideal para mulheres elegantes",
    "Perfeito para todas as ocasiões",
    "Alta qualidade da Lattafa"
  ],
}),

  criarProduto({
  id: 13,
  slug: "attar-al-wesal",
  nome: "Attar Al Wesal",
  marca: "Al Wataniah",
  preco: 250,
  imagem: "/Perfumes/attaralwesal.jpeg",
  categoria: "Unissex",
  genero: "Unissex",
  selo: "Mais Vendido",
  avaliacao: 4.9,
  avaliacoes: 214,

  descricao:
    "Attar Al Wesal é uma fragrância envolvente da Al Wataniah que combina frescor, especiarias e uma baunilha cremosa em uma composição extremamente sedutora. Inspirado no icônico Jean Paul Gaultier Ultra Male, entrega um perfume moderno, doce na medida certa e de excelente desempenho, ideal para quem gosta de receber elogios e marcar presença.",

  inspiradoEm: "Jean Paul Gaultier Ultra Male",

  familiaOlfativa: "Oriental Especiado",

  notasTopo: [
    "Pera",
    "Lavanda",
    "Hortelã",
    "Bergamota",
    "Limão"
  ],

  notasCoracao: [
    "Canela",
    "Sálvia Esclaréia",
    "Cominho"
  ],

  notasBase: [
    "Casca de Baunilha Negra",
    "Âmbar",
    "Patchouli",
    "Cedro"
  ],

  fixacao: 5,

  projecao: 5,

  ocasioes: [
    "Baladas",
    "Encontros",
    "Noite",
    "Eventos",
    "Ocasiões especiais"
  ],

  estacoes: [
    "Outono",
    "Inverno",
    "Noites de primavera"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Possui excelente desempenho, com fixação entre 8 e 12 horas na pele e projeção intensa nas primeiras horas. Evolui de um frescor frutado para um fundo quente de baunilha e especiarias, tornando-se extremamente agradável e sedutor.",

  caracteristicas: [
    "Inspirado no Jean Paul Gaultier Ultra Male",
    "Fragrância doce na medida certa",
    "Excelente fixação",
    "Projeção intensa",
    "Muito elogiado",
    "Ideal para noites e encontros",
    "Ótimo custo-benefício",
    "Um dos maiores sucessos da Al Wataniah"
  ],
}),

 criarProduto({
  id: 14,
  slug: "badee-al-oud-amethyst",
  nome: "Bade'e Al Oud Amethyst",
  marca: "Lattafa",
  preco: 300,
  imagem: "/Perfumes/ametist.jpeg",
  categoria: "Unissex",
  genero: "Unissex",
  selo: "Destaque",
  avaliacao: 4.9,
  avaliacoes: 187,

  descricao:
    "Bade'e Al Oud Amethyst é uma fragrância luxuosa da Lattafa que combina rosas intensas, oud e baunilha em uma composição sofisticada e envolvente. Inspirado no renomado Initio Atomic Rose, oferece um perfume marcante, elegante e extremamente sedutor, perfeito para quem aprecia fragrâncias florais orientais de alto desempenho.",

  inspiradoEm: "Initio Atomic Rose",

  familiaOlfativa: "Oriental Floral",

  notasTopo: [
    "Pimenta-rosa",
    "Bergamota"
  ],

  notasCoracao: [
    "Rosa Turca",
    "Rosa Búlgara",
    "Jasmim"
  ],

  notasBase: [
    "Oud",
    "Baunilha",
    "Âmbar"
  ],

  fixacao: 5,

  projecao: 5,

  ocasioes: [
    "Noite",
    "Encontros",
    "Eventos",
    "Jantares",
    "Ocasiões especiais"
  ],

  estacoes: [
    "Outono",
    "Inverno",
    "Noites de primavera"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Apresenta desempenho excepcional, com fixação entre 10 e 14 horas na pele e projeção intensa durante várias horas. Sua evolução destaca a rosa sofisticada envolvida por oud e baunilha, deixando um rastro elegante e memorável.",

  caracteristicas: [
    "Inspirado no Initio Atomic Rose",
    "Rosa intensa e sofisticada",
    "Oud elegante e refinado",
    "Excelente fixação",
    "Projeção intensa",
    "Fragrância unissex de luxo",
    "Ideal para clima frio",
    "Um dos maiores sucessos da linha Bade'e Al Oud"
  ],
}),

 criarProduto({
  id: 15,
  slug: "badee-al-oud-oud-for-glory",
  nome: "Bade'e Al Oud Oud for Glory",
  marca: "Lattafa",
  preco: 300,
  imagem: "/Perfumes/oudforglory.jpeg",
  categoria: "Unissex",
  genero: "Unissex",
  selo: "Mais vendido",
  avaliacao: 4.9,
  avaliacoes: 243,

  descricao:
    "Bade'e Al Oud Oud for Glory é uma fragrância intensa, sofisticada e extremamente marcante da Lattafa. Inspirado no renomado Initio Oud for Greatness, combina açafrão, noz-moscada, oud e patchouli em uma composição poderosa, elegante e envolvente. É um perfume de presença, ideal para quem busca luxo, personalidade e excelente desempenho.",

  inspiradoEm: "Initio Oud for Greatness",

  familiaOlfativa: "Oriental Amadeirado",

  notasTopo: [
    "Açafrão",
    "Lavanda",
    "Noz-moscada"
  ],

  notasCoracao: [
    "Oud",
    "Patchouli"
  ],

  notasBase: [
    "Oud",
    "Patchouli",
    "Almíscar"
  ],

  fixacao: 5,

  projecao: 5,

  ocasioes: [
    "Noite",
    "Eventos",
    "Ocasiões especiais",
    "Jantares",
    "Clima frio"
  ],

  estacoes: [
    "Outono",
    "Inverno"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Apresenta desempenho excepcional, com fixação entre 10 e 14 horas na pele e projeção intensa durante várias horas. Sua evolução evidencia o oud elegante envolvido por especiarias e notas amadeiradas, deixando um rastro sofisticado e memorável.",

  caracteristicas: [
    "Inspirado no Initio Oud for Greatness",
    "Fragrância intensa e luxuosa",
    "Oud sofisticado e refinado",
    "Excelente fixação",
    "Projeção extremamente marcante",
    "Ideal para clima frio",
    "Perfume de alta performance",
    "Um dos maiores sucessos da Lattafa"
  ],
}),
  criarProduto({
  id: 16,
  slug: "bareeq",
  nome: "Bareeq",
  marca: "Al Wataniah",
  preco: 250,
  imagem: "/Perfumes/bareeq.jpeg",
  categoria: "Unissex",
  genero: "Unissex",
  selo: "Excelente Custo-Benefício",
  avaliacao: 4.8,
  avaliacoes: 94,

  descricao:
    "Bareeq, da Al Wataniah, é uma fragrância unissex moderna e sofisticada que equilibra frescor, notas aromáticas e um fundo amadeirado elegante. Sua evolução é agradável e versátil, tornando-o uma excelente escolha tanto para o dia quanto para a noite. É um perfume que transmite limpeza, sofisticação e personalidade sem ser excessivo.",

  familiaOlfativa: "Aromático Amadeirado",

  notasTopo: [
    "Bergamota",
    "Mandarina",
    "Pimenta-rosa"
  ],

  notasCoracao: [
    "Lavanda",
    "Gerânio",
    "Notas Aromáticas"
  ],

  notasBase: [
    "Cedro",
    "Patchouli",
    "Âmbar",
    "Almíscar"
  ],

  fixacao: 4,

  projecao: 4,

  ocasioes: [
    "Uso diário",
    "Trabalho",
    "Passeios",
    "Encontros",
    "Eventos"
  ],

  estacoes: [
    "Primavera",
    "Verão",
    "Outono"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Apresenta ótima performance para uma fragrância versátil, com fixação entre 6 e 8 horas e projeção equilibrada, sendo ideal para quem procura um perfume elegante para diversas ocasiões.",

  caracteristicas: [
    "Fragrância unissex",
    "Perfil fresco e elegante",
    "Boa fixação",
    "Projeção equilibrada",
    "Ideal para uso diário",
    "Versátil para qualquer ocasião",
    "Excelente custo-benefício",
    "Qualidade reconhecida da Al Wataniah"
  ],
}),

  criarProduto({
  id: 17,
  slug: "club-de-nuit-woman",
  nome: "Club de Nuit Woman",
  marca: "Armaf",
  preco: 370,
  imagem: "/Perfumes/club-de-nuit-woman.jpg",
  categoria: "Feminino",
  genero: "Feminino",
  selo: "Premium",
  avaliacao: 4.9,
  avaliacoes: 168,

  descricao:
    "Club de Nuit Woman é uma fragrância feminina sofisticada, elegante e extremamente versátil. Inspirado no clássico Chanel Coco Mademoiselle, combina frutas cítricas, flores delicadas e um fundo quente de baunilha, patchouli e almíscar, criando um perfume refinado, moderno e muito elogiado. É uma excelente escolha para mulheres que desejam luxo, personalidade e excelente desempenho.",

  inspiradoEm: "Chanel Coco Mademoiselle",

  familiaOlfativa: "Floral Frutado",

  notasTopo: [
    "Laranja",
    "Bergamota",
    "Toranja",
    "Pêssego"
  ],

  notasCoracao: [
    "Rosa",
    "Jasmim",
    "Gerânio",
    "Lichia"
  ],

  notasBase: [
    "Patchouli",
    "Baunilha",
    "Almíscar",
    "Vetiver"
  ],

  fixacao: 5,

  projecao: 5,

  ocasioes: [
    "Trabalho",
    "Encontros",
    "Eventos",
    "Jantares",
    "Uso diário"
  ],

  estacoes: [
    "Primavera",
    "Outono",
    "Verão"
  ],

  volume: "105 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Possui excelente desempenho, permanecendo entre 8 e 12 horas na pele com projeção intensa nas primeiras horas. Evolui para um fundo elegante e sofisticado, deixando um rastro marcante sem ser excessivo.",

  caracteristicas: [
    "Inspirado no Chanel Coco Mademoiselle",
    "Fragrância elegante e sofisticada",
    "Excelente fixação",
    "Projeção marcante",
    "Muito elogiado pelo público feminino",
    "Versátil para todas as ocasiões",
    "Excelente custo-benefício",
    "Um dos maiores sucessos da Armaf"
  ],
}),

 criarProduto({
  id: 18,
  slug: "fakhar-silver",
  nome: "Fakhar Silver",
  marca: "Lattafa",
  preco: 300,
  imagem: "/Perfumes/fakharprata.jpeg",
  categoria: "Masculino",
  genero: "Masculino",
  selo: "Destaque",
  avaliacao: 4.8,
  avaliacoes: 96,

  descricao:
    "Fakhar Silver, da Lattafa, é uma fragrância masculina elegante, aromática e versátil. Sua abertura fresca e especiada evolui para um coração sofisticado de ervas aromáticas e flores, finalizando sobre uma base quente, amadeirada e levemente adocicada. É uma excelente escolha para homens que procuram um perfume moderno para o dia a dia, trabalho, encontros e eventos.",

  familiaOlfativa: "Aromático Amadeirado",

  notasTopo: [
    "Bergamota",
    "Notas marinhas",
    "Especiarias"
  ],

  notasCoracao: [
    "Sálvia-esclareia",
    "Gerânio",
    "Flor de laranjeira",
    "Coentro"
  ],

  notasBase: [
    "Fava-tonka",
    "Patchouli",
    "Baunilha",
    "Sândalo"
  ],

  fixacao: 4,

  projecao: 4,

  ocasioes: [
    "Uso diário",
    "Trabalho",
    "Encontros",
    "Eventos",
    "Passeios"
  ],

  estacoes: [
    "Primavera",
    "Verão",
    "Outono"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Apresenta boa fixação, com duração aproximada entre 6 e 9 horas na pele. A projeção é marcante nas primeiras horas e depois permanece mais próxima do corpo, mantendo uma presença elegante e confortável.",

  caracteristicas: [
    "Fragrância masculina moderna",
    "Perfil fresco, aromático e amadeirado",
    "Boa fixação",
    "Projeção equilibrada",
    "Versátil para diferentes ocasiões",
    "Adequado para ambientes profissionais",
    "Boa opção para climas quentes e amenos",
    "Excelente custo-benefício"
  ],
}),

 criarProduto({
  id: 19,
  slug: "fakhar-rose",
  nome: "Fakhar Rose",
  marca: "Lattafa",
  preco: 330,
  imagem: "/Perfumes/fakhar-rose.jpeg",
  imagemZoom: 1.08,
  categoria: "Feminino",
  genero: "Feminino",
  selo: "Destaque",
  avaliacao: 4.9,
  avaliacoes: 153,

  descricao:
    "Fakhar Rose é uma fragrância feminina sofisticada, delicada e extremamente elegante. Inspirado no renomado Givenchy L'Interdit Eau de Parfum, combina frutas, flores brancas e um fundo cremoso de baunilha e madeiras, criando um perfume marcante, feminino e muito versátil. É perfeito para mulheres que desejam transmitir elegância, confiança e personalidade.",

  inspiradoEm: "Givenchy L'Interdit Eau de Parfum",

  familiaOlfativa: "Floral Oriental",

  notasTopo: [
    "Romã",
    "Frutas",
    "Lírio"
  ],

  notasCoracao: [
    "Tuberosa",
    "Jasmim",
    "Gardênia",
    "Ylang-Ylang"
  ],

  notasBase: [
    "Baunilha",
    "Ambroxan",
    "Sândalo",
    "Almíscar Branco"
  ],

  fixacao: 5,

  projecao: 5,

  ocasioes: [
    "Uso diário",
    "Trabalho",
    "Encontros",
    "Eventos",
    "Ocasiões especiais"
  ],

  estacoes: [
    "Primavera",
    "Outono",
    "Verão"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Entrega excelente desempenho, permanecendo entre 8 e 12 horas na pele. Sua projeção é intensa nas primeiras horas e evolui para um rastro elegante e extremamente feminino.",

  caracteristicas: [
    "Inspirado no Givenchy L'Interdit Eau de Parfum",
    "Floral branco sofisticado",
    "Excelente fixação",
    "Projeção marcante",
    "Muito elogiado pelo público feminino",
    "Versátil para qualquer ocasião",
    "Elegante e moderno",
    "Excelente custo-benefício"
  ],
}),
  criarProduto({
  id: 20,
  slug: "intrude",
  nome: "L'Intrude",
  marca: "Maison Alhambra",
  preco: 250,
  imagem: "/Perfumes/intrude.jpeg",
  categoria: "Feminino",
  genero: "Feminino",
  selo: "Destaque",

  descricao:
    "L'Intrude, da Maison Alhambra, é uma fragrância feminina elegante, intensa e envolvente. Sua abertura frutada e luminosa evolui para um coração sofisticado de flores brancas, enquanto a base combina baunilha, patchouli, ambroxan e vetiver. O resultado é um perfume marcante e feminino, ideal para mulheres que desejam transmitir confiança, sofisticação e personalidade.",

  inspiradoEm: "Givenchy L'Interdit Eau de Parfum",

  familiaOlfativa: "Floral Branco",

  notasTopo: [
    "Pera",
    "Bergamota"
  ],

  notasCoracao: [
    "Tuberosa",
    "Flor de laranjeira",
    "Jasmim Sambac"
  ],

  notasBase: [
    "Patchouli",
    "Ambroxan",
    "Baunilha",
    "Vetiver"
  ],

  fixacao: 4,

  projecao: 4,

  ocasioes: [
    "Encontros",
    "Jantares",
    "Eventos",
    "Noite",
    "Ocasiões especiais"
  ],

  estacoes: [
    "Outono",
    "Inverno",
    "Primavera"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Apresenta boa fixação e projeção marcante nas primeiras horas. Com o passar do tempo, torna-se mais cremosa e confortável, mantendo o destaque das flores brancas sobre uma base quente e elegante.",

  caracteristicas: [
    "Inspirado no Givenchy L'Interdit Eau de Parfum",
    "Fragrância feminina sofisticada",
    "Flores brancas intensas e elegantes",
    "Fundo cremoso e levemente adocicado",
    "Boa fixação",
    "Projeção marcante",
    "Ideal para encontros e eventos",
    "Excelente custo-benefício"
  ],
}),

  criarProduto({
  id: 21,
  slug: "khamrah-qahwa",
  nome: "Khamrah Qahwa",
  marca: "Lattafa",
  preco: 280,
  imagem: "/Perfumes/khamrahqahwa.jpeg",
  categoria: "Unissex",
  genero: "Unissex",
  selo: "Mais vendido",
  avaliacao: 5.0,
  avaliacoes: 286,

  descricao:
    "Khamrah Qahwa é uma fragrância unissex intensa, sofisticada e extremamente envolvente. Inspirado na riqueza da perfumaria oriental, combina especiarias quentes, canela, café, baunilha e madeiras nobres, criando um perfume gourmand elegante e viciante. É a escolha perfeita para quem aprecia fragrâncias marcantes, luxuosas e de excelente desempenho.",

  familiaOlfativa: "Oriental Gourmand",

  notasTopo: [
    "Canela",
    "Cardamomo",
    "Gengibre"
  ],

  notasCoracao: [
    "Pralinê",
    "Frutas cristalizadas",
    "Flores Brancas"
  ],

  notasBase: [
    "Café",
    "Baunilha",
    "Fava-tonka",
    "Benjoim",
    "Almíscar"
  ],

  fixacao: 5,

  projecao: 5,

  ocasioes: [
    "Noite",
    "Encontros",
    "Jantares",
    "Eventos",
    "Clima frio"
  ],

  estacoes: [
    "Outono",
    "Inverno"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Entrega desempenho excepcional, permanecendo entre 10 e 14 horas na pele e com projeção intensa durante várias horas. O café aparece de forma elegante, equilibrando a doçura da baunilha e tornando a evolução da fragrância extremamente sofisticada.",

  caracteristicas: [
    "Fragrância gourmand premium",
    "Café sofisticado e envolvente",
    "Baunilha cremosa",
    "Excelente fixação",
    "Projeção intensa",
    "Ideal para clima frio",
    "Muito elogiado pela performance",
    "Um dos maiores sucessos da Lattafa"
  ],
}),

  criarProduto({
  id: 22,
  slug: "liquid-brun",
  nome: "Liquid Brun",
  marca: "French Avenue",
  preco: 450,
  imagem: "/Perfumes/liquidbrun.jpeg",
  categoria: "Masculino",
  genero: "Masculino",
  selo: "Premium",
  avaliacao: 4.9,
  avaliacoes: 172,

  descricao:
    "Liquid Brun, da French Avenue, é uma fragrância masculina quente, sofisticada e envolvente. Sua abertura combina canela, cardamomo, bergamota e flor de laranjeira, evoluindo para um coração cremoso de baunilha Bourbon e elemi. No fundo, pralinê, madeira guaiac, ambroxan e almíscar criam um aroma elegante, adocicado e marcante, ideal para homens que apreciam perfumes intensos e refinados.",

  inspiradoEm: "Parfums de Marly Althaïr",

  familiaOlfativa: "Âmbar Baunilha",

  notasTopo: [
    "Canela",
    "Flor de laranjeira",
    "Cardamomo",
    "Bergamota"
  ],

  notasCoracao: [
    "Baunilha Bourbon",
    "Elemi"
  ],

  notasBase: [
    "Pralinê",
    "Ambroxan",
    "Madeira guaiac",
    "Almíscar"
  ],

  fixacao: 5,

  projecao: 5,

  ocasioes: [
    "Noite",
    "Encontros",
    "Jantares",
    "Eventos",
    "Ocasiões especiais"
  ],

  estacoes: [
    "Outono",
    "Inverno",
    "Noites de primavera"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Apresenta desempenho intenso, com excelente fixação e projeção marcante nas primeiras horas. Sua evolução permanece quente, cremosa e envolvente, destacando principalmente a baunilha Bourbon, a canela e o pralinê.",

  caracteristicas: [
    "Inspirado no Parfums de Marly Althaïr",
    "Baunilha Bourbon cremosa e sofisticada",
    "Perfil quente, especiado e adocicado",
    "Excelente fixação",
    "Projeção intensa",
    "Ideal para noites e clima frio",
    "Fragrância masculina premium",
    "Muito elogiado pelo aroma envolvente"
  ],
}),

  criarProduto({
  id: 23,
  slug: "musamam",
  nome: "Musamam",
  marca: "Lattafa",
  preco: 420,
  imagem: "/Perfumes/musamam.jpeg",
  categoria: "Unissex",
  genero: "Unissex",
  selo: "Premium",
  avaliacao: 4.9,
  avaliacoes: 98,

  descricao:
    "Musamam é uma fragrância unissex luxuosa da Lattafa que combina especiarias, frutas, madeiras nobres e âmbar em uma composição sofisticada e moderna. Seu aroma evolui de uma abertura vibrante para um coração elegante e um fundo quente e envolvente, proporcionando uma experiência olfativa refinada e de excelente desempenho.",

  familiaOlfativa: "Oriental Amadeirado",

  notasTopo: [
    "Mandarina Italiana",
    "Lavanda",
    "Açafrão"
  ],

  notasCoracao: [
    "Cedro da Virgínia",
    "Âmbar",
    "Gerânio"
  ],

  notasBase: [
    "Incenso",
    "Madeira Akigalawood",
    "Ládano"
  ],

  fixacao: 5,

  projecao: 5,

  ocasioes: [
    "Noite",
    "Eventos",
    "Jantares",
    "Ocasiões especiais",
    "Clima frio"
  ],

  estacoes: [
    "Outono",
    "Inverno",
    "Noites de primavera"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Entrega excelente desempenho, permanecendo entre 9 e 12 horas na pele, com projeção intensa nas primeiras horas. Sua evolução evidencia as madeiras nobres, o âmbar e o incenso, proporcionando um aroma sofisticado e memorável.",

  caracteristicas: [
    "Fragrância premium da Lattafa",
    "Perfil oriental elegante",
    "Madeiras nobres e incenso refinado",
    "Excelente fixação",
    "Projeção intensa",
    "Ideal para ocasiões especiais",
    "Aroma sofisticado e exclusivo",
    "Excelente qualidade de construção"
  ],
}),

  criarProduto({
  id: 24,
  slug: "no-2-men",
  nome: "No. 2 Men",
  marca: "Perfume Árabe",
  preco: 250,
  imagem: "/Perfumes/no.2men.jpeg",
  categoria: "Masculino",
  genero: "Masculino",
  selo: "Exclusivo",
  avaliacao: 4.7,
  avaliacoes: 54,

  descricao:
    "No. 2 Men é uma fragrância masculina moderna e versátil, desenvolvida para homens que apreciam elegância e discrição. Sua combinação de notas cítricas, aromáticas e amadeiradas proporciona uma sensação de frescor e sofisticação, tornando-o ideal para o uso diário e para diversas ocasiões.",

  familiaOlfativa: "Aromático Amadeirado",

  notasTopo: [
    "Bergamota",
    "Limão",
    "Pimenta-preta"
  ],

  notasCoracao: [
    "Lavanda",
    "Gerânio",
    "Sálvia"
  ],

  notasBase: [
    "Cedro",
    "Vetiver",
    "Âmbar",
    "Almíscar"
  ],

  fixacao: 4,

  projecao: 4,

  ocasioes: [
    "Uso diário",
    "Trabalho",
    "Encontros",
    "Passeios",
    "Eventos"
  ],

  estacoes: [
    "Primavera",
    "Verão",
    "Outono"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Apresenta boa fixação, permanecendo aproximadamente entre 6 e 8 horas na pele, com projeção equilibrada durante as primeiras horas e evolução confortável para o uso diário.",

  caracteristicas: [
    "Fragrância masculina versátil",
    "Perfil fresco e amadeirado",
    "Boa fixação",
    "Projeção equilibrada",
    "Ideal para uso diário",
    "Excelente para ambientes profissionais",
    "Fácil de agradar",
    "Ótimo custo-benefício"
  ],
}),

  criarProduto({
  id: 25,
  slug: "pisa",
  nome: "Pisa",
  marca: "Lattafa",
  preco: 400,
  imagem: "/Perfumes/pisaa.jpeg",
  categoria: "Masculino",
  genero: "Masculino",
  selo: "Premium",
  avaliacao: 4.9,
  avaliacoes: 87,

  descricao:
    "Pisa é uma fragrância masculina premium da Lattafa que combina frescor cítrico, especiarias elegantes e madeiras nobres em uma composição sofisticada e contemporânea. Seu aroma transmite luxo, confiança e refinamento, sendo uma excelente escolha para homens que procuram um perfume versátil, marcante e de alta qualidade.",

  familiaOlfativa: "Cítrico Aromático Amadeirado",

  notasTopo: [
    "Bergamota",
    "Limão",
    "Mandarina",
    "Toranja"
  ],

  notasCoracao: [
    "Lavanda",
    "Gengibre",
    "Gerânio"
  ],

  notasBase: [
    "Sândalo",
    "Cedro",
    "Âmbar",
    "Vetiver"
  ],

  fixacao: 5,

  projecao: 4,

  ocasioes: [
    "Uso diário",
    "Trabalho",
    "Eventos",
    "Encontros",
    "Ocasiões especiais"
  ],

  estacoes: [
    "Primavera",
    "Verão",
    "Outono"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Apresenta excelente desempenho, com fixação entre 8 e 10 horas na pele e projeção marcante nas primeiras horas. Sua evolução mantém o equilíbrio entre frescor cítrico e madeiras elegantes, tornando-o extremamente versátil.",

  caracteristicas: [
    "Fragrância premium da Lattafa",
    "Perfil cítrico e sofisticado",
    "Excelente fixação",
    "Ótima projeção",
    "Ideal para uso diário e eventos",
    "Elegante e moderno",
    "Muito versátil",
    "Excelente qualidade de construção"
  ],
}),

  criarProduto({
  id: 26,
  slug: "rose-seduction-vip",
  nome: "Rose Seduction VIP",
  marca: "Perfume Árabe",
  preco: 260,
  imagem: "/Perfumes/roseseductionvip.jpeg",
  categoria: "Feminino",
  genero: "Feminino",
  selo: "Elegante",
  avaliacao: 4.8,
  avaliacoes: 92,

  descricao:
    "Rose Seduction VIP é uma fragrância feminina sofisticada, moderna e envolvente. Inspirado no famoso Carolina Herrera 212 VIP Rosé, combina frutas vibrantes, flores delicadas e um fundo amadeirado com almíscar, criando um perfume elegante, versátil e perfeito para mulheres que gostam de deixar sua marca por onde passam.",

  inspiradoEm: "Carolina Herrera 212 VIP Rosé",

  familiaOlfativa: "Floral Frutado",

  notasTopo: [
    "Champagne Rosé",
    "Pimenta-rosa",
    "Notas Frutadas"
  ],

  notasCoracao: [
    "Flor de Pêssego",
    "Rosa",
    "Flores Brancas"
  ],

  notasBase: [
    "Almíscar Branco",
    "Notas Amadeiradas",
    "Âmbar"
  ],

  fixacao: 4,

  projecao: 4,

  ocasioes: [
    "Encontros",
    "Festas",
    "Eventos",
    "Uso diário",
    "Noite"
  ],

  estacoes: [
    "Primavera",
    "Verão",
    "Outono"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Apresenta boa fixação, permanecendo entre 6 e 8 horas na pele, com projeção marcante nas primeiras horas. Evolui para um aroma floral elegante e confortável, ideal para diversas ocasiões.",

  caracteristicas: [
    "Inspirado no Carolina Herrera 212 VIP Rosé",
    "Fragrância feminina moderna",
    "Perfil floral frutado elegante",
    "Boa fixação",
    "Projeção equilibrada",
    "Ideal para festas e encontros",
    "Versátil para o dia e a noite",
    "Excelente custo-benefício"
  ],
}),

  criarProduto({
  id: 27,
  slug: "royal-amber",
  nome: "Royal Amber",
  marca: "Orientica",
  preco: 650,
  imagem: "/Perfumes/royalamberr.jpeg",
  categoria: "Unissex",
  genero: "Unissex",
  selo: "Luxo",
  avaliacao: 4.9,
  avaliacoes: 126,

  descricao:
    "Royal Amber, da Orientica, é uma fragrância unissex luxuosa, envolvente e sofisticada. Sua abertura fresca de bergamota e notas verdes evolui para um coração frutado e adocicado, no qual melão, abacaxi, âmbar e acordes gourmand criam uma sensação cremosa e elegante. A base de baunilha, almíscar e madeiras proporciona conforto, presença e uma assinatura olfativa refinada.",

  familiaOlfativa: "Âmbar Baunilha",

  notasTopo: [
    "Bergamota",
    "Notas verdes"
  ],

  notasCoracao: [
    "Melão",
    "Abacaxi",
    "Acorde gourmand",
    "Âmbar"
  ],

  notasBase: [
    "Notas amadeiradas",
    "Baunilha",
    "Almíscar"
  ],

  fixacao: 5,

  projecao: 5,

  ocasioes: [
    "Eventos",
    "Encontros",
    "Jantares",
    "Noite",
    "Ocasiões especiais"
  ],

  estacoes: [
    "Outono",
    "Inverno",
    "Noites de primavera"
  ],

  volume: "80 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Apresenta excelente desempenho, com longa duração na pele e projeção marcante nas primeiras horas. Sua evolução mantém o equilíbrio entre frutas, âmbar, baunilha e madeiras, deixando um rastro sofisticado, cremoso e elegante.",

  caracteristicas: [
    "Fragrância unissex luxuosa",
    "Perfil frutado, ambarado e cremoso",
    "Baunilha elegante e envolvente",
    "Excelente fixação",
    "Projeção marcante",
    "Ideal para ocasiões especiais",
    "Apresentação premium de 80 ml",
    "Um dos destaques da Orientica"
  ],
}),

  criarProduto({
  id: 28,
  slug: "sabah-al-ward",
  nome: "Sabah Al Ward",
  marca: "Al Wataniah",
  preco: 250,
  imagem: "/Perfumes/sabahaaw.jpeg",
  categoria: "Feminino",
  genero: "Feminino",
  selo: "Favorito das Clientes",
  avaliacao: 4.9,
  avaliacoes: 118,

  descricao:
    "Sabah Al Ward é uma fragrância feminina elegante, delicada e envolvente da Al Wataniah. Inspirado no Valentino Donna Born In Roma, combina frutas suculentas, flores brancas e um fundo cremoso de baunilha e madeiras, resultando em um perfume moderno, sofisticado e extremamente feminino. É perfeito para mulheres que desejam deixar uma impressão marcante com delicadeza e charme.",

  inspiradoEm: "Valentino Donna Born In Roma",

  familiaOlfativa: "Floral Oriental",

  notasTopo: [
    "Mandarina",
    "Pimenta-rosa",
    "Groselha-preta"
  ],

  notasCoracao: [
    "Jasmim Sambac",
    "Jasmim",
    "Flor de Laranjeira"
  ],

  notasBase: [
    "Baunilha Bourbon",
    "Madeiras de Cashmere",
    "Madeiras Nobres"
  ],

  fixacao: 5,

  projecao: 4,

  ocasioes: [
    "Uso diário",
    "Encontros",
    "Eventos",
    "Jantares",
    "Ocasiões especiais"
  ],

  estacoes: [
    "Primavera",
    "Outono",
    "Verão"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Possui excelente desempenho, com fixação entre 8 e 10 horas na pele e projeção marcante nas primeiras horas. Sua evolução revela um floral branco sofisticado sobre uma base cremosa e elegante de baunilha.",

  caracteristicas: [
    "Inspirado no Valentino Donna Born In Roma",
    "Floral moderno e sofisticado",
    "Baunilha cremosa e elegante",
    "Excelente fixação",
    "Ótima projeção",
    "Ideal para qualquer ocasião",
    "Muito elogiado pelo público feminino",
    "Excelente custo-benefício"
  ],
}),

 criarProduto({
  id: 29,
  slug: "salvo-elixir",
  nome: "Salvo Elixir",
  marca: "Maison Alhambra",
  preco: 270,
  imagem: "/Perfumes/salvo-elixir.jpg",
  categoria: "Masculino",
  genero: "Masculino",
  selo: "Destaque",
  avaliacao: 4.9,
  avaliacoes: 154,

  descricao:
    "Salvo Elixir é uma fragrância masculina intensa, sofisticada e de personalidade marcante. Inspirado no consagrado Dior Sauvage Elixir, combina especiarias, lavanda aromática e madeiras nobres em uma composição elegante e extremamente envolvente. Seu excelente desempenho faz dele uma das melhores opções para quem procura um perfume premium com ótimo custo-benefício.",

  inspiradoEm: "Dior Sauvage Elixir",

  familiaOlfativa: "Aromático Especiado",

  notasTopo: [
    "Canela",
    "Noz-moscada",
    "Cardamomo",
    "Toranja"
  ],

  notasCoracao: [
    "Lavanda"
  ],

  notasBase: [
    "Alcaçuz",
    "Âmbar",
    "Patchouli",
    "Vetiver"
  ],

  fixacao: 5,

  projecao: 5,

  ocasioes: [
    "Noite",
    "Encontros",
    "Eventos",
    "Jantares",
    "Ocasiões especiais"
  ],

  estacoes: [
    "Outono",
    "Inverno",
    "Noites de primavera"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Entrega excelente desempenho, permanecendo entre 10 e 12 horas na pele, com projeção intensa nas primeiras horas. Sua evolução destaca a lavanda aromática envolvida por especiarias e madeiras, deixando um rastro sofisticado e muito marcante.",

  caracteristicas: [
    "Inspirado no Dior Sauvage Elixir",
    "Fragrância intensa e sofisticada",
    "Excelente fixação",
    "Projeção intensa",
    "Ideal para noites e clima frio",
    "Muito elogiado pela performance",
    "Ótimo custo-benefício",
    "Um dos destaques da Maison Alhambra"
  ],
}),
  criarProduto({
  id: 30,
  slug: "shaghaf-al-ward",
  nome: "Shaghaf Al Ward",
  marca: "Al Wataniah",
  preco: 250,
  imagem: "/Perfumes/shagafwa.jpeg",
  categoria: "Feminino",
  genero: "Feminino",
  selo: "Favorito das Clientes",
  avaliacao: 4.9,
  avaliacoes: 132,

  descricao:
    "Shaghaf Al Ward é uma fragrância feminina sofisticada e envolvente da Al Wataniah. Inspirado no clássico Lancôme La Vie Est Belle, combina frutas vibrantes, um rico buquê floral e um fundo quente de baunilha, patchouli e pralinê. O resultado é um perfume elegante, marcante e extremamente feminino, perfeito para mulheres que gostam de receber elogios.",

  inspiradoEm: "Lancôme La Vie Est Belle",

  familiaOlfativa: "Floral Oriental",

  notasTopo: [
    "Bergamota",
    "Pera",
    "Frutas Vermelhas"
  ],

  notasCoracao: [
    "Rosa",
    "Jasmim",
    "Flor de Laranjeira"
  ],

  notasBase: [
    "Baunilha",
    "Patchouli",
    "Pralinê",
    "Almíscar"
  ],

  fixacao: 5,

  projecao: 5,

  ocasioes: [
    "Uso diário",
    "Encontros",
    "Eventos",
    "Jantares",
    "Ocasiões especiais"
  ],

  estacoes: [
    "Outono",
    "Inverno",
    "Primavera"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Possui excelente desempenho, com fixação entre 8 e 12 horas na pele e projeção intensa nas primeiras horas. Evolui para um fundo doce, elegante e confortável, deixando um rastro marcante e sofisticado.",

  caracteristicas: [
    "Inspirado no Lancôme La Vie Est Belle",
    "Floral oriental elegante",
    "Baunilha cremosa e envolvente",
    "Excelente fixação",
    "Projeção intensa",
    "Muito elogiado pelo público feminino",
    "Ideal para ocasiões especiais",
    "Excelente custo-benefício"
  ],
}),

  criarProduto({
  id: 31,
  slug: "the-kingdom",
  nome: "The Kingdom",
  marca: "Lattafa",
  preco: 350,
  imagem: "/Perfumes/thekingdon.jpeg",
  categoria: "Masculino",
  genero: "Masculino",
  selo: "Lançamento",
  avaliacao: 5.0,
  avaliacoes: 138,

  descricao:
    "The Kingdom é uma fragrância masculina sofisticada da Lattafa que combina frescor aromático, especiarias quentes e uma base intensa de baunilha e fava-tonka. Inspirado no Jean Paul Gaultier Le Male Elixir, entrega um perfume moderno, elegante e extremamente envolvente, ideal para homens que procuram presença marcante e excelente desempenho.",

  inspiradoEm: "Jean Paul Gaultier Le Male Elixir",

  familiaOlfativa: "Oriental Fougère",

  notasTopo: [
    "Lavanda",
    "Hortelã",
    "Sálvia"
  ],

  notasCoracao: [
    "Baunilha",
    "Tabaco",
    "Flor de Laranjeira"
  ],

  notasBase: [
    "Fava-tonka",
    "Benjoim",
    "Âmbar"
  ],

  fixacao: 5,

  projecao: 5,

  ocasioes: [
    "Noite",
    "Encontros",
    "Jantares",
    "Eventos",
    "Ocasiões especiais"
  ],

  estacoes: [
    "Outono",
    "Inverno",
    "Noites de primavera"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Apresenta excelente desempenho, permanecendo entre 10 e 12 horas na pele, com projeção intensa nas primeiras horas. Sua evolução evidencia a baunilha cremosa, a fava-tonka e o tabaco, resultando em um aroma quente, sedutor e extremamente elegante.",

  caracteristicas: [
    "Inspirado no Jean Paul Gaultier Le Male Elixir",
    "Baunilha cremosa e sofisticada",
    "Tabaco elegante e envolvente",
    "Excelente fixação",
    "Projeção intensa",
    "Ideal para noites e clima frio",
    "Fragrância premium da Lattafa",
    "Um dos lançamentos mais elogiados da marca"
  ],
}),

  criarProduto({
  id: 32,
  slug: "yara-branco",
  nome: "Yara Branco",
  marca: "Lattafa",
  preco: 300,
  imagem: "/Perfumes/yarabranco.jpeg",
  categoria: "Feminino",
  genero: "Feminino",
  selo: "Destaque",
  avaliacao: 4.9,
  avaliacoes: 164,

  descricao:
    "Yara Branco (Yara Moi) é uma fragrância feminina sofisticada da Lattafa que combina flores delicadas, frutas e uma base cremosa de baunilha e almíscar. Seu aroma transmite elegância, feminilidade e conforto, tornando-se uma excelente escolha para mulheres que procuram um perfume refinado, versátil e extremamente agradável.",

  familiaOlfativa: "Floral Frutado Gourmand",

  notasTopo: [
    "Jasmim",
    "Pêssego"
  ],

  notasCoracao: [
    "Caramelo",
    "Âmbar"
  ],

  notasBase: [
    "Sândalo",
    "Baunilha",
    "Patchouli"
  ],

  fixacao: 5,

  projecao: 4,

  ocasioes: [
    "Uso diário",
    "Trabalho",
    "Encontros",
    "Eventos",
    "Ocasiões especiais"
  ],

  estacoes: [
    "Primavera",
    "Outono",
    "Inverno"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Possui excelente desempenho, com fixação entre 8 e 10 horas na pele e projeção marcante nas primeiras horas. Sua evolução destaca o equilíbrio entre o floral delicado, a cremosidade da baunilha e o toque quente do âmbar.",

  caracteristicas: [
    "Fragrância feminina sofisticada",
    "Perfil floral cremoso",
    "Baunilha elegante e envolvente",
    "Excelente fixação",
    "Ótima projeção",
    "Ideal para uso diário e ocasiões especiais",
    "Muito elogiado pelo público feminino",
    "Excelente custo-benefício"
  ],
}),

  criarProduto({
  id: 33,
  slug: "yara-elixir",
  nome: "Yara Elixir",
  marca: "Lattafa",
  preco: 350,
  imagem: "/Perfumes/yaraelixir.jpeg",
  categoria: "Feminino",
  genero: "Feminino",
  selo: "Lançamento",
  avaliacao: 5.0,
  avaliacoes: 102,

  descricao:
    "Yara Elixir é uma fragrância feminina sofisticada da Lattafa que combina frutas suculentas, flores delicadas e uma base cremosa de baunilha e almíscar. Moderna, elegante e extremamente envolvente, é perfeita para mulheres que procuram um perfume marcante, doce na medida certa e com excelente desempenho.",

  familiaOlfativa: "Floral Gourmand",

  notasTopo: [
    "Tangerina",
    "Pera",
    "Pimenta-rosa"
  ],

  notasCoracao: [
    "Jasmim",
    "Flor de Laranjeira",
    "Rosa"
  ],

  notasBase: [
    "Baunilha",
    "Almíscar",
    "Âmbar",
    "Sândalo"
  ],

  fixacao: 5,

  projecao: 5,

  ocasioes: [
    "Uso diário",
    "Encontros",
    "Eventos",
    "Jantares",
    "Ocasiões especiais"
  ],

  estacoes: [
    "Primavera",
    "Outono",
    "Inverno"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Possui excelente desempenho, com fixação entre 8 e 12 horas na pele e projeção intensa nas primeiras horas. Sua evolução destaca a combinação entre frutas, flores e uma baunilha cremosa, deixando um rastro elegante e extremamente feminino.",

  caracteristicas: [
    "Lançamento da Lattafa",
    "Floral gourmand moderno",
    "Baunilha cremosa e sofisticada",
    "Excelente fixação",
    "Projeção intensa",
    "Ideal para qualquer ocasião",
    "Muito elogiado pelo público feminino",
    "Excelente qualidade e custo-benefício"
  ],
}),
  criarProduto({
  id: 34,
  slug: "asad-elixir",
  nome: "Asad Elixir",
  marca: "Lattafa",
  preco: 350,
  imagem: "/Perfumes/asadelixir.jpeg",
  categoria: "Masculino",
  genero: "Masculino",
  selo: "Lançamento",
  avaliacao: 4.9,
  avaliacoes: 94,

  descricao:
    "Asad Elixir é a evolução da consagrada linha Asad da Lattafa. Mais refinado, intenso e sofisticado, combina especiarias, lavanda aromática, madeiras nobres e baunilha em uma fragrância extremamente elegante e envolvente. Inspirado no Dior Sauvage Elixir, é perfeito para homens que procuram presença marcante, excelente desempenho e um perfume que transmite luxo e confiança.",

  inspiradoEm: "Dior Sauvage Elixir",

  familiaOlfativa: "Oriental Especiado",

  notasTopo: [
    "Pimenta-preta",
    "Bergamota",
    "Canela"
  ],

  notasCoracao: [
    "Lavanda",
    "Patchouli",
    "Incenso"
  ],

  notasBase: [
    "Baunilha",
    "Âmbar",
    "Madeiras Nobres",
    "Benjoim"
  ],

  fixacao: 5,

  projecao: 5,

  ocasioes: [
    "Noite",
    "Encontros",
    "Eventos",
    "Jantares",
    "Ocasiões especiais",
    "Clima frio"
  ],

  estacoes: [
    "Outono",
    "Inverno",
    "Noites de primavera"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Apresenta excelente desempenho, permanecendo entre 10 e 12 horas na pele, com projeção intensa nas primeiras horas. Sua evolução evidencia as especiarias, a lavanda e a baunilha sobre um fundo amadeirado elegante, proporcionando um aroma sofisticado e extremamente marcante.",

  caracteristicas: [
    "Inspirado no Dior Sauvage Elixir",
    "Lançamento da Lattafa",
    "Fragrância intensa e sofisticada",
    "Excelente fixação",
    "Projeção intensa",
    "Ideal para noites e clima frio",
    "Muito elogiado pelo desempenho",
    "Excelente custo-benefício"
  ],
}),
    criarProduto({
  id: 35,
  slug: "maahir-legacy",
  nome: "Maahir Legacy",
  marca: "Lattafa",
  preco: 350,
  imagem: "/Perfumes/maahir-legacy.jpg",
  categoria: "Masculino",
  genero: "Masculino",
  selo: "Novo",
  avaliacao: 4.9,
  avaliacoes: 0,

  descricao:
    "Maahir Legacy é uma fragrância masculina fresca, sofisticada e extremamente versátil. Sua abertura cítrica e aromática combina lima, hortelã, toranja, lavanda e abacaxi, evoluindo para um coração especiado e herbal. O fundo amadeirado, almiscarado e levemente terroso proporciona elegância, presença e excelente equilíbrio para o uso diário.",

  inspiradoEm: "Parfums de Marly Sedley",

  familiaOlfativa: "Cítrico Aromático",

  notasTopo: [
    "Lima",
    "Hortelã",
    "Toranja",
    "Lavanda",
    "Abacaxi"
  ],

  notasCoracao: [
    "Pimenta-preta",
    "Bagas de zimbro",
    "Alecrim",
    "Gerânio",
    "Incenso"
  ],

  notasBase: [
    "Ambroxan",
    "Vetiver",
    "Musgo de carvalho",
    "Fava-tonka",
    "Cashmeran"
  ],

  fixacao: 4,

  projecao: 4,

  ocasioes: [
    "Dia a dia",
    "Trabalho",
    "Passeios",
    "Encontros",
    "Eventos durante o dia"
  ],

  estacoes: [
    "Primavera",
    "Verão",
    "Outono"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Apresenta boa fixação para uma fragrância fresca, com duração aproximada entre 6 e 8 horas na pele. A projeção é marcante nas primeiras horas e depois evolui de maneira limpa, elegante e confortável.",

  caracteristicas: [
    "Inspirado no Parfums de Marly Sedley",
    "Fragrância fresca e sofisticada",
    "Abertura cítrica e aromática",
    "Perfil limpo e elegante",
    "Boa fixação",
    "Projeção equilibrada",
    "Excelente para dias quentes",
    "Ideal para trabalho e uso diário"
  ],
}),

 criarProduto({
  id: 36,
  slug: "salvo",
  nome: "Salvo",
  marca: "Maison Alhambra",
  preco: 260,
  imagem: "/Perfumes/salvo.jpg",
  categoria: "Masculino",
  genero: "Masculino",
  selo: "Novo",
  avaliacao: 4.9,
  avaliacoes: 0,

  descricao:
    "Salvo é uma fragrância masculina elegante, fresca e extremamente versátil da Maison Alhambra. Inspirado no icônico Dior Sauvage Eau de Parfum, combina notas cítricas, aromáticas e amadeiradas em uma composição moderna, sofisticada e marcante. É um perfume ideal para quem procura versatilidade, excelente desempenho e um aroma que agrada facilmente.",

  inspiradoEm: "Dior Sauvage Eau de Parfum",

  familiaOlfativa: "Aromático Especiado",

  notasTopo: [
    "Bergamota",
    "Pimenta",
    "Notas Cítricas"
  ],

  notasCoracao: [
    "Lavanda",
    "Gerânio",
    "Elemi"
  ],

  notasBase: [
    "Ambroxan",
    "Cedro",
    "Ládano"
  ],

  fixacao: 5,

  projecao: 4,

  ocasioes: [
    "Dia a dia",
    "Trabalho",
    "Encontros",
    "Eventos",
    "Noite"
  ],

  estacoes: [
    "Primavera",
    "Verão",
    "Outono"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Apresenta excelente desempenho para uma fragrância fresca, permanecendo entre 7 e 10 horas na pele. Sua projeção é marcante nas primeiras horas e evolui de forma elegante e confortável durante todo o dia.",

  caracteristicas: [
    "Inspirado no Dior Sauvage Eau de Parfum",
    "Fragrância fresca e sofisticada",
    "Excelente para uso diário",
    "Ótima fixação",
    "Boa projeção",
    "Muito versátil",
    "Ideal para todas as idades",
    "Excelente custo-benefício"
  ],
}),

criarProduto({
  id: 37,
  slug: "bad-homme",
  nome: "B.A.D Homme",
  marca: "Maison Alhambra",
  preco: 260,
  imagem: "/Perfumes/bad-homme.jpg",
  categoria: "Masculino",
  genero: "Masculino",
  selo: "Novidade",
  avaliacao: 4.9,
  avaliacoes: 0,

  descricao:
    "B.A.D Homme, da Maison Alhambra, é uma fragrância masculina intensa, moderna e sedutora. Sua abertura combina o frescor do limão com o toque vibrante das pimentas branca e rosa. No coração, o cedro e a sálvia acrescentam elegância aromática e profundidade. A base de cacau e fava-tonka entrega um acabamento quente, levemente adocicado e envolvente. É uma excelente opção para homens que procuram presença, sofisticação e personalidade, especialmente em encontros, eventos e ocasiões noturnas.",

  inspiradoEm: "Carolina Herrera Bad Boy",

  familiaOlfativa: "Âmbar Especiado",

  notasTopo: [
    "Limão",
    "Pimenta-branca",
    "Pimenta-rosa"
  ],

  notasCoracao: [
    "Cedro",
    "Sálvia"
  ],

  notasBase: [
    "Cacau",
    "Fava-tonka"
  ],

  fixacao: 4,
  projecao: 4,

  duracao: "6 a 8 horas",

  rastro: "Moderado a marcante",

  ocasioes: [
    "Encontros",
    "Eventos",
    "Festas",
    "Jantares",
    "Noite",
    "Ocasiões especiais"
  ],

  estacoes: [
    "Outono",
    "Inverno",
    "Primavera"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Apresenta boa fixação, com duração aproximada entre 6 e 8 horas na pele. A projeção é mais marcante nas primeiras horas e depois evolui para um rastro quente, elegante e envolvente.",

  caracteristicas: [
    "Inspirado no Carolina Herrera Bad Boy",
    "Perfil quente, especiado e sedutor",
    "Cacau e fava-tonka envolventes",
    "Boa fixação",
    "Projeção marcante nas primeiras horas",
    "Ideal para encontros e eventos noturnos",
    "Fragrância masculina moderna",
    "Excelente custo-benefício"
  ],

  performance: {
    intensidade: 4,
    versatilidade: 4,
    elegancia: 4,
    frescor: 2,
    docura: 4
  },

  usoIdeal: {
    estacoes: [
      "Outono",
      "Inverno",
      "Primavera"
    ],

    periodos: [
      "Noite",
      "Fim de tarde"
    ],

    climas: [
      "Frio",
      "Ameno",
      "Ambientes climatizados"
    ]
  },

  perfil: {
    estilos: [
      "Sedutor",
      "Moderno",
      "Elegante",
      "Quente",
      "Marcante"
    ],

    publico:
      "Indicado para homens que gostam de fragrâncias especiadas, quentes, modernas e com presença.",

    impressao:
      "Uma abertura picante e vibrante que evolui para um fundo quente, adocicado e envolvente."
  },

  nossaAvaliacao:
    "O B.A.D Homme entrega uma combinação muito agradável entre especiarias, madeiras, cacau e fava-tonka. É uma ótima escolha para encontros, festas e ocasiões noturnas, oferecendo um perfil moderno e sedutor com excelente custo-benefício.",

  semelhantes: [
    "Carolina Herrera Bad Boy",
    "Azzaro The Most Wanted",
    "Azzaro Wanted by Night"
  ]
}),

criarProduto({
  id: 38,
  slug: "ameerat-al-arab",
  nome: "Ameerat Al Arab",
  marca: "Asdaaf",
  preco: 260,
  imagem: "/Perfumes/ameeratalarab.jpeg",
  categoria: "Feminino",
  genero: "Feminino",
  selo: "Novo",
  avaliacao: 4.9,
  avaliacoes: 0,

  descricao:
    "Ameerat Al Arab, da Asdaaf, é uma fragrância feminina fresca, elegante e sofisticada. Sua abertura cítrica combina bergamota e notas cítricas, criando uma sensação luminosa e agradável. No coração, o almíscar branco e a aloe vera proporcionam um aroma limpo, delicado e confortável. A base reúne jasmim, almíscar, notas amadeiradas e oud, entregando profundidade e elegância sem perder a leveza. É uma excelente escolha para mulheres que procuram uma fragrância versátil, feminina e marcante na medida certa.",

  familiaOlfativa: "Floral",

  notasTopo: [
    "Notas cítricas",
    "Bergamota"
  ],

  notasCoracao: [
    "Almíscar branco",
    "Aloe vera"
  ],

  notasBase: [
    "Jasmim",
    "Almíscar",
    "Notas amadeiradas",
    "Oud"
  ],

  fixacao: 4,
  projecao: 4,

  duracao: "6 a 8 horas",

  rastro: "Moderado",

  ocasioes: [
    "Dia a dia",
    "Trabalho",
    "Passeios",
    "Encontros",
    "Eventos durante o dia"
  ],

  estacoes: [
    "Primavera",
    "Verão",
    "Outono"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Apresenta boa fixação, com duração aproximada entre 6 e 8 horas na pele. Sua projeção é moderada nas primeiras horas e depois evolui para um rastro confortável, limpo e elegante. O desempenho pode variar conforme a pele, o clima e a quantidade aplicada.",

  caracteristicas: [
    "Fragrância feminina fresca e elegante",
    "Abertura cítrica e luminosa",
    "Coração limpo e almiscarado",
    "Fundo floral e amadeirado",
    "Boa fixação",
    "Projeção equilibrada",
    "Versátil para diferentes ocasiões",
    "Excelente para dias quentes",
    "Ótimo custo-benefício"
  ],

  performance: {
    intensidade: 3,
    versatilidade: 5,
    elegancia: 4,
    frescor: 4,
    docura: 2
  },

  usoIdeal: {
    estacoes: [
      "Primavera",
      "Verão",
      "Outono"
    ],

    periodos: [
      "Manhã",
      "Tarde",
      "Noite"
    ],

    climas: [
      "Quente",
      "Ameno",
      "Ambientes climatizados"
    ]
  },

  perfil: {
    estilos: [
      "Feminino",
      "Elegante",
      "Fresco",
      "Delicado",
      "Sofisticado"
    ],

    publico:
      "Indicado para mulheres que gostam de fragrâncias frescas, florais, almiscaradas e elegantes, com boa versatilidade para o uso diário.",

    impressao:
      "Uma abertura cítrica e luminosa que evolui para um aroma limpo, floral e almiscarado, finalizando com madeiras e oud de forma elegante."
  },

  nossaAvaliacao:
    "O Ameerat Al Arab é uma excelente opção para quem procura uma fragrância feminina agradável, fresca e versátil. Sua combinação de cítricos, almíscar branco, flores e madeiras cria um perfume elegante e fácil de usar, especialmente durante o dia e em temperaturas mais altas.",

  semelhantes: [
    "Fakhar Rose",
    "Yara Branco",
    "Sabah Al Ward"
  ]
}),
criarProduto({
  id: 39,
  slug: "afeef",
  nome: "Afeef",
  marca: "Lattafa",
  preco: 500,
  imagem: "/Perfumes/afeef.jpeg",
  categoria: "Feminino",
  genero: "Unissex",
  selo: "Novo",
  avaliacao: 4.9,
  avaliacoes: 0,

  descricao:
    "Afeef, da Lattafa, é uma fragrância luxuosa, elegante e envolvente, apresentada em um dos frascos mais sofisticados da perfumaria árabe. Sua abertura combina o dulçor suculento do pêssego com a vivacidade da bergamota e o toque levemente picante da pimenta-rosa. No coração, tuberosa, flor de laranjeira e jasmim formam um buquê floral branco intenso e sofisticado. A base de pralinê, âmbar, sândalo e patchouli proporciona um acabamento cremoso, adocicado, quente e marcante. Embora seja unissex, possui um perfil que tende ao feminino.",

  familiaOlfativa: "Floral Frutado Gourmand",

  notasTopo: [
    "Pêssego",
    "Pimenta-rosa",
    "Bergamota"
  ],

  notasCoracao: [
    "Tuberosa",
    "Flor de laranjeira",
    "Jasmim"
  ],

  notasBase: [
    "Pralinê",
    "Âmbar",
    "Sândalo",
    "Patchouli"
  ],

  fixacao: 4,
  projecao: 4,

  duracao: "6 a 8 horas",

  rastro: "Moderado a marcante",

  ocasioes: [
    "Encontros",
    "Eventos",
    "Festas",
    "Jantares",
    "Ocasiões especiais",
    "Uso diário elegante"
  ],

  estacoes: [
    "Primavera",
    "Outono",
    "Inverno"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Apresenta boa fixação, com duração aproximada entre 6 e 8 horas na pele e desempenho ainda maior nas roupas. Sua projeção é marcante nas primeiras horas e depois evolui para um rastro floral, adocicado e elegante. O desempenho pode variar conforme a pele, o clima e a quantidade aplicada.",

  caracteristicas: [
    "Fragrância unissex com tendência feminina",
    "Perfil floral, frutado e adocicado",
    "Abertura suculenta de pêssego",
    "Coração intenso de flores brancas",
    "Base cremosa e envolvente",
    "Boa fixação",
    "Projeção marcante nas primeiras horas",
    "Frasco luxuoso com pavões dourados",
    "Ideal para ocasiões especiais"
  ],

  performance: {
    intensidade: 4,
    versatilidade: 4,
    elegancia: 5,
    frescor: 3,
    docura: 4
  },

  usoIdeal: {
    estacoes: [
      "Primavera",
      "Outono",
      "Inverno"
    ],

    periodos: [
      "Fim de tarde",
      "Noite"
    ],

    climas: [
      "Ameno",
      "Frio",
      "Ambientes climatizados"
    ]
  },

  perfil: {
    estilos: [
      "Luxuoso",
      "Elegante",
      "Romântico",
      "Sofisticado",
      "Marcante"
    ],

    publico:
      "Indicado para quem gosta de fragrâncias florais brancas, frutadas, adocicadas e sofisticadas. Embora seja classificado como unissex, seu perfil tende ao feminino.",

    impressao:
      "Uma abertura frutada, suculenta e levemente picante que evolui para flores brancas intensas, finalizando com uma base cremosa, quente e adocicada."
  },

  nossaAvaliacao:
    "O Afeef se destaca tanto pelo aroma sofisticado quanto pelo frasco luxuoso com pavões dourados. A combinação de pêssego, flores brancas, pralinê e sândalo entrega uma fragrância elegante, envolvente e marcante, ideal para quem deseja presença e exclusividade.",

  semelhantes: [
    "Atheeri",
    "Fakhar Rose",
    "Yara Elixir"
  ]
}),
criarProduto({
  id: 40,
  slug: "the-kingdom-feminino",
  nome: "The Kingdom Feminino",
  marca: "Lattafa",
  preco: 350,
  imagem: "/Perfumes/the-kingdom-feminino.jpeg",
  categoria: "Feminino",
  genero: "Feminino",
  selo: "Novo",
  avaliacao: 4.9,
  avaliacoes: 0,

  descricao:
    "The Kingdom Feminino, da Lattafa, é uma fragrância elegante, sofisticada e envolvente, criada para mulheres que gostam de perfumes doces e marcantes. Sua abertura combina pera, groselha-preta e peônia, entregando um início frutado, fresco e delicadamente floral. No coração, o jasmim se une ao pralinê e à fava-tonka, formando um acorde cremoso, adocicado e sensual. A base de baunilha, sândalo, âmbar e almíscar proporciona um acabamento quente, confortável e luxuoso.",

  familiaOlfativa: "Floral Frutado Gourmand",

  notasTopo: [
    "Pera",
    "Groselha-preta",
    "Peônia"
  ],

  notasCoracao: [
    "Jasmim",
    "Pralinê",
    "Fava-tonka"
  ],

  notasBase: [
    "Baunilha",
    "Sândalo",
    "Âmbar",
    "Almíscar"
  ],

  fixacao: 5,
  projecao: 4,

  duracao: "8 a 10 horas",

  rastro: "Marcante",

  ocasioes: [
    "Encontros",
    "Eventos",
    "Festas",
    "Jantares",
    "Noite",
    "Ocasiões especiais"
  ],

  estacoes: [
    "Outono",
    "Inverno",
    "Primavera"
  ],

  volume: "100 ml",

  concentracao: "Eau de Parfum (EDP)",

  origem: "Emirados Árabes Unidos",

  desempenho:
    "Apresenta excelente fixação, com duração aproximada entre 8 e 10 horas na pele e desempenho ainda maior nas roupas. Sua projeção é marcante nas primeiras horas e depois evolui para um rastro doce, cremoso e elegante. O desempenho pode variar conforme a pele, o clima e a quantidade aplicada.",

  caracteristicas: [
    "Fragrância feminina doce e sofisticada",
    "Perfil floral, frutado e gourmand",
    "Abertura frutada de pera e groselha-preta",
    "Coração cremoso de pralinê e fava-tonka",
    "Base quente de baunilha e sândalo",
    "Excelente fixação",
    "Projeção marcante",
    "Ideal para encontros e eventos",
    "Frasco elegante e luxuoso"
  ],

  performance: {
    intensidade: 4,
    versatilidade: 4,
    elegancia: 5,
    frescor: 2,
    docura: 5
  },

  usoIdeal: {
    estacoes: [
      "Outono",
      "Inverno",
      "Primavera"
    ],

    periodos: [
      "Fim de tarde",
      "Noite"
    ],

    climas: [
      "Frio",
      "Ameno",
      "Ambientes climatizados"
    ]
  },

  perfil: {
    estilos: [
      "Feminino",
      "Elegante",
      "Romântico",
      "Doce",
      "Sofisticado",
      "Marcante"
    ],

    publico:
      "Indicado para mulheres que gostam de fragrâncias doces, cremosas, frutadas e florais, com presença marcante e acabamento sofisticado.",

    impressao:
      "Uma abertura frutada e delicadamente floral que evolui para um coração cremoso e adocicado, finalizando com baunilha, âmbar, almíscar e madeiras."
  },

  nossaAvaliacao:
    "O The Kingdom Feminino é uma excelente escolha para quem procura uma fragrância doce, luxuosa e marcante. A combinação de pera, pralinê, fava-tonka e baunilha entrega um aroma envolvente, feminino e sofisticado, com ótimo desempenho.",

  semelhantes: [
    "Yara Elixir",
    "Fakhar Rose",
    "Khamrah Qahwa"
  ]
}),
];
export function buscarProdutoPorSlug(slug: string) {
  return produtos.find((produto) => produto.slug === slug);
}

export function buscarProdutosRelacionados(
  produtoAtual: Product,
  limite = 4,
) {
  const relacionadosDaCategoria = produtos.filter(
    (produto) =>
      produto.id !== produtoAtual.id &&
      (produto.categoria === produtoAtual.categoria ||
        produto.marca === produtoAtual.marca),
  );

  const outrosProdutos = produtos.filter(
    (produto) =>
      produto.id !== produtoAtual.id &&
      !relacionadosDaCategoria.some(
        (relacionado) => relacionado.id === produto.id,
      ),
  );

  return [...relacionadosDaCategoria, ...outrosProdutos].slice(0, limite);
}
