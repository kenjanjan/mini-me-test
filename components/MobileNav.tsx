import { cn } from "@/utils/utils";
import Image from "next/image";
import HeaderLinks from "./HeaderLinks";
import CustomBurgerMenu from "./CustomBurgerMenu";
import Link from "next/link";

const MobileNav = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "mx-auto flex h-[80px] w-full items-center justify-between px-[16px]",
        className,
      )}
    >
      <label
        htmlFor="mobile-nav-toggle"
        className="flex h-full cursor-pointer flex-col items-center justify-center"
      >
        <input type="checkbox" id="mobile-nav-toggle" className="peer hidden" />

        <CustomBurgerMenu />

        <div className="absolute right-0 mt-[277.5px] w-full origin-top scale-y-0 transform border-b border-b-[#c9c9c9] bg-white px-[25px] py-8 transition-transform duration-300 peer-checked:scale-y-100">
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
