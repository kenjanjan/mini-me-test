import React from "react";
import Accordion, { AccordionProvider } from "./Accordion";

const FAQsSection = () => {
  return (
    <>
      <AccordionProvider variant="independent">
        <Accordion id="services" title="What services do you offer at this center?">
          <h1>What services do you offer at this center?</h1>
        </Accordion>
        <Accordion  id="insurance" title="What insurance is accepted?">
          <h1>What insurance is accepted?</h1>
        </Accordion>
        <Accordion id="requirements" title="What should I bring for my visit?">
          <h1>What should I bring for my visit?</h1>
        </Accordion>
      </AccordionProvider>
    </>
  );
};

export default FAQsSection;
