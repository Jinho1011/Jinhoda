import React from 'react';
import { graphql } from 'gatsby';

import Contents from '@/components/Post/Content';
import {
    PostBody,
    PostContainer,
    PostDate,
    PostFeaturedImage,
    PostHeader,
    PostInfoSection,
    PostTitle
} from '@/components/Post/Post.styles';
import { getNotionNodeByUrl } from '@/hooks/useNotion';
import { notionNodeToJson } from '@/utils/notion';

interface PostPageProps {
    data: Queries.Notion[];
    pageContext: { id: string; slug: string };
}

const PostPage = ({ data, pageContext }: PostPageProps) => {
    const post = getNotionNodeByUrl(data, pageContext.slug);
    const content = notionNodeToJson(post);

    const date = new Date(post.createdAt);

    const thumbnail =
        content?.cover && content?.cover[content?.cover?.type]?.url;

    return (
        <PostContainer>
            <PostHeader>
                {thumbnail && (
                    <PostFeaturedImage
                        alt={''}
                        src={thumbnail}
                        style={{ borderRadius: 12 }}
                    />
                )}
                <PostTitle>{post.title}</PostTitle>
                <PostInfoSection>
                    <PostDate>{`${
                        content.properties.category.select.name
                    }ㆍ${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`}</PostDate>
                </PostInfoSection>
            </PostHeader>
            <PostBody>
                <Contents childrens={content.children} />
            </PostBody>
        </PostContainer>
    );
};

export default PostPage;

export const postQuery = graphql`
    query {
        allNotion {
            edges {
                node {
                    id
                    databaseName
                    title
                    json
                    createdAt
                    updatedAt
                }
            }
        }
    }
`;
