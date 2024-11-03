import React, { useEffect, useState } from 'react';
import { getProducts } from '../../api/productService';
import { Product } from '../../types/product';
import ProductCard from './ProductCard'; // Importa o ProductCard

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError('Erro ao carregar os produtos.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Produtos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} /> {/* Renderiza o ProductCard */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
