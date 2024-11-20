import { cn } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const FooterLinks = ({ variant }: { variant?: string }) => {
  return (
    <div
      className={cn(
        "flex flex-col bg-footer-nav md:flex-row px-[24px] md:px-[70px] py-[32px] text-denim gap-[36px] z-50"
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
        <div className="flex flex-col md:flex-row gap-[24px]">
          <Link href={"/find-a-center"}>
            <p className="font-bold hover:brightness-75 items-center flex gap-2">
              Find A Center
            </p>
          </Link>
          <Link href={"/contact-us"}>
            <p className="font-bold hover:brightness-75 items-center flex gap-2">
              Contact Us
            </p>
          </Link>
          <Link
            href={
              "https://payment.patient.athenahealth.com/statement/?src=statement "
            }
          >
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
          <Link href={"/billing-questions"}>
            <p className="font-bold hover:brightness-75">Billing Question</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
