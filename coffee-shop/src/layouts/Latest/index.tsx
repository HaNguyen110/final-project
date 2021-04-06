import React from "react";

import styles from "./Latest.module.css";

import Image from "next/image";

import Description from "../../components/Description";
import Post from "../../components/Post";

type item = {
  subTitle: string;
  description: string;
  src: string;
  alt: string;
};

type latestData = {
  items: Array<item>;
  title: string;
  src: string;
  alt: string;
};

type Props = {
  latestData: latestData;
};

const Latest = ({ latestData }: Props) => {
  const { title, src, alt, items } = latestData;
  const latestTea = items[0];
  const latestCoffee = items[1];
  return (
    <div className={styles.latest}>
      <div className="container">
        <div className="row">
          <div className={`${styles.infoLatest} col`}>
            <Description title={title} classNames={{ title: "text-center" }} />
            <div className={`${styles.line} row`}>
              <div className="col-md-4">
                <div className={styles.img}>
                  <Image
                    src={latestTea.src}
                    alt={latestTea.alt}
                    width={220}
                    height={143}
                    objectFit="cover"
                  />
                </div>
              </div>

              <div className="col-md-8">
                <div className={styles.latestContent}>
                  <Post
                    title={latestTea.subTitle}
                    text={latestTea.description}
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.line} row`}>
              <div className="col-md-8">
                <div className={styles.latestContent}>
                  <Post
                    title={latestCoffee.subTitle}
                    text={latestCoffee.description}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.img}>
                  <Image
                    src={latestCoffee.src}
                    alt={latestCoffee.alt}
                    width={220}
                    height={155}
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 text-center">
            <div className={styles.img}>
              <Image
                className={styles.coffeeImg}
                src={src}
                alt={alt}
                width={427}
                height={540}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
