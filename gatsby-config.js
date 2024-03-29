/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

require('dotenv').config({
    path: `.env`
});

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Jinhoda`,
        author: {
            name: `Jeon Jinho`,
            summary: `I could be anything.`
        },
        description: `A blog`,
        siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
        social: {
            instagram: `jinhoda_`
        }
    },
    plugins: [
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/static/images`,
                name: `posts`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`
            }
        },
        {
            gatsbyRemarkPlugins: [
                {
                    options: {
                        maxWidth: 1080
                    },
                    resolve: 'gatsby-remark-images'
                }
            ],
            options: {
                extensions: ['.mdx', '.md', '.markdown'],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200
                        }
                    }
                ]
            },
            resolve: 'gatsby-plugin-mdx'
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 630
                        }
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`
                        }
                    },
                    `gatsby-remark-prismjs`
                ]
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Jinhoda`,
                short_name: `Jinhoda`,
                start_url: `/`,
                background_color: `#ffffff`,
                display: `minimal-ui`,
                icon: `src/assets/images/icon.png` // This path is relative to the root of the site.
            }
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            }
        },
        {
            resolve: `gatsby-source-notion-feely`,
            options: {
                token: process.env.NOTION_TOKEN,
                databases: [
                    {
                        id: process.env.NOTION_DATABASE_ID,
                        name: process.env.NOTION_DATABASE_NAME,
                        pageFilter: {
                            property: 'published',
                            checkbox: {
                                equals: true
                            }
                        }
                    }
                ]
            }
        },
        `gatsby-plugin-netlify`
    ],
    graphqlTypegen: true
};
