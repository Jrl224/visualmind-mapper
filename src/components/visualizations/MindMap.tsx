
import React from 'react';

interface Node {
    id: number;
    label: string;
}

interface Edge {
    source: number;
    target: number;
}

interface MindMapProps {
    data: {
        nodes: Node[];
        edges: Edge[];
    };
}

const MindMap: React.FC<MindMapProps> = ({ data }) => {
    return (
        <div className="mindmap-container w-full h-full flex items-center justify-center">
            <svg width="100%" height="100%" viewBox="0 0 800 400">
                {/* Draw edges first so they appear behind nodes */}
                {data.edges.map((edge, index) => {
                    const sourceNode = data.nodes.find(n => n.id === edge.source);
                    const targetNode = data.nodes.find(n => n.id === edge.target);
                    
                    if (!sourceNode || !targetNode) return null;

                    // Calculate positions (simple radial layout)
                    const centerX = 400;
                    const centerY = 200;
                    const sourceX = sourceNode.id === 1 ? centerX : centerX + Math.cos(index * Math.PI / 2) * 150;
                    const sourceY = sourceNode.id === 1 ? centerY : centerY + Math.sin(index * Math.PI / 2) * 150;
                    const targetX = targetNode.id === 1 ? centerX : centerX + Math.cos(index * Math.PI / 2) * 150;
                    const targetY = targetNode.id === 1 ? centerY : centerY + Math.sin(index * Math.PI / 2) * 150;

                    return (
                        <line
                            key={`edge-${index}`}
                            x1={sourceX}
                            y1={sourceY}
                            x2={targetX}
                            y2={targetY}
                            stroke="#999"
                            strokeWidth="2"
                        />
                    );
                })}
                
                {/* Draw nodes */}
                {data.nodes.map((node, index) => {
                    // Calculate position (simple radial layout)
                    const centerX = 400;
                    const centerY = 200;
                    const x = node.id === 1 ? centerX : centerX + Math.cos(index * Math.PI / 2) * 150;
                    const y = node.id === 1 ? centerY : centerY + Math.sin(index * Math.PI / 2) * 150;

                    return (
                        <g key={`node-${node.id}`}>
                            <circle
                                cx={x}
                                cy={y}
                                r="40"
                                fill="white"
                                stroke="#333"
                                strokeWidth="2"
                            />
                            <text
                                x={x}
                                y={y}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize="14"
                                fill="#333"
                            >
                                {node.label}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
};

export default MindMap;
