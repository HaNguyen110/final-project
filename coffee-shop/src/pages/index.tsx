import React from "react";

import styles from "../styles/Home.module.css";

import SEO from "../components/SEO";

import Footer from "../layouts/Footer";
import InfoUs from "../layouts/InfoUs";
import Service from "../layouts/Service";
import Recipe from "../layouts/Recipe";
import Latest from "../layouts/Latest";
import Bulletproof from "../layouts/Bulletproof";
import Hero from "../layouts/Hero";
import OutMission from "../layouts/OurMission";
import HeroAbout from "../layouts/HeroAbout";
import InfoAbout from "../layouts/InfoAbout";

export default function Home() {
  return (
    <div className={styles.container}>
      <SEO title="Home page" description="This is Home page" />

      {/* <Carousel data={carouselData} /> */}

      <Hero />

      <InfoUs />

      <Service />

      <Latest />

      <Recipe />

      <Bulletproof />

      <Footer />

      {/* <Navigation menu={navigationData} classNames="" /> */}

      <HeroAbout />

      <InfoUs />

      <OutMission />

      <InfoAbout
        title="our promise"
        text="Over time, we saw others trying to cut corners, and we vowed to work 
        harder to make food that you can trust. As GMO’s, MSG, fillers, sweeteners 
        and irradiation became increasingly common elsewhere, we deepened our commitment 
        to our customers and to the planet. By 2007, we achieved our 100% Organic 
        Certification, and in the following months we increased our line to include 
        Certified Fair Trade, Kosher, Vegan, and Gluten Free products. In 2012, we 
        developed a line of EcoShakers, a spice container that is 100% recyclable."
      />

      <Footer />
    </div>
  );
}
