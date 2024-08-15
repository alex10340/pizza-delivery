"use client";
import { combos } from "../data/db";
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

export function DealsSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <>
      <h2
        className="scroll-m-20 text-center pb-4 text-3xl font-semibold tracking-tight text-white underline
       decoration-yellow-400 underline-offset-8 decoration-dashed	"
      >
        Hot Deals
      </h2>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-[250px] min-[440px]:max-w-xs lg:max-w-[350px]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {combos.map((combo) => {
            return (
              <CarouselItem>
                <Card key={combo.id} className="border-2 border-gray-200">
                  <CardHeader className="grow">
                    <CardTitle>{combo.name}</CardTitle>
                    <CardDescription>{combo.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="relative w-full h-0 pb-[75%]">
                      <Image
                        src={`/menu/combos/${combo.image}`}
                        alt="combo image"
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                  </CardContent>

                  <CardFooter className="flex justify-between">
                    <p className="text-lg">${combo.price}</p>
                    <Button>Add to order</Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
