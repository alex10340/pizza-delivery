"use client";
import { useCart } from "@/context/CartContext";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardHeader, CardFooter } from "@/components/ui/card";

export default function OrderPage() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  return (
    <div className="max-w-[1200px] mx-auto p-6 my-6">
      <h1
        className={`${
          cart.length === 0 ? "text-center" : ""
        } underline decoration-primary underline-offset-8 decoration-dashed pb-10 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl`}
      >
        Your Order
      </h1>

      {cart.length === 0 ? (
        <div className="py-12 flex flex-col items-center">
          <h2 className="flex items-center text-2xl font-medium tracking-tight mb-4">
            <ShoppingBag className="mr-2" />
            Your bag is empty.
          </h2>
          <Link href="/#menu">
            <Button variant="link" className="text-muted-foreground p-0">
              Add items to continue.
            </Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Order Summary
              </CardTitle>
            </CardHeader>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-lg shadow-sm bg-white"
              >
                <div className="flex items-center space-x-4 w-full sm:w-auto">
                  <div className="relative w-32 h-32 sm:w-20 sm:h-20 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="font-medium hidden md:block text-gray-600">
                      {item.description}
                    </p>
                    <p className="font-medium text-gray-600">
                      Price: ${item.price}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                  <Button
                    onClick={() => decreaseQuantity(item.id, item.type)}
                    variant="secondary"
                    className="w-8 h-8 p-0"
                  >
                    -
                  </Button>
                  <span className="font-semibold">{item.quantity}</span>
                  <Button
                    onClick={() => increaseQuantity(item.id, item.type)}
                    variant="outline"
                    className="w-8 h-8 p-0"
                  >
                    +
                  </Button>
                  <Button
                    onClick={() => removeFromCart(item.id, item.type)}
                    variant="destructive"
                    className="ml-2"
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </Card>

          <div className="flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center gap-8">
            <div className="w-full sm:w-auto">
              <h3 className="text-xl font-semibold mb-4 text-center sm:text-left">
                Want to add more items?
              </h3>
              <div className="flex justify-center sm:justify-start gap-4 flex-wrap">
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

            <div className="w-full sm:w-auto text-center sm:text-right">
              <h2 className="text-xl font-bold mb-4">
                Total: $
                {cart
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </h2>
              <Link href="/checkout">
                <Button className="w-full sm:w-auto bg-green-500 text-white hover:bg-green-600">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
