import React from "react";

import SEO from "../../components/SEO";

import Footer from "../../layouts/Footer";

import Hero from "../../layouts/Hero";
import NewPost from "../../layouts/NewPost";

type Props = {};

const News = ({ data }) => {
  if (data) {
    return (
      <div>
        <SEO title="News & Events page" description="This is New page" />
        <Hero src="/bgNew.jpg" title="News & Events" />
        {data.map((item, index) => {
          return <NewPost newsEventsData={item} key={index} />;
        })}
        <Footer />
      </div>
    );
  }
  return null;
};

export default News;

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3004/news-events`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
