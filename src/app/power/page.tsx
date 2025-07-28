"use client";
import React from "react";

export default function ProductShowcaseSection() {
  return (
    <section className="w-full bg-[#ffffff] py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-evenly ">
        {/* Left Side Text */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-4xl font-bold text-green-400">
            The Power of Alkaline Hydration
          </h2>
          <p className="text-lg text-black ">
            Balance your body. Elevate your energy.
          </p>
          <p className="text-lg text-black ">One sip at a time.</p>
          <p className="text-sm text-gray-700 font-light">
            Unlike ordinary bottled water, alkaline water has a higher pH level
            (typically 8.5 to 9.5) that helps neutralize acidity in the body,
            improve hydration, and support overall wellness. It's not just about
            quenching thirst — it's about restoring balance from within.
          </p>

          <p className="text-sm text-gray-700 font-light">
            Founded with a passion for wellness and purity, our team ensures
            every drop you drink is triple-filtered, mineral-balanced, and
            delivered fresh to your doorstep. We serve households, offices,
            gyms, and cafes — offering flexible delivery schedules and
            eco-friendly bottle exchange programs to reduce plastic waste. We
            serve households, offices, gyms, and cafes — offering flexible
            delivery schedules and eco-friendly bottle exchange programs to
            reduce plastic waste.
          </p>
        </div>

        {/* Right Side Images */}
        <div className="relative flex justify-center items-center">
          {/* Image 3 (Top Center) */}
          <div className="absolute  z-8">
            <img
              src="/assets/p3.png"
              alt="Top Product"
              className="w-40 md:w-60 h-auto object-contain mx-auto"
            />
          </div>

          {/* Bottom Row (Image 1 & 2) */}
          <div className="flex gap-6 mt-12 md:mt-16">
            <img
              src="/assets/p1.png"
              alt="Product 1"
              className="w-40 md:w-50  h-96 object-contain"
            />
            <img
              src="/assets/p2.png"
              alt="Product 2"
              className="w-40 md:w-50 h-96 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
