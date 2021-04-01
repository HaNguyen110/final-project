import React from "react";

import Image from "next/image";

import styles from "./NewsDetailPost.module.css";

import EntryDetail from "../../components/EntryDetail";

type Props = {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
};

const NewsDetailPost = ({ src = "", alt = "", width = "", height = "" }) => {
  return (
    <div className={styles.detailPost}>
      <div className={styles.detailImg}>
        <Image
          className=""
          src={src}
          alt={alt}
          width={width}
          height={height}
          objectFit="cover"
        />
      </div>
      <div className={styles.detailContent}>
        <EntryDetail />
      </div>
    </div>
  );
};

export default NewsDetailPost;
