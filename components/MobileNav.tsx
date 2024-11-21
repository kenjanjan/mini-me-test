import { cn } from "@/utils/utils";
import Image from "next/image";
import HeaderLinks from "./HeaderLinks";
import CustomBurgerMenu from "./CustomBurgerMenu";
import Link from "next/link";

const MobileNav = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "h-[80px] flex w-full justify-between mx-auto items-center px-[16px]",
        className
      )}
    >
      <label
        htmlFor="mobile-nav-toggle"
        className="h-full flex flex-col items-center justify-center cursor-pointer"
      >
        <input type="checkbox" id="mobile-nav-toggle" className="peer hidden" />

        <CustomBurgerMenu />

        <div className="absolute right-0 border-b border-b-[#c9c9c9] bg-white w-full mt-[277.5px] px-[25px] py-8 transition-transform duration-300 transform scale-y-0 origin-top peer-checked:scale-y-100">
          <HeaderLinks variant="mobile" />
        </div>
      </label>
      <div>
        <Link href="/">
          <Image
            src={"/assets/me-logo.png"}
            width={214.29}
            height={40}
            alt="me-logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
