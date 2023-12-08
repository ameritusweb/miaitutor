import React from 'react';
import * as marked from 'marked';

interface MarkdownViewerProps {
    content: string; // Markdown content as a string
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ content }) => {
    const htmlContent = marked.parse(content);

    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
};

export default MarkdownViewer;
