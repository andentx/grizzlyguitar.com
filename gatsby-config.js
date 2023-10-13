/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Grizzly Guitar`,
    siteUrl: `https://www.grizzlyguitar.com`,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-plugin-tailwindcss",
    {
      resolve: "gatsby-transformer-sharp",
      options: {
        quality: 90,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        graphqlTag: "default",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Grizzly Guitar",
        short_name: "Grizzly Guitar",
        background_color: "rgb(31, 41, 55)",
        theme_color: "rgb(31, 41, 55)",
        cache_busting_mode: "query",
        crossOrigin: `use-credentials`,
        display: "browser",
        icon: "src/images/favicons/icon.png",
        start_url: "/",
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en-US",
      },
    },
  ],
};
