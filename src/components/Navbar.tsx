import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import logo from "../assets/logo.png";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="shadow-lg sticky top-0 bg-white z-50">
      <div className="relative flex items-center justify-between h-[4.5rem] px-6 max-w-[1400px] mx-auto">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image src={logo} width={40} alt="logo" />
            <p className="font-bold text-xl">Pizza Delivery</p>
          </div>
        </Link>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="space-x-2">
            <Link href="/">
              <Button variant={"ghost"}>Home</Button>
            </Link>

            <Link href="/#menu-section">
              <Button variant={"ghost"}>Menu</Button>
            </Link>

            <Link href="/locations">
              <Button variant={"ghost"}>Locations</Button>
            </Link>
          </div>
        </div>
        <Link href="/order">
          <Button>
            <ShoppingBag className="mr-2 h-4 w-4" /> 3 items
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
