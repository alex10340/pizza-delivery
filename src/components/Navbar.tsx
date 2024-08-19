"use client";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import logo from "@/assets/logo.png";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const { getTotalItems } = useCart();

  return (
    <div className="shadow-lg sticky top-0 bg-white z-50 text-black">
      <div className="relative flex items-center justify-between h-[4.5rem] px-6 max-w-[1400px] mx-auto">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image src={logo} width={40} alt="logo" />
            <p className="font-bold text-xl">Pizza Delivery</p>
          </div>
        </Link>

        <div className=" hidden sm:block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
          <div className="space-x-2">
            <Link href="/">
              <Button variant={"ghost"}>Home</Button>
            </Link>

            <Link href="/#menu">
              <Button variant={"ghost"}>Menu</Button>
            </Link>

            <Link href="/locations">
              <Button variant={"ghost"}>Locations</Button>
            </Link>
          </div>
        </div>
        <Link href="/order">
          <Button>
            <ShoppingBag className="mr-2 h-4 w-4" />
            {getTotalItems()}
            {getTotalItems() == 1 ? " item" : " items"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
