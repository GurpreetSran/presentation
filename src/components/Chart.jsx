import React from 'react';

import { data } from '../data/chart';

import { Chart, Geom, Axis, Tooltip } from 'bizcharts';

const cols = {
  views: {
    min: 0,

    formatter(value) {
      var newValue = value;
      if (value >= 1000) {
        var suffixes = ['', 'k', 'm', 'b', 't'];
        var suffixNum = Math.floor(('' + value).length / 3);
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
          shortValue = parseFloat(
            (suffixNum !== 0
              ? value / Math.pow(1000, suffixNum)
              : value
            ).toPrecision(precision)
          );
          var dotLessShortValue = (shortValue + '').replace(
            /[^a-zA-Z 0-9]+/g,
            ''
          );
          if (dotLessShortValue.length <= 2) {
            break;
          }
        }
        if (shortValue % 1 !== 0) shortValue = shortValue.toFixed(1);
        newValue = shortValue + suffixes[suffixNum];
      }
      return newValue;
    }
  }
};

const BaseChart = () => (
  <div>
    <Chart animate={false} data={data} scale={cols} forceFit>
      <Axis
        name="week"
        label={{
          textStyle: { fill: '#283c4f' }
        }}
      />
      <Axis
        name="views"
        label={{
          textStyle: { fill: 'white' }
        }}
      />
      <Tooltip
        crosshairs={{ type: 'line' }}
        g2-tooltip={{
          marginTop: '-75px',
          marginLeft: '-25px',
          color: 'white',
          backgroundColor: '#283c4f',
          border: 'none',
          boxShadow: 'none'
        }}
      />
      <Geom size={4} type="interval" position="week*views" />
    </Chart>
    {/* <Chart height={400} data={dv} forceFit>
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
    </Chart> */}
  </div>
);

export default BaseChart;
