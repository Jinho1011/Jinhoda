import * as React from "react"
import { Link } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import {
  Article,
  ContentContainer,
  CoverImage,
  List,
  Section,
  Small,
  Title,
} from "./PostPreview.styles"

interface PostProps {
  post: Queries.IndexPageQuery["allContentfulPost"]["nodes"][0]
}

const Post = ({ post }: PostProps) => {
  const image = getImage(post.body.references[0]?.gatsbyImageData)

  return (
    <List>
      <Link to={`${post.category.type}/${post.title}`} itemProp="url">
        <Article itemScope itemType="http://schema.org/Article">
          <CoverImage image={image} alt={post.title} />
          <ContentContainer>
            <header>
              <h2>
                <Title itemProp="headline">{post.title}</Title>
              </h2>
            </header>
            <Section>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.description.description,
                }}
                itemProp="description"
              />
            </Section>
            <Small>{post.createdAt}</Small>
          </ContentContainer>
        </Article>
      </Link>
    </List>
  )
}

export default Post
