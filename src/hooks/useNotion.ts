import { graphql, useStaticQuery } from 'gatsby';

export const getNotionQuery = graphql`
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

export const useGetNotionQuery = (): Queries.Notion[] => {
    const res = useStaticQuery(getNotionQuery);
    return res.allNotion.edges.map((edge) => edge.node);
};

export const getNotionNodeAll = (res) => {
    const rows: Queries.Notion[] = res?.allNotion?.edges;
    return rows.map((node) => {
        return node;
    });
};

export const getNotionNodeByUrl = (
    res,
    title: string
): Queries.Notion | undefined => {
    return res.allNotion.edges.find(({ node }: { node: Queries.Notion }) => {
        return node.title === title;
    }).node;
};
