import * as React from "react"
import { Link, graphql, PageProps } from "gatsby"
import styled from "styled-components"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container } from "../components/styles"
import Post from "../components/post"

const MainContainer = styled(Container)`
  display: flex;
  justify-content: center;
  max-width: 980px;
`

const PostList = styled.ul`
  list-style: none;
  padding: 20px;
`

interface BlogIndexProps {
  data: Queries.IndexPageQuery
  location: Location
}

const BlogIndex = ({ data, location }: BlogIndexProps) => {
  const posts = data.posts.nodes

  if (posts.length === 0) {
    return (
      <Layout>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      <main>
        <MainContainer>
          <PostList>
            {posts.map((post: Queries.IndexPageQuery["posts"]["nodes"][0]) => {
              return <Post post={post} key={post.frontmatter.description} />
            })}
          </PostList>
        </MainContainer>
      </main>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  query IndexPage {
    posts: allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        excerpt
        frontmatter {
          id
          title
          date(formatString: "MMMM DD, YYYY")
          description
          category
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 1600)
            }
          }
        }
      }
    }
  }
`
