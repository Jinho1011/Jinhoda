import {
    MultiSelect,
    NotionChildrenType,
    // NotionColumn,
    RichText
} from '@types';

export const notionNodeToJson = (node: Queries.Notion): NotionChildrenType => {
    return node ? JSON.parse(node?.json) : null;
};

export const getNodeJsonByUrl = (
    nodes: Queries.Notion[],
    url: string
): NotionChildrenType | null => {
    const node = nodes.find((n) => n.title === url);
    return node ? notionNodeToJson(node) : null;
};

// const parseNotionColumn = (content: NotionChildrenType): NotionColumn => {
//     const { id, url, remark, created_date, edited_date, series, tag } =
//         content.properties;

//     return {
//         id: id.unique_id.number || -1,
//         remark: getPlainTextByRichText(remark.rich_text),
//         lastEditedTime: convertDatetimeFormat(edited_date.date.start || ''),
//         createdTime: convertDatetimeFormat(created_date.date.start || ''),
//         notionUrl: url.title.plain_text || '',
//         tag: tag.multi_select || [],
//         series: series.select
//     };
// };

// export const getParseListByNodes = (
//     nodes: Queries.Notion[]
// ): Queries.Notion[] => {
//     return nodes
//         .filter((node: Queries.Notion) => node.title.startsWith('/post'))
//         .map((node: Queries.Notion) => {
//             node.notionColumn = parseNotionColumn(notionNodeToJson(node));
//             return node;
//         });
// };

export const classifyPost = (
    nodes: Queries.Notion[]
): {
    everyPostsTags: string[];
    everyPostsSeries: MultiSelect;
} => {
    const postTagSet = new Set();
    const everyPostsSeries: MultiSelect = [];
    const includeSeriesName: string[] = [];

    nodes.map((node) => {
        if (node?.title?.toUpperCase()?.includes('POST')) {
            const json = notionNodeToJson(node);
            if (!node.title.startsWith('/post')) return;

            json.properties?.tag?.multi_select?.map((v) => {
                postTagSet.add(v.name);
            });

            if (json.properties?.series?.select) {
                if (
                    !includeSeriesName.includes(
                        json.properties?.series?.select.name
                    )
                ) {
                    includeSeriesName.push(
                        json.properties?.series?.select.name
                    );
                    everyPostsSeries.push(json.properties?.series?.select);
                }
            }
        }
    });

    return {
        everyPostsTags: Array.from(postTagSet) as string[],
        everyPostsSeries
    };
};

export const getPlainTextByRichText = (richText?: RichText): string => {
    return richText?.reduce((str, cur) => (str += cur.plain_text), '') || '';
};
