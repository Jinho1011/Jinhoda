import * as React from 'react';
import { NParagraph } from '@components/Post/notion';
import { TextBlock } from '@types';

interface NHeading1Props {
    head1?: TextBlock;
}

export default function NHeading1({ head1 }: NHeading1Props) {
    return (
        <>
            {head1 && (
                <h1>
                    <NParagraph paragraph={head1} tagName="h1" />
                </h1>
            )}
        </>
    );
}
