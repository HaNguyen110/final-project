import React from "react";

import Image from "next/image";

import styles from "./Bulletproof.module.css";

import Post from "../../components/Post";

type Props = {};

const Bulletproof = ({}) => {
  return (
    <div className={styles.bulletproof}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className={styles.img}>
              <Image
                className=""
                src="/img-10.png"
                alt="bulletproofContent"
                width={420}
                height={280}
                objectFit="cover"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.bulletproofContent}>
              <Post title="get your bulletproof coffee making kit" />
              <ul>
                <li className={styles.bulletproofText}>
                  1 cup unsweetened cocoa powder
                </li>
                <li className={styles.bulletproofText}>
                  1/2 cup butter, cut into 1–inch pieces
                </li>
                <li className={styles.bulletproofText}>
                  1 1/4 cups granulated sugar
                </li>
                <li className={styles.bulletproofText}>
                  1/2 cup firmly packed dark brown sugar
                </li>
                <li className={styles.bulletproofText}>
                  1 1/4 tsp baking soda
                </li>
                <li className={styles.bulletproofText}>
                  Add a Klean Kanteen Insulated Coffee Flask / Shaker &amp; a
                  Cafe Cap
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.bulletproofComment}>
            <Post
              title="“The easiest and most convenient way I have used in making
						Bulletproof coffee. We use it very day.”"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bulletproof;
