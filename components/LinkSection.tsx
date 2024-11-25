import Image from "next/image";
import React from "react";
import Button from "./Button";

const LinkSection = () => {
  return (
    <div className="px-[16px] relative md:px-[100px] w-full flex flex-col justify-center items-center bg-background-light py-[48px]">
      <div className="gap-0.5 text-denim flex flex-col items-center justify-center text-center">
        <h2>now there are more ways</h2>
        <h3 className="text-terracota">to access care at MedExpress</h3>
      </div>
      <div className="flex flex-col md:flex-row justify-between mx-auto w-full">
        <div className="flex flex-col items-center -mt-16 text-denim text-center">
          <Image
            src={"/assets/center-icon.svg"}
            alt="center-icon"
            width={244}
            height={293}
            className="w-[170px] h-[205px] md:h-[293px] md:w-[244px]"
          />
          <p className="md:hidden font-normal text-[28px] leading-[33.6px] mb-[28px]">
            IN PERSON
          </p>
          <div className="flex flex-col items-center justify-center gap-[6px] md:gap-[16px] md:mt-[25px] md:w-3/4">
            <h4>Visit a Center</h4>
            <p className="mb-[16px]">
              Your neighborhood medical center is here to care for your family&apos;s
              illnesses and injuries.
            </p>
            <Button name="FIND A CENTER" />
          </div>
        </div>
        <div className="md:absolute pt-[53px] flex gap-[22px] text-denim items-center justify-center md:left-1/2  md:-translate-x-1/2 md:ml-[38px]">
          <p className="md:block hidden font-normal text-[28px] leading-[33.6px]">
            IN PERSON
          </p>
          <Image
            src={"/assets/cross-icon.svg"}
            alt="cross-icon"
            width={222}
            height={199}
            className="md:w-[222px] md:h-[199px] w-[167px] h-[150px]"
          />
          <p className="md:block hidden font-normal text-[28px] leading-[33.6px]">
            VIRTUAL VISITS
          </p>
        </div>
        <div className="flex flex-col items-center  -mt-5 md:-mt-[30px] text-denim text-center">
          <Image
            src={"/assets/phone-icon.svg"}
            alt="phone-icon"
            width={217}
            height={261}
            className="md:w-[217px] md:h-[261px] w-[157px] h-[190px]"
          />
          <p className="md:hidden font-normal text-[28px] leading-[33.6px] mb-[28px] mt-[22px]">
            VIRTUAL VISITS
          </p>
          <div className="flex flex-col items-center justify-center gap-[6px] md:gap-[16px] md:mt-[25px] md:w-3/4">
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
