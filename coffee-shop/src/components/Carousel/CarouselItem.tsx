import Image from "next/image";

import Description from "../Description";

import styles from "./Carousel.module.css";

export type Item = {
  src: string;
  alt: string;
  isActive: boolean;
  title?: string;
  text?: string;
};

type Props = {
  item: Item;
};

const CarouselItem = ({ item }: Props) => {
  return (
    <div className={`carousel-item ${item.isActive ? "active" : ""}`}>
      <div className={styles.carouselContent}>
        <Description
          title={item.title}
          text={item.text}
          classNames={{
            title: "text-white text-center d-none d-md-block",
            text: "text-white text-center d-none d-lg-block",
          }}
        />
      </div>
      <Image
        src={item.src}
        alt={item.alt}
        objectFit="cover"
        layout="responsive"
        width={1370}
        height={500}
      />
    </div>
  );
};

export default CarouselItem;
