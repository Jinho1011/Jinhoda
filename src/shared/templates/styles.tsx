import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const H1 = styled.h1`
  font-size: 1.5em;
  margin-block-start: 1.4em;
  margin-block-end: 1.2;
  line-height: 1.7;
  color: ${({ theme }) => theme.color.heading};
  word-break: keep-all;
  overflow-wrap: break-word;
`

const H2 = styled.h2`
  font-size: 1.3em;
  margin-block-start: 1.2em;
  margin-block-end: 1em;
  line-height: 1.7;
  color: ${({ theme }) => theme.color.subHeading};
  word-break: keep-all;
  overflow-wrap: break-word;
`

const H3 = styled.h3`
  font-size: 1.2em;
  margin-block-start: 0.9em;
  margin-block-end: 0.9em;
  line-height: 1.7;
  color: ${({ theme }) => theme.color.text};
  word-break: keep-all;
  overflow-wrap: break-word;
`

const P = styled.p`
  margin: 1em 0;
  font-size: 18px;
  line-height: 1.7;
  color: ${({ theme }) => theme.color.text};
  font-size: 18px;
  word-break: keep-all;
  overflow-wrap: break-word;
`

const Blockquote = styled.blockquote`
  background-color: ${({ theme }) => theme.color.blockquote};
  margin: 0;
  margin: 24px 0;
  border-radius: 12px;
  /* box-shadow: rgb(0 0 33 / 7%) 0px 16px 22.4px 4.8px,
    rgb(0 0 33 / 5%) 0px 3.2px 16px 0px, rgb(0 0 33 / 7%) 0px 0px 1px 0px; */

  p:first-child {
    padding-top: 24px;
  }

  p:last-child {
    padding-bottom: 24px;
  }

  p {
    padding: 8px 30px;
    margin: 0;
    color: ${({ theme }) => theme.color.subText};
  }
`

const Img = styled.img``

const PostContainer = styled.div`
  max-width: 700px;
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 20px;

  .gatsby-resp-image-wrapper {
    margin: 18px 0;
  }

  .gatsby-resp-image-wrapper img {
    max-width: 100%;
    height: auto;
    border: 1px solid rgba(2, 32, 71, 0.05);
    border-radius: 12px;
  }
`

const PostHeader = styled.header``

const PostTitle = styled.h1`
  margin-bottom: 0;
  font-size: 48px;
  font-weight: 500;
  line-height: 1.25;
  color: ${({ theme }) => theme.color.subHeading};
  word-break: keep-all;
  overflow-wrap: break-word;
`

const PostInfoSection = styled.section`
  margin-top: 20px;
`

const PostDate = styled.span`
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.subText};
`

const PostFeaturedImage = styled(GatsbyImage)`
  width: 100%;
  border-radius: 12px;
`

const PostBody = styled.div``

export {
  H1,
  H2,
  H3,
  P,
  Blockquote,
  Img,
  PostContainer,
  PostHeader,
  PostTitle,
  PostInfoSection,
  PostDate,
  PostFeaturedImage,
  PostBody,
}
