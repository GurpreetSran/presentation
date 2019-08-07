import React from 'react';

import { data } from '../data/chart';

import { Chart, Geom, Axis, Tooltip, Label, Legend } from 'bizcharts';
import DataSet from '@antv/data-set';

const ds = new DataSet();
const dv = ds.createView().source(data);
dv.transform({
  type: 'fold',
  fields: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.'],
  key: 'months',
  value: 'performance'
});

const BaseChart = () => (
  <div>
    <Chart height={400} data={dv} forceFit>
      <Axis />
      <Axis />
      <Legend />
      <Tooltip
        crosshairs={{
          type: 'y'
        }}
      />
      <Geom
        type="interval"
        position="months*performance"
        color={'name'}
        adjust={[
          {
            type: 'dodge',
            marginRatio: 1 / 32
          }
        ]}
      >
        <Label
          content="performance"
          formatter={val => Number(val).toFixed(0)}
        />
      </Geom>
    </Chart>
  </div>
);

export default BaseChart;
