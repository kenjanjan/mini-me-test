import HeroSection from "@/components/HeroSection";
import VisitACenterSection from "@/components/VisitACenterSection";
import React from "react";

const page = () => {
  const centers = [{ address: "address1", id: "HWW" }];
  return (
    <>
      <HeroSection
        message="feel better, no appointment needed in PA"
        image="medex-image"
        variant="hidden"
      />
      <div className="bg-background-light py-[64px] md:px-[100px]">
        <p className="text-denim text-[34px] leading-[40.8px]">
          At MedExpress, we understand that accidents and illness can happen
          anytime. See the information below to help plan your visit to your
          Pennsylvania MedExpress neighborhood medical center.
        </p>
      </div>
      <VisitACenterSection centers={centers}/>
    </>
  );
};

export default page;
