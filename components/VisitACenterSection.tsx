import Link from "next/link";
import React from "react";
import data from "@/data/medexpress.json";
import Image from "next/image";
import { formatTo12Hour } from "@/utils/utils";

type VisitACenterSectionProps = {
  slug: string;
  state: string;
};

const VisitACenterSection = ({ slug, state }: VisitACenterSectionProps) => {
  const stateData = data.response.results.filter(
    (result: { data: { isoRegionCode: string } }) =>
      result.data.isoRegionCode === slug
  );

  return (
    <div className="bg-background-blue px-[70px] pt-[67px] pb-[59px] space-y-[25px]">
      <div className="space-y-[12px] text-white w-full ">
        <p className="text-center md:text-[36px] text-[32px] leading-[38.4px] md:leading-[43.2px]">
          Visit a center in {state}
        </p>
        <p className="text-start">
          We strive to provide you with the best possible experience, including
          the insurance process. While we accept most major insurance,
          in-network status may vary by state and center. To verify that your
          insurance is in-network, please check the listing below.
        </p>
      </div>
      <div className=" grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {stateData.map(({ data }, index) => {
          const { c_centerName, address, name } = data;
          const centerTitle = `${c_centerName}, ${address.region} ${name}`;
          const regionAddress = `${address.line1}, ${address.city}, ${address.region} ${address.countryCode} ${address.postalCode}`;

          const today = new Date();
          const dayOfWeek = today.getDay();

          const days: (keyof typeof centerDetails.hours)[] = [
            "sunday",
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
          ];

          const centerDetails = data;

          const todayName = days[dayOfWeek];

          const todayHours =
            centerDetails.hours[todayName]?.openIntervals
              ?.map(
                (interval: { start: string; end: string }) =>
                  `${formatTo12Hour(interval.start)} - ${formatTo12Hour(
                    interval.end
                  )}`
              )
              .join(", ") || "Closed";

          const reservatationLink = centerDetails.reservationUrl.url;

          return (
            <div
              key={index}
              className="flex flex-col gap-[15px] bg-white w-full max-w-[307px] items-center overflow-hidden"
            >
              <div>
                <Image
                  src={"/assets/images/center-image.png"}
                  alt="center-image"
                  width={307}
                  height={160}
                  className="rounded-t max-h-[160px]"
                />
              </div>
              <div className=" flex flex-col text-center pb-[13px] px-[21.54px] gap-[16px]">
                <div className="flex flex-col gap-[8px] text-start">
                  <h1 className="text-denim text-[18px] leading-[22.5px] tracking-[-2.5%]">
                    {centerTitle}
                  </h1>
                  <p className="text-[14px] leading-[17.5px] tracking-[-2.5%]">
                    {regionAddress}
                  </p>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <div className="w-full bg-background-highlight px-[16px] py-[8px] font-light text-[14px]">
                    <span className="text-terracota font-normal">
                      Today&apos;s Hours:
                    </span>{" "}
                    {todayHours}
                  </div>
                  <div className="flex flex-col gap-[8px] text-[12px] md:justify-start items-center justify-center">
                    <Link href={reservatationLink} className="w-full">
                      <div className="bg-terracota text-white py-[8px] px-[30px] font-bold w-full">
                        SCHEDULE IN-PERSON VISIT
                      </div>
                    </Link>
                    <Link href={"/virtual-visits"} className="w-full">
                      <div className="bg-denim text-white py-[8px] px-[30px] font-bold w-full">
                        SCHEDULE VIRTUAL VISIT
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VisitACenterSection;
