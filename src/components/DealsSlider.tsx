"use client";

import { pizzas, beverages, desserts, combos } from "@/data/db";
import { Combo } from "@/data/db";
import Image from "next/image";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useCart } from "@/context/CartContext";

// Type for the state that keeps track of selected items
interface SelectedItems {
  pizzas: string[];
  desserts: string[];
  beverages: string[];
}

export function DealsSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const { addToCart } = useCart();

  const [selectedItems, setSelectedItems] = React.useState<SelectedItems>({
    pizzas: [],
    desserts: [],
    beverages: [],
  });

  const handleSelectChange = (
    category: "pizzas" | "desserts" | "beverages",
    index: number,
    value: string
  ) => {
    setSelectedItems((prev) => {
      const updatedSelections = [...prev[category]];
      updatedSelections[index] = value;
      return { ...prev, [category]: updatedSelections };
    });
  };

  const isAddToOrderDisabled = (combo: Combo) => {
    const requiredSelections = {
      pizzas: combo.pizzaQty,
      desserts: combo.dessertQty,
      beverages: combo.beverageQty,
    };
    return (
      selectedItems.pizzas.length < requiredSelections.pizzas ||
      selectedItems.desserts.length < requiredSelections.desserts ||
      selectedItems.beverages.length < requiredSelections.beverages
    );
  };

  return (
    <>
      <h2
        className="scroll-m-20 text-center pb-4 text-3xl font-semibold tracking-tight text-white underline
        decoration-primary underline-offset-8 decoration-dashed"
      >
        Hot Deals
      </h2>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-xs min-[440px]:max-w-xs lg:max-w-[350px]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {combos.map((combo) => (
            <CarouselItem key={combo.id}>
              <Card className="border-2 border-gray-200">
                <CardHeader className="grow">
                  <CardTitle>{combo.name}</CardTitle>
                  <CardDescription>{combo.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="relative w-full h-0 pb-[75%]">
                    <Image
                      src={combo.image}
                      alt="combo image"
                      fill
                      sizes="100%"
                      className="object-cover rounded-xl"
                    />
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between">
                  <p className="text-lg">${combo.price}</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Select Items</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-2xl">
                          Select Items
                        </DialogTitle>
                        <DialogDescription>
                          Select items for your combo!
                        </DialogDescription>
                      </DialogHeader>

                      <div className="text-black space-y-6">
                        <div className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-lg shadow-sm bg-gray-50">
                          <div className="flex items-center space-x-4 w-full sm:w-auto">
                            <div className="relative w-32 h-32 sm:w-20 sm:h-20 flex-shrink-0">
                              <Image
                                src={combo.image}
                                alt={combo.name}
                                fill
                                sizes="100%"
                                className="object-cover rounded-md"
                              />
                            </div>
                            <div className="flex-1 text-center sm:text-left">
                              <h2 className="text-xl font-semibold ">
                                {combo.name}
                              </h2>

                              <p className="font-medium hidden md:block text-gray-600">
                                {combo.description}
                              </p>
                              <p className="font-medium text-gray-600">
                                Price: ${combo.price}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          {/* Select Pizzas */}
                          {[...Array(combo.pizzaQty)].map((_, index) => (
                            <div
                              key={`pizza-${index}`}
                              className="flex flex-col gap-2"
                            >
                              <p className="text-lg font-semibold leading-none tracking-tight">
                                Select Pizza {index + 1}
                              </p>
                              <Select
                                onValueChange={(value) =>
                                  handleSelectChange("pizzas", index, value)
                                }
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Select Pizza" />
                                </SelectTrigger>
                                <SelectContent>
                                  {pizzas.map((pizza) => (
                                    <SelectItem
                                      key={pizza.id}
                                      value={`${pizza.name}`}
                                    >
                                      {pizza.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          ))}

                          {/* Select Desserts */}
                          {[...Array(combo.dessertQty)].map((_, index) => (
                            <div
                              key={`dessert-${index}`}
                              className="flex flex-col gap-2"
                            >
                              <p className="text-lg font-semibold leading-none tracking-tight">
                                Select Dessert {index + 1}
                              </p>
                              <Select
                                onValueChange={(value) =>
                                  handleSelectChange("desserts", index, value)
                                }
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Select Dessert" />
                                </SelectTrigger>
                                <SelectContent>
                                  {desserts.map((dessert) => (
                                    <SelectItem
                                      key={dessert.id}
                                      value={`${dessert.name}`}
                                    >
                                      {dessert.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          ))}

                          {/* Select Beverages */}
                          {[...Array(combo.beverageQty)].map((_, index) => (
                            <div
                              key={`beverage-${index}`}
                              className="flex flex-col gap-2"
                            >
                              <p className="text-lg font-semibold leading-none tracking-tight">
                                Select Beverage {index + 1}
                              </p>
                              <Select
                                onValueChange={(value) =>
                                  handleSelectChange("beverages", index, value)
                                }
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Select Beverage" />
                                </SelectTrigger>
                                <SelectContent>
                                  {beverages.map((beverage) => (
                                    <SelectItem
                                      key={beverage.id}
                                      value={`${beverage.name}`}
                                    >
                                      {beverage.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-center mt-4">
                          <DialogClose asChild>
                            <Button
                              className="w-full"
                              onClick={() => {
                                if (!isAddToOrderDisabled(combo)) {
                                  addToCart(combo);
                                }
                              }}
                              disabled={isAddToOrderDisabled(combo)}
                            >
                              {isAddToOrderDisabled(combo)
                                ? "Select all items"
                                : "Add to order"}
                            </Button>
                          </DialogClose>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="lg:hidden">
          <CarouselPrevious className="absolute top-100 mt-8 left-[30%]" />
          <CarouselNext className="absolute top-100 mt-8 right-[30%]" />
        </div>
        <div className="hidden lg:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </>
  );
}
