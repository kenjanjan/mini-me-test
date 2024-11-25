"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import VisitACenterSection from "@/components/VisitACenterSection";
import { notFound, useParams, useRouter } from "next/navigation";

const stateMap: Record<string, string> = {
  PA: "Pennsylvania",
  WV: "West Virginia",
  VA: "Virginia",
};

const RegionBody = () => {
  const { region } = useParams() as { region: string };
  const router = useRouter();

  const [validRegion, setValidRegion] = useState(true);
  const [state, setState] = useState("");

  useEffect(() => {
    if (stateMap[region]) {
      setState(stateMap[region]);
    } else {
      setValidRegion(false);
      notFound();
    }
  }, [region, router]);

  if (!validRegion) {
    return notFound();
  }

  return (
    <>
      <HeroSection
        message={`Feel better, no appointment needed in ${region}`}
        image="medex-image"
        variant="hidden"
      />
      <div className="bg-background-light py-[64px] md:px-[100px]">
        <p className="text-[34px] leading-[40.8px] text-denim">
          At MedExpress, we understand that accidents and illness can happen
          anytime. See the information below to help plan your visit to your
          {` ${state}`} MedExpress neighborhood medical center.
        </p>
      </div>
      <VisitACenterSection region={region} state={state} />
    </>
  );
};

export default RegionBody;
