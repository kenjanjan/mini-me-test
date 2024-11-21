import React from "react";
import Image from "next/image";

const BottomSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="md:w-1/2 relative h-[300px] md:h-auto">
        <Image
          src="/assets/images/medex-image.png"
          layout="fill" 
          objectFit="cover" 
          alt="medex-image"
        />
      </div>
      <div className="bg-denim md:w-1/2 md:pt-[114px] md:px-[64px] md:pb-[113px] pt-[27px] pb-[40px] px-[16px] text-white flex flex-col gap-[12px]">
        <h2>Quality Care is Our Calling</h2>
        <p className="md:w-3/4">
          MedExpress Urgent Care centers are The Joint Commission Accredited,
          having earned the Gold Seal of Approval - an internationally
          recognized distinction of our commitment and ability to providing
          safe, quality patient care.
        </p>
      </div>
    </div>
  );
};

export default BottomSection;