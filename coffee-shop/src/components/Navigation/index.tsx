import React from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";

type Item = {
  id?: number;
  label?: string;
};

type Props = {
  menu?: Item[];
  classNames?: string;
};

const Navigation: React.FC<Props> = ({ menu = [], classNames = "" }) => {
  return (
    <div className={`${classNames} `}>
      <nav className="navbar navbar-expand-lg ">
        <div className={styles.navbarMenu}>
          <div className={styles.btn}>
            <button
              className="navbar-toggler navbar-light"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {menu.map((item, index) => {
              return (
                <li className="nav-item active" key={`${index}-${item.label}`}>
                  <Link href="/">
                    <a className={styles.linkItem} href="#">
                      {item.label}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
