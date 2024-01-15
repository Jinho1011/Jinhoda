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

export const getNotionNodeByUrl = (nodes: Queries.Notion[], title: string) => {
    return nodes.find((node: Queries.Notion) => {
        return node.title === title;
    });
};
