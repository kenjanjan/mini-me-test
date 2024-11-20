import React from "react";
import Button from "./Button";

const FooterContent = () => {
  return (
    <div className="bg-legal-bar flex flex-col justify-center items-center text-primary py-[32px] md:py-[64px] px-[24px] md:px-[70px] gap-[24px]">
      <div className="text-center flex flex-col gap-[12px]">
        <h2>
          MedExpress Urgent Care Centers are managed by UPMC-GoHealth Urgent
          Care, LLC.
        </h2>
        <div className="underline text-secondary flex flex-col md:flex-row items-center justify-center gap-[12px]">
          <p className="text-[14px]">Privacy Policy</p>
          <p className="text-[14px]">Compliance and Ethics</p>
          <p className="text-[14px]">Non-Discrimination Policy</p>
          <p className="text-[14px]">Terms of Use</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <Button name="Do not sell my personal information" variant="btn-3" />
      </div>
      <div className="text-center border-b border-[#736852] w-full flex flex-col pb-[24px]">
        <p>
          Copyright © 2024 GoHealth Urgent Care. All Rights Reserved. Not
          affiliated with Norvax, LLC, GoHealth, LLC or GoHealth Insurance.
        </p>
      </div>
      <div className="text-center">
        <p className="text-[18px] leading-[21.6px]">
          If you are using a screen reader and having difficulty please call
          678-774-7100.
        </p>
      </div>
    </div>
  );
};

export default FooterContent;
