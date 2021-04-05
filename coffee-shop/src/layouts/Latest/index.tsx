import React from "react";

import styles from "./Latest.module.css";

import Image from "next/image";

import Description from "../../components/Description";
import Post from "../../components/Post";

type Props = {};

const Latest = ({}: Props) => {
  return (
    <div className={styles.latest}>
      <div className="container">
        <div className="row">
          <div className={`${styles.infoLatest} col`}>
            <Description
              title="latest update"
              classNames={{ title: "text-center" }}
            />
            <div className={`${styles.line} row`}>
              <div className="col-md-4">
                <div className={styles.img}>
                  <Image
                    className=""
                    src="/latest-1.png"
                    alt=""
                    width={220}
                    height={143}
                    objectFit="cover"
                  />
                </div>
              </div>

              <div className="col-md-8">
                <div className={styles.latestContent}>
                  <Post
                    title="happy hour, between 4pm & 5pm"
                    text="In specialty coffee culture an ability to properly brew coffee
                  is summing it all up. In one cup of coffee we bring together efforts 
                  of all of those who worked o..."
                  />
                </div>
              </div>
            </div>{" "}
            <div className={`${styles.line} row`}>
              <div className="col-md-8">
                <div className={styles.latestContent}>
                  <Post
                    title="happy hour, between 4pm & 5pm"
                    text="In specialty coffee culture an ability to properly brew coffee
                  is summing it all up. In one cup of coffee we bring together efforts 
                  of all of those who worked o..."
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.img}>
                  <Image
                    className=""
                    src="/latest-2.png"
                    alt=""
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
                src="/coffee.jpg"
                alt=""
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
