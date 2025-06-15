// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'; // Importe o RouterProvider
import { router } from './router'; // Importe nosso roteador

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Substitua <App /> pelo <RouterProvider /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
);