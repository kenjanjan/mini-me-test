import { cn } from "@/utils/utils";
import Link from "next/link";

const Button = ({ name, variant }: { name: string; variant?: string }) => {
  return (
    <>
      {name === "FIND A CENTER" || name === "GET STARTED" ? (
        <label className="relative cursor-pointer">
          <input type="checkbox" className="peer hidden" />
          <Link
            href={`/${
              name === "FIND A CENTER" ? "location" : "virtual-visits"
            }`}
            className={cn(
              "border border-terracota px-[28px] py-[14px] font-bold capitalize leading-[25.2px] text-terracota hover:bg-terracota hover:text-white",
              { "bg-cream": variant === "btn-2" },
              {
                "bg-terracota leading-[19.2px] text-white hover:bg-none hover:text-terracota":
                  variant === "btn-3",
              },
              "peer-checked:bg-terracota peer-checked:text-white",
            )}
          >
            {name}
          </Link>
        </label>
      ) : (
        <label className="relative flex w-full cursor-pointer items-center justify-center">
          <input type="checkbox" className="peer hidden" />
          <button
            className={cn(
              "border border-terracota px-[28px] py-[14px] font-bold capitalize leading-[25.2px] text-terracota hover:bg-terracota hover:text-white",
              { "bg-cream": variant === "btn-2" },
              "w-full max-w-[400px] text-[16px] leading-[19.2px] hover:bg-white hover:text-terracota peer-checked:bg-white peer-checked:text-terracota",
              { "bg-terracota text-white": variant === "btn-3" },
            )}
          >
            {name}
          </button>
        </label>
      )}
    </>
  );
};

export default Button;
