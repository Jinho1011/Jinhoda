import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

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

const Article = styled.article`
  &:hover ${Title} {
    color: var(--color-primary);
  }
`

const List = styled.li`
  margin-bottom: 80px;
`

const Small = styled.small`
  color: var(--color-text-light);
`

interface PostProps {
  post: Queries.IndexPageQuery["posts"]["nodes"][0]
}

const Post = ({ post }: PostProps) => {
  const title = post.frontmatter.title || post.fields.slug

  return (
    <List>
      <Link to={post.fields.slug} itemProp="url">
        <Article itemScope itemType="http://schema.org/Article">
          <header>
            <h2>
              <Title itemProp="headline">{title}</Title>
            </h2>
          </header>
          <Section>
            <p
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.description || post.excerpt,
              }}
              itemProp="description"
            />
          </Section>
          <Small>{post.frontmatter.date}</Small>
        </Article>
      </Link>
    </List>
  )
}

export default Post
