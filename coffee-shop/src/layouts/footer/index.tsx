import React from "react";

import Link from "next/link";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className="footer-info">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <aside className="widget">
                  <h3 className={styles.title}>About Us</h3>
                  <div className="widget-content">
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid.
                    </p>
                    <p>
                      <span>hello@mtheme.org</span>
                    </p>
                    <p>
                      <span>+(84)123456789</span>
                    </p>
                    <p>
                      <span>
                        198 West 21th Street, Suite 721 New York NY 10010
                      </span>
                    </p>
                  </div>
                </aside>
              </div>
              <div className={`${styles.widget} col-md-4`}>
                <h3 className={styles.title}>For Business</h3>

                <ul className={styles.widgetContent}>
                  <li className={styles.widgetLink}>
                    <Link href="#"> Office Coffee</Link>
                  </li>
                  <li className={styles.widgetLink}>
                    <Link href="#">Food Service</Link>
                  </li>
                  <li className={styles.widgetLink}>
                    <Link href="#">Affiliate Program</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <aside className="widget">
                  <h3 className={styles.title}>Follow Us</h3>
                  <div className="widget-content">
                    <p>Follow Origin on the following social network sites.</p>
                  </div>
                </aside>
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
}
