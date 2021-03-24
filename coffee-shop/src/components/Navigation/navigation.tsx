import Reacr from "react";
import Head from "next/head";
import Link from "next/link";



const linkStyle = {
  marginRight: 15,
};

const Navigation = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/menu">
      <a style={linkStyle}>Menu</a>
    </Link>
    <Link href="/news-events">
      <a style={linkStyle}>News & Events</a>
    </Link>
  </div>
);

export default Navigation;
