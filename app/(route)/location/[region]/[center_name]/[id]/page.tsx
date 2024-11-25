import React from "react";
import CenterBody from "@/components/CenterBody";
import data from "@/data/medexpress.json";
import { notFound } from "next/navigation";

async function fetchCenterData(
  region: string,
  center_name: string,
  id: string,
) {
  const decodedCenterName = decodeURIComponent(center_name);

  const centerData = data.response.results.filter(
    (result: {
      data: { isoRegionCode: string; c_centerName: string; id: string };
    }) =>
      result.data.isoRegionCode === region &&
      result.data.c_centerName === decodedCenterName &&
      result.data.id === id,
  );

  return centerData.length > 0 ? centerData[0] : null;
}

export default async function CenterView({
  params: paramsPromise,
}: {
  params: Promise<{ region: string; center_name: string; id: string }>;
}) {
  const params = await paramsPromise;

  const { region, center_name, id } = params;
  
  const centerData = await fetchCenterData(region, center_name, id);

  if (!centerData) {
    notFound();
  }

  return (
    <>
      <CenterBody />
    </>
  );
}
