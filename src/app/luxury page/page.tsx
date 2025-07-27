"use client";

export default function YourPage() {
  return (
     <div className=" flex justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full max-w-7xl items-center bg-[#F6F7FE]">
        
        {/* Left Side Image - 1/3 width on md+ */}
        <div className="flex items-center col-span-1">
          <img 
            src="/assets/image.png" 
            alt="Water Product"
            className="w-2/3 md:w-3/4 h-auto object-contain "
          />
        </div>

        {/* Right Side Feature Images - 2/3 width on md+ */}
        <div className="md:col-span-2">
            <div>
          <div className="flex justify-between items-center w-full px-2">
            {[
              { title: "Feature 1", img: "/assets/feature1.png" },
              { title: "Feature 2", img: "/assets/feature2.png" },
              { title: "Feature 3", img: "/assets/feature3.png" },
              { title: "Feature 4", img: "/assets/feature4.png" },
              { title: "Feature 5", img: "/assets/feature4.png" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center relative px-2">
                <img 
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 object-contain mb-2"
                />
                {index < 4 && (
                  <div className="absolute right-0 top-0 h-full w-[1px] bg-black" />
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
