import * as React from 'react';
// import { IconSingleArrow } from '@components/icon';
import Contents from '@components/Post/Content';
import { NParagraph } from '@components/Post/notion';
import { NotionChildrenType, TextBlock } from '@types';

interface NToggleProps {
    toggle: TextBlock;
    hasChild: boolean;
    childList: NotionChildrenType[];
}

export default function NToggle({ toggle, hasChild, childList }: NToggleProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            {toggle && (
                <details className="block-toggle">
                    <summary
                        className="toggle-title-box"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className={`icon-box ${isOpen ? 'open' : ''}`}>
                            {/* <IconSingleArrow direction="right" size={16} /> */}
                        </div>
                        <NParagraph paragraph={toggle} />
                    </summary>
                    <section className="toggle-content-box">
                        {isOpen && hasChild && childList?.length > 0 && (
                            <Contents childrens={childList} />
                        )}
                    </section>
                </details>
            )}
        </>
    );
}
