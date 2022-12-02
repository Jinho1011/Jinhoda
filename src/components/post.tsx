import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Section = styled.section`
  width: 80%;

  p {
    color: var(--color-text);
    display: block;
    margin: 0;
    margin-bottom: 12px;
    line-height: 1.6;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
  }
`

const Title = styled.span`
  display: inline-block;
  margin-top: 0;
  margin-bottom: 10px;
  overflow: hidden;
  font-weight: 700;
  font-size: 42px;
  line-height: 1.4;
  color: var(--color-heading);
  text-overflow: ellipsis;
  word-break: keep-all;
  overflow-wrap: break-word;
  -webkit-transition: color 0.3s ease;
  transition: color 0.3s ease;
  -webkit-line-clamp: 2;
`

const CoverImage = styled(GatsbyImage)`
  max-width: 240px;
  max-height: 240px;
  aspect-ratio: auto 1/1;
  border-radius: 14px;
  object-fit: cover;
  transition: 0.2s ease-in-out;
`

const Article = styled.article`
  display: flex;
  align-items: center;
  gap: 48px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  &:hover ${Title} {
    color: var(--color-primary);
  }

  &:hover ${CoverImage} {
    box-shadow: rgb(0 0 33 / 7%) 0px 16px 22.4px 4.8px,
      rgb(0 0 33 / 5%) 0px 3.2px 16px 0px, rgb(0 0 33 / 7%) 0px 0px 1px 0px;
    -webkit-transform: translate3D(0, -3%, 0);
    -moz-transform: translate3D(0, -3%, 0);
    -ms-transform: translate3D(0, -3%, 0);
    transform: translate3D(0, -3%, 0);
  }
`

const List = styled.li`
  margin-bottom: 40px;
`

const ContentContainer = styled.div`
  max-width: 600px;
`

const Small = styled.small`
  color: var(--color-text-light);
`

interface PostProps {
  post: Queries.IndexPageQuery["posts"]["nodes"][0]
}

const Post = ({ post }: PostProps) => {
  const title = post.frontmatter.title
  const image = getImage(post.frontmatter.featuredImage)

  return (
    <List>
      <Link to={post.frontmatter.title} itemProp="url">
        <Article itemScope itemType="http://schema.org/Article">
          <CoverImage image={image} />
          <ContentContainer>
            <header>
              <h2>
                <Title itemProp="headline">{title}</Title>
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
