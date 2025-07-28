"use client";
import React from 'react';

export default function StoryOfPuritySection() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Title and Subtitle */}
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-300 leading-tight text-center lg:text-left">
              Our Story Of Purity
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black leading-relaxed text-center lg:text-left">
              Crafted For The Health-Conscious,
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black leading-relaxed text-center lg:text-left">
              Delivered With Care.
            </p>

            {/* More About Us Link */}
            <div className="pt-4 text-center lg:text-left">
              <a 
                href="#about" 
                className="inline-flex items-center text-teal-500 hover:text-teal-600 font-medium text-base sm:text-lg transition-colors duration-300"
              >
                More About Us
                <svg 
                  className="ml-2 w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Description Text */}
          <div className="space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg text-justify">
            <p>
              At Genesis, we're more than just a water delivery company — we're on a mission to bring 
              better hydration and better health to every home. With our scientifically backed alkaline water 
              (pH 9.5+), we help neutralize acidity, support metabolism, and keep you energized naturally.
            </p>
            
            <p>
              Founded with a passion for wellness and purity, our team ensures every drop you drink is 
              triple-filtered, mineral-balanced, and delivered fresh to your doorstep. We serve households, 
              offices, gyms, and cafes — offering flexible delivery schedules and eco-friendly bottle 
              exchange programs to reduce plastic waste.
            </p>
            
            <p>
              We serve households, offices, gyms, and cafes — offering flexible delivery schedules and eco-
              friendly bottle exchange programs to reduce plastic waste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
