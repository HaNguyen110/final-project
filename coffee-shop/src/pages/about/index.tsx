import SEO from "../../components/SEO";

import Hero from "../../layouts/Hero";
import InfoUs from "../../layouts/InfoUs";
import OurMission from "../../layouts/OurMission";
import Footer from "../../layouts/Footer";
import OurPromise from "../../layouts/ourPromise";
import Flickity from "../../layouts/Flickity";
import OurMethods from "../../layouts/OurMethods";

import type { AboutType } from "../../types/AboutTypes";

type Props = {
  data: AboutType;
};

const About = ({ data }: Props) => {
  console.log("data", data);
  if (data) {
    return (
      <div>
        <SEO title="About page" description="This is About page" />

        <Hero src="/bgAbout.jpg" title="Về chúng tôi" />
        {data.map((item) => {
          return <InfoUs infoUsData={item} />;
        })}

        <InfoUs infoUsData={data[0]} />

        <OurMission ourMissionData={data[1]} />

        <OurPromise ourPromiseData={data[2]} />

        <Flickity flickityData={data[3]} />

        <OurMethods ourMethodsData={data[4]} />

        <Footer />
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
