import Accordion, { AccordionProvider } from "./Accordion";

const ServicesSection = () => {
  return (
    <div className="py-[48px] px-[16px] md:px-[180px] bg-denim text-white text-center flex flex-col gap-[36px]">
      <div className="flex flex-col gap-3">
        <p className="font-normal text-[32px] md:text-[36px] leading-[38.4px] md:leading-[43.2px]">
          services and treatment
        </p>
        <p>
          We&apos;re here for your family&apos;s urgent care needs - from the
          flu to broken bones and sports physicals.
        </p>
      </div>
      <div>
        <AccordionProvider variant="exclusive">
          <Accordion icon="illness" id="illness" title="Illness">
            <div className="grid grid-cols-2 px-[230px] py-[32px] gap-[32px]">
              <ul className="text-start space-y-[12px] w-max text-[18px]">
                <li>Allergies</li>
                <li>COVID-19</li>
                <li>Flu</li>
                <li>Hand, foot, and mouth disease</li>
                <li>Pink eye</li>
                <li>Rashes</li>
                <li>Mono treatment</li>
                <li>Strep throat</li>
              </ul>
              <ul className="text-start space-y-[12px] w-max text-[18px] justify-self-end">
                <li>Colds</li>
                <li>Ear infections</li>
                <li>Gastrointestinal illnesses</li>
                <li>Lyme disease</li>
                <li>Respiratory illnesses</li>
                <li>Labs, TB Testing, IVs, EKGs</li>
                <li>Sinus infections</li>
                <li>UTIs</li>
              </ul>
            </div>
          </Accordion>
          <Accordion icon="injury" id="injury" title="Injury">
            <div className="grid grid-cols-2 px-[230px] py-[32px] gap-[32px]">
              <ul className="text-start space-y-[12px] w-max text-[18px]">
                <li>Bites and Stings</li>
                <li>Broken Bones</li>
                <li>Burns</li>
                <li>Cuts and Scrapes</li>
                <li>Frostbite</li>
                <li>Heat Exhaustion</li>
                <li>Lice</li>
                <li>Motor Vehicle Accident</li>
                <li>Nosebleed Treatment</li>
                <li>Strains and Sprains</li>
                <li>X-rays</li>
              </ul>
              <ul className="text-start space-y-[12px] w-max text-[18px] justify-self-end">
                <li>Bites and Stings</li>
                <li>Broken Bones</li>
                <li>Burns</li>
                <li>Cuts and Scrapes</li>
                <li>Frostbite</li>
                <li>Heat Exhaustion</li>
                <li>Lice</li>
                <li>Motor Vehicle Accident</li>
                <li>Nosebleed Treatment</li>
                <li>Strains and Sprains</li>
                <li>X-rays</li>
              </ul>
            </div>
          </Accordion>
          <Accordion icon="skin" id="skin" title="Skin Ailments">
            <h1>Skin Ailments</h1>
          </Accordion>
          <Accordion
            icon="wellness"
            id="wellness"
            title="Wellness and Prevention"
          >
            <div className="grid grid-cols-2 px-[230px] py-[32px] gap-[32px]">
              <ul className="text-start space-y-[12px] w-max text-[18px]">
                <li>Camp, School, and Sports Physicals</li>
                <li>Earwax Removal</li>
                <li>Flu Shots</li>
                <li>Gout</li>
                <li>Leg Pain and Swollen Veins</li>
                <li>Vaccinations</li>
                <li>Women&apos;s Health</li> {/* Escaped apostrophe here */}
              </ul>
              <ul className="text-start space-y-[12px] w-max text-[18px] justify-self-end">
                <li>Camp, School, and Sports Physicals</li>
                <li>Earwax Removal</li>
                <li>Flu Shots</li>
                <li>Gout</li>
                <li>Leg Pain and Swollen Veins</li>
                <li>Vaccinations</li>
                <li>Women&apos;s Health</li> {/* Escaped apostrophe here */}
              </ul>
            </div>
          </Accordion>
          <Accordion icon="women" id="women" title="Women's Health">
            <h1>Women&apos;s Health</h1> {/* Escaped apostrophe here */}
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
