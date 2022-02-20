import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css";

import Banner from "../components/banner";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Seo from "../components/seo";
import Events from "../components/events";

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Seo />
        <Banner />
        <Navigation />
        <Events />
        <Footer />
      </div>
    );
  }
}

export default Home;
