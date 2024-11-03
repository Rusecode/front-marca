import React from 'react';
import ProductList from '../components/product/ProductList';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Bem-vindo ao E-commerce!</h1>
      <ProductList />
    </div>
  );
};

export default Home;
