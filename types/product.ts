export interface ProductPerformance {
  intensidade: number;
  versatilidade: number;
  elegancia: number;
  frescor: number;
  docura: number;
}

export interface ProductUsoIdeal {
  estacoes: string[];
  periodos: string[];
  climas?: string[];
}

export interface ProductPerfil {
  estilos: string[];
  publico: string;
  impressao?: string;
}

export interface Product {
  id: number;
  slug: string;

  nome: string;
  marca: string;

  preco: number;
  imagem: string;
  imagens?: string[];

  /**
   * Ajuste individual do tamanho da imagem nos cards.
   *
   * Exemplos:
   * 1 = tamanho normal
   * 1.05 = aumento leve
   * 1.1 = aumento médio
   * 1.15 = aumento maior
   */
  imagemZoom?: number;

  categoria: string;
  selo?: string;

  avaliacao: number;
  avaliacoes: number;

  descricao: string;
  familiaOlfativa: string;

  notasTopo: string[];
  notasCoracao: string[];
  notasBase: string[];

  /**
   * Avaliação de 1 a 5.
   */
  fixacao: number;
  projecao: number;

  /**
   * Exemplo: "6 a 8 horas".
   */
  duracao?: string;

  /**
   * Exemplo: "Moderado a marcante".
   */
  rastro?: string;

  ocasioes: string[];

  /**
   * Estações indicadas para utilização da fragrância.
   */
  estacoes?: string[];

  volume: string;
  concentracao: string;
  genero: string;
  origem: string;

  inspiradoEm?: string;

  /**
   * Resumo textual da fixação, projeção e duração.
   */
  desempenho?: string;

  /**
   * Principais qualidades e diferenciais do perfume.
   */
  caracteristicas?: string[];

  /**
   * Barras visuais de 1 a 5.
   */
  performance?: ProductPerformance;

  /**
   * Estações, horários e climas recomendados.
   */
  usoIdeal?: ProductUsoIdeal;

  /**
   * Estilo e público da fragrância.
   */
  perfil?: ProductPerfil;

  /**
   * Texto editorial exclusivo da Bold Parfum.
   */
  nossaAvaliacao?: string;

  /**
   * Perfumes conhecidos com perfil semelhante.
   */
  semelhantes?: string[];
}