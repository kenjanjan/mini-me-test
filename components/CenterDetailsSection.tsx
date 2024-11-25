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
        }
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
      <div className="bg-footer-nav w-full md:pl-[70px] md:pt-[30px] pt-[32px] md:pb-[34px] pb-[33px] px-[16px] md:pr-[251px]">
        <div className="flex flex-col gap-[13px] md:gap-[12px]">
          <h2 className="text-denim">{centerTitle}</h2>
          <p className="text-[18px]">{centerAddress}</p>

          <div
            onClick={toggleDropdown}
            className="flex flex-col gap-3 text-[18px] items-center justify-start mt-[24px] w-fit cursor-pointer"
          >
            <span className="text-terracota font-bold w-fit flex gap-2 items-center">
              Today&apos;s Hours:{" "}
              <span className="text-primary font-normal">{todayHours}</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={` text-terracota transform transition-transform duration-300 ${
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
                    <span className="text-terracota font-bold">{day}:</span>
                    <span className="text-primary">{time.join(":")}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-[14px] flex flex-col md:flex-row gap-[30px]">
            <a
              href={`tel:${centerDetails.mainPhone}`}
              className="cursor-pointer flex gap-2 items-center md:justify-center"
              aria-label={`Call ${centerDetails.mainPhone}`}
            >
              <FontAwesomeIcon icon={faPhone} className="text-terracota" />
              {formatPhoneNumber(centerDetails.mainPhone)}
            </a>
            <a
              href={getGoogleMapsDirectionsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer flex gap-2 items-center md:justify-center"
              aria-label="Get Directions to the location"
            >
              <FontAwesomeIcon icon={faMapPin} className="text-terracota" />
              Get Directions
            </a>
            <a
              href={getGoogleMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer md:hidden flex gap-2 items-center md:justify-center"
              aria-label="Get Directions to the location"
            >
              <FontAwesomeIcon icon={faMap} className="text-terracota" />
              View in Map
            </a>
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
        <div className="grid grid-cols-2 gap-[12px] md:w-3/4 md:justify-start items-center justify-center">
          <Link
            href={reservationLink}
            className="w-full text-center md:text-start h-full"
          >
            <div className="bg-terracota text-white py-[8px] px-[30px] font-bold flex items-center relative pr-6 h-full">
              <span className="whitespace-normal relative mr-2">
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
            className="w-full text-center md:text-start h-full"
          >
            <div className="bg-denim text-white py-[8px] px-[30px] font-bold md:block flex items-center justify-center h-full">
              SCHEDULE VIRTUAL VISIT
            </div>
          </Link>
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
