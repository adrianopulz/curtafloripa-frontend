/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)

const domain = {
  'production': 'https://www.curtafloripa.com.br',
  'staging': 'https://develop--curtafloripa.netlify.app',
  'development': 'http://localhost:8000'
}
const cms_base_url = {
  'production': 'http://cms.curtafloripa.com.br/',
  'staging': 'http://cms.curtafloripa.com.br/',
  'development': 'http://localhost:9000/'
}

module.exports = {
  siteMetadata: {
    title: `Curta Floripa`,
    titleTemplate: "%s | Curta Floripa",
    description: "Tudo que você precisa saber sobre a Ilha da Magia. As melhores paraias e trilhas estão aqui, encontre o que procura de forma fácil e organize suas férias para não perder nada.",
    url: domain[activeEnv],
    image: "/default.jpg",
    twitterUsername: "@adrianopulz",
    author: `@adrianopulz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-loadable-components-ssr",
    `gatsby-plugin-preact`,
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'dark-mode',
        classNameLight: 'light-mode',
        storageKey: 'darkMode',
        minify: true,
      },
    },
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
              variants: ["400", "600", "700"],
            },
          ],
        },
        useMinify: true,
        usePreload: true,
        usePreconnect: false,
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: cms_base_url[activeEnv],
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
        icon: `src/assets/images/icon.svg`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/praias/`, `/praias/regiao/*`, `/praias/tag/*`, `/praia/*`, `/trilhas/`, `/onde-ficar/`],
      },
    },
  ],
}
