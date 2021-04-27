/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Curta Floripa`,
    titleTemplate: "%s | Curta Floripa",
    description: "Tudo que você precisa saber sobre a Ilha da Magia. As melhores paraias e trilhas estão aqui, encontre o que procura de forma fácil e organize suas férias para não perder nada.",
    url: "https://www.curtafloripa.com.br",
    image: "/images/default.jpg",
    twitterUsername: "@adrianopulz",
    author: `@adrianopulz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Handlee",
            },
            {
              family: "Montserrat",
              variants: ["300", "400", "500", "600", "700"],
            },
          ],
        },
        usePreload: false,
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://curta-floripa.lndo.site/`,
        apiBase: `api`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `curta-floripa`,
        short_name: `curta-floripa`,
        start_url: `/`,
        background_color: `#113c4a`,
        theme_color: `#3f7b70`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
