import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import {
  PostBody,
  PostContainer,
  PostDate,
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
        {/* <PostFeaturedImage
          alt={""}
          image={getImage(post.body.references[0].gatsbyImageData)}
        /> */}
        <PostTitle>{post.title}</PostTitle>
        <PostInfoSection>
          <PostDate>{`${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`}</PostDate>
        </PostInfoSection>
      </PostHeader>
      <PostBody>
        {post.body?.raw && renderRichText(post.body as never, options)}
      </PostBody>
    </PostContainer>
  )
}

export default Post
