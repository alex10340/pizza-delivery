"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ThankYouPage() {
  const { cart, clearCart } = useCart();
  const [cartCopy, setCartCopy] = useState(cart);
  const [progress, setProgress] = useState(0);
  const [isDelivered, setIsDelivered] = useState(false);
  const [isInitialized, setisInitialized] = useState(false);

  useEffect(() => {
    setCartCopy(cart);
    clearCart();

    if (cartCopy.length === 0) {
      redirect("/");
    }

    setisInitialized(true);

    const progressTimer = setTimeout(() => setProgress(100), 500);
    const deliveryTimer = setTimeout(() => setIsDelivered(true), 30000);

    return () => {
      clearTimeout(progressTimer);
      clearTimeout(deliveryTimer);
    };
  }, []);

  return (
    isInitialized && (
      <div className="max-w-[800px] mx-auto sm:p-6 my-6">
        <h1 className="underline decoration-primary underline-offset-8 decoration-dashed pb-10 scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
          Thank You!
        </h1>
        <Card className="text-center">
          <CardHeader>
            <Heart className="mx-auto w-16 h-16 text-primary" />
            <CardTitle className="text-2xl font-semibold mt-4">
              Your order is on its way!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg">
                We are processing your order and will deliver it soon.
              </p>

              <div>
                <label
                  htmlFor="progress-bar"
                  className="text-sm font-medium text-gray-600"
                >
                  {!isDelivered && "Delivery Progress"}
                </label>
                <div className="flex justify-center mt-2">
                  {!isDelivered ? (
                    <Progress
                      id="progress-bar"
                      value={progress}
                      className="w-full max-w-md"
                    />
                  ) : (
                    <div className="mt-2 text-lg font-semibold">
                      🎉 Your order has been delivered!
                    </div>
                  )}
                </div>
              </div>

              <Card className="text-left">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cartCopy.map((item) => (
                    <div
                      key={item.id + item.type + item.selectedItemsString}
                      className="flex items-center justify-between p-4 border rounded-lg bg-gray-50"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="100%"
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {item.quantity} x ${item.price}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:space-x-4 text-right">
                        {item.selectedItemsString && (
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                className="text-xs w-14 h-8 sm:text-sm sm:w-auto"
                              >
                                Details
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                              <DialogHeader className="items-center">
                                <div className="relative w-32 h-32 sm:w-20 sm:h-20 flex-shrink-0">
                                  <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    sizes="100%"
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
                        )}
                        <p className="font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-between font-bold text-lg border-t pt-4 mt-4">
                    <p>Total</p>
                    <p>
                      $
                      {cartCopy
                        .reduce(
                          (total, item) => total + item.price * item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Link href="/">
              <Button variant="link" className="mt-6 text-primary">
                Go back to the Home page
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  );
}
