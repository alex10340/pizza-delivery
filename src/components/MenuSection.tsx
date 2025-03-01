"use client";

import { useCart } from "@/context/CartContext";
import { beverages, desserts, pizzas } from "@/data/db";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MenuSection = () => {
  const { addToCart } = useCart();

  return (
    <>
      <h2
        id="menu"
        className="scroll-m-[4.4rem] border-b w-[80%] text-3xl font-semibold tracking-tight first:mt-0 text-center p-6 max-w-[1400px] mx-auto"
      >
        Menu
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-6 pt-12 mx-auto max-w-[1400px]">
        {pizzas.map((pizza) => {
          const borderColor = pizza.popular
            ? "border-yellow-500"
            : pizza.new
            ? "border-green-500"
            : "border-gray-200";
          const badgeText = pizza.popular
            ? "Popular!"
            : pizza.new
            ? "New!"
            : null;
          const badgeColor = pizza.popular
            ? "bg-yellow-500"
            : pizza.new
            ? "bg-green-500"
            : null;

          return (
            <Card
              key={pizza.id}
              className={`flex flex-col relative border-2 ${borderColor} hover:shadow-xl transition-all duration-500`}
            >
              <CardHeader className="grow">
                <CardTitle>{pizza.name}</CardTitle>
                <CardDescription>{pizza.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="relative w-full h-0 pb-[75%]">
                  <Image
                    src={pizza.image}
                    alt="pizza image"
                    fill
                    sizes="300px"
                    className="object-cover rounded-xl"
                  />
                </div>
              </CardContent>

              <CardFooter className="flex justify-between">
                <p className="text-lg">${pizza.price}</p>
                <Button onClick={() => addToCart(pizza)}>Add to order</Button>
              </CardFooter>

              {badgeText && (
                <Badge
                  variant={"outline"}
                  className={`absolute top-[-12px] left-1/2 transform -translate-x-1/2 ${badgeColor} text-white`}
                >
                  {badgeText}
                </Badge>
              )}
            </Card>
          );
        })}
      </div>
      <h2
        id="beverages"
        className="scroll-m-[4.4rem] border-b w-[80%] text-3xl font-semibold tracking-tight first:mt-0 text-center p-6 max-w-[1400px] mx-auto"
      >
        Beverages
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:max-w-[800px] xl:max-w-[1400px] xl:grid-cols-4 gap-8 p-6 pt-12 mx-auto">
        {beverages.map((beverage) => {
          return (
            <Card
              key={beverage.id}
              className={`flex flex-col relative border-2 border-gray-200 hover:shadow-xl transition-all duration-500`}
            >
              <CardHeader className="grow">
                <CardTitle>{beverage.name}</CardTitle>
                <CardDescription>{beverage.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="relative w-full h-0 pb-[75%]">
                  <Image
                    src={beverage.image}
                    alt="beverage image"
                    fill
                    sizes="300px"
                    className="object-cover rounded-xl"
                  />
                </div>
              </CardContent>

              <CardFooter className="flex justify-between">
                <p className="text-lg">${beverage.price}</p>
                <Button onClick={() => addToCart(beverage)}>
                  Add to order
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <h2
        id="desserts"
        className="scroll-m-[4.4rem] border-b w-[80%] text-3xl font-semibold tracking-tight first:mt-0 text-center p-6 max-w-[1400px] mx-auto"
      >
        Desserts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:max-w-[800px] xl:max-w-[1400px] xl:grid-cols-4 gap-8 p-6 pt-12 mx-auto ">
        {desserts.map((dessert) => {
          return (
            <Card
              key={dessert.id}
              className={`flex flex-col relative border-2 border-gray-200 hover:shadow-xl transition-all duration-500`}
            >
              <CardHeader className="grow">
                <CardTitle>{dessert.name}</CardTitle>
                <CardDescription>{dessert.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="relative w-full h-0 pb-[75%]">
                  <Image
                    src={dessert.image}
                    alt="dessert image"
                    fill
                    sizes="300px"
                    className="object-cover object-top rounded-xl"
                  />
                </div>
              </CardContent>

              <CardFooter className="flex justify-between">
                <p className="text-lg">${dessert.price}</p>
                <Button onClick={() => addToCart(dessert)}>Add to order</Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default MenuSection;
