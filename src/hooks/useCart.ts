import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'; // Importando o CartContext

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
