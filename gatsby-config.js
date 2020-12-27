/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Curta Floripa`,
    description: `Aproveite tudo que a Ilha da Magia tem para oferecer.`,
    author: `@adrianopulz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:300,400,500,600,700`,
          `Handlee`
        ],
        display: 'swap'
      }
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
