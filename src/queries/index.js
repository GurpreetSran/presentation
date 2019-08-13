import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

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
        activityPeriodTimeSeries(interval: "7d") {
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
        from: '2019-07-12T00:00:00.000Z',
        to: '2019-08-11T00:00:00.000Z'
      }
    }
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

export function fecthArticlesData() {
  const { loading, error, data } = useQuery(TOP_ARTICLES_BY_DTI, {
    variables: {
      activityPeriod: {
        from: '2019-08-11T00:00:00.000Z',
        to: '2019-08-12T00:00:00.000Z'
      }
    }
  });

  if (loading || error) {
    return false;
  } else {
    return data.report.articles.edges.map(list => ({
      headline: list.node.headline,
      totalDwellTimeIndex: list.metrics.dwellTimeIndex.total,
      totalReaders: list.metrics.uniqueVisitors.total
    }));
  }
}
