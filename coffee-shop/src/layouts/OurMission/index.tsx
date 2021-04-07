import React from "react";

import Image from "next/image";

import styles from "./OutMission.module.css";

import Description from "../../components/Description";

type image = {
  src: string;
  alt: string;
};

type content = {
  title: string;
  text: string;
  comment: string;
  subComment: string;
};

type ourMissionData = {
  image: image;
  content: Array<content>;
};

type Props = {
  ourMissionData: ourMissionData;
};

const OurMission = ({ ourMissionData }: Props) => {
  const { image, content } = ourMissionData;
  const description = content[0];
  const subDescription = content[1];
  return (
    <div className={styles.OurMission}>
      <div className="container">
        <div className={`${styles.missionContent} row`}>
          <div className="col-md-5 text-center">
            <Image
              className=""
              src={image.src}
              alt={image.alt}
              width={458}
              height={568}
              objectFit="cover"
            />
          </div>
          <div className="col-md-7">
            <Description
              title={description.title}
              text={description.text}
              comment={description.comment}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
