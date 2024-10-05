"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { Product, SelectedItems } from "@/data/db";
import { toast } from "sonner";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface CartItem extends Product {
  quantity: number;
  selectedItemsString?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, selectedItems?: SelectedItems) => void;
  removeFromCart: (
    id: number,
    type: string,
    selectedItemsString: string | undefined
  ) => void;
  increaseQuantity: (
    id: number,
    type: string,
    selectedItemsString: string | undefined
  ) => void;
  decreaseQuantity: (
    id: number,
    type: string,
    selectedItemsString: string | undefined
  ) => void;
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

  const addToCart = (product: Product, selectedItems?: SelectedItems) => {
    let selectedItemsString = undefined;
    if (selectedItems !== undefined) {
      selectedItemsString = [
        ...selectedItems.pizzas,
        ...selectedItems.desserts,
        ...selectedItems.beverages,
      ].join(", ");
    }

    setCart((prevCart) => {
      // Look for an existing item in the current cart state
      const existingItem = prevCart.find(
        (item) =>
          item.id === product.id &&
          item.type === product.type &&
          item.selectedItemsString === selectedItemsString
      );

      let updatedCart: CartItem[] = [];

      if (existingItem) {
        // Update the quantity if the item exists
        updatedCart = prevCart.map((item) =>
          item.id === product.id && item.type === product.type
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item if it doesn't exist
        updatedCart = [
          ...prevCart,
          { ...product, quantity: 1, selectedItemsString },
        ];
      }

      return updatedCart;
    });

    toast.custom(
      (t) => {
        return (
          <div className="flex w-full justify-center items-center bg-transparent p-4 space-x-4 rounded-xl shadow-lg border border-gray-200">
            <div className="relative w-16 h-16">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="64px"
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm text-muted-foreground">Added to cart!</p>
              <p className="md:text-lg leading-5 font-semibold">
                {product.name}
              </p>
              {selectedItemsString && (
                <p className="text-sm line-clamp-3 text-muted-foreground">
                  {selectedItemsString}
                </p>
              )}
              <p className="text-sm text-muted-foreground">
                ${product.price.toFixed(2)}
              </p>
            </div>
            <Button
              variant="destructive"
              className="font-bold"
              onClick={() => {
                setCart((prevCart) => {
                  const updatedItem = prevCart.find(
                    (item) =>
                      item.id === product.id &&
                      item.type === product.type &&
                      item.selectedItemsString === selectedItemsString
                  );

                  // If the updatedItem exists and has a quantity of 1, remove it
                  if (updatedItem && updatedItem.quantity === 1) {
                    return prevCart.filter(
                      (item) =>
                        item.id !== product.id ||
                        item.type !== product.type ||
                        item.selectedItemsString !== selectedItemsString
                    );
                  }

                  // Otherwise, just decrease its quantity
                  return prevCart.map((item) =>
                    item.id === product.id &&
                    item.type === product.type &&
                    item.selectedItemsString === selectedItemsString
                      ? { ...item, quantity: item.quantity - 1 }
                      : item
                  );
                });
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

  const removeFromCart = (
    id: number,
    type: string,
    selectedItemsString: string | undefined
  ) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          item.id !== id ||
          item.type !== type ||
          item.selectedItemsString !== selectedItemsString
      )
    );
  };

  const increaseQuantity = (
    id: number,
    type: string,
    selectedItemsString: string | undefined
  ) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id &&
        item.type === type &&
        item.selectedItemsString === selectedItemsString
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (
    id: number,
    type: string,
    selectedItemsString: string | undefined
  ) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id &&
        item.type === type &&
        item.selectedItemsString === selectedItemsString
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
