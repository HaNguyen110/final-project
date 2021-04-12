import Image from "next/image";

import styles from "./InfoUs.module.css";

import Description from "../../components/Description";
import image from "next/image";

type image = {
  src: string;
  alt: string;
};

type infoUsData = {
  title: string;
  text: string;
  comment: string;
  images: image[];
};

type Props = {
  infoUsData: infoUsData;
};

const InfoUs = ({ infoUsData }: Props) => {
  const { title, text, comment, images } = infoUsData || {};
  {
    return (
      <div className={styles.info}>
        <div className="container">
          <div className={`${styles.infoContent} row`}>
            <div className={`${styles.des} col-md-6`}>
              <Description title={title} text={text} comment={comment} />
            </div>
            <div className={`${styles.infoImg} col-md-6`}>
              <Image
                src={images.src}
                alt={images.alt}
                height={400}
                width={340}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className={styles.imgBg}>
          <Image
            src={images.src}
            alt={images.alt}
            height={500}
            width={1370}
            objectFit="cover"
          />
        </div>
      </div>
    );
  }
};

export default InfoUs;
