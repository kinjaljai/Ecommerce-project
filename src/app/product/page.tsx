"use client";
import React from "react";

export default function OurProducts() {
  return (
    <section className="w-full bg-[#ffffff] py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-green-400 mb-4">
          Our  Products
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Pure Hydration ,Crafted For Every Lifestyle
        </p>

        {/* Product Images Row */}
        <div className="flex flex-wrap justify-center gap-16  ">
          {/* Image 1 */}
          <div className="w-80 md:w-90">
            <img
              src="/assets/product1.png"
              alt="Product 1"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Image 2 (lowered slightly) */}
          <div className="w-80 md:w-100 mt-10 md:mt-20">
            <img
              src="/assets/product2.png"
              alt="Product 2"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Image 3 */}
          <div className="w-80 md:w-90">
            <img
              src="/assets/product3.png"
              alt="Product 3"
              className="w-full h-auto object-contain"
            />
          </div>
          
        </div>
 <button className="px-4 py-2 bg-green-400 hover:bg-green-500 text-white rounded-lg text-sm transition duration-300 mt-5">
                View Products
              </button>
      </div>
    </section>
  );
}
