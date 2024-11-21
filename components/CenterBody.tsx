"use client";
import MapComponent from "@/components/Map";
import React, { Suspense, useEffect, useState } from "react";
import data from "@/data/medexpress.json";
import NotFound from "@/app/not-found";
import CenterDetailsSection from "@/components/CenterDetailsSection";
import LinkSection from "@/components/LinkSection";
import FAQsSection from "@/components/FAQsSection";
import BottomSection from "@/components/BottomSection";
type CenterBodyProps = {
  params: {
    slug: string;
  };
};

const CenterBody = ({ params }: CenterBodyProps) => {
  const [coordinates, setCoordinates] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [centerDetails, setCenterDetails] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    const fetchSlug = async () => {
      try {
        const resolvedParams = await params;
        setSlug(resolvedParams.slug);
      } catch (error) {
        console.error("Error resolving params:", error);
        setError("Failed to load slug");
      }
    };

    fetchSlug();
  }, [params]);

  useEffect(() => {
    if (!slug) return;

    const matchingData = data.response.results.filter(
      (result) => result.data.id === slug
    );

    if (matchingData.length === 0) {
      setError(`No data found for slug: ${slug}`);
      return;
    }

    setCenterDetails(matchingData[0].data);

    const latitude = matchingData[0].data.geocodedCoordinate?.latitude;
    const longitude = matchingData[0].data.geocodedCoordinate?.longitude;

    if (!latitude || !longitude) {
      setError(`Coordinates not found for slug: ${slug}`);
      return;
    }

    setCoordinates({ latitude, longitude });
  }, [slug]);

  if (error) {
    return <NotFound />;
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
        <CenterDetailsSection centerDetails={centerDetails} />
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
        <FAQsSection />
        <BottomSection />
      </>
    );
  }
};

export default CenterBody;
