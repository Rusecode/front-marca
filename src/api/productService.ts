import axios from 'axios';
import apiConfig from '../config/apiConfig';
import { Product } from '../types/product';
import mockProducts from './mockProducts'; // Importar os dados mockados

const api = axios.create({
  baseURL: apiConfig.baseURL,
  headers: apiConfig.headers,
  timeout: apiConfig.timeout,
});

// Função para obter todos os produtos
export const getProducts = async (): Promise<Product[]> => {
  // Simular um atraso de rede com os dados mockados
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 1000); // Atraso de 1 segundo
  });
};

// Função para obter um produto específico
export const getProductById = async (id: string): Promise<Product> => {
  // Aqui você pode usar um método similar, se quiser simular a busca de um produto específico
  return new Promise((resolve) => {
    const product = mockProducts.find((p) => p.id.toString() === id);
    setTimeout(() => {
      if (product) {
        resolve(product);
      } else {
        throw new Error('Produto não encontrado');
      }
    }, 1000); // Atraso de 1 segundo
  });
};
