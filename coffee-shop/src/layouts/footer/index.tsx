import React from "react";

import Link from "next/link";

import styles from "./Footer.module.css";

import Description from "../../components/Description";
import FooterItem from "../../components/FooterItem";

//import { footerData } from "../../constants";

// type item = {
//   text: string;
// };

// type dataFooter = {
//   title: string;
//   items: Array<item>;
// };

type Props = {
  //   dataFooter: dataFooter;
};

const Footer = ({}: Props) => {
  return (
    <>
      <div className={styles.footer}>
        <footer className="container">
          <div className="row">
            <div className="col-md-4">
              <aside className="widget">
                <h3 className={styles.title}>About Us</h3>
                <div>
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid.
                  </p>
                  <p>
                    <span>Hello@theme.org</span>
                  </p>
                  <p>
                    <span>+(84)123456789</span>
                  </p>
                </div>
              </aside>
            </div>
            <div className="col-md-4">
              <aside className="widget">
                <h3 className={styles.title}>for business</h3>
                <div>
                  <ul className="list-unstyled">
                    <li className={styles.widgetLink}>
                      <Link href="/">office coffee</Link>
                    </li>
                    <li className={styles.widgetLink}>
                      <Link href="/">food service</Link>
                    </li>
                    <li className={styles.widgetLink}>
                      <Link href="/">affiliate program</Link>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            <div className="col-md-4">
              <aside className="widget">
                <h3 className={styles.title}>fllow us</h3>
                <div>
                  <p>Follow Origin on the following social network sites.</p>
                </div>
              </aside>
            </div>
            <div className={styles.copyright}>
              <p>Copyright &copy; 2015</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
