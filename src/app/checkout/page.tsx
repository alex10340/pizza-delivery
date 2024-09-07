"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { DialogHeader } from "@/components/ui/dialog";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface FormValues {
  [key: string]: string;
}

interface FormErrors {
  [key: string]: string | undefined;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, isInitialized } = useCart();
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    address: "",
    city: "",
    postal: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (id === "expiryDate") {
      let formattedValue = value.replace(/\D/g, "");

      if (formattedValue.length > 2) {
        formattedValue =
          formattedValue.slice(0, 2) + "/" + formattedValue.slice(2);
      }

      setFormValues((prevValues) => ({ ...prevValues, [id]: formattedValue }));
    } else {
      setFormValues((prevValues) => ({ ...prevValues, [id]: value }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const { name, address, city, postal, cardNumber, expiryDate, cvv } =
      formValues;

    if (!name) newErrors.name = "Name is required";
    if (!address) newErrors.address = "Address is required";
    if (!city) newErrors.city = "City is required";
    if (!postal) newErrors.postal = "Postal Code is required";
    const cleanedCardNumber = cardNumber.replace(/\s+/g, "");
    if (!cleanedCardNumber || !/^\d{16}$/.test(cleanedCardNumber))
      newErrors.cardNumber = "Card Number must be 16 digits";
    if (!expiryDate || !/^\d{2}\/\d{2}$/.test(expiryDate))
      newErrors.expiryDate = "Expiry Date must be in MM/YY format";
    if (!cvv || !/^\d{3}$/.test(cvv)) newErrors.cvv = "CVV must be 3 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      router.push("/thankyou");
    }
  };

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

      <form
        onSubmit={handleSubmit}
        className="flex flex-col-reverse lg:flex-row gap-10"
      >
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
                  key={item.id + item.type + item.selectedItemsString}
                  className="flex items-center justify-between p-4 border rounded-lg bg-gray-50"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="64px"
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
                                sizes="128px"
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
                  {cart
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </p>
              </div>
            </CardContent>
          </Card>
          <div className="lg:hidden">
            <Button
              type="submit"
              className="w-full md:w-full bg-green-500 text-white hover:bg-green-600"
            >
              Place Order
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 space-y-10">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Delivery Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  value={formValues.name}
                  onChange={handleChange}
                  required
                  className={`border ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  type="text"
                  id="address"
                  placeholder="123 Main Street"
                  value={formValues.address}
                  onChange={handleChange}
                  required
                  className={`border ${errors.address ? "border-red-500" : ""}`}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">{errors.address}</p>
                )}
              </div>
              <div className="flex space-x-4">
                <div className="space-y-2 w-1/2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    type="text"
                    id="city"
                    placeholder="City"
                    value={formValues.city}
                    onChange={handleChange}
                    required
                    className={`border ${errors.city ? "border-red-500" : ""}`}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm">{errors.city}</p>
                  )}
                </div>
                <div className="space-y-2 w-1/2">
                  <Label htmlFor="postal">Postal Code</Label>
                  <Input
                    type="text"
                    id="postal"
                    placeholder="Postal Code"
                    value={formValues.postal}
                    onChange={handleChange}
                    required
                    className={`border ${
                      errors.postal ? "border-red-500" : ""
                    }`}
                  />
                  {errors.postal && (
                    <p className="text-red-500 text-sm">{errors.postal}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                Payment Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  type="text"
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formValues.cardNumber}
                  onChange={handleChange}
                  required
                  className={`border ${
                    errors.cardNumber ? "border-red-500" : ""
                  }`}
                />
                {errors.cardNumber && (
                  <p className="text-red-500 text-sm">{errors.cardNumber}</p>
                )}
              </div>
              <div className="flex space-x-4">
                <div className="space-y-2 w-1/2">
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input
                    type="text"
                    id="expiryDate"
                    value={formValues.expiryDate}
                    onChange={handleChange}
                    required
                    maxLength={5}
                    placeholder="MM/YY"
                    className={`border ${
                      errors.expiryDate ? "border-red-500" : ""
                    }`}
                  />
                  {errors.expiryDate && (
                    <p className="text-red-500 text-sm">{errors.expiryDate}</p>
                  )}
                </div>
                <div className="space-y-2 w-1/2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    type="text"
                    id="cvv"
                    placeholder="123"
                    value={formValues.cvv}
                    onChange={handleChange}
                    required
                    maxLength={3}
                    className={`border ${errors.cvv ? "border-red-500" : ""}`}
                  />
                  {errors.cvv && (
                    <p className="text-red-500 text-sm">{errors.cvv}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="hidden lg:block">
            <Button
              type="submit"
              className="w-full bg-green-500 text-white hover:bg-green-600"
            >
              Place Order
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
