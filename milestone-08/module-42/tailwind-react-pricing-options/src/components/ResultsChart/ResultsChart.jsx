import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const resultData = [
    { "name": "Alice", "Physics": 85, "Chemistry": 78, "Math": 92 },
    { "name": "Bob", "Physics": 72, "Chemistry": 80, "Math": 75 },
    { "name": "Charlie", "Physics": 90, "Chemistry": 88, "Math": 94 },
    { "name": "David", "Physics": 68, "Chemistry": 65, "Math": 70 },
    { "name": "Eva", "Physics": 76, "Chemistry": 82, "Math": 79 },
    { "name": "Frank", "Physics": 95, "Chemistry": 90, "Math": 98 },
    { "name": "Grace", "Physics": 81, "Chemistry": 77, "Math": 85 },
    { "name": "Hannah", "Physics": 54, "Chemistry": 60, "Math": 58 },
    { "name": "Ian", "Physics": 88, "Chemistry": 85, "Math": 91 },
    { "name": "Julia", "Physics": 62, "Chemistry": 70, "Math": 65 }
]

const ResultsChart = () => {
    return (
        <div>
            <LineChart width={800} height={300} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="Math"></Line>
                <Line dataKey="Chemistry" stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultsChart;