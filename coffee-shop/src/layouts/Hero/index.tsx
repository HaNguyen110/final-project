import Image from "next/image";

import styles from "./Hero.module.css";

import Carousel from "../../components/Carousel";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";
import Description from "../../components/Description";

type Props = {
  isActiveCarousel?: boolean;
  src?: string;
  title?: string;
};

const Hero = ({
  isActiveCarousel,
  src = "",
  title = "",
  carouselData,
  navigationData,
}: Props) => {
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
      <>
        {isActiveCarousel ? (
          <Carousel data={carouselData} />
        ) : (
          <>
            <div>
              <Image
                className=""
                src={src}
                alt="background"
                width={1920}
                height={478}
                layout="responsive"
              />
            </div>
            <div className={`${styles.title} container`}>
              <Description title={title} classNames={{ title: "text-white" }} />
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default Hero;
