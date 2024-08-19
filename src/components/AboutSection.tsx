import { Button } from "@/components/ui/button";
import { MapPinned } from "lucide-react";
import Image from "next/image";
import backgroundImg from "@/assets/pizza3.jpg";

import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="mt-6 relative h-[600px] flex items-center justify-center bg-black/60">
      <Image
        src={backgroundImg}
        alt="pizza image"
        fill
        sizes="100%"
        className="absolute inset-0 z-[-1] object-cover"
      />

      <div className="text-white max-w-[400px] text-center p-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl">
          Quick delivery.
          <br />
          <span className="text-yellow-400">Since 2004.</span>
        </h1>
        <p className="text-sm sm:text-base leading-6 mt-6 opacity-80">
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
