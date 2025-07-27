"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 " >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center items-center">
        <nav className="space-x-6 text-white">
          <Link href="/" className="hover:text-black">Home</Link>
          <Link href="/about" className="hover:text-black">About Us</Link>
          <Link href="/products" className="hover:text-black">Products</Link>
          <Link href="/subscription" className="hover:text-black">Subscription</Link>
          <Link href="/contact" className="hover:text-black">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
