import React from "react";
import { notFound } from "next/navigation";
import CenterBody from "@/components/CenterBody";
import data from "@/data/medexpress.json";

async function fetchCenterData(region: string, center_name: string, id: string) {
  const centerData = data.response.results.filter((result: { data: { isoRegionCode: string; c_centerName: string; id: string } }) =>
    result.data.isoRegionCode === region &&
    result.data.c_centerName === center_name &&
    result.data.id === id
  );

  return centerData.length > 0 ? centerData[0] : null;
}

export default async function CenterView({ params }: { params: { region: string; center_name: string; id: string } }) {
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