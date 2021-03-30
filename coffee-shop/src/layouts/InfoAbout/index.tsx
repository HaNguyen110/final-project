import React from "react";
//import CarouselItem, { Item } from "./CarouselItem";

import styles from "./InfoAbout.module.css";

import Description from "../../components/Description";

type Props = {
  title?: string;
  text?: string;
};

const Carousel: React.FC<Props> = ({ title = "", text = "" }) => {
  return (
    <div className={styles.about}>
      <div className="container">
        <div className={`${styles.aboutContent} row`}>
          <div className="col-sm-7">
            <Description title={title} text={text} />
          </div>
          <div className="col-sm-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
