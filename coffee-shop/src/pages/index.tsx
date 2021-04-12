import styles from "../styles/Home.module.css";

import SEO from "../components/SEO";

import Hero from "../layouts/Hero";
import InfoUs from "../layouts/InfoUs";
import Service from "../layouts/Service";
import Recipe from "../layouts/Recipe";
import Latest from "../layouts/Latest";
import Bulletproof from "../layouts/Bulletproof";
import Footer from "../layouts/Footer";

type Props = {};

export default function Home(data: Props) {
  if (data) {
    return (
      <div className={styles.container}>
        <SEO title="Home page" description="This is Home page" />

        <Hero isActiveCarousel navigationData />

        <InfoUs infoUsData={infoUsData} />

        <Service serverData={serverData} />

        <Latest latestData={latestData} />

        <Recipe recipeData={recipeData} />

        <Bulletproof bulletproofData={bulletproofData} />

        <Footer />
      </div>
    );
  }
  return null;
}
