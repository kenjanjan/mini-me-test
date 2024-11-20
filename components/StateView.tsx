import Link from "next/link";
import React from "react";

const StateView = ({ name, id }: { name: string; id: string }) => {
  return (
    <div className="flex">
      {name}
      <Link href={`/state/${id}`}>View</Link>
    </div>
  );
};

export default StateView;
