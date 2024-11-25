import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="flex w-full flex-grow flex-col items-center gap-6 bg-background-light py-[110px]"
      style={{ minHeight: "calc(100vh - 454px)" }}
    >
      <h1 className="font-lato max-w-[789px] text-center text-[56px] font-normal text-denim">
        We can&apos;t find your page. But let&apos;s see what we can do.
      </h1>
      <span className="font-lato max-w-[789px] text-center text-lg font-normal text-denim">
        We&apos;re so sorry but it seems that the information you&apos;re
        looking for has moved to a new location on our site. Choose to return to
        the home page or you can find a center.
      </span>
      <div className="flex flex-row gap-6">
        <Link
          href={"/"}
          className="font-lato flex max-h-[50px] w-auto items-center justify-center border border-terracota bg-white px-7 py-[14px] text-center text-lg font-bold uppercase text-terracota hover:bg-terracota hover:text-white md:text-[21px]"
        >
          Return Home
        </Link>
        <Link
          href={"/location"}
          className="font-lato flex max-h-[50px] w-auto items-center justify-center border border-terracota bg-white px-7 py-[14px] text-center text-lg font-bold uppercase text-terracota hover:bg-terracota hover:text-white md:text-[21px]"
        >
          Find a center
        </Link>
      </div>
    </div>
  );
}
