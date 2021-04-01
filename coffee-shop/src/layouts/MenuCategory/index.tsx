import React from "react";

import Image from "next/image";

import styles from "./MenuCategory.module.css";
import MenuItem from "../../components/MenuItem";

type Props = {
  src?: string;
  alt?: string;
  date?: string;
  title?: string;
  description?: string;
  note?: string;
};
//name
const MenuCategory = ({
  menuData,
  src = "",
  alt = "",
  name = "",
  price = "",
  description = "",
}) => {
  const {
    category,
    image,
    items = { src, alt, name, price, description },
  } = menuData;
  console.log("items", items);
  return (
    <div className={styles.menu}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className={styles.categoryItem}>{category}</h1>
            <div className={styles.itemImg}>
              <Image
                className=""
                src={image.src}
                alt={image.alt}
                width={525}
                height={321}
                objectFit="cover"
              />
            </div>
          </div>
          <div className="col-md-6">
            {items.map((items) => {
              return (
                <div>
                  <MenuItem
                    name={items.name}
                    price={items.price}
                    description={items.description}
                  />
                </div>
              );
            })}
            {/* <MenuItem
              name={items.name}
              price={items.price}
              description={items.description}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
