import React from "react"
import { graphql } from "gatsby"

import Post from "@/features/post/components/Post"

interface PostTemplateProps {
  data: Queries.PostTemplateQuery
}

const PostTemplate = ({ data }: PostTemplateProps) => {
  const post = data.contentfulPost
  return <Post post={post} />
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
            title
            description
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
