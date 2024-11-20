import { cn } from "@/utils/utils";
import Image from "next/image";

const CustomBurgerMenu = () => {
  return (
    <>
      <div
        className={cn(
          "absolute top-7 transition-all duration-300 peer-checked:rotate-45 peer-checked:top-[38.5px]"
        )}
      >
        <Image src={"/assets/line.svg"} width={40} height={4} alt="line-1" />
      </div>
      <div
        className={cn(
          "transition-all duration-300 peer-checked:rotate-45"
        )}
      >
        <Image src={"/assets/line.svg"} width={40} height={4} alt="line-2" />
      </div>
      <div
        className={cn(
          "absolute bottom-7 transition-all duration-300 peer-checked:-rotate-45 peer-checked:bottom-[37px]"
        )}
      >
        <Image src={"/assets/line.svg"} width={40} height={4} alt="line-3" />
      </div>
    </>
  );
};

export default CustomBurgerMenu;
