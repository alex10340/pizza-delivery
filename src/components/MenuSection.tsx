import { pizzas } from "../data/db";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MenuSection = () => {
  return (
    <>
      <h2
        id="menu-section"
        className=" scroll-m-[4.4rem] border-b w-[80%] text-3xl font-semibold tracking-tight first:mt-0 text-center p-6 max-w-[1400px] mx-auto"
      >
        Menu
      </h2>
      <div className="grid grid-cols-4 mb-6 gap-8 p-6 py-12 mx-auto max-w-[1400px]">
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
              className={`flex flex-col relative border-2 ${borderColor} hover:shadow-xl hover:scale-105 transition-all duration-300`}
            >
              <CardHeader className="grow">
                <CardTitle>{pizza.name}</CardTitle>
                <CardDescription>{pizza.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="relative w-full h-0 pb-[75%]">
                  <Image
                    src={`/menu/pizzas/${pizza.image}`}
                    alt="pizza image"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </CardContent>

              <CardFooter className="flex justify-between">
                <p className="text-lg">${pizza.price}</p>
                <Button>Add to order</Button>
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
    </>
  );
};

export default MenuSection;
