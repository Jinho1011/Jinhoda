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
                '@components': path.resolve(__dirname, 'src/shared/components')
            }
        }
    });
};

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const postTemplate = path.resolve(
        `./src/shared/templates/postTemplate.tsx`
    );

    const result = await graphql(`
        {
            allContentfulPost {
                nodes {
                    id
                    title
                    category {
                        type
                    }
                }
            }
        }
    `);

    const contentfulPosts = result.data.allContentfulPost.nodes;

    contentfulPosts.forEach((post) => {
        createPage({
            path: `${post.category.type}/${post.title}`,
            component: postTemplate,
            context: {
                id: post.id,
                title: post.title
            }
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
