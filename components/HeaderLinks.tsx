import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const HeaderLinks = ({ variant }: { variant?: string }) => {
  return (
    <div
      className={cn("z-50 flex gap-[36px] text-denim", {
        "flex-col": variant === "mobile",
      })}
    >
      <Link href={"https://27404-1.portal.athenahealth.com/"}>
        <p className="flex items-center gap-2 font-bold hover:brightness-75">
          Patient Portal{" "}
          <Image
            src={"/assets/external-link.png"}
            width={17}
            height={16}
            alt="external-link"
            className="h-[16px]"
          />
        </p>
      </Link>
      <Link
        href={
          "https://payment.patient.athenahealth.com/statement/?src=statement "
        }
      >
        <p className="flex items-center gap-2 font-bold hover:brightness-75">
          Pay My Bill
          <Image
            src={"/assets/external-link.png"}
            width={17}
            height={16}
            alt="external-link"
            className="h-[16px]"
          />
        </p>
      </Link>
      <Link href={"/location"}>
        <p className="font-bold hover:brightness-75">Find A Center</p>
      </Link>
    </div>
  );
};

export default HeaderLinks;
