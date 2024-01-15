import * as React from 'react';
import Contents from '@components/Post/Content';
import { NParagraph } from '@components/Post/notion';
import { Callout, NotionChildrenType } from '@types';

interface NCalloutProps {
    callout: Callout;
    children: NotionChildrenType[];
}

export default function NCallout({ callout, children = [] }: NCalloutProps) {
    const icon = callout?.icon?.emoji;

    return (
        <>
            {callout && (
                <aside className={`block-callout`}>
                    {icon && <div className="icon-box">{icon}</div>}
                    <NParagraph paragraph={callout} />
                    {children && children?.length > 0 && (
                        <Contents childrens={children} />
                    )}
                </aside>
            )}
        </>
    );
}
