"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { cn } from "@/utils/utils";

const MapComponent = ({
  latitude,
  longitude,
  className,
}: {
  latitude: number;
  longitude: number;
  className?: string;
}) => {


  return (
    <MapContainer
      key={`${latitude}-${longitude}`}
      center={[latitude, longitude]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
      className={cn(className)}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          Coordinates: {latitude}, {longitude}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
