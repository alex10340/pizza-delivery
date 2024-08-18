import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pizza Delivery",
  description: "Generated by create next app",
};

const bricolage = Bricolage_Grotesque({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.className} flex flex-col min-h-screen`}>
        <Navbar />
        <CartProvider>
          <div className="grow">{children}</div>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
