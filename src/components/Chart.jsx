import React from 'react';

import { data } from '../data/chart';

import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from 'bizcharts';
import DataSet from '@antv/data-set';

const ds = new DataSet();
const dv = ds.createView().source(data);
dv.transform({
  type: 'fold',
  fields: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.'],
  // 展开字段集
  key: '月份',
  // key字段
  value: '月均降雨量' // value字段
});

const BaseChart = () => (
  <div>
    <Chart height={400} data={dv} forceFit>
      <Axis />

      <Tooltip
        crosshairs={{
          type: 'y'
        }}
      />
      <Geom
        type="interval"
        position="月份*月均降雨量"
        color={'name'}
        adjust={[
          {
            type: 'dodge',
            marginRatio: 1 / 32
          }
        ]}
      />
    </Chart>
  </div>
);

export default BaseChart;
