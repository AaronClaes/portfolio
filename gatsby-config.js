module.exports = {
  siteMetadata: {
    siteUrl: "https://www.aaronclaes.be",
    title: "Aaron Claes - Portfolio",
    lang: "en",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5T8FP2Q",
        includeInDevelopment: false,
      },
    },
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/Navbar.js`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
  ],
};
