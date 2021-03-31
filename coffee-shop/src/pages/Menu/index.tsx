import React from "react";

import Category from "../../layouts/Category";

import { menuData } from "../../constants";

import Hero from "../../layouts/Hero";

const Menu = () => {
  return (
    <>
      <Hero src="/bgMenu.jpg" title="menu" />
      {menuData.map((item, index) => {
        return <Category menuData={item} key={index} />;
      })}
    </>
  );
};

export default Menu;
