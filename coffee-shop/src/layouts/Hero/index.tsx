import React from "react";
import styles from "./Hero.module.css";
import { carouselData, navigationData } from "../../constants";
import Carousel from "../../components/Carousel";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";

type Props = {};

const Hero: React.FC<Props> = ({}) => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Logo
              url="/logo.png"
              alt=" Coffee Shop Logo"
              width={201}
              height={86}
            />
          </div>
          <div className={styles.nav}>
            <Navigation menu={navigationData} />
          </div>
        </div>
        <div>
          <Carousel data={carouselData} />
        </div>
      </div>
    </>
  );
};

export default Hero;
