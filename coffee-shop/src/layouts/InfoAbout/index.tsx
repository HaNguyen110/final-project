import React from "react";

import Image from "next/image";

import styles from "./InfoAbout.module.css";

import Description from "../../components/Description";

type image = {
  src: string;
  alt: string;
};

type infoAboutData = {
  title: string;
  text: string;
  comment: string;
  image: image;
};

type Props = {
  infoAboutData?: infoAboutData;
};

const InfoAbout = ({ infoAboutData }: Props) => {
  const { title, text, comment, image } = infoAboutData;
  return (
    <div className={styles.about}>
      <div className="container">
        <div className={`${styles.aboutContent} row`}>
          <div className="col-md-7">
            <Description title={title} text={text} comment={comment} />
          </div>
          <div className="col-md-5">
            <Image
              src={image.src}
              alt={image.alt}
              width={457}
              height={329}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoAbout;
