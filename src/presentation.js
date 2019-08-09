// Import React
import React from 'react';

import Chart from './components/Chart';
import Table from './components/DataTable';

import '../src/styles.css';
import 'antd/dist/antd.css';

import { Deck, Heading, Text } from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import BaseSlide from './components/Slide';

import bulb from './assets/creative.svg';

import {
  table1data,
  table2data,
  table1columns,
  table2columns
} from './data/table';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#1A374C',
    secondary: 'white',
    tertiary: 'white',
    quaternary: 'white'
  },
  {
    primary: 'Roboto',
    secondary: 'sans-serif'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <div>
        <Deck
          controls={false}
          autoplay={true}
          showFullscreenControl={true}
          transition={['zoom']}
          theme={theme}
          contentWidth="90%"
          transitionDuration={1000}
        >
          <BaseSlide>
            <div className="didyouknow">
              <img alt="" src={bulb} width="100px" />
              <br />
              <br />
              <Heading className="didyouknow" size={4}>
                Did you know?
              </Heading>
            </div>
            <Heading size={3}>
              We now have over 300,000 digital only subscribers.
            </Heading>
          </BaseSlide>
          <BaseSlide>
            <Heading size={4}>Dwell Time Index - Uniques</Heading>
            <br />
            <Table data={table1data} columns={table1columns} />
          </BaseSlide>
          <BaseSlide>
            <Heading size={4}>Dwell Time Index - Today</Heading>
            <br />
            <Table data={table2data} columns={table2columns} />
          </BaseSlide>
          <BaseSlide>
            <Heading size={4}>Google Web Traffic - Weekly</Heading>
            <br />
            <Chart />
          </BaseSlide>
        </Deck>
      </div>
    );
  }
}
