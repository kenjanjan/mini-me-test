import { cn } from "@/utils/utils";
import React from "react";
import Image from "next/image";
import HeaderLinks from "./HeaderLinks";
import Link from "next/link";

const Navigation = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-[94px] flex w-full justify-between mx-auto items-center px-[70px]",
        className
      )}
    >
      <Link href="/">
        <Image
          src={"/assets/me-logo.png"}
          width={214.29}
          height={40}
          alt="me-logo"
          className="min-w-[214.29px]"
        />
      </Link>
      <HeaderLinks />
    </div>
  );
};

export default Navigation;
