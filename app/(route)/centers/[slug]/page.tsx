import MapComponent from "@/components/Map";
import React from "react";
import CenterDetailsSection from "@/components/CenterDetailsSection";
import LinkSection from "@/components/LinkSection";
import FAQsSection from "@/components/FAQsSection";
import BottomSection from "@/components/BottomSection";

interface CenterViewProps {
  params: Promise<{ slug: string }>;
}

const CenterView: React.FC<CenterViewProps> = async ({ params }) => {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  return (
    <>
      <MapComponent params={{ slug: slug }} className="md:block hidden z-1" />
      <CenterDetailsSection params={{ slug: slug }} />
      <div className="bg-denim px-[16px] py-[32px] text-white">
        <div className="flex flex-col gap-[12px] items-center justify-center text-center">
          <h3>MedExpress or Emergency Room?</h3>
          <p className="md:w-1/2">
            Most MedExpress visits cost under 10% of the average emergency room
            cost. We accept most insurances and offer convenient and affordable
            self-pay pricing for those without insurance.
          </p>
        </div>
      </div>
      <LinkSection />
      <FAQsSection />
      <BottomSection />
    </>
  );
};

export default CenterView;
