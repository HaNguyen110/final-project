import React from "react";
import Image from "next/image";

import styles from "./HeroAbout.module.css";

import { navigationData } from "../../constants";

import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";
import Description from "../../components/Description";

type Props = {};

const Hero: React.FC<Props> = ({}) => {
  return (
    <div className={styles.about}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Logo
            url="/logo.png"
            alt=" Coffee Shop Logo"
            width={201}
            height={80}
          />
        </div>
        <div className={styles.nav}>
          <Navigation menu={navigationData} />
        </div>
      </div>
      <div className={styles.bgImg}>
        <Image
          className=""
          src="/bgAbout.jpg"
          alt="background about"
          width={1370}
          height={400}
          objectFit="cover"
        />
      </div>
      <div className={styles.title}>
        <Description title="about us" classNames={{ title: "text-white" }} />
      </div>
    </div>
  );
};

export default Hero;
