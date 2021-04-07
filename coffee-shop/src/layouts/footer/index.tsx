import React from "react";

import styles from "./Footer.module.css";

import FooterItem from "../../components/FooterItem";

type items = {
  text: string;
};

type footerData = {
  title: string;
  items: Array<items>;
};

type Props = {
  footerData: footerData;
};

const Footer = ({ footerData }: Props) => {
  const { title, items } = footerData;
  console.log("footerData", footerData);

  return (
    <>
      <footer className={styles.footer}>
        <div className="footer-info">
          <div className="container">
            <div className="row">
              <div className="col-md-4"></div>
              <div className={`${styles.widget} col-md-4`}>
                {items.map((items) => {
                  return <FooterItem title={title} text={items.text} />;
                })}
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            <p className={styles.copyrightText}>Copyright © 2015 </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
