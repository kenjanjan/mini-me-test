import Image from "next/image";
import Link from "next/link";

const FindACenterSection = () => {
  const state = ["PA", "VA", "WV"];
  return (
    <div className="flex justify-between bg-background-light w-full flex-col gap-[24px] items-center mx-auto cursor-pointer md:px-[70px] px-[16px] py-[48px] md:py-[64px]">
      <h2 className="text-denim text-center">choose your state to find a center</h2>
      <div className="flex md:flex-row flex-col justify-between gap-[20px]">
        {state.map((state, index) => (
          <Link href={`/location/${state}`} key={index} className="flex bg-white border border-[#DCDCDC] flex-col gap-[10px] items-center">
            <Image
              src={`/assets/images/${state}.png`}
              width={420}
              height={157}
              alt={`${state}`}
              className=""
            />
            <h3 className="text-[28px] mb-[16px]">
              {state === "PA"
                ? "Pennsylvania"
                : state === "VA"
                ? "Virginia"
                : "West Virginia"}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FindACenterSection;
