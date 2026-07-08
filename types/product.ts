export interface Product {
  id: number;
  slug: string;

  nome: string;
  marca: string;

  preco: number;
  imagem: string;
  imagens?: string[];

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