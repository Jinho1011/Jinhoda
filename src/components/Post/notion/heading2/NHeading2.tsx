import * as React from 'react';
import { NParagraph } from '@components/Post/notion';
import { TextBlock } from '@types';

interface NHeading2Props {
    head2?: TextBlock;
}

export default function NHeading2({ head2 }: NHeading2Props) {
    return (
        <>
            {head2 && (
                <h2>
                    <NParagraph paragraph={head2} />
                </h2>
            )}
        </>
    );
}
