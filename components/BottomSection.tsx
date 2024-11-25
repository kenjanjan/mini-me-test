import Image from "next/image";

const BottomSection = ({
  image,
  title,
  message,
}: {
  image: string;
  title: string;
  message: string;
}) => {
  return (
    <div className="flex w-full flex-col md:flex-row">
      <div className="relative h-[300px] md:h-auto md:w-1/2">
        <Image
          src={`/assets/images/${image}.png`}
          layout="fill"
          objectFit="cover"
          alt="medex-image"
        />
      </div>
      <div className="flex flex-col gap-[12px] bg-denim px-[16px] pb-[40px] pt-[27px] text-white md:w-1/2 md:px-[64px] md:pb-[113px] md:pt-[114px]">
        <h2>{title}</h2>
        <p className="md:w-3/4">{message}</p>
      </div>
    </div>
  );
};

export default BottomSection;
