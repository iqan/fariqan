import React from "react";
import Countdown from "react-countdown";

import "./index.css";

const Banner = () => (
  <section id="banner">
    <div className="spacer"></div>
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
    </div>
  </section>
);

export default Banner;
