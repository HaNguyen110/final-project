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
              <div className="col-sm-4">
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
              <div className="col-sm-4">
                <aside className="widget">
                  <h3 className={styles.title}>For Business</h3>

                  <ul className={styles.widgetContent}>
                    <li className={styles.widgetLink}>
                      <Link href="#"> Office Coffee</Link>
                    </li>
                    <li>
                      <a className={styles.widgetLink} href="#">
                        Food Service
                      </a>
                    </li>
                    <li>
                      <a className={styles.widgetLink} href="#">
                        Affiliate Program
                      </a>
                    </li>
                  </ul>
                </aside>
              </div>
              <div className="col-sm-4">
                <aside className="widget">
                  <h3 className={styles.title}>Follow Us</h3>
                  <div className="widget-content">
                    <p>Follow Origin on the following social network sites.</p>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.copyright}>
        <div className="container">
          <p className={styles.copyrightText}>
            Copyright © 2015{" "}
            {/*<a href="http://themeforest.net/user/mtheme_market">mTheme</a>. All Rights Reserved. */}
          </p>
        </div>
      </div>
    </>
  );
}
