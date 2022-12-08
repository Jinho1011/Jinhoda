import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import {
  Blockquote,
  H1,
  H2,
  H3,
  Img,
  P,
  PostBody,
  PostContainer,
  PostDate,
  PostFeaturedImage,
  PostHeader,
  PostInfoSection,
  PostTitle,
} from "./styles"
import { getImage } from "gatsby-plugin-image"

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
  const frontmatter = data.mdx.frontmatter
  const date = new Date(frontmatter.date)

  return (
    <MDXProvider components={components}>
      <PostContainer>
        <PostHeader>
          <PostFeaturedImage
            alt={""}
            image={getImage(frontmatter.featuredImage.childrenImageSharp[0])}
          />
          <PostTitle>{frontmatter.title}</PostTitle>
          <PostInfoSection>
            <PostDate>{`${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`}</PostDate>
          </PostInfoSection>
        </PostHeader>
        <PostBody>{children}</PostBody>
      </PostContainer>
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
        id
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
