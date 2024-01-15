import * as React from 'react';
import styled from 'styled-components';

import Bio from '@/components/home/bio';
import PostPreview from '@/components/home/PostPreview';
import Seo from '@/components/seo';
import { useGetNotionQuery } from '@/hooks/useNotion';
import { sortNotionNodesByDate } from '@/utils/date';

import { Container } from '../assets/styles/styles';

const MainContainer = styled(Container)`
    display: flex;
    justify-content: center;
    max-width: 980px;
    /* height: 100vh; */
`;

const PostList = styled.ul`
    list-style: none;
    padding: 20px;
`;

const IndexPage = () => {
    const posts = useGetNotionQuery();

    if (posts.length === 0) {
        return (
            <>
                <Bio />
                <p>
                    No blog posts found. Add markdown posts to "content/blog"
                    (or the directory you specified for the
                    "gatsby-source-filesystem" plugin in gatsby-config.js).
                </p>
            </>
        );
    }

    return (
        <main>
            <MainContainer>
                <PostList>
                    {posts.sort(sortNotionNodesByDate).map((post) => {
                        return <PostPreview post={post} key={post.id} />;
                    })}
                </PostList>
            </MainContainer>
        </main>
    );
};

export default IndexPage;

export const Head = () => <Seo title="All posts" />;
