import React from "react";

import Layout from "../components/layout";

class Contact extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>Contact</h1>
      </Layout>
    );
  }
}

export default Contact;
