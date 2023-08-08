import * as React from 'react';
import { Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import {
    Article,
    ContentContainer,
    CoverImage,
    List,
    Section,
    Small,
    Title
} from './PostPreview.styles';
import { getDateDistance, getDateDistanceText, TimeUnits } from '@toss/date';

interface PostProps {
    post: Queries.IndexPageQuery['allContentfulPost']['nodes'][0];
}

const Post = ({ post }: PostProps) => {
    const startDate = new Date(post.createdAt);
    const endDate = new Date();

    const distance = getDateDistance(startDate, endDate);
    const distanceText = getDateDistanceText(distance, {
        separator: ' ',
        days: (timeUnits: TimeUnits) => true,
        // Condition to check if `hours` is included in the string
        // @default t => t.hours > 0
        hours: (timeUnits: TimeUnits) => false,
        // Condition to check if `minutes` is included in the string
        // @default t => t.minutes > 0
        minutes: (timeUnits: TimeUnits) => false,
        // Condition to check if `seconds` is included in the string
        // @default t => t.seconds > 0
        seconds: (timeUnits: TimeUnits) => false
    });

    return (
        <List>
            <Link to={`${post.category.type}/${post.title}`} itemProp="url">
                <Article itemScope itemType="http://schema.org/Article">
                    {post.thumbnail && (
                        <CoverImage
                            image={getImage(post.thumbnail.gatsbyImageData)}
                            alt={post.title}
                        />
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
                                    __html: post.description.description
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
