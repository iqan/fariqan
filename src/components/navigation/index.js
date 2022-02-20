import React from "react";

import "./index.css";

import { Link } from "gatsby";

const Navigation = () => (
  <nav className="navbar sticky-top navbar-light bg-light">
    <Link to="#" className="navbar-brand">
      Fariha and Iqan
    </Link>
    <button className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#rightnav"
      aria-controls="rightnav"
      aria-expanded="false"
      aria-label="Main"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="rightnav">
      <ul className="navbar-nav mr-auto navbar-right">
        <li className="nav-item">
          <Link to="#" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#events" className="nav-link">
            Events
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#rsvp" className="nav-link">
            RSVP
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
