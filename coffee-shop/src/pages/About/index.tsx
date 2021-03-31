import React from "react";

import SEO from "../../components/SEO";

import Hero from "../../layouts/Hero";
import InfoUs from "../../layouts/InfoUs";
import OurMission from "../../layouts/OurMission";
import Footer from "../../layouts/Footer";
import InfoAbout from "../../layouts/InfoAbout";
import Flickity from "../../layouts/Flickity";

type Props = {};

const About = () => {
  return (
    <div>
      <SEO title="About page" description="This is About page" />

      <Hero src="/bgAbout.jpg" title="about us" />

      <InfoUs />

      <OurMission />

      <InfoAbout
        title="our promise"
        text="Over time, we saw others trying to cut corners, and we vowed to work 
        harder to make food that you can trust. As GMO’s, MSG, fillers, sweeteners 
        and irradiation became increasingly common elsewhere, we deepened our commitment 
        to our customers and to the planet. By 2007, we achieved our 100% Organic 
        Certification, and in the following months we increased our line to include 
        Certified Fair Trade, Kosher, Vegan, and Gluten Free products. In 2012, we 
        developed a line of EcoShakers, a spice container that is 100% recyclable."
        src="/latest-2.png"
        alt="our promse"
        width={457}
        heigt={329}
      />

      <Flickity />

      <InfoAbout
        title="our methods"
        text="We import 100% organic spices using Fair Trade options whenever available. 
        All imported spices are required to go through a sterilization process before 
        being sold in the United States. Most spice companies sterilize using synthetic 
        chemicals or radiation. Spicely Organics uses a process called steam sterilization, 
        which sterilizes food products without adding any chemicals or hazardous materials."
        comment="Worldwide, we have over 50 passionate employees and counting. In 2012, we 
        opened our first ever Spicely Boutique, located in downtown San Francisco."
        src="/"
        alt="our method"
        width={457}
        heigt={329}
      />

      {/* <Footer /> */}
    </div>
  );
};

export default About;
