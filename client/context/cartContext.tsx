import React, { createContext, useState, useContext } from 'react';

type Item = {
  name: string;
  price: string;
  image: string;
  description?: string;
  meal_swipe_elegible: boolean;
};

type CartContextType = {
  cartItems: string[]; // array of item IDs
  addToCart: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<string[]>([]);

    const addToCart = (id: string) => {
    setCartItems((prev) => [...prev, id]);
    };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};