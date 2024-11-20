import Image from "next/image";
import React from "react";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="w-full relative bg-light-blue h-[232px] md:h-[450px]  flex flex-col justify-center items-start">
      <div className="flex flex-col w-3/4 md:w-1/2 px-[25px] md:px-[100px] md:gap-[24px] gap-3 justify-start items-start">
        <h1 className="text-denim">walk in or schedule online</h1>
        <Button name="FIND A CENTER" />
      </div>
      <Image
        src={"/assets/images/homepage-hero-bg.png"}
        alt="homepage-hero-bg"
        width={1920}
        height={118}
        className="absolute bottom-0 z-1 md:block hidden"
      />
      <Image
        src={"/assets/images/homepage-hero-1.png"}
        alt="homepage-hero-1"
        width={563}
        height={450}
        className="absolute right-0 top-0 z-2 h-[232px] md:h-[450px] w-[282px] md:w-[563px] md:right-[93px]"
      />
    </div>
  );
};

export default HeroSection;
