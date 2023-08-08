import React from 'react';
import styled from 'styled-components';

const EmojiText = styled.span`
    font-family: 'TossFaceFontMac';
`;

const Emoji = ({ text }: { text: string }) => {
    return <EmojiText>{text}</EmojiText>;
};

export default Emoji;
