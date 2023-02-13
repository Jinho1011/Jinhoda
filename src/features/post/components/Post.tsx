import React from "react"
import { getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import {
  PostBody,
  PostContainer,
  PostDate,
  PostFeaturedImage,
  PostHeader,
  PostInfoSection,
  PostTitle,
} from "./Post.styles"
import PostImage from "./PostImage"

interface PostProps {
  post: Queries.PostTemplateQuery["contentfulPost"]
}

const options = {
  renderNode: {
    "embedded-asset-block": node => {
      const { gatsbyImageData, description } = node.data.target
      if (!gatsbyImageData) {
        return null
      }
      return <PostImage image={gatsbyImageData} description={description} />
    },
  },
}

const Post = ({ post }: PostProps) => {
  const date = new Date(post.createdAt)

  return (
    <PostContainer>
      <PostHeader>
        {post.thumbnail && (
          <PostFeaturedImage
            alt={""}
            image={getImage(post.thumbnail.gatsbyImageData)}
            imgStyle={{ borderRadius: 12 }}
          />
        )}
        <PostTitle>{post.title}</PostTitle>
        <PostInfoSection>
          <PostDate>{`${
            post.category.type
          }ㆍ${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`}</PostDate>
        </PostInfoSection>
      </PostHeader>
      <PostBody>
        {post.body?.raw && renderRichText(post.body as never, options)}
      </PostBody>
    </PostContainer>
  )
}

export default Post
