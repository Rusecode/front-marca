import axios from 'axios';

const API_URL = 'https://api.example.com/products'; // Substitua pela URL da sua API

export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export { }; // Adicione esta linha
