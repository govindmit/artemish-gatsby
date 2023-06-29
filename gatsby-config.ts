import type { GatsbyConfig } from "gatsby";
import axios from "axios";

// let token: string;

//   const qs = require('qs');
//   let data:any = qs.stringify({
//     'username': 'vipulkmango',
//     'password': 'vipulkmango' 
//   });


//   axios.request({
//     method: "post",
//     maxBodyLength: Infinity,
//     url: "https://artemish.mangoitsol.com/wp-json/jwt-auth/v1/token",
//     headers: { 
//       'Content-Type': 'application/x-www-form-urlencoded', 
//     },
//     data : data
//   })
//   .then((response) => {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Artemish`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpcontent",
        // GraphQL endpoint, relative to your WordPress home URL.
        url:
          process.env.WPGRAPHQL_URL ||
          `https://artemish.mangoitsol.com/graphql`,
      },
    },

    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://artemish.mangoitsol.com/graphql",
        verbose: true,
        type: {
          MediaItem: {
            exclude: true,
          },
        },
        // baseUrl: "artemish.mangoitsol.com",
        // protocol: "https",
        // restApiRoutePrefix: "wp-json",
        // perPage: 100,
        // jwt_user: "vipulkmango",
        // jwt_pass: "vipulkmango",
        // jwt_base_path: "/jwt-auth/v1/token",
        // includedRoutes: [
        //   "**/categories",
        //   "**/posts",
        //   "**/pages",
        //   "**/products",
        //   "**/tags",
        //   "**/taxonomies",
        //   "**/users",
        // ]

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
