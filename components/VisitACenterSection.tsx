import Link from 'next/link';
import React from 'react'

type VisitACenterSectionProps = {
   centers: { address: string; id: string; }[]
}

const VisitACenterSection = ({centers}:VisitACenterSectionProps) => {
  return (
    <>
    {centers.map((center, index) => (
      <div key={index} className="flex flex-col gap-[8px]">
        <h3 className="text-denim">{center.address}</h3>
        <Link href={`/centers/${center.id}`} className="text-primary">Visit</Link>
      </div>
    ))}
    </>
  )
}

export default VisitACenterSection