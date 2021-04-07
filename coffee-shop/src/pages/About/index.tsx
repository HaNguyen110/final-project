import React from "react";

import SEO from "../../components/SEO";

import Hero from "../../layouts/Hero";
import InfoUs from "../../layouts/InfoUs";
import OurMission from "../../layouts/OurMission";
import Footer from "../../layouts/Footer";
import OurPromise from "../../layouts/ourPromise";
import Flickity from "../../layouts/Flickity";
import OurMethods from "../../layouts/OurMethods";

import {
  infoUsData,
  ourPromiseData,
  ourMissionData,
  flickityData,
  ourMethodsData,
} from "../../constants/aboutMocksData";

type Props = {};

const About = ({}: Props) => {
  return (
    <div>
      <SEO title="About page" description="This is About page" />

      <Hero src="/bgAbout.jpg" title="about us" />

      <InfoUs infoUsData={infoUsData} />

      <OurMission ourMissionData={ourMissionData} />

      <OurPromise ourPromiseData={ourPromiseData} />

      <Flickity flickityData={flickityData} />

      <OurMethods ourMethodsData={ourMethodsData} />

      {/* <Footer footerData={footerData} /> */}
    </div>
  );
};

export default About;
