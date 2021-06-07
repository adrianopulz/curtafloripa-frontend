const path = require(`path`);

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-splide/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

// On Create Pages.
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Fetch all Node of type Beach.
  const beaches = await graphql(`
    query {
      allNodeBeach(filter: {status: {eq: true}}) {
        edges {
          node {
            id
            drupal_internal__nid
            title
            path {
              alias
            }
          }
        }
      }
    }
  `);

  // Loop all edges to get all beaches nodes.
  beaches.data.allNodeBeach.edges.forEach(({ node }) => {
    let slug = (node.path.alias) ? node.path.alias : `/praia/praia-${node.drupal_internal__nid}`;

    // Create a new page based on the Praia.js template.
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/praia.js`),
      context: {
        id: node.id,
      },
    })
  });

  /**
   * TAGS
   */

  // Fetch all Node of type Beach.
  const regions = await graphql(`
    query {
      allTaxonomyTermRegions(filter: {status: {eq: true}}) {
        edges {
          node {
            id
            drupal_internal__tid
            name
            path {
              alias
            }
          }
        }
      }
    }
  `);

  // Loop all edges to get all region terms.
  regions.data.allTaxonomyTermRegions.edges.forEach(({ node }) => {
    let slug = (node.path.alias) ? node.path.alias : `/regiao/${node.drupal_internal__tid}`;

    // Create a new page based on the Region.js template.
    createPage({
      path: `/praias${slug}`,
      component: path.resolve(`./src/templates/region.js`),
      context: {
        id: node.id,
        type: 'beach'
      },
    })
  });
}
