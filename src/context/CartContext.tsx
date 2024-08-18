"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/data/db";

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number, type: string) => void;
  increaseQuantity: (id: number, type: string) => void;
  decreaseQuantity: (id: number, type: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.type === product.type
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.type === product.type
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number, type: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id || item.type !== type)
    );
  };

  const increaseQuantity = (id: number, type: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.type === type
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id: number, type: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.type === type
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
