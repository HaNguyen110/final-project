import React from "react";

import { menuData } from "../../constants/menuMocksData";

import MenuCategory from "../../layouts/Categories";
import Hero from "../../layouts/Hero";
import Footer from "../../layouts/Footer";

const Menu = () => {
  return (
    <>
      <Hero src="/bgMenu.jpg" title="menu" />
      {menuData.map((item, index) => {
        return <MenuCategory menuData={item} key={index} />;
      })}
      <Footer />
    </>
  );
};

export default Menu;
