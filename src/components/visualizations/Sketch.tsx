import React from 'react';
import Rough from 'roughjs/bin/rough';

interface SketchProps {
    data: any;
}

const Sketch: React.FC<SketchProps> = ({ data }) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            if (context) {
                const roughCanvas = Rough.canvas(canvas);
                // Example: Draw a rough rectangle
                roughCanvas.rectangle(10, 10, 100, 100, { stroke: 'blue', fill: 'red' });
                // Additional sketch drawing based on data
            }
        }
    }, [data]);

    return <canvas ref={canvasRef} width={400} height={400}></canvas>;
};

export default Sketch;
