import React from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import { data, cols } from '../data/chart';

const SimpleChart = () => (
  <Chart width={600} height={400} data={data} scale={cols}>
    <Axis name="genre" title />
    <Axis name="sold" title />
    <Legend position="top" dy={-20} />
    <Tooltip />
    <Geom type="interval" position="genre*sold" color="genre" />
  </Chart>
);

export default SimpleChart;
