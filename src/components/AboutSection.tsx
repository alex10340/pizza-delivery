import { Button } from "@/components/ui/button";
import { MapPinned } from "lucide-react";
import Image from "next/image";
import delivery from "../assets/delivery.jpg";

import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="relative h-[600px] flex items-center justify-center bg-black/60">
      <Image
        src={delivery}
        alt="pizza image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-[-1]"
      />

      <div className="text-white max-w-[400px] text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Quick delivery.
          <br />
          <span className="text-yellow-400">Since 2004.</span>
        </h1>
        <p className="leading-7 mt-6 opacity-80">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa eum
          natus alias quasi perferendis facere neque voluptates quaerat, harum
          et!
        </p>
        <Link href="/locations">
          <Button className="mt-12 w-[80%] text-md font-bold" size={"lg"}>
            <MapPinned className="mr-2" />
            View Locations
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default AboutSection;
