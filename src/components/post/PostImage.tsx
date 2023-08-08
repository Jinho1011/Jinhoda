import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import { AssetContainer, ImageDescription } from './Post.styles';

interface PostImage {
    image: IGatsbyImageData;
    description: string;
}

const PostImage = ({ image, description }: PostImage) => {
    return (
        <AssetContainer>
            <GatsbyImage
                image={image}
                alt={''}
                style={{ objectFit: 'cover' }}
            />
            {description && <ImageDescription>{description}</ImageDescription>}
        </AssetContainer>
    );
};

export default PostImage;
