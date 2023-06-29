import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, title }) {
  //   const { site } = useStaticQuery(
  //     graphql`
  //       query {
  //         site {
  //           siteMetadata {
  //             title
  //             description
  //             author
  //           }
  //         }
  //       }
  //     `
  //   );

  console.log(description, lang, meta, title);

  //const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      //   titleTemplate={`%s | ${site.siteMetadata.title}`}
      //   meta={[
      //     {
      //       name: `description`,
      //       content: metaDescription,
      //     },
      //     {
      //       property: `og:title`,
      //       content: title,
      //     },
      //     {
      //       property: `og:description`,
      //       content: metaDescription,
      //     },
      //     {
      //       property: `og:type`,
      //       content: `website`,
      //     },
      //     {
      //       property: `og:image`,
      //       content: meta[1]?.content,
      //     },
      //     {
      //       name: `twitter:card`,
      //       content: meta[0]?.content,
      //     },
      //     {
      //       name: `twitter:creator`,
      //       content: site.siteMetadata.author,
      //     },
      //     {
      //       name: `twitter:title`,
      //       content: title,
      //     },
      //     {
      //       name: `twitter:description`,
      //       content: metaDescription,
      //     },
      //     {
      //       name: `twitter:image`,
      //       content: meta[1]?.content,
      //     },
      //   ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  //   description: PropTypes.string,
  //   lang: PropTypes.string,
  //   meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
