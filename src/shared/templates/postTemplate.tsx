import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { graphql } from "gatsby"

import Post from "@/features/post/components/Post"

import {
  Blockquote,
  H1,
  H2,
  H3,
  Img,
  P,
} from "../../features/post/components/Post.styles"

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  blockquote: Blockquote,
  img: Img,
}

interface PostTemplateProps {
  data: Queries.PostTemplateQuery
}

const PostTemplate = ({ data }: PostTemplateProps) => {
  const post = data.contentfulPost
  return (
    <MDXProvider components={components}>
      <Post post={post} />
    </MDXProvider>
  )
}

export default PostTemplate

export const postQuery = graphql`
  query PostTemplate($id: String!) {
    contentfulPost(id: { eq: $id }) {
      id
      title
      description {
        description
      }
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData
          }
        }
      }
      createdAt
      category {
        type
      }
    }
  }
`
