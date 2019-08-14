import React from 'react';
import * as moment from 'moment';

const Footer = ({ lastUpdatedDate }) => {
  if (!lastUpdatedDate) {
    return null;
  }
  const time = moment(lastUpdatedDate).format('HH:mm');
  return (
    <div>
      Last updated {moment(lastUpdatedDate).format('dddd Do MMMM')} at {time}
    </div>
  );
};

export default Footer;
