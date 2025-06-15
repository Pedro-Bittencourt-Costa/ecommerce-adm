// src/data/mockData.ts

// src/data/mockData.ts
import type { Pedido, Perfume } from "../types/entities";

// Lista de perfumes de exemplo
export const mockPerfumes: Perfume[] = [
  {
    id: 1,
    nome: "Sauvage",
    marca: "Dior",
    volume: 100,
    preco: 650.00,
    quantidadeEstoque: 15,
    descricao: "Uma fragrância radicalmente fresca, um nome que soa como um manifesto.",
    foto: "https://http2.mlstatic.com/D_NQ_NP_859743-MLU73099738722_112023-O.webp"
  },
  {
    id: 2,
    nome: "Bleu de Chanel",
    marca: "Chanel",
    volume: 100,
    preco: 850.00,
    quantidadeEstoque: 10,
    descricao: "Um aromático amadeirado com um rastro cativante.",
    foto: "https://http2.mlstatic.com/D_NQ_NP_753238-MLU72613149420_102023-O.webp"
  },
  {
    id: 3,
    nome: "Acqua di Giò",
    marca: "Giorgio Armani",
    volume: 100,
    preco: 550.00,
    quantidadeEstoque: 25,
    descricao: "A força do mar e a luminosidade do céu capturadas em uma fragrância.",
    foto: "https://http2.mlstatic.com/D_NQ_NP_705229-MLU72960621946_112023-O.webp"
  }
];

// Lista de pedidos de exemplo
export const mockPedidos: Pedido[] = [
  {
    id: 101,
    nomeCliente: "Carlos Silva",
    data: "2025-06-12",
    status: "Entregue",
    itens: [
      { produtoId: 1, nomeProduto: "Sauvage", quantidade: 1, precoUnitario: 650.00 }
    ],
    valorTotal: 650.00
  },
  {
    id: 102,
    nomeCliente: "Mariana Costa",
    data: "2025-06-14",
    status: "Enviado",
    itens: [
      { produtoId: 3, nomeProduto: "Acqua di Giò", quantidade: 2, precoUnitario: 550.00 }
    ],
    valorTotal: 1100.00
  },
  {
    id: 103,
    nomeCliente: "João Pereira",
    data: "2025-06-15",
    status: "Pendente",
    itens: [
      { produtoId: 2, nomeProduto: "Bleu de Chanel", quantidade: 1, precoUnitario: 850.00 },
      { produtoId: 1, nomeProduto: "Sauvage", quantidade: 1, precoUnitario: 650.00 }
    ],
    valorTotal: 1500.00
  }
];