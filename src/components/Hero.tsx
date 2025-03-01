import { Button } from "@/components/ui/button";
import { Pizza } from "lucide-react";
import Image from "next/image";
import backgroundImg from "@/assets/pizza1.jpg";

import { DealsSlider } from "@/components/DealsSlider";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative flex items-center justify-around min-[900px]:flex-row flex-col px-2 md:px-16 lg:px-20 p-16 sm:p-24 bg-black/60">
      <Image
        src={backgroundImg}
        alt="pizza image"
        priority
        className="absolute inset-0 z-[-1] object-cover w-full h-full"
      />

      <div className="max-[900px]:mb-2 max-w-[1100px] w-full mx-auto flex flex-col min-[900px]:flex-row items-center justify-between relative">
        <div className="mb-12 text-center min-[900px]:text-left text-white">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl">
            Delicious Pizza,
            <br />
            Just a Click Away!
          </h1>
          <p className="text-sm sm:text-base mt-6 max-sm:w-[320px] max-w-[400px] xl:max-w-[495px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eum
            natus alias quasi perferendis facere neque voluptates quaerat, harum
            et!
          </p>
          <Link href="/#menu">
            <Button
              className="mt-12 w-80 sm:w-full text-md font-bold"
              size={"lg"}
            >
              <Pizza className="mr-2" />
              Order Now
            </Button>
          </Link>
        </div>
        <div>
          <DealsSlider />
        </div>
      </div>
    </div>
  );
};

export default Hero;
