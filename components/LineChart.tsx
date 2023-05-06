import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', pv: 2400, amt: 2400 },
  { name: 'Feb', pv: 1398, amt: 2210 },
  { name: 'Mar', pv: 9800, amt: 2290 },
  { name: 'Apr', pv: 3908, amt: 2000 },
  { name: 'May', pv: 4800, amt: 2181 },
  { name: 'Jun', pv: 3800, amt: 2500 },
  { name: 'Jul', pv: 4300, amt: 2100 },
];

const Chart = () => {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid stroke="none" strokeWidth={0} />
      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#747AA8' }}/>
      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#747AA8' }}/>
      <Tooltip />
      <Line type="monotone" dataKey="pv" stroke="#4567D2" activeDot={{ r: 8 }} dot={false} />
    </LineChart>
  );
};

export default Chart;