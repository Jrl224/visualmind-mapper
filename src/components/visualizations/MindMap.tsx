
import React from 'react';
import { MindMap as ReactMindMap } from 'react-mindmap';

interface MindMapProps {
    data: any;
}

const MindMap: React.FC<MindMapProps> = ({ data }) => {
    return <ReactMindMap data={data} />;
};

export default MindMap;
