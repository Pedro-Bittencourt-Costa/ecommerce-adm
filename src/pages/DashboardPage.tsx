// src/pages/DashboardPage.tsx

import { useMemo } from 'react';
import DashboardCard from '../components/DashboardCard';
import { mockPedidos, mockPerfumes } from '../data/mockData';

const DashboardPage = () => {
  const dashboardData = useMemo(() => {
    const totalVendas = mockPedidos.reduce((acc, pedido) => acc + pedido.valorTotal, 0);
    const numeroDePedidos = mockPedidos.length;
    const produtosEmEstoque = mockPerfumes.reduce((acc, perfume) => acc + perfume.quantidadeEstoque, 0);

    const vendasPorProduto = new Map<number, { nome: string; quantidade: number }>();

    mockPedidos.forEach(pedido => {
      pedido.itens.forEach(item => {
        const produtoExistente = vendasPorProduto.get(item.produtoId);
        const quantidadeAtual = produtoExistente ? produtoExistente.quantidade : 0;
        
        vendasPorProduto.set(item.produtoId, {
          nome: item.nomeProduto,
          quantidade: quantidadeAtual + item.quantidade,
        });
      });
    });

    const maisVendidos = Array.from(vendasPorProduto.values())
      .sort((a, b) => b.quantidade - a.quantidade)
      .slice(0, 5);

    return { totalVendas, numeroDePedidos, produtosEmEstoque, maisVendidos };
  }, []);

  return (
    <div>
      <h1 className="mb-4">Dashboard</h1>
      
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <DashboardCard 
            title="Total de Vendas" 
            value={dashboardData.totalVendas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} 
            icon="bi-currency-dollar" 
            color="text-success" 
          />
        </div>
        <div className="col-md-4">
          <DashboardCard 
            title="Número de Pedidos" 
            value={dashboardData.numeroDePedidos} 
            icon="bi-box-seam" 
            color="text-primary" 
          />
        </div>
        <div className="col-md-4">
          <DashboardCard 
            title="Produtos em Estoque" 
            value={dashboardData.produtosEmEstoque} 
            icon="bi-boxes" 
            color="text-info"
          />
        </div>
      </div>

      <h2>Produtos Mais Vendidos</h2>
      <div className="card shadow-sm">
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Produto</th>
                <th scope="col">Quantidade Vendida</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.maisVendidos.map((produto, index) => (
                <tr key={produto.nome}>
                  <th scope="row">{index + 1}</th>
                  <td>{produto.nome}</td>
                  <td>{produto.quantidade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;