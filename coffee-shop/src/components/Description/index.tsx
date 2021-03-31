import React from "react";
import styles from "./Description.module.css";
type ClassNames = {
  title?: string;
  text?: string;
  comment?: string;
};

type Props = {
  title?: string;
  text?: string;
  comment?: string;
  classNames?: ClassNames;
};

const Description = ({
  title = "",
  text = "",
  comment = "",
  classNames = {},
}) => {
  return (
    <>
      <div className={`${styles.title} ${classNames.title}`}>{title}</div>
      <div className={`${styles.text} ${classNames.text}`}>{text}</div>
      <div className={`${styles.comment} ${classNames.text}`}>{comment}</div>
    </>
  );
};

export default Description;
