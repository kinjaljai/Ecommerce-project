"use client";
import React from 'react';

export default function StoryOfPuritySection() {
  return (
    <section className="w-full bg-white py-16 px-4 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Title and Subtitle */}
          <div className="space-y-1">
            <h2 className="text-4xl md:text-2xl font-bold text-green-300 leading-tight">
              Our Story Of Purity
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-black leading-relaxed">
                Crafted For The Health-Conscious,
                </p>
                 
            <p className="text-xl md:text-2xl font-semibold text-black leading-relaxed">
                Delivered With Care.
              </p>
              
         

            {/* More About Us Link */}
            <div className="pt-4">
              <a 
                href="#about" 
                className="inline-flex items-center text-teal-500 hover:text-teal-600 font-medium text-lg transition-colors duration-300"
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
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p className="text-base md:text-sm">
              At Genesis, We're More Than Just A Water Delivery Company — We're On A Mission To Bring 
              Better Hydration And Better Health To Every Home. With Our Scientifically Backed Alkaline Water 
              (PH 9.5+), We Help Neutralize Acidity, Support Metabolism, And Keep You Energized Naturally.
            </p>
            
            <p className="text-base md:text-sm">
              Founded With A Passion For Wellness And Purity, Our Team Ensures Every Drop You Drink Is 
              Triple-Filtered, Mineral-Balanced, And Delivered Fresh To Your Doorstep. We Serve Households, 
              Offices, Gyms, And Cafes — Offering Flexible Delivery Schedules And Eco-Friendly Bottle 
              Exchange Programs To Reduce Plastic Waste.
            </p>
            
            <p className="text-base md:text-sm">
              We Serve Households, Offices, Gyms, And Cafes — Offering Flexible Delivery Schedules And Eco-
              Friendly Bottle Exchange Programs To Reduce Plastic Waste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
