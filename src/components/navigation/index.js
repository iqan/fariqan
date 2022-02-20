import React from "react";

import "./index.css";

import { Link } from "gatsby";

const Navigation = () => (
  <nav role="navigation" className="" aria-label="Main">
    <Link to="/" className="logo-link">
      <span className="navigation" />
      <span className="navigation-item">Fariha and Iqan</span>
    </Link>
    <ul className="navigation">
      <li className="navigation-item">
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className="navigation-item">
        <Link to="#events" activeClassName="active">
          Events
        </Link>
      </li>
      <li className="navigation-item">
        <Link to="#contact" activeClassName="active">
          Contact
        </Link>
        <li className="navigation-item">
        <Link to="#rsvp" activeClassName="active">
          RSVP
        </Link>
      </li>
      </li>
    </ul>
  </nav>
);

export default Navigation;
