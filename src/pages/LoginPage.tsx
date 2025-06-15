// src/pages/LoginPage.tsx

import { useState } from 'react';
// Importe o hook useNavigate
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  // Ative o hook
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === 'adm' && password === '1234') {
      setError('');
      // 1. Salva o status de autenticado no sessionStorage
      sessionStorage.setItem('isAuthenticated', 'true');
      
      // 2. Navega para o dashboard
      navigate('/dashboard');
    } else {
      setError('Usuário ou senha inválidos.');
    }
  };

  // ... o resto do componente continua igual ...
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Login do Administrador</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Usuário</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Senha</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-primary w-100">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;