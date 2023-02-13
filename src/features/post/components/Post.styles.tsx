import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ImageDescription = styled.span`
  color: ${({ theme }) => theme.color.subText};
  padding: 10px 0 0;
`

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
  ImageContainer,
  ImageDescription,
  PostContainer,
  PostHeader,
  PostTitle,
  PostInfoSection,
  PostDate,
  PostFeaturedImage,
  PostBody,
}
