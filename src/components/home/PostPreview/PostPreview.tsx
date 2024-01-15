/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { getDateDistance, getDateDistanceText, TimeUnits } from '@toss/date';
import { Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { getNotionNodeByUrl } from '@/hooks/useNotion';
import { notionNodeToJson } from '@/utils/notion';

import {
    Article,
    ContentContainer,
    CoverImage,
    List,
    Section,
    Small,
    Title
} from './PostPreview.styles';

interface PostProps {
    post: Queries.Notion;
}

const Post = ({ post }: PostProps) => {
    const content = notionNodeToJson(post);
    const thumbnail = content.cover[content.cover.type].url;

    const startDate = new Date(post.createdAt);
    const endDate = new Date();
    const distance = getDateDistance(startDate, endDate);
    const distanceText = getDateDistanceText(distance, {
        separator: ' ',
        days: (timeUnits: TimeUnits) => true,
        hours: (timeUnits: TimeUnits) => false,
        minutes: (timeUnits: TimeUnits) => false,
        seconds: (timeUnits: TimeUnits) => false
    });

    return (
        <List>
            <Link to={`/${post.title}`} itemProp="url">
                <Article itemScope itemType="http://schema.org/Article">
                    {thumbnail ? (
                        <CoverImage src={thumbnail} alt={post.title} />
                    ) : (
                        <></>
                    )}
                    <ContentContainer>
                        <header>
                            <h2>
                                <Title itemProp="headline">{post.title}</Title>
                            </h2>
                        </header>
                        <Section>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: content.properties.description.rich_text
                                        .map((richText) => richText.plain_text)
                                        .join('')
                                }}
                                itemProp="description"
                            />
                        </Section>
                        <Small>{distanceText} 전에 작성됨</Small>
                    </ContentContainer>
                </Article>
            </Link>
        </List>
    );
};

export default Post;
