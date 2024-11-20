import Image from "next/image";
import React from "react";
import Button from "./Button";
import { cn } from "@/utils/utils";

type HeroSectionProps = {
  message: string;
  image: string;
  variant?: string;
};

const HeroSection = ({ message, image, variant }: HeroSectionProps) => {
  return (
    <div className="w-full relative bg-light-blue h-[232px] md:h-[450px]  flex flex-col justify-center items-start">
      <div className="flex flex-col w-3/4 md:w-1/2 px-[25px] md:px-[100px] md:gap-[24px] gap-3 justify-start items-start">
        <h1 className="text-denim">{message}</h1>
        <div className={cn({ hidden: variant === "hidden" })}>
          <Button name="FIND A CENTER" />
        </div>
      </div>
      <Image
        src={"/assets/images/homepage-hero-bg.png"}
        alt="homepage-hero-bg"
        width={1920}
        height={118}
        className="absolute bottom-0 z-1 md:block hidden"
      />
      <Image
        src={`/assets/images/${image}.png`}
        alt={image}
        width={563}
        height={450}
        className="absolute right-0 top-0 z-2 h-[232px] md:h-[450px] w-[282px] md:w-[563px] md:right-[93px]"
      />
    </div>
  );
};

export default HeroSection;
