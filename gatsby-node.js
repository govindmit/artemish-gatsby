const path = require('path');
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({actions, graphql}) => {
    const {createPage} = actions;
  
    // query content for WordPress posts
    const data = await graphql(`
    query MyQuery {
        wpcontent {
          pages {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      }
    `)
    const { wpcontent: pages } = data.data;
    const allPages = pages.pages.edges;
    const wpPageTemplate = path.resolve(`./src/templates/wp-page.js`)
    allPages.forEach(page => {
        createPage({
          path: `/${page.node.slug}`,
          component: slash(wpPageTemplate),
          context: {
            slug: page.node.slug,
            pageID:page.node.id
          },
        })
      
    })
}