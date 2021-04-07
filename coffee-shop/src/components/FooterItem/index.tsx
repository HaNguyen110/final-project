import React from "react";

import Link from "next/link";

import styles from "./FooterItem.module.css";

type Props = {
  title: string;
  text: string;
};

const FooterItem = ({ title = "", text = "" }: Props) => {
  return (
    <>
      <div>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className="widget-content">
        <ul className={styles.widgetContent}>
          <li className={styles.widgetLink}>
            <Link href="#">{text}</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FooterItem;
