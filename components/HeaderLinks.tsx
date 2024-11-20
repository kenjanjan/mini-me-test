import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const HeaderLinks = ({ variant }: { variant?: string }) => {
  return (
    <div
      className={cn("flex text-denim gap-[36px] z-50", {
        "flex-col": variant === "mobile",
      })}
    >
      <Link href={"https://27404-1.portal.athenahealth.com/"}>
        <p className="font-bold hover:brightness-75 items-center flex gap-2">
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
      <Link href={"https://payment.patient.athenahealth.com/statement/?src=statement "}>
        <p className="font-bold hover:brightness-75 flex items-center gap-2">
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
      <Link href={"/find-a-center"}>
        <p className="font-bold hover:brightness-75">Find A Center</p>
      </Link>
    </div>
  );
};

export default HeaderLinks;
