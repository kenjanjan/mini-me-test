"use client";
import MapComponent from "@/components/Map";
import React, { useEffect, useState } from "react";
import data from "@/data/medexpress.json";
import NotFound from "@/app/not-found";
import CenterDetailsSection from "@/components/CenterDetailsSection";

interface CenterViewProps {
  params: Promise<{ slug: string }>;
}

const CenterView: React.FC<CenterViewProps> = ({ params }) => {
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
        <MapComponent
          latitude={coordinates.latitude}
          longitude={coordinates.longitude}
          className="md:block hidden z-1"
        />
        <CenterDetailsSection centerDetails={centerDetails} />
      </>
    );
  }

  return <div>Loading...</div>;
};

export default CenterView;
