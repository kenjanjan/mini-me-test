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
    <div className="flex flex-col md:flex-row w-full">
      <div className="md:w-1/2 relative h-[300px] md:h-auto">
        <Image
          src={`/assets/images/${image}.png`}
          layout="fill"
          objectFit="cover"
          alt="medex-image"
        />
      </div>
      <div className="bg-denim md:w-1/2 md:pt-[114px] md:px-[64px] md:pb-[113px] pt-[27px] pb-[40px] px-[16px] text-white flex flex-col gap-[12px]">
        <h2>{title}</h2>
        <p className="md:w-3/4">{message}</p>
      </div>
    </div>
  );
};

export default BottomSection;
