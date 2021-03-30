import React from "react";

import SEO from "../../components/SEO";

import HeroAbout from "../../layouts/HeroAbout";
import InfoUs from "../../layouts/InfoUs";
import OurMission from "../../layouts/OurMission";
import Footer from "../../layouts/Footer";

type Props = {};

const About: React.FC<Props> = ({}) => {
  return (
    <div>
      <SEO title="About page" description="This is About page" />

      <HeroAbout />

      <InfoUs />

      <OurMission />

      <Footer />
    </div>
  );
};
