import React from "react"
import { getImage } from "gatsby-plugin-image"

import {
  PostBody,
  PostContainer,
  PostDate,
  PostFeaturedImage,
  PostHeader,
  PostInfoSection,
  PostTitle,
} from "./Post.styles"

interface PostProps {
  frontmatter: Queries.PostTemplateQuery["mdx"]["frontmatter"]
  children: JSX.Element
}

const Post = ({ frontmatter, children }: PostProps) => {
  const date = new Date(frontmatter.date)

  return (
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
  )
}

export default Post
