import * as React from 'react';
import { NParagraph } from '@components/Post/notion';
import { TextBlock } from '@types';

interface NHeading3Props {
    head3?: TextBlock;
}

export default function NHeading3({ head3 }: NHeading3Props) {
    return (
        <>
            {head3 && (
                <h3>
                    <NParagraph paragraph={head3} tagName="h3" />
                </h3>
            )}
        </>
    );
}
