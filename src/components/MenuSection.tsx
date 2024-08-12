import { pizzas } from "../data/db";
import Image from "next/image";

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
      <div className="grid grid-cols-3 gap-8 p-6 py-12 w-[80%] mx-auto max-w-[1400px]">
        {pizzas.map((pizza) => (
          <Card key={pizza.id}>
            <CardHeader>
              <CardTitle>{pizza.name}</CardTitle>
              <CardDescription>{pizza.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
              <Image
                width={50}
                height={50}
                src={`/menu/pizzas/${pizza.image}`}
                alt="pizza image"
              ></Image>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default MenuSection;
