// src/api/mockProducts.ts
import { Product } from '../types/product';

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Produto A',
    description: 'Descrição do Produto A',
    price: 29.99,
    imageUrl: 'https://via.placeholder.com/150', // Exemplo de URL da imagem
  },
  {
    id: 2,
    name: 'Produto B',
    description: 'Descrição do Produto B',
    price: 49.99,
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Produto C',
    description: 'Descrição do Produto C',
    price: 19.99,
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Produto D',
    description: 'Descrição do Produto D',
    price: 99.99,
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Produto E',
    description: 'Descrição do Produto E',
    price: 39.99,
    imageUrl: 'https://via.placeholder.com/150',
  },
];

export default mockProducts;
