import styles from "../styles/Home.module.css";
import Logo from "../components/Logo";
//import Navigation from "../components/Navigation";
import Description from "../components/Description";
import SEO from "../components/SEO";

// import { carouselData, navigationData } from "../constants";
// import Carousel from "../components/Carousel";
import FooterInfo from "../layouts/Footer";
import InfoUs from "../layouts/InfoUs";
import Service from "../layouts/Service";
import Recipe from "../layouts/Recipe";
import Latest from "../layouts/Latest";
import Bulletproof from "../layouts/Bulletproof";
import Hero from "../layouts/Hero";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <SEO title="Home page" description="This is Home page" />
      <Logo url="" alt="" />

      <Navigation menu={navigationData} />

      <Description
        title="advertising based"
        text="Coffee culture is a great coffee taste and it rests on the basis of responsible & respectful"
      />*/}

      {/* <Carousel data={carouselData} /> */}

      <Hero />

      <InfoUs />

      <Service />

      <Latest />

      <Recipe />

      <Bulletproof />

      <FooterInfo />

      {/* <Navigation menu={navigationData} classNames="" /> */}
    </div>
  );
}
