/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const path = require(`path`);

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@images': path.resolve(__dirname, 'src/assets/images'),
                '@styles': path.resolve(__dirname, 'src/assets/styles'),
                '@components': path.resolve(__dirname, 'src/components'),
                '@utils': path.resolve(__dirname, 'src/utils'),
                '@types': path.resolve(__dirname, 'src/types')
            }
        }
    });
};

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const postTemplate = path.resolve(`./src/pages/post.tsx`);

    const { data } = await graphql(`
        query {
            allNotion {
                edges {
                    node {
                        id
                        title
                    }
                }
            }
        }
    `);
    data.allNotion.edges.forEach(({ node }) => {
        const { id, title } = node;
        createPage({
            path: `/${title}`,
            component: postTemplate,
            context: { id, slug: `${title}` }
        });
    });
};

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;

    // Explicitly define the siteMetadata {} object
    // This way those will always be defined even if removed from gatsby-config.js

    // Also explicitly define the Markdown frontmatter
    // This way the "MarkdownRemark" queries will return `null` even when no
    // blog posts are stored inside "content/blog" instead of returning an error
    createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type Fields {
      slug: String
    }

  `);
};
