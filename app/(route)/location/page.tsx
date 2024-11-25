import AverageWaitSection from "@/components/AverageWaitSection";
import FindACenterSection from "@/components/FindACenterSection";
import HeroSection from "@/components/HeroSection";
import QuoteSection from "@/components/QuoteSection";
import ServicesSection from "@/components/ServicesSection";
import Image from "next/image";

const Location = () => {
  return (
    <>
      <HeroSection message={`find a \ncenter`} image="find-a-center-hero" variant="hidden"/>
      <FindACenterSection />
      <ServicesSection />
      <AverageWaitSection />
      <QuoteSection />
      <Image
        src="/assets/images/medex-image.png"
        width={1440}
        height={480}
        alt="medex-image"
        className="w-full"
      />
    </>
  );
};

export default Location;
