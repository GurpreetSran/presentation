import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Redbox from 'redbox-react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Presentation from './presentation';

const client = new ApolloClient({
  uri: 'https://inca-api.news.co.uk/graphql'
});

const CustomErrorReporter = ({ error }) => <Redbox error={error} />;

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
};

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <ApolloProvider client={client}>
      <Presentation />
    </ApolloProvider>
  </AppContainer>,

  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./presentation', () => {
    const NextPresentation = require('./presentation').default;
    ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <ApolloProvider client={client}>
          <NextPresentation />
        </ApolloProvider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
