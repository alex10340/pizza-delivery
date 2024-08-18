"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function OrderPage() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  return (
    <div className="flex flex-col min-h-[600px] max-w-[1000px] mx-auto p-6 my-6">
      <h1
        className="underline
       decoration-primary underline-offset-8 decoration-dashed text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      >
        Your Order
      </h1>
      {cart.length === 0 ? (
        <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Your bag is empty.
        </h2>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-lg font-medium">Price: ${item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decreaseQuantity(item.id, item.type)}
                  className="px-2 py-1 text-lg font-semibold text-white bg-gray-400 rounded-md hover:bg-gray-500"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id, item.type)}
                  className="px-2 py-1 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id, item.type)}
                  className="px-2 py-1 text-lg font-semibold text-white bg-red-500 rounded-md hover:bg-red-600 ml-4"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                Total: $
                {cart
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </h2>
              <Link href="/checkout">
                <button className="mt-4 px-4 py-2 text-lg font-semibold text-white bg-green-500 rounded-md hover:bg-green-600">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold mb-4">Want to add more items?</h3>
        <div className="flex justify-center space-x-4">
          <Link href="/#menu">
            <button className="px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">
              + Add Pizzas
            </button>
          </Link>
          <Link href="/#beverages">
            <button className="px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">
              + Add Beverages
            </button>
          </Link>
          <Link href="/#desserts">
            <button className="px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600">
              + Add Desserts
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
