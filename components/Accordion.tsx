"use client";

import { cn } from "@/utils/utils";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React, { createContext, useContext, useState, ReactNode } from "react";

const AccordionContext = createContext<{
  openId: string | null;
  setOpenId: (id: string | null) => void;
}>({
  openId: null,
  setOpenId: () => {},
});

type AccordionProviderProps = {
  children: ReactNode;
};

export const AccordionProvider = ({ children }: AccordionProviderProps) => {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <AccordionContext.Provider value={{ openId, setOpenId }}>
      {children}
    </AccordionContext.Provider>
  );
};

type AccordionProps = {
  icon: string;
  id: string;
  title: string;
  children: ReactNode;
};

const Accordion = ({ icon, id, title, children }: AccordionProps) => {
  const { openId, setOpenId } = useContext(AccordionContext);

  const isOpen = openId === id;

  const handleToggle = () => {
    setOpenId(isOpen ? null : id);
  };

  return (
    <div className="w-full bg-white mb-1 py-[18px] px-[26px]">
      <div
        className="font-bold cursor-pointer flex justify-between items-center text-primary"
        onClick={handleToggle}
      >
        <span className="flex items-center gap-[16px] text-primary font-bold text-[21px] md:text-[24px] leading-[25.2px] md:leading-[28.8px]">
          <Image
            src={`/assets/icons/${icon}.svg`}
            alt={icon}
            width={50}
            height={50}
          />
          {title}
        </span>
        <Image
          src={"/assets/dropdown-icon.svg"}
          alt="dropdown-icon"
          width={24}
          height={16}
          className={cn("duration-300 transition-all", {
            "rotate-180": isOpen,
          })}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-1000 ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        {isOpen && <div className="p-4 bg-white text-primary">{children}</div>}
      </div>
    </div>
  );
};

export default Accordion;
