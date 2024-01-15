import { notionNodeToJson } from './notion';

export function sortNotionNodesByDate(a: Queries.Notion, b: Queries.Notion) {
    const prevContent = notionNodeToJson(a);
    const nextContent = notionNodeToJson(b);

    const prevDate = new Date(prevContent.properties.date.date.start);
    const nextDate = new Date(nextContent.properties.date.date.start);

    return prevDate > nextDate ? -1 : 1;
}
