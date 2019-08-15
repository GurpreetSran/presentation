// Import React
import React from 'react';
import Chart from './components/Chart';
import Table from './components/DataTable';
import { Deck, Heading } from 'spectacle';
import '../src/styles.css';

import createTheme from 'spectacle/lib/themes/default';
import BaseSlide from './components/Slide';
import bulb from './assets/creative.svg';

import {
  fecthArticlesDataForLastWeek,
  fecthArticlesDataForToday,
  fetchGoggleData
} from './queries/index';

import { DTIUnique1Day, DTIUnique7Days } from './data/table';

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

const Presentation = () => {
  const chartData = fetchGoggleData();
  const articlesData = fecthArticlesDataForToday();
  const lastWeekArticles = fecthArticlesDataForLastWeek();
  const lastUpdatedDate = articlesData.lastUpdated;

  return (
    <div>
      <Deck
        controls={false}
        autoplay={false}
        autoplayDuration={5000}
        showFullscreenControl={true}
        transition={['zoom']}
        theme={theme}
        contentWidth="90%"
      >
        <BaseSlide lastUpdatedDate={lastUpdatedDate}>
          <div className="didyouknow">
            <img alt="" src={bulb} width="100px" />
            <Heading bold={false} className="didyouknow" size={4}>
              Did you know?
            </Heading>
          </div>
          <Heading bold={false} size={3}>
            We now have over 300,000 digital only subscribers.
          </Heading>
        </BaseSlide>
        <BaseSlide lastUpdatedDate={lastUpdatedDate}>
          <Heading bold={false} size={4}>
            Dwell Time Index
          </Heading>
          <Heading bold={false} size={6}>
            Top Articles in News the Past 7 Days
          </Heading>
          <Table columns={DTIUnique7Days} data={lastWeekArticles} />
        </BaseSlide>
        <BaseSlide lastUpdatedDate={lastUpdatedDate}>
          <Heading bold={false} size={4}>
            Dwell Time Index
          </Heading>
          <Heading bold={false} size={6}>
            Top Articles Today
          </Heading>
          <Table columns={DTIUnique1Day} data={articlesData} />
        </BaseSlide>
        <BaseSlide lastUpdatedDate={lastUpdatedDate}>
          <Heading bold={false} size={4}>
            Google Traffic
          </Heading>
          <Heading bold={false} size={6}>
            Weekly Unique Visirors Referred from Google
          </Heading>
          <Chart data={chartData} size={100} type="interval" />
        </BaseSlide>
        <BaseSlide lastUpdatedDate={lastUpdatedDate}>
          <Heading bold={false} size={4}>
            Google Traffic
          </Heading>
          <Heading bold={false} size={6}>
            Weekly Unique Visitors Referred from Google
          </Heading>
          <Chart data={chartData} size={5} type="line" />
        </BaseSlide>
      </Deck>
    </div>
  );
};

export default Presentation;
