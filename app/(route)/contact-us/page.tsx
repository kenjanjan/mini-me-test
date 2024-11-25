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
      <div className="h-auto md:h-auto  bg-background-light flex justify-center items-center">
        <h2 className="font-lato px-6 py-8 md:py-16 text-[21px] md:text-[34px] font-normal leading-normal text-denim md:max-w-[1296px] w-auto box-border">
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
