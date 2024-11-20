import Image from "next/image";
import Link from "next/link";

const FindACenterSection = () => {
  const state = ["PA", "VA", "WV"];
  return (
    <div className="flex justify-between w-full mx-auto cursor-pointer">
      {state.map((state, index) => (
        <Link href={`/region/${state}`} key={index}>
          <Image
            src="/assets/images/medex-image.png"
            width={420}
            height={157}
            alt="medex-image"
            className=""
          />
          <h3>
            {state === "PA"
              ? "Pennsylvania"
              : state === "VA"
              ? "Virginia"
              : "West Virginia"}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default FindACenterSection;
