import React from "react";

import styles from "./InfoNewsDetail.module.css";

import InfoNews from "../InfoNews";

type Props = {
  title?: string;
  description?: string;
  note?: string;
  date?: string;
  quote?: string;
};

const InfoNewDetail = ({
  title = "",
  description = "",
  note = "",
  date = "",
  quote = "",
}: Props) => {
  return (
    <div className={styles.infoNewsDetail}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <InfoNews date={date} />
          </div>
          <div className="col-md-9">
            <InfoNews title={title} note={note} />
            <p>{description}</p>
            <blockquote className={styles.infoNewsQuote}>{quote}</blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoNewDetail;
