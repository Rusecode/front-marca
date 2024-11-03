import React from 'react';
import { Link } from 'react-router-dom'; // Supondo que você está usando react-router para navegação

const Header: React.FC = () => {
  return (
    <header>
      <h1>Bem-vindo ao E-Commerce</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
