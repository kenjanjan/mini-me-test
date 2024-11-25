import Link from "next/link";
import React from "react";
import data from "@/data/medexpress.json";
import Image from "next/image";
import { formatTo12Hour } from "@/utils/utils";

type VisitACenterSectionProps = {
  region: string;
  state: string;
};

const VisitACenterSection = ({ region, state }: VisitACenterSectionProps) => {
  const stateData = data.response.results.filter(
    (result: { data: { isoRegionCode: string } }) =>
      result.data.isoRegionCode === region,
  );

  return (
    <div className="space-y-[25px] bg-background-blue px-[70px] pb-[59px] pt-[67px]">
      <div className="w-full space-y-[12px] text-white">
        <p className="text-center text-[32px] leading-[38.4px] md:text-[36px] md:leading-[43.2px]">
          Visit a center in {state}
        </p>
        <p className="text-start">
          We strive to provide you with the best possible experience, including
          the insurance process. While we accept most major insurance,
          in-network status may vary by state and center. To verify that your
          insurance is in-network, please check the listing below.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stateData.map(({ data }, index) => {
          const { c_centerName, address, name, id } = data;
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
                    interval.end,
                  )}`,
              )
              .join(", ") || "Closed";

          const reservatationLink = centerDetails.reservationUrl.url;

          return (
            <div
              key={index}
              className="flex w-full max-w-[307px] flex-col items-center gap-[15px] overflow-hidden bg-white"
            >
              <Link href={`/location/${region}/${c_centerName}/${id}`}>
                <div>
                  <Image
                    src={"/assets/images/center-image.png"}
                    alt="center-image"
                    width={307}
                    height={160}
                    className="max-h-[160px] rounded-t"
                  />
                </div>
              </Link>
              <div className="flex flex-col gap-[16px] px-[21.54px] pb-[13px] text-center">
                <div className="flex flex-col gap-[8px] text-start">
                  <Link href={`/location/${region}/${c_centerName}/${id}`}>
                    <h1 className="text-[18px] leading-[22.5px] tracking-[-2.5%] text-denim">
                      {centerTitle}
                    </h1>
                  </Link>
                  <p className="text-[14px] leading-[17.5px] tracking-[-2.5%]">
                    {regionAddress}
                  </p>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <div className="w-full bg-background-highlight px-[16px] py-[8px] text-[14px] font-light">
                    <span className="font-normal text-terracota">
                      Today&apos;s Hours:
                    </span>{" "}
                    {todayHours}
                  </div>
                  <div className="flex flex-col items-center justify-center gap-[8px] text-[12px] md:justify-start">
                    <Link href={reservatationLink} className="w-full">
                      <div className="w-full bg-terracota px-[30px] py-[8px] font-bold text-white">
                        SCHEDULE IN-PERSON VISIT
                      </div>
                    </Link>
                    <Link href={"/virtual-visits"} className="w-full">
                      <div className="w-full bg-denim px-[30px] py-[8px] font-bold text-white">
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
