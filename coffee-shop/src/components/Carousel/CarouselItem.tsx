import React from "react";
import Image from "next/image";
import { type } from "node:os";

export interface IItem {
  src: string;
  alt: string;
  isActive: boolean;
}

type Props = {
  item: IItem;
};

const CarouselItem: React.FC<Props> = ({ item }: Props) => {
  return (
    <div className={`carousel-item ${item.isActive ? "active" : ""}`}>
      <Image
        src={item.src}
        className="d-block w-100"
        alt={item.alt}
        width={1370}
        height={600}
      />
    </div>
  );
};

export default CarouselItem;
