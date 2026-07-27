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

  fixacao: number;
  projecao: number;

  ocasioes: string[];

  volume: string;
  concentracao: string;
  genero: string;
  origem: string;

  inspiradoEm?: string;
}