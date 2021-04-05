import React from "react";

import Image from "next/image";

import styles from "./Hero.module.css";

import { carouselData, navigationData } from "../../constants";

import Carousel from "../../components/Carousel";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";
import Description from "../../components/Description";

type Props = {
  isActiveCarousel?: boolean;
  src?: string;
  title?: string;
};

const Hero = ({ isActiveCarousel = true, src = "", title = "" }: Props) => {
  return (
    <div className={styles.hero}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Logo
            url="/logo.png"
            alt=" Coffee Shop Logo"
            width={201}
            height={60}
          />
        </div>
        <div className={styles.nav}>
          <Navigation menu={navigationData} />
        </div>
      </div>
      <div>
        {isActiveCarousel ? (
          <Carousel data={carouselData} />
        ) : (
          <div>
            <div>
              <Image
                className=""
                src={src}
                alt="background "
                width={1370}
                height={400}
                objectFit="cover"
              />
            </div>
            <div className={styles.title}>
              <Description title={title} classNames={{ title: "text-white" }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
