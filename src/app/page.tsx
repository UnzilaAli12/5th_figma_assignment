import React from "react";
import Image from "next/image";
const Homepage = () => {
  return (
    <div>
      <div className="w-full h-[134px] bg-[#A29875]  ">
      </div>
      <div className=" w-[439px] h-[94px] text-[75px] font-[Rye] leading-[93.75px] font-normal text-[#FFFFFF] absolute top-[20px] left-[26px] md:text-[60px] md:leading-[70px] sm:text-[50px] sm:leading-[60px]" >
      MANZZARI
      </div>

      <h1 className="w-[496px] h-[189px] absolute top-[316px] left-[176px] font-serif font-bold text-[40px] leading-[65.8px] tracking-[2.5%] text-[#000000] md:w-[90%] md:top-[250px] md:left-[20px] md:text-[35px] md:leading-[55px] sm:text-[30px] sm:leading-[45px] sm:w-full sm:left-[10px] sm:top-[200px]     ">
        IMPECCABLE CRAFTSMANSHIP AND FINESSE
      </h1>

      <p className=" w-[902px] h-[147px] absolute top-[533px] left-[171px] font-serif font-medium text-[30px] leading-[49.35px] tracking-[2.5%] text-[#787054]  md:w-[80%] md:text-[25px] md:leading-[40px] md:left-[20px] md:top-[450px] sm:w-full sm:text-[20px] sm:leading-[35px] sm:top-[400px] sm:left-[10px]  ">
        An example of intricate workmanship and detail, elegant <br /> necklaces and
        long and short chains form a part of our <br /> desirable collection.
        
      </p>

      <button className="w-[270px] h-[58px] absolute top-[730px] left-[176px] font-serif font-medium text-[25px] leading-[37.5px] bg-[#A29875] text-[#FFFFFF]  p-[10px] gap-[10px] rounded-[10px] md:top-[650px] md:left-[20px] md:text-[20px] md:w-[200px] sm:top-[600px] sm:left-[10px] sm:w-[180px] sm:text-[18px]   " >
      Explore Now
      </button>
<div className="absolute top-[198px] left-[60%] transform -translate-x-1/2 md:top-[150px] sm:top-[100px] sm:w-[80%] sm:h-[647px]" >
      <Image 
      src={"/next_image.svg"}
      alt={"image"}
      width={462}
      height={647}
        className="w-full h-auto object-cover rounded-lg"

      />
</div>


    </div>
  );
};

export default Homepage;
