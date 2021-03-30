import React from "react";

import Image from "next/image";

import styles from "./InfoUs.module.css";

import Description from "../../components/Description";

export default function InfoUs() {
  return (
    <div className={styles.info}>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className={styles.des}>
              <Description
                title="welcome to our retation"
                text="Cmspresso is the process that slowly and gradually 
          releases the purest of essence. As tea leaves unravel 
          and coffee patiently drips, it is the best representation of 
          the making of tea and coffee. We want the tea and coffee from 
          Cmspresso to express their many levels of character through a 
          thoughtful and caring hand."
                comment="Cmspresso is a concept that we wish to pass for-ward. 
          Cmspresso means a healthy and positive outlook for the adopters 
          of this great attitude."
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        className=""
        src="/bg-1.jpg"
        alt="bg"
        height={529}
        width={1370}
        objectFit="cover"
      />
    </div>
  );
}
