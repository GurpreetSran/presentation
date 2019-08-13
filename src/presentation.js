// Import React
import React from 'react';

import Chart from './components/Chart';
import Table from './components/DataTable';

import '../src/styles.css';
import 'antd/dist/antd.css';

import { Deck, Heading } from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import BaseSlide from './components/Slide';

import bulb from './assets/creative.svg';

import { useQuery } from '@apollo/react-hooks';
import { TOP_ARTICLES_BY_DTI } from './queries';

import {
  table1data,
  table2data,
  table1columns,
  table2columns
} from './data/table';

// Require CSS
require('normalize.css');

function fecthData() {
  const { loading, error, data } = useQuery(TOP_ARTICLES_BY_DTI, {
    variables: {
      activityPeriod: {
        from: '2019-08-11T00:00:00.000Z',
        to: '2019-08-12T00:00:00.000Z'
      }
    }
  });

  if (!loading) {
    const articles = data.report.articles.edges.map(list => ({
      headline: list.node.headline,
      totalDwellTimeIndex: list.metrics.dwellTimeIndex.total,
      totalReaders: list.metrics.uniqueVisitors.total
    }));
    console.log(articles);
  }
}

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

const Presentation = () => {
  fecthData();
  return (
    <div>
      <Deck
        controls={false}
        autoplay={false}
        autoplayDuration={10000}
        showFullscreenControl={true}
        transition={['zoom']}
        theme={theme}
        contentWidth="90%"
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
};

export default Presentation;
