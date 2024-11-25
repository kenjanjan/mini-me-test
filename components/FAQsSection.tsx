import React from "react";
import Accordion, { AccordionProvider } from "./Accordion";
import Image from "next/image";

type FAQsSectionProps = {
  listOfInsurance: string[];
  listOfServices: string[];
};

const FAQsSection = ({ listOfInsurance, listOfServices }: FAQsSectionProps) => {
  const maxItemsPerColumn = Math.ceil(listOfInsurance.length / 3);
  const servicesMaxItemsPerColumn = Math.ceil(listOfServices.length / 3);

  const firstColumn = listOfInsurance.slice(0, maxItemsPerColumn);
  const secondColumn = listOfInsurance.slice(
    maxItemsPerColumn,
    maxItemsPerColumn * 2
  );
  const thirdColumn = listOfInsurance.slice(maxItemsPerColumn * 2);

  const servicesFirstColumn = listOfServices.slice(0, servicesMaxItemsPerColumn);
  const servicesSecondColumn = listOfServices.slice(
    servicesMaxItemsPerColumn,
    servicesMaxItemsPerColumn * 2
  );
  const servicesThirdColumn = listOfServices.slice(servicesMaxItemsPerColumn * 2);

  return (
    <>
      <AccordionProvider variant="independent">
        <Accordion
          id="services"
          title="What services do you offer at this center?"
        >
          {/* <div className="grid md:grid-cols-4 grid-cols-1 gap-20 justify-items-center pt-[35px] md:space-x-[20px]">
            <div className="flex flex-col items-center justify-center gap-[44px] text-center">
              <div className="relative w-[89px] h-[89px] rounded-full bg-[#6399AE]">
                <Image
                  src="/assets/icons/illness-active.svg"
                  alt="medical-exam-icon"
                  width={50}
                  height={50}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <h4>Illness:</h4>
            </div>
            <div className="flex flex-col items-center justify-center gap-[44px] text-center">
              <div className="relative w-[89px] h-[89px] rounded-full bg-[#E57200]">
                <Image
                  src="/assets/icons/injury-active.svg"
                  alt="medical-exam-icon"
                  width={50}
                  height={50}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <h4>Injury:</h4>
            </div>
            <div className="flex flex-col items-center justify-center gap-[44px] text-center">
              <div className="relative w-[89px] h-[89px] rounded-full bg-[#EBBC4E]">
                <Image
                  src="/assets/icons/wellness-active.svg"
                  alt="medical-exam-icon"
                  width={50}
                  height={50}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <h4>Wellness:</h4>
            </div>
            <div className="flex flex-col items-center justify-center gap-[44px] text-center">
              <div className="relative w-[89px] h-[89px] rounded-full bg-[#5F2167]">
                <Image
                  src="/assets/icons/work-active.svg"
                  alt="medical-exam-icon"
                  width={50}
                  height={50}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <h4>Work-related:</h4>
            </div>
          </div> */}
           <div className="space-y-[12px] mb-[33px]">
            <h3 className="text-denim text-center w-full">
              List of Services
            </h3>
          </div>
          <div className="hidden md:grid grid-cols-3 gap-5 w-full md:px-[50px] pb-[39px]">
            <ul className="list-disc pl-5 space-y-2">
              {servicesFirstColumn.map((services, index) => (
                <li key={index}>{services}</li>
              ))}
            </ul>
            <ul className="list-disc pl-5 space-y-2">
              {servicesSecondColumn.map((services, index) => (
                <li key={index}>{services}</li>
              ))}
            </ul>
            <ul className="list-disc pl-5 space-y-2">
              {servicesThirdColumn.map((services, index) => (
                <li key={index}>{services}</li>
              ))}
            </ul>
          </div>
        </Accordion>
        <Accordion id="insurance" title="What insurance is accepted?">
          <div className="space-y-[12px] mb-[33px]">
            <h3 className="text-denim text-center w-full">
              List of insurances
            </h3>
            <p className="md:px-[50px]">
              We strive to provide you with the best possible experience,
              including the insurance process. While we accept most major
              insurance, in-network status may vary by state and center. To
              verify that your insurance is in-network, please check the listing
              below.
            </p>
          </div>
          <div className="hidden md:grid grid-cols-3 gap-5 w-full md:px-[50px] pb-[39px]">
            <ul className="list-disc pl-5 space-y-2">
              {firstColumn.map((insurance, index) => (
                <li key={index}>{insurance}</li>
              ))}
            </ul>
            <ul className="list-disc pl-5 space-y-2">
              {secondColumn.map((insurance, index) => (
                <li key={index}>{insurance}</li>
              ))}
            </ul>
            <ul className="list-disc pl-5 space-y-2">
              {thirdColumn.map((insurance, index) => (
                <li key={index}>{insurance}</li>
              ))}
            </ul>
          </div>
          <div className="md:hidden  pb-[12px] grid grid-cols-1">
            <ul className="list-disc  pl-5 space-y-2">
              {listOfInsurance.map((insurance, index) => (
                <li key={index}>{insurance}</li>
              ))}
            </ul>
          </div>
        </Accordion>
        <Accordion id="requirements" title="What should I bring for my visit?">
          <div className="pt-[46px] pb-[52px] px-[16px] text-center flex flex-col items-center gap-[35px]">
            <h4 className="font-normal md:w-2/4">
              We want your visit to be as convenient as possible. To help
              everything go smoothly, please bring the following with you:
            </h4>
            <ul className="w-[420px] px-[16px] md:px-0 list-disc pl-10 md:pl-5 space-y-2 text-start">
              <li>Driver&apos;s license or picture ID</li>
              <li>Insurance card (if you have insurance)</li>
              <li>Payment for co-pay or self-pay</li>
              <li>
                List of current medications, past surgeries, and allergies
              </li>
            </ul>
          </div>
        </Accordion>
      </AccordionProvider>
    </>
  );
};

export default FAQsSection;