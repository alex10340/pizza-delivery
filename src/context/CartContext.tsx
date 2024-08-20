"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Product } from "@/data/db";
import { toast } from "sonner";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number, type: string) => void;
  increaseQuantity: (id: number, type: string) => void;
  decreaseQuantity: (id: number, type: string) => void;
  clearCart: () => void;
  isInitialized: boolean;
  getTotalItems: () => number;
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
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem("cart", JSON.stringify(cart));
      } catch (error) {
        console.error("Error saving cart to localStorage", error);
      }
    }
  }, [cart, isInitialized]);

  const addToCart = (product: Product) => {
    let updatedCart: CartItem[] = [];

    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.type === product.type
      );
      if (existingItem) {
        updatedCart = prevCart.map((item) =>
          item.id === product.id && item.type === product.type
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }

      return updatedCart;
    });

    toast.custom(
      (t) => {
        const updatedItem = updatedCart.find(
          (item) => item.id === product.id && item.type === product.type
        );

        return (
          <div className="flex w-full justify-center bg-transparent items-center p-4 space-x-4 rounded-xl shadow-lg border border-gray-200">
            <div className="relative w-16 h-16">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="100%"
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Added to cart
              </p>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {product.name}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ${product.price.toFixed(2)}
              </p>
            </div>
            <Button
              variant="destructive"
              className="font-bold"
              onClick={() => {
                if (updatedItem && updatedItem.quantity === 1) {
                  removeFromCart(product.id, product.type);
                } else {
                  decreaseQuantity(product.id, product.type);
                }
                toast.dismiss(t);
              }}
            >
              Remove
            </Button>
          </div>
        );
      },
      {
        duration: 5000,
      }
    );
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

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        isInitialized,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
