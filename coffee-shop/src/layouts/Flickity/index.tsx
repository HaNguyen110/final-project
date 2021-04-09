import React from "react";

import Image from "next/image";

type image = {
  src: string;
  alt: string;
};

type flickityData = {
  image: image;
};

type Props = {
  flickityData: flickityData;
};

const Flickity = ({ flickityData }: Props) => {
  const { image } = flickityData;
  console.log("flickityData", flickityData);

  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={1370}
      height={500}
      objectFit="cover"
      layout="responsive"
    />
  );
};

export default Flickity;
