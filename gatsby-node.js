const path = require("path");
const { slash } = require(`gatsby-core-utils`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
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
  `);
  const { wpcontent: pages } = data.data;
  const allPages = pages.pages.edges;
  const wpPageTemplate = path.resolve(`./src/templates/wp-page.js`);
  allPages.forEach((page) => {
    createPage({
      path: `/${page.node.slug}`,
      component: slash(wpPageTemplate),
      context: {
        slug: page.node.slug,
        pageID: page.node.id,
      },
    });
  });

  const getOnpageId = await graphql(`
    query MyQuery {
      wpcontent {
        allSettings {
          readingSettingsPageOnFront
        }
      }
    }
  `);
  const { wpcontent: allSettings } = getOnpageId.data;
  const pageId = allSettings?.allSettings?.readingSettingsPageOnFront;
  const getOnpageData = await graphql(`
  query MyQuery {
    wpcontent {
      page(id: ${pageId.toString()}, idType: DATABASE_ID) {
        title
        status
        slug
        content
      }
    }
  }
  `);
  const { wpcontent: page } = getOnpageData.data;
  const homePageTemp = path.resolve(`./src/templates/wp-homepage.js`);
  createPage({
    path: `/${page?.page?.slug}`,
    component: slash(homePageTemp),
    context: {
      slug: page?.page?.slug,
      pageID: page?.page?.id,
    },
  });
};
