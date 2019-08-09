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
          showFullscreenControl={true}
          autoplay={true}
          transition={['zoom']}
          transitionDuration={500}
          theme={theme}
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
            <Text size={6} textColor="secondary">
              <Heading size={6}>Dwell Time Index - Uniques</Heading>
            </Text>
            <Table data={table1data} columns={table1columns} />
          </BaseSlide>
          <BaseSlide>
            <Text size={6} textColor="secondary">
              <Heading size={6}>Dwell Time Index - Today</Heading>
            </Text>
            <Table data={table2data} columns={table2columns} />
          </BaseSlide>
          <BaseSlide>
            <Heading size={6}>Google Web Traffic - Weekly</Heading>
            <Chart />
          </BaseSlide>
        </Deck>
      </div>
    );
  }
}
