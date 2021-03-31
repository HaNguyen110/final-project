import React from "react";

import styles from "../styles/Home.module.css";

import SEO from "../components/SEO";

import Hero from "../layouts/Hero";
import InfoUs from "../layouts/InfoUs";
import Service from "../layouts/Service";
import Recipe from "../layouts/Recipe";
import Latest from "../layouts/Latest";
import Bulletproof from "../layouts/Bulletproof";
import Footer from "../layouts/Footer";
import Entry from "../components/Entry";

export default function Home() {
  return (
    <div className={styles.container}>
      <SEO title="Home page" description="This is Home page" />

      {/* <Carousel data={carouselData} /> */}

      <Hero isActiveCarousel />

      <InfoUs />

      <Service />

      <Latest />

      <Recipe />

      <Bulletproof />

      <Footer />

      {/* <Navigation menu={navigationData} classNames="" /> */}
    </div>
  );
}
