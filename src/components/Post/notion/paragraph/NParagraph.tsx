import * as React from 'react';
import { Linker } from '@components/ui';
import { Caption, RichText, TextBlock, TextItem } from '@types';

interface NParagraphProps {
    paragraph?: TextBlock;
    richText?: RichText | Caption;
    className?: string;
    tagName?: string;
}

export default function NParagraph({
    paragraph,
    richText,
    className,
    tagName
}: NParagraphProps) {
    const Tag = (tagName || 'p') as keyof JSX.IntrinsicElements;
    const blockTexts = paragraph?.rich_text || richText || [];
    if (blockTexts.length === 0) {
        return <br />;
    }
    return (
        <>
            {blockTexts && (
                <div className="block-paragraph">
                    {blockTexts.map((t: TextItem, i: number) => {
                        const classNames = ['block-paragraph-text'];
                        if (className) {
                            classNames.push(className);
                        }
                        if (t?.annotations?.color) {
                            classNames.push(t?.annotations?.color);
                        }
                        if (t?.href) {
                            return (
                                <Linker
                                    key={`block-paragraph-text-${i}`}
                                    url={t.href}
                                    target="_blank"
                                    aria-label={`링크 텍스트`}
                                >
                                    {t.plain_text}
                                </Linker>
                            );
                        }
                        if (t?.annotations?.bold) {
                            return (
                                <b
                                    key={`block-paragraph-text-${i}`}
                                    className={classNames.join(' ')}
                                >
                                    {t.plain_text}
                                </b>
                            );
                        }
                        if (t?.annotations?.italic) {
                            return (
                                <i
                                    key={`block-paragraph-text-${i}`}
                                    className={classNames.join(' ')}
                                >
                                    {t.plain_text}
                                </i>
                            );
                        }
                        if (t?.annotations?.strikethrough) {
                            return (
                                <s
                                    key={`block-paragraph-text-${i}`}
                                    className={classNames.join(' ')}
                                >
                                    {t.plain_text}
                                </s>
                            );
                        }
                        if (t?.annotations?.underline) {
                            return (
                                <u
                                    key={`block-paragraph-text-${i}`}
                                    className={classNames.join(' ')}
                                >
                                    {t.plain_text}
                                </u>
                            );
                        }
                        if (t?.annotations?.code) {
                            return (
                                <code
                                    key={`block-paragraph-text-${i}`}
                                    className={classNames.join(' ')}
                                >
                                    {t.plain_text}
                                </code>
                            );
                        }
                        const text = t.plain_text.replaceAll('\n', '<br/>');
                        return (
                            <React.Fragment key={`block-paragraph-text-${i}`}>
                                <Tag
                                    className={classNames.join(' ')}
                                    dangerouslySetInnerHTML={{ __html: text }}
                                />
                            </React.Fragment>
                        );
                    })}
                </div>
            )}
        </>
    );
}
