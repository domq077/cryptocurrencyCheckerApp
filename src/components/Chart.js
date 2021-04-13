import React from 'react';
import { Area, AreaChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = (props) => {
    return (
        <div>
            {/* // <LineChart width={1200} height={300} data={priceHistoryObj} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            //     <Line type="monotone" dataKey="price" stroke="#8884d8" />
            //     <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            //     <XAxis dataKey="name" />
            //     <YAxis />
            //     <Tooltip />
            // </LineChart> */}

            <AreaChart 
                width={730} height={250} data={props.priceHistoryObj}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
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