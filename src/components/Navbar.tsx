import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import logo from "../assets/logo.png";

import Image from "next/image";

const Navbar = () => {
  return (
    <div className="shadow-lg sticky top-0 bg-white z-50">
      <div className="relative flex items-center justify-between h-[4.5rem] px-6 max-w-[1400px] mx-auto">
        <div className="flex items-center space-x-2">
          <Image src={logo} width={40} alt="logo" />
          <p className="font-bold text-xl">Pizza Delivery</p>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="space-x-2">
            <Button variant={"ghost"}>Home</Button>
            <Button variant={"ghost"}>Menu</Button>
            <Button variant={"ghost"}>Locations</Button>
          </div>
        </div>
        <Button>
          <ShoppingBag className="mr-2 h-4 w-4" /> 3 items
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
