import React from "react";
//import CarouselItem, { Item } from "./CarouselItem";
import Image from "next/image";

import styles from "./InfoAbout.module.css";

import Description from "../../components/Description";

type Props = {
  title?: string;
  text?: string;
  comment?: string;
  src?: string;
  alt?: string;
  width?: number;
  heigt?: number;
};

const Carousel = ({
  title = "",
  text = "",
  comment = "",
  src = "",
  alt = "",
  width = "",
  heigt = "",
}) => {
  return (
    <div className={styles.about}>
      <div className="container">
        <div className={`${styles.aboutContent} row`}>
          <div className="col-md-7">
            <Description title={title} text={text} comment={comment} />
          </div>
          <div className="col-md-5">
            <Image
              className=""
              src={src}
              alt={alt}
              width={width}
              height={heigt}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
