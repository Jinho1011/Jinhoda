import React from 'react';
import { graphql } from 'gatsby';

import Contents from '@/components/Post/Content';
import { getNotionNodeByUrl } from '@/hooks/useNotion';
import { notionNodeToJson } from '@/utils/notion';

interface PostPageProps {
    data: Queries.Notion[];
    pageContext: { id: string; slug: string };
}

const PostPage = ({ data, pageContext }: PostPageProps) => {
    const currentPost = getNotionNodeByUrl(data, pageContext.slug);
    const content = notionNodeToJson(currentPost);

    return (
        <div>
            <Contents childrens={content.children} />
        </div>
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
