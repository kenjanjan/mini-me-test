import HeroSection from "@/components/HeroSection";
import VisitACenterSection from "@/components/VisitACenterSection";
import React from "react";

interface RegionPageProps {
  params: { slug: string };
}

const RegionPage: React.FC<RegionPageProps> = ({ params }) => {
  const state =
    params.slug === "PA"
      ? "Pennsylvania"
      : params.slug === "WV"
      ? "West Virginia"
      : "Virginia";
  return (
    <>
      <HeroSection
        message={`feel better, no appointment needed in ${params.slug}`}
        image="medex-image"
        variant="hidden"
      />
      <div className="bg-background-light py-[64px] md:px-[100px]">
        <p className="text-denim text-[34px] leading-[40.8px]">
          At MedExpress, we understand that accidents and illness can happen
          anytime. See the information below to help plan your visit to your 
          {" "+state} MedExpress neighborhood medical center.
        </p>
      </div>
      <VisitACenterSection slug={params.slug} />
    </>
  );
};

export default RegionPage;
