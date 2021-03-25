import React from "react";
import styles from "./Carousel.module.css";
import Link from "next/link";

type Props = {
  title?: string;
  url?: string;
  alt?: string;
};

const Carousel: React.FC<Props> = ({ title = "", url = "", alt = "" }) => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="./images/banner-1.jpg"
              alt="slide1"
            />
          </div>
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="./images/banner-2.jpg"
              alt="slide2"
            />
          </div>
          <Link href="/">
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
          </Link>
          <Link href="/">
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Carousel;
