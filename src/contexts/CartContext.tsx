import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartContextProps {
  items: any[]; // Defina o tipo de item se souber
  addItem: (item: any) => void;
  removeItem: (id: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode; // Definindo children como um ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<any[]>([]);

  const addItem = (item: any) => setItems((prevItems) => [...prevItems, item]);
  const removeItem = (id: number) => setItems((prevItems) => prevItems.filter(item => item.id !== id));

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartContext }; // Exportando o CartContext
