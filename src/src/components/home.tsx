import React from 'react';
import * as marked from 'marked';

interface HomeProps {
    content: string; // Markdown content as a string
}

const Home: React.FC<HomeProps> = ({ content }) => {
    const htmlContent = marked.parse(content);

    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
};

export default Home;
