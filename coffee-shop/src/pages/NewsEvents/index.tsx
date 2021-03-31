import React from "react";

import SEO from "../../components/SEO";

import { newsEventsData } from "../../constants";
import Footer from "../../layouts/Footer";

import Hero from "../../layouts/Hero";
import NewPost from "../../layouts/NewPost";

type Props = {};

const NewsEvents = ({}) => {
  return (
    <div>
      <SEO title="News & Events page" description="This is New page" />
      <Hero src="/bgNew.jpg" title="News & Events" />
      {newsEventsData.map((item, index) => {
        return <NewPost newsEventsData={item} key={index} />;
      })}
      <Footer />
    </div>
  );
};

export default NewsEvents;
