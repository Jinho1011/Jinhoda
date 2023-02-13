import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { Container } from "../assets/styles/styles"
import Bio from "../features/home/components/bio"
import PostPreview from "../features/home/components/PostPreview"
import Seo from "../shared/components/seo"

const MainContainer = styled(Container)`
  display: flex;
  justify-content: center;
  max-width: 980px;
  height: 100vh;
`

const PostList = styled.ul`
  list-style: none;
  padding: 20px;
`

interface BlogIndexProps {
  data: Queries.IndexPageQuery
  location: Location
}

const BlogIndex = ({ data }: BlogIndexProps) => {
  const posts = data.allContentfulPost.nodes

  if (posts.length === 0) {
    return (
      <>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </>
    )
  }

  return (
    <main>
      <MainContainer>
        <PostList>
          {posts.map(
            (post: Queries.IndexPageQuery["allContentfulPost"]["nodes"][0]) => {
              return <PostPreview post={post} key={post.id} />
            }
          )}
        </PostList>
      </MainContainer>
    </main>
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
    allContentfulPost(sort: { date: DESC }) {
      nodes {
        id
        title
        createdAt
        category {
          type
        }
        description {
          description
        }
        body {
          references {
            gatsbyImageData(width: 1200)
          }
        }
      }
    }
  }
`
