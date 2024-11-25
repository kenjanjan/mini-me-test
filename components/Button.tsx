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
              "capitalize px-[28px] py-[14px] border border-terracota text-terracota font-bold leading-[25.2px] hover:bg-terracota hover:text-white",
              { "bg-cream": variant === "btn-2" },
              {
                "bg-terracota text-white leading-[19.2px] hover:bg-none hover:text-terracota":
                  variant === "btn-3",
              },
              "peer-checked:bg-terracota peer-checked:text-white"
            )}
          >
            {name}
          </Link>
        </label>
      ) : (
        <label className="relative w-full flex cursor-pointer items-center justify-center">
          <input type="checkbox" className="peer hidden" />
          <button
            className={cn(
              "capitalize px-[28px] py-[14px] border border-terracota text-terracota font-bold leading-[25.2px] hover:bg-terracota hover:text-white",
              { "bg-cream": variant === "btn-2" },
              "peer-checked:bg-white peer-checked:text-terracota text-[16px] leading-[19.2px] hover:bg-white hover:text-terracota w-full max-w-[400px]",
              { "bg-terracota text-white": variant === "btn-3" }
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
