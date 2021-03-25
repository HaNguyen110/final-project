import React from "react";
import styles from "./Description.module.css";

type Props = {
  title?: string;
  text?: string;
};

const Description: React.FC<Props> = ({ title = "", text = "" }) => {
  return (
    <>
      <div className={styles.title}>{title}</div>
      <div className={styles.line}></div>
      <div className={styles.text}>{text}</div>
    </>
  );
};

export default Description;
