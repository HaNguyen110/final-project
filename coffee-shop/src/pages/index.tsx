import styles from "../styles/Home.module.css";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Description from "../components/Description";
import SEO from "../components/SEO";

import { navigationData } from "../constants";
import Carousel from "../components/Carousel";
import FooterInfo from "../layouts/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <SEO title="Home page" description="This is Home page" />
      <Logo url="" alt="" />

      <Navigation menu={navigationData} />

      <Description
        title="advertising based"
        text="Coffee culture is a great coffee taste and it rests on the basis of responsible & respectful"
      />

      <Carousel />

      <FooterInfo />

      {/* <Navigation menu={navigationData} classNames="" /> */}
    </div>
  );
}
