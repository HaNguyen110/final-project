import React from "react";
import Head from "next/head";

type Props = {
  description?: string;
  title?: string;
  siteTitle?: string;
};

const SEO = ({ description = "", title = "", siteTitle = "" }: Props) => {
  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
