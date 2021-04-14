import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = (props) => {
    return (
        <div className="chart">
            <h2 className="chart__title">Price in last 7d ($)</h2>
            <AreaChart 
                width={1500} height={350} data={props.priceHistoryObj}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="price" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
        </div>
    );
}
 
export default Chart;