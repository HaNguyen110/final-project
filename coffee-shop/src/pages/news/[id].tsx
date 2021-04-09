import React from "react";

import Image from "next/image";

import styles from "./News.module.css";

import InfoNewsDetail from "../../components/InfoNewsDetail";
import Hero from "../../layouts/Hero";
import Footer from "../../layouts/Footer";

type Props = {
  src?: string;
  alt?: string;
};

const NewsDetailPost = ({ detail }) => {
  const { image, tittle, description, date, note, quote } = detail || {};
  const { src = "", alt = "" } = image || {};
  const { title = "" } = detail || {};

  return (
    <div>
      <Hero src="/bgNew.jpg" title="News & Events" />
      <div className={styles.detailImg}>
        <Image
          className=""
          src={src}
          alt={alt}
          width={750}
          height={435}
          objectFit="cover"
        />
      </div>

      <div>
        <InfoNewsDetail
          title={title}
          date={date}
          note={note}
          quote={quote}
          description={description}
        />
      </div>
    </div>
  );
};

export default NewsDetailPost;

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3004/news-events`);
  const data = await res.json();

  const paths = data.map((item) => ({
    params: { id: item.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const id = params.id.toString() || {};
  const res = await fetch(`http://localhost:3004/news-events/${id}`);
  const detail = await res.json();

  return {
    props: {
      detail,
    },
  };
}
