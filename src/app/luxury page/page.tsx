"use client";

export default function YourPage() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full max-w-7xl items-center bg-[#F6F7FE] ">
        
        {/* Left Side Image - 1/3 width on md+ */}
        <div className="flex  justify-center md:justify-start items-center col-span-1 mb-6 md:mb-0 ">
          <img 
            src="/assets/image.png" 
            alt="Water Product"
            className="w-2/3 md:w-3/4 h-auto object-contain"
          />
        </div>

        {/* Right Side Feature Images - 2/3 width on md+ */}
        <div className="md:col-span-2 w-full">
          <div className="w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-green-300">
              The Luxury Of Pure Hydration
            </h2>
            <p className="text-lg md:text-2xl font-semibold text-center mb-8 text-black">
              Explore The Science, Care And Craftmanship Behind Every Drop
            </p>
            <div className="flex flex-wrap justify-center md:justify-between items-center w-full gap-y-6 px-2">
              {[
                { title: "Feature 1", img: "/assets/feature1.png" },
                { title: "Feature 2", img: "/assets/feature2.png" },
                { title: "Feature 3", img: "/assets/feature3.png" },
                { title: "Feature 4", img: "/assets/feature4.png" },
                { title: "Feature 5", img: "/assets/feature4.png" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center relative px-2 w-1/2 sm:w-1/3 md:w-auto">
                  <img 
                    src={item.img}
                    alt={item.title}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain mb-2"
                  />
                  {index < 4 && (
                    <div className="hidden md:block absolute right-0 top-0 h-full w-[1px] bg-black" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
