"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function OrderPage() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  return (
    <div>
      <h1>Your Order</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{ marginBottom: "1rem" }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100px" }}
              />
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h2>
            Total: $
            {cart
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </h2>
          <Link href="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
}
