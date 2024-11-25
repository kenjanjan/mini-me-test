import React from "react";
import Button from "./Button";

const FooterContent = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[24px] bg-legal-bar px-[24px] py-[32px] text-primary md:px-[70px] md:py-[64px]">
      <div className="flex flex-col gap-[12px] text-center">
        <h2>
          MedExpress Urgent Care Centers are managed by UPMC-GoHealth Urgent
          Care, LLC.
        </h2>
        <div className="flex flex-col items-center justify-center gap-[12px] text-secondary underline md:flex-row">
          <p className="text-[14px]">Privacy Policy</p>
          <p className="text-[14px]">Compliance and Ethics</p>
          <p className="text-[14px]">Non-Discrimination Policy</p>
          <p className="text-[14px]">Terms of Use</p>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <Button name="Do not sell my personal information" variant="btn-3" />
      </div>
      <div className="flex w-full flex-col border-b border-[#736852] pb-[24px] text-center">
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
