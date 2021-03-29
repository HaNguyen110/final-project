import React from "react";
import Description from "../../components/Description";
import Post from "../../components/Post";
import styles from "./Latest.module.css";
import Image from "next/image";

type Props = {};

const Latest: React.FC<Props> = ({}) => {
  return (
    <>
      <div className={styles.latest}>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <Description title="latest update" />
              <div className="row">
                <div className="col-md-4">
                  <Image className="" src="" alt="" width="" height="" />
                </div>

                <div className="col-md-8">
                  <div className={styles.latestContent}>
                    <Post
                      title="happy hour, between 4pm & 5pm"
                      text="In specialty coffee culture an ability to properly brew coffee
                  is summing it all up. In one cup of coffee we bring together efforts 
                  of all of those who worked o..."
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className={styles.latestContent}>
                    <Post
                      title="happy hour, between 4pm & 5pm"
                      text="In specialty coffee culture an ability to properly brew coffee
                  is summing it all up. In one cup of coffee we bring together efforts 
                  of all of those who worked o..."
                    />
                  </div>
                </div>
                <div className="col-md-4">123</div>
              </div>
            </div>
            <div className="col-md-5">123</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Latest;
