import Image from "next/image";
import styles from "./Logo.module.css";

type Props = {
  url?: string;
  alt?: string;
  width?: number;
  height?: number;
};

const Logo = ({ url, alt, width, height }: Props) => {
  return (
    <div className={styles.imgLogo}>
      <Image src={url} alt={alt} width={width} height={height} />;
    </div>
  );
};

export default Logo;
