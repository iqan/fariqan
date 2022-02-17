import React from "react";

import Layout from "../components/layout";
import Hero from "../components/hero";

class Home extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Hero image="image" title="title" content="author short bio" />
      </Layout>
    );
  }
}

export default Home;
