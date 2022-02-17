import React from "react";

import Layout from "../components/layout";

class Events extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>Events</h1>
      </Layout>
    );
  }
}

export default Events;
