import React from "react";
import styles from "./Description.module.css";

type Props = {
  title?: string;
  text?: string;
  comment?: string;
};

const Description: React.FC<Props> = ({
  title = "",
  text = "",
  comment = "",
}) => {
  return (
    <>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
      <div className={styles.comment}>{comment}</div>
    </>
  );
};

export default Description;
