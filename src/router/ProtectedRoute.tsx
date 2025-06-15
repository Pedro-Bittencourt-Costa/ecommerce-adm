// src/router/ProtectedRoute.tsx

import { Navigate } from 'react-router-dom';
import MainLayout from '../components/MainLayout';

const ProtectedRoute = () => {
  // Verificamos se o "status de autenticado" existe no sessionStorage
  const isAuthenticated = sessionStorage.getItem('isAuthenticated');

  // Se estiver autenticado, renderiza o Layout Principal (que contém o <Outlet>)
  // Se não, redireciona para a página de login
  return isAuthenticated ? <MainLayout /> : <Navigate to="/login" />;
};

export default ProtectedRoute;