import SEO from "../../components/SEO";

import Footer from "../../layouts/Footer";

import Hero from "../../layouts/Hero";
import NewPost from "../../layouts/NewPost";

type Props = {};

const News = ({ data }) => {
  if (data) {
    return (
      <div>
        {/* <SEO title="News & Events page" description="This is New page" />*/}
        <Hero heroData={data[0]} navigationData={data[1].navigationData} />
        {data[2].newsData.map((item) => {
          return <NewPost newsEventsData={item} key={item.id} />;
        })}
        <Footer footerData={data[3].footerData} />
      </div>
    );
  }
  return null;
};

export default News;

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3004/news-events`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
