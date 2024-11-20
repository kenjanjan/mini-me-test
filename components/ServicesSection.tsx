import React from "react";
import Accordion, { AccordionProvider } from "./Accordion";

const ServicesSection = () => {
  return (
    <div className="py-[48px] px-[16px] md:px-[180px] bg-denim text-white text-center flex flex-col gap-[36px]">
      <div className="flex flex-col gap-3">
        <p className="font-normal text-[32px] md:text-[36px] leading-[38.4px] md:leading-[43.2px]">
          services and treatment
        </p>
        <p>
          We're here for your family's urgent care needs - from the flu to
          broken bones and sports physicals.
        </p>
      </div>
      <div>
        <AccordionProvider>
          <Accordion icon="illness" id="illness" title="Illness">
            <h1>Illness</h1>
          </Accordion>
          <Accordion icon="injury" id="injury" title="Injury">
            <h1>Injury</h1>
          </Accordion>
          <Accordion icon="skin" id="skin" title="Skin Ailments">
            <h1>Skin Ailments</h1>
          </Accordion>
          <Accordion
            icon="wellness"
            id="wellness"
            title="Wellness and Prevention"
          >
            <h1>Wellness and Prevention</h1>
          </Accordion>
          <Accordion icon="women" id="women" title="Women's Health">
            <h1>Women's Health</h1>
          </Accordion>
          <Accordion icon="STD" id="STD" title="STD/STI Testing">
            <h1>STD/STI Testing</h1>
          </Accordion>
          <Accordion icon="sports" id="sports" title="Sports Physicals">
            <h1>Sports Physicals</h1>
          </Accordion>
          <Accordion icon="work" id="work" title="Work-related Services">
            <h1>Work-related Services</h1>
          </Accordion>
        </AccordionProvider>
      </div>
    </div>
  );
};

export default ServicesSection;
