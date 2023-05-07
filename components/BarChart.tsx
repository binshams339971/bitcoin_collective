import React, { useEffect, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SimpleBarChart = () => {
    const data = useMemo(() => ([
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ]), []);
    const [chartData, setChartData] = React.useState<any>([]);
    useEffect(() => {
        setChartData(data);
    }, [chartData, data]);
    return (
        <BarChart width={500} height={200} data={chartData} className='t-mt-16'>
            <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#747AA8' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#747AA8' }} />
            <Legend
                align="right"
                verticalAlign="middle"
                layout="vertical"
                iconType="circle"
                iconSize={5}
                style={{ fontSize: '12px' }}
            />
            <Bar dataKey="pv" fill="#4ABEDC" barSize={5} />
            <Bar dataKey="uv" fill="#7A98FF" barSize={5} />
        </BarChart>
    );
};

export default SimpleBarChart;