import React, { memo } from "react";
import styles from "./Description.module.css";

type Props = {
  title?: string;
  text?: string;
};

const Description: React.FC<Props> = ({ title = "", text = "" }) => {
  return (
    <>
      <div className={styles.lineTitle}>{title}</div>
      <div className={styles.text}>{text}</div>
    </>
  );
};

export default memo(Description);
