import Link from "next/link";
import React from "react";
import data from "@/data/medexpress.json";
import Image from "next/image";

type VisitACenterSectionProps = {
  slug: string;
};

const VisitACenterSection = ({ slug }: VisitACenterSectionProps) => {
  const stateData = data.response.results.filter(
    (result: { data: { isoRegionCode: string } }) =>
      result.data.isoRegionCode === slug
  );

  return (
    <div className="bg-background-blue px-[70px] py-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        
      {stateData.map(({ data }, index) => {
        const { c_centerName, address, name, id } = data;
        const centerTitle = `${c_centerName}, ${address.region} ${name}`;

        return (
          <div
            key={index}
            className="flex flex-col items-center gap-6" 
          >
            <div className="bg-white w-full max-w-[307px] h-[405px] ">
              <div>
                <Image
                  src={"/assets/images/center-image.png"}
                  alt="center-image"
                  width={307}
                  height={160}
                  className="rounded-t"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-denim font-semibold mb-4">{centerTitle}</h3>
                <Link href={`/centers/${id}`} className="text-primary font-medium">
                  Visit
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VisitACenterSection;