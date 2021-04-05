import React from "react";

import styles from "./EntryDetail.module.css";
import Post from "../Post";
import Entry from "../Entry";
import { type } from "node:os";

type Props = {
  title?: string;
  description?: string;
  note?: string;
  date?: string;
  quote?: string;
};

const EntryDetail = ({
  title = "",
  description = "",
  note = "",
  date = "",
  quote = "",
}: Props) => {
  return (
    <div className={styles.entryDetail}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Entry date={date} />
          </div>
          <div className="col-md-9">
            <Entry title={title} note={note} />
            <p>{description}</p>
            <p>{description}</p>
            <blockquote className={styles.entryQuote}>{quote}</blockquote>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryDetail;
