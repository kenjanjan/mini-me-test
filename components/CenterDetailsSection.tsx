import { useState } from "react";
import { formatTo12Hour } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

type CenterDetailsSectionProps = {
  centerDetails: any;
};

const CenterDetailsSection = ({ centerDetails }: CenterDetailsSectionProps) => {
  const [isOpen, setIsOpen] = useState(false); // state to control dropdown visibility

  const centerTitle = `${centerDetails.c_centerName}, ${centerDetails.address.region} ${centerDetails.name}`;
  const centerAddress = `${centerDetails.address.line1}, ${centerDetails.address.city}, ${centerDetails.address.region} ${centerDetails.address.postalCode}`;

  const today = new Date();
  const dayOfWeek = today.getDay();

  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const todayName = days[dayOfWeek];

  const weeklyHours = days.map((day) => {
    const dayHours = centerDetails.hours[day]?.openIntervals
      ?.map(
        (interval: { start: string; end: string }) =>
          `${formatTo12Hour(interval.start)} - ${formatTo12Hour(interval.end)}`
      )
      .join(", ");
    return dayHours
      ? `${day.charAt(0).toUpperCase() + day.slice(1)}: ${dayHours}`
      : `${day.charAt(0).toUpperCase() + day.slice(1)}: Closed`;
  });

  const todayHours =
    centerDetails.hours[todayName]?.openIntervals
      ?.map(
        (interval: { start: string; end: string }) =>
          `${formatTo12Hour(interval.start)} - ${formatTo12Hour(interval.end)}`
      )
      .join(", ") || "Closed";

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const reservatationLink = centerDetails.reservationUrl.url;

  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-footer-nav w-full md:pl-[70px] md:pt-[30px] pt-[32px] md:pb-[34px] pb-[33px] px-[16px] md:pr-[251px]">
        <div className="flex flex-col gap-[13px] md:gap-[12px]">
          <h2 className="text-denim">{centerTitle}</h2>
          <p className="text-[18px]">{centerAddress}</p>

          <div
            onClick={toggleDropdown}
            className="flex flex-col gap-3 text-[18px] items-center justify-start mt-[24px] w-fit cursor-pointer"
          >
            <span className="text-terracota w-fit flex gap-4 items-center">
              Today's Hours: <span className="text-primary">{todayHours}</span>
              <Image
                src={"/assets/dropdown-terracota.png"}
                alt="dropdown-terracota"
                width={16}
                height={12}
                className={`h-[12px] w-[16px] transform transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </span>
            {/* Expanding content for weekly hours */}
            <div
              className={`transition-all duration-300 ease-out w-full ${
                isOpen ? "max-h-[500px] scale-y-100" : "max-h-0 scale-y-0"
              } origin-top`}
            >
              {weeklyHours.map((hour, index) => {
                const [day, ...time] = hour.split(":");
                return (
                  <div key={index} className="flex gap-2">
                    <span className="text-terracota">{day}:</span>
                    <span className="text-primary">{time.join(":")}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-[14px] flex flex-col md:flex-row gap-[30px]">
            <p>{centerDetails.mainPhone}</p>
            <p>Get Directions</p>
            <p className="md:hidden">View in Map</p>
          </div>
        </div>
      </div>
      <div className="bg-background-light flex flex-col gap-[16px] w-full md:pl-[60px] md:pt-[30px] py-[33px] px-[16px] md:pb-[34px]">
        <div className="">
          <h2 className="text-[28px] md:text-[32px] leading-[33.6px]">
            Schedule an Appointment
          </h2>
        </div>
        <div>
          <p className="md:text-[18px]">Walk ins are always welcome.</p>
        </div>
        <div className="flex gap-[12px] md:justify-start items-center justify-center">
          <div className="bg-terracota text-white py-[8px] px-[30px] font-bold">
            <Link href={reservatationLink} className="">
              SCHEDULE IN-PERSON VISIT
            </Link>
          </div>
          <div className="bg-denim text-white py-[8px] px-[30px] font-bold">
            <Link href={"/virtual-visits"} className="">
              SCHEDULE VIRTUAL VISIT
            </Link>
          </div>
        </div>
        <div>
          <p className="text-[12px] leading-[14.4px] md:w-2/4 italic">
            *Emergency Service Notice: If you are suffering from chest pain,
            shortness of breath, severe abdominal pain, stroke like symptoms, or
            any other emergency, please dial 911 or go to the nearest ER.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CenterDetailsSection;
