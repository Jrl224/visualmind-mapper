import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart as ReactChart } from 'react-chartjs-2';

ChartJS.register(...registerables);

interface ChartProps {
    type: 'bar' | 'line' | 'pie' | 'doughnut';
    data: any;
    options?: any;
}

const Chart: React.FC<ChartProps> = ({ type, data, options }) => {
    return <ReactChart type={type} data={data} options={options} />;
};

export default Chart;
