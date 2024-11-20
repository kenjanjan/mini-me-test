import Accordion, { AccordionProvider } from "@/components/Accordion";
import AverageWaitSection from "@/components/AverageWaitSection";
import HeroSection from "@/components/HeroSection";
import LinkSection from "@/components/LinkSection";
import QuoteCarousel from "@/components/QuoteCarousel";
import QuoteSection from "@/components/QuoteSection";
import ServicesSection from "@/components/ServicesSection";
import StateView from "@/components/StateView";
import data from "@/data/medexpress.json";
import Image from "next/image";

export default function Home() {
  const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "Do not wait to strike till the iron is hot; but make it hot by striking.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  ];

  const stateData = data.response.results;
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
