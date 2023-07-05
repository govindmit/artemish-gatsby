import type { GatsbyConfig } from "gatsby";
const config: GatsbyConfig = {
  siteMetadata: {
    title: `Artemish`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpcontent",
        url:
          process.env.WPGRAPHQL_URL ||
          `https://artemish.mangoitsol.com/graphql`,
        schema: {
          timeout: 240000,
        },
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://artemish.mangoitsol.com/graphql",
        schema: {
          timeout: 240000,
        },
        verbose: true,
        type: {
          MediaItem: {
            exclude: true,
          },
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

export default config;
