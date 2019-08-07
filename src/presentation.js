// Import React
import React from 'react';

import Chart from './components/Chart';
import Table from './components/DataTable';

// import { DatePicker } from 'antd';
import '../src/styles.css';
import 'antd/dist/antd.css';

// Import Spectacle Core tags
import { BlockQuote, Cite, Deck, Heading, Quote, Text } from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import BaseSlide from './components/Slide';

import bulb from './assets/creative.svg';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <div>
        <Deck
          showFullscreenControl="true"
          // autoplay="true"
          transition={['zoom']}
          // transitionDuration={500}
          theme={theme}
        >
          <BaseSlide>
            <div className="didyouknow">
              <img alt="" src={bulb} width="100px" />
              <Heading size="3">Did you know?</Heading>
            </div>
            <Heading size="6">
              Content to follow...Content to follow...Content to follow..Content
              to follow
            </Heading>
          </BaseSlide>
          <BaseSlide>
            <Heading size="6">Chart Title</Heading>
            <Chart />
          </BaseSlide>
          <BaseSlide>
            <Text size={6} textColor="secondary">
              <Heading size="6">Table Title</Heading>
            </Text>
            <Table />
          </BaseSlide>
          <BaseSlide>
            <BlockQuote>
              <Quote style={{ color: '#000' }}>
                Big data is at the foundation of all the megatrends that are
                happening.
              </Quote>
              <Cite>Chris Lynch</Cite>
            </BlockQuote>
          </BaseSlide>
        </Deck>
      </div>
    );
  }
}
