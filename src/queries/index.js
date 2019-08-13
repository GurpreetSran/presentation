import gql from 'graphql-tag';

export const TOP_ARTICLES_BY_DTI = gql`
  query($activityPeriod: activityPeriodInput) {
    report(publication: TIMES, activityPeriod: $activityPeriod) {
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
