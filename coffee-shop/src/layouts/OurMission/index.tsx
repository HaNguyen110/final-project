import React from "react";

import Image from "next/image";

import styles from "./OutMission.module.css";

import Description from "../../components/Description";

type Props = {};

const OutMission = ({}: Props) => {
  return (
    <div className={styles.OurMission}>
      <div className="container">
        <div className={`${styles.missionContent} row`}>
          <div className="col-md-5 text-center">
            <Image
              className=""
              src="/ourMission.png"
              alt="our mission"
              width={458}
              height={568}
              objectFit="cover"
            />
          </div>
          <div className="col-md-7">
            <Description
              title="our mission"
              text="We believe in sharing quality organic products that you can enjoy with confidence."
              comment="We strive to nourish your body and respect the environment by certifying each 
              of our products organic and gluten free, using pure ingredients that are ethically 
              sourced from around the world and embracing sustainable, eco-friendly practices, always."
            />
            <Description
              text="tIn all that we do, we aim for goodness."
              comment="Whether you are dedicated to a wholesome, organic lifestyle, are dabbling in a 
              gluten free diet or enjoy using the freshest and most expansive variety of spices in your 
              culinary creations, we want you to empower your creativity and wellness with quality
              organic ingredients and help you feel good about your food choices."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutMission;
