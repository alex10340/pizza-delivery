import { Button } from "@/components/ui/button";
import { Pizza } from "lucide-react";
import Image from "next/image";
import pizza1 from "../assets/pizza1.jpg";

import { DealsSlider } from "@/components/DealsSlider";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-[600px] flex items-center justify-center bg-black/60">
      <Image
        src={pizza1}
        alt="pizza image"
        fill
        className="absolute inset-0 z-[-1] object-cover"
      />

      <div className="text-white max-w-[400px]">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Delicious Pizza,
          <br />
          Just a Click Away!
        </h1>
        <p className="leading-7 mt-6 opacity-80">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eum
          natus alias quasi perferendis facere neque voluptates quaerat, harum
          et!
        </p>
        <Link href="/order">
          <Button className="mt-12 w-[80%] text-md font-bold" size={"lg"}>
            <Pizza className="mr-2" />
            Order Now
          </Button>
        </Link>
      </div>
      <div className="ml-48">
        <DealsSlider />
      </div>
    </div>
  );
};
export default Hero;
