export interface Product {
  id: number;
  nome: string;
  marca: string;
  preco: number;
  imagem: string;
  categoria: string;
  selo?: string;
  avaliacao: number;
  avaliacoes: number;
}