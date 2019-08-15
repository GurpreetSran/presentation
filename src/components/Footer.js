import React from 'react';
import * as moment from 'moment';

const Footer = ({ lastUpdatedDate }) => {
  if (!lastUpdatedDate) {
    return null;
  }
  const time = moment(lastUpdatedDate).format('HH:mm');
  return (
    <div className="footer">
      Source: Digital Subscriptions report from News Insights | Last updated:{' '}
      {moment(lastUpdatedDate).format('dddd Do MMMM')} at {time} | For more info
      visit news.co.uk/inca
    </div>
  );
};

export default Footer;
