import Image from "next/image";
import React from "react";
import Button from "./Button";

const LinkSection = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center bg-background-light px-[16px] py-[48px] md:px-[100px]">
      <div className="flex flex-col items-center justify-center gap-0.5 text-center text-denim">
        <h2>now there are more ways</h2>
        <h3 className="text-terracota">to access care at MedExpress</h3>
      </div>
      <div className="mx-auto flex w-full flex-col justify-between md:flex-row">
        <div className="-mt-16 flex flex-col items-center text-center text-denim">
          <Image
            src={"/assets/center-icon.svg"}
            alt="center-icon"
            width={244}
            height={293}
            className="h-[205px] w-[170px] md:h-[293px] md:w-[244px]"
          />
          <p className="mb-[28px] text-[28px] font-normal leading-[33.6px] md:hidden">
            IN PERSON
          </p>
          <div className="flex flex-col items-center justify-center gap-[6px] md:mt-[25px] md:w-3/4 md:gap-[16px]">
            <h4>Visit a Center</h4>
            <p className="mb-[16px]">
              Your neighborhood medical center is here to care for your
              family&apos;s illnesses and injuries.
            </p>
            <Button name="FIND A CENTER" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-[22px] pt-[53px] text-denim md:absolute md:left-1/2 md:ml-[38px] md:-translate-x-1/2">
          <p className="hidden text-[28px] font-normal leading-[33.6px] md:block">
            IN PERSON
          </p>
          <Image
            src={"/assets/cross-icon.svg"}
            alt="cross-icon"
            width={222}
            height={199}
            className="h-[150px] w-[167px] md:h-[199px] md:w-[222px]"
          />
          <p className="hidden text-[28px] font-normal leading-[33.6px] md:block">
            VIRTUAL VISITS
          </p>
        </div>
        <div className="-mt-5 flex flex-col items-center text-center text-denim md:-mt-[30px]">
          <Image
            src={"/assets/phone-icon.svg"}
            alt="phone-icon"
            width={217}
            height={261}
            className="h-[190px] w-[157px] md:h-[261px] md:w-[217px]"
          />
          <p className="mb-[28px] mt-[22px] text-[28px] font-normal leading-[33.6px] md:hidden">
            VIRTUAL VISITS
          </p>
          <div className="flex flex-col items-center justify-center gap-[6px] md:mt-[25px] md:w-3/4 md:gap-[16px]">
            <h4>Video Chat with a Provider</h4>
            <p className="mb-[16px]">
              Available for urgent care or medical evaluations for every day
              illnesses and injuries.
            </p>
            <Button name="GET STARTED" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkSection;
