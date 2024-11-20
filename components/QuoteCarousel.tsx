"use client";

import React, { useState } from "react";
import { cn } from "@/utils/utils";
import Image from "next/image";

interface QuoteCarouselProps {
  quotes: { quote: string; citation: string }[];
}

const QuoteCarousel = ({ quotes }: QuoteCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextQuote = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevQuote = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="md:relative text-white w-full mx-auto overflow-hidden">
      {/* Quotes Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {quotes.map(({ quote, citation }, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full flex items-center justify-center"
          >
            <div className="md:max-w-[750px] max-w-[300px] mb-[60px] flex flex-col gap-4 sm:gap-6 items-center text-center px-4">
              <div className="blockquote text-lg sm:text-xl md:text-2xl">
                {quote}
              </div>
              <div className="citation text-sm sm:text-base md:text-lg">
                {citation}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute top-[50%] md:inset-0 flex right-0 items-center justify-between w-full px-0">
        <button onClick={prevQuote} className="p-2 text-white">
          <Image
            src={"/assets/next-icon.svg"}
            alt="previous-icon"
            width={23}
            height={48}
            className="h-[24px] md:h-[48px]"
          />
        </button>
        <button onClick={nextQuote} className="p-2 text-white">
          <Image
            src={"/assets/next-icon.svg"}
            alt="next-icon"
            width={23}
            height={48}
            className="h-[24px] md:h-[48px] rotate-180"
          />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-[48px] md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {quotes.map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-2 w-2 sm:h-3 sm:w-3 rounded-full",
              currentIndex === index ? "bg-white" : "bg-secondary"
            )}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default QuoteCarousel;