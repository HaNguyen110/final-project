import React from "react";
import styles from "./Post.module.css";

type Props = {
  title?: string;
  text?: string;
};

const Post = ({ title = "", text = "" }) => {
  return (
    <>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
    </>
  );
};

export default Post;
