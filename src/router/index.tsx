// src/router/index.tsx

import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import ProductsPage from '../pages/ProductsPage';
import OrdersPage from '../pages/OrdersPage';
import ProtectedRoute from './ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <ProtectedRoute />, // O guardião protege o grupo de rotas abaixo
    children: [
      {
        path: 'dashboard', // Rota: /dashboard
        element: <DashboardPage />,
      },
      {
        path: 'produtos', // Rota: /produtos
        element: <ProductsPage />,
      },
      {
        path: 'pedidos', // Rota: /pedidos
        element: <OrdersPage />,
      },
      {
        // Redireciona a rota raiz '/' para '/dashboard'
        index: true,
        element: <Navigate to="/dashboard" />,
      }
    ],
  },
]);