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
    <div className="relative flex h-[232px] w-full flex-col items-start justify-center overflow-hidden bg-light-blue md:h-[450px]">
      {/* Content container */}
      <div className="relative z-10 flex h-full w-3/4 flex-col gap-3 px-[25px] pt-[22px] md:w-1/2 md:items-start md:justify-start md:gap-[24px] md:px-[70px] md:pt-[63px]">
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
        className="z-1 absolute bottom-0 hidden md:block"
      />

      {/* Hero image */}
      <Image
        src={`/assets/images/${image}.png`}
        alt={image}
        width={563}
        height={450}
        className={cn(
          "z-2 absolute right-0 top-0 h-[232px] w-[282px] md:right-[93px] md:h-[450px] md:w-[563px]",
          { "-mr-[85px] md:mr-0": image === "find-a-center-hero" },
        )}
      />
    </div>
  );
};

export default HeroSection;
