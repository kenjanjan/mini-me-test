import { useEffect, useState } from "react";
import { formatTo12Hour } from "@/utils/utils";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapPin,
  faChevronDown,
  faMap,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

interface CenterDetails {
  c_centerName: string;
  address: {
    line1: string;
    city: string;
    region: string;
    postalCode: string;
  };
  name: string;
  hours: Record<string, { openIntervals: { start: string; end: string }[] }>;
  reservationUrl: { url: string };
  mainPhone: string;
}

type CenterDetailsSectionProps = {
  centerDetails: CenterDetails;
  coordinates: { latitude: number; longitude: number };
};

const CenterDetailsSection = ({
  centerDetails,
  coordinates,
}: CenterDetailsSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
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
          `${formatTo12Hour(interval.start)} - ${formatTo12Hour(interval.end)}`,
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
          `${formatTo12Hour(interval.start)} - ${formatTo12Hour(interval.end)}`,
      )
      .join(", ") || "Closed";

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const formatPhoneNumber = (phoneNumber: string) => {
    const cleaned = phoneNumber.replace(/[^+\d]/g, "");
    const match = cleaned.match(/^(\+1)?(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      const countryCode = match[1] || "+1";
      const areaCode = match[2];
      const centralOfficeCode = match[3];
      const lineNumber = match[4];
      return `${countryCode}-${areaCode}-${centralOfficeCode}-${lineNumber}`;
    }

    return phoneNumber;
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error fetching user location:", error);
        },
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const getGoogleMapsDirectionsUrl = () => {
    if (!userLocation || !coordinates) {
      return "#";
    }
    const { latitude: userLat, longitude: userLng } = userLocation;
    const { latitude: destLat, longitude: destLng } = coordinates;
    return `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destLat},${destLng}`;
  };

  const getGoogleMapsUrl = () => {
    if (!coordinates) return "#";
    const { latitude, longitude } = coordinates;
    return `https://www.google.com/maps?q=${latitude},${longitude}`;
  };

  const reservationLink = centerDetails.reservationUrl.url;

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full bg-footer-nav px-[16px] pb-[33px] pt-[32px] md:pb-[34px] md:pl-[70px] md:pr-[251px] md:pt-[30px]">
        <div className="flex flex-col gap-[13px] md:gap-[12px]">
          <h2 className="text-denim">{centerTitle}</h2>
          <p className="text-[18px]">{centerAddress}</p>

          <div
            onClick={toggleDropdown}
            className="mt-[24px] flex w-fit cursor-pointer flex-col items-center justify-start gap-3 text-[18px]"
          >
            <span className="flex w-fit items-center gap-2 font-bold text-terracota">
              Today&apos;s Hours:{" "}
              <span className="font-normal text-primary">{todayHours}</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transform text-terracota transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </span>
            {/* Expanding content for weekly hours */}
            <div
              className={`w-full transition-all duration-300 ease-out ${
                isOpen ? "max-h-[500px] scale-y-100" : "max-h-0 scale-y-0"
              } origin-top`}
            >
              {weeklyHours.map((hour, index) => {
                const [day, ...time] = hour.split(":");
                return (
                  <div key={index} className="flex gap-2">
                    <span className="font-bold text-terracota">{day}:</span>
                    <span className="text-primary">{time.join(":")}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-[14px] flex flex-col gap-[30px] md:flex-row">
            <a
              href={`tel:${centerDetails.mainPhone}`}
              className="flex cursor-pointer items-center gap-2 md:justify-center"
              aria-label={`Call ${centerDetails.mainPhone}`}
            >
              <FontAwesomeIcon icon={faPhone} className="text-terracota" />
              {formatPhoneNumber(centerDetails.mainPhone)}
            </a>
            <a
              href={getGoogleMapsDirectionsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-2 md:justify-center"
              aria-label="Get Directions to the location"
            >
              <FontAwesomeIcon icon={faMapPin} className="text-terracota" />
              Get Directions
            </a>
            <a
              href={getGoogleMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-2 md:hidden md:justify-center"
              aria-label="Get Directions to the location"
            >
              <FontAwesomeIcon icon={faMap} className="text-terracota" />
              View in Map
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-[16px] bg-background-light px-[16px] py-[33px] md:pb-[34px] md:pl-[60px] md:pt-[30px]">
        <div className="">
          <h2 className="text-[28px] leading-[33.6px] md:text-[32px]">
            Schedule an Appointment
          </h2>
        </div>
        <div>
          <p className="md:text-[18px]">Walk ins are always welcome.</p>
        </div>
        <div className="grid grid-cols-2 items-center justify-center gap-[12px] md:w-3/4 md:justify-start">
          <Link
            href={reservationLink}
            className="h-full w-full text-center md:text-start"
          >
            <div className="relative flex h-full items-center bg-terracota px-[30px] py-[8px] pr-6 font-bold text-white">
              <span className="relative mr-2 whitespace-normal">
                SCHEDULE IN-PERSON VISIT
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="absolute ml-2 mt-1"
                />
              </span>
            </div>
          </Link>

          <Link
            href="/virtual-visits"
            className="h-full w-full text-center md:text-start"
          >
            <div className="flex h-full items-center justify-center bg-denim px-[30px] py-[8px] font-bold text-white md:block">
              SCHEDULE VIRTUAL VISIT
            </div>
          </Link>
        </div>
        <div>
          <p className="text-[12px] italic leading-[14.4px] md:w-2/4">
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
