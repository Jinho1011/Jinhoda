import styled from 'styled-components';

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
`;

const PostHeader = styled.header``;

const PostTitle = styled.h1`
    margin-bottom: 0;
    font-size: 48px;
    font-weight: 800;
    line-height: 1.25;
    color: ${({ theme }) => theme.color.subHeading};
    word-break: keep-all;
    overflow-wrap: break-word;
`;

const PostInfoSection = styled.section`
    margin-top: 20px;
`;

const PostDate = styled.span`
    font-size: 14px;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.subText};
`;

const PostFeaturedImage = styled.img`
    width: 100%;
    border-radius: 12px;
    box-shadow: rgb(0 0 33 / 4%) 0px 8px 10px 3px,
        rgb(0 0 33 / 3%) 0px 1.6px 8px 0px, rgb(0 0 33 / 4%) 0px 0px 1px 0px;
`;

const PostBody = styled.div`
    h1 {
        margin: 0;
        font-size: 26px !important;
        font-weight: 600;
        line-height: 1.6;
        color: ${({ theme }) => theme.color.subHeading};
    }

    h2 {
        margin: 0;
        font-size: 24px !important;
        font-weight: 600;
        line-height: 1.4;
        color: ${({ theme }) => theme.color.subHeading};
    }

    h3 {
        margin: 0;
        font-size: 20px !important;
        font-weight: 600;
        line-height: 1.3;
        color: ${({ theme }) => theme.color.subHeading};
    }

    p,
    b,
    i {
        font-size: 18px;
        line-height: 1.7;
        font-size: 18px;
        word-break: keep-all;
        overflow-wrap: break-word;
        color: ${({ theme }) => theme.color.text};
        display: inline;
    }

    .block-paragraph {
        padding: 10px 0;
    }

    .block-code {
        margin: 0;

        pre {
            border-radius: 10px;
        }
    }

    /* code {
        display: block;
        padding: 16px 24px;
        overflow-x: auto;
        font-family: Consolas, Menlo, Monaco, source-code-pro, Courier New,
            monospace;
        font-size: 0.9em;
        line-height: 1.5;
        word-wrap: normal;
        white-space: pre;
        background-color: ${({ theme }) => theme.color.blockquote};
        border: 1px solid var(--greyOpacity200);
        border-radius: 12px;
        color: ${({ theme }) => theme.color.subText};
        margin: 20px 0;
    } */

    a {
        color: ${({ theme }) => theme.color.primary};
    }

    img {
        width: 100%;
    }
`;

export {
    PostContainer,
    PostHeader,
    PostTitle,
    PostInfoSection,
    PostDate,
    PostFeaturedImage,
    PostBody
};
