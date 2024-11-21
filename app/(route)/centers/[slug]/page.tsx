import React from "react";
import CenterBody from "@/components/CenterBody";

interface CenterViewProps {
  params: { slug: string };
}

const CenterView: React.FC<CenterViewProps> = ({ params }) => {
  return (
    <>
      <CenterBody params={params} />
    </>
  );
};

export default CenterView;