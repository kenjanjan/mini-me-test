import AverageWaitSection from "@/components/AverageWaitSection";
import HeroSection from "@/components/HeroSection";
import LinkSection from "@/components/LinkSection";
import QuoteSection from "@/components/QuoteSection";
import ServicesSection from "@/components/ServicesSection";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <HeroSection message="walk in or schedule online" image="homepage-hero"/>
      <LinkSection />
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
}