"use client";
import React, { Suspense, useEffect, useState } from "react";
import MapComponent from "@/components/Map";
import data from "@/data/medexpress.json";
import CenterDetailsSection from "@/components/CenterDetailsSection";
import LinkSection from "@/components/LinkSection";
import FAQsSection from "@/components/FAQsSection";
import BottomSection from "@/components/BottomSection";
import { notFound, useParams } from "next/navigation";

async function fetchCenterData(
  region: string,
  center_name: string,
  id: string
) {
  const centerData = data.response.results.filter(
    (result: {
      data: { isoRegionCode: string; c_centerName: string; id: string };
    }) =>
      result.data.isoRegionCode === region &&
      result.data.c_centerName === center_name &&
      result.data.id === id
  );
  return centerData.length > 0 ? centerData[0] : null;
}

const CenterBody = () => {
  const { region, center_name, id } = useParams();
  //TODO: Fix any type  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [centerData, setCenterData] = useState<any | null>(null);
  const [coordinates, setCoordinates] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [listOfInsurance, setListOfInsurance] = useState<string[]>([]);
  const [listOfServices, setListOfServices] = useState<string[]>([]);

  useEffect(() => {
    if (
      typeof region !== "string" ||
      typeof center_name !== "string" ||
      typeof id !== "string"
    ) {
      return notFound();
    }

    const fetchData = async () => {
      const data = await fetchCenterData(region, center_name, id);
      if (!data) {
        setError("Center not found");
        notFound();
      } else {
        setCenterData(data);
        const latitude = data.data.geocodedCoordinate?.latitude;
        const longitude = data.data.geocodedCoordinate?.longitude;

        if (latitude && longitude) {
          setCoordinates({ latitude, longitude });
        } else {
          setError("Coordinates not found");
        }

        setListOfInsurance(data.data.insuranceAccepted);
        setListOfServices(data.data.services);
      }
    };

    fetchData();
  }, [region, center_name, id]);

  if (error) {
    notFound();
  }

  if (coordinates) {
    return (
      <>
        <Suspense
          fallback={
            <div className="h-[400px] bg-gray-200 w-full">Loading map...</div>
          }
        >
          <MapComponent
            latitude={coordinates.latitude}
            longitude={coordinates.longitude}
            className="md:block hidden z-1"
          />
        </Suspense>
        <CenterDetailsSection
          centerDetails={centerData.data}
          coordinates={coordinates}
        />
        <div className="bg-denim px-[16px] py-[32px] text-white">
          <div className="flex flex-col gap-[12px] items-center justify-center text-center">
            <h3>MedExpress or Emergency Room?</h3>
            <p className="md:w-1/2">
              Most MedExpress visits cost under 10% of the average emergency
              room cost. We accept most insurances and offer convenient and
              affordable self-pay pricing for those without insurance.
            </p>
          </div>
        </div>
        <LinkSection />
        <FAQsSection
          listOfInsurance={listOfInsurance}
          listOfServices={listOfServices}
        />
        <BottomSection
          image="medex-image"
          title="Quality Care is Our Calling"
          message="MedExpress Urgent Care centers are The Joint Commission Accredited, having earned the Gold Seal of Approval - an internationally recognized distinction of our commitment and ability to providing safe, quality patient care."
        />
      </>
    );
  }

  return null;
};

export default CenterBody;
