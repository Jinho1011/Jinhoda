import * as React from 'react';
import Contents from '@components/Post/Content';
import { NParagraph } from '@components/Post/notion';
import { NumberedListItemChildren } from '@types';

interface NNumberedListProps {
    numberedListItem: NumberedListItemChildren;
}

export default function NNumberedList({
    numberedListItem
}: NNumberedListProps) {
    const { has_children, children } = numberedListItem;
    return (
        <>
            <NParagraph paragraph={numberedListItem.numbered_list_item} />
            {has_children && children?.length > 0 && (
                <Contents childrens={children} />
            )}
        </>
    );
}
