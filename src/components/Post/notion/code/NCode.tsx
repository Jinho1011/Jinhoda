import * as React from 'react';
// import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/light';
// import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { IconCopyLink } from '@components/icon';
import { NParagraph } from '@components/Post/notion';
// import useClipboard from '@src/hooks/useClipboard';
import { Code } from '@types';
import { getPlainTextByRichText } from '@utils/notion';

interface NCodeProps {
    code: Code;
}

export default function NCode({ code }: NCodeProps) {
    const codeString = getPlainTextByRichText(code.rich_text);

    return (
        <figure
            className={`block-code ${code.caption && 'caption'} ${
                code.language && 'language'
            }`}
        >
            <div className="code-header">
                <small className="language">{code.language}</small>
            </div>
            {codeString}
            {/* <SyntaxHighlighter
                language={code.language}
                style={vscDarkPlus}
                showLineNumbers={true}
            >
                {codeString}
            </SyntaxHighlighter> */}
            {code.caption.length > 0 && (
                <figcaption className="caption">
                    <NParagraph richText={code.caption} />
                </figcaption>
            )}
        </figure>
    );
}
