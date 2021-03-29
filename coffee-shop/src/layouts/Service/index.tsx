import React from "react";
import Image from "next/image";
import styles from "./Service.module.css";

export default function Service() {
  return (
    <Image
      className={styles.imgService}
      src="/bg-2.jpg"
      alt="bg"
      height="740"
      width="1370"
      objectFit="cover"
    />
  );
}
