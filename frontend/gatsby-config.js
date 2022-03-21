const path = require("path");

module.exports = {
  pathPrefix: "/msp-site",
  siteMetadata: {
    siteUrl: `https://www.maxlevel.tech`,
    url: "https://www.maxlevel.tech",
    title: "Max Level IT",
    titleTemplate: "",
    description: "Tech support serving the greater Houston area",
    image: "/src/assets/MLLogo.png",
    twitterUsername: "@MaxLevelIT",
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        typeRoots: ["src/customTypings", "node_modules/@types"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Max Level IT`,
        short_name: `Max Level IT`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/logo.png`,
      },
    },
  ],
};
