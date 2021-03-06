import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import * as moment from 'moment';

const DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSZ';
const POLLING_INTERVAL = 600000; // 10 mins

const currentWeek = moment().startOf('isoWeek');
const last4weeks = moment()
  .startOf('isoWeek')
  .subtract(4, 'week')
  .add(1, 'hour')
  .format(DATE_FORMAT);

const lastOneWeek = moment()
  .subtract(1, 'week')
  .format(DATE_FORMAT);

const currentDate = moment().format(DATE_FORMAT);
const startOfDay = moment()
  .startOf('day')
  .format(DATE_FORMAT);

const TOP_ARTICLES_BY_DTI = gql`
  query($activityPeriod: activityPeriodInput) {
    report(publication: TIMES, activityPeriod: $activityPeriod) {
      lastUpdated
      articles(orderBy: { metric: DWELL_TIME_INDEX }, size: 5) {
        edges {
          node {
            id
            headline
          }
          metrics {
            uniqueVisitors {
              total
            }
            dwellTimeIndex {
              total
            }
          }
        }
      }
    }
  }
`;

const GOOGLE_TRAFFIC = gql`
  query($activityPeriod: activityPeriodInput) {
    report(publication: TIMES, activityPeriod: $activityPeriod) {
      dimensions {
        activityPeriodTimeSeries(interval: "week") {
          edges {
            node {
              id
            }
            dimensions {
              referrerDomainGroupHit(filter: { id: "Google" }) {
                edges {
                  metrics {
                    pageViews {
                      total
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export function fetchGoggleData() {
  const { loading, error, data } = useQuery(GOOGLE_TRAFFIC, {
    variables: {
      activityPeriod: {
        from: last4weeks,
        to: currentWeek
      }
    },
    pollInterval: POLLING_INTERVAL
  });
  if (loading || error) {
    return false;
  } else {
    return data.report.dimensions.activityPeriodTimeSeries.edges.map(list => ({
      total:
        list.dimensions.referrerDomainGroupHit.edges[0].metrics.pageViews.total,
      date: list.node.id
    }));
  }
}

export function fecthArticlesDataForToday() {
  const { loading, error, data } = useQuery(TOP_ARTICLES_BY_DTI, {
    variables: {
      activityPeriod: {
        from: startOfDay,
        to: currentDate
      }
    },
    pollInterval: POLLING_INTERVAL
  });

  if (loading || error) {
    return false;
  } else {
    const articles = data.report.articles.edges.map(list => ({
      headline: list.node.headline,
      totalDwellTimeIndex: list.metrics.dwellTimeIndex.total,
      totalReaders: list.metrics.uniqueVisitors.total
    }));
    articles.lastUpdated = data.report.lastUpdated;
    return articles;
  }
}

export function fecthArticlesDataForLastWeek() {
  const { loading, error, data } = useQuery(TOP_ARTICLES_BY_DTI, {
    variables: {
      activityPeriod: {
        from: lastOneWeek,
        to: currentDate
      }
    },
    pollInterval: POLLING_INTERVAL
  });

  if (loading || error) {
    return false;
  } else {
    return data.report.articles.edges.map(list => ({
      headline: list.node.headline,
      totalDwellTimeIndex: list.metrics.dwellTimeIndex.total,
      totalReaders: parseInt(
        list.metrics.uniqueVisitors.total,
        10
      ).toLocaleString()
    }));
  }
}
