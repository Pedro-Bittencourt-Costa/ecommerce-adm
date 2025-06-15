// src/components/MainLayout.tsx

import { Link, Outlet, useNavigate } from 'react-router-dom';

const MainLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/dashboard">Perfume Admin</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/produtos">Perfumes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pedidos">Pedidos</Link>
              </li>
            </ul>
            <button className="btn btn-outline-light" onClick={handleLogout}>Sair</button>
          </div>
        </div>
      </nav>

      <main className="container mt-4">
        <Outlet /> 
      </main>
    </div>
  );
};

export default MainLayout;