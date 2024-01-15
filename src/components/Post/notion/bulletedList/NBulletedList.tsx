import * as React from 'react';
import Contents from '@components/Post/Content';
import { NParagraph } from '@components/Post/notion';
import { BulletedListItemChildren } from '@types';

interface NBulletedListProps {
    bulletedListItem: BulletedListItemChildren;
}

export default function NBulletedList({
    bulletedListItem
}: NBulletedListProps) {
    const { has_children, children } = bulletedListItem;

    return (
        <>
            <NParagraph paragraph={bulletedListItem.bulleted_list_item} />
            {has_children && children?.length > 0 && (
                <Contents childrens={children} />
            )}
        </>
    );
}
