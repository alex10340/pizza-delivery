import { Button } from "@/components/ui/button";
import { Pizza } from "lucide-react";
import Image from "next/image";
import backgroundImg from "../assets/pizza1.jpg";

import { DealsSlider } from "@/components/DealsSlider";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative px-[5vw] xl:px-[14vw] p-24 flex-col min-[900px]:flex-row flex items-center justify-around bg-black/60">
      <Image
        src={backgroundImg}
        alt="pizza image"
        fill
        className="absolute inset-0 z-[-1] object-cover"
      />

      <div className="mb-12 text-center min-[900px]:text-left text-white max-w-[400px]">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Delicious Pizza,
          <br />
          Just a Click Away!
        </h1>
        <p className="leading-7 mt-6 opacity-80">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eum
          natus alias quasi perferendis facere neque voluptates quaerat, harum
          et!
        </p>
        <Link href="/#menu-section">
          <Button className="mt-12 w-[80%] text-md font-bold" size={"lg"}>
            <Pizza className="mr-2 animate-in" />
            Order Now
          </Button>
        </Link>
      </div>
      <div className="">
        <DealsSlider />
      </div>
    </div>
  );
};
export default Hero;
