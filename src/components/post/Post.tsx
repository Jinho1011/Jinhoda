/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { getImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import {
    AssetContainer,
    PostBody,
    PostContainer,
    PostDate,
    PostFeaturedImage,
    PostHeader,
    PostInfoSection,
    PostTitle
} from './Post.styles';
import PostImage from './PostImage';

interface PostProps {
    post: Queries.PostTemplateQuery['contentfulPost'];
}

const options: Options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const { description, mimeType, gatsbyImageData, publicUrl } =
                node.data.target;

            if (mimeType === 'video/mp4') {
                return (
                    <AssetContainer>
                        <video src={publicUrl} autoPlay loop muted />
                    </AssetContainer>
                );
            }

            return (
                <PostImage
                    image={getImage(gatsbyImageData)}
                    description={description}
                />
            );
        },
        [BLOCKS.EMBEDDED_ENTRY]: (node) => {
            const {
                code: { code },
                descriptions,
                language
            } = node.data.target;

            return <code>{code}</code>;
        }
    }
};

const Post = ({ post }: PostProps) => {
    const date = new Date(post.createdAt);

    return (
        <PostContainer>
            <PostHeader>
                {post.thumbnail && (
                    <PostFeaturedImage
                        alt={''}
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
            <PostBody>{renderRichText(post.body as any, options)}</PostBody>
        </PostContainer>
    );
};

export default Post;
