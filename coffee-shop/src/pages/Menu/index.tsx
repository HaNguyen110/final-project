import React from "react";

import MenuCategory from "../../layouts/MenuCategory";

import { menuData } from "../../constants";

import Hero from "../../layouts/Hero";
import MenuItem from "../../components/MenuItem";
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
