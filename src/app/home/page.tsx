"use client";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative w-full max-w-[1920px] mx-auto">
      {/* Background Image Container */}
      <div className="relative w-full h-[500px] sm:h-[500px] md:h-[400px] lg:h-[650px]">
        <Image
          src="/assets/images.png"
          alt="Alkaline Water"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay Image */}
      <div
        className="
          absolute
          left-1/2
          top-[10px] sm:top-[470px] md:top-[500px] lg:top-[200px]
          transform -translate-x-1/2
          w-[100%] sm:w-[60%] md:w-[60%] lg:w-[100%]
          z-20
          h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]
          flex items-center justify-center
          
        "
      >
        <Image
          src="/assets/image1.png"
          alt="Overlay"
          width={1200}
          height={1200}
          className=" object-contain"
        />
      </div>
    </div>
  );
}
