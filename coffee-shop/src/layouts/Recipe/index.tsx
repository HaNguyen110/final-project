import React from "react";
import styles from "./Recipe.module.css";
import Post from "../../components/Post";
import Image from "next/image";

export default function Recipe() {
  return (
    <div className={styles.infoRecipe}>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-6">
                <div className={styles.infoPost}>
                  <Post
                    title="do you want to retation the video recippe ?"
                    text="Coffee is a ritual, a small treat in the morning, 
                    “fuel”, a break, chat, affair that makes up our lives. 
                    Making the coffee better, we make our lives better."
                  />
                </div>
              </div>
              <div className="col-md-6">
                <Image
                  className={styles.imgRecipe}
                  src="/img-13.png"
                  alt="recipe"
                  height={285}
                  width={326}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-lg-6">
                <h5 className={styles.comment}>
                  gather more knowledge from coffee
                </h5>
              </div>
              <div className="col-lg-6">
                <h5 className={styles.comment}>
                  work with green and roasted coffee provides
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
