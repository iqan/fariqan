import React from "react";
import Countdown from "react-countdown";

import "./index.css";

const Banner = () => (
  <div>
    <section id="home" data-stellar-background-ratio="0.5">
      <img src="/IMG_5845.jpg" className="img-fluid" />
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h3 className="title">
              <span></span>We are getting married!<span></span>
            </h3>
            <ul className="names">
              <li>Fariha</li>
              <li className="circle">&amp;</li>
              <li>Iqan</li>
            </ul>
            <div className="date">
              May <span>15</span> 2022
            </div>
            <div className="hour">
              <h2><Countdown date={'2022-05-15T00:00:00'} /></h2>
            </div>
            <div className="place">
              <h3>Bharuch</h3>
              <p>Gujarat, India.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Banner;
