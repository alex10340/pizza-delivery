"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OrderPage() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  return (
    <div className="flex flex-col min-h-[600px] max-w-[1000px] mx-auto p-6 my-6">
      <h1
        className="underline pb-8
       decoration-primary underline-offset-8 decoration-dashed text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      >
        Your Order
      </h1>
      {cart.length === 0 && (
        <h2 className=" opacity-80 scroll-m-20 text-2xl font-semibold tracking-tight">
          Your bag is empty.
        </h2>
      )}

      <div className="space-y-6 ">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between mt-6 p-4 border rounded-lg shadow-sm"
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
                <p className="font-medium">Price: ${item.price}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                onClick={() => decreaseQuantity(item.id, item.type)}
                variant="secondary"
              >
                -
              </Button>
              <span className="font-semibold">{item.quantity}</span>
              <Button
                onClick={() => increaseQuantity(item.id, item.type)}
                variant="outline"
              >
                +
              </Button>
              <Button
                onClick={() => removeFromCart(item.id, item.type)}
                variant="destructive"
              >
                Remove
              </Button>
            </div>
          </div>
        ))}

        <div className="pt-8 flex justify-between flex-wrap gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Want to add more items?
            </h3>
            <div className="flex justify-center space-x-4">
              <Link href="/#menu">
                <Button variant="outline">+ Add Pizzas</Button>
              </Link>
              <Link href="/#beverages">
                <Button variant="outline">+ Add Beverages</Button>
              </Link>
              <Link href="/#desserts">
                <Button variant="outline">+ Add Desserts</Button>
              </Link>
            </div>
          </div>

          {cart.length !== 0 && (
            <div>
              <h2 className="text-right text-xl font-bold">
                Total: $
                {cart
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </h2>
              <Link href="/checkout">
                <Button className="mt-4 bg-green-500 text-white hover:bg-green-600">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
