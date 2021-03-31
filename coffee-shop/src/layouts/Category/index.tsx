import React from "react";

type Props = {};

const Category = ({ menuData = {} }) => {
  const { category, image, items } = menuData || {};
  console.log("items", items);
  return <div>{category}</div>;
};

export default Category;
