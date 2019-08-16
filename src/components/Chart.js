import React from 'react';
import { Chart, Geom, Axis, Tooltip, Label } from 'bizcharts';
import * as moment from 'moment';

const dateFormat = 'Do MMM';

const cols = {
  total: {
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
  },
  date: {
    formatter: date =>
      `${moment(date).format(dateFormat)} - ${moment(date)
        .add(1, 'week')
        .subtract(1, 'day')
        .format(dateFormat)}`
  }
};

const BaseChart = ({ data, size, type }) => (
  <div>
    <Chart animate={false} data={data} scale={cols} width={1400} forceFit>
      <Axis
        name="date"
        label={{
          textStyle: { fill: '#fff', fontSize: '18' }
        }}
      />
      <Axis
        name="total"
        grid={false}
        label={{
          textStyle: { fill: 'white', fontSize: '24' }
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
      <Geom size={size} type={type} position="date*total">
        <Label textStyle={{ fill: '#fff', fontSize: '24' }} content="total" />
      </Geom>
    </Chart>
  </div>
);

export default BaseChart;
