const path = require('path')

module.exports = {
    pathPrefix: "/msp-site",
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        'gatsby-plugin-postcss',
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                "typeRoots": [
                    "src/customTypings",
                    "node_modules/@types"
                  ]
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
                include: /assets/ // See below to configure properly
              }
            }
        }
    ]
}