import React from "react";

import Image from "next/image";

import Description from "../Description";

import styles from "./Carousel.module.css";

export interface Item {
  src: string;
  alt: string;
  isActive: boolean;
  title: string;
  text: string;
}

type Props = {
  item: Item;
};

const CarouselItem: React.FC<Props> = ({ item }: Props) => {
  return (
    <div className={`carousel-item ${item.isActive ? "active" : ""}`}>
      <div className={styles.carouselContent}>
        <Description
          title={item.title}
          text={item.text}
          classNames={{
            title: "text-white text-center",
            text: "text-white text-center",
          }}
        />
      </div>
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
