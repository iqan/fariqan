import * as React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ lang = "en", meta = [], title = "", image }) => {
  const metaDescription = "";
  const defaultTitle = "Fariha and Iqan";

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `viewport`,
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: image,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
      ].concat(meta)}
    />
  );
};

export default Seo;
