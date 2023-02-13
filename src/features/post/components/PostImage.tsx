import React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

import { ImageContainer, ImageDescription } from "./Post.styles"

interface PostImage {
  image: IGatsbyImageData
  description: string
}

const PostImage = ({ image, description }: PostImage) => {
  return (
    <ImageContainer>
      <GatsbyImage image={image} alt={""} style={{ objectFit: "cover" }} />
      {description && <ImageDescription>{description}</ImageDescription>}
    </ImageContainer>
  )
}

export default PostImage
