import * as React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
    oneDark,
    oneLight
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { NParagraph } from '@components/Post/notion';
import { Code } from '@types';
import { getPlainTextByRichText } from '@utils/notion';

import DarkThemeContext from '@/context/DarkTheme';

interface NCodeProps {
    code: Code;
}

export default function NCode({ code }: NCodeProps) {
    const codeString = getPlainTextByRichText(code.rich_text);
    const { isDarkMode } = React.useContext(DarkThemeContext);

    return (
        <figure
            className={`block-code ${code.caption && 'caption'} ${
                code.language && 'language'
            }`}
        >
            <SyntaxHighlighter
                language={code.language}
                style={isDarkMode ? oneDark : oneLight}
                showLineNumbers={false}
            >
                {codeString}
            </SyntaxHighlighter>
            {code.caption.length > 0 && (
                <figcaption className="caption">
                    <NParagraph richText={code.caption} />
                </figcaption>
            )}
        </figure>
    );
}
