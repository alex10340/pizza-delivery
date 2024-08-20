"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function CheckoutPage() {
  const { cart, isInitialized } = useCart();

  const renderSkeleton = () => (
    <div className="flex flex-col-reverse lg:flex-row gap-10">
      <div className="lg:w-1/2 space-y-6">
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
                  className="flex items-center justify-between p-4 border rounded-lg bg-gray-50"
                >
                  <div className="flex items-center space-x-4">
                    <Skeleton className="w-20 h-20 rounded-md" />
                    <div>
                      <Skeleton className="h-5 w-32" />
                      <Skeleton className="h-4 w-16 mt-2" />
                    </div>
                  </div>
                  <div className="text-right">
                    <Skeleton className="h-5 w-16" />
                  </div>
                </div>
              ))}
            <div className="flex justify-between font-bold text-lg border-t pt-4 mt-4">
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-5 w-20" />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="lg:w-1/2 space-y-10">
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-48" />
          </CardHeader>
          <CardContent className="space-y-4">
            {Array(4)
              .fill(0)
              .map((_, idx) => (
                <div key={idx} className="space-y-2">
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-48" />
          </CardHeader>
          <CardContent className="space-y-4">
            {Array(3)
              .fill(0)
              .map((_, idx) => (
                <div key={idx} className="space-y-2">
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
          </CardContent>
        </Card>
        <div className="flex justify-center">
          <Skeleton className="h-10 w-full md:w-full rounded-md" />
        </div>
      </div>
    </div>
  );

  if (!isInitialized) {
    return (
      <div className="max-w-[1200px] mx-auto p-6 my-6 space-y-10">
        <h1 className="underline decoration-primary underline-offset-8 decoration-dashed scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Checkout
        </h1>
        {renderSkeleton()}
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-[1200px] mx-auto p-6 my-6">
        <h1 className="underline decoration-primary underline-offset-8 decoration-dashed pb-10 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Checkout
        </h1>
        <Card className="text-center">
          <CardHeader>
            <ShoppingBag className="mx-auto w-16 h-16 text-muted-foreground" />
            <CardTitle className="text-2xl font-semibold mt-4">
              Your bag is empty
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Link href="/#menu">
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
    <div className="max-w-[1200px] mx-auto p-6 my-6 space-y-10">
      <h1
        className={`${
          cart.length === 0 ? "text-center" : ""
        } underline decoration-primary underline-offset-8 decoration-dashed scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl`}
      >
        Checkout
      </h1>

      <div className="flex flex-col-reverse lg:flex-row gap-10">
        <div className="lg:w-1/2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Order Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id + item.type}
                  className="flex items-center justify-between p-4 border rounded-lg bg-gray-50"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative w-20 h-20">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="100%"
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">{item.name}</h2>
                      <p className="font-medium text-gray-600">
                        Quantity: {item.quantity}
                      </p>
                      <p className="font-medium text-gray-600">
                        Price: ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex justify-between font-bold text-lg border-t pt-4 mt-4">
                <span>Total:</span>
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
          <div className="lg:hidden">
            <Link href="/thankyou" className="flex justify-center">
              <Button className="w-full md:w-full bg-green-500 text-white hover:bg-green-600">
                Place Order
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 space-y-10">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Delivery Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" className="w-full" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  placeholder="123 Main St, Apt 4B"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="City" className="w-full" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postal">Postal Code</Label>
                <Input
                  id="postal"
                  placeholder="Postal Code"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input id="country" placeholder="Country" className="w-full" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Payment Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input
                  id="card-number"
                  placeholder="1234 5678 9012 3456"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiry-date">Expiry Date</Label>
                <Input
                  id="expiry-date"
                  placeholder="MM/YY"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" className="w-full" />
              </div>
            </CardContent>
          </Card>
          <div className="hidden lg:block">
            <Link href="/thankyou" className="flex justify-center">
              <Button className="w-full md:w-full bg-green-500 text-white hover:bg-green-600">
                Place Order
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
