import React from "react";

import SEO from "../../components/SEO";

import Hero from "../../layouts/Hero";
import InfoUs from "../../layouts/InfoUs";
import OurMission from "../../layouts/OurMission";
import Footer from "../../layouts/Footer";
import InfoAbout from "../../layouts/InfoAbout";
import Flickity from "../../layouts/Flickity";

import { infoUsData, infoAboutData } from "../../constants/aboutMocksData";

type Props = {};

const About = ({}: Props) => {
  return (
    <div>
      <SEO title="About page" description="This is About page" />

      <Hero src="/bgAbout.jpg" title="about us" />

      <InfoUs infoUsData={infoUsData} />

      <OurMission />

      <InfoAbout infoAboutData={infoAboutData} />

      <Flickity />

      {/* <InfoAbout
        title="our methods"
        text="We import 100% organic spices using Fair Trade options whenever available. 
        All imported spices are required to go through a sterilization process before 
        being sold in the United States. Most spice companies sterilize using synthetic 
        chemicals or radiation. Spicely Organics uses a process called steam sterilization, 
        which sterilizes food products without adding any chemicals or hazardous materials."
        comment="Worldwide, we have over 50 passionate employees and counting. In 2012, we 
        opened our first ever Spicely Boutique, located in downtown San Francisco."
        src="/ourMethods.png"
        alt="our method"
        width={350}
        heigt={370}
      /> */}

      <Footer />
    </div>
  );
};

export default About;
