import AverageWaitSection from "@/components/AverageWaitSection";
import HeroSection from "@/components/HeroSection";
import LinkSection from "@/components/LinkSection";
import QuoteSection from "@/components/QuoteSection";
import ServicesSection from "@/components/ServicesSection";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <HeroSection />
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

// <div className="flex">
//         <div className="flex flex-col">
//           <AccordionProvider>
//             <Accordion id="about-us" title="ABOUT US">
//               <h1 className="text-brand-primary">Content for ABOUT US</h1>
//               <h1 className="text-terracota-purple">Content for ABOUT US</h1>
//               <h1>Content for ABOUT US</h1>
//               <h1>Content for ABOUT US</h1>
//               <h1>Content for ABOUT US</h1>
//               <h1>Content for ABOUT US</h1>
//             </Accordion>
//             <Accordion id="our-services" title="OUR SERVICES">
//               <h1>Content for OUR SERVICES</h1>
//             </Accordion>
//             <Accordion id="contact-us" title="CONTACT US">
//               <h1>Content for CONTACT US</h1>
//             </Accordion>
//           </AccordionProvider>
//         </div>
//       </div>
//       {stateData.map(
//         (
//           state: {
//             data: {
//               id: string;
//               type: string;
//               website: string;
//               appleBusinessId: string;
//               appleCompanyId: string;
//               frequentlyAskedQuestions: { question: string; answer: string }[];
//               googlePlaceId: string;
//               savedFilters: string[];
//               address: {
//                 line1: string;
//                 city: string;
//                 region: string;
//                 postalCode: string;
//                 countryCode: string;
//               };
//             };
//             highlightedFields: { [key: string]: any };
//             distance: number;
//           },
//           index: number
//         ) => (
//           <StateView
//             key={index}
//             name={state.data.address.city}
//             id={state.data.id}
//           />
//         )
//       )}
//       <QuoteCarousel quotes={quotes} />
