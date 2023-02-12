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
} from "./post.styles"

interface PostProps {
  post: Queries.IndexPageQuery["posts"]["nodes"][0]
}

const Post = ({ post }: PostProps) => {
  const image = getImage(post.frontmatter.featuredImage)

  return (
    <List>
      <Link
        to={`${post.frontmatter.category}/${post.frontmatter.title}`}
        itemProp="url"
      >
        <Article itemScope itemType="http://schema.org/Article">
          <CoverImage image={image} alt={post.frontmatter.title} />
          <ContentContainer>
            <header>
              <h2>
                <Title itemProp="headline">{post.frontmatter.title}</Title>
              </h2>
            </header>
            <Section>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description,
                }}
                itemProp="description"
              />
            </Section>
            <Small>{post.frontmatter.date}</Small>
          </ContentContainer>
        </Article>
      </Link>
    </List>
  )
}

export default Post
