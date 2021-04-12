import Image from "next/image";

import styles from "./OurPromise.module.css";

import Description from "../../components/Description";

type image = {
  src: string;
  alt: string;
};

type ourPromiseData = {
  title: string;
  text: string;
  image: image;
};

type Props = {
  ourPromiseData?: ourPromiseData;
};

const OurPromise = ({ ourPromiseData }: Props) => {
  const { title, text, image } = ourPromiseData;
  return (
    <div className={styles.promise}>
      <div className="container">
        <div className={`${styles.aboutContent} row`}>
          <div className="col-md-7">
            <Description title={title} text={text} />
          </div>
          <div className="col-md-5">
            <Image
              className={styles.promiseImg}
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

export default OurPromise;
