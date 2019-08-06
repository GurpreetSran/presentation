// Import React
import React from 'react';

import Chart from './components/Chart';
import Table from './components/DataTable';

// import { DatePicker } from 'antd';
import '../src/styles.css';
import 'antd/dist/antd.css';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import BaseSlide from './components/Slide';

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
            <Chart />
          </BaseSlide>
          <BaseSlide>
            <Text size={6} textColor="secondary">
              Table
            </Text>
            <Table />
          </BaseSlide>
          <BaseSlide>
            <BlockQuote>
              <Quote>Example Quote</Quote>
              <Cite>Author</Cite>
            </BlockQuote>
          </BaseSlide>
        </Deck>
      </div>
    );
  }
}
