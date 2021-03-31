import React from "react";

import Image from "next/image";

type Props = {};

const Flickity = ({}) => {
  return (
    <div>
      <Image
        className=""
        src="/bgAbout-2.jpg"
        alt=""
        width={1370}
        height={500}
        objectFit="cover"
      />
    </div>
  );
};
export default Flickity;
