import * as React from 'react';
import Contents from '@components/Post/Content';
import { NParagraph } from '@components/Post/notion';
import { NotionChildrenType, TextBlock } from '@types';

interface NQuoteProps {
    quote?: TextBlock;
    children: NotionChildrenType[];
}

export default function NQuote({ quote, children }: NQuoteProps) {
    return (
        <>
            {quote && (
                <blockquote className={`block-quote`}>
                    <NParagraph paragraph={quote} />
                    {children && children?.length > 0 && (
                        <Contents childrens={children} />
                    )}
                </blockquote>
            )}
        </>
    );
}
