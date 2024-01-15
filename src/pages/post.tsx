import React from 'react';
import { graphql } from 'gatsby';

interface PostPageProps {
    data: Queries.Notion;
}

const PostPage = ({ data }: PostPageProps) => {
    console.log('🚀 ~ PostPage ~ data:', data);
    return <div>post</div>;
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
