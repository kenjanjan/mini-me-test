import Link from "next/link";
import React from "react";

const AverageWaitSection = () => {
  return (
    <div className="bg-terracota md:pt-[64px] pt-[48px] md:pb-[80px] pb-[64px] md:px-[180px] px-[16px] text-center flex flex-col gap-[48px] md:gap-[64px] items-center justify-center text-white">
      <div className="flex flex-col gap-3 w-3/4">
        <h2>we&apos;re here for you.</h2>
        <p className="italic">
          At MedExpress, we understand that accidents and illness can happen
          anytime; that&apos;s why we provide services and treatment when and where
          it&apos;s convenient for you.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-[24px] w-full items-center justify-between gap-[36px]">
        <div className="flex flex-col gap-8 md:gap-2 w-full">
          <h2 className="text-[64px] leading-[76.8px]">{"&lt;60"}</h2>
          <h2 className="text-[21px] leading-[25.2px]">Minute Wait Time</h2>
          <p>Most patients are in and out in less than an hour.</p>
        </div>
        <div className="flex flex-col gap-8 md:gap-2 w-full">
          <h2 className="text-[64px] leading-[76.8px]">{"31+"}</h2>
          <h2 className="text-[21px] leading-[25.2px]">Services Offered</h2>
          <p>
            We provide services and treatment in-person and{" "}
            <span className="underline cursor-pointer">
              <Link href={"https://www.medexpress.com/virtual-visits.html"}>
                virtually
              </Link>
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AverageWaitSection;