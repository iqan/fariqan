import React from "react";

import Container from "./container";
import * as styles from "./footer.module.css";

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Made with ❤️ by <a href="https://iqans.com/">Iqan Shaikh</a>{" "}
      &copy; 2022 {" "}
    </div>
  </Container>
);

export default Footer;
