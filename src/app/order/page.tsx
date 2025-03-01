"use client";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Pizza, CupSoda, CakeSlice } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function OrderPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    isInitialized,
  } = useCart();

  const renderSkeleton = () => (
    <Card>
      <CardHeader>
        <Skeleton className="h-8 w-48" />
      </CardHeader>
      <CardContent className="space-y-4">
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-lg shadow-sm bg-gray-50"
            >
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <Skeleton className="w-20 h-20 rounded-md flex-shrink-0" />
                <div className="flex-1 text-center sm:text-left">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-1/2 mt-2" />
                  <Skeleton className="h-4 w-1/4 mt-2" />
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                <Skeleton className="w-8 h-8 rounded-md" />
                <Skeleton className="h-4 w-8" />
                <Skeleton className="w-8 h-8 rounded-md" />
                <Skeleton className="w-16 h-8 rounded-md ml-2" />
              </div>
            </div>
          ))}
        <div className="flex justify-between font-bold text-lg border-t pt-4 mt-4">
          <Skeleton className="h-5 w-1/4" />
          <Skeleton className="h-5 w-1/4" />
        </div>
      </CardContent>
    </Card>
  );

  if (!isInitialized) {
    return (
      <div className="max-w-[1200px] mx-auto p-6 my-6">
        <h1 className="underline text-center decoration-primary underline-offset-8 decoration-dashed pb-10 scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl">
          Your Order
        </h1>
        <div className="space-y-6">{renderSkeleton()}</div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-[1200px] mx-auto p-6 my-6">
        <h1 className="underline text-center decoration-primary underline-offset-8 decoration-dashed pb-10 scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl">
          Your Order
        </h1>
        <Card className="text-center">
          <CardHeader>
            <ShoppingBag className="mx-auto w-16 h-16 text-muted-foreground" />
            <CardTitle className="text-2xl font-semibold mt-4">
              Your bag is empty
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Link passHref legacyBehavior href="/#menu">
              <Button variant="link" className="text-yellow-500">
                Add items to continue
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto p-6 my-6">
      <h1
        className={`underline text-center decoration-primary underline-offset-8 decoration-dashed pb-10 scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl`}
      >
        Your Order
      </h1>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">
              Order Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id + item.type + item.selectedItemsString}
                className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-lg shadow-sm bg-gray-50"
              >
                <div className="flex items-center space-x-4 w-full sm:w-auto">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <p className="md:text-xl font-semibold leading-5">
                      {item.name}
                    </p>
                    <p className="text-sm font-medium pr-4 hidden min-[900px]:block text-gray-600">
                      {item.selectedItemsString
                        ? `Selected Items: ${item.selectedItemsString}`
                        : item.description}
                    </p>
                    <p className="font-medium text-gray-600">
                      Price: ${item.price}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                  {item.quantity === 1 ? (
                    <Button
                      onClick={() =>
                        decreaseQuantity(
                          item.id,
                          item.type,
                          item.selectedItemsString
                        )
                      }
                      variant="secondary"
                      className="w-8 h-8 p-0"
                    >
                      -
                    </Button>
                  ) : (
                    <Button
                      onClick={() =>
                        decreaseQuantity(
                          item.id,
                          item.type,
                          item.selectedItemsString
                        )
                      }
                      variant="outline"
                      className="w-8 h-8 p-0"
                    >
                      -
                    </Button>
                  )}
                  <span className="font-semibold">{item.quantity}</span>
                  <Button
                    onClick={() =>
                      increaseQuantity(
                        item.id,
                        item.type,
                        item.selectedItemsString
                      )
                    }
                    variant="outline"
                    className="w-8 h-8 p-0"
                  >
                    +
                  </Button>
                  {item.selectedItemsString && (
                    <div className="min-[900px]:hidden">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="text-xs w-16 h-8 sm:text-sm sm:w-auto"
                          >
                            Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader className="items-center">
                            <div className="relative w-20 h-20 flex-shrink-0">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                sizes="80px"
                                className="object-cover rounded-md"
                              />
                            </div>
                            <DialogTitle className="text-2xl">
                              {item.name}
                            </DialogTitle>
                            <DialogDescription className="">
                              Selected Items: {item.selectedItemsString}
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}

                  <Button
                    onClick={() =>
                      removeFromCart(
                        item.id,
                        item.type,
                        item.selectedItemsString
                      )
                    }
                    variant="destructive"
                    className="text-xs w-18 h-8 sm:text-sm sm:w-auto"
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
            <div className="flex justify-between font-bold text-lg border-t pt-4 mt-4">
              <span>Subtotal:</span>
              <span>
                $
                {cart
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </span>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <div className="w-full sm:w-auto">
            <h3 className="text-xl font-semibold mb-4 text-center sm:text-left">
              Want to add more items?
            </h3>
            <div className="flex justify-center sm:justify-start gap-4 flex-wrap">
              <Link passHref legacyBehavior href="/#menu">
                <Button variant={"outline"}>
                  + <Pizza className="w-5 mr-1.5 ml-0.5" /> Add Pizzas
                </Button>
              </Link>
              <Link passHref legacyBehavior href="/#beverages">
                <Button variant={"outline"}>
                  + <CupSoda className="w-5 mr-1.5 ml-0.5" /> Add Beverages
                </Button>
              </Link>
              <Link passHref legacyBehavior href="/#desserts">
                <Button variant={"outline"}>
                  + <CakeSlice className="w-5 mr-1.5 ml-0.5" /> Add Desserts
                </Button>
              </Link>
            </div>
          </div>

          <div className="text-center sm:text-right">
            <Link passHref legacyBehavior href="/checkout">
              <Button className="w-full sm:w-auto bg-green-500 text-white hover:bg-green-600">
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
