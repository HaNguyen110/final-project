import React from "react";

import { menuData } from "../../constants/menuMocksData";

import styles from "./Menu.module.css";

import MenuCategory from "../../layouts/Categories";
import Hero from "../../layouts/Hero";
import Footer from "../../layouts/Footer";

const Menu = () => {
  return (
    <>
      <Hero src="/bgMenu.jpg" title="menu" />

      <div className={`${styles.MenuCategories} container`}>
        {menuData.map((item) => {
          return (
            <div className={`${styles.categories} row`}>
              <MenuCategory menuData={item} key={item.id} />
            </div>
          );
        })}
      </div>

      <Footer />
    </>
  );
};

export default Menu;
