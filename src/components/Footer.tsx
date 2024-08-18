import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-8 border-t">
      <div className=" max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src={logo} width={40} alt="logo" />
          <p className="font-bold text-xl">Pizza Delivery</p>
        </div>

        <nav className="mt-6 md:mt-0 text-center flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
          <Link href="/">Home</Link>
          <Link href="/#menu">Menu</Link>
          <Link href="/locations">Locations</Link>
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Franchising</p>
        </nav>

        <div className="mt-6 md:mt-0 text-center md:text-right">
          <p>123 Pizza Street, Foodtown</p>
          <p>(123) 456-7890</p>
          <p>
            <Link
              href="mailto:info@pizzadelivery.com"
              className="hover:underline"
            >
              info@pizzadelivery.com
            </Link>
          </p>
        </div>
      </div>

      <div className="border-t mt-8 pt-8 text-center">
        <p>
          &copy; {new Date().getFullYear()} Pizza Delivery. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
