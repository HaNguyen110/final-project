import React from "react";

import styles from "./Entry.module.css";
import Post from "../Post";

type Props = {
  title?: string;
  text?: string;
  note?: string;
  date?: string;
};

const Entry = ({ title = "", text = "", note = "", date = "" }: Props) => {
  return (
    <div className={styles.entry}>
      <div className={styles.entryDate}>{date}</div>
      <div className={styles.entryContent}>
        <Post title={title} text={text} />
      </div>
      <div className={styles.entryMeta}>{note}</div>
    </div>
  );
};

export default Entry;
