import React from "react";
import Countdown from "react-countdown";
import { Carousel } from 'react-bootstrap';

import "./index.css";

const Banner = () => (
  <section id="banner">
    <Carousel fade style={{ height: "100%" }}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/banner1.jpg"
        alt="First slide"
      />

      <CarouselCaption />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/banner2.jpg"
        alt="Second slide"
      />

      <CarouselCaption />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/banner3.jpg"
        alt="Third slide"
      />

      <CarouselCaption />
    </Carousel.Item>
  </Carousel>
    {/* <div className="spacer"></div>
    <div className="caption">
      <span className="title">
        We are getting married!
      </span>
      <ul className="names">
        <li>Fariha</li>
        <li className="circle">&amp;</li>
        <li>Iqan</li>
      </ul>
      <div className="date">
        May <span>15</span> 2022
      </div>
      <div className="place">
        Bharuch, Gujarat, IN
      </div>
      <div className="countdown">
        <span>
          <Countdown date={"2022-05-15T13:00:00"} />
        </span>
      </div>
    </div> */}
  </section>
);

const CarouselCaption = () => (
  <Carousel.Caption>
    <h3>We are getting married!</h3>
    <p><Countdown date={"2022-05-15T13:00:00"} /></p>
  </Carousel.Caption>
);

export default Banner;
