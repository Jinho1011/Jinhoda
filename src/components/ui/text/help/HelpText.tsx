import * as React from 'react';

interface HelpTextProps {
    text: string;
    className?: string;
}

export default function HelpText({ text, className }: HelpTextProps) {
    return (
        <strong className={`my-help-text ${className || ''}`}>🧚 {text}</strong>
    );
}
