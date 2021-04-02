import React from "react";

import Image from "next/image";

import styles from "./MenuItem.module.css";

type Props = {
  src?: string;
  alt?: string;
  name?: string;
  price?: number;
  description?: string;
};

const MenuItem = ({
  src = "",
  alt = "",
  name = "",
  price = "",
  description = "",
}) => {
  return (
    <div className={`${styles.menuItem} row`}>
      <div className="col-md-2">
        {/* <Image
          className={styles.menuImg}
          src={src}
          alt={alt}
          width={50}
          height={60}
          objectFit="cover"
        /> */}
      </div>
      <div className={`${styles.menuContent} col-md-10`}>
        <h5 className={styles.menuTitle}>
          <span>{name}</span>
          <span className={styles.menuPrice}>{price}</span>
        </h5>
        <p className={styles.menuText}>{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
