// src/types/entities.ts

/**
 * Define a estrutura de dados para um Perfume.
 */
export interface Perfume {
  id: number;
  nome: string;
  marca: string;
  volume: number; // em ml
  preco: number;
  quantidadeEstoque: number;
  descricao: string;
  foto: string; // URL da imagem
}

/**
 * Define a estrutura de um item dentro de um pedido.
 */
export interface ItemPedido {
  produtoId: number;
  nomeProduto: string;
  quantidade: number;
  precoUnitario: number;
}

/**
 * Define a estrutura de dados para um Pedido.
 */
export interface Pedido {
  id: number;
  nomeCliente: string;
  data: string; // Usaremos string para simplificar. Ex: "2024-06-15"
  status: 'Pendente' | 'Enviado' | 'Entregue' | 'Cancelado';
  itens: ItemPedido[];
  valorTotal: number;
}