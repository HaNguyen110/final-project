import SEO from "../../components/SEO";

import Hero from "../../layouts/Hero";
import InfoUs from "../../layouts/InfoUs";
import OurMission from "../../layouts/OurMission";
import Footer from "../../layouts/Footer";
import OurPromise from "../../layouts/ourPromise";
import Flickity from "../../layouts/Flickity";
import OurMethods from "../../layouts/OurMethods";

import type { Body } from "../../types/AboutTypes";

type Props = {
  data: Body;
};

const About = ({ data }: Props) => {
  console.log("data", data);
  if (data) {
    return (
      <div>
        <SEO title="About page" description="This is About page" />

        <Hero heroData={data[0]} />

        <InfoUs infoUsData={data[1]} />

        <OurMission ourMissionData={data[2]} />

        <OurPromise ourPromiseData={data[3]} />

        <Flickity flickityData={data[4]} />

        <OurMethods ourMethodsData={data[5]} />

        <Footer footerData={data[6]} />
      </div>
    );
  }
  return null;
};

export default About;

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3004/about`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
