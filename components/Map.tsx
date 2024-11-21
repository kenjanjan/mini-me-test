"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { cn } from "@/utils/utils";
import NotFound from "@/app/not-found";
import { useState, useEffect } from "react";
import data from "@/data/medexpress.json";

const MapComponent = ({
  params,
  className,
}: {
  params: { slug: string };
  className?: string;
}) => {
  const [coordinates, setCoordinates] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    const fetchSlug = async () => {
      try {
        const resolvedParams = params;
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

  if (!coordinates) {
    return <NotFound />;
  }

  return (
    <MapContainer
      key={`${coordinates.latitude}-${coordinates.longitude}`}
      center={[coordinates.latitude, coordinates.longitude]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
      className={cn(className, "z-0 relative")}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[coordinates.latitude, coordinates.longitude]}>
        <Popup>
          Coordinates: {coordinates.latitude}, {coordinates.longitude}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
