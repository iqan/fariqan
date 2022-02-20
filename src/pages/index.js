import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css";

import Layout from "../components/layout";
import Banner from "../components/banner";

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Banner />
        {/* <Layout location={this.props.location}></Layout> */}
      </div>
    );
  }
}

export default Home;
