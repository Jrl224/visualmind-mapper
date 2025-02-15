
import React from 'react';
import WordCloud from 'react-d3-cloud';

interface WordCloudProps {
    data: { text: string; value: number }[];
}

const WordCloudComponent: React.FC<WordCloudProps> = ({ data }) => {
    return <WordCloud data={data} />;
};

export default WordCloudComponent;
