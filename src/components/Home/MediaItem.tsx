import Image from "next/image";
import { FC } from "react";
import { MediaItemProps } from "./interfaces";

const MediaItem: FC<MediaItemProps> = ({
  images,
  title,
  categories,
  description,
}) => {
  const descriptionLines = description.split("\n").map((line, index) => (
    <p
      key={index}
      className="mt-[12px] font-nunito text-black font-semibold text-xs leading-[24px]"
    >
      {line}
    </p>
  ));

  return (
    <div className="w-[438px] h-[336px] flex flex-row overflow-hidden rounded-[8px]">
      <div className="w-[183.5px] flex flex-col">
        {images.map((image) => (
          <Image
            className="mt-[3px] first:mt-0"
            width={183.5}
            height={160}
            key={image}
            alt=""
            src={image}
          />
        ))}
      </div>
      <div className="w-[254px] h-full bg-white pt-[40px] pr-[30px] pb-[34px] pl-[34px]">
        <h3 className="text-black font-bold text-md leading-[32px]">{title}</h3>
        {categories && (
          <div className="font-nunito mt-[12px]">
            {categories.map((category) => (
              <div className="flex items-center" key={category}>
                <div className="bg-gold w-[6px] h-[6px] rounded-full" />
                <p className="ml-[8px] text-black font-bold text-xs leading-[26px]">
                  {category}
                </p>
              </div>
            ))}
          </div>
        )}
        {descriptionLines}
      </div>
    </div>
  );
};

export default MediaItem;
