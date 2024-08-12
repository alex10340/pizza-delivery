import { pizzas } from "../data/db";
import Image from "next/image";

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
      <h2 className="scroll-m-20 border-b w-[80%] text-3xl font-semibold tracking-tight first:mt-0 text-center p-6 max-w-[1400px] mx-auto">
        Menu
      </h2>
      <div className="grid grid-cols-4 gap-8 p-6 py-12 w-[80%] mx-auto max-w-[1400px]">
        {pizzas.map((pizza) => (
          <Card key={pizza.id} className="flex flex-col">
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
                  className="object-cover rounded-xl border"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p className="text-lg ">${pizza.price}</p>
              <Button>Add to order</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default MenuSection;
