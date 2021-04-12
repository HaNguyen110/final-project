import styles from "./Menu.module.css";

import MenuCategory from "../../layouts/Categories";
import Hero from "../../layouts/Hero";
import Footer from "../../layouts/Footer";

const Menu = ({ data }) => {
  if (data) {
    return (
      <>
        <Hero src="/bgMenu.jpg" title="menu" />

        <div className={`${styles.MenuCategories} container`}>
          {data.map((item) => {
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
  }
  return null;
};

export default Menu;
