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
  const messageLines = message.split("\n");

  return (
    <div className="w-full relative overflow-hidden bg-light-blue h-[232px] md:h-[450px] flex flex-col justify-center items-start">
      {/* Content container */}
      <div className="relative z-10 flex flex-col w-full wrapper mx-auto px-[25px] md:px-[70px] md:pr-[25%] pr-[25%] md:gap-[24px] gap-3 md:justify-start md:items-start h-full pt-[22px] md:pt-[63px]">
        {messageLines.map((line, index) => (
          <h1 key={index} className="text-denim">
            {line}
          </h1>
        ))}
        <div className={cn({ hidden: variant === "hidden" })}>
          <Button name="FIND A CENTER" />
        </div>
      </div>

      {/* Background image */}
      <Image
        src={"/assets/images/homepage-hero-bg.png"}
        alt="homepage-hero-bg"
        width={1920}
        height={118}
        className="absolute bottom-0 z-1 md:block hidden"
      />

      {/* Hero image */}
      <Image
        src={`/assets/images/${image}.png`}
        alt={image}
        width={563}
        height={450}
        className={cn(
          "absolute right-0 top-0 z-2 h-[232px] md:h-[450px] w-[282px] md:w-[563px] md:right-[93px]",
          { "-mr-[85px] md:mr-0": image === "find-a-center-hero" }
        )}
      />
    </div>
  );
};

export default HeroSection;
