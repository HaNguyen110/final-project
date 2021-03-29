import React, { memo } from "react";
import Image from "next/image";
import styles from "./Logo.module.css";

type Props = {
  url: string;
  alt: string;
};

const Logo: React.FC<Props> = ({ url = "", alt = "" }) => {
  return (
    <>
      <div className={styles.imgLogo}>
        <Image src="/logo.png" alt="logo" width={201} height={86} />;
      </div>
    </>
  );
};

export default memo(Logo);
