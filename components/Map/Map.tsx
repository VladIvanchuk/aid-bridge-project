"use client";

import { getNeeds } from "@/lib/need/api";
import { INeed } from "@/models/need";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { FaMapMarkerAlt } from "react-icons/fa";
import Loader from "../ui/Loader";

interface IGeometry {
  lat: number;
  lng: number;
}

interface INeedWithCoords extends INeed {
  lat?: number;
  lng?: number;
}

// Define the components with SSR disabled dynamically
const MapContainerDynamic = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false },
);
const TileLayerDynamic = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false },
);
const MarkerDynamic = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false },
);
const PopupDynamic = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false },
);

const Map: FC = () => {
  const [needs, setNeeds] = useState<INeedWithCoords[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCoordinates = async (
      city: string,
    ): Promise<IGeometry | null> => {
      const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city)}&key=97004c1ace8a49279c0317128c43a87c`;
      try {
        const response = await fetch(apiUrl);
        if (!response.ok)
          throw new Error(
            `Geocoding failed: ${response.status} ${response.statusText}`,
          );
        const data = await response.json();
        return data.results[0]?.geometry;
      } catch (error) {
        console.error("Failed to fetch coordinates:", error);
        return null;
      }
    };

    const fetchData = async () => {
      try {
        const data = await getNeeds();
        const needsWithCoords = await Promise.all(
          data.data.map(async (need: INeed) => {
            const coords = await fetchCoordinates(need.location);
            return { ...need, ...coords };
          }),
        );
        setNeeds(needsWithCoords);
      } catch (error) {
        console.error("Failed to fetch needs:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) return <Loader />;
  if (!needs.length) return <p>No needs data</p>;

  const iconHtml = ReactDOMServer.renderToString(
    <FaMapMarkerAlt style={{ color: "red", fontSize: "24px" }} />,
  );
  const customIcon = new L.DivIcon({
    html: iconHtml,
    className: "",
    iconSize: L.point(24, 24),
    iconAnchor: L.point(12, 12),
  });

  return (
    <MapContainerDynamic
      center={[48.3794, 31.1656]}
      zoom={6}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayerDynamic
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {needs.map((need) => (
        <MarkerDynamic
          key={need._id}
          position={[need.lat ?? 0, need.lng ?? 0]}
          icon={customIcon}
        >
          <PopupDynamic>
            <Link href={`/needs/${need._id}`}>{need.title}</Link>
          </PopupDynamic>
        </MarkerDynamic>
      ))}
    </MapContainerDynamic>
  );
};

export default Map;
