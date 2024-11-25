import ContactUsForm from "@/components/contactUsForm";
import HeroSection from "@/components/HeroSection";
import React from "react";
const ContactUs = () => {
  return (
    <>
      <HeroSection
        message="Let us know how we can help you"
        image="woman-nurse"
      />
      <div className="flex h-auto items-center justify-center bg-background-light md:h-auto">
        <h2 className="font-lato box-border w-auto px-6 py-8 text-[21px] font-normal leading-normal text-denim md:max-w-[1296px] md:py-16 md:text-[34px]">
          Whether you have feedback about a recent visit to your neighborhood
          MedExpress or are interested in partnering with us for employer health
          services, you’ve come to the right place. Submit your information
          below and let us know how we can help.
        </h2>
      </div>
      <ContactUsForm />
    </>
  );
};

export default ContactUs;
