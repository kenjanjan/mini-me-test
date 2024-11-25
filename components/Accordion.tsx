"use client";

import { cn } from "@/utils/utils";
import Image from "next/image";
import React, { createContext, useContext, useState, ReactNode } from "react";

type Variant = "independent" | "exclusive"; // Define variants

const AccordionContext = createContext<{
  openIds: string[]; // Track multiple open IDs
  toggleId: (id: string) => void;
  variant: Variant;
}>({
  openIds: [],
  toggleId: () => {},
  variant: "independent", // Default variant
});

type AccordionProviderProps = {
  children: ReactNode;
  variant?: Variant; // Add the variant prop
};

export const AccordionProvider = ({
  children,
  variant = "independent", // Default to "independent"
}: AccordionProviderProps) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleId = (id: string) => {
    setOpenIds((prev) => {
      if (variant === "exclusive") {
        return prev.includes(id) ? [] : [id]; // Only one open
      }
      // Independent mode
      return prev.includes(id)
        ? prev.filter((openId) => openId !== id)
        : [...prev, id];
    });
  };

  return (
    <AccordionContext.Provider value={{ openIds, toggleId, variant }}>
      {children}
    </AccordionContext.Provider>
  );
};

type AccordionProps = {
  icon?: string;
  id: string;
  title: string;
  children: ReactNode;
};

const Accordion = ({ icon, id, title, children }: AccordionProps) => {
  const { openIds, toggleId, variant } = useContext(AccordionContext);

  const isOpen = openIds.includes(id);

  const handleToggle = () => {
    toggleId(id);
  };

  return (
    <div className={cn("mb-1 w-full bg-white")}>
      <div
        className={cn(
          "relative flex cursor-pointer justify-between px-[26px] py-[18px] font-bold text-primary md:gap-6",
          {
            "items-center justify-center bg-beige": variant === "independent",
            "bg-terracota text-white": variant === "independent" && isOpen,
            "border-b border-terracota": variant === "exclusive",
          },
        )}
        onClick={handleToggle}
      >
        <span
          className={cn(
            "flex items-center gap-[16px] text-[21px] font-bold leading-[25.2px] text-primary md:text-[24px] md:leading-[28.8px]",
            { "text-center text-white": variant === "independent" && isOpen },
            { "text-center": variant === "independent" },
          )}
        >
          <Image
            src={`/assets/icons/${icon}.svg`}
            alt={icon || "default-icon"}
            width={50}
            height={50}
            className={cn({ hidden: variant === "independent" })}
          />
          {title}
        </span>
        <Image
          src={`/assets/${
            variant === "exclusive"
              ? "dropdown-icon"
              : variant === "independent" && isOpen
                ? "chevron-down-active"
                : "chevron-down"
          }.svg`}
          alt={`${variant === "exclusive" ? "dropdown-icon" : "chevron-down"}`}
          width={20}
          height={14}
          className={cn("transition-all duration-300", {
            "rotate-180": isOpen,
            "absolute right-[16px] md:relative": variant === "independent",
          })}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-1000 ${
          isOpen ? "max-h-[2000px]" : "max-h-0"
        }`}
      >
        {isOpen && <div className="bg-white p-4 text-primary">{children}</div>}
      </div>
    </div>
  );
};

export default Accordion;
