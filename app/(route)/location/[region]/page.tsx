import { notFound } from "next/navigation";
import RegionBody from "@/components/RegionBody";
import React from "react";

async function fetchRegions() {
  return [{ region: "PA" }, { region: "VA" }, { region: "WV" }];
}

export default async function RegionPage({
  params,
}: {
  params: { region: string };
}) {
  const { region } = params;

  const dataset = await fetchRegions();

  const regionData = dataset.find((item) => item.region === region);

  if (!regionData) {
    notFound();
  }

  return (
    <>
      <RegionBody />
    </>
  );
}
