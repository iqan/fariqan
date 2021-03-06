import React from "react";

import "./index.css";

import Banner from "../components/banner";
import Footer from "../components/footer";
import Seo from "../components/seo";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Seo />
        <Banner />
        <Footer />
      </div>
    );
  }
}

export default Home;
