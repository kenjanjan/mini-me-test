import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="flex flex-grow flex-col items-center gap-6 bg-background-light w-full py-[110px]"
      style={{ minHeight: "calc(100vh - 454px)" }}
    >
      <h1 className="font-lato text-[56px] font-normal text-denim text-center max-w-[789px]">
        We can&apos;t find your page. But let&apos;s see what we can do.
      </h1>
      <span className="font-lato text-lg font-normal text-denim text-center max-w-[789px]">
        We&apos;re so sorry but it seems that the information you&apos;re
        looking for has moved to a new location on our site. Choose to return to
        the home page or you can find a center.
      </span>
      <div className="flex flex-row gap-6">
        <Link
          href={"/"}
          className="w-auto border border-terracota bg-white py-[14px] 
  px-7 text-lg md:text-[21px] font-lato text-terracota font-bold hover:bg-terracota hover:text-white flex 
  items-center justify-center  text-center uppercase max-h-[50px]"
        >
          Return Home
        </Link>
        <Link
          href={"/location"}
          className="w-auto border border-terracota bg-white py-[14px] 
  px-7 text-lg md:text-[21px] font-lato text-terracota font-bold hover:bg-terracota hover:text-white flex 
  items-center justify-center  text-center uppercase max-h-[50px]"
        >
          Find a center
        </Link>
      </div>
    </div>
  );
}
