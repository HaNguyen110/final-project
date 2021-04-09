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
      <div className="">
        <div className="container">
          {menuData.map((item) => {
            return (
              <div className={`row `}>
                <MenuCategory menuData={item} key={item.id} />
              </div>
            );
          })}
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Menu;
