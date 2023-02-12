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
  children: JSX.Element
  data: Queries.PostTemplateQuery
}

const PostTemplate = ({ children, data }: PostTemplateProps) => {
  const frontmatter = data.mdx?.frontmatter

  return (
    <MDXProvider components={components}>
      <Post frontmatter={frontmatter}>{children}</Post>
    </MDXProvider>
  )
}

export default PostTemplate

export const query = graphql`
  query PostTemplate($id: String) {
    mdx(id: { eq: $id }) {
      body
      id
      frontmatter {
        category
        date
        description
        title
        featuredImage {
          childrenImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
