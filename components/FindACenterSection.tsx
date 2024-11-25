import Image from "next/image";
import Link from "next/link";

const FindACenterSection = () => {
  const state = ["PA", "VA", "WV"];
  return (
    <div className="mx-auto flex w-full cursor-pointer flex-col items-center justify-between gap-[24px] bg-background-light px-[16px] py-[48px] md:px-[70px] md:py-[64px]">
      <h2 className="text-center text-denim">
        choose your state to find a center
      </h2>
      <div className="flex flex-col justify-between gap-[20px] md:flex-row">
        {state.map((state, index) => (
          <Link
            href={`/location/${state}`}
            key={index}
            className="flex flex-col items-center gap-[10px] border border-[#DCDCDC] bg-white"
          >
            <Image
              src={`/assets/images/${state}.png`}
              width={420}
              height={157}
              alt={`${state}`}
              className=""
            />
            <h3 className="mb-[16px] text-[28px]">
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
