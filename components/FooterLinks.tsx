import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <div
      className={cn(
        "z-50 flex flex-col gap-[36px] bg-footer-nav px-[24px] py-[32px] text-denim md:flex-row md:px-[70px]",
      )}
    >
      <div className="flex gap-[24px]">
        <div className="">
          <Image
            src={"/assets/cross-icon.svg"}
            alt="cross-icon"
            width={32}
            height={29}
          />
        </div>
        <div className="flex flex-col gap-[24px] md:flex-row">
          <Link href={"/location"}>
            <p className="flex items-center gap-2 font-bold hover:brightness-75">
              Find A Center
            </p>
          </Link>
          <Link href={"/contact-us"}>
            <p className="flex items-center gap-2 font-bold hover:brightness-75">
              Contact Us
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
          <Link href={"/billing-information"}>
            <p className="font-bold hover:brightness-75">Billing Question</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
